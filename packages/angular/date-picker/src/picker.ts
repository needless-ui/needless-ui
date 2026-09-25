import {
  afterNextRender,
  booleanAttribute,
  Component,
  computed,
  effect,
  ElementRef,
  forwardRef,
  inject,
  Injector,
  input,
  LOCALE_ID,
  model,
  numberAttribute,
  signal,
  viewChild,
} from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  nuiAddDays,
  nuiAddMonths,
  type NuiDate,
  nuiToday,
  NuiPersonality,
} from '@needless-ui/angular';
import {
  NuiCalendar,
  type NuiCalendarLabels,
  type NuiDateRange,
} from '@needless-ui/angular/calendar';
import { NuiPopover, NuiPopoverTrigger } from '@needless-ui/angular/popover';
import { NuiDateField, type NuiDateFieldLabels } from './field';
import type { NuiDateGranularity } from './segments';

/** Every text a picker shows or announces, beyond its field's and calendar's. */
export interface NuiDatePickerLabels {
  /** Names the button that opens the calendar. */
  open: string;
  /** Names the calendar's popover. */
  dialog: string;
  start: string;
  end: string;
  /** Names the list of preset ranges. */
  presets: string;
  field: Partial<NuiDateFieldLabels>;
  calendar: Partial<NuiCalendarLabels>;
}

export const NUI_DATE_PICKER_LABELS: NuiDatePickerLabels = {
  open: 'Choose a date',
  dialog: 'Calendar',
  start: 'Start date',
  end: 'End date',
  presets: 'Presets',
  field: {},
  calendar: {},
};

/** Labels to replace, including the field's and calendar's. */
export type NuiDatePickerLabelsInput = Partial<NuiDatePickerLabels>;

/** A named range to choose in one click, such as "Last 7 days". */
export interface NuiDateRangePreset {
  label: string;
  range: NuiDateRange | (() => NuiDateRange);
}

/**
 * Common ranges, ending today: the last 7 and 30 days, this month, last month and
 * this year. Pass labels in your language.
 */
export function nuiDateRangePresets(
  labels: {
    last7: string;
    last30: string;
    thisMonth: string;
    lastMonth: string;
    thisYear: string;
  } = {
    last7: 'Last 7 days',
    last30: 'Last 30 days',
    thisMonth: 'This month',
    lastMonth: 'Last month',
    thisYear: 'This year',
  },
): NuiDateRangePreset[] {
  const today = () => nuiToday();
  return [
    { label: labels.last7, range: () => ({ start: nuiAddDays(today(), -6), end: today() }) },
    { label: labels.last30, range: () => ({ start: nuiAddDays(today(), -29), end: today() }) },
    {
      label: labels.thisMonth,
      range: () => ({ start: `${today().slice(0, 7)}-01`, end: today() }),
    },
    {
      label: labels.lastMonth,
      range: () => {
        const start = nuiAddMonths(`${today().slice(0, 7)}-01`, -1);
        return { start, end: nuiAddDays(nuiAddMonths(start, 1), -1) };
      },
    },
    {
      label: labels.thisYear,
      range: () => ({ start: `${today().slice(0, 4)}-01-01`, end: today() }),
    },
  ];
}

const PERSONALITY = {
  directive: NuiPersonality,
  inputs: ['corners', 'radius', 'density'],
};

/**
 * A date field with a calendar in a popover: type the date, or pick it.
 *
 * ```html
 * <label id="departure">Departure</label>
 * <nui-date-picker aria-labelledby="departure" [(value)]="departure" [min]="today" />
 * ```
 *
 * With `granularity`, it takes a time too, and the calendar changes only the
 * date. It works with Signal Forms, reactive forms and `ngModel`.
 */
@Component({
  selector: 'nui-date-picker',
  imports: [NuiCalendar, NuiDateField, NuiPopover, NuiPopoverTrigger],
  hostDirectives: [PERSONALITY],
  host: {
    class: 'nui-date-picker',
    role: 'group',
    '[attr.data-disabled]': 'off() || null',
    '[attr.data-invalid]': 'field().invalid() || null',
    '[attr.data-open]': 'open() || null',
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiDatePicker), multi: true },
  ],
  template: `
    <nui-date-field
      [value]="value()"
      (valueChange)="set($event)"
      [granularity]="granularity()"
      [min]="min()"
      [max]="max()"
      [placeholder]="placeholder()"
      [hourCycle]="hourCycle()"
      [minuteStep]="minuteStep()"
      [disabled]="off()"
      [readonly]="readonly()"
      [locale]="locale()"
      [labels]="words().field"
      (focusout)="touched()"
    />
    <button
      #trigger
      type="button"
      class="nui-date-picker-button"
      [nuiPopoverTrigger]="popover"
      [attr.aria-label]="words().open"
      [attr.title]="words().open"
      [disabled]="off() || readonly()"
    ></button>
    <div
      nuiPopover
      #popover="nuiPopover"
      class="nui-date-picker-popover"
      [attr.aria-label]="words().dialog"
      (beforetoggle)="anchor(popover)"
      (openChange)="onOpen($event)"
    >
      @if (open()) {
        <nui-calendar
          [value]="field().date()"
          (picked)="pick($any($event))"
          [min]="min()?.slice(0, 10) ?? null"
          [max]="max()?.slice(0, 10) ?? null"
          [unavailable]="unavailable()"
          [firstDay]="firstDay()"
          [weekNumbers]="weekNumbers()"
          [locale]="locale()"
          [labels]="words().calendar"
        />
      }
    </div>
  `,
})
export class NuiDatePicker implements ControlValueAccessor {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly injector = inject(Injector);

