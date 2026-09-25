import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it, onTestFinished, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import { NUI_EDITOR_TOOLS, NuiEditor, type NuiEditorTool } from './editor';

@Component({
  imports: [NuiEditor],
  template: `
    <nui-editor
      label="Message"
      placeholder="Write something…"
      [format]="format()"
      [readonly]="readonly()"
      [tools]="tools()"
      [(value)]="value"
    />
  `,
})
class Host {
  readonly value = signal('');
  readonly format = signal<'html' | 'markdown'>('html');
  readonly readonly = signal(false);
  readonly tools = signal<readonly NuiEditorTool[]>(NUI_EDITOR_TOOLS);
}

const mac = /Mac|iPhone|iPad/.test(navigator.platform);
const mod = mac ? 'Meta' : 'Control';
// Home and End scroll on Apple platforms; there the Command arrows move along the line.
const lineStart = mac ? '{Meta>}{ArrowLeft}{/Meta}' : '{Home}';
const lineEnd = mac ? '{Meta>}{ArrowRight}{/Meta}' : '{End}';

/** A paste of `data`. Firefox ignores `clipboardData` given to the event's constructor. */
function pasteEvent(data: DataTransfer): ClipboardEvent {
  const event = new ClipboardEvent('paste', { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'clipboardData', { value: data });
  return event;
}

/** A screen that is touch first (a phone, a tablet on its own) or not, and can change. */
function touchScreen(touch: boolean) {
  const query = Object.assign(new EventTarget(), { matches: touch });
  const real = window.matchMedia.bind(window);
  const spy = vi
    .spyOn(window, 'matchMedia')
    .mockImplementation((media) =>
      media === '(hover: none) and (pointer: coarse)'
        ? (query as unknown as MediaQueryList)
        : real(media),
    );
  onTestFinished(() => spy.mockRestore());
  return {
    change(now: boolean) {
      query.matches = now;
      query.dispatchEvent(new Event('change'));
    },
  };
}

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
    // With nothing to undo, Undo says so, and stays in the toolbar's arrow-key order.
    const undo = root.querySelector('[data-tool="undo"]')!;
    expect(undo.getAttribute('aria-disabled')).toBe('true');
    expect(undo.hasAttribute('disabled')).toBe(false);
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

  it('indents and outdents list items from its toolbar', async () => {
    const { host, content, tool, stable } = await setup((h) =>
      h.tools.set(['bullet', 'ordered', 'outdent', 'indent']),
    );
    // Listed in `tools`, they show on every screen, and name their keys.
    expect(tool('indent').hasAttribute('data-touch')).toBe(false);
    expect(tool('indent').getAttribute('aria-label')).toBe('Indent');
    expect(tool('indent').getAttribute('aria-keyshortcuts')).toBe('Tab');
    expect(tool('outdent').getAttribute('aria-keyshortcuts')).toBe('Shift+Tab');
    expect(tool('outdent').hasAttribute('aria-pressed')).toBe(false);
    // Outside a list, there's nothing for them to do.
    expect(tool('indent').getAttribute('aria-disabled')).toBe('true');
    expect(tool('outdent').getAttribute('aria-disabled')).toBe('true');
    await userEvent.type(content, '- one{Enter}two');
    await stable();
    expect(tool('indent').getAttribute('aria-disabled')).toBe('false');
    await userEvent.click(tool('indent'));
    await stable();
    expect(host.value()).toBe('<ul><li>one<ul><li>two</li></ul></li></ul>');
    expect(document.activeElement).toBe(content);
    await userEvent.click(tool('outdent'));
    await stable();
    expect(host.value()).toBe('<ul><li>one</li><li>two</li></ul>');
    // From the top level, the item leaves the list, as Backspace does.
    await userEvent.click(tool('outdent'));
    await stable();
    expect(host.value()).toBe('<ul><li>one</li></ul><p>two</p>');
    expect(tool('outdent').getAttribute('aria-disabled')).toBe('true');
    // A tap on a tool that can't act changes nothing, and leaves the keyboard up.
    // (Playwright waits for aria-disabled buttons to be enabled, unless forced.)
    await userEvent.click(tool('outdent'), { force: true });
    await stable();
    expect(host.value()).toBe('<ul><li>one</li></ul><p>two</p>');
    expect(document.activeElement).toBe(content);
    // The caret stayed where it was.
    await userEvent.keyboard('!');
    await stable();
    expect(host.value()).toBe('<ul><li>one</li></ul><p>two!</p>');
  });

  it('indents with Tab, and outdents with Shift+Tab out of the list', async () => {
    const { host, content, stable } = await setup();
    await userEvent.type(content, '- one{Enter}two{Tab}');
    await stable();
    expect(host.value()).toBe('<ul><li>one<ul><li>two</li></ul></li></ul>');
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
    await stable();
    expect(host.value()).toBe('<ul><li>one</li></ul><p>two</p>');
    expect(document.activeElement).toBe(content);
    // Each level was a step to undo.
    await userEvent.keyboard(`{${mod}>}z{/${mod}}`);
    await stable();
    expect(host.value()).toBe('<ul><li>one</li><li>two</li></ul>');
  });

  it('shows Indent and Outdent by default on touch screens only', async () => {
    const screen = touchScreen(false);
    const { root, tool, stable } = await setup();
    // A computer has Tab and Shift+Tab: the default toolbar drops them.
    expect(root.querySelector('[data-tool="indent"]')).toBeNull();
    expect(root.querySelector('[data-tool="outdent"]')).toBeNull();
    // A tablet without its keyboard and trackpad gets them, after the lists.
    screen.change(true);
    await stable();
    expect(tool('outdent').hasAttribute('data-touch')).toBe(true);
    expect(tool('ordered').nextElementSibling).toBe(tool('outdent'));
    expect(tool('outdent').nextElementSibling).toBe(tool('indent'));
    screen.change(false);
    await stable();
    expect(root.querySelector('[data-tool="indent"]')).toBeNull();
  });

  it('keeps its toolbar in the tab order as the touch tools come and go', async () => {
    const screen = touchScreen(true);
    const { root, content, tool, stable } = await setup();
    await userEvent.type(content, 'Hi');
    // A tap makes Undo the toolbar's tab stop; then a keyboard and trackpad arrive.
    await userEvent.click(tool('undo'));
    screen.change(false);
    await stable();
    expect(root.querySelectorAll('[role="toolbar"] [tabindex="0"]')).toEqual(
      root.querySelectorAll('[data-tool="undo"]'),
    );
  });

  it('deletes across formats and joins blocks with Backspace', async () => {
    const { host, content, stable } = await setup();
    await userEvent.type(content, '> quote{Enter}{Enter}after');
    await stable();
    expect(host.value()).toBe('<blockquote><p>quote</p></blockquote><p>after</p>');
    await userEvent.keyboard(`${lineStart}{Backspace}`);
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
      content.dispatchEvent(pasteEvent(transfer));
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
    await userEvent.keyboard(`${lineEnd}!`);
    await fixture.whenStable();
    // Text typed at the end of a format goes on in it.
    expect(host.value()).toBe('# Title\n\nSome *text!*');
  });

  it('reads words an input method composes, and types on after them', async () => {
    const { host, content, stable } = await setup();
    await userEvent.click(content);
    // As Android keyboards do for every word: the browser writes the text itself.
    const compose = async (word: string) => {
      content.dispatchEvent(new CompositionEvent('compositionstart', { bubbles: true }));
      const block = content.lastElementChild!;
      const text = document.createTextNode(word);
      block.insertBefore(text, block.querySelector('br'));
      getSelection()!.collapse(text, word.length);
      content.dispatchEvent(
        new InputEvent('input', {
          bubbles: true,
          isComposing: true,
          inputType: 'insertCompositionText',
          data: word,
        }),
      );
      content.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, data: word }));
      await stable();
    };
    await compose('Dear');
    await userEvent.keyboard(' ');
    await compose('Ada');
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('Hi');
    await stable();
    expect(host.value()).toBe('<p>Dear Ada</p><p>Hi</p>');
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
    // Clicked, the button opens the form again on the link the caret is in.
    await userEvent.click(root.querySelector('[data-tool="link"]')!);
    await stable();
    expect(document.activeElement).toBe(input);
    expect(input.value).toBe('https://example.com/docs');
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
