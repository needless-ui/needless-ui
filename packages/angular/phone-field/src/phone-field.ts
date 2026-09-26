import { LiveAnnouncer } from '@angular/cdk/a11y';
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
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import {
  type AbstractControl,
  type ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  type ValidationErrors,
  type Validator,
} from '@angular/forms';
import {
  nuiAsciiDigits,
  nuiMaskCapacity,
  nuiMaskDelete,
  nuiMaskEdit,
  nuiMaskRead,
  type NuiMaskSlot,
  nuiMaskSlots,
  nuiMaskWrite,
} from '@needless-ui/angular/mask';
import {
  type NuiOption,
  NuiOptionTemplate,
  NuiOptionText,
  NuiSelect,
} from '@needless-ui/angular/select';
import {
  NUI_PHONE_COUNTRIES,
  nuiFlag,
  nuiPhoneCountry,
  type NuiPhoneCountry,
  nuiPhoneRegionOf,
} from './countries';
import { nuiNationalNumber, nuiParsePhone, nuiPhoneLengths, nuiPhoneMask } from './phone';

/** Every text a phone field says. */
export interface NuiPhoneFieldLabels {
  /** The country picker's name. */
  country: string;
  /** The name of the field that searches the countries, on touch screens. */
  search: string;
  /** Announced when typing a calling code, or an area code, picks a country. */
  picked: (country: string, code: string) => string;
}

export const NUI_PHONE_FIELD_LABELS: NuiPhoneFieldLabels = {
  country: 'Country code',
  search: 'Search countries',
  picked: (country, code) => `${country}, +${code}`,
};

/**
 * A phone number field: a country picker and the number, grouped as the country
 * groups its numbers as it's typed. The value is the number in E.164
 * (`+393331234567`), whatever way it was typed: with the trunk prefix people dial
 * at home (`0…`), or with a calling code (`+44…`, `0044…`), which picks the
 * country.
 *
 * ```html
 * <label for="phone">Phone</label>
 * <nui-phone-field inputId="phone" [(value)]="phone" />
 * ```
 *
 * Works with Signal Forms (`[formField]`), reactive forms and `ngModel`, and
 * reports a number of the wrong length, or with an unknown code, as `nuiPhone`.
 */
@Component({
  selector: 'nui-phone-field',
  imports: [NuiSelect, NuiOptionTemplate, NuiOptionText],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiPhoneField), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NuiPhoneField), multi: true },
  ],
  host: {
    class: 'nui-phone',
    '[attr.data-disabled]': 'isDisabled() || null',
    '[attr.data-invalid]': 'invalid() || null',
  },
  template: `
    <nui-select
      class="nui-phone-country"
      [options]="options()"
      [value]="region()"
      (valueChange)="pick($event)"
      [label]="words().country"
      [searchLabel]="words().search"
      [triggerText]="display"
      [disabled]="isDisabled()"
    >
      <ng-template nuiOptionTemplate let-option let-row="row">
        <span class="nui-phone-flag" aria-hidden="true">{{ flag(option.value) }}</span>
        <span [nuiOptionText]="row"></span>
        <span class="nui-phone-code" dir="ltr">+{{ code(option.value) }}</span>
      </ng-template>
    </nui-select>
    <input
      #field
      class="nui-phone-input"
      type="tel"
      autocomplete="tel"
      dir="ltr"
      [id]="inputId() || null"
      [attr.aria-label]="label() || null"
      [attr.aria-invalid]="invalid() || null"
      [placeholder]="placeholder()"
      [value]="shown()"
      [disabled]="isDisabled()"
      (beforeinput)="onBeforeInput($event)"
      (input)="onInput($event)"
      (compositionend)="onCompositionEnd()"
      (blur)="onTouched()"
    />
  `,
})
export class NuiPhoneField implements ControlValueAccessor, Validator {
  private readonly injector = inject(Injector);
  private readonly announcer = inject(LiveAnnouncer);

