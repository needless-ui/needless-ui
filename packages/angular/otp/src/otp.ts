import { isPlatformBrowser } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  Directive,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  output,
  PLATFORM_ID,
  signal,
  untracked,
} from '@angular/core';

/** Which characters a code may contain. */
export type NuiOtpPattern = 'digits' | 'alphanumeric';

const ALLOWED: Record<NuiOtpPattern, RegExp> = {
  digits: /\d/,
  alphanumeric: /[\da-z]/i,
};

interface Slot {
  char: string;
  filled: boolean;
  active: boolean;
  caret: boolean;
  /** A separator goes before this slot. */
  gap: boolean;
}

/**
 * A one-time-code field drawn as separate slots. Wrap a native `<input nuiOtpInput>`:
 *
 * ```html
 * <div nuiOtp [length]="6" [groups]="[3, 3]" (completed)="verify($event)">
 *   <input nuiOtpInput aria-label="Verification code" [(ngModel)]="code" />
 * </div>
 * ```
 *
 * The input stays the real control, laid invisibly over the slots: SMS autofill
 * (`autocomplete="one-time-code"`), paste, password managers, forms and screen
 * readers all see one ordinary text field. Pasted codes are cleaned up ("123-456",
 * "123 456") and anything the pattern doesn't allow is refused. Set
 * `aria-invalid="true"` on the input to show a rejected code.
 */
@Component({
  selector: '[nuiOtp]',
  host: {
    class: 'nui-otp',
    '[attr.data-complete]': 'complete() ? "" : null',
  },
  template: `
    <ng-content select="input" />
    <div class="nui-otp-slots" aria-hidden="true">
      @for (slot of slots(); track $index) {
        @if (slot.gap) {
          <span class="nui-otp-separator"></span>
        }
        <span
          class="nui-otp-slot"
          [style.--_i]="$index"
          [attr.data-filled]="slot.filled ? '' : null"
          [attr.data-active]="slot.active ? '' : null"
          [attr.data-caret]="slot.caret ? '' : null"
          >{{ slot.char }}</span
        >
      }
    </div>
  `,
})
export class NuiOtp {
  /** Number of characters. */
  readonly length = input(6, { transform: numberAttribute });
  /** Characters allowed: digits (the default) or letters and digits. */
  readonly pattern = input<NuiOtpPattern>('digits');
  /** Sizes of the groups, drawn with a separator between them: `[3, 3]`. */
  readonly groups = input<readonly number[]>([]);
  /** Draws dots instead of the characters. */
  readonly masked = input(false, { transform: booleanAttribute });
  /** Emits the code each time the last slot is filled. */
  readonly completed = output<string>();

  /** @internal The input's value, kept current by `nuiOtpInput`. */
  readonly value = signal('');
  /** @internal The selection while the input has focus, otherwise null. */
  readonly selection = signal<{ start: number; end: number } | null>(null);

  protected readonly complete = computed(() => this.value().length === this.length());

  protected readonly slots = computed<Slot[]>(() => {
    const value = this.value();
    const selection = this.selection();
    const length = this.length();
    const breaks = new Set<number>();
    let at = 0;
    for (const size of this.groups().slice(0, -1)) breaks.add((at += size));
    // The slot being edited: the selected character, or where the next one goes.
    const active = selection ? Math.min(selection.start, length - 1) : -1;
    return Array.from({ length }, (_, i) => {
      const char = value[i] ?? '';
      return {
        char: char && this.masked() ? '•' : char,
        filled: char !== '',
        active: i === active,
        caret: i === active && char === '' && selection?.start === selection?.end,
        gap: breaks.has(i),
      };
    });
  });

  constructor() {
    let wasComplete = false;
    effect(() => {
      const complete = this.complete();
      if (complete && !wasComplete) untracked(() => this.completed.emit(this.value()));
      wasComplete = complete;
    });
  }

  /** @internal */
  allows(char: string): boolean {
    return ALLOWED[this.pattern()].test(char);
  }
}

/**
 * The real input inside `nuiOtp`. It takes the attributes a one-time code needs,
 * keeps the slots in sync (also when a form sets the value), filters what's typed
 * or pasted, and edits one slot at a time: clicking or arrowing onto a filled slot
 * selects its character, so typing replaces it.
 *
 * With `webOtp`, it also asks the browser for a code arriving by SMS (the WebOTP
 * API, on Android), fills it in and lets `(completed)` take it from there.
 */
@Directive({
  selector: 'input[nuiOtpInput]',
  host: {
    class: 'nui-otp-input',
    autocomplete: 'one-time-code',
    spellcheck: 'false',
    autocapitalize: 'off',
    autocorrect: 'off',
    '[attr.inputmode]': 'otp.pattern() === "digits" ? "numeric" : "text"',
    '[attr.maxlength]': 'otp.length()',
    '[attr.pattern]': 'otp.pattern() === "digits" ? "[0-9]*" : null',
    '(input)': 'sync($event)',
    '(compositionend)': 'cleanUp()',
    '(beforeinput)': 'filter($event)',
    '(paste)': 'paste($event)',
    '(keydown)': 'move($event)',
    '(focus)': 'focusSlot()',
    '(blur)': 'otp.selection.set(null)',
    '(click)': 'pointTo($event)',
  },
})
export class NuiOtpInput {
  /** Fills the code from an incoming SMS through the WebOTP API, where the browser supports it. */
  readonly webOtp = input(false, { transform: booleanAttribute });

