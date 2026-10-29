/**
 * Repeating events: the part of RFC 5545 that calendars write. A rule such as
 * `FREQ=WEEKLY;BYDAY=MO,WE;UNTIL=20261231` repeats an event from its start, and the
 * scheduler shows each occurrence that falls in the days on screen.
 *
 * Read: FREQ (DAILY, WEEKLY, MONTHLY, YEARLY), INTERVAL, COUNT, UNTIL, BYDAY (with
 * an ordinal in a month or a year, such as `-1FR`), BYMONTHDAY, BYMONTH, BYSETPOS
 * and WKST. Occurrences keep the time of day of the first one. Times have no time
 * zone, as everywhere in the scheduler: a `Z` on UNTIL is ignored.
 */

import { nuiDaysInMonth } from '../date.js';

/** How often a rule repeats. */
export type NuiSchedulerFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

/** A repeat rule, read from its RFC 5545 text. */
export interface NuiSchedulerRule {
  frequency: NuiSchedulerFrequency;
  /** Every how many days, weeks, months or years. */
  interval: number;
  /** How many occurrences in all, the first one included. */
  count: number | null;
  /** The last start it allows: a date (the whole day), or a date and time. */
  until: string | null;
  /**
   * Days of the week, 1 for Monday, each with its place in the month or year: 1
   * for the first, -1 for the last, 0 for every one.
   */
  byDay: readonly { day: number; nth: number }[];
  /** Days of the month; -1 is the last. */
  byMonthDay: readonly number[];
  /** Months, 1 for January. */
  byMonth: readonly number[];
  /** Which of each period's occurrences to keep: 1 the first, -1 the last. */
  bySetPos: readonly number[];
  /** The day weeks start on, for weekly rules every few weeks. */
  weekStart: number;
}

const DAY = 1440;
const MS = 86_400_000;
const WEEKDAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
const FREQUENCIES: Record<string, NuiSchedulerFrequency> = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
};

/**
 * Reads a rule such as `FREQ=MONTHLY;BYDAY=-1FR` (with or without `RRULE:`), or
 * returns null when it has no frequency the scheduler knows.
 */
export function nuiSchedulerRule(text: string): NuiSchedulerRule | null {
  const parts = new Map<string, string>();
  for (const part of text
    .trim()
    .replace(/^RRULE:/i, '')
    .split(';')) {
    const at = part.indexOf('=');
    if (at > 0) parts.set(part.slice(0, at).trim().toUpperCase(), part.slice(at + 1).trim());
  }
  const frequency = FREQUENCIES[parts.get('FREQ')?.toUpperCase() ?? ''];
  if (!frequency) return null;
  const numbers = (key: string, min: number, max: number) =>
    (parts.get(key) ?? '')
      .split(',')
      .map((value) => (/^[+-]?\d+$/.test(value.trim()) ? +value : NaN))
      .filter((n) => n !== 0 && Math.abs(n) >= min && Math.abs(n) <= max);
  const byDay = (parts.get('BYDAY') ?? '')
    .toUpperCase()
    .split(',')
    .flatMap((value) => {
      const match = /^([+-]?\d{1,2})?(MO|TU|WE|TH|FR|SA|SU)$/.exec(value.trim());
      return match ? [{ day: WEEKDAYS.indexOf(match[2]) + 1, nth: +(match[1] ?? 0) }] : [];
    });
  const count = Math.floor(+(parts.get('COUNT') ?? NaN));
  const weekStart = WEEKDAYS.indexOf(parts.get('WKST')?.toUpperCase() ?? 'MO') + 1;
  return {
    frequency,
    interval: Math.max(1, Math.floor(+(parts.get('INTERVAL') ?? 1)) || 1),
    count: count >= 1 ? count : null,
    until: parts.has('UNTIL') ? isoValue(parts.get('UNTIL')!) : null,
    byDay,
    byMonthDay: numbers('BYMONTHDAY', 1, 31),
    byMonth: numbers('BYMONTH', 1, 12).filter((n) => n > 0),
    bySetPos: numbers('BYSETPOS', 1, 366),
    weekStart: weekStart || 1,
  };
}

