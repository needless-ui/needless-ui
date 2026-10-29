/**
 * iCalendar files (RFC 5545), which every calendar app imports and exports:
 * `nuiSchedulerToIcs()` writes events into one, and `nuiSchedulerFromIcs()` reads
 * the events out of one.
 */
import { nuiAddDays, type NuiDate, type NuiDateTime } from '@needless-ui/angular';
import { type NuiSchedulerEvent, nuiSchedulerMinutes, nuiSchedulerValue } from './layout';
import { isoValue } from './recurrence';

/** What an imported event keeps beside its times and title. */
export interface NuiSchedulerIcsData {
  description?: string;
  location?: string;
  url?: string;
}

export interface NuiSchedulerIcsOptions<T> {
  /** The calendar's name, which apps show when they import it. */
  name?: string;
  /** What to say about each event beyond its title. */
  details?: (event: NuiSchedulerEvent<T>) => NuiSchedulerIcsData | undefined;
  /** When the file is written, for its stamps. By default, now. */
  stamp?: Date;
}

/**
 * Writes events as an iCalendar file, for people to add to their own calendars.
 * Times are written as they are, without a time zone, as the scheduler holds them;
 * repeat rules and their exceptions go along.
 */
export function nuiSchedulerToIcs<T>(
  events: readonly NuiSchedulerEvent<T>[],
  options: NuiSchedulerIcsOptions<T> = {},
): string {
  const stamp = (options.stamp ?? new Date()).toISOString().replace(/[-:]|\.\d+/g, '');
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Needless UI//Scheduler//EN',
    'CALSCALE:GREGORIAN',
  ];
  if (options.name) lines.push(`X-WR-CALNAME:${text(options.name)}`);
  for (const event of events) {
    const allDay = event.allDay ?? event.start.length === 10;
    const start = allDay ? event.start.slice(0, 10) : event.start;
    lines.push('BEGIN:VEVENT', `UID:${text(event.id)}`, `DTSTAMP:${stamp}`);
    if (allDay) {
      const end = event.end.slice(0, 10) < start ? start : event.end.slice(0, 10);
      lines.push(
        `DTSTART;VALUE=DATE:${compact(start)}`,
        // The file's end is the day after the last one.
        `DTEND;VALUE=DATE:${compact(nuiAddDays(end, 1))}`,
      );
    } else {
      lines.push(`DTSTART:${compact(start)}`, `DTEND:${compact(event.end)}`);
    }
    lines.push(`SUMMARY:${text(event.title)}`);
    if (event.rrule) lines.push(`RRULE:${event.rrule.trim().replace(/^RRULE:/i, '')}`);
    const skipped = (event.exdate ?? []).flatMap((value) => {
      const iso = isoValue(value);
      if (!iso) return [];
      // A whole day skipped of a timed event is its occurrence at the start's time.
      return [allDay ? iso.slice(0, 10) : iso.length === 10 ? `${iso}${start.slice(10)}` : iso];
    });
    if (skipped.length) {
      lines.push(`EXDATE${allDay ? ';VALUE=DATE' : ''}:${skipped.map(compact).join(',')}`);
    }
    const details = options.details?.(event);
    if (details?.description) lines.push(`DESCRIPTION:${text(details.description)}`);
    if (details?.location) lines.push(`LOCATION:${text(details.location)}`);
    if (details?.url) lines.push(`URL:${details.url}`);
    lines.push('END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return `${lines.map(fold).join('\r\n')}\r\n`;
}

export interface NuiSchedulerIcsReadOptions {
  /**
   * The IANA time zone to show times in, for times a file gives in UTC or in a
   * zone of its own. By default, the reader's. Times without a zone stay as written.
   */
  timeZone?: string;
}

interface Property {
  params: Map<string, string>;
  value: string;
}

/**
 * Reads the events out of an iCalendar file, such as one exported from another
 * calendar. Times in UTC or in a named zone move to `timeZone`; repeat rules,
 * their exceptions, and changed or cancelled occurrences come along.
 */
export function nuiSchedulerFromIcs(
  source: string,
  options: NuiSchedulerIcsReadOptions = {},
): NuiSchedulerEvent<NuiSchedulerIcsData>[] {
  const zone = options.timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
  const components: Map<string, Property[]>[] = [];
  let current: Map<string, Property[]> | null = null;
  // Components inside an event, such as alarms, are skipped.
  let depth = 0;
  for (const line of source
    .replace(/\r\n?/g, '\n')
    .replace(/\n[ \t]/g, '')
    .split('\n')) {
    if (!line.trim()) continue;
    const { name, params, value } = contentLine(line);
    if (name === 'BEGIN') {
      if (current) depth++;
      else if (value.toUpperCase() === 'VEVENT') current = new Map();
    } else if (name === 'END') {
      if (current && depth) depth--;
      else if (current && value.toUpperCase() === 'VEVENT') {
        components.push(current);
        current = null;
      }
    } else if (current && !depth) {
      const list = current.get(name);
      if (list) list.push({ params, value });
      else current.set(name, [{ params, value }]);
    }
  }

  // A repeating series shows its first time of day all year, wherever it's read; its
  // exceptions and changed occurrences are read with the series' own shift to match.
  const series = new Map<string, Series>();
  for (const component of components) {
    const dtstart = component.get('DTSTART')?.[0];
    const start = dtstart && moment(dtstart);
    const uid = unescape(component.get('UID')?.[0]?.value.trim() ?? '');
    if (!start || !uid || !component.has('RRULE') || component.has('RECURRENCE-ID')) continue;
    if (series.has(uid)) continue;
    const shift = start.zone
      ? nuiSchedulerMinutes(place(start, zone)) - nuiSchedulerMinutes(start.wall)
      : 0;
    series.set(uid, { start, shift });
  }

  const events: NuiSchedulerEvent<NuiSchedulerIcsData>[] = [];
  const parents = new Map<string, NuiSchedulerEvent<NuiSchedulerIcsData>>();
  const used = new Set<string>();
  const overrides: { uid: string; id: NuiDate | NuiDateTime }[] = [];
  for (const [index, component] of components.entries()) {
    const first = (key: string) => component.get(key)?.[0];
    const begin = first('DTSTART') && moment(first('DTSTART')!);
    if (!begin) continue;
    const uid = unescape(first('UID')?.value.trim() ?? '') || `event-${index + 1}`;
    const own = series.get(uid);
    const original = first('RECURRENCE-ID') && moment(first('RECURRENCE-ID')!);
    const recurrenceId = original ? align(original, own, zone) : undefined;
    const cancelled = first('STATUS')?.value.trim().toUpperCase() === 'CANCELLED';
    if (recurrenceId) overrides.push({ uid, id: recurrenceId });
    if (cancelled) continue;

    const allDay = begin.date;
    const start = place(begin, zone);
    let end: NuiDate | NuiDateTime = start;
    const dtend = first('DTEND') && moment(first('DTEND')!);
    const duration = first('DURATION') && minutes(first('DURATION')!.value);
    if (allDay) {
      // The file's end is the day after the last one.
      if (dtend) end = nuiAddDays(dtend.wall.slice(0, 10), -1);
      else if (duration) end = nuiAddDays(start, Math.max(1, Math.round(duration / 1440)) - 1);
      if (end < start) end = start;
    } else if (dtend && !dtend.date) {
      end = place(dtend, zone);
    } else if (duration !== undefined && duration !== null) {
      end = nuiSchedulerValue(nuiSchedulerMinutes(start) + duration);
    }

    let id = recurrenceId ? `${uid}@${recurrenceId}` : uid;
    for (let n = 2; used.has(id); n++) id = `${uid}-${n}`;
    used.add(id);
    const event: NuiSchedulerEvent<NuiSchedulerIcsData> = {
      id,
      title: unescape(first('SUMMARY')?.value ?? ''),
      start,
      end,
      allDay,
    };
    if (recurrenceId) event.recurrenceId = recurrenceId;
    const rrule = first('RRULE')?.value.trim();
    if (rrule && !original) event.rrule = untilIn(rrule, own, zone);
    const exdate = (component.get('EXDATE') ?? []).flatMap((property) =>
      property.value.split(',').flatMap((value) => {
        const skipped = moment({ params: property.params, value });
        return skipped ? [align(skipped, own, zone)] : [];
      }),
    );
    if (exdate.length && !original) event.exdate = exdate;
    const data: NuiSchedulerIcsData = {};
    const description = first('DESCRIPTION')?.value;
    const location = first('LOCATION')?.value;
    const url = first('URL')?.value.trim();
    if (description) data.description = unescape(description);
    if (location) data.location = unescape(location);
    if (url) data.url = url;
    if (Object.keys(data).length) event.data = data;
    events.push(event);
    if (!original && !parents.has(uid)) parents.set(uid, event);
  }
  // A changed or cancelled occurrence takes the place of the one its series gives.
  for (const { uid, id } of overrides) {
    const parent = parents.get(uid);
    if (parent?.rrule && !parent.exdate?.includes(id)) {
      parent.exdate = [...(parent.exdate ?? []), id];
    }
  }
  return events;
}

/** Splits `NAME;PARAM=value;OTHER="a:b":value` into its name, parameters and value. */
function contentLine(line: string): { name: string; params: Map<string, string>; value: string } {
  let quoted = false;
  let colon = -1;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') quoted = !quoted;
    else if (line[i] === ':' && !quoted) {
      colon = i;
      break;
    }
  }
  const head = colon < 0 ? line : line.slice(0, colon);
  const value = colon < 0 ? '' : line.slice(colon + 1);
  const [name, ...rest] = head.match(/(?:[^;"]|"[^"]*")+/g) ?? [''];
  const params = new Map<string, string>();
  for (const param of rest) {
    const at = param.indexOf('=');
    if (at > 0)
      params.set(param.slice(0, at).toUpperCase(), param.slice(at + 1).replace(/^"|"$/g, ''));
  }
  return { name: name.trim().toUpperCase(), params, value };
}

/** A date, or a date and time as written, with the zone it's written in (none: floating). */
interface Moment {
  wall: string;
  zone: string | null;
  date: boolean;
}

/** A repeating event's first start, and how many minutes the reader's zone moves its clock. */
interface Series {
  start: Moment;
  shift: number;
}

/** A property such as DTSTART, read as written. */
function moment(property: Property): Moment | null {
  const text = property.value.trim();
  const iso = isoValue(text);
  if (!iso) return null;
  if (iso.length === 10 || property.params.get('VALUE')?.toUpperCase() === 'DATE') {
    return { wall: iso.slice(0, 10), zone: null, date: true };
  }
  return {
    wall: iso,
    zone: /z$/i.test(text) ? 'UTC' : (property.params.get('TZID') ?? null),
    date: false,
  };
}

/** A moment as the clock reads it in `zone`. */
function place(moment: Moment, zone: string): string {
  return moment.zone ? convert(moment.wall, moment.zone, zone) : moment.wall;
}

/**
 * A moment that names an occurrence of a series (an exception, a changed one, its
 * UNTIL), as the series shows it: in the series' zone, moved by the series' shift,
 * since its occurrences keep the time of day of the first.
 */
function align(moment: Moment, series: Series | undefined, zone: string): string {
  if (moment.date) return moment.wall;
  if (!series || series.start.date || !series.start.zone) return place(moment, zone);
  const wall =
    moment.zone && moment.zone !== series.start.zone
      ? convert(moment.wall, moment.zone, series.start.zone)
      : moment.wall;
  return nuiSchedulerValue(nuiSchedulerMinutes(wall) + series.shift);
}

/** A rule's UNTIL in UTC, as its series shows it, so it compares with the times shown. */
function untilIn(rule: string, series: Series | undefined, zone: string): string {
  return rule.replace(/UNTIL=([0-9T]+Z)/i, (match, until: string) => {
    const iso = isoValue(until);
    if (!iso || iso.length === 10) return match;
    return `UNTIL=${compact(align({ wall: iso, zone: 'UTC', date: false }, series, zone))}`;
  });
}

/** A wall-clock time in one IANA zone, as the clock reads in another. */
function convert(wall: NuiDateTime, from: string, to: string): NuiDateTime {
  try {
    const naive = nuiSchedulerMinutes(wall) * 60_000;
    // The offset at the guess, then at the answer, which differs across a change of clocks.
    let utc = naive - offset(naive, from);
    utc = naive - offset(utc, from);
    return clock(utc, to);
  } catch {
    // A zone the browser doesn't know, such as a Windows name: the time as written.
    return wall;
  }
}

/** How far a zone's clocks are ahead of UTC at a moment, in milliseconds. */
function offset(utc: number, zone: string): number {
  return nuiSchedulerMinutes(clock(utc, zone)) * 60_000 - Math.floor(utc / 60_000) * 60_000;
}

function clock(utc: number, zone: string): NuiDateTime {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: zone,
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
      .formatToParts(new Date(utc))
      .map((part) => [part.type, part.value]),
  );
  return `${parts['year'].padStart(4, '0')}-${parts['month']}-${parts['day']}T${parts['hour']}:${parts['minute']}`;
}

/** Minutes in an iCalendar duration such as `PT1H30M` or `P1D`. */
function minutes(text: string): number | null {
  const match = /^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/i.exec(
    text.trim(),
  );
  if (!match) return null;
  const [, sign, weeks, days, hours, mins, seconds] = match.map((part) => part ?? '0');
  const total = +weeks * 10_080 + +days * 1440 + +hours * 60 + +mins + Math.floor(+seconds / 60);
  return sign === '-' ? -total : total;
}

/** `2026-09-25` as `20260925`, and `2026-09-25T09:00` as `20260925T090000`. */
function compact(value: string): string {
  const date = value.slice(0, 10).replace(/-/g, '');
  return value.length > 10 ? `${date}T${value.slice(11, 16).replace(':', '')}00` : date;
}

function text(value: string): string {
  return value.replace(/[\\;,]/g, (char) => `\\${char}`).replace(/\r?\n/g, '\\n');
}

function unescape(value: string): string {
  return value.replace(/\\([\\;,nN])/g, (_, char: string) =>
    char === 'n' || char === 'N' ? '\n' : char,
  );
}

/** Folds a line longer than 75 bytes into lines that go on after a space. */
function fold(line: string): string {
  let folded = '';
  let size = 0;
  for (const char of line) {
    const code = char.codePointAt(0)!;
    const bytes = code < 0x80 ? 1 : code < 0x800 ? 2 : code < 0x10000 ? 3 : 4;
    if (size + bytes > 75) {
      folded += '\r\n ';
      size = 1;
    }
    folded += char;
    size += bytes;
  }
  return folded;
}
