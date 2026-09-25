import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  contentChild,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  LOCALE_ID,
  model,
  numberAttribute,
  output,
  signal,
  TemplateRef,
  untracked,
  viewChild,
} from '@angular/core';
import {
  nuiAddDays,
  type NuiDate,
  nuiDateFormat,
  nuiNow,
  NuiPersonality,
  nuiToday,
  nuiUtc,
  nuiWeekdayNames,
  nuiWeekInfo,
} from '@needless-ui/angular';
import { NuiButton } from '@needless-ui/angular/button';
import {
  type NuiSchedulerBar,
  nuiSchedulerDays,
  type NuiSchedulerEvent,
  nuiSchedulerLanes,
  nuiSchedulerMinutes,
  nuiSchedulerPage,
  nuiSchedulerPlace,
  type NuiSchedulerPlaced,
  type NuiSchedulerSpan,
  nuiSchedulerValue,
  type NuiSchedulerView,
  nuiSchedulerVisible,
} from './layout';

/** Every text the scheduler shows or announces. */
export interface NuiSchedulerLabels {
  today: string;
  previous: Record<NuiSchedulerView, string>;
  next: Record<NuiSchedulerView, string>;
  views: Record<NuiSchedulerView, string>;
  /** Names the group of view buttons. */
  view: string;
  allDay: string;
  /** Heads the column of times. */
  time: string;
  more: (count: number) => string;
  events: (count: number) => string;
  empty: string;
  /** Said after an event moves or changes length, before its new time. */
  moved: (title: string, when: string) => string;
}

export const NUI_SCHEDULER_LABELS: NuiSchedulerLabels = {
  today: 'Today',
  previous: {
    month: 'Previous month',
    week: 'Previous week',
    day: 'Previous day',
    agenda: 'Earlier',
  },
  next: { month: 'Next month', week: 'Next week', day: 'Next day', agenda: 'Later' },
  views: { month: 'Month', week: 'Week', day: 'Day', agenda: 'Agenda' },
  view: 'View',
  allDay: 'All day',
  time: 'Time',
  more: (count) => `${count} more`,
  events: (count) => (count === 1 ? '1 event' : `${count} events`),
  empty: 'Nothing scheduled.',
  moved: (title, when) => `${title}: ${when}`,
};

/** An event moved or resized to new times. */
export interface NuiSchedulerChange<T = unknown> {
  event: NuiSchedulerEvent<T>;
  /** Dates for all-day events (the end included), dates and times otherwise. */
  start: string;
  end: string;
}

/** Time chosen on the grid, to create an event in. */
export interface NuiSchedulerSlot {
  /** Dates when `allDay` (the end included), dates and times otherwise (the end not). */
  start: string;
  end: string;
  allDay: boolean;
}

/** What an event template gets. */
export interface NuiSchedulerEventContext<T = unknown> {
  $implicit: NuiSchedulerEvent<T>;
  /** The event's time as the scheduler writes it, such as `9:00 – 9:30`. */
  time: string;
}

/**
 * Draws events yourself:
 *
 * ```html
 * <ng-template nuiSchedulerEvent let-event let-time="time">
 *   <strong>{{ event.title }}</strong> {{ event.data.room }}
 * </ng-template>
 * ```
 */
@Directive({ selector: 'ng-template[nuiSchedulerEvent]' })
export class NuiSchedulerEventTemplate {
  readonly template = inject<TemplateRef<NuiSchedulerEventContext>>(TemplateRef);

  static ngTemplateContextGuard(
    _directive: NuiSchedulerEventTemplate,
    context: unknown,
  ): context is NuiSchedulerEventContext {
    return true;
  }
}

/** Where the keyboard is: a day, and on the time grid a slot or the all-day row. */
interface Cell {
  day: NuiDate;
  slot: number | 'all' | null;
}

interface Drag {
  kind: 'move' | 'resize' | 'select';
  span?: NuiSchedulerSpan;
  origin: Cell;
  x: number;
  y: number;
  moved: boolean;
}

/** Bars shown in a month cell before "N more". */
const LANES = 3;
const DAY = 1440;
/** How long a finger holds still to pick an event up; moving sooner scrolls. */
const LONG_PRESS = 400;
/** How far a finger may drift during that press. */
const SLOP = 8;