/**
 * A date, or a date and time to the minute, from ISO text (`2026-09-25T09:00`) or
 * iCalendar's (`20260925T090000Z`); null for anything else. A zone is dropped.
 */
export function isoValue(text: string): string | null {
  const match = /^(\d{4})-?(\d{2})-?(\d{2})(?:T(\d{2}):?(\d{2})(?::?(\d{2})(?:\.\d+)?)?)?Z?$/i.exec(
    text.trim(),
  );
  if (!match) return null;
  const date = `${match[1]}-${match[2]}-${match[3]}`;
  return match[4] === undefined ? date : `${date}T${match[4]}:${match[5]}`;
}

/**
 * The starts of a rule's occurrences on the days from `first` to `last` (day
 * numbers, as `nuiDayNumber()` counts them), in minutes since 1970. The start is
 * always the first occurrence; COUNT and UNTIL count from it.
 */
export function nuiSchedulerRepeat(
  rule: NuiSchedulerRule,
  start: number,
  first: number,
  last: number,
): number[] {
  // A start or a day that isn't a real date gives no occurrences, rather than no end.
  if (![start, first, last].every(Number.isFinite)) return [];
  const startDay = Math.floor(start / DAY);
  const time = start - startDay * DAY;
  const until = rule.until === null ? Infinity : limit(rule.until);
  const starts: number[] = [];
  let seen = 0;
  const emit = (day: number): boolean => {
    const at = day * DAY + time;
    if (at > until || (rule.count !== null && seen >= rule.count)) return false;
    seen++;
    if (day >= first && day <= last) starts.push(at);
    return true;
  };
  if (!emit(startDay)) return starts;
  // COUNT needs every occurrence from the start; without it, skip to the days shown.
  let period = rule.count === null ? skip(rule, startDay, first) : 0;
  for (; ; period++) {
    const { from, days } = candidates(rule, startDay, period);
    if (from > last || from * DAY > until) break;
    for (const day of days) {
      if (day > startDay && !emit(day)) return starts;
    }
  }
  return starts;
}

/** The latest start UNTIL allows, in minutes since 1970: a date allows its whole day. */
function limit(until: string): number {
  const day = dayNumber(+until.slice(0, 4), +until.slice(5, 7), +until.slice(8, 10));
  if (until.length === 10) return day * DAY + DAY - 1;
  return day * DAY + +until.slice(11, 13) * 60 + +until.slice(14, 16);
}

/** A period shortly before `first`, where the occurrences on screen can begin. */
function skip(rule: NuiSchedulerRule, startDay: number, first: number): number {
  let periods: number;
  switch (rule.frequency) {
    case 'daily':
      periods = (first - startDay) / rule.interval;
      break;
    case 'weekly':
      periods = (first - weekOf(startDay, rule.weekStart)) / (7 * rule.interval);
      break;
    case 'monthly':
      periods = (monthIndex(first) - monthIndex(startDay)) / rule.interval;
      break;
    default:
      periods = (parts(first).year - parts(startDay).year) / rule.interval;
  }
  return Math.max(0, Math.floor(periods) - 1);
}

