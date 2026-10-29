'use client';

import {
  type NuiDate,
  nuiToday,
  nuiUtc,
  nuiWeekdayNames,
  nuiWeekInfo,
} from '@needless-ui/core';
import {
  NUI_SCHEDULER_LABELS,
  type NuiSchedulerChange,
  type NuiSchedulerEvent,
  type NuiSchedulerHours,
  type NuiSchedulerLabels,
  type NuiSchedulerResource,
  type NuiSchedulerSlot,
  type NuiSchedulerSpan,
  type NuiSchedulerTimelineSpan,
  nuiSchedulerValue,
  type NuiSchedulerView,
  nuiSchedulerVisible,
} from '@needless-ui/core/scheduler';
import {
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type Ref,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { isRtl, useControllable, useNow, useTouchActive } from '../internal.js';
import { nuiPersonality, type NuiPersonalityProps } from '../personality.js';
import {
  agendaOf,
  ALL_VIEWS,
  anchorOf,
  byResource,
  type Cell,
  cellFromKey,
  cellKey,
  chosen,
  columnsOf,
  cursorOf,
  type Drag,
  dragPreview,
  formatsOf,
  frameOf,
  type Ghost,
  ghostOf,
  idOf,
  isoWeekOf,
  isSelected as inSelection,
  key,
  label,
  landing,
  LONG_PRESS,
  moved,
  moveTo,
  nowCellOf,
  off as offHours,
  paged,
  paint,
  placedOf,
  type Point,
  type Preview,
  proposal,
  rangeOf,
  resourceNames,
  type Selection,
  shownDays,
  type Shown,
  SLOP,
  type Slot,
  startText,
  target,
  timelineOf,
  timeOf,
  timeText,
  titleOf,
  topBarsOf,
  unitsOf,
  weeksOf,
  when,
} from './model.js';

/** What an event's drawing gets, besides the event. */
export interface NuiSchedulerEventContext {
  /** The event's time as the scheduler writes it, such as `9:00 – 9:30 AM`. */
  time: string;
}

/** What a toolbar of your own gets: the title, the views, and paging. */
export interface NuiSchedulerToolbar {
  /** What's shown: a month, a week, or a day. */
  title: string;
  view: NuiSchedulerView;
  /** The views offered. */
  views: readonly NuiSchedulerView[];
  setView(view: NuiSchedulerView): void;
  previous(): void;
  next(): void;
  goToday(): void;
}

/** What the scheduler's `ref` reaches: paging, for a toolbar of your own. */
export interface NuiSchedulerHandle {
  /** Shows the previous month, week, day, or stretch of the agenda. */
  previous(): void;
  /** Shows the next month, week, day, or stretch of the agenda. */
  next(): void;
  /** Shows today. */
  goToday(): void;
  /** What's shown, as the toolbar's title says it. */
  readonly title: string;
}

export interface NuiSchedulerProps<T = unknown>
  extends
    NuiPersonalityProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'defaultValue' | 'onChange'> {
  events?: readonly NuiSchedulerEvent<T>[];
  /** Rooms, people or machines: rows of the timeline, and columns of the day and the week. */
  resources?: readonly NuiSchedulerResource[];
  /** The view shown. With it, update it from `onViewChange`; without, use `defaultView`. */
  view?: NuiSchedulerView;
  defaultView?: NuiSchedulerView;
  onViewChange?: (view: NuiSchedulerView) => void;
  /** The day shown, and where the keyboard is. With it, update it from `onDateChange`. */
  date?: NuiDate;
  /** By default, today. Give it when rendering on a server, whose today may not be the reader's. */
  defaultDate?: NuiDate;
  onDateChange?: (date: NuiDate) => void;
  /** The views people can switch between. By default all, and the timeline with resources. */
  views?: readonly NuiSchedulerView[];
  /** What the timeline shows: a day by its hours, or a week or a month by its days. */
  timelineSpan?: NuiSchedulerTimelineSpan;
  /** The first day of the week, 1 for Monday. By default, the locale's. */
  firstDay?: number;
  /** Minutes per row of the time grid, or per column of the day's timeline. */
  slotMinutes?: number;
  /** The step events move and resize by. By default, `slotMinutes`. */
  snapMinutes?: number;
  /** The hour the time grid starts at, and the hour it ends at: the rest isn't shown. */
  dayStart?: number;
  dayEnd?: number;
  /** The hour the time grid scrolls to at first. */
  scrollHour?: number;
  /** Days the agenda looks ahead. */
  agendaDays?: number;
  /** Working hours. Other time is shaded; resources can have their own. */
  businessHours?: readonly NuiSchedulerHours[] | null;
  /** Shows the weekend. Without it, the views leave out the locale's weekend days. */
  weekends?: boolean;
  /** Shows ISO week numbers: before each week of the month, and above the times. */
  weekNumbers?: boolean;
  /** Events can be moved and resized, by pointer and keyboard. */
  editable?: boolean;
  /** Time can be chosen on the grid, to create events. */
  selectable?: boolean;
  /**
   * Decides whether a move, a resize or a choice of time can happen. A drag it
   * turns down shows as not allowed, and drops nothing.
   */
  allow?: ((time: NuiSchedulerChange<T> | NuiSchedulerSlot) => boolean) | null;
  /**
   * Shows the toolbar, or draws one of your own from what it's given. Without one,
   * page through the `ref`.
   */
  toolbar?: boolean | ((toolbar: NuiSchedulerToolbar) => ReactNode);
  /** The level of the title, and of the agenda's days below it. */
  headingLevel?: number;
  /** Names, digits and clock. Defaults to `en-US`. */
  locale?: string;
  /** Texts to replace, for translation. */
  labels?: Partial<NuiSchedulerLabels>;
  /** Draws events yourself. */
  renderEvent?: (event: NuiSchedulerEvent<T>, context: NuiSchedulerEventContext) => ReactNode;
  /** Draws the heads of resources yourself, in the timeline and the resource columns. */
  renderResource?: (resource: NuiSchedulerResource) => ReactNode;
  /** An event was clicked, or chosen with Enter. */
  onEventClick?: (event: NuiSchedulerEvent<T>) => void;
  /** An event was moved or resized. Update `events` to keep the change. */
  onEventChange?: (change: NuiSchedulerChange<T>) => void;
  /** Time was chosen on the grid. */
  onSlotSelect?: (slot: NuiSchedulerSlot) => void;
  /** The days shown changed, first to last: load their events. */
  onRangeChange?: (range: { start: NuiDate; end: NuiDate }) => void;
  ref?: Ref<NuiSchedulerHandle>;
}

type Style = CSSProperties & Record<`--${string}`, string | number | undefined>;

/**
 * A scheduler: events in a month, a week, a day, an agenda, or a timeline of
 * resources. It shows the `events` you pass, and reports what people do:
 * `onEventClick`, `onEventChange` when an event is dragged or moved from the
 * keyboard, and `onSlotSelect` for time chosen on the grid, to create an event in.
 *
 * ```tsx
 * <NuiScheduler events={events} editable selectable
 *   onEventChange={move} onSlotSelect={create} />
 * ```
 *
 * The grid is one tab stop: the arrow keys move through days, times and
 * resources, Enter goes into a cell's events or chooses its time, and Alt with the
 * arrows moves an event.
 */
export function NuiScheduler<T = unknown>(props: NuiSchedulerProps<T>): ReactNode {
  const {
    events = [],
    resources = [],
    view: viewProp,
    defaultView = 'week',
    onViewChange,
    date: dateProp,
    defaultDate,
    onDateChange,
    views,
    timelineSpan = 'day',
    firstDay,
    slotMinutes = 30,
    snapMinutes,
    dayStart = 0,
    dayEnd = 24,
    scrollHour = 8,
    agendaDays = 30,
    businessHours = null,
    weekends = true,
    weekNumbers = false,
    editable = false,
    selectable = false,
    allow = null,
    toolbar = true,
    headingLevel = 2,
    locale = 'en-US',
    labels,
    renderEvent,
    renderResource,
    onEventClick,
    onEventChange,
    onSlotSelect,
    onRangeChange,
    corners,
    radius,
    density,
    className,
    ref,
    ...rest
  } = props;
  useTouchActive();

  const [view, setViewValue] = useControllable(viewProp, defaultView, onViewChange);
  const [date, setDate] = useControllable(dateProp, () => defaultDate ?? nuiToday(), onDateChange);
  const now = useNow();
  const today = now?.slice(0, 10) ?? null;

  const words = useMemo((): NuiSchedulerLabels => {
    const given = labels ?? {};
    return {
      ...NUI_SCHEDULER_LABELS,
      ...given,
      previous: { ...NUI_SCHEDULER_LABELS.previous, ...given.previous },
      next: { ...NUI_SCHEDULER_LABELS.next, ...given.next },
      views: { ...NUI_SCHEDULER_LABELS.views, ...given.views },
    };
  }, [labels]);
  const weekInfo = useMemo(() => nuiWeekInfo(locale), [locale]);
  const start = firstDay ?? weekInfo.firstDay;
  const weekend = weekInfo.weekend.join();
  const hidden = useMemo(
    () => new Set<number>(weekends ? [] : weekend.split(',').map(Number)),
    [weekends, weekend],
  );
  const offered = useMemo(
    () => views ?? (resources.length ? [...ALL_VIEWS, 'timeline' as const] : ALL_VIEWS),
    [views, resources.length],
  );
  const frameFor = (shown: NuiSchedulerView) =>
    frameOf({
      view: shown,
      timelineSpan,
      start,
      hidden,
      agendaDays,
      slotMinutes,
      dayStart,
      dayEnd,
      scrollHour,
      resources,
    });
  const frame = useMemo(
    () => frameFor(view),
    [
      view,
      timelineSpan,
      start,
      hidden,
      agendaDays,
      slotMinutes,
      dayStart,
      dayEnd,
      scrollHour,
      resources,
    ],
  );
  const laid = frame.laid;
  const snap = Math.max(1, snapMinutes ?? frame.step);

  /** The date the view shows from; every day of the view, hidden ones too; the days shown. */
  const anchor = anchorOf(frame, date);
  const range = useMemo(() => rangeOf(frame, anchor), [frame, anchor]);
  const days = useMemo(() => shownDays(frame, range), [frame, range]);
  const first = range[0];
  const last = range[range.length - 1];
  const spans = useMemo(() => nuiSchedulerVisible(events, first, last), [events, first, last]);
  const spansByResource = useMemo(() => byResource(spans), [spans]);
  const spansOf = useCallback(
    (resource: NuiSchedulerResource | null): readonly NuiSchedulerSpan[] =>
      resource ? (spansByResource.get(resource.id) ?? []) : spans,
    [spans, spansByResource],
  );

  // Where the keyboard is on the grid: its slot follows the view until keys move it.
  const slotSource = `${frame.slotted}|${frame.scrollSlot}`;
  const [slotState, setSlotState] = useState<{ source: string; slot: Slot }>(() => ({
    source: slotSource,
    slot: frame.slotted ? frame.scrollSlot : null,
  }));
  let slot = slotState.slot;
  if (slotState.source !== slotSource) {
    slot = frame.slotted ? frame.scrollSlot : null;
    setSlotState({ source: slotSource, slot });
  }
  const setSlot = (next: Slot) => setSlotState({ source: slotSource, slot: next });
  const [resourceId, setResourceId] = useState<string | null>(null);
  const cursor = useMemo(
    () => cursorOf(frame, days, date, slot, resourceId),
    [frame, days, date, slot, resourceId],
  );
  const [selection, setSelectionState] = useState<Selection | null>(null);
  const [drag, setDragState] = useState<Drag | null>(null);
  const [preview, setPreviewState] = useState<Preview | null>(null);
  const [status, setStatus] = useState('');
  /** Says something through the status region, even the same thing twice. */
  const announce = (message: string) =>
    setStatus((current) => (current === message ? `${message} ` : message));

  const formats = useMemo(() => formatsOf(locale), [locale]);
  const weekdays = useMemo(() => {
    const long = nuiWeekdayNames(locale, start, 'long');
    return nuiWeekdayNames(locale, start, 'short')
      .map((short, i) => ({ short, long: long[i], day: ((start - 1 + i) % 7) + 1 }))
      .filter((name) => !hidden.has(name.day));
  }, [locale, start, hidden]);
  const title = titleOf(frame, days, date, anchor, formats);
  const weekNumber = weekNumbers ? isoWeekOf(frame, days[0]) : null;
  const slotLabels = useMemo(
    () => frame.slots.map((minutes) => formats.time.format(nuiUtc(nuiSchedulerValue(minutes)))),
    [frame, formats],
  );

  // The views' structures.
  const columns = useMemo(() => columnsOf(frame, days), [frame, days]);
  const placed = useMemo(() => placedOf(frame, columns, spansOf), [frame, columns, spansOf]);
  const topBars = useMemo(() => topBarsOf(frame, days, spansOf), [frame, days, spansOf]);
  const nowCell = useMemo(() => nowCellOf(frame, now), [frame, now]);
  const units = useMemo(() => unitsOf(frame, days, slotLabels), [frame, days, slotLabels]);
  const timeline = useMemo(() => timelineOf(frame, days, spansOf), [frame, days, spansOf]);
  const weeks = useMemo(
    () => weeksOf(frame, range, date, spans, formats, words, weekNumbers),
    [frame, range, date, spans, formats, words, weekNumbers],
  );
  const agenda = useMemo(
    () => (view === 'agenda' ? agendaOf(days, spans, formats) : []),
    [view, days, spans, formats],
  );
  const ghost = useMemo(
    () => ghostOf(frame, preview, days, weeks, resources),
    [frame, preview, days, weeks, resources],
  );
  /** Whether `allow` turns down what's being dragged or chosen. */
  const invalid = useMemo(() => {
    if (!allow) return false;
    if (preview) {
      return !allow(
        proposal<T>(
          preview.span,
          preview.start,
          preview.end,
          moveTo(frame, preview, drag?.origin.cell.resource),
        ),
      );
    }
    return selection ? !allow(chosen(frame, selection)) : false;
  }, [allow, preview, selection, frame, drag]);
  /** What a drag does, for the cursor: a resize goes across along bars and the timeline. */
  const dragging = useMemo(() => {
    if (!drag?.moved) return null;
    const across = view === 'timeline' || typeof drag.origin.cell.slot !== 'number';
    return drag.kind === 'resize' && across ? 'resize-across' : drag.kind;
  }, [drag, view]);

  const root = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const dragRef = useRef<Drag | null>(null);
  const previewRef = useRef<Preview | null>(null);
  const suppressClick = useRef(false);
  const selectionRef = useRef<Selection | null>(null);
  const setDrag = (next: Drag | null) => {
    dragRef.current = next;
    setDragState(next);
  };
  const setSelection = (next: Selection | null) => {
    selectionRef.current = next;
    setSelectionState(next);
  };
  const setPreview = (next: Preview | null) => {
    previewRef.current = next;
    setPreviewState(next);
  };

  /** What handlers that run later (after a render, or on document events) read. */
  const latest = useRef({ frame, cursor, spans, allow, snap, props });
  useLayoutEffect(() => {
    latest.current = { frame, cursor, spans, allow, snap, props };
  });

  // Moves focus once the change on its way has rendered, to what `find` finds then.
  const pendingFocus = useRef<(() => HTMLElement | null | undefined) | null>(null);
  const [focusTick, setFocusTick] = useState(0);
  const focusAfterRender = (find: () => HTMLElement | null | undefined) => {
    pendingFocus.current = find;
    setFocusTick((tick) => tick + 1);
  };
  useLayoutEffect(() => {
    const find = pendingFocus.current;
    if (!find) return;
    pendingFocus.current = null;
    find()?.focus();
  }, [focusTick]);

  const cellElement = (cell: Cell): HTMLElement | null =>
    root.current?.querySelector<HTMLElement>(`[data-cell="${CSS.escape(cellKey(cell))}"]`) ?? null;

  // Tell the app which days are shown, so it can load their events.
  const reported = useRef('');
  useLayoutEffect(() => {
    const next = `${first}|${last}`;
    if (next === reported.current) return;
    reported.current = next;
    onRangeChange?.({ start: first, end: last });
  });

  // The time grid opens at the morning, not at midnight; a timeline of days, at today.
  const scrolled = useRef<{ key: string; body: HTMLElement | null }>({ key: '', body: null });
  useLayoutEffect(() => {
    const element = body.current;
    const at = `${view}|${timelineSpan}`;
    if (!element || (view !== 'week' && view !== 'day' && view !== 'timeline')) return;
    // Once for each view, and again when a view comes back with a body of its own.
    if (scrolled.current.key === at && scrolled.current.body === element) return;
    scrolled.current = { key: at, body: element };
    if (view !== 'timeline') {
      const row = element.querySelector<HTMLElement>(`[data-slot-row="${frame.scrollSlot}"]`);
      const head = element.querySelector<HTMLElement>('thead');
      if (row) element.scrollTop = row.offsetTop - (head?.offsetHeight ?? 0);
      return;
    }
    const cell = element.querySelector<HTMLElement>(
      frame.slotted ? `th[data-slot="${frame.scrollSlot}"]` : 'thead th[data-today]',
    );
    const corner = element.querySelector<HTMLElement>('.nui-scheduler-corner');
    if (!cell) return;
    const rect = cell.getBoundingClientRect();
    const box = element.getBoundingClientRect();
    // Today shows after a couple of the days before it.
    const inset =
      (corner?.getBoundingClientRect().width ?? 0) + (frame.slotted ? 0 : 2 * rect.width);
    element.scrollLeft += isRtl(root.current!)
      ? rect.right - (box.right - inset)
      : rect.left - (box.left + inset);
  });

  // --- Toolbar ------------------------------------------------------------------

  /** The title a view shows for a date, to announce it as it comes. */
  const titleFor = (shown: NuiSchedulerView, day: NuiDate) => {
    const next = shown === view ? frame : frameFor(shown);
    const at = anchorOf(next, day);
    return titleOf(next, shownDays(next, rangeOf(next, at)), day, at, formats);
  };

  const goToday = () => {
    const day = nuiToday();
    setDate(day);
    announce(titleFor(view, day));
  };

  const page = (direction: number) => {
    const day = paged(frame, anchor, direction);
    setDate(day);
    announce(titleFor(view, day));
  };

  const setView = (next: NuiSchedulerView, day = date) => {
    setViewValue(next);
    setSelection(null);
    announce(titleFor(next, day));
  };

  /** "N more" in a month cell opens that day. */
  const openDay = (day: NuiDate) => {
    setDate(day);
    setView('day', day);
  };

  const pageLabel = (direction: 'previous' | 'next') =>
    words[direction][view === 'timeline' ? timelineSpan : view];

  useImperativeHandle(ref, () => ({
    previous: () => page(-1),
    next: () => page(1),
    goToday,
    title,
  }));

  // --- Choosing time ------------------------------------------------------------

  const choose = (chosenSelection: Selection | null) => {
    const current = latest.current;
    if (!chosenSelection || !current.props.selectable) return;
    const slotChosen = chosen(current.frame, chosenSelection);
    setSelection(null);
    if (current.allow && !current.allow(slotChosen)) {
      announce(words.unavailable);
      return;
    }
    current.props.onSlotSelect?.(slotChosen);
  };

  /** Reports an event's new times, and says them; false when `allow` turns them down. */
  const change = (
    span: NuiSchedulerSpan,
    from: number,
    to: number,
    resource?: string | readonly string[],
  ): boolean => {
    const proposed = proposal<T>(span, from, to, resource);
    const was = proposal<T>(span, span.start, span.end);
    // Times that read the same aren't a change, such as an all-day event moved within its day.
    if (proposed.start === was.start && proposed.end === was.end && resource === undefined) {
      return false;
    }
    const check = latest.current.allow;
    if (check && !check(proposed)) {
      announce(words.unavailable);
      return false;
    }
    latest.current.props.onEventChange?.(proposed);
    announce(
      words.moved(span.event.title, when({ ...span, start: from, end: to }, formats, words)),
    );
    return true;
  };

  const spanOf = (element: Element): NuiSchedulerSpan | undefined => {
    const id = element.getAttribute('data-event-id');
    return latest.current.spans.find((s) => s.key === id);
  };

  const cellOf = (element: Element | null): Cell | null => {
    const value = element?.closest<HTMLElement>('[data-cell]')?.getAttribute('data-cell');
    return value ? cellFromKey(value) : null;
  };

  /** The cell under a point, beneath any events drawn over it, and the time there. */
  const pointAt = (x: number, y: number): Point | null => {
    const host = root.current;
    if (!host) return null;
    const hit = host.ownerDocument
      .elementsFromPoint(x, y)
      .find((element) => element.matches('[data-cell]') && host.contains(element));
    const cell = cellOf(hit ?? null);
    if (!cell) return null;
    const { frame: current } = latest.current;
    const [from, to] = timeOf(current, cell);
    if (typeof cell.slot !== 'number') return { cell, time: from };
    const rect = hit!.getBoundingClientRect();
    let share: number;
    if (current.view === 'timeline') {
      share = (isRtl(host) ? rect.right - x : x - rect.left) / rect.width;
    } else {
      share = (y - rect.top) / rect.height;
    }
    return { cell, time: from + Math.min(1, Math.max(0, share)) * (to - from) };
  };

  // --- Keyboard -----------------------------------------------------------------

  const onKeyDown = (event: ReactKeyboardEvent<HTMLTableElement>) => {
    const element = (event.target as HTMLElement).closest<HTMLElement>('.nui-scheduler-event');
    if (element) {
      onEventKeyDown(event, element);
      return;
    }
    const cellTarget = event.target as HTMLElement;
    if (!cellTarget.matches('[data-cell]')) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const firstEvent = cellTarget.querySelector<HTMLElement>(
        '.nui-scheduler-event:not([data-ghost])',
      );
      if (firstEvent && !selection) {
        firstEvent.focus();
        return;
      }
      // Without `selectable`, Enter on an empty cell chooses nothing, and marks nothing.
      if (selectable) choose(selection ?? { anchor: cursor, focus: cursor });
      return;
    }
    if (event.key === 'Escape') {
      if (selection) {
        event.preventDefault();
        setSelection(null);
      }
      return;
    }
    const next = target(
      frame,
      cursor,
      event.key,
      event.ctrlKey || event.metaKey,
      isRtl(root.current!),
      { days, columns, weeks },
    );
    if (!next) return;
    event.preventDefault();
    if (event.shiftKey && selectable && event.key.startsWith('Arrow')) {
      const from = selection?.anchor ?? cursor;
      // Chosen time keeps to one resource, and to the all-day row or to the slots.
      if (next.resource !== from.resource || (next.slot === 'all') !== (from.slot === 'all')) {
        return;
      }
      setSelection({ anchor: from, focus: next });
    } else {
      setSelection(null);
    }
    if (cellKey(next) === cellKey(cursor)) return;
    setSlot(next.slot);
    setResourceId(idOf(frame, next.resource));
    setDate(next.day);
    focusAfterRender(() => cellElement(latest.current.cursor));
  };

  /** On an event: arrows go through the cell's events; with Alt they move it. */
  const onEventKeyDown = (event: ReactKeyboardEvent, element: HTMLElement) => {
    const span = spanOf(element);
    const cell = cellOf(element);
    if (!span || !cell) return;
    if (event.altKey && event.key.startsWith('Arrow') && canEdit(span) && view !== 'agenda') {
      event.preventDefault();
      const move = moved(
        frame,
        span,
        cell,
        event.key,
        event.shiftKey,
        isRtl(root.current!),
        snap,
        columns,
      );
      if (!move || !change(span, move.start, move.end, move.resource)) return;
      // An occurrence the app replaces with an event of its own leaves focus on its new cell.
      const land = landing(frame, span, move.start, move.to);
      focusAfterRender(
        () =>
          root.current?.querySelector<HTMLElement>(
            `[data-event-id="${CSS.escape(span.key)}"]:not([data-ghost])`,
          ) ??
          cellElement(land) ??
          cellElement(latest.current.cursor),
      );
      return;
    }
    const container = element.closest<HTMLElement>('[data-cell]')!;
    const siblings = [
      ...container.querySelectorAll<HTMLElement>('.nui-scheduler-event:not([data-ghost])'),
    ];
    const index = siblings.indexOf(element);
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault();
        siblings[index + (event.key === 'ArrowDown' ? 1 : -1)]?.focus();
        return;
      }
      case 'Escape':
      case 'ArrowLeft':
      case 'ArrowRight':
        event.preventDefault();
        container.focus();
        return;
    }
  };

  const canEdit = (span: NuiSchedulerSpan) => span.event.editable ?? editable;

  const eventClicked = (element: HTMLElement) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    const span = spanOf(element);
    if (span) latest.current.props.onEventClick?.(span.event as NuiSchedulerEvent<T>);
  };

  const cellFocused = (day: NuiDate, at: Slot, resource: number | null) => {
    if (date !== day) setDate(day);
    if (slot !== at) setSlot(at);
    const id = idOf(frame, resource);
    if (id !== null && resourceId !== id) setResourceId(id);
  };

  // --- Pointer ------------------------------------------------------------------

  const onPointerDown = (event: ReactPointerEvent<HTMLTableElement>) => {
    if (event.button !== 0 || view === 'agenda') return;
    const targetElement = event.target as HTMLElement;
    const element = targetElement.closest<HTMLElement>('.nui-scheduler-event');
    const cell = cellOf(targetElement);
    const origin =
      pointAt(event.clientX, event.clientY) ??
      (cell ? { cell, time: timeOf(frame, cell)[0] } : null);
    if (!origin) return;
    let held: Drag;
    if (element) {
      const span = spanOf(element);
      if (!span || !canEdit(span)) return;
      const kind = targetElement.closest('.nui-scheduler-resize') ? 'resize' : 'move';
      held = { kind, span, origin, x: event.clientX, y: event.clientY, moved: false };
    } else if (selectable) {
      held = { kind: 'select', origin, x: event.clientX, y: event.clientY, moved: false };
    } else {
      return;
    }

    // A mouse or pen drags at once. A finger that moves at once scrolls the page:
    // it picks an event up (or starts choosing time) only after a long press.
    const doc = root.current!.ownerDocument;
    const pointer = event.pointerId;
    let picked = event.pointerType !== 'touch';
    let timer: ReturnType<typeof setTimeout> | undefined;
    const listening = new AbortController();
    const { signal } = listening;
    const stop = () => {
      clearTimeout(timer);
      listening.abort();
    };
    const cancel = () => {
      stop();
      setDrag(null);
      setPreview(null);
      setSelection(null);
    };
    if (picked) {
      setDrag(held);
    } else {
      timer = setTimeout(() => {
        picked = true;
        // Picked up: it shows where it would land, and follows the finger.
        setDrag({ ...held, moved: true });
        if (held.kind === 'select') {
          setSelection({ anchor: held.origin.cell, focus: held.origin.cell });
        } else {
          const span = held.span!;
          setPreview({
            span,
            start: span.start,
            end: span.end,
            resource: idOf(latest.current.frame, held.origin.cell.resource),
          });
        }
        // A tick to feel, where the page may vibrate (after the first tap on it).
        if (navigator.userActivation?.hasBeenActive !== false) navigator.vibrate?.(10);
      }, LONG_PRESS);
    }
    doc.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerId !== pointer) return;
        if (picked) onPointerMove(e);
        else if (Math.hypot(e.clientX - held.x, e.clientY - held.y) > SLOP) cancel();
      },
      { signal },
    );
    doc.addEventListener(
      'pointerup',
      (e) => {
        if (e.pointerId !== pointer) return;
        stop();
        // A tap before the long press is a click: it chooses its cell.
        if (!picked) dragRef.current = held;
        onPointerUp(e);
      },
      { signal },
    );
    // The browser took the gesture (a scroll, a zoom): nothing moves.
    doc.addEventListener('pointercancel', (e) => e.pointerId === pointer && cancel(), {
      signal,
    });
    // Once an event is held, the finger drags it, not the page.
    doc.addEventListener('touchmove', (e) => picked && e.cancelable && e.preventDefault(), {
      signal,
      passive: false,
    });
    doc.addEventListener('contextmenu', (e) => picked && e.preventDefault(), { signal });
    doc.addEventListener(
      'keydown',
      (e) => {
        if (e.key !== 'Escape') return;
        e.preventDefault();
        e.stopPropagation();
        cancel();
      },
      { signal, capture: true },
    );
  };

  const onPointerMove = (event: PointerEvent) => {
    const held = dragRef.current;
    if (!held) return;
    let current = held;
    if (!held.moved) {
      if (Math.hypot(event.clientX - held.x, event.clientY - held.y) < 4) return;
      current = { ...held, moved: true };
      setDrag(current);
    }
    const point = pointAt(event.clientX, event.clientY);
    if (!point) return;
    const origin = current.origin;
    if (current.kind === 'select') {
      if (
        (origin.cell.slot === 'all') === (point.cell.slot === 'all') &&
        origin.cell.resource === point.cell.resource
      ) {
        setSelection({ anchor: origin.cell, focus: point.cell });
      }
      return;
    }
    const next = dragPreview(latest.current.frame, current, point, latest.current.snap);
    if (next) setPreview(next);
  };

  const onPointerUp = (event: PointerEvent) => {
    const held = dragRef.current;
    const landed = previewRef.current;
    const current = latest.current;
    const resource = landed ? moveTo(current.frame, landed, held?.origin.cell.resource) : undefined;
    const refused =
      !!current.allow &&
      !!landed &&
      !current.allow(proposal<T>(landed.span, landed.start, landed.end, resource));
    setDrag(null);
    setPreview(null);
    if (!held) return;
    if (held.kind === 'select') {
      let picked = selectionRef.current;
      if (!held.moved) {
        const cell = pointAt(event.clientX, event.clientY)?.cell ?? held.origin.cell;
        picked = { anchor: cell, focus: cell };
        setSelection(picked);
      }
      choose(picked);
      return;
    }
    if (held.moved) {
      suppressClick.current = true;
      setTimeout(() => (suppressClick.current = false));
      if (landed && !refused) change(landed.span, landed.start, landed.end, resource);
    }
  };

  // --- Drawing ------------------------------------------------------------------

  const isCursor = (day: NuiDate, at: Slot, resource: number | null) =>
    cursor.day === day && cursor.slot === at && cursor.resource === resource;
  const selected = (day: NuiDate, at: Slot, resource: number | null) =>
    inSelection(frame, selection, day, at, resource);
  const isOff = (day: NuiDate, at: Slot, resource: number | null) =>
    offHours(frame, businessHours, day, at, resource);

  /** An event on the grids, wherever it sits: `place` says how. */
  const drawEvent = ({ span, place }: Shown) => {
    const colors = paint(span, resources);
    const style: Style = {
      '--_color': colors.color ?? undefined,
      '--_offset': place.offset,
      '--_length': place.length,
      '--_span': place.span,
      '--_lane': place.lane,
      '--_column': place.column,
      '--_columns': place.columns,
      '--_width': place.width,
    };
    return (
      <button
        key={span.key}
        type="button"
        tabIndex={-1}
        className={
          span.event.class ? `nui-scheduler-event ${span.event.class}` : 'nui-scheduler-event'
        }
        data-kind={place.kind}
        data-event-id={span.key}
        data-tone={colors.tone}
        data-color={colors.color === null ? undefined : ''}
        data-all-day={span.allDay || undefined}
        data-recurring={span.event.recurrenceId === undefined ? undefined : ''}
        data-before={place.before || undefined}
        data-after={place.after || undefined}
        data-short={place.short || undefined}
        data-moving={preview?.span.key === span.key || undefined}
        style={style}
        aria-label={label(span, resources, formats, words)}
        onClick={(event) => eventClicked(event.currentTarget)}
      >
        {renderEvent ? (
          renderEvent(span.event as NuiSchedulerEvent<T>, { time: timeText(span, formats, words) })
        ) : (
          <>
            {!span.allDay && (
              <span className="nui-scheduler-event-time">
                {view === 'month' ? startText(span, formats) : timeText(span, formats, words)}
              </span>
            )}
            <span className="nui-scheduler-event-title" dir="auto">
              {span.event.title}
            </span>
          </>
        )}
        {place.resize && canEdit(span) && (
          <span className="nui-scheduler-resize" aria-hidden="true" />
        )}
      </button>
    );
  };

  /** Where a dragged event would land. */
  const drawGhost = (at: string) => {
    if (!ghost || ghost.cell !== at) return null;
    const shown: Ghost = ghost;
    const style: Style = {
      '--_color': shown.color ?? undefined,
      '--_offset': shown.offset,
      '--_length': shown.length,
      '--_span': shown.length,
      '--_lane': 0,
      '--_column': 0,
      '--_columns': 1,
      '--_width': 1,
    };
    return (
      <span
        className="nui-scheduler-event"
        data-ghost=""
        aria-hidden="true"
        data-kind={shown.kind}
        data-tone={shown.tone}
        data-color={shown.color === null ? undefined : ''}
        style={style}
      >
        {shown.title}
      </span>
    );
  };

  const drawResource = (resource: NuiSchedulerResource) =>
    renderResource ? (
      renderResource(resource)
    ) : (
      <span className="nui-scheduler-resource-title" dir="auto">
        {resource.title}
      </span>
    );

  const drawNow = (day: NuiDate, at: number) =>
    nowCell && nowCell.day === day && nowCell.slot === at ? (
      <span
        className="nui-scheduler-now"
        aria-hidden="true"
        style={{ '--_offset': nowCell.offset } as Style}
      />
    ) : null;

  const corner = (
    <>
      {weekNumber !== null && (
        <span className="nui-scheduler-week-number">{words.weekNumber(weekNumber)}</span>
      )}
      <span className="nui-scheduler-hidden">{words.time}</span>
    </>
  );

  const grid = {
    role: 'grid',
    'aria-label': title,
    'aria-multiselectable': selectable || undefined,
    onKeyDown,
    onPointerDown,
  } as const;

  let content: ReactNode;
  if (view === 'month') {
    content = (
      <div key="month" ref={body} className="nui-scheduler-body">
        <table className="nui-scheduler-grid" data-view="month" {...grid}>
          <thead>
            <tr>
              {weekNumbers && (
                <th scope="col" className="nui-scheduler-week">
                  {words.week}
                </th>
              )}
              {weekdays.map((name) => (
                <th key={name.day} scope="col" abbr={name.long}>
                  {name.short}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week) => (
              <tr key={week.days[0].day}>
                {week.number !== null && (
                  <th
                    scope="row"
                    className="nui-scheduler-week"
                    aria-label={words.weekNumber(week.number)}
                  >
                    {week.number}
                  </th>
                )}
                {week.days.map((cell) => (
                  <td
                    key={cell.day}
                    className="nui-scheduler-cell"
                    data-cell={cell.day}
                    tabIndex={isCursor(cell.day, null, null) ? 0 : -1}
                    aria-selected={selectable ? selected(cell.day, null, null) : undefined}
                    data-selected={selected(cell.day, null, null) || undefined}
                    data-outside={cell.outside || undefined}
                    data-today={cell.day === today || undefined}
                    data-off={isOff(cell.day, null, null) || undefined}
                    aria-current={cell.day === today ? 'date' : undefined}
                    onFocus={(event) =>
                      event.target === event.currentTarget && cellFocused(cell.day, null, null)
                    }
                  >
                    <span className="nui-scheduler-date" aria-hidden="true">
                      {cell.number}
                    </span>
                    <span className="nui-scheduler-hidden">{cell.label}</span>
                    {cell.bars.map(drawEvent)}
                    {drawGhost(cell.day)}
                    {cell.more > 0 && (
                      <button
                        type="button"
                        tabIndex={-1}
                        className="nui-scheduler-more"
                        onClick={() => openDay(cell.day)}
                      >
                        {words.more(cell.more)}
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (view === 'agenda') {
    content = (
      <div key="agenda" ref={body} className="nui-scheduler-body nui-scheduler-agenda">
        {agenda.length ? (
          agenda.map((group) => (
            <section
              key={group.day}
              className="nui-scheduler-agenda-day"
              data-today={group.day === today || undefined}
            >
              <div
                className="nui-scheduler-agenda-date"
                role="heading"
                aria-level={headingLevel + 1}
              >
                {group.label}
              </div>
              <ul>
                {group.spans.map((span) => {
                  const colors = paint(span, resources);
                  const names = resourceNames(span, resources);
                  return (
                    <li key={span.key}>
                      <button
                        type="button"
                        className={
                          span.event.class
                            ? `nui-scheduler-event ${span.event.class}`
                            : 'nui-scheduler-event'
                        }
                        data-kind="agenda"
                        data-event-id={span.key}
                        data-tone={colors.tone}
                        data-color={colors.color === null ? undefined : ''}
                        data-recurring={span.event.recurrenceId === undefined ? undefined : ''}
                        style={{ '--_color': colors.color ?? undefined } as Style}
                        aria-label={label(span, resources, formats, words)}
                        onClick={(event) => eventClicked(event.currentTarget)}
                      >
                        <span className="nui-scheduler-event-time">
                          {timeText(span, formats, words)}
                        </span>
                        <span className="nui-scheduler-event-title" dir="auto">
                          {span.event.title}
                        </span>
                        {names && (
                          <span className="nui-scheduler-event-resource" dir="auto">
                            {names}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))
        ) : (
          <p className="nui-scheduler-empty">{words.empty}</p>
        )}
      </div>
    );
  } else if (view === 'timeline') {
    content = (
      <div key="timeline" ref={body} className="nui-scheduler-body">
        <table
          className="nui-scheduler-grid"
          data-view="timeline"
          data-span={timelineSpan}
          style={{ '--_units': units.length } as Style}
          {...grid}
        >
          <thead>
            <tr>
              <th scope="col" className="nui-scheduler-corner">
                <span className="nui-scheduler-hidden">{words.resource}</span>
              </th>
              {units.map((unit, i) =>
                unit.slot === null ? (
                  <th
                    key={i}
                    scope="col"
                    className="nui-scheduler-day"
                    data-today={unit.day === today || undefined}
                    aria-label={formats.full.format(nuiUtc(unit.day))}
                  >
                    <span className="nui-scheduler-weekday">
                      {formats.weekday.format(nuiUtc(unit.day))}
                    </span>
                    <span className="nui-scheduler-date">
                      {formats.day.format(nuiUtc(unit.day))}
                    </span>
                  </th>
                ) : (
                  <th
                    key={i}
                    scope="col"
                    className="nui-scheduler-slot"
                    data-slot={unit.slot}
                    data-hour={unit.slot % 60 === 0 || undefined}
                  >
                    <span className={unit.slot % 60 !== 0 ? 'nui-scheduler-hidden' : undefined}>
                      {unit.label}
                    </span>
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {timeline.map((row) => (
              <tr key={row.index ?? 'all'} style={{ '--_lanes': row.lanes } as Style}>
                <th scope="row" className="nui-scheduler-resource">
                  {row.resource ? drawResource(row.resource) : words.events(row.count)}
                </th>
                {units.map((unit, i) => {
                  const id = key(unit.day, unit.slot, row.index);
                  return (
                    <td
                      key={i}
                      className="nui-scheduler-cell"
                      data-cell={id}
                      tabIndex={isCursor(unit.day, unit.slot, row.index) ? 0 : -1}
                      aria-selected={
                        selectable ? selected(unit.day, unit.slot, row.index) : undefined
                      }
                      data-selected={selected(unit.day, unit.slot, row.index) || undefined}
                      data-today={(unit.slot === null && unit.day === today) || undefined}
                      data-hour={(unit.slot !== null && unit.slot % 60 === 0) || undefined}
                      data-off={isOff(unit.day, unit.slot, row.index) || undefined}
                      onFocus={(event) =>
                        event.target === event.currentTarget &&
                        cellFocused(unit.day, unit.slot, row.index)
                      }
                    >
                      {(row.items.get(id) ?? []).map(drawEvent)}
                      {drawGhost(id)}
                      {unit.slot !== null && drawNow(unit.day, unit.slot)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    content = (
      <div key="days" ref={body} className="nui-scheduler-body">
        <table
          className="nui-scheduler-grid"
          data-view={view}
          data-resources={laid.length ? '' : undefined}
          style={{ '--_lanes': topBars.lanes, '--_columns-shown': columns.length } as Style}
          {...grid}
        >
          <thead>
            {/* With resources, the week heads each resource's days with its name. */}
            {laid.length > 0 && view === 'week' && (
              <tr>
                <th scope="col" className="nui-scheduler-corner" rowSpan={2}>
                  {corner}
                </th>
                {laid.map((resource, r) => (
                  <th
                    key={resource.id}
                    scope="col"
                    className="nui-scheduler-resource"
                    colSpan={days.length}
                    data-group={r > 0 || undefined}
                  >
                    {drawResource(resource)}
                  </th>
                ))}
              </tr>
            )}
            <tr>
              {(!laid.length || view === 'day') && (
                <th scope="col" className="nui-scheduler-corner">
                  {corner}
                </th>
              )}
              {columns.map((column, i) =>
                column.resource && view === 'day' ? (
                  <th
                    key={i}
                    scope="col"
                    className="nui-scheduler-resource"
                    data-group={column.group || undefined}
                  >
                    {drawResource(column.resource)}
                  </th>
                ) : (
                  <th
                    key={i}
                    scope="col"
                    className="nui-scheduler-day"
                    data-today={column.day === today || undefined}
                    data-group={column.group || undefined}
                    aria-label={formats.full.format(nuiUtc(column.day))}
                  >
                    <span className="nui-scheduler-weekday">
                      {formats.weekday.format(nuiUtc(column.day))}
                    </span>
                    <span className="nui-scheduler-date">
                      {formats.day.format(nuiUtc(column.day))}
                    </span>
                  </th>
                ),
              )}
            </tr>
            <tr className="nui-scheduler-all-day">
              <th scope="row" className="nui-scheduler-time">
                {words.allDay}
              </th>
              {columns.map((column, i) => {
                const id = key(column.day, 'all', column.index);
                return (
                  <td
                    key={i}
                    className="nui-scheduler-cell"
                    data-cell={id}
                    tabIndex={isCursor(column.day, 'all', column.index) ? 0 : -1}
                    aria-selected={
                      selectable ? selected(column.day, 'all', column.index) : undefined
                    }
                    data-selected={selected(column.day, 'all', column.index) || undefined}
                    data-group={column.group || undefined}
                    onFocus={(event) =>
                      event.target === event.currentTarget &&
                      cellFocused(column.day, 'all', column.index)
                    }
                  >
                    {(topBars.map.get(id) ?? []).map(drawEvent)}
                    {drawGhost(id)}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {frame.slots.map((minutes, s) => (
              <tr key={minutes} data-slot-row={minutes} data-hour={minutes % 60 === 0 || undefined}>
                <th scope="row" className="nui-scheduler-time">
                  <span className={minutes % 60 !== 0 ? 'nui-scheduler-hidden' : undefined}>
                    {slotLabels[s]}
                  </span>
                </th>
                {columns.map((column, i) => {
                  const id = key(column.day, minutes, column.index);
                  return (
                    <td
                      key={i}
                      className="nui-scheduler-cell"
                      data-cell={id}
                      tabIndex={isCursor(column.day, minutes, column.index) ? 0 : -1}
                      aria-selected={
                        selectable ? selected(column.day, minutes, column.index) : undefined
                      }
                      data-selected={selected(column.day, minutes, column.index) || undefined}
                      data-today={column.day === today || undefined}
                      data-off={isOff(column.day, minutes, column.index) || undefined}
                      data-group={column.group || undefined}
                      onFocus={(event) =>
                        event.target === event.currentTarget &&
                        cellFocused(column.day, minutes, column.index)
                      }
                    >
                      {(placed.get(id) ?? []).map(drawEvent)}
                      {drawGhost(id)}
                      {drawNow(column.day, minutes)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const toolbarApi: NuiSchedulerToolbar = {
    title,
    view,
    views: offered,
    setView,
    previous: () => page(-1),
    next: () => page(1),
    goToday,
  };

  return (
    <div
      {...rest}
      ref={root}
      className={className ? `nui-scheduler ${className}` : 'nui-scheduler'}
      data-view={view}
      data-dragging={dragging ?? undefined}
      data-invalid={invalid || undefined}
      {...nuiPersonality({ corners, radius, density })}
    >
      {typeof toolbar === 'function'
        ? toolbar(toolbarApi)
        : toolbar && (
            <div className="nui-scheduler-toolbar">
              <div className="nui-scheduler-nav">
                <button
                  type="button"
                  className="nui-button"
                  data-variant="outline"
                  data-tone="neutral"
                  data-size="sm"
                  onClick={goToday}
                >
                  {words.today}
                </button>
                <button
                  type="button"
                  className="nui-scheduler-page"
                  data-direction="previous"
                  aria-label={pageLabel('previous')}
                  title={pageLabel('previous')}
                  onClick={() => page(-1)}
                />
                <button
                  type="button"
                  className="nui-scheduler-page"
                  data-direction="next"
                  aria-label={pageLabel('next')}
                  title={pageLabel('next')}
                  onClick={() => page(1)}
                />
              </div>
              <div className="nui-scheduler-title" role="heading" aria-level={headingLevel}>
                {title}
              </div>
              {offered.length > 1 && (
                <div className="nui-scheduler-views" role="group" aria-label={words.view}>
                  {offered.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="nui-scheduler-view"
                      aria-pressed={view === option}
                      onClick={() => setView(option)}
                    >
                      {words.views[option]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
      <span className="nui-scheduler-status" role="status">
        {status}
      </span>
      {content}
    </div>
  );
}