/**
 * A scheduler: events in a month, a week, a day or an agenda. It shows what you
 * pass as `events`, and reports what people do: `eventClick`, `eventChange` when an
 * event is dragged or moved from the keyboard, and `slotSelect` for time chosen on
 * the grid, to create an event in.
 *
 * ```html
 * <nui-scheduler [events]="events()" [(view)]="view" editable selectable
 *   (eventChange)="move($event)" (slotSelect)="create($event)" />
 * ```
 *
 * The grid is one tab stop: the arrow keys move through days and times, Enter goes
 * into a cell's events or chooses its time, and Alt with the arrows moves an event.
 */
@Component({
  selector: 'nui-scheduler',
  imports: [NgTemplateOutlet, NuiButton],
  hostDirectives: [{ directive: NuiPersonality, inputs: ['corners', 'radius', 'density'] }],
  host: {
    class: 'nui-scheduler',
    '[attr.data-view]': 'view()',
    '[attr.data-dragging]': 'drag()?.moved ? drag()!.kind : null',
  },
  templateUrl: './scheduler.html',
})
export class NuiScheduler<T = unknown> {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly announcer = inject(LiveAnnouncer);

  readonly events = input<readonly NuiSchedulerEvent<T>[]>([]);
  readonly view = model<NuiSchedulerView>('week');
  /** The day shown, and where the keyboard is. */
  readonly date = model<NuiDate>(nuiToday());
  /** The views people can switch between. */
  readonly views = input<readonly NuiSchedulerView[]>(['month', 'week', 'day', 'agenda']);
  /** The first day of the week, 1 for Monday. By default, the locale's. */
  readonly firstDay = input<number | undefined, unknown>(undefined, {
    transform: (value: unknown) =>
      value == null || value === '' ? undefined : numberAttribute(value),
  });
  /** Minutes per row of the time grid, and the step events move by. */
  readonly slotMinutes = input(30, { transform: numberAttribute });
  /** The hour the time grid scrolls to at first. */
  readonly scrollHour = input(8, { transform: numberAttribute });
  /** Days the agenda looks ahead. */
  readonly agendaDays = input(30, { transform: numberAttribute });
  /** Events can be moved and resized, by pointer and keyboard. */
  readonly editable = input(false, { transform: booleanAttribute });
  /** Time can be chosen on the grid, to create events. */
  readonly selectable = input(false, { transform: booleanAttribute });
  /** The level of the title, and of the agenda's days below it. */
  readonly headingLevel = input(2, { transform: numberAttribute });
  readonly locale = input(inject(LOCALE_ID));
  readonly labels = input<Partial<NuiSchedulerLabels>>({});

  /** An event was clicked, or chosen with Enter. */
  readonly eventClick = output<NuiSchedulerEvent<T>>();
  /** An event was moved or resized. Update `events` to keep the change. */
  readonly eventChange = output<NuiSchedulerChange<T>>();
  /** Time was chosen on the grid. */
  readonly slotSelect = output<NuiSchedulerSlot>();
  /** The days shown changed, first to last: load their events. */
  readonly rangeChange = output<{ start: NuiDate; end: NuiDate }>();

  private readonly custom = contentChild(NuiSchedulerEventTemplate);
  protected readonly eventTemplate = computed(() => this.custom()?.template ?? null);
  private readonly body = viewChild<ElementRef<HTMLElement>>('body');

  protected readonly words = computed(() => ({ ...NUI_SCHEDULER_LABELS, ...this.labels() }));
  protected readonly today = signal(nuiToday());
  protected readonly now = signal(nuiNow());
  private readonly start = computed(() => this.firstDay() ?? nuiWeekInfo(this.locale()).firstDay);

  protected readonly days = computed(() =>
    nuiSchedulerDays(this.view(), this.date(), this.start(), this.agendaDays()),
  );
  private readonly spans = computed(() => {
    const days = this.days();
    return nuiSchedulerVisible(this.events(), days[0], days[days.length - 1]);
  });

