import {
  nuiDateFormat,
  nuiDaysInMonth,
  nuiDateParts,
  nuiTimeParts,
  nuiUses12Hours,
} from '@needless-ui/angular';

/** The parts a date or time is typed in. */
export type NuiSegmentType =
  'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'dayPeriod' | 'literal';

/** How fine a date field goes: the day, or on to the hour, minute or second. */
export type NuiDateGranularity = 'day' | 'hour' | 'minute' | 'second';

/** The values of every segment, filled or not. `hour` is 0 to 23. */
export type NuiSegmentValues = Partial<Record<Exclude<NuiSegmentType, 'literal'>, number | null>>;

/** A segment as the field draws it. */
export interface NuiSegment {
  type: NuiSegmentType;
  /** A literal's text, such as `/` or `:`. */
  text: string;
  /** The value as the segment counts it: 1 to 12 for hours on a 12-hour clock. */
  value: number | null;
  min: number;
  max: number;
}

const DATE_TYPES = ['year', 'month', 'day'] as const;

/** The segments of a locale's date or time, in its order, with its separators. */
export function nuiSegmentLayout(
  locale: string,
  parts: { date: boolean; time: NuiDateGranularity | null },
  hour12 = nuiUses12Hours(locale),
): { type: NuiSegmentType; text: string }[] {
  const options: Intl.DateTimeFormatOptions = {};
  if (parts.date) Object.assign(options, { year: 'numeric', month: '2-digit', day: '2-digit' });
  if (parts.time) {
    options.hour = '2-digit';
    options.hourCycle = hour12 ? 'h12' : 'h23';
    if (parts.time !== 'hour') options.minute = '2-digit';
    if (parts.time === 'second') options.second = '2-digit';
  }
  const layout: { type: NuiSegmentType; text: string }[] = [];
  for (const part of nuiDateFormat(locale, options).formatToParts(
    new Date(Date.UTC(2026, 0, 2, 3, 4, 5)),
  )) {
    const type = (part.type as string) === 'dayperiod' ? 'dayPeriod' : part.type;
    if (type === 'literal') {
      // A comma or space between the date and the time reads better as one gap.
      const previous = layout.at(-1);
      if (previous?.type === 'literal') previous.text += part.value;
      else layout.push({ type: 'literal', text: part.value });
    } else if (['year', 'month', 'day', 'hour', 'minute', 'second', 'dayPeriod'].includes(type)) {
      layout.push({ type: type as NuiSegmentType, text: '' });
    }
  }
  return layout;
}

/** The lowest and highest value a segment takes. */
export function nuiSegmentRange(
  type: NuiSegmentType,
  values: NuiSegmentValues,
  hour12: boolean,
): [number, number] {
  switch (type) {
    case 'year':
      return [1, 9999];
    case 'month':
      return [1, 12];
    case 'day': {
      const month = values.month ?? null;
      if (month === null) return [1, 31];
      // An unknown year could be a leap year.
      return [1, nuiDaysInMonth(values.year ?? 2000, month)];
    }
    case 'hour':
      return hour12 ? [1, 12] : [0, 23];
    case 'dayPeriod':
      return [0, 1];
    case 'literal':
      return [0, 0];
    default:
      return [0, 59];
  }
}

/** A segment's value, from the stored values: hours read on the clock's face. */
export function nuiSegmentValue(
  type: NuiSegmentType,
  values: NuiSegmentValues,
  hour12: boolean,
): number | null {
  if (type === 'literal') return null;
  if (type === 'hour' && hour12 && values.hour != null) return values.hour % 12 || 12;
  if (type === 'dayPeriod') {
    if (values.dayPeriod != null) return values.dayPeriod;
    return values.hour == null ? null : values.hour >= 12 ? 1 : 0;
  }
  return values[type] ?? null;
}

/**
 * Stores a segment's value. On a 12-hour clock the hour keeps its half of the day,
 * and the day of the month shrinks to fit its month.
 */
export function nuiSetSegment(
  values: NuiSegmentValues,
  type: NuiSegmentType,
  value: number | null,
  hour12: boolean,
): NuiSegmentValues {
  const next: NuiSegmentValues = { ...values };
  if (type === 'literal') return next;
  if (type === 'hour' && hour12 && value !== null) {
    const pm = (values.dayPeriod ?? (values.hour != null && values.hour >= 12 ? 1 : 0)) === 1;
    next.hour = (value % 12) + (pm ? 12 : 0);
  } else if (type === 'dayPeriod') {
    next.dayPeriod = value;
    if (value !== null && values.hour != null) next.hour = (values.hour % 12) + (value ? 12 : 0);
  } else {
    next[type] = value;
  }
  if ((type === 'month' || type === 'year') && next.day != null && next.month != null) {
    next.day = Math.min(next.day, nuiDaysInMonth(next.year ?? 2000, next.month));
  }
  return next;
}