  /** The number in E.164 (`+393331234567`), or empty. Bind with `[(value)]`. */
  readonly value = model('');
  /** The country, as its region (`IT`). The locale's region until one is picked. Bind with `[(country)]`. */
  readonly country = model('');
  /** The countries to offer, as regions. Every country with a calling code by default. */
  readonly countries = input<readonly string[] | null>(null);
  /** The language of country names. */
  readonly locale = input(inject(LOCALE_ID));
  /** Accessible name of the number, when no `<label for>` names it. */
  readonly label = input('');
  /** Id of the number input, for `<label for>`. */
  readonly inputId = input('');
  readonly placeholder = input('');
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Marks the number invalid, for assistive technology and styles. */
  readonly invalid = input(false, { transform: booleanAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiPhoneFieldLabels>>({});

  private readonly field = viewChild.required<ElementRef<HTMLInputElement>>('field');
  protected readonly words = computed(() => ({ ...NUI_PHONE_FIELD_LABELS, ...this.labels() }));
  private readonly formDisabled = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  private readonly allowed = computed<readonly NuiPhoneCountry[]>(() => {
    const only = this.countries();
    if (!only?.length) return NUI_PHONE_COUNTRIES;
    return only.map((r) => nuiPhoneCountry(r)).filter((c): c is NuiPhoneCountry => !!c);
  });

  /** The country in use: the one picked, or the locale's, or the first offered. */
  protected readonly region = computed(() => {
    const allowed = this.allowed();
    const picked = this.country().toUpperCase();
    if (allowed.some((c) => c.region === picked)) return picked;
    let home: string | undefined;
    try {
      home = new Intl.Locale(this.locale()).maximize().region;
    } catch {
      home = undefined;
    }
    return allowed.find((c) => c.region === home)?.region ?? allowed[0]?.region ?? 'US';
  });

  protected readonly options = computed<NuiOption<string>[]>(() => {
    const locale = this.locale();
    const names = new Intl.DisplayNames([locale, 'en'], { type: 'region', fallback: 'code' });
    const collator = new Intl.Collator(locale);
    return this.allowed()
      .map((c) => ({
        value: c.region,
        label: names.of(c.region) ?? c.region,
        keywords: [c.code, `+${c.code}`],
      }))
      .sort((a, b) => collator.compare(a.label, b.label));
  });

  protected readonly display = (chosen: readonly NuiOption<string>[]): string =>
    chosen[0] ? `${nuiFlag(chosen[0].value)} +${this.code(chosen[0].value)}` : '';

  /** What the number input shows. */
  protected readonly shown = signal('');
  /** The national digits as typed, trunk prefix and all. */
  private readonly typed = signal('');
  /** The digits of an international number whose calling code isn't known yet. */
  private readonly pending = signal<string | null>(null);

  /** The value last sent out, so it isn't written back over what's shown. */
  private sent: string | null = null;
  /** The country the number is shown for, to regroup it when another is set. */
  private shownFor: string | null = null;
  /** The field before an edit, to put back a digit typed into a full number. */
  private before: { value: string; start: number; end: number } | null = null;
  private onChange: (value: string) => void = () => undefined;
  protected onTouched: () => void = () => undefined;
  private onValidatorChange: () => void = () => undefined;

  constructor() {
    effect(() => {
      const value = this.value();
      untracked(() => {
        if (value !== this.sent) this.render(value);
      });
    });
    // A country set from outside: the number is grouped its way, with its code.
    effect(() => {
      const region = this.region();
      untracked(() => {
        if (this.shownFor === null) this.shownFor = region;
        if (region === this.shownFor) return;
        this.shownFor = region;
        if (this.pending() !== null) return;
        const typed = this.typed();
        this.shown.set(nuiMaskWrite(typed, this.slotsFor(region, typed)));
        this.emit();
        this.onValidatorChange();
      });
    });
  }

  protected flag(region: string): string {
    return nuiFlag(region);
  }

  protected code(region: string): string {
    return nuiPhoneCountry(region)?.code ?? '';
  }

  private slotsFor(region: string, digits: string): readonly NuiMaskSlot[] {
    return nuiMaskSlots(nuiPhoneMask(region, digits));
  }

  private allows(region: string): boolean {
    return this.allowed().some((c) => c.region === region);
  }

  /** Picks a country for the number: set, and announced when the number picked it. */
  private use(region: string, announce: boolean): void {
    if (region === this.region()) return;
    this.shownFor = region;
    this.country.set(region);
    if (announce) {
      const name = this.options().find((o) => o.value === region)?.label ?? region;
      void this.announcer.announce(this.words().picked(name, this.code(region)), 'polite');
    }
  }

  protected pick(region: string | null): void {
    if (!region || region === this.region()) return;
    this.use(region, false);
    this.pending.set(null);
    const typed = this.typed();
    this.shown.set(nuiMaskWrite(typed, this.slotsFor(region, typed)));
    this.emit();
    // On to the number, as the country was picked for it.
    afterNextRender(() => this.field().nativeElement.focus(), { injector: this.injector });
  }

  protected onBeforeInput(event: InputEvent): void {
    const el = this.field().nativeElement;
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? start;
    this.before = { value: el.value, start, end };
    if (this.pending() !== null) return;
    const slots = this.slotsFor(this.region(), this.typed());
    const deleted = nuiMaskDelete(el.value, start, end, event.inputType, slots);
    if (!deleted) return;
    event.preventDefault();
    if (deleted !== 'none') this.edit(deleted.text, deleted.caret, event.inputType);
  }

  protected onInput(event: Event): void {
    const input = event as InputEvent;
    if (input.isComposing) return;
    const el = this.field().nativeElement;
    this.edit(el.value, el.selectionEnd ?? el.value.length, input.inputType ?? '');
  }

  protected onCompositionEnd(): void {
    const el = this.field().nativeElement;
    this.edit(el.value, el.selectionEnd ?? el.value.length, 'insertCompositionText');
  }

  private edit(text: string, caret: number, inputType: string): void {
    const plain = nuiAsciiDigits(text).trimStart();
    if (/^(\+|00)/.test(plain)) {
      this.international(plain);
      return;
    }
    const shown = this.slotsFor(this.region(), this.typed());
    // Regions that share a calling code are told apart by how their numbers
    // begin: an area code in North America picks its country as it's typed.
    const digits = nuiMaskRead(text, shown).raw;
    const region = this.regionOf(this.region(), digits);
    const edit = nuiMaskEdit(text, caret, inputType, shown, (raw) => this.slotsFor(region, raw));
    if (!edit) {
      const el = this.field().nativeElement;
      if (this.before) {
        el.value = this.before.value;
        el.setSelectionRange(this.before.start, this.before.end);
      }
      return;
    }
    this.use(region, true);
    this.pending.set(null);
    this.typed.set(edit.raw);
    this.show(edit.text, edit.caret);
    this.emit();
  }

  /** The region national digits belong to, when their region shares its code. */
  private regionOf(region: string, digits: string): string {
    const code = this.code(region);
    if (NUI_PHONE_COUNTRIES.filter((c) => c.code === code).length < 2) return region;
    const found = nuiPhoneRegionOf(code + nuiNationalNumber(region, digits), region);
    return found && this.allows(found.region) ? found.region : region;
  }

  /** A number typed with its calling code: the code picks the country, the rest is the number. */
  private international(plain: string): void {
    const digits = plain.replace(/\D/g, '');
    const all = plain.startsWith('+') ? digits : digits.slice(2);
    const found = nuiPhoneRegionOf(all, this.region());
    if (!found || !this.allows(found.region)) {
      // Not a calling code yet (or not one offered): kept as typed until it is.
      const prefix = plain.startsWith('+') ? '+' : '00';
      this.pending.set(all);
      this.typed.set('');
      const text = prefix + all;
      this.show(text, text.length);
      this.emit();
      return;
    }
    const region = this.regionOf(found.region, all.slice(found.code.length));
    const slots = this.slotsFor(region, all.slice(found.code.length));
    const rest = all.slice(found.code.length, found.code.length + nuiMaskCapacity(slots));
    this.use(region, true);
    this.pending.set(null);
    this.typed.set(rest);
    const text = nuiMaskWrite(rest, this.slotsFor(region, rest));
    this.show(text, text.length);
    this.emit();
  }

  private show(text: string, caret: number): void {
    const el = this.field().nativeElement;
    if (el.value !== text) el.value = text;
    this.shown.set(text);
    if (el.ownerDocument.activeElement === el) el.setSelectionRange(caret, caret);
    this.before = null;
  }

  /** Sends the number out in E.164. */
  private emit(): void {
    const pending = this.pending();
    let value = pending ? `+${pending}` : '';
    if (pending === null) {
      const region = this.region();
      const national = nuiNationalNumber(region, this.typed());
      value = national ? `+${this.code(region)}${national}` : '';
    }
    if (value === this.sent) return;
    this.sent = value;
    this.value.set(value);
    this.onChange(value);
  }

  /** Shows a value that came from outside, without sending it back. */
  private render(value: string): void {
    this.sent = value;
    const number = value ? nuiParsePhone(value, untracked(this.region)) : null;
    if (number && this.allows(number.region)) {
      this.use(number.region, false);
      this.pending.set(null);
      this.typed.set(number.national);
      this.shown.set(nuiMaskWrite(number.national, this.slotsFor(number.region, number.national)));
    } else if (value && /^\s*(\+|00)/.test(value)) {
      const digits = nuiAsciiDigits(value).replace(/\D/g, '');
      this.pending.set(value.trimStart().startsWith('+') ? digits : digits.slice(2));
      this.typed.set('');
      this.shown.set(value.trim());
    } else {
      this.pending.set(null);
      this.typed.set('');
      this.shown.set('');
    }
  }

  writeValue(value: unknown): void {
    const text = value == null ? '' : String(value);
    this.render(text);
    this.value.set(text);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.formDisabled.set(disabled);
  }

  validate(_control: AbstractControl): ValidationErrors | null {
    const value = this.value();
    if (!value) return null;
    const number = nuiParsePhone(value, this.region());
    if (!number || !this.allows(number.region)) return { nuiPhone: { region: null } };
    const { min, max } = nuiPhoneLengths(number.region);
    const actual = number.national.length;
    return actual < min || actual > max
      ? { nuiPhone: { region: number.region, actual, min, max } }
      : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  /** Moves focus to the number. */
  focus(options?: FocusOptions): void {
    this.field().nativeElement.focus(options);
  }
}
