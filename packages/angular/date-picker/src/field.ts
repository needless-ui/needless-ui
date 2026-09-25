import {
  booleanAttribute,
  Component,
  computed,
  Directive,
  ElementRef,
  forwardRef,
  inject,
  input,
  linkedSignal,
  LOCALE_ID,
  model,
  numberAttribute,
  signal,
  type Type,
  untracked,
} from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  type NuiDate,
  nuiDateFormat,
  nuiMonthNames,
  nuiNow,
  nuiUses12Hours,
  nuiUtc,
} from '@needless-ui/angular';
import {
  type NuiDateGranularity,
  nuiReadDigits,
  nuiReadPasted,
  type NuiSegment,
  nuiSegmentLayout,
  nuiSegmentPlaceholders,
  nuiSegmentRange,
  nuiSegmentsResult,
  type NuiSegmentType,
  nuiSegmentValue,
  type NuiSegmentValues,
  nuiSegmentValuesOf,
  nuiSetSegment,
} from './segments';

/** Every text a date or time field says. */
export interface NuiDateFieldLabels {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  dayPeriod: string;
  /** Said for a segment with nothing in it. */
  empty: string;
  /** Shown in empty segments. By default, the locale's initials of the fields' names. */
  placeholders?: Record<Exclude<NuiSegmentType, 'literal' | 'dayPeriod'>, string>;
}

export const NUI_DATE_FIELD_LABELS: NuiDateFieldLabels = {
  year: 'Year',
  month: 'Month',
  day: 'Day',
  hour: 'Hour',
  minute: 'Minute',
  second: 'Second',
  dayPeriod: 'AM/PM',
  empty: 'Empty',
};

/** What the segments are typed into: which part, and the digits so far. */
interface Typing {
  index: number;
  digits: string;
}

/** How far Page Up and Page Down move each segment. */
const PAGE: Partial<Record<NuiSegmentType, number>> = {
  year: 10,
  month: 3,
  day: 7,
  hour: 3,
  minute: 15,
  second: 15,
};

const SEPARATOR = /^[\s/.,:\-–]$/;

const TEMPLATE = `
  @for (segment of segments(); track $index) {
    @if (segment.type === 'literal') {
      <span class="nui-date-literal" aria-hidden="true">{{ segment.text }}</span>
    } @else {
      <span
        class="nui-date-segment"
        role="spinbutton"
        spellcheck="false"
        autocorrect="off"
        autocapitalize="off"
        enterkeyhint="next"
        [attr.data-type]="segment.type"
        [attr.data-placeholder]="segment.value === null && typing()?.index !== $index ? true : null"
        [attr.contenteditable]="editable() ? 'true' : null"
        [attr.tabindex]="off() ? null : 0"
        [attr.inputmode]="segment.type === 'dayPeriod' ? 'text' : 'numeric'"
        [attr.aria-label]="words()[segment.type]"
        [attr.aria-valuemin]="segment.min"
        [attr.aria-valuemax]="segment.max"
        [attr.aria-valuenow]="segment.value"
        [attr.aria-valuetext]="valueText(segment)"
        [attr.aria-invalid]="invalid() || null"
        [attr.aria-readonly]="readonly() || null"
        [attr.aria-disabled]="off() || null"
        [textContent]="display(segment, $index)"
        (keydown)="onKeydown($event, $index)"
        (beforeinput)="onBeforeinput($event, $index)"
        (compositionend)="onCompositionend($event, $index)"
        (paste)="onPaste($event)"
        (focus)="onFocus($index)"
      ></span>
    }
  }
`;

const HOST = {
  role: 'group',
  '[attr.data-disabled]': 'off() || null',
  '[attr.data-readonly]': 'readonly() || null',
  '[attr.data-invalid]': 'invalid() || null',
  '[attr.aria-disabled]': 'off() || null',
  '(focusout)': 'onFocusout($event)',
  '(pointerdown)': 'onPointerdown($event)',
};

function accessor(type: () => Type<unknown>) {
  return { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(type), multi: true };
}

/**
 * What date and time fields share: segments typed one by one, like the fields of a
 * paper form, in the locale's order.
 */
