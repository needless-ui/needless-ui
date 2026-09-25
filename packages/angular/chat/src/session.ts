import { computed, DestroyRef, inject, type Injector, signal, untracked } from '@angular/core';
import {
  type NuiChatAttachment,
  type NuiChatChunk,
  NuiChatError,
  type NuiChatMessage,
  type NuiChatRating,
  type NuiChatReply,
  type NuiChatRequest,
  type NuiChatStatus,
  type NuiSubscribable,
} from './types';

export interface NuiChatSessionOptions {
  /** Writes the reply to the conversation so far. See `NuiChatReply` for what it can return. */
  respond: (request: NuiChatRequest) => NuiChatReply;
  /** Messages to start from, such as a saved conversation (`all()`), every version included. */
  messages?: readonly NuiChatMessage[];
  /** Makes message ids. Defaults to random UUIDs. */
  id?: () => string;
  /** For creating a session outside an injection context: it ends when this injector is destroyed. */
  injector?: Injector;
}

type Draft = { -readonly [K in keyof NuiChatMessage]: NuiChatMessage[K] };

const ENDED: readonly NuiChatStatus[] = ['done', 'stopped', 'error'];
let counter = 0;

function randomId(): string {
  return globalThis.crypto?.randomUUID?.() ?? `nui-${Date.now().toString(36)}-${counter++}`;
}

/**
 * A conversation with a model: the messages, every version of them, and the reply
 * in progress. Create one in a component and hand it to `<nui-chat>`:
 *
 * ```ts
 * readonly chat = new NuiChatSession({
 *   respond: async function* ({ messages, signal }) {
 *     const response = await fetch('/api/chat', { method: 'POST', body: JSON.stringify(messages), signal });
 *     yield* nuiTextStream(response);
 *   },
 * });
 * ```
 *
 * A retried reply or an edited question doesn't replace the old one: it becomes a
 * new version beside it, and `show()` switches between them, so the conversation is
 * a tree and `messages()` the branch on screen.
 */
export class NuiChatSession {
  readonly #respond: NuiChatSessionOptions['respond'];
  readonly #id: () => string;
  readonly #all = signal<readonly NuiChatMessage[]>([]);
  /** For each parent (`null` for the start), the version shown after it. */
  readonly #shown = signal<ReadonlyMap<string | null, string>>(new Map());
  readonly #replying = signal<string | null>(null);
  #controller: AbortController | null = null;