  protected readonly otp = inject(NuiOtp);
  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);
  /** Whether the last edit removed characters: then the caret stays put instead of selecting the next slot. */
  private deleting = false;
  /** The clipboard text of a paste in progress, cleaned up once the browser has inserted it. */
  private pasted: string | null = null;

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    const element = this.element;

    // Forms write `value` directly, without an input event: watch the property itself.
    const native = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!;
    Object.defineProperty(element, 'value', {
      configurable: true,
      get: () => native.get!.call(element),
      set: (value: string) => {
        native.set!.call(element, value);
        this.otp.value.set(native.get!.call(element));
      },
    });
    this.otp.value.set(element.value);

    const onSelectionChange = () => {
      if (this.document.activeElement === element) this.record();
    };
    this.document.addEventListener('selectionchange', onSelectionChange);

    const abort = new AbortController();
    effect(() => {
      if (!this.webOtp() || !('OTPCredential' in this.document.defaultView!)) return;
      untracked(() => {
        navigator.credentials
          .get({ otp: { transport: ['sms'] }, signal: abort.signal } as CredentialRequestOptions)
          .then((credential) => {
            const code = (credential as { code?: string } | null)?.code;
            if (code) this.write(this.clean(code));
          })
          .catch(() => undefined);
      });
    });

    inject(DestroyRef).onDestroy(() => {
      this.document.removeEventListener('selectionchange', onSelectionChange);
      abort.abort();
      delete (element as { value?: string }).value;
    });
  }

  protected sync(event?: Event): void {
    if (this.pasted !== null) return this.finishPaste();
    // An input method's text can't be refused as it's typed: it's cleaned up once done.
    if (!(event as InputEvent | undefined)?.isComposing && this.cleanUp()) return;
    this.otp.value.set(this.element.value);
    if (this.deleting) this.record();
    else this.focusSlot();
  }

  /** Refuses characters the pattern doesn't allow, as they are typed. */
  protected filter(event: InputEvent): void {
    this.deleting = event.inputType.startsWith('delete');
    if (event.inputType === 'insertFromPaste' || event.data == null) return;
    if (![...event.data].every((char) => this.otp.allows(char))) event.preventDefault();
  }

  /** Arrow keys step one slot at a time, also when a slot's character is selected. */
  protected move(event: KeyboardEvent): void {
    const element = this.element;
    const start = element.selectionStart ?? 0;
    const length = element.value.length;
    const rtl = this.document.defaultView?.getComputedStyle(element).direction === 'rtl';
    const step = { ArrowLeft: rtl ? 1 : -1, ArrowRight: rtl ? -1 : 1 }[event.key];
    if (!step || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) return;
    event.preventDefault();
    const next = Math.max(0, Math.min(start + step, length, this.otp.length() - 1));
    element.setSelectionRange(next, next);
    this.deleting = false;
    this.focusSlot();
  }

  /**
   * Lets the browser paste (blocking paste is hostile, and audits flag it), with
   * maxlength lifted so "123-456" isn't cut short; the input event that follows
   * cleans the result up.
   */
  protected paste(event: ClipboardEvent): void {
    this.pasted = event.clipboardData?.getData('text') ?? '';
    this.element.removeAttribute('maxlength');
    // A paste that inserts nothing sends no input event: put maxlength back anyway.
    setTimeout(() => {
      if (this.pasted !== null) this.finishPaste();
    });
  }

  private finishPaste(): void {
    const code = this.clean(this.pasted ?? '');
    this.pasted = null;
    this.element.setAttribute('maxlength', String(this.otp.length()));
    // A whole code replaces what was there; a fragment stays where the browser put it.
    this.write(code.length >= this.otp.length() ? code : this.clean(this.element.value));
  }

  /**
   * A click lands on a slot: select its character, or the first empty slot. On
   * click, not pointerup: a tap places the browser's caret after pointerup.
   */
  protected pointTo(event: MouseEvent): void {
    const slots = this.element.parentElement?.querySelectorAll('.nui-otp-slot');
    if (!slots?.length) return;
    const index = [...slots].findIndex((slot) => {
      const box = slot.getBoundingClientRect();
      return event.clientX >= box.left && event.clientX <= box.right;
    });
    const length = this.element.value.length;
    const at = index >= 0 && index < length ? index : length;
    this.element.setSelectionRange(at, at);
    this.deleting = false;
    this.focusSlot();
  }

  /**
   * Keeps editing to one slot: a caret before a filled slot becomes a selection
   * of that character, so the next key replaces it. A full code selects its last
   * character.
   */
  protected focusSlot(): void {
    const element = this.element;
    const start = element.selectionStart ?? element.value.length;
    const end = element.selectionEnd ?? start;
    const length = element.value.length;
    const max = this.otp.length();
    if (start === end && start < length) element.setSelectionRange(start, start + 1);
    else if (start === end && start >= max) element.setSelectionRange(max - 1, max);
    this.record();
  }

  /** Mirrors the input's selection in the slots. */
  private record(): void {
    const { selectionStart, selectionEnd, value } = this.element;
    const start = selectionStart ?? value.length;
    this.otp.selection.set({ start, end: selectionEnd ?? start });
  }

  /** Takes out what the pattern doesn't allow (such as text from an input method). Whether it did. */
  protected cleanUp(): boolean {
    const value = this.element.value;
    const clean = this.clean(value);
    if (clean === value) return false;
    this.write(clean);
    return true;
  }

  private clean(text: string): string {
    return [...text]
      .filter((char) => this.otp.allows(char))
      .join('')
      .slice(0, this.otp.length());
  }

  private write(value: string): void {
    const element = this.element;
    element.value = value.slice(0, this.otp.length());
    element.setSelectionRange(element.value.length, element.value.length);
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }
}
