import {
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  linkedSignal,
  LOCALE_ID,
  model,
  numberAttribute,
  output,
  signal,
  untracked,
} from '@angular/core';
import {
  nuiAddDays,
  nuiAddMonths,
  nuiAddToMonth,
  nuiAddYears,
  nuiClampDate,
  type NuiDate,
  nuiDateFormat,
  nuiIsoWeek,
  type NuiMonth,
  nuiMonthNames,
  nuiMonthOf,
  nuiMonthWeeks,
  NuiPersonality,
  nuiStartOfWeek,
  nuiToday,
  nuiUtc,
  nuiWeekday,
  nuiWeekdayNames,
  nuiWeekInfo,
} from '@needless-ui/angular';

/** How many days can be chosen: one, a range, or any number. */
export type NuiCalendarSelection = 'single' | 'range' | 'multiple';

/** What the grid shows: the days of a month, the months of a year, or a span of years. */
export type NuiCalendarView = 'day' | 'month' | 'year';

/** A span of days, both ends included. */
export interface NuiDateRange {
  start: NuiDate;
  end: NuiDate;
}

/** Every text the calendar shows or announces. */
export interface NuiCalendarLabels {
  previousMonth: string;
  nextMonth: string;
  previousYear: string;
  nextYear: string;
  previousYears: string;
  nextYears: string;
  /** Said on the title button, after the month it shows. */
  chooseMonth: string;
  chooseYear: string;
  /** Said before today's date. */
  today: string;
  unavailable: string;
  rangeStart: string;
  rangeEnd: string;
  /** Heads the column of week numbers. */
  week: string;
  weekNumber: (week: number) => string;
}

export const NUI_CALENDAR_LABELS: NuiCalendarLabels = {
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
  previousYear: 'Previous year',
  nextYear: 'Next year',
  previousYears: 'Previous years',
  nextYears: 'Next years',
  chooseMonth: 'choose a month',
  chooseYear: 'choose a year',
  today: 'Today',
  unavailable: 'unavailable',
  rangeStart: 'start of the range',
  rangeEnd: 'end of the range',
  week: 'Wk',
  weekNumber: (week) => `Week ${week}`,
};

/** A day as the grid draws it. */
interface Day {
  date: NuiDate;
  text: string;
  label: string;
  outside: boolean;
  disabled: boolean;
  weekend: boolean;
  today: boolean;
}

/** Years shown at once in the year view. */
const YEARS = 20;
let nextId = 0;

/**
 * A calendar to choose a day, a range of days, or several days, by pointer or
 * keyboard. It moves through months, and its title zooms out to months and years
 * for distant dates.
 *
 * ```html
 * <nui-calendar [(value)]="day" min="2026-01-01" />
 * <nui-calendar selection="range" [(range)]="stay" months="2" />
 * ```
 *
 * Keyboard, from the WAI-ARIA date picker: arrows move by day and week (mirrored
 * right to left), Home and End go to the week's ends, Page Up and Page Down move
 * a month, with Shift a year, and Enter or Space chooses.
 */
@Component({
  selector: 'nui-calendar',
  hostDirectives: [{ directive: NuiPersonality, inputs: ['corners', 'radius', 'density'] }],
  host: {
    class: 'nui-calendar',
    '[attr.data-view]': 'view()',
    '[attr.data-selection]': 'selection()',
    '(focusin)': 'onFocusin($event)',
  },
  templateUrl: './calendar.html',
})
export class NuiCalendar {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly id = `nui-calendar-${nextId++}`;

