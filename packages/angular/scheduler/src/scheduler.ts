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
  nuiAnnouncer,
  type NuiDate,
  nuiNow,
  NuiPersonality,
  nuiToday,
  nuiUtc,
  nuiWeekdayNames,
  nuiWeekInfo,
} from '@needless-ui/angular';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NUI_SCHEDULER_LABELS,
  NUI_SCHEDULER_LONG_PRESS,
  NUI_SCHEDULER_SLOP,
  NUI_SCHEDULER_VIEWS,
  nuiSchedulerAgenda,
  nuiSchedulerAnchor,
  nuiSchedulerByResource,
  type NuiSchedulerCell,
  nuiSchedulerCellFromKey,
  nuiSchedulerCellKey,
  type NuiSchedulerCellSlot,
  nuiSchedulerCellTime,
  type NuiSchedulerChange,
  nuiSchedulerChosen,
  nuiSchedulerColumns,
  nuiSchedulerCursor,
  type NuiSchedulerDrag,
  nuiSchedulerDragPreview,
  type NuiSchedulerEvent,
  nuiSchedulerEventLabel,
  nuiSchedulerFormats,
  nuiSchedulerFrame,
  nuiSchedulerGhost,
  type NuiSchedulerHours,
  nuiSchedulerIsoWeek,
  nuiSchedulerIsSelected,
  nuiSchedulerKey,
  type NuiSchedulerLabels,
  nuiSchedulerLanding,
  nuiSchedulerMoved,
  nuiSchedulerMoveTo,
  nuiSchedulerNowCell,
  nuiSchedulerOffHours,
  nuiSchedulerPaged,
  nuiSchedulerPaint,
  type NuiSchedulerPoint,
  type NuiSchedulerPreview,
  nuiSchedulerProposal,
  nuiSchedulerRange,
  type NuiSchedulerResource,
  nuiSchedulerResourceId,
  nuiSchedulerResourceNames,
  type NuiSchedulerSelection,
  type NuiSchedulerShown,
  nuiSchedulerShownDays,
  type NuiSchedulerSlot,
  type NuiSchedulerSpan,
  nuiSchedulerStartText,
  nuiSchedulerTarget,
  nuiSchedulerTimed,
  nuiSchedulerTimeline,
  type NuiSchedulerTimelineSpan,
  nuiSchedulerTimeText,
  nuiSchedulerTitle,
  type NuiSchedulerTone,
  nuiSchedulerTopBars,
  nuiSchedulerUnits,
  nuiSchedulerValue,
  type NuiSchedulerView,
  nuiSchedulerVisible,
  nuiSchedulerWeeks,
  nuiSchedulerWhen,
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
  private readonly announcer = nuiAnnouncer();
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
      this.views() ??
      (this.resources().length
        ? [...NUI_SCHEDULER_VIEWS, 'timeline' as const]
        : NUI_SCHEDULER_VIEWS),
  );

  /** What the views are laid out from: the settings, and what follows from them. */
  private readonly frame = computed(() =>
    nuiSchedulerFrame({
      view: this.view(),
      timelineSpan: this.timelineSpan(),
      start: this.start(),
      hidden: this.hidden(),
      agendaDays: this.agendaDays(),
      slotMinutes: this.slotMinutes(),
      dayStart: this.dayStart(),
      dayEnd: this.dayEnd(),
      scrollHour: this.scrollHour(),
      resources: this.resources(),
    }),
  );
  /** The date the view shows from: for one day, a day the views show. */
  private readonly anchor = computed(() => nuiSchedulerAnchor(this.frame(), this.date()));
  /** Every day of the view, hidden ones too: the range reported and loaded. */
  private readonly range = computed(() => nuiSchedulerRange(this.frame(), this.anchor()));
  /** The days shown. */
  protected readonly days = computed(() => nuiSchedulerShownDays(this.frame(), this.range()));
  private readonly spans = computed(() => {
    const range = this.range();
    return nuiSchedulerVisible(this.events(), range[0], range[range.length - 1]);
  });
  /** The spans of each resource. */
  private readonly byResource = computed(() => nuiSchedulerByResource(this.spans()));

  /** Whether the view has a time grid by slots: the week, the day, and a day's timeline. */
  protected readonly slotted = computed(() => this.frame().slotted);
  /** The resources laid out: columns in the day and the week, rows in the timeline. */
  protected readonly laid = computed(() => this.frame().laid);
  private readonly snap = computed(() => Math.max(1, this.snapMinutes() ?? this.frame().step));
  /** The slots of the time grid, as minutes since midnight. */
  protected readonly slots = computed(() => this.frame().slots);
  /** The slot the time grid opens at. */
  private readonly scrollSlot = computed(() => this.frame().scrollSlot);

  /** Where the keyboard is on the grid. */
  protected readonly slot = linkedSignal<boolean, NuiSchedulerCellSlot>({
    source: this.slotted,
    computation: (slotted) => (slotted ? this.scrollSlot() : null),
  });
  private readonly resourceId = signal<string | null>(null);
  /** Where the keyboard is, kept on a cell that's shown. */
  protected readonly cursor = computed(() =>
    nuiSchedulerCursor(this.frame(), this.days(), this.date(), this.slot(), this.resourceId()),
  );
  /** Chosen time: from the anchor to the cursor. */
  protected readonly selection = signal<NuiSchedulerSelection | null>(null);
  protected readonly drag = signal<NuiSchedulerDrag | null>(null);
  /** What a drag does, for the cursor: a resize goes across along bars and the timeline. */
  protected readonly dragging = computed(() => {
    const drag = this.drag();
    if (!drag?.moved) return null;
    const across = this.view() === 'timeline' || typeof drag.origin.cell.slot !== 'number';
    return drag.kind === 'resize' && across ? 'resize-across' : drag.kind;
  });
  protected readonly preview = signal<NuiSchedulerPreview | null>(null);
  protected readonly announcement = signal('');
  /**
   * Set when a drag, or a tap that chose time, ends: the click that follows lands on what
   * the app drew under the pointer (the event moved there, or the one just booked), and
   * isn't a click on it. That click comes at once, or never (Safari drops a click on what
   * appeared under the finger), so the next press clears this.
   */
  private suppressClick = false;

  // --- Formatting ---------------------------------------------------------------

  private readonly formats = computed(() => nuiSchedulerFormats(this.locale()));

  protected readonly weekdays = computed(() => {
    const long = nuiWeekdayNames(this.locale(), this.start(), 'long');
    const hidden = this.hidden();
    return nuiWeekdayNames(this.locale(), this.start(), 'short')
      .map((short, i) => ({ short, long: long[i], day: ((this.start() - 1 + i) % 7) + 1 }))
      .filter((name) => !hidden.has(name.day));
  });

  /** What's shown, as the toolbar's title says it: a month, a week, or a day. */
  readonly title = computed(() =>
    nuiSchedulerTitle(this.frame(), this.days(), this.date(), this.anchor(), this.formats()),
  );

  /** The week number shown above the times. */
  protected readonly weekNumber = computed(() =>
    this.weekNumbers() ? nuiSchedulerIsoWeek(this.frame(), this.days()[0]) : null,
  );

  /** An event's time, as it shows on the event. */
  protected time(span: NuiSchedulerSpan): string {
    return nuiSchedulerTimeText(span, this.formats(), this.words());
  }

  /** When an event starts, for the month's short lines. */
  protected startTime(span: NuiSchedulerSpan): string {
    return nuiSchedulerStartText(span, this.formats());
  }

  /** An event's name for screen readers: its title, resources, day and time. */
  protected label(span: NuiSchedulerSpan): string {
    return nuiSchedulerEventLabel(span, this.resources(), this.formats(), this.words());
  }

  /** The names of an event's resources, when they're shown. */
  protected resourceNames(span: NuiSchedulerSpan): string {
    return nuiSchedulerResourceNames(span, this.resources());
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

  protected context(span: NuiSchedulerSpan): NuiSchedulerEventContext<T> {
    return { $implicit: span.event as NuiSchedulerEvent<T>, time: this.time(span) };
  }

  protected canEdit(span: NuiSchedulerSpan): boolean {
    return span.event.editable ?? this.editable();
  }

  /** An event's colors: its own, else its resource's, else the accent. */
  protected paint(span: NuiSchedulerSpan): { tone: NuiSchedulerTone; color: string | null } {
    return nuiSchedulerPaint(span, this.resources());
  }

  /** Whether a cell lies outside working hours. */
  protected off(day: NuiDate, slot: NuiSchedulerCellSlot, resource: number | null): boolean {
    return nuiSchedulerOffHours(this.frame(), this.businessHours(), day, slot, resource);
  }

  // --- The time grid ------------------------------------------------------------

  protected readonly slotLabels = computed(() => {
    const formats = this.formats();
    return this.slots().map((minutes) => formats.time.format(nuiUtc(nuiSchedulerValue(minutes))));
  });

  /** The time grid's columns: each day, and each day of each resource when they're laid out. */
  protected readonly columns = computed(() => nuiSchedulerColumns(this.frame(), this.days()));

  /** Spans of a resource, or all of them. */
  private readonly spansOf = (resource: NuiSchedulerResource | null): NuiSchedulerSpan[] =>
    resource ? (this.byResource().get(resource.id) ?? []) : this.spans();

  /** Timed events, placed side by side, by the cell they start in. */
  private readonly placed = computed(() =>
    nuiSchedulerTimed(this.frame(), this.columns(), this.spansOf),
  );

  /** Bars in the all-day row, by the cell they start in, and how many lanes they take. */
  private readonly topBars = computed(() =>
    nuiSchedulerTopBars(this.frame(), this.days(), this.spansOf),
  );

  protected placedAt(key: string): NuiSchedulerShown[] {
    return this.placed().get(key) ?? [];
  }

  protected barsAt(key: string): NuiSchedulerShown[] {
    return this.topBars().map.get(key) ?? [];
  }

  protected readonly topLanes = computed(() => this.topBars().lanes);

  /** Where the now line crosses the time grid: its day, its slot, and how far into it. */
  private readonly nowCell = computed(() => nuiSchedulerNowCell(this.frame(), this.now()));

  /** Where the now line crosses a cell, as a share of the slot, or null. */
  protected nowAt(day: NuiDate, slot: number): number | null {
    const now = this.nowCell();
    return now && now.day === day && now.slot === slot ? now.offset : null;
  }

  // --- The timeline -------------------------------------------------------------

  /** The timeline's columns: slots of its day, or its days. */
  protected readonly units = computed(() =>
    nuiSchedulerUnits(this.frame(), this.days(), this.slotLabels()),
  );

  /** The timeline's rows: each resource, with its events by the cell they start in. */
  protected readonly timeline = computed(() =>
    nuiSchedulerTimeline(this.frame(), this.days(), this.spansOf),
  );

  // --- The month grid -----------------------------------------------------------

  protected readonly weeks = computed(() =>
    nuiSchedulerWeeks(
      this.frame(),
      this.range(),
      this.date(),
      this.spans(),
      this.formats(),
      this.words(),
      this.weekNumbers(),
    ),
  );

  // --- The agenda ---------------------------------------------------------------

  protected readonly agenda = computed(() =>
    this.view() === 'agenda' ? nuiSchedulerAgenda(this.days(), this.spans(), this.formats()) : [],
  );

  // --- Dragging -----------------------------------------------------------------

  /** Where a dragged event would land, drawn in the cell it starts in. */
  protected readonly ghost = computed(() =>
    nuiSchedulerGhost(this.frame(), this.preview(), this.days(), this.weeks(), this.resources()),
  );

  /** Whether `allow` turns down what's being dragged or chosen. */
  protected readonly invalid = computed(() => {
    const allow = this.allow();
    if (!allow) return false;
    const preview = this.preview();
    if (preview) {
      const resource = nuiSchedulerMoveTo(this.frame(), preview, this.drag()?.origin.cell.resource);
      return !allow(nuiSchedulerProposal<T>(preview.span, preview.start, preview.end, resource));
    }
    const selection = this.selection();
    return selection ? !allow(nuiSchedulerChosen(this.frame(), selection)) : false;
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
        // The week and the day share their body: across, the day opens at its start.
        body.scrollLeft = 0;
        const row = body.querySelector<HTMLElement>(`[data-slot-row="${this.scrollSlot()}"]`);
        const head = body.querySelector<HTMLElement>('thead');
        if (!row) return;
        // An hour's label sits on its line, half above the row: that half stays in view too.
        const label = row.querySelector('.nui-scheduler-time > span');
        const above = label
          ? row.getBoundingClientRect().top - label.getBoundingClientRect().top
          : 0;
        body.scrollTop = row.offsetTop - (head?.offsetHeight ?? 0) - Math.max(0, above);
        return;
      }
      const cell = body.querySelector<HTMLElement>(
        this.slotted() ? `th[data-slot="${this.scrollSlot()}"]` : 'thead th[data-today]',
      );
      const corner = body.querySelector<HTMLElement>('.nui-scheduler-corner');
      if (!cell || !corner) return;
      const rect = cell.getBoundingClientRect();
      // The cell goes right after the names, which stay at the start (inside the body's
      // border); today goes after a couple of the days before it.
      const names = corner.getBoundingClientRect();
      const days = this.slotted() ? 0 : 2 * rect.width;
      body.scrollLeft +=
        getComputedStyle(this.host).direction === 'rtl'
          ? rect.right - (names.left - days)
          : rect.left - (names.right + days);
    });
  }

  /** Moves focus once the change on its way has rendered, to what `find` finds then. */
  private focusAfterRender(find: () => HTMLElement | null): void {
    afterNextRender(() => find()?.focus(), { injector: this.injector });
  }

  private cellElement(cell: NuiSchedulerCell): HTMLElement | null {
    return this.host.querySelector<HTMLElement>(
      `[data-cell="${CSS.escape(nuiSchedulerCellKey(cell))}"]`,
    );
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
    this.date.set(nuiSchedulerPaged(this.frame(), this.anchor(), direction));
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
  protected readonly key = nuiSchedulerKey;

  protected isCursor(day: NuiDate, slot: NuiSchedulerCellSlot, resource: number | null): boolean {
    const cursor = this.cursor();
    return cursor.day === day && cursor.slot === slot && cursor.resource === resource;
  }

  /** Whether a cell is in the chosen time. */
  protected isSelected(day: NuiDate, slot: NuiSchedulerCellSlot, resource: number | null): boolean {
    return nuiSchedulerIsSelected(this.frame(), this.selection(), day, slot, resource);
  }

  private chooseSelection(): void {
    const selection = this.selection();
    if (!selection || !this.selectable()) return;
    const slot = nuiSchedulerChosen(this.frame(), selection);
    this.selection.set(null);
    if (this.allow() && !this.allow()!(slot)) {
      this.announcer.announce(this.words().unavailable, 'polite');
      return;
    }
    this.slotSelect.emit(slot);
  }

  private cellOf(element: Element | null): NuiSchedulerCell | null {
    const key = element?.closest<HTMLElement>('[data-cell]')?.getAttribute('data-cell');
    return key ? nuiSchedulerCellFromKey(key) : null;
  }

  /** The cell under a point, beneath any events drawn over it, and the time there. */
  private pointAt(x: number, y: number): NuiSchedulerPoint | null {
    const hit = document
      .elementsFromPoint(x, y)
      .find((element) => element.matches('[data-cell]') && this.host.contains(element));
    const cell = this.cellOf(hit ?? null);
    if (!cell) return null;
    const [from, to] = nuiSchedulerCellTime(this.frame(), cell);
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
      // Without `selectable`, Enter on an empty cell chooses nothing, and marks nothing.
      if (!this.selectable()) return;
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
    const next = nuiSchedulerTarget(
      this.frame(),
      cursor,
      event.key,
      event.ctrlKey || event.metaKey,
      rtl,
      { days: this.days(), columns: this.columns(), weeks: this.weeks() },
    );
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
    if (nuiSchedulerCellKey(next) === nuiSchedulerCellKey(cursor)) return;
    this.slot.set(next.slot);
    this.resourceId.set(nuiSchedulerResourceId(this.frame(), next.resource));
    this.date.set(next.day);
    this.focusAfterRender(() => this.cellElement(this.cursor()));
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
      const rtl = getComputedStyle(this.host).direction === 'rtl';
      const move = nuiSchedulerMoved(
        this.frame(),
        span,
        cell,
        event.key,
        event.shiftKey,
        rtl,
        this.snap(),
        this.columns(),
      );
      if (!move || !this.change(span, move.start, move.end, move.resource)) return;
      // An occurrence the app replaces with an event of its own leaves focus on its new cell.
      const landing = nuiSchedulerLanding(this.frame(), span, move.start, move.to);
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

  private spanOf(element: HTMLElement): NuiSchedulerSpan | undefined {
    const key = element.getAttribute('data-event-id');
    return this.spans().find((s) => s.key === key);
  }

  /** Reports an event's new times, and says them; false when `allow` turns them down. */
  private change(
    span: NuiSchedulerSpan,
    start: number,
    end: number,
    resource?: string | readonly string[],
  ): boolean {
    const change = nuiSchedulerProposal<T>(span, start, end, resource);
    const now = nuiSchedulerProposal<T>(span, span.start, span.end);
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
      this.words().moved(
        span.event.title,
        nuiSchedulerWhen({ ...span, start, end }, this.formats(), this.words()),
      ),
      'polite',
    );
    return true;
  }

  protected onEventClick(event: MouseEvent): void {
    // A key's click (Enter on an event) has no detail: it ends no press.
    if (this.suppressClick && event.detail > 0) {
      this.suppressClick = false;
      return;
    }
    const span = this.spanOf(event.currentTarget as HTMLElement);
    if (span) this.eventClick.emit(span.event as NuiSchedulerEvent<T>);
  }

  /** Ignores the click that ends this press, until the next press (see `suppressClick`). */
  private ignoreClick(): void {
    this.suppressClick = true;
    document.addEventListener('pointerdown', () => (this.suppressClick = false), {
      capture: true,
      once: true,
    });
  }

  protected onCellFocus(day: NuiDate, slot: NuiSchedulerCellSlot, resource: number | null): void {
    if (this.date() !== day) this.date.set(day);
    if (this.slot() !== slot) this.slot.set(slot);
    const id = nuiSchedulerResourceId(this.frame(), resource);
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
      (cell ? { cell, time: nuiSchedulerCellTime(this.frame(), cell)[0] } : null);
    if (!origin) return;
    let drag: NuiSchedulerDrag;
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
            resource: nuiSchedulerResourceId(this.frame(), drag.origin.cell.resource),
          });
        }
        // A tick to feel, where the page may vibrate (after the first tap on it).
        if (navigator.userActivation?.hasBeenActive !== false) navigator.vibrate?.(10);
      }, NUI_SCHEDULER_LONG_PRESS);
    }
    document.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerId !== pointer) return;
        if (held) this.onPointermove(e);
        else if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > NUI_SCHEDULER_SLOP) cancel();
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
    const preview = nuiSchedulerDragPreview(this.frame(), drag, point, this.snap());
    if (preview) this.preview.set(preview);
  }

  private onPointerup(event: PointerEvent): void {
    const drag = this.drag();
    const preview = this.preview();
    const invalid = this.invalid();
    const resource = preview
      ? nuiSchedulerMoveTo(this.frame(), preview, drag?.origin.cell.resource)
      : undefined;
    this.drag.set(null);
    this.preview.set(null);
    if (!drag) return;
    if (drag.kind === 'select') {
      if (!drag.moved) {
        const cell = this.pointAt(event.clientX, event.clientY)?.cell ?? drag.origin.cell;
        this.selection.set({ anchor: cell, focus: cell });
      }
      this.ignoreClick();
      this.chooseSelection();
      return;
    }
    if (drag.moved) {
      this.ignoreClick();
      if (preview && !invalid) this.change(preview.span, preview.start, preview.end, resource);
    }
  }
}
