/**
 * The scheduler's view: which days, slots, columns and rows each view shows, where
 * each event sits on them, where the keys move, and what a move or a drag makes of
 * an event. Pure functions of the scheduler's settings, so each binding only keeps
 * state and draws: Angular memoizes them in `computed()`s, React in `useMemo()`s.
 */
import {
  nuiAddDays,
  type NuiDate,
  nuiDateFormat,
  nuiDayNumber,
  nuiIsoWeek,
  nuiUtc,
  nuiWeekday,
} from '../date.js';
import {
  type NuiSchedulerBar,
  nuiSchedulerDays,
  type NuiSchedulerEvent,
  type NuiSchedulerHours,
  nuiSchedulerLanes,
  nuiSchedulerMinutes,
  nuiSchedulerPage,
  nuiSchedulerPlace,
  type NuiSchedulerResource,
  nuiSchedulerResources,
  type NuiSchedulerSpan,
  nuiSchedulerStack,
  type NuiSchedulerTimelineSpan,
  type NuiSchedulerTone,
  nuiSchedulerValue,
  type NuiSchedulerView,
  nuiSchedulerWorking,
} from './layout.js';
import type { NuiSchedulerChange, NuiSchedulerLabels, NuiSchedulerSlot } from './types.js';

/** The views offered by default. With resources, the timeline joins them. */
export const NUI_SCHEDULER_VIEWS: readonly NuiSchedulerView[] = ['month', 'week', 'day', 'agenda'];
/** How long a finger holds still to pick an event up; moving sooner scrolls. */
export const NUI_SCHEDULER_LONG_PRESS = 400;
/** How far a finger may drift during that press. */
export const NUI_SCHEDULER_SLOP = 8;
/** Bars shown in a month cell before "N more". */
const LANES = 3;
const DAY = 1440;

/** A row of the time grid: a slot (minutes since midnight), the all-day row, or a whole day. */
export type NuiSchedulerCellSlot = number | 'all' | null;

/**
 * Where the keyboard is: a day; on the time grid, a slot (minutes since midnight)
 * or the all-day row; and among resources, the index of one.
 */
export interface NuiSchedulerCell {
  day: NuiDate;
  slot: NuiSchedulerCellSlot;
  resource: number | null;
}

/** A cell under the pointer, and the moment under it, in minutes since 1970. */
export interface NuiSchedulerPoint {
  cell: NuiSchedulerCell;
  time: number;
}

export interface NuiSchedulerDrag {
  kind: 'move' | 'resize' | 'select';
  span?: NuiSchedulerSpan;
  origin: NuiSchedulerPoint;
  x: number;
  y: number;
  moved: boolean;
}

/** Where a dragged event would land. */
export interface NuiSchedulerPreview {
  span: NuiSchedulerSpan;
  start: number;
  end: number;
  /** The resource it would land on, among those laid out. */
  resource: string | null;
}

/** Time chosen on the grid: from the anchor to the focus. */
export interface NuiSchedulerSelection {
  anchor: NuiSchedulerCell;
  focus: NuiSchedulerCell;
}

/** A column of the time grid: a day, of a resource when they're laid out. */
export interface NuiSchedulerColumn {
  day: NuiDate;
  resource: NuiSchedulerResource | null;
  index: number | null;
  /** The first day of a resource after the first: it draws a stronger line. */
  group: boolean;
}

/** An event drawn in a cell. */
export interface NuiSchedulerShown {
  span: NuiSchedulerSpan;
  /** How it sits on the grid, as the custom properties the stylesheet reads. */
  place: {
    kind: 'timed' | 'bar';
    /** Where it starts in its cell, as a share of the cell. */
    offset?: number;
    /** How many slots it reaches down, in the time grid. */
    length?: number;
    /** How many cells it reaches across, as a bar. */
    span?: number;
    lane?: number;
    column?: number;
    columns?: number;
    width?: number;
    before: boolean;
    after: boolean;
    short?: boolean;
    /** Its end shows, so a handle there resizes it. */
    resize: boolean;
  };
}

export interface NuiSchedulerGhost {
  /** The cell it starts in. */
  cell: string;
  kind: 'timed' | 'bar';
  offset: number;
  length: number;
  tone: NuiSchedulerTone;
  color: string | null;
  title: string;
}

/** The minutes of a day the time grid shows, from and to, in `count` slots. */
export interface NuiSchedulerWindow {
  from: number;
  to: number;
  count: number;
}

/**
 * What the views are laid out from: the settings, and what follows from them.
 * A binding computes it once per change of any of these.
 */
export interface NuiSchedulerFrame {
  view: NuiSchedulerView;
  timelineSpan: NuiSchedulerTimelineSpan;
  /** The first day of the week, 1 for Monday. */
  start: number;
  /** Weekdays the views leave out. */
  hidden: ReadonlySet<number>;
  agendaDays: number;
  /** Minutes per slot. */
  step: number;
  window: NuiSchedulerWindow;
  slots: readonly number[];
  /** The slot the time grid opens at. */
  scrollSlot: number;
  /** The view has a time grid by slots: the week, the day, and a day's timeline. */
  slotted: boolean;
  /** The view shows one day: the day, or a day's timeline. */
  daily: boolean;
  /** The view shows a month: the month, or a month's timeline. */
  monthly: boolean;
  /** The resources laid out: columns in the day and the week, rows in the timeline. */
  laid: readonly NuiSchedulerResource[];
}

