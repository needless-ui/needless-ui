import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { nuiOnCloseRequest } from '@needless-ui/angular';
import { userEvent } from 'vitest/browser';
import { closeRequest, hasCloseWatcher, withoutCloseWatcher } from '../../src/testing';
import { NuiCombobox } from './combobox';
import type { NuiOption } from './engine';

const countries: NuiOption<string>[] = [
  { value: 'it', label: 'Italy' },
  { value: 'ie', label: 'Ireland' },
  { value: 'is', label: 'Iceland' },
  { value: 'ch', label: 'Switzerland' },
  { value: 'jp', label: 'Japan' },
];

@Component({
  imports: [NuiCombobox],
  template: `
    <nui-combobox id="single" label="Country" clearable [options]="countries" [(value)]="country" />
    <nui-combobox
      id="tags"
      label="Tags"
      multiple
      [options]="tags"
      [create]="newTag"
      [(values)]="picked"
    />
    <nui-combobox
      id="remote"
      label="User"
      [options]="users()"
      [filtering]="false"
      [loading]="loading()"
      (queryChange)="queries.push($event)"
      [(value)]="user"
    />
  `,
})
class Host {
  readonly countries = countries;
  readonly country = signal<string | null>(null);
  readonly tags: NuiOption<string>[] = [
    { value: 'bug', label: 'bug' },
    { value: 'docs', label: 'docs' },
    { value: 'feature', label: 'feature' },
  ];
  readonly picked = signal<readonly string[]>([]);
  readonly newTag = (text: string) => text.toLowerCase();
  readonly users = signal<NuiOption<number>[]>([]);
  readonly loading = signal(false);
  readonly queries: string[] = [];
  readonly user = signal<number | null>(null);
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  // Popover toggle events arrive in a task of their own.
  const settle = async () => {
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();
  };
  const part = (id: string) => {
    const host = root.querySelector<HTMLElement>(`#${id}`)!;
    return {
      host,
      input: host.querySelector<HTMLInputElement>('.nui-combobox-input')!,
      popup: host.querySelector<HTMLElement>('.nui-select-popup')!,
      list: () => host.querySelector<HTMLElement>('.nui-select-list')!,
      labels: () =>
        [...host.querySelectorAll<HTMLElement>('.nui-select-option-label')].map((label) =>
          label.textContent!.trim(),
        ),
      chips: () =>
        [...host.querySelectorAll<HTMLElement>('.nui-select-chip')].map((chip) =>
          chip.textContent!.trim(),
        ),
      active: () => host.querySelector<HTMLElement>('.nui-select-option[data-active]'),
    };
  };
  return { fixture, host: fixture.componentInstance, settle, part };
}

