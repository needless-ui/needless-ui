import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NuiMarkdown, NuiMarkdownCode } from './markdown';

@Component({
  imports: [NuiMarkdown, NuiMarkdownCode],
  template: `
    <nui-markdown [text]="text()" [streaming]="streaming()" [headingLevel]="level()" />
    <nui-markdown
      id="custom"
      text="\`\`\`ts
let a
\`\`\`"
    >
      <ng-template nuiMarkdownCode let-code let-lang="lang">
        <pre class="mine">{{ lang }}: {{ code }}</pre>
      </ng-template>
    </nui-markdown>
  `,
})
class Host {
  readonly text = signal('');
  readonly streaming = signal(false);
  readonly level = signal(3);
}

async function setup(text: string) {
  const fixture = TestBed.createComponent(Host);
  fixture.componentInstance.text.set(text);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement.querySelector('nui-markdown');
  return { fixture, host: fixture.componentInstance, root };
}

describe('NuiMarkdown', () => {
  it('renders Markdown as real elements, and raw HTML as text', async () => {
    const { root } = await setup(
      '# Title\n\nSome **bold**, *em* and `code`. <img src=x onerror=alert(1)>\n\n- a\n- b\n\n> quote\n\n---',
    );
    expect(root.querySelector('h3')?.textContent?.trim()).toBe('Title');
    expect(root.querySelector('p strong')?.textContent).toBe('bold');
    expect(root.querySelector('p em')?.textContent).toBe('em');
    expect(root.querySelector('p code')?.textContent).toBe('code');
    expect(root.querySelector('img')).toBeNull();
    expect(root.querySelector('p')!.textContent).toContain('<img src=x onerror=alert(1)>');
    expect(root.querySelectorAll('ul > li').length).toBe(2);
    // Tight list items hold their text directly, without paragraphs.
    expect(root.querySelector('li p')).toBeNull();
    expect(root.querySelector('blockquote p')?.textContent?.trim()).toBe('quote');
    expect(root.querySelector('hr')).not.toBeNull();
  });

  it('starts headings at headingLevel, and never goes past h6', async () => {
    const { fixture, host, root } = await setup('# One\n\n## Two\n\n###### Six');
    host.level.set(2);
    await fixture.whenStable();
    expect([...root.querySelectorAll('h2, h3, h6')].map((h) => h.tagName)).toEqual([
      'H2',
      'H3',
      'H6',
    ]);
  });

  it('opens web links in a new tab, safely, and drops unsafe ones', async () => {
    const { root } = await setup(
      '[site](https://example.com) [mail](mailto:a@b.c) [bad](javascript:x)',
    );
    const links = [...root.querySelectorAll('a')];
    expect(links.map((a) => a.getAttribute('href'))).toEqual([
      'https://example.com',
      'mailto:a@b.c',
    ]);
    expect(links[0].getAttribute('target')).toBe('_blank');
    expect(links[0].getAttribute('rel')).toBe('noopener noreferrer');
    expect(links[1].hasAttribute('target')).toBe(false);
    expect(root.textContent).toContain('bad');
  });

  it('draws code blocks with their language and a copy button, or a template of yours', async () => {
    const { fixture, root } = await setup('```python\nprint("hi")\n```');
    expect(root.querySelector('.nui-markdown-lang')?.textContent).toBe('python');
    expect(root.querySelector('pre code')?.textContent).toBe('print("hi")');
    const copy = root.querySelector<HTMLButtonElement>('.nui-markdown-copy')!;
    expect(copy.getAttribute('aria-label')).toBe('Copy code');
    const custom = (fixture.nativeElement as HTMLElement).querySelector('#custom .mine');
    expect(custom?.textContent?.trim()).toBe('ts: let a');
  });

  it('draws tables in a named, focusable scroll region, and tasks with their state', async () => {
    const { root } = await setup('| A | B |\n| - | -: |\n| 1 | 2 |\n\n- [x] shipped\n- [ ] tested');
    const region = root.querySelector('.nui-markdown-table')!;
    expect(region.getAttribute('role')).toBe('region');
    expect(region.getAttribute('aria-label')).toBe('Table: A, B');
    expect(region.getAttribute('tabindex')).toBe('0');
    expect(root.querySelector('th')?.getAttribute('scope')).toBe('col');
    expect(root.querySelectorAll('td')[1].style.textAlign).toBe('right');
    const checks = [...root.querySelectorAll('.nui-markdown-check')];
    expect(checks.map((c) => c.getAttribute('aria-label'))).toEqual(['Done', 'To do']);
  });

  it('while streaming, re-renders only the block that changes', async () => {
    const { fixture, host, root } = await setup('First paragraph.\n\nSecond **grow');
    host.streaming.set(true);
    await fixture.whenStable();
    const first = root.querySelector('p');
    expect(root.querySelectorAll('p')[1].textContent?.trim()).toBe('Second grow');

    host.text.set('First paragraph.\n\nSecond **growing**, done.');
    await fixture.whenStable();
    expect(root.querySelector('p')).toBe(first);
    expect(root.querySelectorAll('p')[1].querySelector('strong')?.textContent).toBe('growing');

    host.text.set('First paragraph.\n\n```js\nlet x');
    await fixture.whenStable();
    expect(root.querySelector('.nui-markdown-code')?.hasAttribute('data-open')).toBe(true);
    expect(root.getAttribute('data-streaming')).toBe('true');
  });

  it('while streaming, draws a caret after the last text, wherever it is', async () => {
    const { fixture, host, root } = await setup('Intro.\n\n- one\n- tw');
    host.streaming.set(true);
    await fixture.whenStable();
    const carets = () => [...root.querySelectorAll('.nui-markdown-caret')];
    expect(carets().length).toBe(1);
    expect(carets()[0].parentElement).toBe(root.querySelectorAll('li')[1]);
    expect(carets()[0].getAttribute('aria-hidden')).toBe('true');

    host.text.set('Intro.\n\n| A |\n| - |\n| 1 |');
    await fixture.whenStable();
    expect(carets()[0].parentElement?.tagName).toBe('TD');

    host.streaming.set(false);
    await fixture.whenStable();
    expect(carets().length).toBe(0);
  });
});