/** A date format whose output is the same on a server and in a browser (see `nuiSchedulerFormats`). */
export interface NuiSchedulerFormat {
  format(date: Date): string;
  formatRange(start: Date, end: Date): string;
}

export interface NuiSchedulerFormats {
  time: NuiSchedulerFormat;
  day: NuiSchedulerFormat;
  full: NuiSchedulerFormat;
  long: NuiSchedulerFormat;
  month: NuiSchedulerFormat;
  range: NuiSchedulerFormat;
  weekday: NuiSchedulerFormat;
}

export function nuiSchedulerFrame(settings: {
  view: NuiSchedulerView;
  timelineSpan: NuiSchedulerTimelineSpan;
  start: number;
  hidden: ReadonlySet<number>;
  agendaDays: number;
  slotMinutes: number;
  dayStart: number;
  dayEnd: number;
  scrollHour: number;
  resources: readonly NuiSchedulerResource[];
}): NuiSchedulerFrame {
  const { view, timelineSpan } = settings;
  const step = Math.max(5, settings.slotMinutes);
  const from = Math.min(DAY - step, Math.max(0, Math.round(settings.dayStart * 60)));
  const count = Math.ceil(
    (Math.max(from + step, Math.min(DAY, Math.round(settings.dayEnd * 60))) - from) / step,
  );
  const window = { from, to: Math.min(DAY, from + count * step), count };
  const slots = Array.from({ length: count }, (_, i) => from + i * step);
  const index = Math.floor((settings.scrollHour * 60 - from) / step);
  return {
    view,
    timelineSpan,
    start: settings.start,
    hidden: settings.hidden,
    agendaDays: settings.agendaDays,
    step,
    window,
    slots,
    scrollSlot: slots[Math.min(slots.length - 1, Math.max(0, index))],
    slotted: view === 'week' || view === 'day' || (view === 'timeline' && timelineSpan === 'day'),
    daily: view === 'day' || (view === 'timeline' && timelineSpan === 'day'),
    monthly: view === 'month' || (view === 'timeline' && timelineSpan === 'month'),
    laid: view === 'week' || view === 'day' || view === 'timeline' ? settings.resources : [],
  };
}

/**
 * The scheduler's date formats. Node writes thin and narrow no-break spaces in
 * times and ranges (`9:00\u2009–\u20099:30\u202fAM`) where browsers write plain
 * ones, so the HTML a server renders wouldn't match the browser's and hydration
 * would fail: every format writes plain spaces.
 */
export function nuiSchedulerFormats(locale: string): NuiSchedulerFormats {
  const plain = (options: Intl.DateTimeFormatOptions): NuiSchedulerFormat => {
    const intl = nuiDateFormat(locale, options);
    return {
      format: (date) => intl.format(date).replace(SPACES, ' '),
      formatRange: (start, end) => intl.formatRange(start, end).replace(SPACES, ' '),
    };
  };
  return {
    time: plain({ hour: 'numeric', minute: '2-digit' }),
    day: plain({ day: 'numeric' }),
    full: plain({ dateStyle: 'full' }),
    long: plain({ weekday: 'long', month: 'long', day: 'numeric' }),
    month: plain({ month: 'long', year: 'numeric' }),
    range: plain({ month: 'short', day: 'numeric', year: 'numeric' }),
    weekday: plain({ weekday: 'short' }),
  };
}

const SPACES = /[\u2009\u202f]/g;

// --- Days ------------------------------------------------------------------------

/** The days of a range that are shown. */
export function nuiSchedulerShownDays(
  frame: NuiSchedulerFrame,
  range: readonly NuiDate[],
): NuiDate[] {
  if (!frame.hidden.size) return [...range];
  const shown = range.filter((day) => !frame.hidden.has(nuiWeekday(day)));
  return shown.length ? shown : [...range];
}

/** The first day from `day` on, going `direction`, that the views show. */
function nextShown(frame: NuiSchedulerFrame, day: NuiDate, direction: number): NuiDate {
  for (let i = 0; i < 7 && frame.hidden.has(nuiWeekday(day)); i++) {
    day = nuiAddDays(day, direction);
  }
  return day;
}

/** Where paging lands, going `direction`: on a day shown, and for a month, in that month. */
function landOn(frame: NuiSchedulerFrame, day: NuiDate, direction: number): NuiDate {
  if (frame.monthly) {
    const ahead = nextShown(frame, day, direction);
    return ahead.slice(0, 7) === day.slice(0, 7) ? ahead : nextShown(frame, day, -direction);
  }
  return frame.daily ? nextShown(frame, day, direction) : day;
}

/** How many days there are from `day` to the next day shown, going `direction`. */
function stepDays(frame: NuiSchedulerFrame, day: NuiDate, direction: number): number {
  return nuiDayNumber(nextShown(frame, nuiAddDays(day, direction), direction)) - nuiDayNumber(day);
}

/** The date the view shows from: for one day, a day the views show. */
export function nuiSchedulerAnchor(frame: NuiSchedulerFrame, date: NuiDate): NuiDate {
  return frame.daily ? nextShown(frame, date, 1) : date;
}

/** Every day of the view, hidden ones too: the range reported and loaded. */
export function nuiSchedulerRange(frame: NuiSchedulerFrame, anchor: NuiDate): NuiDate[] {
  return nuiSchedulerDays(frame.view, anchor, frame.start, frame.agendaDays, frame.timelineSpan);
}

/** The date the previous or next page starts from, landed on a day shown. */
export function nuiSchedulerPaged(
  frame: NuiSchedulerFrame,
  anchor: NuiDate,
  direction: number,
): NuiDate {
  const day = nuiSchedulerPage(frame.view, anchor, direction, frame.agendaDays, frame.timelineSpan);
  return landOn(frame, day, direction);
}