/** The days a rule picks in one of its periods, in order, and the period's first day. */
function candidates(
  rule: NuiSchedulerRule,
  startDay: number,
  period: number,
): { from: number; days: number[] } {
  const start = parts(startDay);
  let from: number;
  let days: number[];
  switch (rule.frequency) {
    case 'daily': {
      from = startDay + period * rule.interval;
      const { month, day, length } = parts(from);
      const keep =
        (!rule.byMonth.length || rule.byMonth.includes(month)) &&
        (!rule.byMonthDay.length ||
          rule.byMonthDay.some((d) => (d > 0 ? d : length + 1 + d) === day)) &&
        (!rule.byDay.length || rule.byDay.some((d) => d.day === weekday(from)));
      days = keep ? [from] : [];
      break;
    }
    case 'weekly': {
      from = weekOf(startDay, rule.weekStart) + period * 7 * rule.interval;
      const weekdays = rule.byDay.length ? rule.byDay.map((d) => d.day) : [weekday(startDay)];
      days = Array.from({ length: 7 }, (_, i) => from + i).filter(
        (day) =>
          weekdays.includes(weekday(day)) &&
          (!rule.byMonth.length || rule.byMonth.includes(parts(day).month)),
      );
      break;
    }
    case 'monthly': {
      const index = monthIndex(startDay) + period * rule.interval;
      const year = Math.floor(index / 12);
      const month = index - year * 12 + 1;
      from = dayNumber(year, month, 1);
      days =
        rule.byMonth.length && !rule.byMonth.includes(month)
          ? []
          : inMonth(rule, year, month, start.day);
      break;
    }
    default: {
      const year = start.year + period * rule.interval;
      from = dayNumber(year, 1, 1);
      if (rule.byMonth.length) {
        days = rule.byMonth.flatMap((month) => inMonth(rule, year, month, start.day));
      } else if (rule.byMonthDay.length) {
        days = Array.from({ length: 12 }, (_, i) => inMonth(rule, year, i + 1, start.day)).flat();
      } else if (rule.byDay.length) {
        days = nthDays(rule.byDay, from, dayNumber(year + 1, 1, 1) - 1);
      } else {
        days = inMonth(rule, year, start.month, start.day);
      }
    }
  }
  days = [...new Set(days)].sort((a, b) => a - b);
  if (rule.bySetPos.length) {
    const all = days;
    days = [
      ...new Set(
        rule.bySetPos
          .map((pos) => all[pos > 0 ? pos - 1 : all.length + pos])
          .filter((day) => day !== undefined),
      ),
    ].sort((a, b) => a - b);
  }
  return { from, days };
}

/** The days a rule picks in one month: by day of the month, by weekday, or the start's day. */
function inMonth(rule: NuiSchedulerRule, year: number, month: number, startDate: number): number[] {
  const first = dayNumber(year, month, 1);
  const length = nuiDaysInMonth(year, month);
  const last = first + length - 1;
  if (rule.byMonthDay.length) {
    const days = rule.byMonthDay
      .map((d) => (d > 0 ? d : length + 1 + d))
      .filter((d) => d >= 1 && d <= length)
      .map((d) => first + d - 1);
    if (!rule.byDay.length) return days;
    // Both: the weekdays limit the days of the month.
    const picked = new Set(nthDays(rule.byDay, first, last));
    return days.filter((day) => picked.has(day));
  }
  if (rule.byDay.length) return nthDays(rule.byDay, first, last);
  return startDate <= length ? [first + startDate - 1] : [];
}

/** The days from `first` to `last` that fall on the given weekdays, each every time or the nth. */
function nthDays(byDay: NuiSchedulerRule['byDay'], first: number, last: number): number[] {
  return byDay.flatMap(({ day, nth }) => {
    const offset = (day - weekday(first) + 7) % 7;
    const all: number[] = [];
    for (let d = first + offset; d <= last; d += 7) all.push(d);
    if (!nth) return all;
    const pick = all[nth > 0 ? nth - 1 : all.length + nth];
    return pick === undefined ? [] : [pick];
  });
}

/** 1 for Monday through 7 for Sunday. 1970-01-01 was a Thursday. */
function weekday(day: number): number {
  return ((((day + 3) % 7) + 7) % 7) + 1;
}

function weekOf(day: number, weekStart: number): number {
  return day - ((weekday(day) - weekStart + 7) % 7);
}

function parts(day: number): { year: number; month: number; day: number; length: number } {
  const date = new Date(day * MS);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  return { year, month, day: date.getUTCDate(), length: nuiDaysInMonth(year, month) };
}

function monthIndex(day: number): number {
  const { year, month } = parts(day);
  return year * 12 + month - 1;
}

function dayNumber(year: number, month: number, day: number): number {
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return Math.round(date.getTime() / MS);
}
