import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { NuiChatSession, type NuiChatSessionOptions } from './session';
import {
  type NuiChatChunk,
  NuiChatError,
  type NuiChatMessage,
  type NuiChatReply,
  type NuiChatRequest,
} from './types';

/** Lets the microtasks queued by an async reply run. */
const settle = () => new Promise((resolve) => setTimeout(resolve));

function session(
  respond: (request: NuiChatRequest) => NuiChatReply,
  options: Partial<NuiChatSessionOptions> = {},
) {
  let id = 0;
  return TestBed.runInInjectionContext(
    () => new NuiChatSession({ respond, id: () => `m${++id}`, ...options }),
  );
}

/** A reply the test writes, piece by piece. */
function scripted() {
  const replies: Subject<NuiChatChunk>[] = [];
  const requests: NuiChatRequest[] = [];
  const respond = (request: NuiChatRequest) => {
    requests.push(request);
    const reply = new Subject<NuiChatChunk>();
    replies.push(reply);
    return reply;
  };
  return { respond, replies, requests, last: () => replies[replies.length - 1] };
}

const texts = (messages: readonly NuiChatMessage[]) =>
  messages.map((m) => `${m.role === 'user' ? 'U' : 'A'}:${m.text}:${m.status}`);

describe('NuiChatSession', () => {
  it('sends a message and streams the reply into the conversation', async () => {
    const script = scripted();
    const chat = session(script.respond);
    const sent = chat.send('Hi');
    expect(texts(chat.messages())).toEqual(['U:Hi:done', 'A::pending']);
    expect(chat.busy()).toBe(true);
    expect(chat.replying()?.status).toBe('pending');

    script.last().next('Hello');
    script.last().next(', there');
    await settle();
    expect(texts(chat.messages())).toEqual(['U:Hi:done', 'A:Hello, there:streaming']);

    script.last().complete();
    await sent;
    expect(texts(chat.messages())).toEqual(['U:Hi:done', 'A:Hello, there:done']);
    expect(chat.busy()).toBe(false);
    expect(script.requests[0].messages.map((m) => m.text)).toEqual(['Hi']);
    expect(chat.messages()[1].parent).toBe(chat.messages()[0].id);
  });

  it('ignores empty messages', async () => {
    const chat = session(() => 'never');
    await chat.send('   ');
    expect(chat.messages()).toEqual([]);
  });

  it('takes replies whole, promised, or from async generators', async () => {
    const whole = session(() => 'Whole');
    await whole.send('a');
    expect(whole.messages()[1].text).toBe('Whole');

    const promised = session(async () => 'Promised');
    await promised.send('a');
    expect(promised.messages()[1].text).toBe('Promised');

    const generated = session(async function* () {
      yield 'One, ';
      yield { type: 'text', text: 'two' };
    });
    await generated.send('a');
    expect(generated.messages()[1]).toMatchObject({ text: 'One, two', status: 'done' });
  });

  it('gathers reasoning, sources, tool calls and data from deltas', async () => {
    const chat = session(async function* () {
      yield { type: 'reasoning', text: 'Let me ' };
      yield { type: 'reasoning', text: 'think.' };
      yield { type: 'tool', tool: { id: 't', name: 'search', state: 'running', input: 'q' } };
      yield { type: 'tool', tool: { id: 't', name: 'search', state: 'done', output: [1] } };
      yield { type: 'source', source: { url: 'https://a.example', title: 'A' } };
      yield { type: 'source', source: { url: 'https://a.example', title: 'A again' } };
      yield 'Answer';
      yield { type: 'data', data: { model: 'x' } };
    });
    await chat.send('q');
    const reply = chat.messages()[1];
    expect(reply.reasoning).toBe('Let me think.');
    expect(reply.reasoningTime).toBeGreaterThanOrEqual(0);
    expect(reply.tools).toEqual([{ id: 't', name: 'search', state: 'done', output: [1] }]);
    expect(reply.sources).toEqual([{ url: 'https://a.example', title: 'A' }]);
    expect(reply.data).toEqual({ model: 'x' });
  });

  it('stops a reply, keeping what it wrote, and ends the source', async () => {
    const script = scripted();
    const chat = session(script.respond);
    const sent = chat.send('Hi');
    script.last().next('Partial');
    await settle();
    chat.stop();
    await sent;
    expect(texts(chat.messages())).toEqual(['U:Hi:done', 'A:Partial:stopped']);
    expect(script.requests[0].signal.aborted).toBe(true);
    expect(script.last().observed).toBe(false);
  });

  it('stops even when the source ignores the signal', async () => {
    const chat = session(async function* () {
      yield 'Start';
      await new Promise(() => {});
    });
    const sent = chat.send('Hi');
    await settle();
    chat.stop();
    await sent;
    expect(chat.messages()[1]).toMatchObject({ text: 'Start', status: 'stopped' });
  });

  it('shows a NuiChatError’s message, and hides any other error’s', async () => {
    const limited = session(() => {
      throw new NuiChatError('Limit reached');
    });
    await limited.send('a');
    expect(limited.messages()[1]).toMatchObject({ status: 'error', error: 'Limit reached' });

    const broken = session(async () => {
      throw new Error('Connection to db-internal-3 refused');
    });
    await broken.send('a');
    expect(broken.messages()[1].status).toBe('error');
    expect(broken.messages()[1].error).toBeUndefined();
  });

  it('keeps a retried reply as a version, and switches between versions', async () => {
    let n = 0;
    const chat = session(() => `Reply ${++n}`);
    await chat.send('Q');
    const first = chat.messages()[1];
    await chat.retry();
    expect(texts(chat.messages())).toEqual(['U:Q:done', 'A:Reply 2:done']);
    const versions = chat.versions(chat.messages()[1]);
    expect(versions.map((m) => m.text)).toEqual(['Reply 1', 'Reply 2']);

    chat.show(first);
    expect(chat.messages()[1].text).toBe('Reply 1');
    expect(chat.all().length).toBe(3);
  });

  it('replaces a failed reply when retried', async () => {
    let fail = true;
    const chat = session(() => {
      if (fail) throw new Error('x');
      return 'Fine';
    });
    await chat.send('Q');
    fail = false;
    await chat.retry();
    expect(texts(chat.all())).toEqual(['U:Q:done', 'A:Fine:done']);
  });

  it('edits a message into a new version, which branches the conversation', async () => {
    const script = scripted();
    const chat = session(script.respond);
    const one = chat.send('Q1');
    script.last().next('A1');
    script.last().complete();
    await one;
    const two = chat.send('Q2');
    script.last().next('A2');
    script.last().complete();
    await two;

    const q1 = chat.messages()[0];
    const edited = chat.edit(q1, 'Q1 edited');
    expect(texts(chat.messages())).toEqual(['U:Q1 edited:done', 'A::pending']);
    script.last().next('A1 again');
    script.last().complete();
    await edited;
    expect(script.requests[2].messages.map((m) => m.text)).toEqual(['Q1 edited']);

    // The old branch is still there, whole.
    chat.show(q1);
    expect(texts(chat.messages())).toEqual(['U:Q1:done', 'A:A1:done', 'U:Q2:done', 'A:A2:done']);
  });

  it('leaves failed and empty replies out of what the model sees', async () => {
    let n = 0;
    const chat = session((request) => {
      n++;
      if (n === 1) throw new Error('x');
      return request.messages.map((m) => m.text).join('|');
    });
    await chat.send('Q1');
    await chat.send('Q2');
    expect(chat.messages().at(-1)?.text).toBe('Q1|Q2');
  });

  it('rates, removes, loads and clears', async () => {
    const chat = session(() => 'R');
    await chat.send('Q');
    chat.rate(chat.messages()[1], 'up');
    expect(chat.messages()[1].rating).toBe('up');

    const saved = chat.all();
    chat.remove(chat.messages()[0]);
    expect(chat.all()).toEqual([]);

    chat.load([...saved, { ...saved[1], id: 'x', status: 'streaming' as const }]);
    expect(chat.all().map((m) => m.status)).toEqual(['done', 'done', 'stopped']);
    chat.clear();
    expect(chat.all()).toEqual([]);
  });

  it('stops its reply when destroyed', async () => {
    const script = scripted();
    const chat = session(script.respond);
    const sent = chat.send('Hi');
    TestBed.resetTestingModule();
    await sent;
    expect(chat.messages()[1].status).toBe('stopped');
  });
});