  /** The date, or date and time. */
  readonly value = model<string | null>(null);
  readonly granularity = input<NuiDateGranularity>('day');
  readonly min = input<string | null>(null);
  readonly max = input<string | null>(null);
  /** Days that can't be picked in the calendar. */
  readonly unavailable = input<(date: NuiDate) => boolean>(() => false);
  /** Where empty segments start from, with the arrow keys. */
  readonly placeholder = input<string | null>(null);
  readonly hourCycle = input<12 | 24 | undefined, unknown>(undefined, {
    transform: (value: unknown) =>
      value == null || value === '' ? undefined : (numberAttribute(value) as 12 | 24),
  });
  readonly minuteStep = input(1, { transform: numberAttribute });
  readonly firstDay = input<number | undefined, unknown>(undefined, {
    transform: (value: unknown) =>
      value == null || value === '' ? undefined : numberAttribute(value),
  });
  readonly weekNumbers = input(false, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });
  readonly locale = input(inject(LOCALE_ID));
  readonly labels = input<NuiDatePickerLabelsInput>({});

  protected readonly field = viewChild.required(NuiDateField);
  private readonly calendar = viewChild(NuiCalendar);
  private readonly trigger = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');
  private readonly popover = viewChild.required(NuiPopover);
  protected readonly words = computed(() => ({ ...NUI_DATE_PICKER_LABELS, ...this.labels() }));
  protected readonly open = signal(false);
  private readonly formDisabled = signal(false);
  protected readonly off = computed(() => this.disabled() || this.formDisabled());

  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  /** Opens the calendar. */
  show(): void {
    this.popover().show(this.host);
  }

  /** Focuses the field's first empty segment. */
  focus(): void {
    this.field().focus();
  }

  writeValue(value: string | null): void {
    this.value.set(value || null);
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.formDisabled.set(disabled);
  }

  protected set(value: string | null): void {
    this.value.set(value);
    this.onChange(value);
  }

  protected touched(): void {
    this.onTouched();
  }

  /** The popover opens under the whole field, not just its button. */
  protected anchor(popover: NuiPopover): void {
    popover.setAnchor(this.host);
  }

  protected onOpen(open: boolean): void {
    this.open.set(open);
    if (open) afterNextRender(() => this.calendar()?.focusDate(), { injector: this.injector });
  }

  protected pick(date: NuiDate): void {
    const value = this.value();
    const time = this.granularity() === 'day' ? '' : value?.slice(10) || 'T00:00';
    this.set(date + time);
    this.popover().hide();
    this.trigger().nativeElement.focus();
  }
}

/**
 * Two date fields, a start and an end, with a two-month calendar that picks both,
 * and optional presets such as "Last 7 days".
 *
 * ```html
 * <nui-date-range-picker aria-label="Stay" [(value)]="stay" [presets]="presets" />
 * ```
 *
 * Its value is `{ start, end }`, or null until both ends are set, in order.
 */