  readonly selection = input<NuiCalendarSelection>('single');
  /** The chosen day, with `selection="single"`. */
  readonly value = model<NuiDate | null>(null);
  /** The chosen days, with `selection="multiple"`, in order. */
  readonly values = model<readonly NuiDate[]>([]);
  /** The chosen range, with `selection="range"`. */
  readonly range = model<NuiDateRange | null>(null);
  /** The month shown, the first of them when several are. By default, the chosen day's. */
  readonly month = model<NuiMonth | null>(null);
  readonly view = model<NuiCalendarView>('day');
  /** The first day that can be chosen. */
  readonly min = input<NuiDate | null>(null);
  /** The last day that can be chosen. */
  readonly max = input<NuiDate | null>(null);
  /** Days that can't be chosen, such as holidays or booked days. */
  readonly unavailable = input<(date: NuiDate) => boolean>(() => false);
  /** Months shown side by side. */
  readonly months = input(1, { transform: numberAttribute });
  /** Shows the ISO week number before each week. */
  readonly weekNumbers = input(false, { transform: booleanAttribute });
  /** The first day of the week, 1 for Monday to 7 for Sunday. By default, the locale's. */
  readonly firstDay = input<number | undefined, unknown>(undefined, {
    transform: (value: unknown) =>
      value == null || value === '' ? undefined : numberAttribute(value),
  });
  /** Formats names and numbers; `LOCALE_ID` by default. */
  readonly locale = input(inject(LOCALE_ID));
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiCalendarLabels>>({});

  /** Emits each choice: a day, or a range once both of its ends are chosen. */
  readonly picked = output<NuiDate | NuiDateRange>();

  protected readonly words = computed(() => ({ ...NUI_CALENDAR_LABELS, ...this.labels() }));
  protected readonly today = signal(nuiToday());
  protected readonly start = computed(() => this.firstDay() ?? nuiWeekInfo(this.locale()).firstDay);
  private readonly weekend = computed(() => nuiWeekInfo(this.locale()).weekend);
  protected readonly count = computed(() =>
    this.view() === 'day' ? Math.max(1, this.months()) : 1,
  );

  /** The day to start from: the chosen one, or today, within `min` and `max`. */
  private readonly anchorDate = computed(() => {
    const chosen =
      this.selection() === 'range'
        ? this.range()?.start
        : this.selection() === 'multiple'
          ? this.values()[0]
          : this.value();
    return nuiClampDate(chosen ?? this.today(), this.min(), this.max());
  });
  /** The day in the tab order, where the keyboard is. */
  protected readonly focused = linkedSignal(() => this.anchorDate());
  /** The first month shown. Moving the keyboard changes it only to keep the day in sight. */
  protected readonly first = computed(() => this.month() ?? nuiMonthOf(this.anchorDate()));
  /** In a range, the first end chosen, waiting for the second. */
  protected readonly anchor = signal<NuiDate | null>(null);
  protected readonly hovered = signal<NuiDate | null>(null);
  protected readonly announcement = signal('');
  private refocus = false;
  /** Asks for focus again, even on the day that has it. */
  private readonly focusRequest = signal(0);

  protected readonly weekdays = computed(() => {
    const locale = this.locale();
    const long = nuiWeekdayNames(locale, this.start(), 'long');
    return nuiWeekdayNames(locale, this.start(), 'short').map((short, i) => ({
      short,
      long: long[i],
    }));
  });

  /** The months shown, each with its title and weeks of days. */
  protected readonly grids = computed(() => {
    const locale = this.locale();
    const number = nuiDateFormat(locale, { day: 'numeric' });
    const full = nuiDateFormat(locale, { dateStyle: 'full' });
    const title = nuiDateFormat(locale, { month: 'long', year: 'numeric' });
    const today = this.today();
    const words = this.words();
    const weekend = this.weekend();
    const several = this.count() > 1;
    return Array.from({ length: this.count() }, (_, i) => {
      const month = nuiAddToMonth(this.first(), i);
      return {
        month,
        title: title.format(nuiUtc(`${month}-01`)),
        weeks: nuiMonthWeeks(month, this.start()).map((week) => ({
          // Side by side, a week wholly in the next month shows no number.
          number:
            several && nuiMonthOf(week[0]) !== month && nuiMonthOf(week[6]) !== month
              ? null
              : nuiIsoWeek(nuiAddDays(week[0], (8 - this.start()) % 7)),
          days: week.map((date): Day | null => {
            const outside = nuiMonthOf(date) !== month;
            // Side by side, the days around each month would show twice.
            if (outside && several) return null;
            const disabled = this.disabledDate(date);
            const label = [
              date === today ? words.today : '',
              full.format(nuiUtc(date)),
              disabled ? words.unavailable : '',
            ].filter(Boolean);
            return {
              date,
              text: number.format(nuiUtc(date)),
              label: label.join(', '),
              outside,
              disabled,
              weekend: weekend.includes(nuiWeekday(date)),
              today: date === today,
            };
          }),
        })),
      };
    });
  });