describe('NuiCombobox', () => {
  it('suggests options as you type, with the matches marked, and picks with Enter', async () => {
    const { host, settle, part } = await setup();
    const { input, popup, list, labels, active } = part('single');
    expect(input.getAttribute('role')).toBe('combobox');
    expect(input.getAttribute('aria-autocomplete')).toBe('list');
    expect(input.hasAttribute('aria-controls')).toBe(false);

    await userEvent.type(input, 'ice');
    await settle();
    expect(popup.matches(':popover-open')).toBe(true);
    expect(input.getAttribute('aria-controls')).toBe(list().id);
    expect(labels()).toEqual(['Iceland']);
    expect(active()?.querySelector('mark')?.textContent).toBe('Ice');
    expect(input.getAttribute('aria-activedescendant')).toBe(active()?.id);
    expect(document.activeElement).toBe(input);

    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.country()).toBe('is');
    expect(input.value).toBe('Iceland');
    expect(popup.matches(':popover-open')).toBe(false);
  });

  it('shows its value again when left unfinished, and Escape clears it', async () => {
    const { host, settle, part } = await setup();
    const { input, popup, labels } = part('single');
    host.country.set('it');
    await settle();
    expect(input.value).toBe('Italy');

    await userEvent.fill(input, 'Jap');
    await settle();
    expect(labels()).toEqual(['Japan']);
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(popup.matches(':popover-open')).toBe(false);
    expect(input.value).toBe('Italy');
    expect(host.country()).toBe('it');

    await userEvent.keyboard('{Escape}');
    await settle();
    expect(host.country()).toBe(null);
    expect(input.value).toBe('');

    // A press outside closes the list.
    await userEvent.click(input);
    await expect.poll(() => popup.matches(':popover-open')).toBe(true);
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    await settle();
    expect(popup.matches(':popover-open')).toBe(false);
  });

  it('adds chips, creates new ones from text, and removes them from the keyboard', async () => {
    const { host, settle, part } = await setup();
    const { host: field, input, popup, labels, chips } = part('tags');

    await userEvent.type(input, 'doc');
    await settle();
    expect(labels()).toEqual(['docs', 'Add “doc”']);
    // The "Add …" row is an action, drawn with a plus rather than a checkbox.
    expect(field.querySelector('.nui-select-option[data-action]')?.textContent).toContain(
      'Add “doc”',
    );
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.picked()).toEqual(['docs']);
    expect(chips()).toEqual(['docs']);
    // The list stays open for more, with every option back.
    expect(popup.matches(':popover-open')).toBe(true);
    expect(input.value).toBe('');
    expect(labels()).toEqual(['bug', 'docs', 'feature']);

    await userEvent.keyboard('Needs Review');
    await settle();
    expect(labels().at(-1)).toBe('Add “Needs Review”');
    await userEvent.keyboard('{ArrowUp}{Enter}');
    await settle();
    expect(host.picked()).toEqual(['docs', 'needs review']);
    expect(chips()).toEqual(['docs', 'Needs Review']);
    expect(field.querySelector('[role="list"]')?.getAttribute('aria-label')).toBe('Selected');
    expect(field.querySelector('.nui-select-chip-remove')?.getAttribute('aria-label')).toBe(
      'Remove docs',
    );

    await userEvent.keyboard('{Backspace}');
    await settle();
    expect(host.picked()).toEqual(['docs']);
    await userEvent.keyboard('{ArrowLeft}');
    expect(document.activeElement?.getAttribute('aria-label')).toBe('Remove docs');
    await userEvent.keyboard('{Delete}');
    await settle();
    expect(host.picked()).toEqual([]);
    expect(document.activeElement).toBe(input);
  });

  it('leaves searching to the server and keeps the chosen label when the list changes', async () => {
    const { host, settle, part } = await setup();
    const { input, labels, popup } = part('remote');

    host.loading.set(true);
    await userEvent.type(input, 'ad');
    await settle();
    expect(host.queries).toEqual(['a', 'ad']);
    expect(popup.querySelector('.nui-select-loading')?.getAttribute('role')).toBe('status');

    host.users.set([
      { value: 1, label: 'Ada Lovelace' },
      { value: 2, label: 'Grace Hopper' },
    ]);
    host.loading.set(false);
    await settle();
    // No filtering here: the server already did it.
    expect(labels()).toEqual(['Ada Lovelace', 'Grace Hopper']);
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.user()).toBe(1);

    host.users.set([]);
    await settle();
    expect(input.value).toBe('Ada Lovelace');
  });

  it.runIf(hasCloseWatcher)(
    'closes the list on a close request as on Escape, focus staying in the field',
    async () => {
      const { host, settle, part } = await setup();
      const { input, popup } = part('single');
      host.country.set('it');
      await settle();

      await userEvent.fill(input, 'Jap');
      await settle();
      expect(popup.matches(':popover-open')).toBe(true);
      await closeRequest();
      await settle();
      expect(popup.matches(':popover-open')).toBe(false);
      expect(input.getAttribute('aria-expanded')).toBe('false');
      expect(input.value).toBe('Italy');
      expect(host.country()).toBe('it');
      expect(document.activeElement).toBe(input);
    },
  );

  it.runIf(hasCloseWatcher)(
    'closes once on Escape, and lets go of its watcher however the list closes',
    async () => {
      // A watcher behind the field, as a dialog it's in has.
      let behind = 0;
      const stop = nuiOnCloseRequest(() => behind++);
      try {
        const { host, settle, part } = await setup();
        const { input, popup } = part('single');

        await userEvent.type(input, 'ice');
        await settle();
        await userEvent.keyboard('{Escape}');
        await settle();
        expect(popup.matches(':popover-open')).toBe(false);
        expect(behind).toBe(0);

        // Closed by choosing, the list leaves close requests to what's behind it.
        await userEvent.type(input, 'ice');
        await settle();
        await userEvent.keyboard('{Enter}');
        await settle();
        expect(host.country()).toBe('is');
        expect(popup.matches(':popover-open')).toBe(false);
        await closeRequest();
        expect(behind).toBe(1);
      } finally {
        stop();
      }
    },
  );

  it('closes on Escape alone where the browser has no CloseWatcher', async () => {
    await withoutCloseWatcher(async () => {
      const { settle, part } = await setup();
      const { input, popup } = part('single');
      await userEvent.type(input, 'ice');
      await settle();

      await closeRequest();
      await settle();
      expect(popup.matches(':popover-open')).toBe(true);
      await userEvent.keyboard('{Escape}');
      await settle();
      expect(popup.matches(':popover-open')).toBe(false);
    });
  });
});