/** The values of a date, time, or date and time; empty for null. */
export function nuiSegmentValuesOf(value: string | null, hour12: boolean): NuiSegmentValues {
  if (!value) return {};
  const values: NuiSegmentValues = {};
  const date = value.length >= 10 ? nuiDateParts(value.slice(0, 10)) : null;
  if (date) Object.assign(values, date);
  const time = nuiTimeParts(value.length >= 10 ? value.slice(11) : value);
  if (time) {
    Object.assign(values, time);
    if (hour12) values.dayPeriod = time.hour >= 12 ? 1 : 0;
  }
  return values;
}

/**
 * The value every segment spells out, or null while any of them is empty: a date,
 * a time, or both.
 */
export function nuiSegmentsResult(
  layout: readonly { type: NuiSegmentType }[],
  values: NuiSegmentValues,
): string | null {
  const types = new Set(layout.map((s) => s.type));
  for (const type of types) {
    if (type !== 'literal' && nuiSegmentValue(type, values, false) === null) return null;
  }
  const pad = (n: number, width = 2) => String(n).padStart(width, '0');
  const date = DATE_TYPES.every((t) => types.has(t))
    ? `${pad(values.year!, 4)}-${pad(values.month!)}-${pad(values.day!)}`
    : '';
  if (!types.has('hour')) return date || null;
  const time = `${pad(values.hour!)}:${pad(types.has('minute') ? values.minute! : 0)}${types.has('second') ? `:${pad(values.second!)}` : ''}`;
  return date ? `${date}T${time}` : time;
}

/** Digits in any script, read as numbers: Arabic-Indic, Persian, Devanagari, and so on. */
export function nuiReadDigits(text: string): string {
  return text.replace(/\p{Nd}/gu, (digit) => {
    const code = digit.codePointAt(0)!;
    // Unicode keeps each script's digits in a run of ten, from zero.
    for (let zero = code; zero > code - 10; zero--) {
      if (!/\p{Nd}/u.test(String.fromCodePoint(zero - 1))) return String(code - zero);
    }
    return digit;
  });
}

/**
 * Reads pasted text into segment values: an ISO date or time, or the numbers of
 * the locale's own format in its order, with AM or PM if it says so.
 */
export function nuiReadPasted(
  text: string,
  layout: readonly { type: NuiSegmentType }[],
  hour12: boolean,
  dayPeriods: readonly [string, string],
): NuiSegmentValues | null {
  const clean = nuiReadDigits(text.trim());
  const iso = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(clean);
  let values: NuiSegmentValues = {};
  if (iso) {
    values = { year: +iso[1], month: +iso[2], day: +iso[3] };
    if (iso[4]) Object.assign(values, { hour: +iso[4], minute: +iso[5], second: +(iso[6] ?? 0) });
  } else {
    const numbers = clean.match(/\d+/g) ?? [];
    const numeric = layout.filter((s) => s.type !== 'literal' && s.type !== 'dayPeriod');
    if (!numbers.length || numbers.length > numeric.length) return null;
    numeric.forEach((segment, i) => {
      if (numbers[i] !== undefined) values[segment.type as 'year'] = +numbers[i];
    });
    if (hour12 && values.hour !== undefined && values.hour !== null) {
      const lower = clean.toLowerCase();
      const pm = lower.includes(dayPeriods[1].toLowerCase()) || /\bp\.?\s?m\b/.test(lower);
      values.hour = (values.hour % 12) + (pm ? 12 : 0);
    }
  }
  const date =
    values.year != null
      ? nuiDateParts(
          `${String(values.year).padStart(4, '0')}-${String(values.month).padStart(2, '0')}-${String(values.day).padStart(2, '0')}`,
        )
      : null;
  if (values.year != null && !date) return null;
  if (
    values.hour != null &&
    (values.hour > 23 || (values.minute ?? 0) > 59 || (values.second ?? 0) > 59)
  )
    return null;
  if (hour12 && values.hour != null) values.dayPeriod = values.hour >= 12 ? 1 : 0;
  return values;
}

const WORDY = /^[\p{Script=Latin}\p{Script=Cyrillic}\p{Script=Greek}]/u;

/**
 * What empty date segments show in a locale, from the names it gives the fields:
 * `mm/dd/yyyy` in English, `TT.MM.JJJJ` in German, `jj/mm/aaaa` in French,
 * `年/月/日` in Japanese. Scripts without such initials, and times, get dashes.
 */
export function nuiSegmentPlaceholders(
  locale: string,
): Record<'year' | 'month' | 'day' | 'hour' | 'minute' | 'second', string> {
  const dashes = { year: '––––', month: '––', day: '––', hour: '––', minute: '––', second: '––' };
  let names: Intl.DisplayNames;
  try {
    names = new Intl.DisplayNames(locale, { type: 'dateTimeField' });
  } catch {
    return { ...dashes, year: 'yyyy', month: 'mm', day: 'dd' };
  }
  const placeholder = (field: 'year' | 'month' | 'day', width: number) => {
    const name = names.of(field) ?? '';
    const first = [...name][0] ?? '';
    if ([...name].length === 1) return name;
    return WORDY.test(first) ? first.repeat(width) : dashes[field];
  };
  return {
    ...dashes,
    year: placeholder('year', 4),
    month: placeholder('month', 2),
    day: placeholder('day', 2),
  };
}
