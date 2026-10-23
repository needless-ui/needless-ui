import {
  nuiAddDays,
  nuiAddMonths,
  type NuiDate,
  type NuiDateTime,
  nuiDayNumber,
  nuiFromDayNumber,
  nuiMinutes,
  nuiMonthWeeks,
  nuiStartOfWeek,
  nuiTime,
  type NuiTime,
} from '@needless-ui/angular';
import { isoValue, nuiSchedulerRepeat, nuiSchedulerRule } from './recurrence';

/**
 * What the scheduler shows: a month, a week, a day, a list of what's coming, or a
 * timeline with a row for each resource.
 */
export type NuiSchedulerView = 'month' | 'week' | 'day' | 'agenda' | 'timeline';

/** The days a timeline shows: a day by its hours, or a week or a month by its days. */
export type NuiSchedulerTimelineSpan = 'day' | 'week' | 'month';

/** The palette of an event. */
export type NuiSchedulerTone = 'accent' | 'neutral' | 'success' | 'warning' | 'danger';

export interface NuiSchedulerEvent<T = unknown> {
  id: string;
  title: string;
  /** A date and time, or a date for an all-day event. */
  start: NuiDateTime | NuiDate;
  /**
   * For a timed event, the moment it ends (not included); for an all-day event,
   * its last day (included).
   */
  end: NuiDateTime | NuiDate;
  /** By default, whether `start` is a date without a time. */
  allDay?: boolean;
  tone?: NuiSchedulerTone;
  /** Any CSS color, for its stripe and tint. It wins over `tone`; the text keeps its color. */
  color?: string;
  /** Classes to style it with. */
  class?: string;
  /** The resources it belongs to, such as a room or the people in it. */
  resource?: string | readonly string[];
  /** A repeat rule from RFC 5545, such as `FREQ=WEEKLY;BYDAY=MO,WE`: it repeats from its start. */
  rrule?: string;
  /** Starts of occurrences that don't happen: dates, or dates and times. */
  exdate?: readonly string[];
  /**
   * On an occurrence of a repeating event, as the scheduler reports it: the start
   * its rule gave it, as iCalendar's RECURRENCE-ID names an occurrence.
   */
  recurrenceId?: NuiDateTime | NuiDate;
  /** Whether it can be moved and resized. By default, the scheduler's `editable`. */
  editable?: boolean;
  /** Anything else to keep with the event. */
  data?: T;
}

/** What events belong to in the timeline and the resource columns: a room, a person, a machine. */
export interface NuiSchedulerResource<R = unknown> {
  id: string;
  title: string;
  /** The tone of its events, unless they have their own. */
  tone?: NuiSchedulerTone;
  /** The color of its events, unless they have their own. */
  color?: string;
  /** When it's available, instead of the scheduler's `businessHours`. */
  businessHours?: readonly NuiSchedulerHours[];
  /** Anything else to keep with it. */
  data?: R;
}

/** Working hours: on these days of the week (1 for Monday), from a time to a time. */
export interface NuiSchedulerHours {
  days: readonly number[];
  start: NuiTime;
  end: NuiTime;
}

/** An event read into minutes since 1970, at its wall-clock times. */
export interface NuiSchedulerSpan<T = unknown> {
  event: NuiSchedulerEvent<T>;
  /** Unique among what's shown: the event's id, and an occurrence's start after it. */
  key: string;
  start: number;
  /** Not included. */
  end: number;
  allDay: boolean;
}

/** A timed event's part within one day, placed beside the events it overlaps. */
export interface NuiSchedulerPlaced<T = unknown> {
  span: NuiSchedulerSpan<T>;
  day: NuiDate;
  /** Minutes since the day's midnight. */
  start: number;
  end: number;
  /** Its column, how many it spans, and how many the overlapping events share. */
  column: number;
  columns: number;
  width: number;
  /** It starts before what's shown of the day, or goes on after it. */
  before: boolean;
  after: boolean;
}

