import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { userEvent } from 'vitest/browser';
import { NuiChat } from './chat';
import { NuiChatSession } from './session';
import { NuiChatToolTemplate } from './thread';
import type { NuiChatChunk, NuiChatRequest } from './types';

const settle = () => new Promise((resolve) => setTimeout(resolve));

@Component({
  imports: [NuiChat, NuiChatToolTemplate],
  template: `
    <button id="before">Before</button>
    <nui-chat
      style="display: grid; block-size: 400px"
      [session]="chat"
      assistant="Needle"
      [announce]="announce()"
      [suggestions]="['Plan a trip', 'Write a poem']"
      [attach]="true"
      accept="image/*,.txt"
      [maxFiles]="2"
    >
      <p nuiChatEmpty>Ask me anything.</p>
      <ng-template nuiChatTool="weather" let-tool>
        <p class="weather">{{ tool.output }}</p>
      </ng-template>
    </nui-chat>
  `,
})
class Host {
  readonly replies: Subject<NuiChatChunk>[] = [];
  readonly requests: NuiChatRequest[] = [];
  readonly announce = signal<'reply' | 'notice' | 'off'>('reply');
  readonly chat = new NuiChatSession({
    respond: (request) => {
      this.requests.push(request);
      const reply = new Subject<NuiChatChunk>();
      this.replies.push(reply);
      return reply;
    },
  });

  /** Writes the next reply and ends it. */
  answer(...chunks: NuiChatChunk[]) {
    const reply = this.replies[this.replies.length - 1];
    chunks.forEach((chunk) => reply.next(chunk));
    reply.complete();
  }
}

async function setup() {
  const announcements: string[] = [];
  TestBed.configureTestingModule({
    providers: [
      {
        provide: LiveAnnouncer,
        useValue: { announce: (text: string) => void announcements.push(text) },
      },
    ],
  });
  const fixture = TestBed.createComponent(Host);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const stable = async () => {
    await settle();
    await fixture.whenStable();
  };
  const field = () => root.querySelector<HTMLTextAreaElement>('.nui-chat-input')!;
  const articles = () => [...root.querySelectorAll<HTMLElement>('article')];
  return { fixture, host: fixture.componentInstance, root, stable, field, articles, announcements };
}

