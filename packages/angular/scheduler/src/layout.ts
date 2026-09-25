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
} from '@needless-ui/angular';

/** What the scheduler shows: a month, a week, a day, or a list of what's coming. */
export type NuiSchedulerView = 'month' | 'week' | 'day' | 'agenda';

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
  /** Whether it can be moved and resized. By default, the scheduler's `editable`. */
  editable?: boolean;
  /** Anything else to keep with the event. */
  data?: T;
}

/** An event read into minutes since 1970, at its wall-clock times. */
export interface NuiSchedulerSpan<T = unknown> {
  event: NuiSchedulerEvent<T>;
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
  /** It started before this day, or goes on after it. */
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
  return { event, start, end: Math.max(end, start + (allDay ? DAY : 1)), allDay };
}

/** The days a view shows, from its first to its last. */
export function nuiSchedulerDays(
  view: NuiSchedulerView,
  date: NuiDate,
  firstDay: number,
  agendaDays = 30,
): NuiDate[] {
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
      return Array.from({ length: agendaDays }, (_, i) => nuiAddDays(date, i));
  }
}

/** The date the previous or next page of a view starts from. */
export function nuiSchedulerPage(
  view: NuiSchedulerView,
  date: NuiDate,
  direction: number,
  agendaDays = 30,
): NuiDate {
  switch (view) {
    case 'month':
      return nuiAddMonths(date, direction);
    case 'week':
      return nuiAddDays(date, 7 * direction);
    case 'day':
      return nuiAddDays(date, direction);
    default:
      return nuiAddDays(date, agendaDays * direction);
  }
}

/** The events that touch the days from `first` to `last`, read and in order. */
export function nuiSchedulerVisible<T>(
  events: readonly NuiSchedulerEvent<T>[],
  first: NuiDate,
  last: NuiDate,
): NuiSchedulerSpan<T>[] {
  const from = nuiSchedulerMinutes(first);
  const to = nuiSchedulerMinutes(nuiAddDays(last, 1));
  return events
    .map((event) => nuiSchedulerSpan(event))
    .filter((span) => span.start < to && span.end > from)
    .sort(
      (a, b) => a.start - b.start || b.end - a.end || a.event.title.localeCompare(b.event.title),
    );
}

/**
 * Places a day's timed events side by side where they overlap: each takes the
 * first free column, and stretches over the columns to its right that stay free.
 */
export function nuiSchedulerPlace<T>(
  spans: readonly NuiSchedulerSpan<T>[],
  day: NuiDate,
): NuiSchedulerPlaced<T>[] {
  const midnight = nuiSchedulerMinutes(day);
  const parts = spans
    .filter((s) => !s.allDay && s.start < midnight + DAY && s.end > midnight)
    .map((span) => ({
      span,
      day,
      start: Math.max(0, span.start - midnight),
      end: Math.min(DAY, span.end - midnight),
      before: span.start < midnight,
      after: span.end > midnight + DAY,
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
 * lane that's free on all of its days.
 */
export function nuiSchedulerLanes<T>(
  spans: readonly NuiSchedulerSpan<T>[],
  days: readonly NuiDate[],
): NuiSchedulerBar<T>[] {
  if (!days.length) return [];
  const first = nuiDayNumber(days[0]);
  const count = days.length;
  const bars = spans
    .map((span) => {
      const startDay = Math.floor(span.start / DAY);
      const endDay = Math.floor((span.end - 1) / DAY);
      return {
        span,
        from: Math.max(0, startDay - first),
        to: Math.min(count - 1, endDay - first),
        before: startDay < first,
        after: endDay > first + count - 1,
        lane: 0,
      };
    })
    .filter((bar) => bar.from <= bar.to && bar.to >= 0 && bar.from < count)
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
