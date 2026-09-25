import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { userEvent } from 'vitest/browser';
import { NuiEditor } from './editor';

@Component({
  imports: [NuiEditor],
  template: `
    <nui-editor
      label="Message"
      placeholder="Write something…"
      [format]="format()"
      [readonly]="readonly()"
      [(value)]="value"
    />
  `,
})
class Host {
  readonly value = signal('');
  readonly format = signal<'html' | 'markdown'>('html');
  readonly readonly = signal(false);
}

const mod = /Mac|iPhone|iPad/.test(navigator.platform) ? 'Meta' : 'Control';

async function setup(change?: (host: Host) => void) {
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const content = root.querySelector<HTMLElement>('.nui-editor-content')!;
  const tool = (name: string) => root.querySelector<HTMLButtonElement>(`[data-tool="${name}"]`)!;
  return {
    fixture,
    host: fixture.componentInstance,
    root,
    content,
    tool,
    stable: () => fixture.whenStable(),
  };
}

describe('NuiEditor', () => {
  it('is a named, multiline textbox with a toolbar', async () => {
    const { root, content } = await setup();
    expect(content.getAttribute('role')).toBe('textbox');
    expect(content.getAttribute('aria-multiline')).toBe('true');
    expect(content.getAttribute('aria-label')).toBe('Message');
    expect(content.getAttribute('aria-placeholder')).toBe('Write something…');
    expect(content.hasAttribute('data-empty')).toBe(true);
    const toolbar = root.querySelector('[role="toolbar"]')!;
    expect(toolbar.getAttribute('aria-controls')).toBe(content.id);
    expect(root.querySelector('[data-tool="bold"]')!.getAttribute('aria-pressed')).toBe('false');
  });

  it('types, formats with shortcuts, and undoes', async () => {
    const { host, content, tool, stable } = await setup();
    await userEvent.type(content, 'Hi ');
    await userEvent.keyboard(`{${mod}>}b{/${mod}}`);
    await stable();
    expect(tool('bold').getAttribute('aria-pressed')).toBe('true');
    await userEvent.keyboard('bold');
    await stable();
    expect(host.value()).toBe('<p>Hi <strong>bold</strong></p>');
    await userEvent.keyboard(`{${mod}>}z{/${mod}}`);
    await stable();
    expect(host.value()).toBe('<p>Hi </p>');
    await userEvent.keyboard(`{${mod}>}{Shift>}z{/Shift}{/${mod}}`);
    await stable();
    expect(host.value()).toBe('<p>Hi <strong>bold</strong></p>');
  });

  it('turns Markdown typed into formats', async () => {
    const { host, content, stable } = await setup();
    await userEvent.type(
      content,
      '## Plan{Enter}- milk{Enter}eggs{Enter}{Enter}Get **fresh** and `ripe` ones',
    );
    await stable();
    expect(host.value()).toBe(
      '<h2>Plan</h2><ul><li>milk</li><li>eggs</li></ul><p>Get <strong>fresh</strong> and <code>ripe</code> ones</p>',
    );
  });

  it('deletes across formats and joins blocks with Backspace', async () => {
    const { host, content, stable } = await setup();
    await userEvent.type(content, '> quote{Enter}{Enter}after');
    await stable();
    expect(host.value()).toBe('<blockquote><p>quote</p></blockquote><p>after</p>');
    await userEvent.keyboard('{Home}{Backspace}');
    await stable();
    expect(host.value()).toBe('<blockquote><p>quoteafter</p></blockquote>');
    await userEvent.keyboard('{Backspace}');
    await stable();
    expect(host.value()).toBe('<blockquote><p>quotafter</p></blockquote>');
  });

  it('pastes HTML clean, and Markdown as formats', async () => {
    const { host, content, stable } = await setup();
    await userEvent.click(content);
    const paste = (type: string, data: string) => {
      const transfer = new DataTransfer();
      transfer.setData(type, data);
      content.dispatchEvent(
        new ClipboardEvent('paste', { clipboardData: transfer, bubbles: true, cancelable: true }),
      );
    };
    paste('text/html', '<p style="color:red">Hi <b>there</b><script>alert(1)</script></p>');
    await stable();
    expect(host.value()).toBe('<p>Hi <strong>there</strong></p>');
    paste('text/plain', '\n\n- one\n- two');
    await stable();
    expect(host.value()).toBe('<p>Hi <strong>there</strong></p><ul><li>one</li><li>two</li></ul>');
  });

  it('shows a value from outside, and writes Markdown', async () => {
    const { host, content, fixture, stable } = await setup((h) => h.format.set('markdown'));
    host.value.set('# Title\n\nSome *text*');
    await stable();
    expect(content.querySelector('h1')!.textContent).toBe('Title');
    expect(content.querySelector('em')!.textContent).toBe('text');
    expect(content.hasAttribute('data-empty')).toBe(false);
    await userEvent.click(content.querySelector('em')!);
    await userEvent.keyboard('{End}!');
    await fixture.whenStable();
    // Text typed at the end of a format goes on in it.
    expect(host.value()).toBe('# Title\n\nSome *text!*');
  });

  it('adds links from its popover', async () => {
    const { host, root, content, stable } = await setup();
    await userEvent.type(content, 'Read the docs');
    await userEvent.keyboard('{Shift>}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{/Shift}');
    await userEvent.keyboard(`{${mod}>}k{/${mod}}`);
    await stable();
    const input = root.querySelector<HTMLInputElement>('.nui-editor-link-input')!;
    expect(document.activeElement).toBe(input);
    await userEvent.keyboard('example.com/docs{Enter}');
    await stable();
    expect(host.value()).toBe('<p>Read the <a href="https://example.com/docs">docs</a></p>');
    expect(document.activeElement).toBe(content);
  });

  it('shows the content without editing it when read-only', async () => {
    const { root, content, host, stable } = await setup((h) => h.readonly.set(true));
    host.value.set('<p>Fixed</p>');
    await stable();
    expect(content.getAttribute('contenteditable')).toBe('false');
    expect(root.querySelector('[role="toolbar"]')).toBeNull();
    expect(content.textContent).toBe('Fixed');
  });
});
