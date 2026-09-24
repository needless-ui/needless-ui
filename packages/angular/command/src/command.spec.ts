import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { nuiIsApple } from '@needless-ui/angular';
import { userEvent } from 'vitest/browser';
import { type NuiCommand, NuiCommandPalette } from './command';

@Component({
  imports: [NuiCommandPalette],
  template: `
    <button id="opener">Open</button>
    <nui-command-palette
      bindShortcuts
      [commands]="commands"
      [(open)]="open"
      (run)="ran.push($event.id!)"
    />
  `,
})
class Host {
  readonly open = signal(false);
  readonly ran: string[] = [];
  readonly themes: string[] = [];
  readonly commands: NuiCommand[] = [
    { id: 'new', label: 'New file', group: 'File', shortcut: 'mod+alt+n' },
    { id: 'save', label: 'Save', group: 'File', shortcut: 'mod+s', keywords: ['write'] },
    {
      id: 'theme',
      label: 'Change theme',
      group: 'View',
      children: [
        { id: 'light', label: 'Light', run: () => this.themes.push('light') },
        { id: 'dark', label: 'Dark', run: () => this.themes.push('dark') },
      ],
    },
    { id: 'off', label: 'Unavailable', group: 'View', disabled: true },
  ];
}

const mod = nuiIsApple() ? 'Meta' : 'Control';

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const settle = async () => {
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();
  };
  const dialog = root.querySelector<HTMLDialogElement>('dialog.nui-command')!;
  return {
    fixture,
    host: fixture.componentInstance,
    settle,
    dialog,
    opener: root.querySelector<HTMLButtonElement>('#opener')!,
    input: () => dialog.querySelector<HTMLInputElement>('.nui-command-input')!,
    labels: () =>
      [...dialog.querySelectorAll('.nui-select-option-label')].map((label) =>
        label.textContent!.trim(),
      ),
    active: () => dialog.querySelector<HTMLElement>('.nui-select-option[data-active]'),
  };
}

describe('NuiCommandPalette', () => {
  it('opens from the hotkey on a search field that drives the list, and runs a command', async () => {
    const { host, settle, dialog, opener, input, labels, active } = await setup();
    opener.focus();
    await userEvent.keyboard(`{${mod}>}k{/${mod}}`);
    await settle();
    expect(dialog.open).toBe(true);
    expect(dialog.getAttribute('aria-label')).toBe('Command palette');
    expect(document.activeElement).toBe(input());
    expect(input().getAttribute('role')).toBe('combobox');
    expect(input().getAttribute('aria-expanded')).toBe('true');
    expect(input().getAttribute('aria-controls')).toBe(
      dialog.querySelector('[role="listbox"]')!.id,
    );
    expect(labels()).toEqual(['New file', 'Save', 'Change theme', 'Unavailable']);
    expect(dialog.querySelectorAll('.nui-select-group').length).toBe(2);
    const keys = [...active()!.querySelectorAll('kbd')].map((key) => key.textContent);
    expect(keys).toEqual(nuiIsApple() ? ['⌥', '⌘', 'N'] : ['Ctrl', 'Alt', 'N']);

    await userEvent.keyboard('wri');
    await settle();
    expect(labels()).toEqual(['Save']);
    expect(input().getAttribute('aria-activedescendant')).toBe(active()!.id);
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.ran).toEqual(['save']);
    expect(dialog.open).toBe(false);
    expect(document.activeElement).toBe(opener);
  });

  it('opens pages, searches inside them from the top, and goes back', async () => {
    const { host, settle, dialog, input, labels, active } = await setup();
    host.open.set(true);
    await settle();
    await userEvent.keyboard('dark');
    await settle();
    expect(labels()).toEqual(['Dark']);
    expect(active()!.querySelector('.nui-select-path')?.textContent).toBe('Change theme');
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.themes).toEqual(['dark']);
    expect(host.ran).toEqual(['dark']);

    host.open.set(true);
    await settle();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    await settle();
    expect(dialog.querySelector('.nui-command-page')?.textContent).toBe('Change theme');
    expect(input().getAttribute('aria-label')).toBe('Change theme');
    expect(labels()).toEqual(['Light', 'Dark']);
    expect(document.activeElement).toBe(input());

    // Escape on a page goes back instead of closing.
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(dialog.open).toBe(true);
    expect(labels()).toContain('New file');
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}{Backspace}');
    await settle();
    expect(labels()).toContain('New file');
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(dialog.open).toBe(false);
  });

  it('goes around the ends and never runs a disabled command', async () => {
    const { host, settle, dialog, labels, active } = await setup();
    host.open.set(true);
    await settle();
    expect(labels().length).toBe(4);
    await userEvent.keyboard('{ArrowUp}');
    await settle();
    expect(active()!.textContent).toContain('Unavailable');
    expect(active()!.getAttribute('aria-disabled')).toBe('true');
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(dialog.open).toBe(true);
    expect(host.ran).toEqual([]);
    await userEvent.keyboard('{ArrowDown}');
    await settle();
    expect(active()!.textContent).toContain('New file');
  });

  it('runs commands by their shortcuts when bindShortcuts is on', async () => {
    const { host, settle, dialog } = await setup();
    await userEvent.keyboard(`{${mod}>}s{/${mod}}`);
    await settle();
    expect(host.ran).toEqual(['save']);
    expect(dialog.open).toBe(false);
  });
});