@Directive()
abstract class NuiSegmentedField implements ControlValueAccessor {
  protected readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /** The date, time, or date and time; null while any segment is empty. */
  readonly value = model<string | null>(null);
  /** The earliest value allowed. Earlier ones mark the field invalid. */
  readonly min = input<string | null>(null);
  /** The latest value allowed. */
  readonly max = input<string | null>(null);
  /** Where empty segments start from, with the arrow keys. Now by default. */
  readonly placeholder = input<string | null>(null);
  /** A 12- or 24-hour clock. By default, the locale's. */
  readonly hourCycle = input<12 | 24 | undefined, unknown>(undefined, {
    transform: (v: unknown) =>
      v == null || v === '' ? undefined : (numberAttribute(v) as 12 | 24),
  });
  /** How far the arrow keys move the minutes. */
  readonly minuteStep = input(1, { transform: numberAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });
  /** Formats names and numbers; `LOCALE_ID` by default. */
  readonly locale = input(inject(LOCALE_ID));
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiDateFieldLabels>>({});

  /** Which segments to show. */
  protected abstract readonly parts: () => { date: boolean; time: NuiDateGranularity | null };

  protected readonly words = computed(() => ({ ...NUI_DATE_FIELD_LABELS, ...this.labels() }));
  private readonly placeholders = computed(
    () => this.labels().placeholders ?? nuiSegmentPlaceholders(this.locale()),
  );
  protected readonly hour12 = computed(() =>
    this.hourCycle() ? this.hourCycle() === 12 : nuiUses12Hours(this.locale()),
  );
  protected readonly layout = computed(() =>
    nuiSegmentLayout(this.locale(), this.parts(), this.hour12()),
  );
  private readonly formDisabled = signal(false);
  protected readonly off = computed(() => this.disabled() || this.formDisabled());
  protected readonly editable = computed(() => !this.off() && !this.readonly());

  /**
   * Every segment's value. A new value from outside refills them; one that only
   * reflects what's typed, such as null while a segment is empty, leaves them be.
   */
  protected readonly values = linkedSignal<string | null, NuiSegmentValues>({
    source: () => this.value(),
    computation: (value, previous) =>
      previous && nuiSegmentsResult(this.layout(), previous.value) === value
        ? previous.value
        : nuiSegmentValuesOf(value, this.hour12()),
  });

  protected readonly typing = signal<Typing | null>(null);

  protected readonly segments = computed((): NuiSegment[] => {
    const values = this.values();
    const hour12 = this.hour12();
    return this.layout().map(({ type, text }) => {
      const [min, max] = nuiSegmentRange(type, values, hour12);
      return { type, text, value: nuiSegmentValue(type, values, hour12), min, max };
    });
  });

  /** The value is outside `min` and `max`. */
  readonly invalid = computed(() => {
    const value = this.value();
    const min = this.min();
    const max = this.max();
    return !!value && ((!!min && value < min) || (!!max && value > max));
  });

  private readonly numbers = computed(() => ({
    two: new Intl.NumberFormat(this.locale(), { minimumIntegerDigits: 2, useGrouping: false }),
    four: new Intl.NumberFormat(this.locale(), { minimumIntegerDigits: 4, useGrouping: false }),
    plain: new Intl.NumberFormat(this.locale(), { useGrouping: false }),
  }));

  /** The locale's AM and PM. */
  protected readonly dayPeriods = computed((): [string, string] => {
    const format = nuiDateFormat(this.locale(), { hour: 'numeric', hourCycle: 'h12' });
    const period = (hour: number) =>
      format
        .formatToParts(nuiUtc(`2026-01-01T${String(hour).padStart(2, '0')}:00`))
        .find((p) => (p.type as string) === 'dayPeriod')?.value ?? (hour < 12 ? 'AM' : 'PM');
    return [period(9), period(21)];
  });

  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  /** Focuses the first empty segment, or the first one. */
  focus(): void {
    const segments = this.segments();
    const empty = segments.findIndex((s) => s.type !== 'literal' && s.value === null);
    this.focusSegment(empty >= 0 ? empty : segments.findIndex((s) => s.type !== 'literal'));
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

  protected display(segment: NuiSegment, index: number): string {
    const typing = this.typing();
    const numbers = this.numbers();
    if (typing?.index === index && typing.digits) return numbers.plain.format(+typing.digits);
    if (segment.type === 'dayPeriod') {
      return segment.value === null ? this.dayPeriods()[0] : this.dayPeriods()[segment.value];
    }
    if (segment.value === null) {
      return this.placeholders()[segment.type as Exclude<NuiSegmentType, 'literal' | 'dayPeriod'>];
    }
    return (segment.type === 'year' ? numbers.four : numbers.two).format(segment.value);
  }

  protected valueText(segment: NuiSegment): string {
    if (segment.value === null) return this.words().empty;
    if (segment.type === 'dayPeriod') return this.dayPeriods()[segment.value];
    const number = this.numbers().plain.format(segment.value);
    if (segment.type === 'month')
      return `${number} – ${nuiMonthNames(this.locale())[segment.value - 1]}`;
    return number;
  }

  protected onFocus(index: number): void {
    if (this.typing()?.index !== index) this.commit();
  }

  protected onFocusout(event: FocusEvent): void {
    if (this.host.contains(event.relatedTarget as Node | null)) return;
    this.commit();
    this.onTouched();
  }

  /** A press on the field around the segments goes to the first empty one. */
  protected onPointerdown(event: PointerEvent): void {
    if (event.target !== this.host || this.off()) return;
    event.preventDefault();
    this.focus();
  }

  protected onKeydown(event: KeyboardEvent, index: number): void {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const rtl = getComputedStyle(this.host).direction === 'rtl';
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        event.preventDefault();
        this.focusSegment(this.neighbor(index, (event.key === 'ArrowRight') !== rtl ? 1 : -1));
        return;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'PageUp':
      case 'PageDown':
      case 'Home':
      case 'End':
        event.preventDefault();
        this.step(index, event.key);
        return;
      case 'Backspace':
      case 'Delete':
        event.preventDefault();
        this.erase(index);
        return;
      case 'Tab':
      case 'Enter':
      case 'Escape':
        return;
    }
    if (event.key.length === 1) {
      event.preventDefault();
      this.type(index, event.key);
    }
  }