describe('NuiChat', () => {
  it('starts empty, with its greeting and suggestions', async () => {
    const { root, host, stable, articles } = await setup();
    expect(root.querySelector('.nui-chat-empty')?.textContent).toContain('Ask me anything.');
    const suggestions = [...root.querySelectorAll<HTMLButtonElement>('.nui-chat-suggestion')];
    expect(suggestions.map((b) => b.textContent?.trim())).toEqual(['Plan a trip', 'Write a poem']);

    suggestions[0].click();
    await stable();
    expect(host.requests[0].messages[0].text).toBe('Plan a trip');
    expect(root.querySelector('.nui-chat-empty')).toBeNull();
    expect(root.querySelector('.nui-chat-suggestion')).toBeNull();
    expect(articles().length).toBe(2);
  });

  it('sends with Enter, adds lines with Shift+Enter, and waits out an IME', async () => {
    const { host, stable, field } = await setup();
    await userEvent.click(field());
    await userEvent.keyboard('Hello{Shift>}{Enter}{/Shift}there');
    expect(field().value).toBe('Hello\nthere');
    field().dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true }),
    );
    expect(host.requests.length).toBe(0);

    await userEvent.keyboard('{Enter}');
    await stable();
    expect(host.requests[0].messages[0].text).toBe('Hello\nthere');
    expect(field().value).toBe('');
  });

  it('renders the conversation as a feed of labelled articles', async () => {
    const { root, host, stable, articles } = await setup();
    host.chat.send('Hi');
    await stable();
    const feed = root.querySelector('[role="feed"]')!;
    expect(feed.getAttribute('aria-label')).toBe('Conversation');
    const [question, reply] = articles();
    expect(question.getAttribute('aria-posinset')).toBe('1');
    expect(reply.getAttribute('aria-setsize')).toBe('2');
    const heading = root.querySelector(`#${reply.getAttribute('aria-labelledby')}`);
    expect(heading?.textContent?.trim()).toBe('Needle said');
    expect(heading?.getAttribute('role')).toBe('heading');

    // Waiting: a typing indicator, and the reply is busy.
    expect(reply.querySelector('.nui-chat-typing')).not.toBeNull();
    expect(reply.getAttribute('aria-busy')).toBe('true');

    host.replies[0].next('**Hello**');
    await stable();
    expect(reply.querySelector('.nui-chat-typing')).toBeNull();
    expect(reply.querySelector('nui-markdown strong')?.textContent).toBe('Hello');
    expect(reply.querySelector('.nui-markdown-caret')).not.toBeNull();

    host.answer();
    await stable();
    expect(reply.hasAttribute('aria-busy')).toBe(false);
    expect(reply.querySelector('.nui-markdown-caret')).toBeNull();
    expect(root.querySelector(`#${reply.getAttribute('aria-describedby')}`)?.tagName).toBe(
      'NUI-MARKDOWN',
    );
  });

  it('turns send into stop while a reply arrives', async () => {
    const { root, host, stable } = await setup();
    const button = () => root.querySelector<HTMLButtonElement>('.nui-chat-send')!;
    expect(button().getAttribute('aria-disabled')).toBe('true');
    host.chat.send('Hi');
    await stable();
    expect(button().getAttribute('aria-label')).toBe('Stop');
    button().click();
    await stable();
    expect(host.chat.messages()[1].status).toBe('stopped');
    expect(root.querySelector('.nui-chat-note')?.textContent).toBe('Stopped');
    expect(button().getAttribute('aria-label')).toBe('Send');
  });

  it('keeps focus in the field when its button is pressed, so a phone keeps its keyboard', async () => {
    const { root, host, stable, field } = await setup();
    await userEvent.click(field());
    await userEvent.keyboard('Hi');
    await userEvent.click(root.querySelector<HTMLButtonElement>('.nui-chat-send')!);
    await stable();
    expect(host.requests.length).toBe(1);
    expect(document.activeElement).toBe(field());
  });

  it('announces a finished reply, whole or as a notice, and a failed one', async () => {
    const { host, stable, announcements } = await setup();
    host.chat.send('Hi');
    await stable();
    host.answer('# Title\n\nSome *text*.');
    await stable();
    expect(announcements).toEqual(['Needle said: Title\nSome text.']);

    host.announce.set('notice');
    host.chat.send('Again');
    await stable();
    host.answer('More');
    await stable();
    expect(announcements.at(-1)).toBe('Needle replied.');

    host.chat.send('Break');
    await stable();
    host.replies.at(-1)!.error(new Error('x'));
    await stable();
    expect(announcements.at(-1)).toBe('Something went wrong.');
  });

  it('rates, retries into versions, and switches between them', async () => {
    const { root, host, stable, articles } = await setup();
    host.chat.send('Hi');
    await stable();
    host.answer('First');
    await stable();

    const good = () => articles()[1].querySelector<HTMLButtonElement>('[data-action="good"]')!;
    good().click();
    await stable();
    expect(good().getAttribute('aria-pressed')).toBe('true');
    expect(host.chat.messages()[1].rating).toBe('up');
    good().click();
    await stable();
    expect(host.chat.messages()[1].rating).toBeNull();

    articles()[1].querySelector<HTMLButtonElement>('[data-action="retry"]')!.click();
    await stable();
    host.answer('Second');
    await stable();
    const versions = articles()[1].querySelector('.nui-chat-versions')!;
    expect(versions.getAttribute('aria-label')).toBe('Version 2 of 2');
    const next = versions.querySelector<HTMLButtonElement>('[data-action="next"]')!;
    expect(next.getAttribute('aria-disabled')).toBe('true');

    versions.querySelector<HTMLButtonElement>('[data-action="previous"]')!.click();
    await stable();
    expect(articles()[1].textContent).toContain('First');
    expect(root.querySelector('.nui-chat-versions')?.getAttribute('aria-label')).toBe(
      'Version 1 of 2',
    );
  });

  it('edits a message in place: Enter sends the new version, Escape cancels', async () => {
    const { host, stable, articles } = await setup();
    host.chat.send('Hi');
    await stable();
    host.answer('Hello');
    await stable();

    const edit = () => articles()[0].querySelector<HTMLButtonElement>('[data-action="edit"]')!;
    edit().click();
    await stable();
    let editor = articles()[0].querySelector('textarea')!;
    expect(document.activeElement).toBe(editor);
    await userEvent.keyboard('{Escape}');
    await stable();
    expect(articles()[0].querySelector('textarea')).toBeNull();
    expect(document.activeElement).toBe(edit());

    edit().click();
    await stable();
    editor = articles()[0].querySelector('textarea')!;
    await userEvent.keyboard(' again{Enter}');
    await stable();
    expect(host.requests.at(-1)!.messages.map((m) => m.text)).toEqual(['Hi again']);
    expect(host.chat.versions(host.chat.messages()[0]).length).toBe(2);
  });

  it('moves between messages with Page Down and Page Up, and leaves with Control+End', async () => {
    const { root, host, stable, articles, field } = await setup();
    host.chat.send('One');
    await stable();
    host.answer('Two');
    await stable();
    expect(articles().map((a) => a.tabIndex)).toEqual([-1, 0]);

    articles()[1].focus();
    await userEvent.keyboard('{PageUp}');
    expect(document.activeElement).toBe(articles()[0]);
    await stable();
    expect(articles().map((a) => a.tabIndex)).toEqual([0, -1]);
    await userEvent.keyboard('{PageDown}');
    expect(document.activeElement).toBe(articles()[1]);

    await userEvent.keyboard('{Control>}{End}{/Control}');
    expect(document.activeElement).toBe(field());
    articles()[0].focus();
    await userEvent.keyboard('{Control>}{Home}{/Control}');
    expect(document.activeElement).toBe(root.querySelector('#before'));
  });

  it('draws tool calls with a template of yours, or folded with their input and output', async () => {
    const { root, host, stable } = await setup();
    host.chat.send('Weather?');
    await stable();
    host.answer(
      { type: 'tool', tool: { id: '1', name: 'weather', state: 'done', output: 'Sunny' } },
      { type: 'tool', tool: { id: '2', name: 'search', state: 'running', input: { q: 'x' } } },
      { type: 'source', source: { url: 'https://www.example.com/a', title: 'Example' } },
      { type: 'source', source: { url: 'javascript:alert(1)' } },
      'Sunny.',
    );
    await stable();
    expect(root.querySelector('.weather')?.textContent).toBe('Sunny');
    const tool = root.querySelector('.nui-chat-tool')!;
    expect(tool.getAttribute('data-state')).toBe('running');
    expect(tool.querySelector('summary')?.textContent?.trim()).toBe('Running search');
    expect(tool.querySelector('pre')?.textContent).toBe('{\n  "q": "x"\n}');
    const sources = [...root.querySelectorAll<HTMLAnchorElement>('.nui-chat-source')];
    expect(sources.map((a) => a.getAttribute('href'))).toEqual(['https://www.example.com/a']);
    expect(sources[0].textContent).toContain('example.com');
  });

  it('attaches files it accepts, up to its limit, and sends them', async () => {
    const { root, host, stable, field } = await setup();
    const input = root.querySelector<HTMLInputElement>('input[type="file"]')!;
    const files = new DataTransfer();
    files.items.add(new File(['x'], 'photo.png', { type: 'image/png' }));
    files.items.add(new File(['x'], 'notes.txt', { type: 'text/plain' }));
    files.items.add(new File(['x'], 'tool.exe', { type: 'application/x-msdownload' }));
    files.items.add(new File(['x'], 'more.txt', { type: 'text/plain' }));
    input.files = files.files;
    input.dispatchEvent(new Event('change'));
    await stable();

    const chips = [...root.querySelectorAll('.nui-chat-composer .nui-chat-file')];
    expect(chips.map((c) => c.querySelector('.nui-chat-file-name')?.textContent)).toEqual([
      'photo.png',
      'notes.txt',
    ]);
    expect(chips[0].querySelector('img')?.getAttribute('src')).toMatch(/^blob:/);
    const problem = root.querySelector('.nui-chat-problem')!;
    expect(problem.textContent).toContain('tool.exe isn’t a file type you can attach.');
    expect(problem.textContent).toContain('You can attach up to 2 files.');
    expect(field().getAttribute('aria-describedby')).toBe(problem.id);

    chips[1].querySelector<HTMLButtonElement>('.nui-chat-file-remove')!.click();
    await stable();
    expect(document.activeElement).toBe(field());

    root.querySelector<HTMLButtonElement>('.nui-chat-send')!.click();
    await stable();
    expect(host.requests[0].messages[0].attachments?.map((a) => a.name)).toEqual(['photo.png']);
    expect(root.querySelector('article .nui-chat-file img')?.getAttribute('alt')).toBe('photo.png');
  });
});
