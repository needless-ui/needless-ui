import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  model,
  numberAttribute,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import type { NuiChatSession } from './session';
import { type NuiChatAttachment, type NuiChatLabelsInput, nuiChatWords } from './types';

/**
 * Which keys send: Enter (Shift+Enter for a new line), Control/Command+Enter, or
 * `auto`: Enter where there's a keyboard and a pointer, and on touch screens the
 * send button, since their Return key is the only way to start a new line.
 */
export type NuiChatSendOn = 'auto' | 'enter' | 'mod+enter';

/** A touch screen with nothing that hovers: a phone or a tablet on its own. */
export function nuiTouchFirst(view: Window | null | undefined): boolean {
  return !!view?.matchMedia?.('(hover: none) and (pointer: coarse)').matches;
}

let nextId = 0;

/** Whether a file matches an `accept` list, such as `image/*,.pdf`. */
function accepts(file: File, accept: string): boolean {
  const patterns = accept
    .split(',')
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);
  if (!patterns.length) return true;
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return patterns.some((p) =>
    p.startsWith('.')
      ? name.endsWith(p)
      : p.endsWith('/*')
        ? type.startsWith(p.slice(0, -1))
        : type === p,
  );
}

/**
 * The box for writing to a `NuiChatSession`: a text field that grows with its text,
 * a send button that stops the reply while one arrives, and, with `attach`, files
 * picked, pasted or dropped. Part of `<nui-chat>`, or on its own.
 *
 * Its content goes in the bar beside the send button, such as a model picker.
 */
/** Listens for nothing; its presence is what counts (see the constructor). */
const touches = () => undefined;

@Component({
  selector: 'nui-chat-composer',
  host: {
    class: 'nui-chat-composer',
    '[attr.data-busy]': 'session().busy() || null',
    '[attr.data-dragging]': 'dragging() || null',
    '(dragenter)': 'onDrag($event)',
    '(dragover)': 'onDrag($event)',
    '(dragleave)': 'onDragLeave($event)',
    '(drop)': 'onDrop($event)',
  },
  template: `
    @if (suggestions().length) {
      <div class="nui-chat-suggestions" role="group" [attr.aria-label]="words().suggestions">
        @for (suggestion of suggestions(); track $index) {
          <button type="button" class="nui-chat-suggestion" (click)="suggest(suggestion)">
            {{ suggestion }}
          </button>
        }
      </div>
    }
    <div class="nui-chat-box">
      @if (files().length) {
        <ul class="nui-chat-files" [attr.aria-label]="words().attachments">
          @for (file of files(); track file.id) {
            <li class="nui-chat-file" [attr.data-image]="file.url ? true : null">
              @if (file.url) {
                <img [src]="file.url" alt="" />
              }
              <span class="nui-chat-file-name">{{ file.name }}</span>
              <span class="nui-chat-file-size">{{ words().bytes(file.size) }}</span>
              <button
                type="button"
                class="nui-chat-file-remove"
                [attr.aria-label]="words().remove(file.name)"
                [attr.title]="words().remove(file.name)"
                (click)="remove(file)"
              ></button>
            </li>
          }
        </ul>
      }
      <textarea
        #field
        class="nui-chat-input"
        rows="1"
        [attr.aria-label]="words().message"
        [attr.aria-describedby]="problem() ? id + '-problem' : null"
        [placeholder]="placeholder() ?? words().placeholder"
        [value]="value()"
        [disabled]="disabled()"
        [attr.enterkeyhint]="enterSends() ? 'send' : 'enter'"
        (input)="value.set(field.value)"
        (keydown)="onKeydown($event)"
        (paste)="onPaste($event)"
      ></textarea>
      <div class="nui-chat-bar">
        @if (attach()) {
          <input
            #picker
            type="file"
            multiple
            hidden
            [accept]="accept()"
            (change)="add(picker.files ?? []); picker.value = ''"
          />
          <button
            type="button"
            class="nui-chat-attach"
            [attr.aria-label]="words().attach"
            [attr.title]="words().attach"
            [disabled]="disabled()"
            (click)="picker.click()"
          ></button>
        }
        <ng-content />
        <button
          type="button"
          class="nui-chat-send"
          [attr.data-action]="session().busy() ? 'stop' : 'send'"
          [attr.aria-label]="session().busy() ? words().stop : words().send"
          [attr.title]="session().busy() ? words().stop : words().send"
          [attr.aria-disabled]="!session().busy() && !ready() ? 'true' : null"
          [disabled]="disabled()"
          (click)="session().busy() ? session().stop() : submit()"
        ></button>
      </div>
      @if (attach()) {
        <div class="nui-chat-drop" aria-hidden="true">{{ words().drop }}</div>
      }
    </div>
    <p class="nui-chat-problem" [id]="id + '-problem'" [hidden]="!problem()">{{ problem() }}</p>
  `,
})
export class NuiChatComposer {
  private readonly announcer = inject(LiveAnnouncer);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly id = `nui-chat-composer-${nextId++}`;