  /** Text from touch keyboards and other input without key events. */
  protected onBeforeinput(event: InputEvent, index: number): void {
    // An input method's text can't be refused: it's read once it's done.
    if (event.isComposing || event.inputType === 'insertCompositionText') return;
    event.preventDefault();
    if (!this.editable()) return;
    if (event.inputType.startsWith('delete')) this.erase(index);
    else for (const char of event.data ?? '') this.type(index, char);
  }

  /**
   * The end of an input method's text (some phone keyboards compose even digits).
   * The segment shows its own text again, and takes the composed text as typed.
   */
  protected onCompositionend(event: CompositionEvent, index: number): void {
    const segment = event.target as HTMLElement;
    segment.textContent = this.display(this.segments()[index], index);
    if (this.editable()) for (const char of event.data ?? '') this.type(index, char);
  }

  protected onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    if (!this.editable()) return;
    const values = nuiReadPasted(
      event.clipboardData?.getData('text') ?? '',
      this.layout(),
      this.hour12(),
      this.dayPeriods(),
    );
    if (values) this.update(values);
  }

  private type(index: number, char: string): void {
    if (!this.editable()) return;
    const segment = this.segments()[index];
    if (SEPARATOR.test(char)) {
      if (this.typing()?.digits || segment.value !== null) {
        this.commit();
        this.focusSegment(this.neighbor(index, 1));
      }
      return;
    }
    if (segment.type === 'dayPeriod') {
      const lower = char.toLowerCase();
      const [am, pm] = this.dayPeriods().map((p) => p.toLowerCase());
      const value =
        lower === 'a' || am.startsWith(lower)
          ? 0
          : lower === 'p' || pm.startsWith(lower)
            ? 1
            : null;
      if (value !== null) {
        this.set(segment.type, value);
        this.focusSegment(this.neighbor(index, 1));
      }
      return;
    }
    const digit = nuiReadDigits(char);
    if (!/^\d$/.test(digit)) return;
    const typing = this.typing();
    let digits = (typing?.index === index ? typing.digits : '') + digit;
    if (+digits > segment.max) digits = digit;
    const width = String(segment.max).length;
    const value = +digits;
    if (digits.length >= width || value * 10 > segment.max) {
      // No digit could follow: take the value, or drop digits that can't be one.
      this.typing.set(null);
      if (value >= segment.min) {
        this.set(segment.type, value);
        this.focusSegment(this.neighbor(index, 1));
      }
      return;
    }
    this.typing.set({ index, digits });
    // A year takes its value once it's whole: 2, 20 and 202 aren't years anyone means.
    if (segment.type !== 'year' && value >= segment.min) this.set(segment.type, value);
  }

  /** Takes the digits typed so far, when focus moves on. */
  private commit(): void {
    const typing = this.typing();
    if (!typing) return;
    this.typing.set(null);
    const segment = this.segments()[typing.index];
    const value = +typing.digits;
    if (typing.digits && value >= segment.min && value <= segment.max && value !== segment.value) {
      this.set(segment.type, value);
    }
  }

  private erase(index: number): void {
    if (!this.editable()) return;
    const typing = this.typing();
    const segment = this.segments()[index];
    if (typing?.index === index && typing.digits) {
      const digits = typing.digits.slice(0, -1);
      if (digits) {
        this.typing.set({ index, digits });
        if (segment.type !== 'year' && +digits >= segment.min) this.set(segment.type, +digits);
        return;
      }
      this.typing.set(null);
      this.set(segment.type, null);
      return;
    }
    this.typing.set(null);
    if (segment.value === null) {
      this.focusSegment(this.neighbor(index, -1));
      return;
    }
    this.set(segment.type, null);
  }

  private step(index: number, key: string): void {
    if (!this.editable()) return;
    this.commit();
    const segment = this.segments()[index];
    const { min, max } = segment;
    let value: number;
    if (key === 'Home') value = min;
    else if (key === 'End') value = max;
    else if (segment.value === null) value = this.start(segment.type);
    else {
      const sign = key === 'ArrowUp' || key === 'PageUp' ? 1 : -1;
      const size = key.startsWith('Page')
        ? (PAGE[segment.type] ?? 1)
        : segment.type === 'minute'
          ? Math.max(1, this.minuteStep())
          : 1;
      value = segment.value + sign * size;
      if (segment.type === 'minute' && size > 1 && key.startsWith('Arrow')) {
        // Snap to the step: 07 goes up to 15, not 22.
        value =
          sign > 0
            ? Math.floor(segment.value / size) * size + size
            : Math.ceil(segment.value / size) * size - size;
      }
      if (segment.type === 'year') value = Math.min(max, Math.max(min, value));
      else value = ((((value - min) % (max - min + 1)) + (max - min + 1)) % (max - min + 1)) + min;
    }
    this.set(segment.type, value);
  }

  /** Where an empty segment starts: the placeholder's value, or now's. */
  private start(type: NuiSegmentType): number {
    const values = nuiSegmentValuesOf(this.placeholder() ?? nuiNow(), this.hour12());
    const value = nuiSegmentValue(type, values, this.hour12());
    return value ?? nuiSegmentRange(type, this.values(), this.hour12())[0];
  }

  private set(type: NuiSegmentType, value: number | null): void {
    this.update(nuiSetSegment(this.values(), type, value, this.hour12()));
  }

  private update(values: NuiSegmentValues): void {
    this.values.set(values);
    const result = nuiSegmentsResult(this.layout(), values);
    if (result !== untracked(this.value)) {
      this.value.set(result);
      this.onChange(result);
    }
  }

  /** The next or previous segment that isn't a literal. */
  private neighbor(index: number, direction: 1 | -1): number {
    const segments = this.segments();
    for (let i = index + direction; i >= 0 && i < segments.length; i += direction) {
      if (segments[i].type !== 'literal') return i;
    }
    return index;
  }

  private focusSegment(index: number): void {
    const segments = this.host.querySelectorAll<HTMLElement>(
      '.nui-date-segment, .nui-date-literal',
    );
    segments[index]?.focus();
  }
}