/** An event's bar across a row of days, in the lane it takes. */
export interface NuiSchedulerBar<T = unknown> {
  span: NuiSchedulerSpan<T>;
  /** The first and last day it covers, as indexes into the row. */
  from: number;
  to: number;
  lane: number;
  before: boolean;
  after: boolean;
}

/** An event along a time axis, as the timeline shows a day, in the lane it takes. */
export interface NuiSchedulerStacked<T = unknown> {
  span: NuiSchedulerSpan<T>;
  /** What's shown of it, in minutes since 1970. */
  start: number;
  end: number;
  lane: number;
  before: boolean;
  after: boolean;
}

const DAY = 1440;

/** Minutes since 1970 at a date's midnight, or at a date and time. */
export function nuiSchedulerMinutes(value: NuiDate | NuiDateTime): number {
  const day = nuiDayNumber(value.slice(0, 10)) * DAY;
  return value.length > 10 ? day + nuiMinutes(value.slice(11)) : day;
}

/** The date and time a count of minutes since 1970 stands for. */
export function nuiSchedulerValue(minutes: number): NuiDateTime {
  const days = Math.floor(minutes / DAY);
  const rest = Math.round(minutes - days * DAY);
  return `${nuiFromDayNumber(days)}T${nuiTime(Math.floor(rest / 60), rest % 60)}`;
}

/** Reads an event's times. A timed event lasts at least a minute. */
export function nuiSchedulerSpan<T>(event: NuiSchedulerEvent<T>): NuiSchedulerSpan<T> {
  const allDay = event.allDay ?? event.start.length === 10;
  const start = nuiSchedulerMinutes(allDay ? event.start.slice(0, 10) : event.start);
  const end = allDay
    ? nuiSchedulerMinutes(nuiAddDays(event.end.slice(0, 10), 1))
    : nuiSchedulerMinutes(event.end);
  return {
    event,
    key: event.recurrenceId === undefined ? event.id : `${event.id}@${event.recurrenceId}`,
    start,
    end: Math.max(end, start + (allDay ? DAY : 1)),
    allDay,
  };
}

/** The resources an event belongs to. */
export function nuiSchedulerResources(event: NuiSchedulerEvent): readonly string[] {
  const resource = event.resource;
  return resource === undefined ? [] : typeof resource === 'string' ? [resource] : resource;
}

/** The days a view shows, from its first to its last. */
export function nuiSchedulerDays(
  view: NuiSchedulerView,
  date: NuiDate,
  firstDay: number,
  agendaDays = 30,
  timeline: NuiSchedulerTimelineSpan = 'day',
): NuiDate[] {
  if (view === 'timeline') {
    if (timeline !== 'month') return nuiSchedulerDays(timeline, date, firstDay);
    // A timeline runs through the month itself; the month view shows whole weeks.
    const first = `${date.slice(0, 7)}-01`;
    const length = nuiDayNumber(nuiAddMonths(first, 1)) - nuiDayNumber(first);
    return Array.from({ length }, (_, i) => nuiAddDays(first, i));
  }
  switch (view) {
    case 'month':
      return nuiMonthWeeks(date.slice(0, 7), firstDay).flat();
    case 'week': {
      const start = nuiStartOfWeek(date, firstDay);
      return Array.from({ length: 7 }, (_, i) => nuiAddDays(start, i));
    }
    case 'day':
      return [date];
    default:
      return Array.from({ length: Math.max(1, agendaDays) }, (_, i) => nuiAddDays(date, i));
  }
}

/** The date the previous or next page of a view starts from. */
export function nuiSchedulerPage(
  view: NuiSchedulerView,
  date: NuiDate,
  direction: number,
  agendaDays = 30,
  timeline: NuiSchedulerTimelineSpan = 'day',
): NuiDate {
  switch (view === 'timeline' ? timeline : view) {
    case 'month':
      return nuiAddMonths(date, direction);
    case 'week':
      return nuiAddDays(date, 7 * direction);
    case 'day':
      return nuiAddDays(date, direction);
    default:
      return nuiAddDays(date, Math.max(1, agendaDays) * direction);
  }
}