  /** Where the keyboard is on the grid. */
  protected readonly slot = linkedSignal<NuiSchedulerView, number | 'all' | null>({
    source: this.view,
    computation: (view) =>
      view === 'week' || view === 'day'
        ? Math.floor((this.scrollHour() * 60) / this.slotMinutes())
        : null,
  });
  protected readonly cursor = computed((): Cell => ({ day: this.date(), slot: this.slot() }));
  /** Chosen time: from the anchor to the cursor. */
  protected readonly selection = signal<{ anchor: Cell; focus: Cell } | null>(null);
  protected readonly drag = signal<Drag | null>(null);
  /** Where a dragged event would land. */
  protected readonly preview = signal<{
    span: NuiSchedulerSpan;
    start: number;
    end: number;
  } | null>(null);
  protected readonly announcement = signal('');
  private focusEvent: string | null = null;
  private refocus = false;
  private suppressClick = false;

  // --- Formatting ---------------------------------------------------------------

  private readonly formats = computed(() => {
    const locale = this.locale();
    return {
      time: nuiDateFormat(locale, { hour: 'numeric', minute: '2-digit' }),
      hour: nuiDateFormat(locale, { hour: 'numeric' }),
      day: nuiDateFormat(locale, { day: 'numeric' }),
      full: nuiDateFormat(locale, { dateStyle: 'full' }),
      long: nuiDateFormat(locale, { weekday: 'long', month: 'long', day: 'numeric' }),
      month: nuiDateFormat(locale, { month: 'long', year: 'numeric' }),
      range: nuiDateFormat(locale, { month: 'short', day: 'numeric', year: 'numeric' }),
      weekday: nuiDateFormat(locale, { weekday: 'short' }),
    };
  });

  protected readonly weekdays = computed(() => {
    const long = nuiWeekdayNames(this.locale(), this.start(), 'long');
    return nuiWeekdayNames(this.locale(), this.start(), 'short').map((short, i) => ({
      short,
      long: long[i],
    }));
  });

  protected readonly title = computed(() => {
    const days = this.days();
    const formats = this.formats();
    switch (this.view()) {
      case 'month':
        return formats.month.format(nuiUtc(this.date()));
      case 'day':
        return formats.full.format(nuiUtc(this.date()));
      default:
        return formats.range.formatRange(nuiUtc(days[0]), nuiUtc(days[days.length - 1]));
    }
  });

  /** An event's time, as it shows on the event. */
  protected time(span: NuiSchedulerSpan): string {
    const formats = this.formats();
    if (span.allDay) return this.words().allDay;
    const start = nuiUtc(nuiSchedulerValue(span.start));
    const end = nuiUtc(nuiSchedulerValue(span.end));
    return span.end - span.start < DAY &&
      Math.floor(span.start / DAY) === Math.floor((span.end - 1) / DAY)
      ? formats.time.formatRange(start, end)
      : formats.range.formatRange(start, end);
  }

  /** When an event starts, for the month's short lines. */
  protected startTime(span: NuiSchedulerSpan): string {
    return this.formats().time.format(nuiUtc(nuiSchedulerValue(span.start)));
  }

  /** An event's name for screen readers: its title, day and time. */
  protected label(span: NuiSchedulerSpan): string {
    return `${span.event.title}, ${this.when(span)}`;
  }

  /** An event's day and time, in words. */
  private when(span: NuiSchedulerSpan): string {
    const formats = this.formats();
    const start = nuiUtc(nuiSchedulerValue(span.start));
    if (span.allDay) {
      return span.end - span.start > DAY
        ? `${formats.range.formatRange(start, nuiUtc(nuiSchedulerValue(span.end - 1)))}, ${this.words().allDay}`
        : `${formats.long.format(start)}, ${this.words().allDay}`;
    }
    return `${formats.long.format(start)}, ${this.time(span)}`;
  }

  protected dayName(day: NuiDate): string {
    return this.formats().full.format(nuiUtc(day));
  }

  protected weekday(day: NuiDate): string {
    return this.formats().weekday.format(nuiUtc(day));
  }

  protected dayNumber(day: NuiDate): string {
    return this.formats().day.format(nuiUtc(day));
  }

  /** Where a timed event starts within its first slot, as a share of the slot. */
  protected offset(part: NuiSchedulerPlaced): number {
    const step = Math.max(5, this.slotMinutes());
    return (part.start % step) / step;
  }

  /** How many slots a timed event covers: at least half of one. */
  protected length(part: NuiSchedulerPlaced): number {
    return Math.max(0.5, (part.end - part.start) / Math.max(5, this.slotMinutes()));
  }

