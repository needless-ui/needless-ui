import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  contentChild,
  contentChildren,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  linkedSignal,
  numberAttribute,
  output,
  signal,
  TemplateRef,
  untracked,
  viewChild,
} from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiMarkdown,
  NuiMarkdownCode,
  type NuiMarkdownCodeContext,
  nuiMarkdownToText,
  nuiSafeUrl,
} from '@needless-ui/angular/markdown';
import { nuiTouchFirst } from './composer';
import type { NuiChatSession } from './session';
import {
  type NuiChatAttachment,
  type NuiChatLabelsInput,
  type NuiChatMessage,
  type NuiChatRating,
  type NuiChatStatus,
  type NuiChatTool,
  nuiChatWords,
} from './types';

/** What screen readers hear when a reply is complete: all of it, a short notice, or nothing. */
export type NuiChatAnnounce = 'reply' | 'notice' | 'off';

/** What a `nuiChatTool` template gets. */
export interface NuiChatToolContext {
  $implicit: NuiChatTool;
  message: NuiChatMessage;
}

/**
 * Draws a tool call yourself, such as a weather card for `get_weather`:
 *
 * ```html
 * <ng-template nuiChatTool="get_weather" let-tool>
 *   <app-weather [forecast]="tool.output" />
 * </ng-template>
 * ```
 *
 * Without a name, it draws every call that no other template names.
 */
@Directive({ selector: 'ng-template[nuiChatTool]' })
export class NuiChatToolTemplate {
  /** The tool's name. */
  readonly name = input('', { alias: 'nuiChatTool' });
  readonly template = inject<TemplateRef<NuiChatToolContext>>(TemplateRef);

  static ngTemplateContextGuard(
    _directive: NuiChatToolTemplate,
    context: unknown,
  ): context is NuiChatToolContext {
    return true;
  }
}

const ENDED: readonly NuiChatStatus[] = ['done', 'stopped', 'error'];
/** How far from the end still counts as at the end, in pixels. */
const END = 2;
/** How far from the end before the jump button shows, in pixels. */
const JUMP = 48;
let nextId = 0;

/**
 * The conversation of a `NuiChatSession`: a feed of messages that follows a reply
 * as it streams, until the reader scrolls up. Each message has its actions (copy,
 * edit, retry, rate) and its versions. Part of `<nui-chat>`, or on its own for a
 * layout of your own, with `<nui-chat-composer>`.
 *
 * Keyboard: Page Down and Page Up move between messages; Control+End and
 * Control+Home leave the conversation, forward and back.
 */
/** Listens for nothing; its presence is what counts (see the constructor). */
const touches = () => undefined;

@Component({
  selector: 'nui-chat-thread',
  imports: [NgTemplateOutlet, NuiButton, NuiMarkdown],
  host: { class: 'nui-chat-thread' },
  templateUrl: './thread.html',
})
export class NuiChatThread {
  private readonly announcer = inject(LiveAnnouncer);
  private readonly injector = inject(Injector);
  protected readonly id = `nui-chat-${nextId++}`;