/**
 * The events that touch the days from `first` to `last`, read and in order. A
 * repeating event gives each of its occurrences there.
 */
export function nuiSchedulerVisible<T>(
  events: readonly NuiSchedulerEvent<T>[],
  first: NuiDate,
  last: NuiDate,
): NuiSchedulerSpan<T>[] {
  const from = nuiSchedulerMinutes(first);
  const to = nuiSchedulerMinutes(nuiAddDays(last, 1));
  return events
    .flatMap((event) => spans(event, from, to))
    .sort(
      (a, b) =>
        a.start - b.start ||
        b.end - a.end ||
        a.event.title.localeCompare(b.event.title) ||
        (a.key < b.key ? -1 : 1),
    );
}

/**
 * An event as it shows on the days from `first` to `last`: itself, if it touches
 * them, or each of its occurrences there when it repeats. Occurrences carry their
 * own `start` and `end`, and `recurrenceId`.
 */
export function nuiSchedulerOccurrences<T>(
  event: NuiSchedulerEvent<T>,
  first: NuiDate,
  last: NuiDate,
): NuiSchedulerEvent<T>[] {
  return spans(event, nuiSchedulerMinutes(first), nuiSchedulerMinutes(nuiAddDays(last, 1))).map(
    (span) => span.event,
  );
}

/** An event's spans that touch the minutes from `from` to `to`. */
function spans<T>(event: NuiSchedulerEvent<T>, from: number, to: number): NuiSchedulerSpan<T>[] {
  const span = nuiSchedulerSpan(event);
  const rule = event.rrule ? nuiSchedulerRule(event.rrule) : null;
  if (!rule) return span.start < to && span.end > from ? [span] : [];
  const length = span.end - span.start;
  const skipped = new Set((event.exdate ?? []).map((value) => isoValue(value)));
  return nuiSchedulerRepeat(
    rule,
    span.start,
    Math.floor((from - length + 1) / DAY),
    Math.floor((to - 1) / DAY),
  ).flatMap((start) => {
    const at = nuiSchedulerValue(start);
    const day = at.slice(0, 10);
    if (start >= to || start + length <= from || skipped.has(at) || skipped.has(day)) return [];
    const occurrence: NuiSchedulerEvent<T> = span.allDay
      ? {
          ...event,
          start: day,
          end: nuiSchedulerValue(start + length - DAY).slice(0, 10),
          recurrenceId: day,
        }
      : { ...event, start: at, end: nuiSchedulerValue(start + length), recurrenceId: at };
    return [
      {
        ...span,
        event: occurrence,
        key: `${event.id}@${occurrence.recurrenceId}`,
        start,
        end: start + length,
      },
    ];
  });
}

/**
 * Places a day's timed events side by side where they overlap: each takes the
 * first free column, and stretches over the columns to its right that stay free.
 * Only the minutes from `from` to `to` of the day show; events are cut to them.
 */
export function nuiSchedulerPlace<T>(
  spans: readonly NuiSchedulerSpan<T>[],
  day: NuiDate,
  from = 0,
  to = DAY,
): NuiSchedulerPlaced<T>[] {
  const midnight = nuiSchedulerMinutes(day);
  const parts = spans
    .filter((s) => !s.allDay && s.start < midnight + to && s.end > midnight + from)
    .map((span) => ({
      span,
      day,
      start: Math.max(from, span.start - midnight),
      end: Math.min(to, span.end - midnight),
      before: span.start < midnight + from,
      after: span.end > midnight + to,
      column: 0,
      columns: 1,
      width: 1,
    }))
    .sort((a, b) => a.start - b.start || b.end - a.end);

  const placed: NuiSchedulerPlaced<T>[] = [];
  let cluster: NuiSchedulerPlaced<T>[] = [];
  let columns: number[] = [];
  let clusterEnd = -1;
  const close = () => {
    for (const part of cluster) {
      part.columns = columns.length;
      // Stretch into the columns on the right while nothing there overlaps.
      let width = 1;
      for (let c = part.column + 1; c < columns.length; c++) {
        const blocked = cluster.some(
          (other) => other.column === c && other.start < part.end && other.end > part.start,
        );
        if (blocked) break;
        width++;
      }
      part.width = width;
    }
    placed.push(...cluster);
    cluster = [];
    columns = [];
  };
  for (const part of parts) {
    // Events shorter than 15 minutes still take that much room.
    const end = Math.max(part.end, part.start + 15);
    if (part.start >= clusterEnd) close();
    let column = columns.findIndex((last) => last <= part.start);
    if (column < 0) column = columns.push(0) - 1;
    columns[column] = end;
    part.column = column;
    cluster.push(part);
    clusterEnd = Math.max(clusterEnd, end);
  }
  close();
  return placed;
}