  /** Messages by the one they follow, oldest first. */
  readonly #children = computed(() => {
    const children = new Map<string | null, NuiChatMessage[]>();
    for (const message of this.#all()) {
      const siblings = children.get(message.parent);
      if (siblings) siblings.push(message);
      else children.set(message.parent, [message]);
    }
    return children;
  });

  /** Every message, every version: what to save, and to pass back as `messages`. */
  readonly all = this.#all.asReadonly();

  /** The conversation on screen: from the start, the shown version of each message. */
  readonly messages = computed(() => {
    const children = this.#children();
    const shown = this.#shown();
    const path: NuiChatMessage[] = [];
    for (let parent: string | null = null; path.length < this.#all().length;) {
      const versions = children.get(parent);
      if (!versions) break;
      const next =
        versions.find((m) => m.id === shown.get(parent)) ?? versions[versions.length - 1];
      path.push(next);
      parent = next.id;
    }
    return path as readonly NuiChatMessage[];
  });

  /** A reply is on its way. */
  readonly busy = computed(() => this.#replying() !== null);

  /** The reply on its way, if any. */
  readonly replying = computed(() => {
    const id = this.#replying();
    return id === null ? null : (this.#all().find((m) => m.id === id) ?? null);
  });

  constructor(options: NuiChatSessionOptions) {
    this.#respond = options.respond;
    this.#id = options.id ?? randomId;
    this.load(options.messages ?? []);
    (options.injector?.get(DestroyRef) ?? inject(DestroyRef)).onDestroy(() => this.stop());
  }

  /** Sends the user's message and asks for a reply. A reply in progress stops first. */
  send(text: string, attachments: readonly NuiChatAttachment[] = []): Promise<void> {
    if (!text.trim() && !attachments.length) return Promise.resolve();
    this.stop();
    const last = untracked(this.messages).at(-1);
    const message = this.#add({
      role: 'user',
      text,
      parent: last?.id ?? null,
      ...(attachments.length ? { attachments } : {}),
    });
    return this.#reply(message);
  }

  /** Stops the reply in progress, keeping what it wrote so far. */
  stop(): void {
    this.#controller?.abort();
  }

  /**
   * Asks again, for a new version of a reply beside the old one; a reply that
   * failed is replaced instead. Defaults to the last reply. Given one of the user's
   * messages, asks for another reply to it.
   */
  retry(message?: NuiChatMessage): Promise<void> {
    const thread = untracked(this.messages);
    message ??= [...thread].reverse().find((m) => m.role === 'assistant') ?? thread.at(-1);
    const question = message?.role === 'user' ? message : this.#find(message?.parent ?? null);
    if (!message || question?.role !== 'user') return Promise.resolve();
    this.stop();
    if (message.status === 'error' && !untracked(this.#children).has(message.id)) {
      this.#all.update((all) => all.filter((m) => m.id !== message.id));
    }
    return this.#reply(question);
  }

  /** Sends a new version of one of the user's messages, beside the old one, and asks for a reply. */
  edit(message: NuiChatMessage, text: string): Promise<void> {
    if (message.role !== 'user' || (!text.trim() && !message.attachments?.length)) {
      return Promise.resolve();
    }
    this.stop();
    const version = this.#add({
      role: 'user',
      text,
      parent: message.parent,
      ...(message.attachments ? { attachments: message.attachments } : {}),
    });
    return this.#reply(version);
  }

  /** Records the reader's verdict on a reply, or clears it with `null`. */
  rate(message: NuiChatMessage, rating: NuiChatRating | null): void {
    this.#update(message.id, (m) => ({ ...m, rating }));
  }

  /** Every version of a message, oldest first: itself, and the others with its parent. */
  versions(message: NuiChatMessage): readonly NuiChatMessage[] {
    return (
      this.#children()
        .get(message.parent)
        ?.filter((m) => m.role === message.role) ?? [message]
    );
  }

  /** Shows this version of a message, and the conversation that follows it. */
  show(message: NuiChatMessage): void {
    this.#shown.update((shown) => new Map(shown).set(message.parent, message.id));
  }

  /** Removes a message, with everything that follows it in any version. */
  remove(message: NuiChatMessage): void {
    const all = untracked(this.#all);
    const gone = new Set([message.id]);
    for (let size = 0; size !== gone.size;) {
      size = gone.size;
      for (const m of all) if (m.parent !== null && gone.has(m.parent)) gone.add(m.id);
    }
    const replying = untracked(this.#replying);
    if (replying !== null && gone.has(replying)) this.stop();
    this.#all.set(all.filter((m) => !gone.has(m.id)));
  }

  /**
   * Replaces the conversation, such as with a saved one. A reply that was still
   * arriving when it was saved reads as stopped.
   */
  load(messages: readonly NuiChatMessage[]): void {
    this.stop();
    this.#all.set(
      messages.map((m): NuiChatMessage =>
        ENDED.includes(m.status) ? m : { ...m, status: 'stopped' },
      ),
    );
    this.#shown.set(new Map());
  }

  /** Starts over. */
  clear(): void {
    this.load([]);
  }

  #find(id: string | null): NuiChatMessage | undefined {
    return id === null ? undefined : untracked(this.#all).find((m) => m.id === id);
  }

  #add(fields: Pick<NuiChatMessage, 'role' | 'text' | 'parent'> & Partial<Draft>): NuiChatMessage {
    const message: NuiChatMessage = { id: this.#id(), status: 'done', time: Date.now(), ...fields };
    this.#all.update((all) => [...all, message]);
    this.show(message);
    return message;
  }

  #update(id: string, change: (message: NuiChatMessage) => NuiChatMessage): void {
    this.#all.update((all) => all.map((m) => (m.id === id ? change(m) : m)));
  }

  /** The conversation up to a message, without replies that failed or said nothing. */
  #history(message: NuiChatMessage): NuiChatMessage[] {
    const byId = new Map(untracked(this.#all).map((m) => [m.id, m]));
    const path: NuiChatMessage[] = [];
    for (let m: NuiChatMessage | undefined = message; m && path.length <= byId.size;) {
      path.unshift(m);
      m = m.parent === null ? undefined : byId.get(m.parent);
    }
    return path.filter(
      (m) => m.role === 'user' || (m.status !== 'error' && (m.text !== '' || !!m.tools?.length)),
    );
  }

  async #reply(question: NuiChatMessage): Promise<void> {
    const messages = this.#history(question);
    const reply = this.#add({
      role: 'assistant',
      text: '',
      parent: question.id,
      status: 'pending',
    });
    const controller = new AbortController();
    this.#controller = controller;
    this.#replying.set(reply.id);

    let reasoningFrom: number | undefined;
    const reasoned = (m: Draft) => {
      if (reasoningFrom !== undefined && m.reasoningTime === undefined) {
        m.reasoningTime = Date.now() - reasoningFrom;
      }
    };
    const end: Partial<Draft> = { status: 'done' };
    try {
      const source = this.#respond({ messages, signal: controller.signal });
      for await (const chunk of chunks(source, controller.signal)) {
        this.#update(reply.id, (message) => {
          const m: Draft = { ...message, status: 'streaming' };
          const delta = typeof chunk === 'string' ? { type: 'text' as const, text: chunk } : chunk;
          switch (delta.type) {
            case 'text':
              if (!delta.text) return message;
              reasoned(m);
              m.text += delta.text;
              break;
            case 'reasoning':
              reasoningFrom ??= Date.now();
              m.reasoning = (m.reasoning ?? '') + delta.text;
              break;
            case 'source':
              reasoned(m);
              if (!m.sources?.some((s) => s.url === delta.source.url)) {
                m.sources = [...(m.sources ?? []), delta.source];
              }
              break;
            case 'tool': {
              reasoned(m);
              const tools = m.tools ?? [];
              m.tools = tools.some((t) => t.id === delta.tool.id)
                ? tools.map((t) => (t.id === delta.tool.id ? delta.tool : t))
                : [...tools, delta.tool];
              break;
            }
            case 'data':
              m.data = delta.data;
              break;
          }
          return m;
        });
      }
      if (controller.signal.aborted) end.status = 'stopped';
    } catch (error) {
      if (controller.signal.aborted) {
        end.status = 'stopped';
      } else {
        end.status = 'error';
        if (error instanceof NuiChatError) end.error = error.message;
      }
    }
    this.#update(reply.id, (message) => {
      const m: Draft = { ...message, ...end };
      reasoned(m);
      return m;
    });
    if (this.#controller === controller) {
      this.#controller = null;
      this.#replying.set(null);
    }
  }
}