  protected context(span: NuiSchedulerSpan): NuiSchedulerEventContext<T> {
    return { $implicit: span.event as NuiSchedulerEvent<T>, time: this.time(span) };
  }

  protected canEdit(span: NuiSchedulerSpan): boolean {
    return span.event.editable ?? this.editable();
  }

  // --- The time grid ------------------------------------------------------------

  /** The rows of the time grid, as minutes since midnight. */
  protected readonly slots = computed(() => {
    const step = Math.max(5, this.slotMinutes());
    return Array.from({ length: Math.ceil(DAY / step) }, (_, i) => i * step);
  });

  protected readonly slotLabels = computed(() => {
    const formats = this.formats();
    return this.slots().map((minutes) => formats.time.format(nuiUtc(nuiSchedulerValue(minutes))));
  });

  /** Timed events, placed side by side, by the cell they start in. */
  private readonly placed = computed(() => {
    const map = new Map<string, NuiSchedulerPlaced[]>();
    if (this.view() !== 'week' && this.view() !== 'day') return map;
    const timed = this.spans().filter((s) => !this.onTop(s));
    const step = Math.max(5, this.slotMinutes());
    for (const day of this.days()) {
      for (const part of nuiSchedulerPlace(timed, day)) {
        const key = `${day}|${Math.floor(part.start / step)}`;
        const list = map.get(key);
        if (list) list.push(part);
        else map.set(key, [part]);
      }
    }
    return map;
  });

  /** Bars in the all-day row, by the day they start in. */
  private readonly topBars = computed(() => {
    if (this.view() !== 'week' && this.view() !== 'day')
      return new Map<number, NuiSchedulerBar[]>();
    return group(
      nuiSchedulerLanes(
        this.spans().filter((s) => this.onTop(s)),
        this.days(),
      ),
    );
  });

  protected readonly topLanes = computed(() => {
    let lanes = 0;
    for (const bars of this.topBars().values()) {
      for (const bar of bars) lanes = Math.max(lanes, bar.lane + 1);
    }
    return lanes;
  });

  /** All-day events, and timed ones a day long or longer, go in the all-day row. */
  private onTop(span: NuiSchedulerSpan): boolean {
    return span.allDay || span.end - span.start >= DAY;
  }

  protected placedAt(day: NuiDate, slot: number): NuiSchedulerPlaced[] {
    return this.placed().get(`${day}|${slot}`) ?? [];
  }

  protected barsAt(index: number): NuiSchedulerBar[] {
    return this.topBars().get(index) ?? [];
  }

  /** Where the now line crosses a cell, as a share of the slot, or null. */
  protected nowAt(day: NuiDate, slot: number): { offset: number } | null {
    const now = this.now();
    if (now.slice(0, 10) !== day) return null;
    const minutes = nuiSchedulerMinutes(now) - nuiSchedulerMinutes(day);
    const step = Math.max(5, this.slotMinutes());
    return Math.floor(minutes / step) === slot ? { offset: (minutes % step) / step } : null;
  }

  /**
   * Where a dragged event would land, if it starts in this cell: a bar across days
   * (`slot` null or `'all'`, up to the row's end), or a block in the time grid.
   */
  protected ghostAt(
    day: NuiDate,
    slot: number | 'all' | null,
    column: number,
  ): { offset: number; length: number; span: number } | null {
    const preview = this.preview();
    if (!preview) return null;
    const midnight = nuiSchedulerMinutes(day);
    const bar = this.view() === 'month' || this.onTop(preview.span);
    if (bar !== (slot === null || slot === 'all')) return null;
    if (bar) {
      if (Math.floor(preview.start / DAY) * DAY !== midnight) return null;
      const days = Math.max(1, Math.ceil((preview.end - preview.start) / DAY));
      const room = this.view() === 'month' ? 7 - (column % 7) : this.days().length - column;
      return { offset: 0, length: 1, span: Math.min(days, room) };
    }
    const step = Math.max(5, this.slotMinutes());
    const start = preview.start - midnight;
    if (start < 0 || start >= DAY || Math.floor(start / step) !== slot) return null;
    return {
      offset: (start % step) / step,
      length: Math.max(0.5, (preview.end - preview.start) / step),
      span: 1,
    };
  }

  // --- The month grid -----------------------------------------------------------