/** The ISO week of the week that holds `day`, counted from its Monday, as the calendar does. */
export function nuiSchedulerIsoWeek(frame: NuiSchedulerFrame, day: NuiDate): number {
  const first = nuiAddDays(day, -((nuiWeekday(day) - frame.start + 7) % 7));
  return nuiIsoWeek(nuiAddDays(first, (8 - frame.start) % 7));
}

/** The slot a time of day falls in, kept within the slots shown. */
function slotOf(frame: NuiSchedulerFrame, minutes: number): number {
  const slots = frame.slots;
  const index = Math.floor((minutes - slots[0]) / frame.step);
  return slots[Math.min(slots.length - 1, Math.max(0, index))];
}

// --- Cells -----------------------------------------------------------------------

/**
 * A cell's key: its day, then its slot (minutes since midnight, `all`, or empty
 * for a whole day), then the index of its resource.
 */
export function nuiSchedulerKey(
  day: NuiDate,
  slot: NuiSchedulerCellSlot,
  resource: number | null,
): string {
  if (resource !== null) return `${day}|${slot ?? ''}|${resource}`;
  return slot === null ? day : `${day}|${slot}`;
}

export function nuiSchedulerCellKey(cell: NuiSchedulerCell): string {
  return nuiSchedulerKey(cell.day, cell.slot, cell.resource);
}

/** The cell a key stands for. */
export function nuiSchedulerCellFromKey(value: string): NuiSchedulerCell {
  const [day, slot, resource] = value.split('|');
  return {
    day,
    slot: slot === undefined || slot === '' ? null : slot === 'all' ? 'all' : +slot,
    resource: resource === undefined ? null : +resource,
  };
}

/** Where the keyboard is, kept on a cell that's shown. */
export function nuiSchedulerCursor(
  frame: NuiSchedulerFrame,
  days: readonly NuiDate[],
  date: NuiDate,
  slot: NuiSchedulerCellSlot,
  resourceId: string | null,
): NuiSchedulerCell {
  const day = days.includes(date) ? date : (days.find((d) => d > date) ?? days[days.length - 1]);
  let at = slot;
  if (!frame.slotted) at = null;
  else if (at === null || (at === 'all' && frame.view === 'timeline')) at = frame.scrollSlot;
  else if (at !== 'all') at = slotOf(frame, at);
  const resource = frame.laid.length
    ? Math.max(
        0,
        frame.laid.findIndex((r) => r.id === resourceId),
      )
    : null;
  return { day, slot: at, resource };
}

/** A cell's time: minutes since 1970, from and to. */
export function nuiSchedulerCellTime(
  frame: NuiSchedulerFrame,
  cell: NuiSchedulerCell,
): [number, number] {
  const midnight = nuiSchedulerMinutes(cell.day);
  if (cell.slot === null || cell.slot === 'all') return [midnight, midnight + DAY];
  return [midnight + cell.slot, midnight + cell.slot + frame.step];
}

