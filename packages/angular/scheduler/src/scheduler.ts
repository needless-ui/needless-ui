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
  Injector,
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
  nuiDayNumber,
  nuiIsoWeek,
  nuiNow,
  NuiPersonality,
  nuiToday,
  nuiUtc,
  nuiWeekday,
  nuiWeekdayNames,
  nuiWeekInfo,
} from '@needless-ui/angular';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NUI_SCHEDULER_LABELS,
  type NuiSchedulerBar,
  type NuiSchedulerChange,
  nuiSchedulerDays,
  type NuiSchedulerEvent,
  type NuiSchedulerHours,
  type NuiSchedulerLabels,
  nuiSchedulerLanes,
  nuiSchedulerMinutes,
  nuiSchedulerPage,
  nuiSchedulerPlace,
  type NuiSchedulerResource,
  nuiSchedulerResources,
  type NuiSchedulerSlot,
  type NuiSchedulerSpan,
  nuiSchedulerStack,
  type NuiSchedulerTimelineSpan,
  type NuiSchedulerTone,
  nuiSchedulerValue,
  type NuiSchedulerView,
  nuiSchedulerVisible,
  nuiSchedulerWorking,
} from '@needless-ui/core/scheduler';

/** The words, changes and choices of time live in @needless-ui/core; exported here as before. */
export {
  NUI_SCHEDULER_LABELS,
  type NuiSchedulerChange,
  type NuiSchedulerLabels,
  type NuiSchedulerSlot,
};

/** What an event template gets. */
export interface NuiSchedulerEventContext<T = unknown> {
  $implicit: NuiSchedulerEvent<T>;
  /** The event's time as the scheduler writes it, such as `9:00 – 9:30`. */
  time: string;
}

/** What a resource template gets. */
export interface NuiSchedulerResourceContext<R = unknown> {
  $implicit: NuiSchedulerResource<R>;
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

/**
 * Draws the heads of resources yourself, in the timeline and the resource columns:
 *
 * ```html
 * <ng-template nuiSchedulerResource let-resource>
 *   <img [src]="resource.data.photo" alt="" /> {{ resource.title }}
 * </ng-template>
 * ```
 */
@Directive({ selector: 'ng-template[nuiSchedulerResource]' })
export class NuiSchedulerResourceTemplate {
  readonly template = inject<TemplateRef<NuiSchedulerResourceContext>>(TemplateRef);

  static ngTemplateContextGuard(
    _directive: NuiSchedulerResourceTemplate,
    context: unknown,
  ): context is NuiSchedulerResourceContext {
    return true;
  }
}

/**
 * Where the keyboard is: a day; on the time grid, a slot (minutes since midnight)
 * or the all-day row; and among resources, the index of one.
 */
interface Cell {
  day: NuiDate;
  slot: number | 'all' | null;
  resource: number | null;
}

/** A cell under the pointer, and the moment under it, in minutes since 1970. */
interface Point {
  cell: Cell;
  time: number;
}

interface Drag {
  kind: 'move' | 'resize' | 'select';
  span?: NuiSchedulerSpan;
  origin: Point;
  x: number;
  y: number;
  moved: boolean;
}

/** Where a dragged event would land. */
interface Preview {
  span: NuiSchedulerSpan;
  start: number;
  end: number;
  /** The resource it would land on, among those laid out. */
  resource: string | null;
}

/** A column of the time grid: a day, of a resource when they're laid out. */
interface Column {
  day: NuiDate;
  resource: NuiSchedulerResource | null;
  index: number | null;
  /** The first day of a resource after the first: it draws a stronger line. */
  group: boolean;
}

/** How an event sits on a grid, as the custom properties the stylesheet reads. */
interface Place {
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
}

/** An event drawn in a cell. */
interface Shown {
  span: NuiSchedulerSpan;
  place: Place;
}

interface Ghost {
  /** The cell it starts in. */
  cell: string;
  kind: 'timed' | 'bar';
  offset: number;
  length: number;
  tone: NuiSchedulerTone;
  color: string | null;
  title: string;
}

const ALL_VIEWS: readonly NuiSchedulerView[] = ['month', 'week', 'day', 'agenda'];
/** Bars shown in a month cell before "N more". */
const LANES = 3;
const DAY = 1440;
/** How long a finger holds still to pick an event up; moving sooner scrolls. */
const LONG_PRESS = 400;
/** How far a finger may drift during that press. */
const SLOP = 8;

/**
 * A scheduler: events in a month, a week, a day, an agenda, or a timeline of
 * resources. It shows what you pass as `events`, and reports what people do:
 * `eventClick`, `eventChange` when an event is dragged or moved from the keyboard,
 * and `slotSelect` for time chosen on the grid, to create an event in.
 *
 * ```html
 * <nui-scheduler [events]="events()" [(view)]="view" editable selectable
 *   (eventChange)="move($event)" (slotSelect)="create($event)" />
 * ```
 *
 * The grid is one tab stop: the arrow keys move through days, times and
 * resources, Enter goes into a cell's events or chooses its time, and Alt with the
 * arrows moves an event.
 */
@Component({
  selector: 'nui-scheduler',
  exportAs: 'nuiScheduler',
  imports: [NgTemplateOutlet, NuiButton],
  hostDirectives: [{ directive: NuiPersonality, inputs: ['corners', 'radius', 'density'] }],
  host: {
    class: 'nui-scheduler',
    '[attr.data-view]': 'view()',
    '[attr.data-dragging]': 'dragging()',
    '[attr.data-invalid]': 'invalid() || null',
  },
  templateUrl: './scheduler.html',
})
export class NuiScheduler<T = unknown> {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly announcer = inject(LiveAnnouncer);
  private readonly injector = inject(Injector);