/**
 * Stacks events into lanes across a row of days, as bars: each takes the first
 * lane that's free on all of its days. The days needn't follow each other: a bar
 * covers the days of the row it touches.
 */
export function nuiSchedulerLanes<T>(
  spans: readonly NuiSchedulerSpan<T>[],
  days: readonly NuiDate[],
): NuiSchedulerBar<T>[] {
  if (!days.length) return [];
  const numbers = days.map((day) => nuiDayNumber(day));
  const bars = spans
    .flatMap((span) => {
      const startDay = Math.floor(span.start / DAY);
      const endDay = Math.floor((span.end - 1) / DAY);
      const from = numbers.findIndex((n) => n >= startDay);
      let to = numbers.length - 1;
      while (to >= 0 && numbers[to] > endDay) to--;
      if (from < 0 || to < from) return [];
      return [
        {
          span,
          from,
          to,
          before: startDay < numbers[from],
          after: endDay > numbers[to],
          lane: 0,
        },
      ];
    })
    .sort(
      (a, b) => a.from - b.from || b.to - b.from - (a.to - a.from) || a.span.start - b.span.start,
    );
  const lanes: number[] = [];
  for (const bar of bars) {
    let lane = lanes.findIndex((last) => last < bar.from);
    if (lane < 0) lane = lanes.push(-1) - 1;
    lanes[lane] = bar.to;
    bar.lane = lane;
  }
  return bars;
}

/**
 * Stacks events into lanes along a stretch of time, from `from` to `to` minutes
 * since 1970, as the timeline lays out a day: each takes the first lane that's
 * free for all of its time, and none is shorter than `minimum` minutes there.
 */
export function nuiSchedulerStack<T>(
  spans: readonly NuiSchedulerSpan<T>[],
  from: number,
  to: number,
  minimum = 15,
): NuiSchedulerStacked<T>[] {
  const items = spans
    .filter((span) => span.start < to && span.end > from)
    .map((span) => ({
      span,
      start: Math.max(from, span.start),
      end: Math.min(to, span.end),
      before: span.start < from,
      after: span.end > to,
      lane: 0,
    }))
    .sort((a, b) => a.start - b.start || b.end - a.end);
  const lanes: number[] = [];
  for (const item of items) {
    let lane = lanes.findIndex((last) => last <= item.start);
    if (lane < 0) lane = lanes.push(0) - 1;
    lanes[lane] = Math.max(item.end, item.start + minimum);
    item.lane = lane;
  }
  return items;
}

/**
 * Whether working hours fall in the minutes from `from` to `to` of a day (minutes
 * since its midnight). With no hours given, all time is working time.
 */
export function nuiSchedulerWorking(
  hours: readonly NuiSchedulerHours[] | null | undefined,
  day: NuiDate,
  from = 0,
  to = DAY,
): boolean {
  if (!hours) return true;
  const weekday = ((((nuiDayNumber(day) + 3) % 7) + 7) % 7) + 1;
  return hours.some(
    (range) =>
      range.days.includes(weekday) &&
      nuiMinutes(range.start) < to &&
      (nuiMinutes(range.end) || DAY) > from,
  );
}
