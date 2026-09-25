import { Component, effect } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiChat,
  NuiChatError,
  type NuiChatMessage,
  NuiChatSession,
  nuiEventStream,
} from '@needless-ui/angular/chat';
import { reply, wait } from './model';

const SAVED = 'chat-server-example';

@Component({
  selector: 'chat-server-example',
  imports: [NuiButton, NuiChat],
  templateUrl: './server.html',
  styleUrl: './server.css',
})
export class ChatServerExample {
  protected readonly chat = new NuiChatSession({
    // Picks up where the reader left off, versions and all.
    messages: restore(),
    respond: async function* ({ messages, signal }) {
      const response = await post('/api/chat', messages, signal);
      if (response.status === 429)
        throw new NuiChatError('That’s enough for now. Try again in a minute.');
      // An OpenAI-style stream of server-sent events.
      for await (const { data } of nuiEventStream(response)) {
        if (data === '[DONE]') return;
        yield JSON.parse(data).choices[0].delta.content ?? '';
      }
    },
  });

  constructor() {
    // Save each finished reply, not every word of it.
    effect(() => {
      if (this.chat.busy()) return;
      try {
        sessionStorage.setItem(SAVED, JSON.stringify(this.chat.all()));
      } catch {
        // Storage can be full or blocked; the chat works without it.
      }
    });
  }
}

function restore(): NuiChatMessage[] {
  try {
    return JSON.parse(sessionStorage.getItem(SAVED) ?? '[]');
  } catch {
    return [];
  }
}

/**
 * Stands in for `fetch(url, { method: 'POST', body, signal })` to your server,
 * which calls the model and streams its answer back as events.
 */
async function post(
  _url: string,
  messages: readonly NuiChatMessage[],
  signal: AbortSignal,
): Promise<Response> {
  const question = messages[messages.length - 1].text;
  if (/limit/i.test(question)) return new Response(null, { status: 429 });
  const encoder = new TextEncoder();
  const words = reply(question).match(/\S+\s*|\s+/g) ?? [];
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for (const word of words) {
          await wait(20 + Math.random() * 30, signal);
          const event = { choices: [{ delta: { content: word } }] };
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
        }
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });
  return new Response(body, { headers: { 'content-type': 'text/event-stream' } });
}