@Component({
  selector: 'nui-date-range-picker',
  imports: [NuiCalendar, NuiDateField, NuiPopover, NuiPopoverTrigger],
  hostDirectives: [PERSONALITY],
  host: {
    class: 'nui-date-picker nui-date-range-picker',
    role: 'group',
    '[attr.data-disabled]': 'off() || null',
    '[attr.data-invalid]': 'invalid() || null',
    '[attr.data-open]': 'open() || null',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NuiDateRangePicker),
      multi: true,
    },
  ],
  template: `
    <nui-date-field
      class="nui-date-range-start"
      [attr.aria-label]="words().start"
      [value]="start()"
      (valueChange)="setEnd('start', $event)"
      [min]="min()"
      [max]="max()"
      [disabled]="off()"
      [readonly]="readonly()"
      [locale]="locale()"
      [labels]="words().field"
      (focusout)="touched()"
    />
    <span class="nui-date-range-dash" aria-hidden="true">–</span>
    <nui-date-field
      class="nui-date-range-end"
      [attr.aria-label]="words().end"
      [value]="end()"
      (valueChange)="setEnd('end', $event)"
      [min]="min()"
      [max]="max()"
      [disabled]="off()"
      [readonly]="readonly()"
      [locale]="locale()"
      [labels]="words().field"
      (focusout)="touched()"
    />
    <button
      #trigger
      type="button"
      class="nui-date-picker-button"
      [nuiPopoverTrigger]="popover"
      [attr.aria-label]="words().open"
      [attr.title]="words().open"
      [disabled]="off() || readonly()"
    ></button>
    <div
      nuiPopover
      #popover="nuiPopover"
      class="nui-date-picker-popover"
      [attr.aria-label]="words().dialog"
      (beforetoggle)="popover.setAnchor(host)"
      (openChange)="onOpen($event)"
    >
      @if (open()) {
        <div class="nui-date-range-body">
          @if (presets().length) {
            <div class="nui-date-range-presets" role="group" [attr.aria-label]="words().presets">
              @for (preset of presets(); track preset.label) {
                <button
                  type="button"
                  class="nui-date-range-preset"
                  [attr.aria-pressed]="matches(preset)"
                  (click)="choose(preset)"
                >
                  {{ preset.label }}
                </button>
              }
            </div>
          }
          <nui-calendar
            selection="range"
            [range]="value()"
            (picked)="pick($any($event))"
            [months]="months()"
            [min]="min()"
            [max]="max()"
            [unavailable]="unavailable()"
            [firstDay]="firstDay()"
            [weekNumbers]="weekNumbers()"
            [locale]="locale()"
            [labels]="words().calendar"
          />
        </div>
      }
    </div>
  `,
})
export class NuiDateRangePicker implements ControlValueAccessor {
  protected readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly injector = inject(Injector);

  readonly value = model<NuiDateRange | null>(null);
  readonly min = input<NuiDate | null>(null);
  readonly max = input<NuiDate | null>(null);
  readonly unavailable = input<(date: NuiDate) => boolean>(() => false);
  /** Ranges to choose in one click. */
  readonly presets = input<readonly NuiDateRangePreset[]>([]);
  /** Months side by side in the calendar. */
  readonly months = input(2, { transform: numberAttribute });
  readonly firstDay = input<number | undefined, unknown>(undefined, {
    transform: (value: unknown) =>
      value == null || value === '' ? undefined : numberAttribute(value),
  });
  readonly weekNumbers = input(false, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });
  readonly locale = input(inject(LOCALE_ID));
  readonly labels = input<NuiDatePickerLabelsInput>({});

  private readonly calendar = viewChild(NuiCalendar);
  private readonly trigger = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');
  private readonly popover = viewChild.required(NuiPopover);
  protected readonly words = computed(() => ({ ...NUI_DATE_PICKER_LABELS, ...this.labels() }));
  protected readonly open = signal(false);
  private readonly formDisabled = signal(false);
  protected readonly off = computed(() => this.disabled() || this.formDisabled());
  /** Each end as typed, which may be only one of them so far. */
  protected readonly start = signal<NuiDate | null>(null);
  protected readonly end = signal<NuiDate | null>(null);
  /** The last value this picker set, to tell it from values set from outside. */
  private emitted: NuiDateRange | null | undefined;
  /** The end comes before the start. */
  readonly invalid = computed(() => {
    const start = this.start();
    const end = this.end();
    return !!start && !!end && end < start;
  });

  private onChange: (value: NuiDateRange | null) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    // A value from outside fills both fields; one the fields made leaves them as typed.
    effect(() => {
      const value = this.value();
      if (value === this.emitted) return;
      this.start.set(value?.start ?? null);
      this.end.set(value?.end ?? null);
    });
  }

  show(): void {
    this.popover().show(this.host);
  }

  writeValue(value: NuiDateRange | null): void {
    this.value.set(value ?? null);
  }

  registerOnChange(fn: (value: NuiDateRange | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.formDisabled.set(disabled);
  }

  protected touched(): void {
    this.onTouched();
  }

  protected setEnd(which: 'start' | 'end', date: NuiDate | null): void {
    (which === 'start' ? this.start : this.end).set(date);
    const start = this.start();
    const end = this.end();
    this.emit(start && end && start <= end ? { start, end } : null);
  }

  protected onOpen(open: boolean): void {
    this.open.set(open);
    if (open) afterNextRender(() => this.calendar()?.focusDate(), { injector: this.injector });
  }

  protected pick(range: NuiDateRange): void {
    this.emit(range);
    this.popover().hide();
    this.trigger().nativeElement.focus();
  }

  protected choose(preset: NuiDateRangePreset): void {
    this.pick(typeof preset.range === 'function' ? preset.range() : preset.range);
  }

  protected matches(preset: NuiDateRangePreset): boolean {
    const value = this.value();
    const range = typeof preset.range === 'function' ? preset.range() : preset.range;
    return !!value && value.start === range.start && value.end === range.end;
  }

  private emit(range: NuiDateRange | null): void {
    if (range) {
      this.start.set(range.start);
      this.end.set(range.end);
    }
    const current = this.value();
    if (current?.start === range?.start && current?.end === range?.end) return;
    this.emitted = range;
    this.value.set(range);
    this.onChange(range);
  }
}
