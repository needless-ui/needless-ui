import { _IdGenerator } from '@angular/cdk/a11y';
import {
  booleanAttribute,
  computed,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  forwardRef,
  HostAttributeToken,
  inject,
  input,
  LOCALE_ID,
  model,
  numberAttribute,
  signal,
  untracked,
} from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const optionalNumber = (value: unknown): number | undefined =>
  value === null || value === undefined || value === '' ? undefined : numberAttribute(value);

/**
 * Reads a number the way `Intl.NumberFormat` writes it in `locale`: its digits
 * (Arabic-Indic, Persian, Devanagari…), decimal and group separators, minus sign,
 * currency, percent and units. Returns null for text that isn't a number.
 */
export function nuiParseNumber(
  text: string,
  locale: string,
  options: Intl.NumberFormatOptions = {},
): number | null {
  const format = new Intl.NumberFormat(locale, options);
  const parts = format.formatToParts(-12345.6);
  const decimal = parts.find((part) => part.type === 'decimal')?.value ?? '.';
  const group = parts.find((part) => part.type === 'group')?.value ?? ',';
  const digits = new Map(
    [...new Intl.NumberFormat(locale, { useGrouping: false }).format(9876543210)].map(
      (digit, i) => [digit, String(9 - i)],
    ),
  );
  let normalized = '';
  for (const char of text.trim()) {
    if (digits.has(char)) normalized += digits.get(char);
    else if (/\d/.test(char)) normalized += char;
    else if (char === decimal) normalized += '.';
    else if (char === '-' || char === '−') normalized += normalized ? '' : '-';
    else if (char === group || /\s/.test(char)) continue;
  }
  if (!/\d/.test(normalized)) return null;
  const value = Number(normalized);
  if (!Number.isFinite(value)) return null;
  return options.style === 'percent' ? value / 100 : value;
}

function decimals(value: number): number {
  const [, fraction = ''] = String(value).split('.');
  return fraction.length;
}

/**
 * A number input with a button on each side:
 *
 * ```html
 * <div nuiNumberField>
 *   <button nuiNumberStep="-1"></button>
 *   <input nuiNumberInput aria-label="Guests" [min]="1" [max]="12" [(value)]="guests" />
 *   <button nuiNumberStep="1"></button>
 * </div>
 * ```
 */
@Directive({ selector: '[nuiNumberField]', host: { class: 'nui-number-field' } })
export class NuiNumberField {
  /** @internal Set by `nuiNumberInput`. */
  readonly control = signal<NuiNumberInput | null>(null);
}

/**
 * A text input that holds a number, as an ARIA spinbutton. It shows the number
 * formatted for the locale (`[format]="{ style: 'currency', currency: 'EUR' }"`),
 * reads it back in the same format while typing, and on blur snaps it to `step`
 * and keeps it between `min` and `max`.
 *
 * Keys: ↑/↓ step, Page Up/Page Down step ten times, Home/End go to min/max. Works
 * with Signal Forms (`[formField]`), reactive forms and `ngModel`.
 */
@Directive({
  selector: 'input[nuiNumberInput]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiNumberInput), multi: true },
  ],
  host: {
    class: 'nui-number-input',
    role: 'spinbutton',
    autocomplete: 'off',
    '[id]': 'id',
    '[attr.inputmode]': 'decimalPlaces() === 0 && (min() ?? -1) >= 0 ? "numeric" : "decimal"',
    '[attr.aria-valuenow]': 'value()',
    '[attr.aria-valuemin]': 'min()',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuetext]': 'text() || null',
    '[disabled]': 'isDisabled()',
    '(keydown)': 'onKeydown($event)',
    '(input)': 'onInput()',
    '(blur)': 'commit()',
  },
})
export class NuiNumberInput implements ControlValueAccessor {
  /** The number, or null when empty. Bind with `[(value)]`. */
  readonly value = model<number | null>(null);
  readonly min = input<number | undefined, unknown>(undefined, { transform: optionalNumber });
  readonly max = input<number | undefined, unknown>(undefined, { transform: optionalNumber });
  readonly step = input(1, { transform: numberAttribute });
  /** `Intl.NumberFormat` options: currency, percent, units, fraction digits… */
  readonly format = input<Intl.NumberFormatOptions>({});
  /** Locale for formatting and reading numbers. Defaults to the app's `LOCALE_ID`. */
  readonly locale = input(inject(LOCALE_ID));
  readonly disabled = input(false, { transform: booleanAttribute });

  readonly id =
    inject(new HostAttributeToken('id'), { optional: true }) ??
    inject(_IdGenerator).getId('nui-number-input-');

  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;
  private readonly formDisabled = signal(false);
  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  /** Whether the text is being typed; until blur, it's left as typed. */
  private readonly editing = signal(false);

  protected readonly decimalPlaces = computed(() =>
    Math.max(decimals(this.step()), decimals(this.min() ?? 0)),
  );
  private readonly formatter = computed(() => new Intl.NumberFormat(this.locale(), this.format()));
  protected readonly text = computed(() => {
    const value = this.value();
    return value === null ? '' : this.formatter().format(value);
  });

