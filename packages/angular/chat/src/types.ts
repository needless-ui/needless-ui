import { NUI_MARKDOWN_LABELS, type NuiMarkdownLabels } from '@needless-ui/angular/markdown';

/** Who wrote a message. */
export type NuiChatRole = 'user' | 'assistant';

/**
 * Where a message stands. The user's are always `done`; a reply is `pending` until
 * its first words, then `streaming`, and ends `done`, `stopped` or `error`.
 */
export type NuiChatStatus = 'pending' | 'streaming' | 'done' | 'stopped' | 'error';

/** The reader's verdict on a reply. */
export type NuiChatRating = 'up' | 'down';

/** A file sent with a message. */
export interface NuiChatAttachment {
  readonly id: string;
  readonly name: string;
  /** Its media type, such as `image/png`. */
  readonly type: string;
  /** In bytes. */
  readonly size: number;
  /** Where to show or open it. The composer makes object URLs for images. */
  readonly url?: string;
  /** The file, when it was picked on this device. */
  readonly file?: File;
}

/** A page a reply draws on, listed under it. */
export interface NuiChatSource {
  readonly url: string;
  readonly title?: string;
}

/** A tool the model called while replying, such as a search. */
export interface NuiChatTool {
  /** Updates with the same id replace the call. */
  readonly id: string;
  /** Picks a `nuiChatTool` template, such as `get_weather`. */
  readonly name: string;
  readonly state: 'running' | 'done' | 'error';
  readonly input?: unknown;
  readonly output?: unknown;
}

export interface NuiChatMessage {
  readonly id: string;
  readonly role: NuiChatRole;
  /** Markdown from the assistant; plain text from the user. */
  readonly text: string;
  /**
   * The message this one follows, or null for the first. Messages with the same
   * parent are versions of each other: a retried reply, an edited question.
   */
  readonly parent: string | null;
  readonly status: NuiChatStatus;
  /** When it was written, in milliseconds since 1970. */
  readonly time: number;
  /** The model's reasoning before it answered, shown folded. */
  readonly reasoning?: string;
  /** How long it reasoned, in milliseconds: until it wrote, or called a tool. */
  readonly reasoningTime?: number;
  readonly attachments?: readonly NuiChatAttachment[];
  readonly sources?: readonly NuiChatSource[];
  readonly tools?: readonly NuiChatTool[];
  readonly rating?: NuiChatRating | null;
  /** Why the reply failed: the message of a thrown `NuiChatError`. */
  readonly error?: string;
  /** Anything else to keep with the message, such as the model that wrote it. */
  readonly data?: unknown;
}

/** One piece of a streamed reply, beyond plain text. */
export type NuiChatDelta =
  | { readonly type: 'text'; readonly text: string }
  | { readonly type: 'reasoning'; readonly text: string }
  | { readonly type: 'source'; readonly source: NuiChatSource }
  | { readonly type: 'tool'; readonly tool: NuiChatTool }
  | { readonly type: 'data'; readonly data: unknown };

/** A piece of a reply: text to append, or a delta. */
export type NuiChatChunk = string | NuiChatDelta;

/** Anything with RxJS's `subscribe`, so an Observable works without depending on RxJS. */
export interface NuiSubscribable<T> {
  subscribe(observer: {
    next: (value: T) => void;
    error: (error: unknown) => void;
    complete: () => void;
  }): { unsubscribe(): void };
}

/**
 * What `respond` returns: the whole reply, a promise of it, or its pieces as they
 * come, from an async iterable (such as an `async function*`) or an Observable.
 */
export type NuiChatReply =
  | NuiChatChunk
  | PromiseLike<NuiChatChunk | AsyncIterable<NuiChatChunk>>
  | AsyncIterable<NuiChatChunk>
  | NuiSubscribable<NuiChatChunk>;

export interface NuiChatRequest {
  /** The conversation so far, oldest first. It ends with the user's message. */
  readonly messages: readonly NuiChatMessage[];
  /** Aborts when the reply is stopped or the session ends: pass it to `fetch`. */
  readonly signal: AbortSignal;
}