function isAsyncIterable<T>(value: unknown): value is AsyncIterable<T> {
  return typeof (value as AsyncIterable<T> | null)?.[Symbol.asyncIterator] === 'function';
}

function isSubscribable<T>(value: unknown): value is NuiSubscribable<T> {
  return typeof (value as NuiSubscribable<T> | null)?.subscribe === 'function';
}

function isPromiseLike<T>(value: unknown): value is PromiseLike<T> {
  return typeof (value as PromiseLike<T> | null)?.then === 'function';
}

/**
 * The pieces of any reply, one after another. Stopping ends it at once, even when
 * the source is slow to notice, and ends the source.
 */
async function* chunks(reply: NuiChatReply, signal: AbortSignal): AsyncGenerator<NuiChatChunk> {
  const aborted = new Promise<never>((_, reject) => {
    if (signal.aborted) reject(signal.reason);
    signal.addEventListener('abort', () => reject(signal.reason), { once: true });
  });
  aborted.catch(() => {});
  const value = isPromiseLike(reply) ? await Promise.race([reply, aborted]) : reply;
  if (value == null) return;
  if (!isAsyncIterable<NuiChatChunk>(value) && !isSubscribable<NuiChatChunk>(value)) {
    yield value;
    return;
  }
  const iterator = (isAsyncIterable<NuiChatChunk>(value) ? value : observe(value, signal))[
    Symbol.asyncIterator
  ]();
  try {
    while (true) {
      const result = await Promise.race([iterator.next(), aborted]);
      if (result.done) return;
      yield result.value;
    }
  } finally {
    Promise.resolve(iterator.return?.()).catch(() => {});
  }
}

/** An Observable's values as an async iterable; it unsubscribes when done or stopped. */
async function* observe<T>(source: NuiSubscribable<T>, signal: AbortSignal): AsyncGenerator<T> {
  const queue: T[] = [];
  let state = 'open' as 'open' | 'done' | 'failed';
  let failure: unknown;
  let wake = () => {};
  const subscription = source.subscribe({
    next: (value) => {
      queue.push(value);
      wake();
    },
    error: (error) => {
      state = 'failed';
      failure = error;
      wake();
    },
    complete: () => {
      state = 'done';
      wake();
    },
  });
  const stop = () => {
    state = 'done';
    wake();
  };
  signal.addEventListener('abort', stop, { once: true });
  try {
    while (true) {
      if (queue.length) yield queue.shift()!;
      else if (state === 'failed') throw failure;
      else if (state === 'done') return;
      else await new Promise<void>((resolve) => (wake = resolve));
    }
  } finally {
    signal.removeEventListener('abort', stop);
    subscription.unsubscribe();
  }
}