  readonly session = input.required<NuiChatSession>();
  /** The assistant's name, for screen readers. */
  readonly assistant = input('Assistant');
  /** The level of each message's heading, which only screen readers show; replies' own headings go deeper. */
  readonly headingLevel = input(3, { transform: numberAttribute });
  /** What screen readers hear when a reply is complete. */
  readonly announce = input<NuiChatAnnounce>('reply');
  /** Show images in replies; otherwise their text links to them. */
  readonly images = input(false, { transform: booleanAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<NuiChatLabelsInput>({});
  /** Tool templates from elsewhere, such as the `nui-chat` around it. */
  readonly toolTemplates = input<readonly NuiChatToolTemplate[]>([]);
  /** A code block template from elsewhere, such as the `nui-chat` around it. */
  readonly codeTemplate = input<TemplateRef<NuiMarkdownCodeContext> | null>(null);

  /** The reader rated a reply, or took the rating back (`null`). */
  readonly rated = output<{ message: NuiChatMessage; rating: NuiChatRating | null }>();

  private readonly ownTools = contentChildren(NuiChatToolTemplate);
  private readonly ownCode = contentChild(NuiMarkdownCode);
  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller');
  private readonly feed = viewChild.required<ElementRef<HTMLElement>>('feed');

  protected readonly words = computed(() => nuiChatWords(this.labels()));
  protected readonly code = computed(() => this.ownCode()?.template ?? this.codeTemplate());
  private readonly tools = computed(() => [...this.ownTools(), ...this.toolTemplates()]);
  private readonly count = computed(() => this.session().messages().length);
  /** The message in the tab order: the last one, until the reader moves. */
  protected readonly roving = linkedSignal(() => this.count() - 1);
  /** The reader is near the end: no jump button. */
  protected readonly atEnd = signal(true);
  protected readonly editing = signal<string | null>(null);
  protected readonly copied = signal<string | null>(null);

  /** Keep the end in view as the reply grows. Scrolling up stops it; reaching the end resumes it. */
  private following = true;
  private lastTop = 0;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private readonly statuses = new Map<string, NuiChatStatus>();

  constructor() {
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => clearTimeout(this.timer));

    afterNextRender(() => {
      // Safari on iOS matches :active, which the actions' presses style, only on
      // pages that listen for touches. The same listener added twice is one.
      document.addEventListener('touchstart', touches, { passive: true });
      const scroller = this.scroller().nativeElement;
      const onScroll = () => this.onScroll();
      const onWheel = (event: WheelEvent) => {
        if (event.deltaY < 0 && scroller.scrollTop > 0) this.following = false;
      };
      scroller.addEventListener('scroll', onScroll, { passive: true });
      scroller.addEventListener('wheel', onWheel, { passive: true });
      const observer = new ResizeObserver(() => {
        if (this.following) this.toEnd();
        else this.onScroll();
      });
      observer.observe(this.feed().nativeElement);
      observer.observe(scroller);
      destroyRef.onDestroy(() => {
        observer.disconnect();
        scroller.removeEventListener('scroll', onScroll);
        scroller.removeEventListener('wheel', onWheel);
      });
      this.toEnd();
    });

    // A new reply: the reader just asked, so follow it.
    const replying = computed(() => this.session().replying()?.id ?? null);
    afterRenderEffect(() => {
      if (replying() === null) return;
      this.following = true;
      this.toEnd();
    });

    // Announce each reply once it's complete, or failed.
    effect(() => {
      const messages = this.session().messages();
      const mode = this.announce();
      untracked(() => {
        for (const message of messages) {
          if (message.role !== 'assistant') continue;
          const before = this.statuses.get(message.id);
          this.statuses.set(message.id, message.status);
          if (before !== 'pending' && before !== 'streaming') continue;
          const words = this.words();
          if (message.status === 'error') {
            this.announcer.announce(message.error || words.error, 'assertive');
          } else if (message.status === 'done' && mode !== 'off') {
            const assistant = this.assistant();
            this.announcer.announce(
              mode === 'reply'
                ? `${words.said(assistant)}: ${nuiMarkdownToText(message.text)}`
                : words.replied(assistant),
              'polite',
            );
          }
        }
      });
    });
  }

  /** Scrolls to the latest message, and follows it. */
  scrollToEnd(behavior: ScrollBehavior = 'instant'): void {
    this.following = true;
    this.toEnd(behavior);
  }

  protected ended(message: NuiChatMessage): boolean {
    return ENDED.includes(message.status);
  }

  protected thinking(message: NuiChatMessage): boolean {
    return message.status === 'streaming' && message.reasoningTime === undefined;
  }

  protected seconds(time: number): number {
    return Math.max(1, Math.round(time / 1000));
  }

  protected isImage(file: NuiChatAttachment): boolean {
    return file.type.startsWith('image/') && !!file.url;
  }

  protected safe(url: string): boolean {
    return nuiSafeUrl(url);
  }

  protected site(url: string): string {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  }

  protected json(value: unknown): string {
    if (typeof value === 'string') return value;
    try {
      return JSON.stringify(value, null, 2) ?? String(value);
    } catch {
      return String(value);
    }
  }

  protected toolTemplate(name: string): TemplateRef<NuiChatToolContext> | null {
    const tools = this.tools();
    return (tools.find((t) => t.name() === name) ?? tools.find((t) => !t.name()))?.template ?? null;
  }

  protected versionOf(message: NuiChatMessage) {
    const versions = this.session().versions(message);
    return { versions, index: versions.findIndex((m) => m.id === message.id) };
  }

  protected show(message: NuiChatMessage | undefined): void {
    if (message) this.session().show(message);
  }

  protected rate(message: NuiChatMessage, rating: NuiChatRating): void {
    const next = message.rating === rating ? null : rating;
    this.session().rate(message, next);
    this.rated.emit({ message, rating: next });
  }

  protected retry(message: NuiChatMessage, index: number): void {
    void this.session().retry(message);
    this.focusMessage(index);
  }

  protected async copy(message: NuiChatMessage): Promise<void> {
    try {
      await navigator.clipboard.writeText(message.text);
    } catch {
      return; // Clipboard access can be denied; the text stays selectable.
    }
    this.copied.set(message.id);
    this.announcer.announce(this.words().copied, 'polite');
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.copied.set(null), 2000);
  }