  /** The chosen range, or the one being chosen. */
  protected readonly shownRange = computed((): NuiDateRange | null => {
    const anchor = this.anchor();
    if (anchor) {
      const other = this.hovered() ?? this.focused();
      return anchor <= other ? { start: anchor, end: other } : { start: other, end: anchor };
    }
    return this.selection() === 'range' ? this.range() : null;
  });

  private readonly chosen = computed(
    () => new Set(this.selection() === 'multiple' ? this.values() : [this.value() ?? '']),
  );

  /** The title: the month, the year, or the span of years. */
  protected readonly title = computed(() => {
    const year = +this.focused().slice(0, 4);
    const format = nuiDateFormat(this.locale(), { year: 'numeric' });
    switch (this.view()) {
      case 'month':
        return format.format(nuiUtc(this.focused()));
      case 'year': {
        const from = Math.floor(year / YEARS) * YEARS;
        return `${format.format(nuiUtc(yearStart(Math.max(1, from))))} – ${format.format(nuiUtc(yearStart(from + YEARS - 1)))}`;
      }
      default:
        return this.grids()[0].title;
    }
  });

  protected readonly monthCells = computed(() => {
    const names = nuiMonthNames(this.locale(), 'short');
    const year = this.focused().slice(0, 4);
    const today = nuiMonthOf(this.today());
    const chosen = nuiMonthOf(this.anchorDate());
    return names.map((name, i) => {
      const month = `${year}-${String(i + 1).padStart(2, '0')}`;
      return {
        month,
        name,
        current: month === today,
        chosen: month === chosen,
        disabled: !this.monthAllowed(month),
      };
    });
  });

  protected readonly yearCells = computed(() => {
    const format = nuiDateFormat(this.locale(), { year: 'numeric' });
    const from = Math.floor(+this.focused().slice(0, 4) / YEARS) * YEARS;
    const today = +this.today().slice(0, 4);
    const chosen = +this.anchorDate().slice(0, 4);
    return Array.from({ length: YEARS }, (_, i) => from + i)
      .filter((year) => year >= 1 && year <= 9999)
      .map((year) => ({
        year,
        name: format.format(nuiUtc(yearStart(year))),
        current: year === today,
        chosen: year === chosen,
        disabled: !this.yearAllowed(year),
      }));
  });

  constructor() {
    // Keyboard moves focus with the day; pointer and code leave it where it is.
    afterRenderEffect(() => {
      this.focusRequest();
      const target = this.focusTarget();
      if (!this.refocus) return;
      this.refocus = false;
      this.host.querySelector<HTMLElement>(target)?.focus();
    });
  }

  /** Moves the keyboard to a day, showing its month. */
  focusDate(date: NuiDate = this.focused()): void {
    this.move(date);
    this.refocus = true;
    this.focusRequest.update((n) => n + 1);
  }

  protected isChosen(date: NuiDate): boolean {
    return this.chosen().has(date);
  }

  protected inRange(date: NuiDate): boolean {
    const range = this.shownRange();
    return !!range && date >= range.start && date <= range.end;
  }

  protected rangeLabel(day: Day): string {
    const range = this.shownRange();
    if (!range || this.anchor()) return day.label;
    const words = this.words();
    if (day.date === range.start && day.date === range.end) return day.label;
    if (day.date === range.start) return `${day.label}, ${words.rangeStart}`;
    if (day.date === range.end) return `${day.label}, ${words.rangeEnd}`;
    return day.label;
  }

