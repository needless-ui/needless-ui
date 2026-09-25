/**
 * Plain dates and times: ISO strings with no time zone, as `<input type="date">`,
 * `type="time"` and `type="datetime-local"` hold them. They sort as strings,
 * survive JSON, and never shift across time zones.
 *
 * The calendar is the Gregorian one. Names and digits follow the locale, since
 * every formatter here asks for `calendar: 'gregory'` explicitly.
 */

/** A calendar date: `2026-09-25`. */
export type NuiDate = string;
/** A time of day, 24-hour: `14:30` or `14:30:15`. */
export type NuiTime = string;
/** A date and a time of day: `2026-09-25T14:30`. */
export type NuiDateTime = string;
/** A calendar month: `2026-09`. */
export type NuiMonth = string;

export interface NuiDateParts {
  year: number;
  month: number;
  day: number;
}

export interface NuiTimeParts {
  hour: number;
  minute: number;
  second: number;
}

/** The first day of the week and the weekend, 1 for Monday through 7 for Sunday. */
export interface NuiWeekInfo {
  firstDay: number;
  weekend: readonly number[];
}

const DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME = /^(\d{2}):(\d{2})(?::(\d{2}))?$/;
const DAY = 86_400_000;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const pad = (value: number, width = 2) => String(value).padStart(width, '0');

export function nuiIsLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function nuiDaysInMonth(year: number, month: number): number {
  return month === 2 && nuiIsLeapYear(year) ? 29 : DAYS_IN_MONTH[month - 1];
}

/** A date's parts, or null when it isn't a real date, such as `2026-02-30`. */
export function nuiDateParts(date: string | null | undefined): NuiDateParts | null {
  const match = DATE.exec(date?.slice(0, 10) ?? '');
  if (!match) return null;
  const [year, month, day] = [+match[1], +match[2], +match[3]];
  return year >= 1 && month >= 1 && month <= 12 && day >= 1 && day <= nuiDaysInMonth(year, month)
    ? { year, month, day }
    : null;
}

/** A time's parts, or null when it isn't a real time of day. */
export function nuiTimeParts(time: string | null | undefined): NuiTimeParts | null {
  const match = TIME.exec(time ?? '');
  if (!match) return null;
  const [hour, minute, second] = [+match[1], +match[2], +(match[3] ?? 0)];
  return hour < 24 && minute < 60 && second < 60 ? { hour, minute, second } : null;
}

/** Whether a string is a real date. */
export function nuiIsDate(value: unknown): value is NuiDate {
  return typeof value === 'string' && value.length === 10 && nuiDateParts(value) !== null;
}

/** Days since 1970-01-01, for arithmetic; NaN for anything but a real date. */
export function nuiDayNumber(date: NuiDate): number {
  const parts = nuiDateParts(date);
  return parts ? dayNumber(parts.year, parts.month, parts.day) : NaN;
}

function dayNumber(year: number, month: number, day: number): number {
  // setUTCFullYear, unlike Date.UTC, doesn't read the years 0 to 99 as 1900 to 1999.
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return Math.round(date.getTime() / DAY);
}

const FIRST = dayNumber(1, 1, 1);
const LAST = dayNumber(9999, 12, 31);