/**
 * An error whose message the reader should see, such as "You've reached today's
 * limit". Any other error reads as `labels.error`, so nothing internal leaks.
 */
export class NuiChatError extends Error {
  override readonly name = 'NuiChatError';
}

/** Every text the chat shows or announces. */
export interface NuiChatLabels {
  /** Names the conversation. */
  thread: string;
  /** Heads the user's messages, for screen readers. */
  you: string;
  /** Heads the assistant's messages, for screen readers. */
  said: (assistant: string) => string;
  /** Names the message box. */
  message: string;
  placeholder: string;
  send: string;
  stop: string;
  attach: string;
  remove: (file: string) => string;
  drop: string;
  tooMany: (max: number) => string;
  tooBig: (file: string, max: string) => string;
  notAccepted: (file: string) => string;
  copy: string;
  copied: string;
  retry: string;
  edit: string;
  save: string;
  cancel: string;
  good: string;
  bad: string;
  previous: string;
  next: string;
  version: (index: number, count: number) => string;
  thinking: string;
  thought: (seconds: number) => string;
  reasoning: string;
  sources: string;
  running: (tool: string) => string;
  ran: (tool: string) => string;
  failed: (tool: string) => string;
  input: string;
  output: string;
  stopped: string;
  error: string;
  /** Says a reply is ready, when announcing only that. */
  replied: (assistant: string) => string;
  jump: string;
  suggestions: string;
  attachments: string;
  bytes: (size: number) => string;
  /** The code blocks' copy button and the like, inside replies. */
  markdown: NuiMarkdownLabels;
}

/** Labels to replace: any of them, and any of the Markdown ones. */
export type NuiChatLabelsInput = Partial<Omit<NuiChatLabels, 'markdown'>> & {
  markdown?: Partial<NuiMarkdownLabels>;
};

const UNITS = ['B', 'KB', 'MB', 'GB'];

/** A size such as `2.4 MB`. */
function bytes(size: number): string {
  let unit = 0;
  while (size >= 1000 && unit < UNITS.length - 1) {
    size /= 1000;
    unit++;
  }
  return `${size.toLocaleString('en', { maximumFractionDigits: unit && size < 10 ? 1 : 0 })} ${UNITS[unit]}`;
}

export const NUI_CHAT_LABELS: NuiChatLabels = {
  thread: 'Conversation',
  you: 'You said',
  said: (assistant) => `${assistant} said`,
  message: 'Message',
  placeholder: 'Send a message',
  send: 'Send',
  stop: 'Stop',
  attach: 'Attach files',
  remove: (file) => `Remove ${file}`,
  drop: 'Drop files to attach them',
  tooMany: (max) => `You can attach up to ${max} files.`,
  tooBig: (file, max) => `${file} is larger than ${max}.`,
  notAccepted: (file) => `${file} isn’t a file type you can attach.`,
  copy: 'Copy',
  copied: 'Copied',
  retry: 'Retry',
  edit: 'Edit',
  save: 'Send',
  cancel: 'Cancel',
  good: 'Good reply',
  bad: 'Bad reply',
  previous: 'Previous version',
  next: 'Next version',
  version: (index, count) => `Version ${index} of ${count}`,
  thinking: 'Thinking',
  thought: (seconds) => `Thought for ${seconds} ${seconds === 1 ? 'second' : 'seconds'}`,
  reasoning: 'Reasoning',
  sources: 'Sources',
  running: (tool) => `Running ${tool}`,
  ran: (tool) => `Ran ${tool}`,
  failed: (tool) => `${tool} failed`,
  input: 'Input',
  output: 'Output',
  stopped: 'Stopped',
  error: 'Something went wrong.',
  replied: (assistant) => `${assistant} replied.`,
  jump: 'Jump to the latest message',
  suggestions: 'Suggestions',
  attachments: 'Attachments',
  bytes,
  markdown: NUI_MARKDOWN_LABELS,
};

/** The labels, defaults filled in. */
export function nuiChatWords(labels: NuiChatLabelsInput): NuiChatLabels {
  return {
    ...NUI_CHAT_LABELS,
    ...labels,
    markdown: { ...NUI_MARKDOWN_LABELS, ...labels.markdown },
  };
}