  /** The events to show. */
  readonly events = input<readonly NuiSchedulerEvent<T>[]>([]);
  /** Rooms, people or machines: rows of the timeline, and columns of the day and the week. */
  readonly resources = input<readonly NuiSchedulerResource[]>([]);
  /** The view shown. */
  readonly view = model<NuiSchedulerView>('week');
  /** The day shown, and where the keyboard is. */
  readonly date = model<NuiDate>(nuiToday());
  /** The views people can switch between. By default all, and the timeline with resources. */
  readonly views = input<readonly NuiSchedulerView[] | undefined>(undefined);
  /** What the timeline shows: a day by its hours, or a week or a month by its days. */
  readonly timelineSpan = input<NuiSchedulerTimelineSpan>('day');
  /** The first day of the week, 1 for Monday. By default, the locale's. */
  readonly firstDay = input<number | undefined, unknown>(undefined, {
    transform: (value: unknown) =>
      value == null || value === '' ? undefined : numberAttribute(value),
  });
  /** Minutes per row of the time grid, or per column of the day's timeline. */
  readonly slotMinutes = input(30, { transform: numberAttribute });
  /** The step events move and resize by. By default, `slotMinutes`. */
  readonly snapMinutes = input<number | undefined, unknown>(undefined, {
    transform: (value: unknown) =>
      value == null || value === '' ? undefined : numberAttribute(value),
  });
  /** The hour the time grid starts at, and the hour it ends at: the rest isn't shown. */
  readonly dayStart = input(0, { transform: numberAttribute });
  /** The hour the time grid ends at, 24 for midnight. */
  readonly dayEnd = input(24, { transform: numberAttribute });
  /** The hour the time grid scrolls to at first. */
  readonly scrollHour = input(8, { transform: numberAttribute });
  /** Days the agenda looks ahead. */
  readonly agendaDays = input(30, { transform: numberAttribute });
  /** Working hours. Other time is shaded; resources can have their own. */
  readonly businessHours = input<readonly NuiSchedulerHours[] | null>(null);
  /** Shows the weekend. Without it, the views leave out the locale's weekend days. */
  readonly weekends = input(true, { transform: booleanAttribute });
  /** Shows ISO week numbers: before each week of the month, and above the times. */
  readonly weekNumbers = input(false, { transform: booleanAttribute });
  /** Events can be moved and resized, by pointer and keyboard. */
  readonly editable = input(false, { transform: booleanAttribute });
  /** Time can be chosen on the grid, to create events. */
  readonly selectable = input(false, { transform: booleanAttribute });
  /**
   * Decides whether a move, a resize or a choice of time can happen. A drag it
   * turns down shows as not allowed, and drops nothing.
   */
  readonly allow = input<((time: NuiSchedulerChange<T> | NuiSchedulerSlot) => boolean) | null>(
    null,
  );
  /** Shows the toolbar. Without it, build your own on `previous()`, `next()` and `title`. */
  readonly toolbar = input(true, { transform: booleanAttribute });
  /** The level of the title, and of the agenda's days below it. */
  readonly headingLevel = input(2, { transform: numberAttribute });
  /** Formats days and times. */
  readonly locale = input(inject(LOCALE_ID));
  /** Every text the scheduler shows or announces, to translate. */
  readonly labels = input<Partial<NuiSchedulerLabels>>({});

  /** An event was clicked, or chosen with Enter. */
  readonly eventClick = output<NuiSchedulerEvent<T>>();
  /** An event was moved or resized. Update `events` to keep the change. */
  readonly eventChange = output<NuiSchedulerChange<T>>();
  /** Time was chosen on the grid. */
  readonly slotSelect = output<NuiSchedulerSlot>();
  /** The days shown changed, first to last: load their events. */
  readonly rangeChange = output<{ start: NuiDate; end: NuiDate }>();

  private readonly customEvent = contentChild(NuiSchedulerEventTemplate);
  private readonly customResource = contentChild(NuiSchedulerResourceTemplate);
  protected readonly eventTemplate = computed(() => this.customEvent()?.template ?? null);
  protected readonly resourceTemplate = computed(() => this.customResource()?.template ?? null);
  private readonly body = viewChild<ElementRef<HTMLElement>>('body');

  protected readonly words = computed((): NuiSchedulerLabels => {
    const labels = this.labels();
    return {
      ...NUI_SCHEDULER_LABELS,
      ...labels,
      previous: { ...NUI_SCHEDULER_LABELS.previous, ...labels.previous },
      next: { ...NUI_SCHEDULER_LABELS.next, ...labels.next },
      views: { ...NUI_SCHEDULER_LABELS.views, ...labels.views },
    };
  });
  protected readonly todayDate = signal(nuiToday());
  protected readonly now = signal(nuiNow());
  private readonly weekInfo = computed(() => nuiWeekInfo(this.locale()));
  private readonly start = computed(() => this.firstDay() ?? this.weekInfo().firstDay);
  /** Weekdays the views leave out. */
  private readonly hidden = computed(
    () => new Set<number>(this.weekends() ? [] : this.weekInfo().weekend),
  );
  protected readonly offered = computed(
    () =>
      this.views() ?? (this.resources().length ? [...ALL_VIEWS, 'timeline' as const] : ALL_VIEWS),
  );

  /** Whether the view shows one day: the day, or a day's timeline. */
  private readonly daily = computed(
    () => this.view() === 'day' || (this.view() === 'timeline' && this.timelineSpan() === 'day'),
  );
  /** Whether the view shows a month: the month, or a month's timeline. */
  private readonly monthly = computed(
    () =>
      this.view() === 'month' || (this.view() === 'timeline' && this.timelineSpan() === 'month'),
  );
  /** The date the view shows from: for one day, a day the views show. */
  private readonly anchor = computed(() =>
    this.daily() ? this.nextShown(this.date(), 1) : this.date(),
  );
  /** Every day of the view, hidden ones too: the range reported and loaded. */
  private readonly range = computed(() =>
    nuiSchedulerDays(
      this.view(),
      this.anchor(),
      this.start(),
      this.agendaDays(),
      this.timelineSpan(),
    ),
  );
  /** The days shown. */
  protected readonly days = computed(() => this.shown(this.range()));
  private readonly spans = computed(() => {
    const range = this.range();
    return nuiSchedulerVisible(this.events(), range[0], range[range.length - 1]);
  });
  /** The spans of each resource. */
  private readonly byResource = computed(() => {
    const map = new Map<string, NuiSchedulerSpan[]>();
    for (const span of this.spans()) {
      for (const id of nuiSchedulerResources(span.event)) push(map, id, span);
    }
    return map;
  });