/**
 * A date field typed in segments (day, month and year, in the locale's order),
 * each a spin button: type digits, or move with the arrow keys. With
 * `granularity`, it takes a time of day too.
 *
 * ```html
 * <label id="birthday">Birthday</label>
 * <nui-date-field aria-labelledby="birthday" [(value)]="birthday" max="2026-12-31" />
 * ```
 *
 * Its value is an ISO date (`2026-09-25`), or a date and time
 * (`2026-09-25T14:30`), and null until every segment is filled. It works with
 * Signal Forms, reactive forms and `ngModel`.
 */
@Component({
  selector: 'nui-date-field',
  host: { ...HOST, class: 'nui-date-field' },
  providers: [accessor(() => NuiDateField)],
  template: TEMPLATE,
})
export class NuiDateField extends NuiSegmentedField {
  /** Stops at the day, or goes on to the hour, minute or second. */
  readonly granularity = input<NuiDateGranularity>('day');
  protected readonly parts = computed(() => ({
    date: true,
    time: this.granularity() === 'day' ? null : this.granularity(),
  }));

  /** The date part, whatever the granularity. */
  readonly date = computed((): NuiDate | null => this.value()?.slice(0, 10) ?? null);
}

/**
 * A time of day typed in segments: hours, minutes and, with `granularity`,
 * seconds, on the locale's 12- or 24-hour clock.
 *
 * ```html
 * <nui-time-field aria-label="Start" [(value)]="start" minuteStep="15" />
 * ```
 *
 * Its value is an ISO time, `14:30`, whatever the clock shows.
 */
@Component({
  selector: 'nui-time-field',
  host: { ...HOST, class: 'nui-date-field nui-time-field' },
  providers: [accessor(() => NuiTimeField)],
  template: TEMPLATE,
})
export class NuiTimeField extends NuiSegmentedField {
  readonly granularity = input<'hour' | 'minute' | 'second'>('minute');
  protected readonly parts = computed(() => ({ date: false, time: this.granularity() }));
}