  protected navLabel(direction: -1 | 1): string {
    const words = this.words();
    const view = this.view();
    if (view === 'year') return direction < 0 ? words.previousYears : words.nextYears;
    if (view === 'month') return direction < 0 ? words.previousYear : words.nextYear;
    return direction < 0 ? words.previousMonth : words.nextMonth;
  }

  /** Whether the previous or next page has anything to choose. */
  protected canPage(direction: -1 | 1): boolean {
    const min = this.min();
    const max = this.max();
    const focused = this.focused();
    switch (this.view()) {
      case 'year': {
        const from = Math.floor(+focused.slice(0, 4) / YEARS) * YEARS + direction * YEARS;
        return this.yearAllowed(direction < 0 ? from + YEARS - 1 : from);
      }
      case 'month':
        return this.yearAllowed(+focused.slice(0, 4) + direction);
      default: {
        const month = nuiAddToMonth(this.first(), direction < 0 ? -1 : this.count());
        return (!min || `${month}-31` >= min) && (!max || `${month}-01` <= max);
      }
    }
  }

  /** The previous or next month, year or span of years, from the buttons. */
  protected page(direction: -1 | 1): void {
    if (!this.canPage(direction)) return;
    const focused = this.focused();
    const view = this.view();
    const date =
      view === 'year'
        ? nuiAddYears(focused, direction * YEARS)
        : view === 'month'
          ? nuiAddYears(focused, direction)
          : nuiAddMonths(focused, direction);
    if (view === 'day') this.month.set(nuiAddToMonth(this.first(), direction));
    this.focused.set(nuiClampDate(date, this.min(), this.max()));
    this.announcement.set(this.title());
  }

  /** The title button: from days to months to years. */
  protected zoomOut(): void {
    const view = this.view();
    if (view === 'year') return;
    this.view.set(view === 'day' ? 'month' : 'year');
    this.announcement.set(this.title());
  }

  protected pick(date: NuiDate): void {
    if (this.disabledDate(date)) return;
    this.move(date);
    switch (this.selection()) {
      case 'multiple': {
        const values = this.values();
        this.values.set(
          values.includes(date) ? values.filter((d) => d !== date) : [...values, date].sort(),
        );
        this.picked.emit(date);
        break;
      }
      case 'range': {
        const anchor = this.anchor();
        if (!anchor) {
          this.anchor.set(date);
          break;
        }
        const range = anchor <= date ? { start: anchor, end: date } : { start: date, end: anchor };
        this.anchor.set(null);
        this.range.set(range);
        this.picked.emit(range);
        break;
      }
      default:
        this.value.set(date);
        this.picked.emit(date);
    }
  }

  protected pickMonth(month: NuiMonth, disabled: boolean): void {
    if (disabled) return;
    const day = Math.min(+this.focused().slice(8), 28);
    this.focused.set(
      nuiClampDate(`${month}-${String(day).padStart(2, '0')}`, this.min(), this.max()),
    );
    this.month.set(month);
    this.view.set('day');
    this.refocus = true;
  }

  protected pickYear(year: number, disabled: boolean): void {
    if (disabled) return;
    const date = `${String(year).padStart(4, '0')}${this.focused().slice(4)}`;
    this.focused.set(nuiClampDate(nuiAddYears(date, 0), this.min(), this.max()));
    this.view.set('month');
    this.refocus = true;
  }