  protected readonly weeks = computed(() => {
    if (this.view() !== 'month') return [];
    const days = this.days();
    const formats = this.formats();
    const month = this.date().slice(0, 7);
    const words = this.words();
    const spans = this.spans();
    return Array.from({ length: days.length / 7 }, (_, w) => {
      const week = days.slice(w * 7, w * 7 + 7);
      const bars = nuiSchedulerLanes(spans, week);
      const starts = group(bars);
      return week.map((day, i) => {
        const covering = bars.filter((b) => b.from <= i && b.to >= i);
        const shown = (starts.get(i) ?? []).filter((b) => b.lane < LANES);
        // A bar that began in an earlier cell of this week and sits in a hidden lane
        // still counts here, in "N more".
        const more = covering.filter((b) => b.lane >= LANES).length;
        return {
          day,
          number: formats.day.format(nuiUtc(day)),
          label: `${formats.full.format(nuiUtc(day))}, ${covering.length ? words.events(covering.length) : words.empty}`,
          outside: day.slice(0, 7) !== month,
          bars: shown,
          more,
        };
      });
    });
  });

  // --- The agenda ---------------------------------------------------------------

  protected readonly agenda = computed(() => {
    if (this.view() !== 'agenda') return [];
    const formats = this.formats();
    const spans = this.spans();
    return this.days()
      .map((day) => {
        const from = nuiSchedulerMinutes(day);
        return {
          day,
          label: formats.long.format(nuiUtc(day)),
          spans: spans.filter((s) => s.start < from + DAY && s.end > from),
        };
      })
      .filter((group) => group.spans.length);
  });

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Tell the app which days are shown, so it can load their events.
    let range = '';
    effect(() => {
      const days = this.days();
      const next = `${days[0]}|${days[days.length - 1]}`;
      if (next === range) return;
      range = next;
      untracked(() => this.rangeChange.emit({ start: days[0], end: days[days.length - 1] }));
    });

    afterNextRender(() => {
      const timer = setInterval(() => {
        this.now.set(nuiNow());
        this.today.set(nuiToday());
      }, 30_000);
      destroyRef.onDestroy(() => clearInterval(timer));
    });

    // The time grid opens at the morning, not at midnight.
    let scrolled = '';
    afterRenderEffect(() => {
      const view = this.view();
      const body = this.body()?.nativeElement;
      if (!body || (view !== 'week' && view !== 'day') || scrolled === view) return;
      scrolled = view;
      const row = body.querySelector<HTMLElement>(
        `[data-slot-row="${Math.floor((this.scrollHour() * 60) / Math.max(5, this.slotMinutes()))}"]`,
      );
      const head = body.querySelector<HTMLElement>('thead');
      if (row) body.scrollTop = row.offsetTop - (head?.offsetHeight ?? 0);
    });