/** The date a day number stands for, kept between the years 1 and 9999. */
export function nuiFromDayNumber(days: number): NuiDate {
  const date = new Date(Math.min(LAST, Math.max(FIRST, days)) * DAY);
  return `${pad(date.getUTCFullYear(), 4)}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

/** A date from its parts. Days and months past their ends roll over, as with `Date`. */
export function nuiDate(year: number, month: number, day: number): NuiDate {
  return nuiFromDayNumber(dayNumber(year, month, day));
}

export function nuiAddDays(date: NuiDate, days: number): NuiDate {
  return nuiFromDayNumber(nuiDayNumber(date) + days);
}

/** Moves by whole months, keeping the day where it can: January 31 plus a month is February 28. */
export function nuiAddMonths(date: NuiDate, months: number): NuiDate {
  const { year, month, day } = nuiDateParts(date)!;
  const index = year * 12 + month - 1 + months;
  const y = Math.floor(index / 12);
  const m = index - y * 12 + 1;
  return nuiFromDayNumber(dayNumber(y, m, Math.min(day, nuiDaysInMonth(y, m))));
}

export function nuiAddYears(date: NuiDate, years: number): NuiDate {
  return nuiAddMonths(date, years * 12);
}

/** Days from `a` to `b`: positive when `b` is later. */
export function nuiDaysBetween(a: NuiDate, b: NuiDate): number {
  return nuiDayNumber(b) - nuiDayNumber(a);
}

/** The date, kept between `min` and `max` when they're given. */
export function nuiClampDate(date: NuiDate, min?: NuiDate | null, max?: NuiDate | null): NuiDate {
  if (min && date < min) return min;
  if (max && date > max) return max;
  return date;
}

/** 1 for Monday through 7 for Sunday, as in ISO 8601 and `Intl.Locale.getWeekInfo()`. */
export function nuiWeekday(date: NuiDate): number {
  // 1970-01-01 was a Thursday.
  return ((((nuiDayNumber(date) + 3) % 7) + 7) % 7) + 1;
}

/** The first day of the week that holds `date`. */
export function nuiStartOfWeek(date: NuiDate, firstDay = 1): NuiDate {
  return nuiAddDays(date, -((nuiWeekday(date) - firstDay + 7) % 7));
}

/** The ISO 8601 week number: weeks start on Monday, and week 1 holds the year's first Thursday. */
export function nuiIsoWeek(date: NuiDate): number {
  const thursday = nuiAddDays(date, 4 - nuiWeekday(date));
  const year = +thursday.slice(0, 4);
  return Math.floor((nuiDayNumber(thursday) - dayNumber(year, 1, 1)) / 7) + 1;
}

/** The month a date falls in: `2026-09`. */
export function nuiMonthOf(date: NuiDate): NuiMonth {
  return date.slice(0, 7);
}

/** Moves a month by whole months. */
export function nuiAddToMonth(month: NuiMonth, months: number): NuiMonth {
  return nuiMonthOf(nuiAddMonths(`${month}-01`, months));
}

/**
 * The weeks a calendar shows for a month: whole weeks from `firstDay`, with the
 * days of the months around it. Six weeks unless `fit`, so a calendar doesn't
 * change height from month to month.
 */
export function nuiMonthWeeks(month: NuiMonth, firstDay = 1, fit = false): NuiDate[][] {
  const first = `${month}-01`;
  const start = nuiStartOfWeek(first, firstDay);
  const { year, month: m } = nuiDateParts(first)!;
  const count = fit ? Math.ceil((nuiDaysBetween(start, first) + nuiDaysInMonth(year, m)) / 7) : 6;
  const origin = nuiDayNumber(start);
  return Array.from({ length: count }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => nuiFromDayNumber(origin + week * 7 + day)),
  );
}

/** Today, where the reader is. */
export function nuiToday(now = new Date()): NuiDate {
  return `${pad(now.getFullYear(), 4)}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/** Now, where the reader is, to the minute. */
export function nuiNow(now = new Date()): NuiDateTime {
  return `${nuiToday(now)}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

/** A time from its parts, with seconds only when they're given. */
export function nuiTime(hour: number, minute: number, second?: number): NuiTime {
  return `${pad(hour)}:${pad(minute)}${second === undefined ? '' : `:${pad(second)}`}`;
}

/** Minutes since midnight. */
export function nuiMinutes(time: NuiTime): number {
  const parts = nuiTimeParts(time);
  return parts ? parts.hour * 60 + parts.minute + parts.second / 60 : NaN;
}

/** A date and time's two halves. */
export function nuiSplitDateTime(value: NuiDateTime): [NuiDate, NuiTime] {
  return [value.slice(0, 10), value.slice(11)];
}

/** Moves a date and time by whole minutes, across days as needed. Seconds stay as they are. */
export function nuiAddMinutes(value: NuiDateTime, minutes: number): NuiDateTime {
  const [date, time] = nuiSplitDateTime(value);
  const { hour, minute, second } = nuiTimeParts(time)!;
  const total = nuiDayNumber(date) * 1440 + hour * 60 + minute + Math.round(minutes);
  const days = Math.floor(total / 1440);
  const rest = total - days * 1440;
  const seconds = time.length > 5 ? second : undefined;
  return `${nuiFromDayNumber(days)}T${nuiTime(Math.floor(rest / 60), rest % 60, seconds)}`;
}

// --- Locale --------------------------------------------------------------------

/** Where CLDR starts the week on another day than Monday, by region. */
const FIRST_DAYS: Record<number, string> = {
  7: 'AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PT PY SA SG SV TH TT TW UM US VE VI WS YE ZA ZW',
  6: 'AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY',
  5: 'MV',
};
/** Where the weekend isn't Saturday and Sunday, by region. */
const WEEKENDS: Record<string, readonly number[]> = {
  'AE BH DZ EG IQ JO KW LY OM QA SA SD SY YE': [5, 6],
  'AF IR': [5],
  IN: [7],
  IL: [5, 6],
};

type WeekInfoLocale = Intl.Locale & { getWeekInfo?(): NuiWeekInfo; weekInfo?: NuiWeekInfo };

/** The first day of the week and the weekend where a locale is spoken. */
export function nuiWeekInfo(locale: string): NuiWeekInfo {
  let region = '';
  try {
    const intl = new Intl.Locale(locale) as WeekInfoLocale;
    const info = intl.getWeekInfo?.() ?? intl.weekInfo;
    if (info?.firstDay) return { firstDay: info.firstDay, weekend: [...info.weekend] };
    region = intl.maximize().region ?? '';
  } catch {
    // An unknown locale gets the world's default.
  }
  const firstDay = +(Object.keys(FIRST_DAYS).find((day) => FIRST_DAYS[+day].includes(region)) ?? 1);
  const weekend = Object.entries(WEEKENDS).find(([regions]) => region && regions.includes(region));
  return { firstDay, weekend: weekend?.[1] ?? [6, 7] };
}

/** Whether a locale writes hours from 1 to 12, with AM and PM. */
export function nuiUses12Hours(locale: string): boolean {
  const cycle = nuiDateFormat(locale, { hour: 'numeric' }).resolvedOptions().hourCycle;
  return cycle === 'h12' || cycle === 'h11';
}

const formats = new Map<string, Intl.DateTimeFormat>();

/**
 * A cached formatter for plain dates and times: Gregorian, and in UTC, so the
 * values from `nuiUtc()` never shift.
 */
export function nuiDateFormat(
  locale: string,
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat {
  const key = `${locale}|${JSON.stringify(options)}`;
  let format = formats.get(key);
  if (!format) {
    format = new Intl.DateTimeFormat(locale, { calendar: 'gregory', timeZone: 'UTC', ...options });
    formats.set(key, format);
  }
  return format;
}

/** A `Date` for a plain date or date and time, at that wall-clock time in UTC, for formatting. */
export function nuiUtc(value: NuiDate | NuiDateTime): Date {
  const [date, time = '00:00'] = value.length > 10 ? nuiSplitDateTime(value) : [value];
  const { year, month, day } = nuiDateParts(date)!;
  const { hour, minute, second } = nuiTimeParts(time) ?? { hour: 0, minute: 0, second: 0 };
  const utc = new Date(0);
  utc.setUTCFullYear(year, month - 1, day);
  utc.setUTCHours(hour, minute, second);
  return utc;
}

/** Formats a plain date or date and time for a locale: `Sep 25, 2026` by default. */
export function nuiFormatDate(
  value: NuiDate | NuiDateTime,
  locale: string,
  options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' },
): string {
  return nuiDateFormat(locale, options).format(nuiUtc(value));
}

/** The names of the days of the week, from `firstDay`, as a locale writes them. */
export function nuiWeekdayNames(
  locale: string,
  firstDay = 1,
  width: 'long' | 'short' | 'narrow' = 'short',
): string[] {
  // 2024-01-01 was a Monday.
  return Array.from({ length: 7 }, (_, i) =>
    nuiFormatDate(nuiDate(2024, 1, ((firstDay - 1 + i) % 7) + 1), locale, { weekday: width }),
  );
}

/** The names of the months, as a locale writes them on their own. */
export function nuiMonthNames(locale: string, width: 'long' | 'short' = 'long'): string[] {
  return Array.from({ length: 12 }, (_, i) =>
    nuiFormatDate(nuiDate(2024, i + 1, 1), locale, { month: width }),
  );
}
