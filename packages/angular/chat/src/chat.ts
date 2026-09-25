import {
  booleanAttribute,
  Component,
  contentChild,
  contentChildren,
  input,
  model,
  numberAttribute,
  output,
  viewChild,
} from '@angular/core';
import { NuiMarkdownCode } from '@needless-ui/angular/markdown';
import { NuiChatComposer, type NuiChatSendOn } from './composer';
import type { NuiChatSession } from './session';
import { type NuiChatAnnounce, NuiChatThread, NuiChatToolTemplate } from './thread';
import type { NuiChatLabelsInput, NuiChatMessage, NuiChatRating } from './types';

/**
 * A chat with a model, all in one: the conversation, and the box to write in.
 *
 * ```html
 * <nui-chat [session]="chat" assistant="Needle" [suggestions]="['Plan a trip']">
 *   <p nuiChatEmpty>Ask me anything.</p>
 * </nui-chat>
 * ```
 *
 * Content marked `nuiChatEmpty` shows until the first message; other content goes
 * in the composer's bar. `nuiChatTool` and `nuiMarkdownCode` templates draw tool
 * calls and code blocks.
 */
@Component({
  selector: 'nui-chat',
  imports: [NuiChatThread, NuiChatComposer],
  host: { class: 'nui-chat' },
  template: `
    <nui-chat-thread
      [session]="session()"
      [assistant]="assistant()"
      [headingLevel]="headingLevel()"
      [announce]="announce()"
      [images]="images()"
      [labels]="labels()"
      [toolTemplates]="tools()"
      [codeTemplate]="code()?.template ?? null"
      (rated)="rated.emit($event)"
    >
      <ng-content select="[nuiChatEmpty]" />
    </nui-chat-thread>
    <nui-chat-composer
      [session]="session()"
      [(value)]="value"
      [placeholder]="placeholder()"
      [suggestions]="session().messages().length ? [] : suggestions()"
      [sendOn]="sendOn()"
      [disabled]="disabled()"
      [attach]="attach()"
      [accept]="accept()"
      [maxFiles]="maxFiles()"
      [maxSize]="maxSize()"
      [labels]="labels()"
    >
      <ng-content />
    </nui-chat-composer>
  `,
})
export class NuiChat {
  readonly session = input.required<NuiChatSession>();
  /** The assistant's name, for screen readers. */
  readonly assistant = input('Assistant');
  /** The level of each message's heading, which only screen readers show. */
  readonly headingLevel = input(3, { transform: numberAttribute });
  /** What screen readers hear when a reply is complete. */
  readonly announce = input<NuiChatAnnounce>('reply');
  /** Show images in replies. */
  readonly images = input(false, { transform: booleanAttribute });
  /** The text being written. */
  readonly value = model('');
  readonly placeholder = input<string | undefined>(undefined);
  /** Prompts to start with, shown until the first message. */
  readonly suggestions = input<readonly string[]>([]);
  /** Which keys send. */
  readonly sendOn = input<NuiChatSendOn>('auto');
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Take files: picked, pasted or dropped. */
  readonly attach = input(false, { transform: booleanAttribute });
  /** The kinds of file to take, as for `<input type="file">`. */
  readonly accept = input('');
  readonly maxFiles = input(10, { transform: numberAttribute });
  /** The largest file to take, in bytes. */
  readonly maxSize = input(20_000_000, { transform: numberAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<NuiChatLabelsInput>({});

  /** The reader rated a reply, or took the rating back (`null`). */
  readonly rated = output<{ message: NuiChatMessage; rating: NuiChatRating | null }>();

  protected readonly tools = contentChildren(NuiChatToolTemplate);
  protected readonly code = contentChild(NuiMarkdownCode);
  private readonly composer = viewChild.required(NuiChatComposer);
  private readonly thread = viewChild.required(NuiChatThread);

  /** Moves focus to the message box. */
  focus(): void {
    this.composer().focus();
  }

  /** Scrolls to the latest message, and follows it. */
  scrollToEnd(behavior: ScrollBehavior = 'instant'): void {
    this.thread().scrollToEnd(behavior);
  }
}