  protected onGridKeydown(event: KeyboardEvent): void {
    const view = this.view();
    const rtl = getComputedStyle(this.host).direction === 'rtl';
    const across = rtl ? -1 : 1;
    const focused = this.focused();
    let next: NuiDate | null = null;
    const step = (days: number, months: number, years: number) =>
      view === 'year'
        ? nuiAddYears(focused, years)
        : view === 'month'
          ? nuiAddMonths(focused, months)
          : nuiAddDays(focused, days);
    switch (event.key) {
      case 'ArrowLeft':
        next = step(-across, -across, -across);
        break;
      case 'ArrowRight':
        next = step(across, across, across);
        break;
      case 'ArrowUp':
        next = step(-7, -3, -4);
        break;
      case 'ArrowDown':
        next = step(7, 3, 4);
        break;
      case 'Home':
        next =
          view === 'day'
            ? nuiStartOfWeek(focused, this.start())
            : view === 'month'
              ? `${focused.slice(0, 4)}-01${focused.slice(7)}`
              : nuiAddYears(focused, -(+focused.slice(0, 4) % YEARS));
        break;
      case 'End':
        next =
          view === 'day'
            ? nuiAddDays(nuiStartOfWeek(focused, this.start()), 6)
            : view === 'month'
              ? nuiAddMonths(focused, 12 - +focused.slice(5, 7))
              : nuiAddYears(focused, YEARS - 1 - (+focused.slice(0, 4) % YEARS));
        break;
      case 'PageUp':
      case 'PageDown': {
        const direction = event.key === 'PageUp' ? -1 : 1;
        next =
          view === 'year'
            ? nuiAddYears(focused, direction * YEARS)
            : view === 'month' || event.shiftKey
              ? nuiAddYears(focused, direction)
              : nuiAddMonths(focused, direction);
        break;
      }
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (view === 'day') this.pick(focused);
        else if (view === 'month')
          this.pickMonth(nuiMonthOf(focused), !this.monthAllowed(nuiMonthOf(focused)));
        else this.pickYear(+focused.slice(0, 4), !this.yearAllowed(+focused.slice(0, 4)));
        return;
      case 'Escape':
        if (this.anchor() || view !== 'day') {
          // Undo one step instead of closing a popover around the calendar.
          event.preventDefault();
          event.stopPropagation();
          if (this.anchor()) this.anchor.set(null);
          else {
            this.view.set(view === 'year' ? 'month' : 'day');
            this.refocus = true;
          }
        }
        return;
      default:
        return;
    }
    event.preventDefault();
    this.focusDate(nuiClampDate(next, this.min(), this.max()));
  }

  protected onFocusin(event: FocusEvent): void {
    const date = (event.target as HTMLElement).dataset?.['date'];
    if (date && date !== untracked(this.focused)) this.focused.set(date);
  }

  /** Focuses a day, and shows its month if it's out of sight. */
  private move(date: NuiDate): void {
    const month = nuiMonthOf(date);
    const first = this.first();
    const last = nuiAddToMonth(first, this.count() - 1);
    this.focused.set(date);
    if (month < first) this.month.set(month);
    else if (month > last) this.month.set(nuiAddToMonth(month, 1 - this.count()));
  }

  private focusTarget(): string {
    const focused = this.focused();
    switch (this.view()) {
      case 'year':
        return `[data-year="${+focused.slice(0, 4)}"]`;
      case 'month':
        return `[data-month="${nuiMonthOf(focused)}"]`;
      default:
        return `[data-date="${focused}"]`;
    }
  }

  private disabledDate(date: NuiDate): boolean {
    const min = this.min();
    const max = this.max();
    return (!!min && date < min) || (!!max && date > max) || this.unavailable()(date);
  }

  private monthAllowed(month: NuiMonth): boolean {
    const min = this.min();
    const max = this.max();
    return (!min || `${month}-31` >= min) && (!max || `${month}-01` <= max);
  }

  private yearAllowed(year: number): boolean {
    const min = this.min();
    const max = this.max();
    return (
      year >= 1 &&
      year <= 9999 &&
      (!min || year >= +min.slice(0, 4)) &&
      (!max || year <= +max.slice(0, 4))
    );
  }
}

function yearStart(year: number): NuiDate {
  return `${String(year).padStart(4, '0')}-01-01`;
}