/** The time a selection covers. */
function selectedTime(
  frame: NuiSchedulerFrame,
  selection: NuiSchedulerSelection,
): [number, number] {
  const a = nuiSchedulerCellTime(frame, selection.anchor);
  const b = nuiSchedulerCellTime(frame, selection.focus);
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

/** Whether a cell is in the chosen time. */
export function nuiSchedulerIsSelected(
  frame: NuiSchedulerFrame,
  selection: NuiSchedulerSelection | null,
  day: NuiDate,
  slot: NuiSchedulerCellSlot,
  resource: number | null,
): boolean {
  if (!selection) return false;
  const { anchor } = selection;
  if ((anchor.slot === 'all') !== (slot === 'all') || anchor.resource !== resource) return false;
  const [from, to] = selectedTime(frame, selection);
  const [start, end] = nuiSchedulerCellTime(frame, { day, slot, resource });
  return start >= from && end <= to;
}

/** The time a selection chooses, as `slotSelect` (`onSlotSelect` in React) reports it. */
export function nuiSchedulerChosen(
  frame: NuiSchedulerFrame,
  selection: NuiSchedulerSelection,
): NuiSchedulerSlot {
  const [from, to] = selectedTime(frame, selection);
  const allDay = selection.anchor.slot === null || selection.anchor.slot === 'all';
  const resource =
    selection.anchor.resource === null ? undefined : frame.laid[selection.anchor.resource]?.id;
  return {
    ...(allDay
      ? {
          start: nuiSchedulerValue(from).slice(0, 10),
          end: nuiSchedulerValue(to - 1).slice(0, 10),
        }
      : { start: nuiSchedulerValue(from), end: nuiSchedulerValue(to) }),
    allDay,
    ...(resource === undefined ? {} : { resource }),
  };
}

/** The id of a resource laid out, from its index. */
export function nuiSchedulerResourceId(
  frame: NuiSchedulerFrame,
  resource: number | null,
): string | null {
  return resource === null ? null : (frame.laid[resource]?.id ?? null);
}

/** The index of a resource among those laid out, from its id. */
function indexOf(frame: NuiSchedulerFrame, resource: string | null): number | null {
  if (resource === null) return null;
  const index = frame.laid.findIndex((r) => r.id === resource);
  return index < 0 ? null : index;
}

// --- Events ----------------------------------------------------------------------

/** All-day events, and timed ones a day long or longer, go in the all-day row. */
function onTop(span: NuiSchedulerSpan): boolean {
  return span.allDay || span.end - span.start >= DAY;
}

/** The spans of each resource. */
export function nuiSchedulerByResource<T>(
  spans: readonly NuiSchedulerSpan<T>[],
): Map<string, NuiSchedulerSpan<T>[]> {
  const map = new Map<string, NuiSchedulerSpan<T>[]>();
  for (const span of spans) {
    for (const id of nuiSchedulerResources(span.event)) push(map, id, span);
  }
  return map;
}

/** An event's colors: its own, else its resource's, else the accent. */
export function nuiSchedulerPaint(
  span: NuiSchedulerSpan,
  resources: readonly NuiSchedulerResource[],
): { tone: NuiSchedulerTone; color: string | null } {
  const event = span.event;
  if (event.color) return { tone: event.tone ?? 'accent', color: event.color };
  if (event.tone) return { tone: event.tone, color: null };
  const first = nuiSchedulerResources(event)[0];
  const resource = first === undefined ? undefined : resources.find((r) => r.id === first);
  return { tone: resource?.tone ?? 'accent', color: resource?.color ?? null };
}

/** Whether a cell lies outside working hours. */
export function nuiSchedulerOffHours(
  frame: NuiSchedulerFrame,
  businessHours: readonly NuiSchedulerHours[] | null | undefined,
  day: NuiDate,
  slot: NuiSchedulerCellSlot,
  resource: number | null,
): boolean {
  const hours =
    (resource === null ? undefined : frame.laid[resource]?.businessHours) ?? businessHours;
  if (!hours) return false;
  return typeof slot === 'number'
    ? !nuiSchedulerWorking(hours, day, slot, slot + frame.step)
    : !nuiSchedulerWorking(hours, day);
}

// --- Words -----------------------------------------------------------------------

/** An event's time, as it shows on the event. */
export function nuiSchedulerTimeText(
  span: NuiSchedulerSpan,
  formats: NuiSchedulerFormats,
  words: NuiSchedulerLabels,
): string {
  if (span.allDay) return words.allDay;
  const start = nuiUtc(nuiSchedulerValue(span.start));
  const end = nuiUtc(nuiSchedulerValue(span.end));
  return span.end - span.start < DAY &&
    Math.floor(span.start / DAY) === Math.floor((span.end - 1) / DAY)
    ? formats.time.formatRange(start, end)
    : formats.range.formatRange(start, end);
}

/** When an event starts, for the month's short lines. */
export function nuiSchedulerStartText(
  span: NuiSchedulerSpan,
  formats: NuiSchedulerFormats,
): string {
  return formats.time.format(nuiUtc(nuiSchedulerValue(span.start)));
}

/** An event's day and time, in words. */
export function nuiSchedulerWhen(
  span: NuiSchedulerSpan,
  formats: NuiSchedulerFormats,
  words: NuiSchedulerLabels,
): string {
  const start = nuiUtc(nuiSchedulerValue(span.start));
  if (span.allDay) {
    return span.end - span.start > DAY
      ? `${formats.range.formatRange(start, nuiUtc(nuiSchedulerValue(span.end - 1)))}, ${words.allDay}`
      : `${formats.long.format(start)}, ${words.allDay}`;
  }
  return `${formats.long.format(start)}, ${nuiSchedulerTimeText(span, formats, words)}`;
}

/** The names of an event's resources, when they're shown. */
export function nuiSchedulerResourceNames(
  span: NuiSchedulerSpan,
  resources: readonly NuiSchedulerResource[],
): string {
  if (!resources.length) return '';
  return nuiSchedulerResources(span.event)
    .map((id) => resources.find((r) => r.id === id)?.title)
    .filter((title) => title !== undefined)
    .join(', ');
}

/** An event's name for screen readers: its title, resources, day and time. */
export function nuiSchedulerEventLabel(
  span: NuiSchedulerSpan,
  resources: readonly NuiSchedulerResource[],
  formats: NuiSchedulerFormats,
  words: NuiSchedulerLabels,
): string {
  const names = nuiSchedulerResourceNames(span, resources);
  return [
    span.event.title,
    ...(names ? [names] : []),
    nuiSchedulerWhen(span, formats, words),
    ...(span.event.recurrenceId === undefined ? [] : [words.repeats]),
  ].join(', ');
}

/** What's shown, as the toolbar's title says it: a month, a week, or a day. */
export function nuiSchedulerTitle(
  frame: NuiSchedulerFrame,
  days: readonly NuiDate[],
  date: NuiDate,
  anchor: NuiDate,
  formats: NuiSchedulerFormats,
): string {
  switch (frame.view === 'timeline' ? frame.timelineSpan : frame.view) {
    case 'month':
      return formats.month.format(nuiUtc(date));
    case 'day':
      return formats.full.format(nuiUtc(anchor));
    default:
      return formats.range.formatRange(nuiUtc(days[0]), nuiUtc(days[days.length - 1]));
  }
}

// --- The time grid -----------------------------------------------------------------

/** The time grid's columns: each day, and each day of each resource when they're laid out. */
export function nuiSchedulerColumns(
  frame: NuiSchedulerFrame,
  days: readonly NuiDate[],
): NuiSchedulerColumn[] {
  if (frame.view !== 'week' && frame.view !== 'day') return [];
  if (!frame.laid.length) {
    return days.map((day) => ({ day, resource: null, index: null, group: false }));
  }
  return frame.laid.flatMap((resource, index) =>
    days.map((day, i) => ({ day, resource, index, group: i === 0 && index > 0 })),
  );
}

/** Timed events, placed side by side, by the cell they start in. */
export function nuiSchedulerTimed(
  frame: NuiSchedulerFrame,
  columns: readonly NuiSchedulerColumn[],
  spansOf: (resource: NuiSchedulerResource | null) => readonly NuiSchedulerSpan[],
): Map<string, NuiSchedulerShown[]> {
  const map = new Map<string, NuiSchedulerShown[]>();
  const { from, to } = frame.window;
  const step = frame.step;
  for (const column of columns) {
    const timed = spansOf(column.resource).filter((s) => !onTop(s));
    for (const part of nuiSchedulerPlace(timed, column.day, from, to)) {
      const slot = slotOf(frame, part.start);
      // At least half a slot long, so it can be read and grabbed.
      const length = Math.max(0.5, (part.end - part.start) / step);
      push(map, nuiSchedulerKey(column.day, slot, column.index), {
        span: part.span,
        place: {
          kind: 'timed',
          offset: (part.start - slot) / step,
          length,
          column: part.column,
          columns: part.columns,
          width: part.width,
          before: part.before,
          after: part.after,
          short: length <= 1,
          resize: !part.after,
        },
      });
    }
  }
  return map;
}

/** Bars in the all-day row, by the cell they start in, and how many lanes they take. */
export function nuiSchedulerTopBars(
  frame: NuiSchedulerFrame,
  days: readonly NuiDate[],
  spansOf: (resource: NuiSchedulerResource | null) => readonly NuiSchedulerSpan[],
): { map: Map<string, NuiSchedulerShown[]>; lanes: number } {
  const map = new Map<string, NuiSchedulerShown[]>();
  let lanes = 0;
  if (frame.view !== 'week' && frame.view !== 'day') return { map, lanes };
  const groups = frame.laid.length ? frame.laid : [null];
  groups.forEach((resource, index) => {
    const top = spansOf(resource).filter((s) => onTop(s));
    for (const bar of nuiSchedulerLanes(top, days)) {
      push(map, nuiSchedulerKey(days[bar.from], 'all', resource ? index : null), barOf(bar, true));
      lanes = Math.max(lanes, bar.lane + 1);
    }
  });
  return { map, lanes };
}

/** Where the now line crosses the time grid: its day, its slot, and how far into it. */
export function nuiSchedulerNowCell(
  frame: NuiSchedulerFrame,
  now: string | null,
): { day: NuiDate; slot: number; offset: number } | null {
  if (!now) return null;
  const minutes = nuiSchedulerMinutes(now) - nuiSchedulerMinutes(now.slice(0, 10));
  const { from, to } = frame.window;
  if (minutes < from || minutes >= to) return null;
  const slot = slotOf(frame, minutes);
  return { day: now.slice(0, 10), slot, offset: (minutes - slot) / frame.step };
}

// --- The timeline -------------------------------------------------------------------

export interface NuiSchedulerUnit {
  day: NuiDate;
  slot: number | null;
  label: string;
}

/** The timeline's columns: slots of its day, or its days. */
export function nuiSchedulerUnits(
  frame: NuiSchedulerFrame,
  days: readonly NuiDate[],
  slotLabels: readonly string[],
): NuiSchedulerUnit[] {
  if (frame.view !== 'timeline') return [];
  if (frame.slotted) {
    const day = days[0];
    return frame.slots.map((slot, i) => ({ day, slot, label: slotLabels[i] }));
  }
  return days.map((day) => ({ day, slot: null, label: '' }));
}

export interface NuiSchedulerTimelineRow {
  resource: NuiSchedulerResource | null;
  index: number | null;
  lanes: number;
  items: Map<string, NuiSchedulerShown[]>;
  count: number;
}

/** The timeline's rows: each resource, with its events by the cell they start in. */
export function nuiSchedulerTimeline(
  frame: NuiSchedulerFrame,
  days: readonly NuiDate[],
  spansOf: (resource: NuiSchedulerResource | null) => readonly NuiSchedulerSpan[],
): NuiSchedulerTimelineRow[] {
  if (frame.view !== 'timeline') return [];
  const rows: { resource: NuiSchedulerResource | null; index: number | null }[] = frame.laid.length
    ? frame.laid.map((resource, index) => ({ resource, index }))
    : [{ resource: null, index: null }];
  const step = frame.step;
  const { from, to } = frame.window;
  return rows.map(({ resource, index }) => {
    const items = new Map<string, NuiSchedulerShown[]>();
    let lanes = 0;
    const spans = spansOf(resource);
    if (frame.slotted) {
      const day = days[0];
      const midnight = nuiSchedulerMinutes(day);
      const minimum = Math.max(15, step / 2);
      for (const item of nuiSchedulerStack(spans, midnight + from, midnight + to, minimum)) {
        const at = item.start - midnight;
        const slot = slotOf(frame, at);
        push(items, nuiSchedulerKey(day, slot, index), {
          span: item.span,
          place: {
            kind: 'bar',
            offset: (at - slot) / step,
            span: Math.max(minimum, item.end - item.start) / step,
            lane: item.lane,
            before: item.before,
            after: item.after,
            // All day long, it has no end to drag within the day.
            resize: !item.after && !item.span.allDay,
          },
        });
        lanes = Math.max(lanes, item.lane + 1);
      }
    } else {
      for (const bar of nuiSchedulerLanes(spans, days)) {
        push(items, nuiSchedulerKey(days[bar.from], null, index), barOf(bar, true));
        lanes = Math.max(lanes, bar.lane + 1);
      }
    }
    return { resource, index, lanes, items, count: spans.length };
  });
}

// --- The month grid -----------------------------------------------------------------

export interface NuiSchedulerMonthDay {
  day: NuiDate;
  number: string;
  label: string;
  outside: boolean;
  bars: NuiSchedulerShown[];
  more: number;
}

export interface NuiSchedulerMonthWeek {
  number: number | null;
  days: NuiSchedulerMonthDay[];
}

export function nuiSchedulerWeeks(
  frame: NuiSchedulerFrame,
  range: readonly NuiDate[],
  date: NuiDate,
  spans: readonly NuiSchedulerSpan[],
  formats: NuiSchedulerFormats,
  words: NuiSchedulerLabels,
  weekNumbers: boolean,
): NuiSchedulerMonthWeek[] {
  if (frame.view !== 'month') return [];
  const month = date.slice(0, 7);
  return Array.from({ length: range.length / 7 }, (_, w) => {
    const week = nuiSchedulerShownDays(frame, range.slice(w * 7, w * 7 + 7));
    const bars = nuiSchedulerLanes(spans, week);
    const starts = new Map<number, NuiSchedulerBar[]>();
    for (const bar of bars) push(starts, bar.from, bar);
    return {
      number: weekNumbers ? nuiSchedulerIsoWeek(frame, range[w * 7]) : null,
      days: week.map((day, i) => {
        const covering = bars.filter((b) => b.from <= i && b.to >= i);
        // A timed event is a line with a dot here: only all-day bars resize.
        const visible = (starts.get(i) ?? [])
          .filter((b) => b.lane < LANES)
          .map((b) => barOf(b, b.span.allDay));
        // A bar that began in an earlier cell of this week and sits in a hidden lane
        // still counts here, in "N more".
        const more = covering.filter((b) => b.lane >= LANES).length;
        return {
          day,
          number: formats.day.format(nuiUtc(day)),
          label: `${formats.full.format(nuiUtc(day))}, ${covering.length ? words.events(covering.length) : words.empty}`,
          outside: day.slice(0, 7) !== month,
          bars: visible,
          more,
        };
      }),
    };
  });
}

// --- The agenda ---------------------------------------------------------------------

export function nuiSchedulerAgenda(
  days: readonly NuiDate[],
  spans: readonly NuiSchedulerSpan[],
  formats: NuiSchedulerFormats,
): { day: NuiDate; label: string; spans: NuiSchedulerSpan[] }[] {
  return days
    .map((day) => {
      const from = nuiSchedulerMinutes(day);
      return {
        day,
        label: formats.long.format(nuiUtc(day)),
        spans: spans.filter((s) => s.start < from + DAY && s.end > from),
      };
    })
    .filter((group) => group.spans.length);
}

// --- Dragging -----------------------------------------------------------------------

/** Where a dragged event would land, drawn in the cell it starts in. */
export function nuiSchedulerGhost(
  frame: NuiSchedulerFrame,
  preview: NuiSchedulerPreview | null,
  days: readonly NuiDate[],
  weeks: readonly NuiSchedulerMonthWeek[],
  resources: readonly NuiSchedulerResource[],
): NuiSchedulerGhost | null {
  if (!preview) return null;
  const { span, start, end } = preview;
  const view = frame.view;
  const index = indexOf(frame, preview.resource);
  const colors = nuiSchedulerPaint(span, resources);
  const base = { tone: colors.tone, color: colors.color, title: span.event.title };
  if (frame.slotted && (view === 'timeline' || !onTop(span))) {
    // A block in the time grid, or along the day's timeline.
    const day = view === 'timeline' ? days[0] : nuiSchedulerValue(start).slice(0, 10);
    if (!days.includes(day)) return null;
    const midnight = nuiSchedulerMinutes(day);
    const { from, to } = frame.window;
    const shownStart = Math.max(start, midnight + from);
    const shownEnd = Math.min(end, midnight + to);
    if (shownEnd <= shownStart) return null;
    const slot = slotOf(frame, shownStart - midnight);
    const step = frame.step;
    const minimum = view === 'timeline' ? Math.max(15, step / 2) : step / 2;
    return {
      ...base,
      cell: nuiSchedulerKey(day, slot, index),
      kind: view === 'timeline' ? 'bar' : 'timed',
      offset: (shownStart - midnight - slot) / step,
      length: Math.max(minimum, shownEnd - shownStart) / step,
    };
  }
  // A bar across days: from its first day shown, to the end of that row.
  const rows = view === 'month' ? weeks.map((week) => week.days.map((d) => d.day)) : [days];
  const first = Math.floor(start / DAY);
  const last = Math.floor((end - 1) / DAY);
  for (const row of rows) {
    const numbers = row.map((day) => nuiDayNumber(day));
    const from = numbers.findIndex((n) => n >= first);
    if (from < 0 || numbers[from] > last) continue;
    let to = numbers.length - 1;
    while (numbers[to] > last) to--;
    const slot = view === 'month' || view === 'timeline' ? null : 'all';
    return {
      ...base,
      cell: nuiSchedulerKey(row[from], slot, index),
      kind: 'bar',
      offset: 0,
      length: to - from + 1,
    };
  }
  return null;
}

/** An event's new times, as `eventChange` (`onEventChange` in React) reports them. */
export function nuiSchedulerProposal<T>(
  span: NuiSchedulerSpan,
  start: number,
  end: number,
  resource?: string | readonly string[],
): NuiSchedulerChange<T> {
  const event = span.event as NuiSchedulerEvent<T>;
  return {
    event,
    ...(span.allDay
      ? {
          start: nuiSchedulerValue(start).slice(0, 10),
          end: nuiSchedulerValue(end - 1).slice(0, 10),
        }
      : { start: nuiSchedulerValue(start), end: nuiSchedulerValue(end) }),
    ...(resource === undefined ? {} : { resource }),
  };
}

/** An event's resources with one swapped for another, as a move between them leaves them. */
function swap(span: NuiSchedulerSpan, from: string, to: string): string | readonly string[] {
  const resource = span.event.resource;
  if (resource === undefined || typeof resource === 'string') return to;
  return [...new Set(resource.map((id) => (id === from ? to : id)))];
}

/** The resources a dragged event lands on, when it moved between them. */
export function nuiSchedulerMoveTo(
  frame: NuiSchedulerFrame,
  preview: NuiSchedulerPreview,
  origin: number | null | undefined,
): string | readonly string[] | undefined {
  if (preview.resource === null || origin === null || origin === undefined) return undefined;
  const from = frame.laid[origin]?.id;
  return from === undefined || from === preview.resource
    ? undefined
    : swap(preview.span, from, preview.resource);
}

/** Where a drag would put its event, with the pointer at `point`; null for no change. */
export function nuiSchedulerDragPreview(
  frame: NuiSchedulerFrame,
  drag: NuiSchedulerDrag,
  point: NuiSchedulerPoint,
  snap: number,
): NuiSchedulerPreview | null {
  const span = drag.span!;
  const origin = drag.origin;
  const days = typeof point.cell.slot !== 'number';
  const fromDays = typeof origin.cell.slot !== 'number';
  // Day cells move events by days; an all-day event keeps to whole days anywhere.
  const whole = days || span.allDay;
  const shift = Math.floor(point.time / DAY) - Math.floor(origin.time / DAY);
  if (drag.kind === 'resize') {
    let end: number;
    if (!whole) end = Math.max(span.start + snap, Math.round(point.time / snap) * snap);
    else if (span.allDay)
      end = Math.max(span.start + DAY, (Math.floor(point.time / DAY) + 1) * DAY);
    else end = Math.max(span.start + snap, span.end + shift * DAY);
    return {
      span,
      start: span.start,
      end,
      resource: nuiSchedulerResourceId(frame, origin.cell.resource),
    };
  }
  // A timed event keeps to the time grid, an all-day one to whole days.
  if (days !== fromDays) return null;
  const delta = whole
    ? shift * DAY
    : Math.round((span.start + point.time - origin.time) / snap) * snap - span.start;
  return {
    span,
    start: span.start + delta,
    end: span.end + delta,
    resource: frame.laid.length ? nuiSchedulerResourceId(frame, point.cell.resource) : null,
  };
}

// --- Keyboard -----------------------------------------------------------------------

/** The cell a key moves to from `cell`, or null for a key the grid doesn't take. */
export function nuiSchedulerTarget(
  frame: NuiSchedulerFrame,
  cell: NuiSchedulerCell,
  keyName: string,
  ctrl: boolean,
  rtl: boolean,
  view: {
    days: readonly NuiDate[];
    columns: readonly NuiSchedulerColumn[];
    weeks: readonly NuiSchedulerMonthWeek[];
  },
): NuiSchedulerCell | null {
  const across = (keyName === 'ArrowRight' ? 1 : keyName === 'ArrowLeft' ? -1 : 0) * (rtl ? -1 : 1);
  const down = keyName === 'ArrowDown' ? 1 : keyName === 'ArrowUp' ? -1 : 0;
  const days = view.days;
  if (keyName === 'PageUp' || keyName === 'PageDown') {
    const direction = keyName === 'PageUp' ? -1 : 1;
    return { ...cell, day: nuiSchedulerPaged(frame, cell.day, direction) };
  }
  if (frame.view === 'month') {
    if (across) return { ...cell, day: nextShown(frame, nuiAddDays(cell.day, across), across) };
    if (down) return { ...cell, day: nuiAddDays(cell.day, 7 * down) };
    if (keyName !== 'Home' && keyName !== 'End') return null;
    const row = view.weeks.find((week) => week.days.some((d) => d.day === cell.day))?.days;
    if (!row) return null;
    return { ...cell, day: row[keyName === 'Home' ? 0 : row.length - 1].day };
  }
  if (frame.view === 'timeline') {
    const rows = Math.max(1, frame.laid.length);
    const resource = cell.resource ?? 0;
    const slots = frame.slots;
    if (down) {
      return cell.resource === null
        ? cell
        : { ...cell, resource: Math.min(rows - 1, Math.max(0, resource + down)) };
    }
    if (keyName === 'Home' || keyName === 'End') {
      const end = keyName === 'End';
      if (ctrl) return cell.resource === null ? cell : { ...cell, resource: end ? rows - 1 : 0 };
      return frame.slotted
        ? { ...cell, slot: slots[end ? slots.length - 1 : 0] }
        : { ...cell, day: days[end ? days.length - 1 : 0] };
    }
    if (!across) return null;
    if (!frame.slotted) {
      return { ...cell, day: nextShown(frame, nuiAddDays(cell.day, across), across) };
    }
    const index = slots.indexOf(cell.slot as number) + across;
    return { ...cell, slot: slots[Math.min(slots.length - 1, Math.max(0, index))] };
  }
  // The week and the day: columns of days (of each resource), rows of slots.
  const slots = frame.slots;
  const last = slots[slots.length - 1];
  if (down) {
    if (cell.slot === 'all') return { ...cell, slot: down > 0 ? slots[0] : 'all' };
    const index = slots.indexOf(cell.slot as number) + down;
    return { ...cell, slot: index < 0 ? 'all' : slots[Math.min(slots.length - 1, index)] };
  }
  const columns = view.columns;
  const current = columns.findIndex((c) => c.day === cell.day && c.index === cell.resource);
  if (keyName === 'Home' || keyName === 'End') {
    if (ctrl) return { ...cell, slot: keyName === 'Home' ? 'all' : last };
    const group = columns.filter((c) => c.index === cell.resource);
    const column = group[keyName === 'Home' ? 0 : group.length - 1];
    return { ...cell, day: column.day };
  }
  if (!across) return null;
  const column = columns[current + across];
  if (column) return { ...cell, day: column.day, resource: column.index };
  // Past either end, the next or previous page, from its first or last column.
  const page = landOn(frame, nuiSchedulerPage(frame.view, cell.day, across), across);
  const shown = nuiSchedulerShownDays(frame, nuiSchedulerDays(frame.view, page, frame.start));
  return {
    ...cell,
    day: shown[across > 0 ? 0 : shown.length - 1],
    resource: frame.laid.length ? (across > 0 ? 0 : frame.laid.length - 1) : null,
  };
}

/** Where Alt and an arrow move an event to, or with Shift, how they change its length. */
export function nuiSchedulerMoved(
  frame: NuiSchedulerFrame,
  span: NuiSchedulerSpan,
  cell: NuiSchedulerCell,
  keyName: string,
  shift: boolean,
  rtl: boolean,
  snap: number,
  columns: readonly NuiSchedulerColumn[],
): {
  start: number;
  end: number;
  resource?: string | readonly string[];
  /** The resource it ends up on, among those laid out. */
  to: number | null;
} | null {
  const view = frame.view;
  const across = (keyName === 'ArrowRight' ? 1 : keyName === 'ArrowLeft' ? -1 : 0) * (rtl ? -1 : 1);
  const down = keyName === 'ArrowDown' ? 1 : keyName === 'ArrowUp' ? -1 : 0;
  const timeline = view === 'timeline';
  // Whole days for all-day events, and in the month, the all-day row and a timeline of days.
  const unit =
    span.allDay || view === 'month' || (timeline ? !frame.slotted : onTop(span)) ? DAY : snap;
  let { start, end } = span;
  if (shift) {
    // Time runs across the timeline and along bars, and down the time grid.
    const delta = timeline ? across : unit === DAY ? across || down : down;
    if (!delta) return null;
    // At least a step long, and never longer for being shortened.
    end = Math.max(Math.min(end, start + unit), end + delta * unit);
    return { start, end, to: cell.resource };
  }
  // Moves by days land on days the views show.
  const day = nuiSchedulerValue(span.start).slice(0, 10);
  let resource: string | readonly string[] | undefined;
  let to = cell.resource;
  let delta: number;
  if (timeline && down) {
    const laid = frame.laid;
    if (cell.resource === null || !laid[cell.resource + down]) return null;
    to = cell.resource + down;
    resource = swap(span, laid[cell.resource].id, laid[to].id);
    delta = 0;
  } else if (timeline) {
    delta = unit === DAY ? stepDays(frame, day, across) * DAY : across * unit;
  } else if (view === 'month') {
    delta = (down ? 7 * down : stepDays(frame, day, across)) * DAY;
  } else if (down) {
    delta = unit === DAY ? stepDays(frame, day, down) * DAY : down * unit;
  } else {
    // To the next column: another day, or another resource's.
    const current = columns.findIndex((c) => c.day === cell.day && c.index === cell.resource);
    const column = columns[current + across];
    delta =
      (column ? nuiDayNumber(column.day) - nuiDayNumber(cell.day) : stepDays(frame, day, across)) *
      DAY;
    if (column?.resource && cell.resource !== null && column.index !== cell.resource) {
      resource = swap(span, frame.laid[cell.resource].id, column.resource.id);
      to = column.index;
    }
  }
  return { start: start + delta, end: end + delta, resource, to };
}

/** The cell an event moved to `start` begins in, on the resource it went to. */
export function nuiSchedulerLanding(
  frame: NuiSchedulerFrame,
  span: NuiSchedulerSpan,
  start: number,
  resource: number | null,
): NuiSchedulerCell {
  const at = nuiSchedulerValue(start);
  const day = at.slice(0, 10);
  const view = frame.view;
  if (view === 'month' || (view === 'timeline' && !frame.slotted)) {
    return { day, slot: null, resource: view === 'month' ? null : resource };
  }
  if (view !== 'timeline' && onTop(span)) return { day, slot: 'all', resource };
  return {
    day,
    slot: slotOf(frame, nuiSchedulerMinutes(at) - nuiSchedulerMinutes(day)),
    resource,
  };
}

/** A bar across days, in its lane; one whose end shows can resize. */
function barOf(bar: NuiSchedulerBar, resizable: boolean): NuiSchedulerShown {
  return {
    span: bar.span,
    place: {
      kind: 'bar',
      span: bar.to - bar.from + 1,
      lane: bar.lane,
      before: bar.before,
      after: bar.after,
      resize: resizable && !bar.after,
    },
  };
}

function push<K, V>(map: Map<K, V[]>, at: K, value: V): void {
  const list = map.get(at);
  if (list) list.push(value);
  else map.set(at, [value]);
}