  protected edit(message: NuiChatMessage, index: number): void {
    this.editing.set(message.id);
    afterNextRender(
      () => {
        const editor = this.article(index)?.querySelector('textarea');
        editor?.focus();
        editor?.setSelectionRange(editor.value.length, editor.value.length);
      },
      { injector: this.injector },
    );
  }

  protected cancelEdit(index: number): void {
    this.editing.set(null);
    afterNextRender(
      () => this.article(index)?.querySelector<HTMLElement>('[data-action="edit"]')?.focus(),
      { injector: this.injector },
    );
  }

  protected saveEdit(message: NuiChatMessage, text: string, index: number): void {
    if (!text.trim() && !message.attachments?.length) return;
    this.editing.set(null);
    void this.session().edit(message, text);
    this.focusMessage(index);
  }

  protected onEditKeydown(
    event: KeyboardEvent,
    message: NuiChatMessage,
    editor: HTMLTextAreaElement,
    index: number,
  ): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.cancelEdit(index);
    } else if (
      event.key === 'Enter' &&
      !event.shiftKey &&
      !event.isComposing &&
      event.keyCode !== 229 &&
      // On a touch screen, Return is the only way to a new line; Save saves.
      !nuiTouchFirst(editor.ownerDocument.defaultView)
    ) {
      event.preventDefault();
      this.saveEdit(message, editor.value, index);
    }
  }

  /** The feed pattern's keys, from anywhere in a message but its text fields. */
  protected onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('textarea, input, [contenteditable]')) return;
    const articles = this.articles();
    const current = articles.findIndex((article) => article.contains(target));
    if (current < 0) return;
    if (event.key === 'PageDown' || event.key === 'PageUp') {
      const next = articles[current + (event.key === 'PageDown' ? 1 : -1)];
      if (!next) return;
      event.preventDefault();
      next.focus();
    } else if ((event.ctrlKey || event.metaKey) && (event.key === 'End' || event.key === 'Home')) {
      const outside = focusableOutside(this.feed().nativeElement, event.key === 'End');
      if (!outside) return;
      event.preventDefault();
      outside.focus();
    }
  }

  protected onFocusin(event: FocusEvent): void {
    const index = this.articles().findIndex((a) => a.contains(event.target as Node));
    if (index >= 0) this.roving.set(index);
  }

  protected jump(): void {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.scrollToEnd(reduce ? 'instant' : 'smooth');
    this.articles().at(-1)?.focus({ preventScroll: true });
  }

  private onScroll(): void {
    const scroller = this.scroller().nativeElement;
    const distance = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight;
    if (distance <= END) this.following = true;
    else if (scroller.scrollTop < this.lastTop - 1) this.following = false;
    this.lastTop = scroller.scrollTop;
    this.atEnd.set(distance <= JUMP);
  }

  private toEnd(behavior: ScrollBehavior = 'instant'): void {
    const scroller = this.scroller().nativeElement;
    scroller.scrollTo({ top: scroller.scrollHeight, behavior });
  }

  private articles(): HTMLElement[] {
    return [...this.feed().nativeElement.querySelectorAll<HTMLElement>(':scope > article')];
  }

  private article(index: number): HTMLElement | undefined {
    return this.articles()[index];
  }

  /** Focuses a message once it renders, for when the button that had focus went away. */
  private focusMessage(index: number): void {
    afterNextRender(() => this.article(index)?.focus({ preventScroll: true }), {
      injector: this.injector,
    });
  }
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex], [contenteditable="true"], [contenteditable=""]';

/** The nearest element the keyboard can reach after (or before) an element, outside it. */
function focusableOutside(element: HTMLElement, after: boolean): HTMLElement | null {
  const candidates = [...element.ownerDocument.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
    (e) =>
      !element.contains(e) &&
      e.tabIndex >= 0 &&
      (e.checkVisibility?.() ?? true) &&
      !!(
        element.compareDocumentPosition(e) &
        (after ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)
      ),
  );
  return (after ? candidates[0] : candidates.at(-1)) ?? null;
}