  private onChange: (value: number | null) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor() {
    inject(NuiNumberField, { optional: true })?.control.set(this);
    effect(() => {
      const text = this.text();
      if (!this.editing()) untracked(() => (this.element.value = text));
    });
  }

  /** Steps by `count` steps (negative steps down), from min (or 0) when empty. */
  stepBy(count: number): void {
    if (this.isDisabled()) return;
    const current = this.value() ?? this.min() ?? 0;
    this.set(current + count * this.step());
  }

  /** @internal */
  canStep(direction: number): boolean {
    const value = this.value();
    if (this.isDisabled()) return false;
    if (value === null) return true;
    return direction > 0 ? value < (this.max() ?? Infinity) : value > (this.min() ?? -Infinity);
  }

  protected onKeydown(event: KeyboardEvent): void {
    const steps: Record<string, number> = { ArrowUp: 1, ArrowDown: -1, PageUp: 10, PageDown: -10 };
    if (event.key in steps) this.stepBy(steps[event.key]);
    else if (event.key === 'Home' && this.min() !== undefined) this.set(this.min()!);
    else if (event.key === 'End' && this.max() !== undefined) this.set(this.max()!);
    else if (event.key === 'Enter') return this.commit();
    else return;
    event.preventDefault();
  }

  protected onInput(): void {
    this.editing.set(true);
    const value = nuiParseNumber(this.element.value, this.locale(), this.format());
    if (value === this.value()) return;
    this.value.set(value);
    this.onChange(value);
  }

  /** Snaps and clamps what was typed, then shows it formatted. */
  protected commit(): void {
    this.editing.set(false);
    const value = this.value();
    if (value !== null) this.set(value);
    this.element.value = this.text();
    this.onTouched();
  }

  private set(raw: number): void {
    const min = this.min() ?? -Infinity;
    const max = this.max() ?? Infinity;
    const step = this.step();
    const base = Number.isFinite(min) ? min : 0;
    const snapped = step > 0 ? base + Math.round((raw - base) / step) * step : raw;
    const value = Number(Math.min(max, Math.max(min, snapped)).toFixed(this.decimalPlaces()));
    this.editing.set(false);
    if (value !== this.value()) {
      this.value.set(value);
      this.onChange(value);
    }
    this.element.value = this.text();
  }

  writeValue(value: number | null): void {
    this.value.set(typeof value === 'number' && Number.isFinite(value) ? value : null);
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.formDisabled.set(disabled);
  }
}

const HOLD_DELAY = 400;
const FIRST_REPEAT = 150;
const FASTEST_REPEAT = 30;

/**
 * A step button: `nuiNumberStep="1"` steps up, `"-1"` steps down. Holding it
 * repeats, faster and faster. It stays out of the tab order (the input's arrow
 * keys do the same job) and turns off at `min` or `max`.
 */
@Directive({
  selector: 'button[nuiNumberStep]',
  host: {
    class: 'nui-number-step',
    type: 'button',
    tabindex: '-1',
    '[attr.data-step]': 'direction() > 0 ? "up" : "down"',
    '[attr.aria-label]': 'label() ?? (direction() > 0 ? "Increase" : "Decrease")',
    '[attr.aria-controls]': 'field.control()?.id',
    '[disabled]': '!field.control()?.canStep(direction())',
    '(pointerdown)': 'press($event)',
    '(pointerup)': 'release()',
    '(pointerleave)': 'release()',
    '(pointercancel)': 'release()',
    '(click)': 'onClick($event)',
  },
})
export class NuiNumberStep {
  /** +1 or -1: how many steps one press takes, and which way. */
  readonly direction = input.required<number, unknown>({
    alias: 'nuiNumberStep',
    transform: numberAttribute,
  });
  /** Accessible name. Defaults to "Increase" or "Decrease". */
  readonly label = input<string>();

  protected readonly field = inject(NuiNumberField);
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.release());
  }

  protected press(event: PointerEvent): void {
    if (event.button !== 0) return;
    // Keep focus where it is (on touch, focusing the input would open the keyboard).
    event.preventDefault();
    this.field.control()?.stepBy(this.direction());
    let delay = FIRST_REPEAT;
    const repeat = () => {
      if (!this.field.control()?.canStep(this.direction())) return this.release();
      this.field.control()?.stepBy(this.direction());
      delay = Math.max(FASTEST_REPEAT, delay * 0.85);
      this.timer = setTimeout(repeat, delay);
    };
    this.timer = setTimeout(repeat, HOLD_DELAY);
  }

  protected release(): void {
    clearTimeout(this.timer);
    this.timer = undefined;
  }

  /** Clicks without a pointer press: screen readers and keyboard activation. */
  protected onClick(event: MouseEvent): void {
    if (event.detail === 0) this.field.control()?.stepBy(this.direction());
  }
}