  /** Whether the view has a time grid by slots: the week, the day, and a day's timeline. */
  protected readonly slotted = computed(() => {
    const view = this.view();
    return (
      view === 'week' || view === 'day' || (view === 'timeline' && this.timelineSpan() === 'day')
    );
  });
  /** The resources laid out: columns in the day and the week, rows in the timeline. */
  protected readonly laid = computed(() => {
    const view = this.view();
    return view === 'week' || view === 'day' || view === 'timeline' ? this.resources() : [];
  });
  private readonly step = computed(() => Math.max(5, this.slotMinutes()));
  private readonly snap = computed(() => Math.max(1, this.snapMinutes() ?? this.step()));
  /** The minutes of a day the time grid shows. */
  private readonly window = computed(() => {
    const step = this.step();
    const from = Math.min(DAY - step, Math.max(0, Math.round(this.dayStart() * 60)));
    const count = Math.ceil(
      (Math.max(from + step, Math.min(DAY, Math.round(this.dayEnd() * 60))) - from) / step,
    );
    return { from, to: Math.min(DAY, from + count * step), count };
  });
  /** The slots of the time grid, as minutes since midnight. */
  protected readonly slots = computed(() => {
    const { from, count } = this.window();
    const step = this.step();
    return Array.from({ length: count }, (_, i) => from + i * step);
  });
  /** The slot the time grid opens at. */
  private readonly scrollSlot = computed(() => this.slotOf(this.scrollHour() * 60));

  /** Where the keyboard is on the grid. */
  protected readonly slot = linkedSignal<boolean, number | 'all' | null>({
    source: this.slotted,
    computation: (slotted) => (slotted ? this.scrollSlot() : null),
  });
  private readonly resourceId = signal<string | null>(null);
  /** Where the keyboard is, kept on a cell that's shown. */
  protected readonly cursor = computed((): Cell => {
    const days = this.days();
    const date = this.date();
    const day = days.includes(date) ? date : (days.find((d) => d > date) ?? days[days.length - 1]);
    let slot = this.slot();
    if (!this.slotted()) slot = null;
    else if (slot === null || (slot === 'all' && this.view() === 'timeline'))
      slot = this.scrollSlot();
    else if (slot !== 'all') slot = this.slotOf(slot);
    const laid = this.laid();
    const resource = laid.length
      ? Math.max(
          0,
          laid.findIndex((r) => r.id === this.resourceId()),
        )
      : null;
    return { day, slot, resource };
  });
  /** Chosen time: from the anchor to the cursor. */
  protected readonly selection = signal<{ anchor: Cell; focus: Cell } | null>(null);
  protected readonly drag = signal<Drag | null>(null);
  /** What a drag does, for the cursor: a resize goes across along bars and the timeline. */
  protected readonly dragging = computed(() => {
    const drag = this.drag();
    if (!drag?.moved) return null;
    const across = this.view() === 'timeline' || typeof drag.origin.cell.slot !== 'number';
    return drag.kind === 'resize' && across ? 'resize-across' : drag.kind;
  });
  protected readonly preview = signal<Preview | null>(null);
  protected readonly announcement = signal('');
  private suppressClick = false;

  // --- Formatting ---------------------------------------------------------------