  readonly session = input.required<NuiChatSession>();
  /** The text being written. */
  readonly value = model('');
  readonly placeholder = input<string | undefined>(undefined);
  /** Prompts to send with a click, such as ideas for a first message. */
  readonly suggestions = input<readonly string[]>([]);
  /** Which keys send. */
  readonly sendOn = input<NuiChatSendOn>('auto');
  private readonly touchFirst = nuiTouchFirst(inject(DOCUMENT).defaultView);
  /** Whether Return, alone, sends. */
  protected readonly enterSends = computed(() => {
    const on = this.sendOn();
    return on === 'enter' || (on === 'auto' && !this.touchFirst);
  });
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Take files: picked, pasted or dropped. */
  readonly attach = input(false, { transform: booleanAttribute });
  /** The kinds of file to take, as for `<input type="file">`: `image/*,.pdf`. */
  readonly accept = input('');
  readonly maxFiles = input(10, { transform: numberAttribute });
  /** The largest file to take, in bytes. */
  readonly maxSize = input(20_000_000, { transform: numberAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<NuiChatLabelsInput>({});

  protected readonly words = computed(() => nuiChatWords(this.labels()));
  private readonly picked = signal<readonly NuiChatAttachment[]>([]);
  /** The files to send with the message. */
  readonly files = this.picked.asReadonly();
  protected readonly problem = signal('');
  protected readonly dragging = signal(false);
  protected readonly ready = computed(() => this.value().trim() !== '' || this.files().length > 0);
  private readonly field = viewChild.required<ElementRef<HTMLTextAreaElement>>('field');

  constructor() {
    // Safari on iOS matches :active, which the buttons' presses style, only on
    // pages that listen for touches. The same listener added twice is one.
    afterNextRender(() => document.addEventListener('touchstart', touches, { passive: true }));
    // Without CSS `field-sizing`, grow the field by hand.
    const sizes = typeof CSS !== 'undefined' && CSS.supports('field-sizing', 'content');
    afterRenderEffect(() => {
      this.value();
      if (sizes) return;
      const field = this.field().nativeElement;
      field.style.blockSize = 'auto';
      field.style.blockSize = `${field.scrollHeight + field.offsetHeight - field.clientHeight}px`;
    });
    inject(DestroyRef).onDestroy(() => untracked(this.files).forEach(revoke));
  }

  /** Moves focus to the text field. */
  focus(): void {
    this.field().nativeElement.focus();
  }

  /** Sends the text and files, unless a reply is still arriving. */
  submit(): void {
    if (!this.ready() || this.session().busy() || this.disabled()) return;
    void this.session().send(this.value(), this.files());
    this.value.set('');
    this.picked.set([]);
    this.problem.set('');
  }

  /** Adds files to send, as far as `accept`, `maxSize` and `maxFiles` allow. */
  add(files: Iterable<File> | ArrayLike<File>): void {
    if (!this.attach() || this.disabled()) return;
    const words = this.words();
    const problems: string[] = [];
    const next = [...this.files()];
    for (const file of Array.from(files)) {
      if (!accepts(file, this.accept())) {
        problems.push(words.notAccepted(file.name));
      } else if (file.size > this.maxSize()) {
        problems.push(words.tooBig(file.name, words.bytes(this.maxSize())));
      } else if (next.length >= this.maxFiles()) {
        problems.push(words.tooMany(this.maxFiles()));
        break;
      } else {
        next.push({
          id: `${this.id}-file-${nextId++}`,
          name: file.name,
          type: file.type,
          size: file.size,
          file,
          ...(file.type.startsWith('image/') ? { url: URL.createObjectURL(file) } : {}),
        });
      }
    }
    this.picked.set(next);
    this.problem.set(problems.join(' '));
    if (problems.length) this.announcer.announce(this.problem(), 'assertive');
  }

  /** Takes a file back out. */
  remove(file: NuiChatAttachment): void {
    revoke(file);
    this.picked.update((files) => files.filter((f) => f.id !== file.id));
    this.focus();
  }

  protected suggest(text: string): void {
    if (this.session().busy() || this.disabled()) return;
    void this.session().send(text);
    this.focus();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Enter' || event.isComposing || event.keyCode === 229) return;
    const mod = event.ctrlKey || event.metaKey;
    const sends = this.sendOn() === 'mod+enter' ? mod : this.enterSends() && !event.shiftKey;
    if (!sends) return;
    event.preventDefault();
    this.submit();
  }

  protected onPaste(event: ClipboardEvent): void {
    const files = event.clipboardData?.files;
    if (files?.length && this.attach()) this.add(files);
  }

  protected onDrag(event: DragEvent): void {
    if (!this.attach() || this.disabled() || !event.dataTransfer?.types.includes('Files')) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    this.dragging.set(true);
  }

  protected onDragLeave(event: DragEvent): void {
    if (!this.host.contains(event.relatedTarget as Node | null)) this.dragging.set(false);
  }

  protected onDrop(event: DragEvent): void {
    this.dragging.set(false);
    if (!this.attach() || this.disabled() || !event.dataTransfer?.files.length) return;
    event.preventDefault();
    this.add(event.dataTransfer.files);
    this.focus();
  }
}

function revoke(file: NuiChatAttachment): void {
  if (file.url?.startsWith('blob:')) URL.revokeObjectURL(file.url);
}
