import {
  booleanAttribute,
  computed,
  Directive,
  effect,
  ElementRef,
  forwardRef,
  HostAttributeToken,
  inject,
  input,
  model,
  Renderer2,
  signal,
  untracked,
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
  NUI_MASK_TOKENS,
  nuiMaskCapacity,
  nuiMaskDelete,
  nuiMaskEdit,
  type NuiMaskPattern,
  nuiMaskRead,
  type NuiMaskSlot,
  nuiMaskSlots,
  type NuiMaskToken,
  nuiMaskWrite,
} from './engine';

/**
 * A mask on a text field: what's typed is formatted as it's typed, with the
 * mask's literals (spaces, dashes, brackets) put in, and characters that don't fit
 * left out. The caret stays where it was in the data, and deleting next to a
 * literal deletes the character before it.
 *
 * ```html
 * <input nuiMask="0000 0000 0000 0000" [(value)]="card" />
 * <input [nuiMask]="cardMask" unmask [formField]="form.card" />
 * ```
 *
 * The value is what's shown, or only the data with `unmask`. Works with Signal
 * Forms (`[formField]`), reactive forms and `ngModel`, and reports an unfinished
 * value as `{ nuiMask: { actual, expected } }`.
 */
@Directive({
  selector: 'input[nuiMask]',
  exportAs: 'nuiMask',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiMask), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NuiMask), multi: true },
  ],
  host: {
    // Masked data isn't prose: phone keyboards shouldn't correct or flag it.
    autocorrect: 'off',
    spellcheck: 'false',
    '[attr.inputmode]': 'inputMode()',
    '(beforeinput)': 'onBeforeInput($event)',
    '(input)': 'onInput($event)',
    '(compositionend)': 'onCompositionEnd()',
    '(blur)': 'onTouched()',
  },
})
export class NuiMask implements ControlValueAccessor, Validator {
  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);
  private readonly givenMode = inject(new HostAttributeToken('inputmode'), { optional: true });

  /** The mask, or a function that picks one for the data typed so far. */
  readonly mask = input.required<NuiMaskPattern>({ alias: 'nuiMask' });
  /** Mask characters to add or replace. */
  readonly tokens = input<Readonly<Record<string, NuiMaskToken>>>({});
  /** The value is only the data, without the mask's literals. */
  readonly unmask = input(false, { transform: booleanAttribute });
  /** The value: what's shown, or only the data with `unmask`. Bind with `[(value)]`. */
  readonly value = model('');

  private readonly data = signal('');
  /** The data typed, without the mask's literals. */
  readonly raw = this.data.asReadonly();

  private readonly allTokens = computed(() => {
    const extra = this.tokens();
    return Object.keys(extra).length ? { ...NUI_MASK_TOKENS, ...extra } : NUI_MASK_TOKENS;
  });
  private readonly slots = computed(() => this.slotsFor(this.data()));
  /** Every place in the mask is filled. */
  readonly complete = computed(() => this.data().length === nuiMaskCapacity(this.slots()));

  /** A numeric keyboard when the mask takes only digits, unless the field asks for another. */
  protected readonly inputMode = computed(() => {
    if (this.givenMode !== null) return this.givenMode;
    const tokens = this.slots().filter((slot) => typeof slot !== 'string');
    return tokens.length && tokens.every((token) => token === this.allTokens()['0'])
      ? 'numeric'
      : null;
  });

  /** The value last sent out, so it isn't written back over what's shown. */
  private sent: string | null = null;
  /** The field before an edit, to put back an insertion that doesn't fit. */
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
    // A new mask shows the same data its way.
    effect(() => {
      this.mask();
      this.allTokens();
      untracked(() => {
        const raw = this.data();
        const slots = this.slotsFor(raw);
        this.renderer.setProperty(
          this.element,
          'value',
          nuiMaskWrite(raw.slice(0, nuiMaskCapacity(slots)), slots),
        );
        this.onValidatorChange();
      });
    });
  }

  private slotsFor(raw: string): NuiMaskSlot[] {
    const mask = this.mask();
    return nuiMaskSlots(typeof mask === 'function' ? mask(raw) : mask, this.allTokens());
  }

  /** Shows a value that came from outside: read, formatted, not sent back. */
  private render(value: string): void {
    const shown = untracked(this.slots);
    let { raw } = nuiMaskRead(value, shown);
    const slots = this.slotsFor(raw);
    raw = nuiMaskRead(value, slots).raw.slice(0, nuiMaskCapacity(slots));
    this.data.set(raw);
    this.renderer.setProperty(this.element, 'value', nuiMaskWrite(raw, slots));
    this.sent = value;
  }

  protected onBeforeInput(event: InputEvent): void {
    const el = this.element;
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? start;
    this.before = { value: el.value, start, end };
    const deleted = nuiMaskDelete(el.value, start, end, event.inputType, this.slots());
    if (!deleted) return;
    event.preventDefault();
    if (deleted !== 'none') this.update(deleted.text, deleted.caret, event.inputType);
  }

  protected onInput(event: Event): void {
    const input = event as InputEvent;
    // Wait for a composition (an input method) to finish before formatting.
    if (input.isComposing) return;
    const el = this.element;
    this.update(el.value, el.selectionEnd ?? el.value.length, input.inputType ?? '');
  }

  protected onCompositionEnd(): void {
    const el = this.element;
    this.update(el.value, el.selectionEnd ?? el.value.length, 'insertCompositionText');
  }

  /** Reformats the field after an edit, puts the caret back, and sends the value out. */
  private update(text: string, caret: number, inputType: string): void {
    const el = this.element;
    const edit = nuiMaskEdit(text, caret, inputType, this.slots(), (raw) => this.slotsFor(raw));
    if (!edit) {
      // A character typed into a full field: the field goes back as it was.
      if (this.before) {
        el.value = this.before.value;
        el.setSelectionRange(this.before.start, this.before.end);
      }
      return;
    }
    if (el.value !== edit.text) el.value = edit.text;
    if (el.ownerDocument.activeElement === el) el.setSelectionRange(edit.caret, edit.caret);
    this.before = null;
    this.data.set(edit.raw);
    const value = this.unmask() ? edit.raw : nuiMaskWrite(edit.raw, edit.slots);
    if (value !== this.sent) {
      this.sent = value;
      this.value.set(value);
      this.onChange(value);
    }
  }

  writeValue(value: unknown): void {
    this.render(value == null ? '' : String(value));
    this.value.set(this.sent ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.renderer.setProperty(this.element, 'disabled', disabled);
  }

  validate(_control: AbstractControl): ValidationErrors | null {
    const raw = this.data();
    const expected = nuiMaskCapacity(this.slots());
    return raw && raw.length < expected ? { nuiMask: { actual: raw.length, expected } } : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }
}