  private readonly formats = computed(() => {
    const locale = this.locale();
    return {
      time: nuiDateFormat(locale, { hour: 'numeric', minute: '2-digit' }),
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
    const hidden = this.hidden();
    return nuiWeekdayNames(this.locale(), this.start(), 'short')
      .map((short, i) => ({ short, long: long[i], day: ((this.start() - 1 + i) % 7) + 1 }))
      .filter((name) => !hidden.has(name.day));
  });

  /** What's shown, as the toolbar's title says it: a month, a week, or a day. */
  readonly title = computed(() => {
    const days = this.days();
    const formats = this.formats();
    const view = this.view();
    switch (view === 'timeline' ? this.timelineSpan() : view) {
      case 'month':
        return formats.month.format(nuiUtc(this.date()));
      case 'day':
        return formats.full.format(nuiUtc(this.anchor()));
      default:
        return formats.range.formatRange(nuiUtc(days[0]), nuiUtc(days[days.length - 1]));
    }
  });

  /** The week number shown above the times. */
  protected readonly weekNumber = computed(() =>
    this.weekNumbers() ? this.isoWeek(this.days()[0]) : null,
  );

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

  /** An event's name for screen readers: its title, resources, day and time. */
  protected label(span: NuiSchedulerSpan): string {
    const names = this.resourceNames(span);
    return [
      span.event.title,
      ...(names ? [names] : []),
      this.when(span),
      ...(span.event.recurrenceId === undefined ? [] : [this.words().repeats]),
    ].join(', ');
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

  /** The names of an event's resources, when they're shown. */
  protected resourceNames(span: NuiSchedulerSpan): string {
    const resources = this.resources();
    if (!resources.length) return '';
    return nuiSchedulerResources(span.event)
      .map((id) => resources.find((r) => r.id === id)?.title)
      .filter((title) => title !== undefined)
      .join(', ');
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

  /** The ISO week of the week that holds `day`, counted from its Monday, as the calendar does. */
  private isoWeek(day: NuiDate): number {
    const first = nuiAddDays(day, -((nuiWeekday(day) - this.start() + 7) % 7));
    return nuiIsoWeek(nuiAddDays(first, (8 - this.start()) % 7));
  }

  protected context(span: NuiSchedulerSpan): NuiSchedulerEventContext<T> {
    return { $implicit: span.event as NuiSchedulerEvent<T>, time: this.time(span) };
  }

  protected canEdit(span: NuiSchedulerSpan): boolean {
    return span.event.editable ?? this.editable();
  }

  /** An event's colors: its own, else its resource's, else the accent. */
  protected paint(span: NuiSchedulerSpan): { tone: NuiSchedulerTone; color: string | null } {
    const event = span.event;
    if (event.color) return { tone: event.tone ?? 'accent', color: event.color };
    if (event.tone) return { tone: event.tone, color: null };
    const first = nuiSchedulerResources(event)[0];
    const resource = first === undefined ? undefined : this.resources().find((r) => r.id === first);
    return { tone: resource?.tone ?? 'accent', color: resource?.color ?? null };
  }

  /** Whether a cell lies outside working hours. */
  protected off(day: NuiDate, slot: number | 'all' | null, resource: number | null): boolean {
    const hours =
      (resource === null ? undefined : this.laid()[resource]?.businessHours) ??
      this.businessHours();
    if (!hours) return false;
    return typeof slot === 'number'
      ? !nuiSchedulerWorking(hours, day, slot, slot + this.step())
      : !nuiSchedulerWorking(hours, day);
  }

  // --- The time grid ------------------------------------------------------------

  protected readonly slotLabels = computed(() => {
    const formats = this.formats();
    return this.slots().map((minutes) => formats.time.format(nuiUtc(nuiSchedulerValue(minutes))));
  });

  /** The slot a time of day falls in, kept within the slots shown. */
  private slotOf(minutes: number): number {
    const slots = this.slots();
    const index = Math.floor((minutes - slots[0]) / this.step());
    return slots[Math.min(slots.length - 1, Math.max(0, index))];
  }

  /** The time grid's columns: each day, and each day of each resource when they're laid out. */
  protected readonly columns = computed((): Column[] => {
    const view = this.view();
    if (view !== 'week' && view !== 'day') return [];
    const days = this.days();
    const laid = this.laid();
    if (!laid.length)
      return days.map((day) => ({ day, resource: null, index: null, group: false }));
    return laid.flatMap((resource, index) =>
      days.map((day, i) => ({ day, resource, index, group: i === 0 && index > 0 })),
    );
  });

  /** Spans of a resource, or all of them. */
  private spansOf(resource: NuiSchedulerResource | null): NuiSchedulerSpan[] {
    return resource ? (this.byResource().get(resource.id) ?? []) : this.spans();
  }

  /** Timed events, placed side by side, by the cell they start in. */
  private readonly placed = computed(() => {
    const map = new Map<string, Shown[]>();
    const { from, to } = this.window();
    const step = this.step();
    for (const column of this.columns()) {
      const timed = this.spansOf(column.resource).filter((s) => !this.onTop(s));
      for (const part of nuiSchedulerPlace(timed, column.day, from, to)) {
        const slot = this.slotOf(part.start);
        // At least half a slot long, so it can be read and grabbed.
        const length = Math.max(0.5, (part.end - part.start) / step);
        push(map, this.key(column.day, slot, column.index), {
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
  });

  /** Bars in the all-day row, by the cell they start in, and how many lanes they take. */
  private readonly topBars = computed(() => {
    const map = new Map<string, Shown[]>();
    let lanes = 0;
    const view = this.view();
    if (view !== 'week' && view !== 'day') return { map, lanes };
    const days = this.days();
    const laid = this.laid();
    const groups = laid.length ? laid : [null];
    groups.forEach((resource, index) => {
      const top = this.spansOf(resource).filter((s) => this.onTop(s));
      for (const bar of nuiSchedulerLanes(top, days)) {
        push(map, this.key(days[bar.from], 'all', resource ? index : null), barOf(bar, true));
        lanes = Math.max(lanes, bar.lane + 1);
      }
    });
    return { map, lanes };
  });

  /** All-day events, and timed ones a day long or longer, go in the all-day row. */
  private onTop(span: NuiSchedulerSpan): boolean {
    return span.allDay || span.end - span.start >= DAY;
  }

  protected placedAt(key: string): Shown[] {
    return this.placed().get(key) ?? [];
  }

  protected barsAt(key: string): Shown[] {
    return this.topBars().map.get(key) ?? [];
  }

  protected readonly topLanes = computed(() => this.topBars().lanes);

  /** Where the now line crosses the time grid: its day, its slot, and how far into it. */
  private readonly nowCell = computed(() => {
    const now = this.now();
    const minutes = nuiSchedulerMinutes(now) - nuiSchedulerMinutes(now.slice(0, 10));
    const { from, to } = this.window();
    if (minutes < from || minutes >= to) return null;
    const slot = this.slotOf(minutes);
    return { day: now.slice(0, 10), slot, offset: (minutes - slot) / this.step() };
  });

  /** Where the now line crosses a cell, as a share of the slot, or null. */
  protected nowAt(day: NuiDate, slot: number): number | null {
    const now = this.nowCell();
    return now && now.day === day && now.slot === slot ? now.offset : null;
  }

  // --- The timeline -------------------------------------------------------------

  /** The timeline's columns: slots of its day, or its days. */
  protected readonly units = computed(() => {
    if (this.view() !== 'timeline') return [];
    if (this.slotted()) {
      const day = this.days()[0];
      const labels = this.slotLabels();
      return this.slots().map((slot, i) => ({
        day,
        slot: slot as number | null,
        label: labels[i],
      }));
    }
    return this.days().map((day) => ({ day, slot: null as number | null, label: '' }));
  });

  /** The timeline's rows: each resource, with its events by the cell they start in. */
  protected readonly timeline = computed(() => {
    if (this.view() !== 'timeline') return [];
    const laid = this.laid();
    const rows: { resource: NuiSchedulerResource | null; index: number | null }[] = laid.length
      ? laid.map((resource, index) => ({ resource, index }))
      : [{ resource: null, index: null }];
    const days = this.days();
    const step = this.step();
    const { from, to } = this.window();
    return rows.map(({ resource, index }) => {
      const items = new Map<string, Shown[]>();
      let lanes = 0;
      const spans = this.spansOf(resource);
      if (this.slotted()) {
        const day = days[0];
        const midnight = nuiSchedulerMinutes(day);
        const minimum = Math.max(15, step / 2);
        for (const item of nuiSchedulerStack(spans, midnight + from, midnight + to, minimum)) {
          const at = item.start - midnight;
          const slot = this.slotOf(at);
          push(items, this.key(day, slot, index), {
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
          push(items, this.key(days[bar.from], null, index), barOf(bar, true));
          lanes = Math.max(lanes, bar.lane + 1);
        }
      }
      return { resource, index, lanes, items, count: spans.length };
    });
  });

  // --- The month grid -----------------------------------------------------------

  protected readonly weeks = computed(() => {
    if (this.view() !== 'month') return [];
    const range = this.range();
    const formats = this.formats();
    const month = this.date().slice(0, 7);
    const words = this.words();
    const spans = this.spans();
    return Array.from({ length: range.length / 7 }, (_, w) => {
      const week = this.shown(range.slice(w * 7, w * 7 + 7));
      const bars = nuiSchedulerLanes(spans, week);
      const starts = new Map<number, NuiSchedulerBar[]>();
      for (const bar of bars) push(starts, bar.from, bar);
      return {
        number: this.weekNumbers() ? this.isoWeek(range[w * 7]) : null,
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

  // --- Dragging -----------------------------------------------------------------

  /** Where a dragged event would land, drawn in the cell it starts in. */
  protected readonly ghost = computed((): Ghost | null => {
    const preview = this.preview();
    if (!preview) return null;
    const { span, start, end } = preview;
    const view = this.view();
    const days = this.days();
    const index = this.indexOf(preview.resource);
    const paint = this.paint(span);
    const base = { tone: paint.tone, color: paint.color, title: span.event.title };
    if (this.slotted() && (view === 'timeline' || !this.onTop(span))) {
      // A block in the time grid, or along the day's timeline.
      const day = view === 'timeline' ? days[0] : nuiSchedulerValue(start).slice(0, 10);
      if (!days.includes(day)) return null;
      const midnight = nuiSchedulerMinutes(day);
      const { from, to } = this.window();
      const shownStart = Math.max(start, midnight + from);
      const shownEnd = Math.min(end, midnight + to);
      if (shownEnd <= shownStart) return null;
      const slot = this.slotOf(shownStart - midnight);
      const step = this.step();
      const minimum = view === 'timeline' ? Math.max(15, step / 2) : step / 2;
      return {
        ...base,
        cell: this.key(day, slot, index),
        kind: view === 'timeline' ? 'bar' : 'timed',
        offset: (shownStart - midnight - slot) / step,
        length: Math.max(minimum, shownEnd - shownStart) / step,
      };
    }
    // A bar across days: from its first day shown, to the end of that row.
    const rows =
      view === 'month' ? this.weeks().map((week) => week.days.map((d) => d.day)) : [days];
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
        cell: this.key(row[from], slot, index),
        kind: 'bar',
        offset: 0,
        length: to - from + 1,
      };
    }
    return null;
  });

  /** Whether `allow` turns down what's being dragged or chosen. */
  protected readonly invalid = computed(() => {
    const allow = this.allow();
    if (!allow) return false;
    const preview = this.preview();
    if (preview) {
      return !allow(this.proposal(preview.span, preview.start, preview.end, this.moveTo(preview)));
    }
    const selection = this.selection();
    return selection ? !allow(this.chosen(selection)) : false;
  });

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Tell the app which days are shown, so it can load their events.
    let range = '';
    effect(() => {
      const days = this.range();
      const next = `${days[0]}|${days[days.length - 1]}`;
      if (next === range) return;
      range = next;
      untracked(() => this.rangeChange.emit({ start: days[0], end: days[days.length - 1] }));
    });

    afterNextRender(() => {
      const timer = setInterval(() => {
        this.now.set(nuiNow());
        this.todayDate.set(nuiToday());
      }, 30_000);
      destroyRef.onDestroy(() => clearInterval(timer));
    });

    // The time grid opens at the morning, not at midnight; a timeline of days, at today.
    let scrolled = '';
    let scrolledBody: HTMLElement | undefined;
    afterRenderEffect(() => {
      const view = this.view();
      const body = this.body()?.nativeElement;
      const key = `${view}|${this.timelineSpan()}`;
      if (!body || (view !== 'week' && view !== 'day' && view !== 'timeline')) return;
      // Once for each view, and again when a view comes back with a body of its own.
      if (scrolled === key && scrolledBody === body) return;
      scrolled = key;
      scrolledBody = body;
      if (view !== 'timeline') {
        const row = body.querySelector<HTMLElement>(`[data-slot-row="${this.scrollSlot()}"]`);
        const head = body.querySelector<HTMLElement>('thead');
        if (row) body.scrollTop = row.offsetTop - (head?.offsetHeight ?? 0);
        return;
      }
      const cell = body.querySelector<HTMLElement>(
        this.slotted() ? `th[data-slot="${this.scrollSlot()}"]` : 'thead th[data-today]',
      );
      const corner = body.querySelector<HTMLElement>('.nui-scheduler-corner');
      if (!cell) return;
      const rect = cell.getBoundingClientRect();
      const box = body.getBoundingClientRect();
      // Today shows after a couple of the days before it.
      const inset =
        (corner?.getBoundingClientRect().width ?? 0) + (this.slotted() ? 0 : 2 * rect.width);
      body.scrollLeft +=
        getComputedStyle(this.host).direction === 'rtl'
          ? rect.right - (box.right - inset)
          : rect.left - (box.left + inset);
    });
  }

  /** Moves focus once the change on its way has rendered, to what `find` finds then. */
  private focusAfterRender(find: () => HTMLElement | null): void {
    afterNextRender(() => find()?.focus(), { injector: this.injector });
  }

  private cellElement(cell: Cell): HTMLElement | null {
    return this.host.querySelector<HTMLElement>(`[data-cell="${CSS.escape(this.cellKey(cell))}"]`);
  }

  // --- Toolbar ------------------------------------------------------------------

  /** Shows today. */
  goToday(): void {
    this.date.set(this.todayDate());
    this.announcement.set(this.title());
  }

  /** Shows the previous month, week, day, or stretch of the agenda. */
  previous(): void {
    this.page(-1);
  }

  /** Shows the next month, week, day, or stretch of the agenda. */
  next(): void {
    this.page(1);
  }

  private page(direction: number): void {
    const day = nuiSchedulerPage(
      this.view(),
      this.anchor(),
      direction,
      this.agendaDays(),
      this.timelineSpan(),
    );
    this.date.set(this.landOn(day, direction));
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

  protected pageLabel(direction: 'previous' | 'next'): string {
    const view = this.view();
    return this.words()[direction][view === 'timeline' ? this.timelineSpan() : view];
  }

  // --- Cells --------------------------------------------------------------------

  /**
   * A cell's key: its day, then its slot (minutes since midnight, `all`, or empty
   * for a whole day), then the index of its resource.
   */
  protected key(day: NuiDate, slot: number | 'all' | null, resource: number | null): string {
    if (resource !== null) return `${day}|${slot ?? ''}|${resource}`;
    return slot === null ? day : `${day}|${slot}`;
  }

  private cellKey(cell: Cell): string {
    return this.key(cell.day, cell.slot, cell.resource);
  }

  protected isCursor(day: NuiDate, slot: number | 'all' | null, resource: number | null): boolean {
    const cursor = this.cursor();
    return cursor.day === day && cursor.slot === slot && cursor.resource === resource;
  }

  /** The days of a range that are shown. */
  private shown(range: NuiDate[]): NuiDate[] {
    const hidden = this.hidden();
    if (!hidden.size) return range;
    const shown = range.filter((day) => !hidden.has(nuiWeekday(day)));
    return shown.length ? shown : range;
  }

  /** The first day from `day` on, going `direction`, that the views show. */
  private nextShown(day: NuiDate, direction: number): NuiDate {
    const hidden = this.hidden();
    for (let i = 0; i < 7 && hidden.has(nuiWeekday(day)); i++) day = nuiAddDays(day, direction);
    return day;
  }

  /** Where paging lands, going `direction`: on a day shown, and for a month, in that month. */
  private landOn(day: NuiDate, direction: number): NuiDate {
    if (this.monthly()) {
      const ahead = this.nextShown(day, direction);
      return ahead.slice(0, 7) === day.slice(0, 7) ? ahead : this.nextShown(day, -direction);
    }
    return this.daily() ? this.nextShown(day, direction) : day;
  }

  /** How many days there are from `day` to the next day shown, going `direction`. */
  private stepDays(day: NuiDate, direction: number): number {
    return nuiDayNumber(this.nextShown(nuiAddDays(day, direction), direction)) - nuiDayNumber(day);
  }

  /** A cell's time: minutes since 1970, from and to. */
  private rangeOf(cell: Cell): [number, number] {
    const midnight = nuiSchedulerMinutes(cell.day);
    if (cell.slot === null || cell.slot === 'all') return [midnight, midnight + DAY];
    return [midnight + cell.slot, midnight + cell.slot + this.step()];
  }

  /** Whether a cell is in the chosen time. */
  protected isSelected(
    day: NuiDate,
    slot: number | 'all' | null,
    resource: number | null,
  ): boolean {
    const selection = this.selection();
    if (!selection) return false;
    const { anchor } = selection;
    if ((anchor.slot === 'all') !== (slot === 'all') || anchor.resource !== resource) return false;
    const [from, to] = this.selected(selection);
    const [start, end] = this.rangeOf({ day, slot, resource });
    return start >= from && end <= to;
  }

  /** The time a selection covers. */
  private selected(selection: { anchor: Cell; focus: Cell }): [number, number] {
    const a = this.rangeOf(selection.anchor);
    const b = this.rangeOf(selection.focus);
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
  }

  /** The time a selection chooses, as `slotSelect` reports it. */
  private chosen(selection: { anchor: Cell; focus: Cell }): NuiSchedulerSlot {
    const [from, to] = this.selected(selection);
    const allDay = selection.anchor.slot === null || selection.anchor.slot === 'all';
    const resource =
      selection.anchor.resource === null ? undefined : this.laid()[selection.anchor.resource]?.id;
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

  private chooseSelection(): void {
    const selection = this.selection();
    if (!selection || !this.selectable()) return;
    const slot = this.chosen(selection);
    this.selection.set(null);
    if (this.allow() && !this.allow()!(slot)) {
      this.announcer.announce(this.words().unavailable, 'polite');
      return;
    }
    this.slotSelect.emit(slot);
  }

  private cellOf(element: Element | null): Cell | null {
    const key = element?.closest<HTMLElement>('[data-cell]')?.getAttribute('data-cell');
    if (!key) return null;
    const [day, slot, resource] = key.split('|');
    return {
      day,
      slot: slot === undefined || slot === '' ? null : slot === 'all' ? 'all' : +slot,
      resource: resource === undefined ? null : +resource,
    };
  }

  /** The cell under a point, beneath any events drawn over it, and the time there. */
  private pointAt(x: number, y: number): Point | null {
    const hit = document
      .elementsFromPoint(x, y)
      .find((element) => element.matches('[data-cell]') && this.host.contains(element));
    const cell = this.cellOf(hit ?? null);
    if (!cell) return null;
    const [from, to] = this.rangeOf(cell);
    if (typeof cell.slot !== 'number') return { cell, time: from };
    const rect = hit!.getBoundingClientRect();
    let share: number;
    if (this.view() === 'timeline') {
      const rtl = getComputedStyle(this.host).direction === 'rtl';
      share = (rtl ? rect.right - x : x - rect.left) / rect.width;
    } else {
      share = (y - rect.top) / rect.height;
    }
    return { cell, time: from + Math.min(1, Math.max(0, share)) * (to - from) };
  }

  private indexOf(resource: string | null): number | null {
    if (resource === null) return null;
    const index = this.laid().findIndex((r) => r.id === resource);
    return index < 0 ? null : index;
  }

  // --- Keyboard -----------------------------------------------------------------

  protected onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const element = target.closest<HTMLElement>('.nui-scheduler-event');
    if (element) {
      this.onEventKeydown(event, element);
      return;
    }
    if (!target.matches('[data-cell]')) return;
    const cursor = this.cursor();
    if (event.key === 'Enter' || event.key === ' ') {
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
    if (event.key === 'Escape') {
      if (this.selection()) {
        event.preventDefault();
        this.selection.set(null);
      }
      return;
    }
    const rtl = getComputedStyle(this.host).direction === 'rtl';
    const next = this.target(cursor, event.key, event.ctrlKey || event.metaKey, rtl);
    if (!next) return;
    event.preventDefault();
    if (event.shiftKey && this.selectable() && event.key.startsWith('Arrow')) {
      const anchor = this.selection()?.anchor ?? cursor;
      // Chosen time keeps to one resource, and to the all-day row or to the slots.
      if (next.resource !== anchor.resource || (next.slot === 'all') !== (anchor.slot === 'all')) {
        return;
      }
      this.selection.set({ anchor, focus: next });
    } else {
      this.selection.set(null);
    }
    if (this.cellKey(next) === this.cellKey(cursor)) return;
    this.slot.set(next.slot);
    this.resourceId.set(this.idOf(next.resource));
    this.date.set(next.day);
    this.focusAfterRender(() => this.cellElement(this.cursor()));
  }

  /** The cell a key moves to from `cell`, or null for a key the grid doesn't take. */
  private target(cell: Cell, key: string, ctrl: boolean, rtl: boolean): Cell | null {
    const view = this.view();
    const across = (key === 'ArrowRight' ? 1 : key === 'ArrowLeft' ? -1 : 0) * (rtl ? -1 : 1);
    const down = key === 'ArrowDown' ? 1 : key === 'ArrowUp' ? -1 : 0;
    const days = this.days();
    if (key === 'PageUp' || key === 'PageDown') {
      const direction = key === 'PageUp' ? -1 : 1;
      const day = nuiSchedulerPage(
        view,
        cell.day,
        direction,
        this.agendaDays(),
        this.timelineSpan(),
      );
      return { ...cell, day: this.landOn(day, direction) };
    }
    if (view === 'month') {
      if (across) return { ...cell, day: this.nextShown(nuiAddDays(cell.day, across), across) };
      if (down) return { ...cell, day: nuiAddDays(cell.day, 7 * down) };
      if (key !== 'Home' && key !== 'End') return null;
      const row = this.weeks().find((week) => week.days.some((d) => d.day === cell.day))?.days;
      if (!row) return null;
      return { ...cell, day: row[key === 'Home' ? 0 : row.length - 1].day };
    }
    if (view === 'timeline') {
      const rows = Math.max(1, this.laid().length);
      const resource = cell.resource ?? 0;
      const slots = this.slots();
      if (down) {
        return cell.resource === null
          ? cell
          : { ...cell, resource: Math.min(rows - 1, Math.max(0, resource + down)) };
      }
      if (key === 'Home' || key === 'End') {
        const end = key === 'End';
        if (ctrl) return cell.resource === null ? cell : { ...cell, resource: end ? rows - 1 : 0 };
        return this.slotted()
          ? { ...cell, slot: slots[end ? slots.length - 1 : 0] }
          : { ...cell, day: days[end ? days.length - 1 : 0] };
      }
      if (!across) return null;
      if (!this.slotted()) {
        return { ...cell, day: this.nextShown(nuiAddDays(cell.day, across), across) };
      }
      const index = slots.indexOf(cell.slot as number) + across;
      return { ...cell, slot: slots[Math.min(slots.length - 1, Math.max(0, index))] };
    }
    // The week and the day: columns of days (of each resource), rows of slots.
    const slots = this.slots();
    const last = slots[slots.length - 1];
    if (down) {
      if (cell.slot === 'all') return { ...cell, slot: down > 0 ? slots[0] : 'all' };
      const index = slots.indexOf(cell.slot as number) + down;
      return { ...cell, slot: index < 0 ? 'all' : slots[Math.min(slots.length - 1, index)] };
    }
    const columns = this.columns();
    const current = columns.findIndex((c) => c.day === cell.day && c.index === cell.resource);
    if (key === 'Home' || key === 'End') {
      if (ctrl) return { ...cell, slot: key === 'Home' ? 'all' : last };
      const group = columns.filter((c) => c.index === cell.resource);
      const column = group[key === 'Home' ? 0 : group.length - 1];
      return { ...cell, day: column.day };
    }
    if (!across) return null;
    const column = columns[current + across];
    if (column) return { ...cell, day: column.day, resource: column.index };
    // Past either end, the next or previous page, from its first or last column.
    const page = this.landOn(nuiSchedulerPage(view, cell.day, across), across);
    const shown = this.shown(nuiSchedulerDays(view, page, this.start()));
    const laid = this.laid();
    return {
      ...cell,
      day: shown[across > 0 ? 0 : shown.length - 1],
      resource: laid.length ? (across > 0 ? 0 : laid.length - 1) : null,
    };
  }

  /** On an event: arrows go through the cell's events; with Alt they move it. */
  private onEventKeydown(event: KeyboardEvent, element: HTMLElement): void {
    const span = this.spanOf(element);
    const cell = this.cellOf(element);
    if (!span || !cell) return;
    if (
      event.altKey &&
      event.key.startsWith('Arrow') &&
      this.canEdit(span) &&
      this.view() !== 'agenda'
    ) {
      event.preventDefault();
      const move = this.moved(span, cell, event.key, event.shiftKey);
      if (!move || !this.change(span, move.start, move.end, move.resource)) return;
      // An occurrence the app replaces with an event of its own leaves focus on its new cell.
      const landing = this.landing(span, move.start, move.to);
      this.focusAfterRender(
        () =>
          this.host.querySelector<HTMLElement>(
            `[data-event-id="${CSS.escape(span.key)}"]:not([data-ghost])`,
          ) ??
          (landing && this.cellElement(landing)) ??
          this.cellElement(this.cursor()),
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
  }

  /** Where Alt and an arrow move an event to, or with Shift, how they change its length. */
  private moved(
    span: NuiSchedulerSpan,
    cell: Cell,
    key: string,
    shift: boolean,
  ): {
    start: number;
    end: number;
    resource?: string | readonly string[];
    /** The resource it ends up on, among those laid out. */
    to: number | null;
  } | null {
    const view = this.view();
    const rtl = getComputedStyle(this.host).direction === 'rtl';
    const across = (key === 'ArrowRight' ? 1 : key === 'ArrowLeft' ? -1 : 0) * (rtl ? -1 : 1);
    const down = key === 'ArrowDown' ? 1 : key === 'ArrowUp' ? -1 : 0;
    const timeline = view === 'timeline';
    // Whole days for all-day events, and in the month, the all-day row and a timeline of days.
    const unit =
      span.allDay || view === 'month' || (timeline ? !this.slotted() : this.onTop(span))
        ? DAY
        : this.snap();
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
      const laid = this.laid();
      if (cell.resource === null || !laid[cell.resource + down]) return null;
      to = cell.resource + down;
      resource = this.swap(span, laid[cell.resource].id, laid[to].id);
      delta = 0;
    } else if (timeline) {
      delta = unit === DAY ? this.stepDays(day, across) * DAY : across * unit;
    } else if (view === 'month') {
      delta = (down ? 7 * down : this.stepDays(day, across)) * DAY;
    } else if (down) {
      delta = unit === DAY ? this.stepDays(day, down) * DAY : down * unit;
    } else {
      // To the next column: another day, or another resource's.
      const columns = this.columns();
      const current = columns.findIndex((c) => c.day === cell.day && c.index === cell.resource);
      const column = columns[current + across];
      delta =
        (column ? nuiDayNumber(column.day) - nuiDayNumber(cell.day) : this.stepDays(day, across)) *
        DAY;
      if (column?.resource && cell.resource !== null && column.index !== cell.resource) {
        resource = this.swap(span, this.laid()[cell.resource].id, column.resource.id);
        to = column.index;
      }
    }
    return { start: start + delta, end: end + delta, resource, to };
  }

  /** The cell an event moved to `start` begins in, on the resource it went to. */
  private landing(span: NuiSchedulerSpan, start: number, resource: number | null): Cell {
    const at = nuiSchedulerValue(start);
    const day = at.slice(0, 10);
    const view = this.view();
    if (view === 'month' || (view === 'timeline' && !this.slotted())) {
      return { day, slot: null, resource: view === 'month' ? null : resource };
    }
    if (view !== 'timeline' && this.onTop(span)) return { day, slot: 'all', resource };
    return {
      day,
      slot: this.slotOf(nuiSchedulerMinutes(at) - nuiSchedulerMinutes(day)),
      resource,
    };
  }

  /** An event's resources with one swapped for another, as a move between them leaves them. */
  private swap(span: NuiSchedulerSpan, from: string, to: string): string | readonly string[] {
    const resource = span.event.resource;
    if (resource === undefined || typeof resource === 'string') return to;
    return [...new Set(resource.map((id) => (id === from ? to : id)))];
  }

  private spanOf(element: HTMLElement): NuiSchedulerSpan | undefined {
    const key = element.getAttribute('data-event-id');
    return this.spans().find((s) => s.key === key);
  }

  /** An event's new times, as `eventChange` reports them. */
  private proposal(
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

  /** The resources a dragged event lands on, when it moved between them. */
  private moveTo(preview: Preview): string | readonly string[] | undefined {
    const origin = this.drag()?.origin.cell.resource;
    if (preview.resource === null || origin === null || origin === undefined) return undefined;
    const from = this.laid()[origin]?.id;
    return from === undefined || from === preview.resource
      ? undefined
      : this.swap(preview.span, from, preview.resource);
  }

  /** Reports an event's new times, and says them; false when `allow` turns them down. */
  private change(
    span: NuiSchedulerSpan,
    start: number,
    end: number,
    resource?: string | readonly string[],
  ): boolean {
    const change = this.proposal(span, start, end, resource);
    const now = this.proposal(span, span.start, span.end);
    // Times that read the same aren't a change, such as an all-day event moved within its day.
    if (change.start === now.start && change.end === now.end && resource === undefined) {
      return false;
    }
    const allow = this.allow();
    if (allow && !allow(change)) {
      this.announcer.announce(this.words().unavailable, 'polite');
      return false;
    }
    this.eventChange.emit(change);
    this.announcer.announce(
      this.words().moved(span.event.title, this.when({ ...span, start, end })),
      'polite',
    );
    return true;
  }

  protected onEventClick(element: HTMLElement): void {
    if (this.suppressClick) {
      this.suppressClick = false;
      return;
    }
    const span = this.spanOf(element);
    if (span) this.eventClick.emit(span.event as NuiSchedulerEvent<T>);
  }

  protected onCellFocus(day: NuiDate, slot: number | 'all' | null, resource: number | null): void {
    if (this.date() !== day) this.date.set(day);
    if (this.slot() !== slot) this.slot.set(slot);
    const id = resource === null ? null : (this.laid()[resource]?.id ?? null);
    if (id !== null && this.resourceId() !== id) this.resourceId.set(id);
  }

  // --- Pointer ------------------------------------------------------------------

  protected onPointerdown(event: PointerEvent): void {
    if (event.button !== 0 || this.view() === 'agenda') return;
    const target = event.target as HTMLElement;
    const element = target.closest<HTMLElement>('.nui-scheduler-event');
    const cell = this.cellOf(target);
    const origin =
      this.pointAt(event.clientX, event.clientY) ??
      (cell ? { cell, time: this.rangeOf(cell)[0] } : null);
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
        if (drag.kind === 'select') {
          this.selection.set({ anchor: drag.origin.cell, focus: drag.origin.cell });
        } else {
          const span = drag.span!;
          this.preview.set({
            span,
            start: span.start,
            end: span.end,
            resource: this.idOf(drag.origin.cell.resource),
          });
        }
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

  private idOf(resource: number | null): string | null {
    return resource === null ? null : (this.laid()[resource]?.id ?? null);
  }

  private onPointermove(event: PointerEvent): void {
    const drag = this.drag();
    if (!drag) return;
    if (!drag.moved) {
      if (Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 4) return;
      this.drag.set({ ...drag, moved: true });
    }
    const point = this.pointAt(event.clientX, event.clientY);
    if (!point) return;
    const origin = drag.origin;
    if (drag.kind === 'select') {
      if (
        (origin.cell.slot === 'all') === (point.cell.slot === 'all') &&
        origin.cell.resource === point.cell.resource
      ) {
        this.selection.set({ anchor: origin.cell, focus: point.cell });
      }
      return;
    }
    const span = drag.span!;
    const snap = this.snap();
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
      this.preview.set({ span, start: span.start, end, resource: this.idOf(origin.cell.resource) });
      return;
    }
    // A timed event keeps to the time grid, an all-day one to whole days.
    if (days !== fromDays) return;
    const delta = whole
      ? shift * DAY
      : Math.round((span.start + point.time - origin.time) / snap) * snap - span.start;
    this.preview.set({
      span,
      start: span.start + delta,
      end: span.end + delta,
      resource: this.laid().length ? this.idOf(point.cell.resource) : null,
    });
  }

  private onPointerup(event: PointerEvent): void {
    const drag = this.drag();
    const preview = this.preview();
    const invalid = this.invalid();
    const resource = preview ? this.moveTo(preview) : undefined;
    this.drag.set(null);
    this.preview.set(null);
    if (!drag) return;
    if (drag.kind === 'select') {
      if (!drag.moved) {
        const cell = this.pointAt(event.clientX, event.clientY)?.cell ?? drag.origin.cell;
        this.selection.set({ anchor: cell, focus: cell });
      }
      this.chooseSelection();
      return;
    }
    if (drag.moved) {
      this.suppressClick = true;
      setTimeout(() => (this.suppressClick = false));
      if (preview && !invalid) this.change(preview.span, preview.start, preview.end, resource);
    }
  }
}

/** A bar across days, in its lane; one whose end shows can resize. */
function barOf(bar: NuiSchedulerBar, resizable: boolean): Shown {
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

function push<K, V>(map: Map<K, V[]>, key: K, value: V): void {
  const list = map.get(key);
  if (list) list.push(value);
  else map.set(key, [value]);
}