    // Keyboard moves take focus along: to the cell, or to the event that moved.
    afterRenderEffect(() => {
      const cell = this.cursor();
      this.events();
      if (this.focusEvent) {
        const id = this.focusEvent;
        this.focusEvent = null;
        this.host
          .querySelector<HTMLElement>(`[data-event-id="${CSS.escape(id)}"]:not([data-ghost])`)
          ?.focus();
        return;
      }
      if (!this.refocus) return;
      this.refocus = false;
      this.host.querySelector<HTMLElement>(`[data-cell="${this.key(cell)}"]`)?.focus();
    });
  }

  // --- Toolbar ------------------------------------------------------------------

  protected goToday(): void {
    this.date.set(this.today());
    this.announcement.set(this.title());
  }

  protected page(direction: number): void {
    this.date.set(nuiSchedulerPage(this.view(), this.date(), direction, this.agendaDays()));
    this.announcement.set(this.title());
  }

  protected setView(view: NuiSchedulerView): void {
    this.view.set(view);
    this.selection.set(null);
    this.announcement.set(this.title());
  }

  /** "N more" in a month cell opens that day. */
  protected openDay(day: NuiDate): void {
    this.date.set(day);
    this.setView('day');
  }

  // --- Cells --------------------------------------------------------------------

  protected key(cell: Cell): string {
    return cell.slot === null ? cell.day : `${cell.day}|${cell.slot}`;
  }

  protected isCursor(day: NuiDate, slot: number | 'all' | null): boolean {
    const cursor = this.cursor();
    return cursor.day === day && cursor.slot === slot;
  }

  /** A cell's time: minutes since 1970, from and to. */
  private range(cell: Cell): [number, number] {
    const midnight = nuiSchedulerMinutes(cell.day);
    if (cell.slot === null || cell.slot === 'all') return [midnight, midnight + DAY];
    const step = Math.max(5, this.slotMinutes());
    return [midnight + cell.slot * step, midnight + (cell.slot + 1) * step];
  }

  protected isSelected(day: NuiDate, slot: number | 'all' | null): boolean {
    const selection = this.selection();
    if (!selection) return false;
    const [from, to] = this.selected(selection);
    const cell = { day, slot };
    if ((selection.anchor.slot === 'all') !== (slot === 'all')) return false;
    const [start, end] = this.range(cell);
    return start >= from && end <= to;
  }

  /** The time a selection covers. */
  private selected(selection: { anchor: Cell; focus: Cell }): [number, number] {
    const a = this.range(selection.anchor);
    const b = this.range(selection.focus);
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
  }

  private chooseSelection(): void {
    const selection = this.selection();
    if (!selection || !this.selectable()) return;
    const [from, to] = this.selected(selection);
    const allDay = selection.anchor.slot === null || selection.anchor.slot === 'all';
    this.slotSelect.emit(
      allDay
        ? {
            start: nuiSchedulerValue(from).slice(0, 10),
            end: nuiSchedulerValue(to - 1).slice(0, 10),
            allDay,
          }
        : { start: nuiSchedulerValue(from), end: nuiSchedulerValue(to), allDay },
    );
    this.selection.set(null);
  }

  private cellOf(element: Element | null): Cell | null {
    const key = element?.closest<HTMLElement>('[data-cell]')?.dataset['cell'];
    if (!key) return null;
    const [day, slot] = key.split('|');
    return { day, slot: slot === undefined ? null : slot === 'all' ? 'all' : +slot };
  }

  /** The cell under a point, beneath any events drawn over it. */
  private cellAt(x: number, y: number): Cell | null {
    const hit = document
      .elementsFromPoint(x, y)
      .find((element) => element.matches('[data-cell]') && this.host.contains(element));
    return this.cellOf(hit ?? null);
  }

  // --- Keyboard -----------------------------------------------------------------

  protected onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.nui-scheduler-event')) {
      this.onEventKeydown(event, target.closest<HTMLElement>('.nui-scheduler-event')!);
      return;
    }
    if (!target.matches('[data-cell]')) return;
    const view = this.view();
    const rtl = getComputedStyle(this.host).direction === 'rtl';
    const across = rtl ? -1 : 1;
    const cursor = this.cursor();
    const last = this.slots().length - 1;
    let day = cursor.day;
    let slot = cursor.slot;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        day = nuiAddDays(day, (event.key === 'ArrowRight' ? 1 : -1) * across);
        break;
      case 'ArrowUp':
        if (view === 'month') day = nuiAddDays(day, -7);
        else slot = slot === 'all' || slot === 0 ? 'all' : (slot as number) - 1;
        break;
      case 'ArrowDown':
        if (view === 'month') day = nuiAddDays(day, 7);
        else slot = slot === 'all' ? 0 : Math.min(last, (slot as number) + 1);
        break;
      case 'Home':
      case 'End': {
        const all = this.days();
        const index = all.indexOf(day);
        const row =
          view === 'month' ? all.slice(index - (index % 7), index - (index % 7) + 7) : all;
        if (event.ctrlKey && view !== 'month') slot = event.key === 'Home' ? 'all' : last;
        else day = event.key === 'Home' ? row[0] : row[row.length - 1];
        break;
      }
      case 'PageUp':
      case 'PageDown':
        day = nuiSchedulerPage(view, day, event.key === 'PageUp' ? -1 : 1);
        break;
      case 'Enter':
      case ' ': {
        event.preventDefault();
        const first = target.querySelector<HTMLElement>('.nui-scheduler-event:not([data-ghost])');
        if (first && !this.selection()) {
          first.focus();
          return;
        }
        if (!this.selection()) this.selection.set({ anchor: cursor, focus: cursor });
        this.chooseSelection();
        return;
      }
      case 'Escape':
        if (this.selection()) {
          event.preventDefault();
          this.selection.set(null);
        }
        return;
      default:
        return;
    }
    event.preventDefault();
    const next: Cell = { day, slot };
    if (event.shiftKey && this.selectable() && event.key.startsWith('Arrow')) {
      const selection = this.selection();
      this.selection.set({ anchor: selection?.anchor ?? cursor, focus: next });
    } else {
      this.selection.set(null);
    }
    this.slot.set(slot);
    this.date.set(day);
    this.refocus = true;
  }

  /** On an event: arrows go through the cell's events; with Alt they move it. */
  private onEventKeydown(event: KeyboardEvent, element: HTMLElement): void {
    const span = this.spanOf(element);
    if (!span) return;
    if (
      event.altKey &&
      event.key.startsWith('Arrow') &&
      this.canEdit(span) &&
      this.view() !== 'agenda'
    ) {
      event.preventDefault();
      const rtl = getComputedStyle(this.host).direction === 'rtl';
      const step =
        this.view() === 'month' || this.onTop(span) ? DAY : Math.max(5, this.slotMinutes());
      const vertical = event.key === 'ArrowUp' ? -1 : event.key === 'ArrowDown' ? 1 : 0;
      const horizontal =
        (event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0) * (rtl ? -1 : 1);
      let start = span.start;
      let end = span.end;
      if (event.shiftKey && vertical) {
        end = Math.max(start + step, end + vertical * step);
      } else {
        const delta = vertical * (this.view() === 'month' ? 7 * DAY : step) + horizontal * DAY;
        start += delta;
        end += delta;
      }
      this.change(span, start, end);
      this.focusEvent = span.event.id;
      return;
    }
    const cell = element.closest<HTMLElement>('[data-cell]');
    if (!cell) return;
    const siblings = [
      ...cell.querySelectorAll<HTMLElement>('.nui-scheduler-event:not([data-ghost])'),
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
        cell.focus();
        return;
    }
  }

  private spanOf(element: HTMLElement): NuiSchedulerSpan | undefined {
    const id = element.dataset['eventId'];
    return this.spans().find((s) => s.event.id === id);
  }

  /** Reports an event's new times, and says them. */
  private change(span: NuiSchedulerSpan, start: number, end: number): void {
    if (start === span.start && end === span.end) return;
    const change = span.allDay
      ? {
          event: span.event as NuiSchedulerEvent<T>,
          start: nuiSchedulerValue(start).slice(0, 10),
          end: nuiSchedulerValue(end - 1).slice(0, 10),
        }
      : {
          event: span.event as NuiSchedulerEvent<T>,
          start: nuiSchedulerValue(start),
          end: nuiSchedulerValue(end),
        };
    this.eventChange.emit(change);
    this.announcer.announce(
      this.words().moved(span.event.title, this.when({ ...span, start, end })),
      'polite',
    );
  }

  protected onEventClick(element: HTMLElement): void {
    if (this.suppressClick) {
      this.suppressClick = false;
      return;
    }
    const span = this.spanOf(element);
    if (span) this.eventClick.emit(span.event as NuiSchedulerEvent<T>);
  }

  protected onCellFocus(day: NuiDate, slot: number | 'all' | null): void {
    if (this.date() !== day) this.date.set(day);
    if (this.slot() !== slot) this.slot.set(slot);
  }

  // --- Pointer ------------------------------------------------------------------

  protected onPointerdown(event: PointerEvent): void {
    if (event.button !== 0 || this.view() === 'agenda') return;
    const target = event.target as HTMLElement;
    const element = target.closest<HTMLElement>('.nui-scheduler-event');
    const origin = this.cellAt(event.clientX, event.clientY) ?? this.cellOf(target);
    if (!origin) return;
    let drag: Drag;
    if (element) {
      const span = this.spanOf(element);
      if (!span || !this.canEdit(span)) return;
      const kind = target.closest('.nui-scheduler-resize') ? 'resize' : 'move';
      drag = { kind, span, origin, x: event.clientX, y: event.clientY, moved: false };
    } else if (this.selectable()) {
      drag = { kind: 'select', origin, x: event.clientX, y: event.clientY, moved: false };
    } else {
      return;
    }

    // A mouse or pen drags at once. A finger that moves at once scrolls the page:
    // it picks an event up (or starts choosing time) only after a long press.
    const pointer = event.pointerId;
    let held = event.pointerType !== 'touch';
    let timer: ReturnType<typeof setTimeout> | undefined;
    const listening = new AbortController();
    const { signal } = listening;
    const stop = () => {
      clearTimeout(timer);
      listening.abort();
    };
    const cancel = () => {
      stop();
      this.drag.set(null);
      this.preview.set(null);
      this.selection.set(null);
    };
    if (held) {
      this.drag.set(drag);
    } else {
      timer = setTimeout(() => {
        held = true;
        // Picked up: it shows where it would land, and follows the finger.
        this.drag.set({ ...drag, moved: true });
        if (drag.kind === 'select') this.selection.set({ anchor: drag.origin, focus: drag.origin });
        else this.preview.set({ span: drag.span!, start: drag.span!.start, end: drag.span!.end });
        // A tick to feel, where the page may vibrate (after the first tap on it).
        if (navigator.userActivation?.hasBeenActive !== false) navigator.vibrate?.(10);
      }, LONG_PRESS);
    }
    document.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerId !== pointer) return;
        if (held) this.onPointermove(e);
        else if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > SLOP) cancel();
      },
      { signal },
    );
    document.addEventListener(
      'pointerup',
      (e) => {
        if (e.pointerId !== pointer) return;
        stop();
        // A tap before the long press is a click: it chooses its cell.
        if (!held) this.drag.set(drag);
        this.onPointerup(e);
      },
      { signal },
    );
    // The browser took the gesture (a scroll, a zoom): nothing moves.
    document.addEventListener('pointercancel', (e) => e.pointerId === pointer && cancel(), {
      signal,
    });
    // Once an event is held, the finger drags it, not the page.
    document.addEventListener('touchmove', (e) => held && e.cancelable && e.preventDefault(), {
      signal,
      passive: false,
    });
    document.addEventListener('contextmenu', (e) => held && e.preventDefault(), { signal });
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.key !== 'Escape') return;
        e.preventDefault();
        e.stopPropagation();
        cancel();
      },
      { signal, capture: true },
    );
  }

  private onPointermove(event: PointerEvent): void {
    const drag = this.drag();
    if (!drag) return;
    if (!drag.moved) {
      if (Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 4) return;
      this.drag.set({ ...drag, moved: true });
    }
    const cell = this.cellAt(event.clientX, event.clientY);
    if (!cell) return;
    if (drag.kind === 'select') {
      if ((drag.origin.slot === 'all') === (cell.slot === 'all')) {
        this.selection.set({ anchor: drag.origin, focus: cell });
      }
      return;
    }
    const span = drag.span!;
    const [from] = this.range(drag.origin);
    const [to, toEnd] = this.range(cell);
    if (drag.kind === 'resize') {
      this.preview.set({
        span,
        start: span.start,
        end: Math.max(span.start + (span.allDay ? DAY : Math.max(5, this.slotMinutes())), toEnd),
      });
      return;
    }
    // A day cell moves by days; a slot by slots. All-day events keep to whole days.
    const whole = cell.slot === null || cell.slot === 'all' || drag.origin.slot === 'all';
    const delta = whole ? Math.round((to - from) / DAY) * DAY : to - from;
    if (whole !== (drag.origin.slot === null || drag.origin.slot === 'all')) return;
    this.preview.set({ span, start: span.start + delta, end: span.end + delta });
  }

  private onPointerup(event: PointerEvent): void {
    const drag = this.drag();
    const preview = this.preview();
    this.drag.set(null);
    this.preview.set(null);
    if (!drag) return;
    if (drag.kind === 'select') {
      if (!drag.moved) {
        const cell = this.cellAt(event.clientX, event.clientY) ?? drag.origin;
        this.selection.set({ anchor: cell, focus: cell });
      }
      this.chooseSelection();
      return;
    }
    if (drag.moved) {
      this.suppressClick = true;
      setTimeout(() => (this.suppressClick = false));
      if (preview) this.change(preview.span, preview.start, preview.end);
    }
  }
}

function group<T extends { from: number }>(bars: readonly T[]): Map<number, T[]> {
  const map = new Map<number, T[]>();
  for (const bar of bars) {
    const list = map.get(bar.from);
    if (list) list.push(bar);
    else map.set(bar.from, [bar]);
  }
  return map;
}
