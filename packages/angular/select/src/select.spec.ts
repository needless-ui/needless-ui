import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import type { NuiOption } from './engine';
import { NuiSelect } from './select';

/** Makes this a touch screen with nothing that hovers, as a phone is, until restored. */
function touchScreen() {
  const real = window.matchMedia.bind(window);
  return vi.spyOn(window, 'matchMedia').mockImplementation((query: string) =>
    query === '(hover: none) and (pointer: coarse)'
      ? ({
          matches: true,
          media: query,
          onchange: null,
          addEventListener: () => undefined,
          removeEventListener: () => undefined,
          addListener: () => undefined,
          removeListener: () => undefined,
          dispatchEvent: () => false,
        } as MediaQueryList)
      : real(query),
  );
}

const fruits: NuiOption<string>[] = [
  { value: 'apple', label: 'Apple', group: 'Pome' },
  { value: 'pear', label: 'Pear', group: 'Pome' },
  { value: 'cherry', label: 'Cherry', group: 'Drupe' },
  { value: 'peach', label: 'Peach', group: 'Drupe', disabled: true },
  { value: 'plum', label: 'Plum', group: 'Drupe' },
];

const places: NuiOption<string>[] = [
  {
    value: 'europe',
    label: 'Europe',
    children: [
      { value: 'it', label: 'Italy', children: [{ value: 'rome', label: 'Rome' }] },
      { value: 'ch', label: 'Switzerland' },
    ],
  },
  { value: 'asia', label: 'Asia', children: [{ value: 'jp', label: 'Japan' }] },
];

const many: NuiOption<number>[] = Array.from({ length: 10_000 }, (_, i) => ({
  value: i,
  label: `Item ${i}`,
}));

@Component({
  imports: [NuiSelect, ReactiveFormsModule],
  template: `
    <nui-select id="single" label="Fruit" [options]="fruits" [(value)]="fruit" />
    <nui-select
      id="multiple"
      label="Fruits"
      multiple
      selectAll
      [options]="fruits"
      [(values)]="picked"
    />
    <nui-select id="tree" label="Place" [options]="places" [(value)]="place" />
    <nui-select id="many" label="Item" [options]="many" [formControl]="item" />
  `,
})
class Host {
  readonly fruits = fruits;
  readonly places = places;
  readonly many = many;
  readonly fruit = signal<string | null>('pear');
  readonly picked = signal<readonly string[]>([]);
  readonly place = signal<string | null>(null);
  readonly item = new FormControl<number | null>(null);
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
      trigger: host.querySelector<HTMLButtonElement>('.nui-select-trigger')!,
      popup: host.querySelector<HTMLElement>('.nui-select-popup')!,
      list: () => host.querySelector<HTMLElement>('.nui-select-list')!,
      options: () => [...host.querySelectorAll<HTMLElement>('.nui-select-option')],
      labels: () =>
        [...host.querySelectorAll<HTMLElement>('.nui-select-option-label')].map((label) =>
          label.textContent!.trim(),
        ),
      active: () => host.querySelector<HTMLElement>('.nui-select-option[data-active]'),
    };
  };
  return { fixture, host: fixture.componentInstance, settle, part };
}

describe('NuiSelect', () => {
  it('is a select-only combobox that opens with the chosen option active', async () => {
    const { host, settle, part } = await setup();
    const { trigger, popup, list, active } = part('single');
    expect(trigger.getAttribute('role')).toBe('combobox');
    expect(trigger.getAttribute('aria-haspopup')).toBe('listbox');
    expect(trigger.textContent).toContain('Pear');
    // Closed, the list isn't rendered at all.
    expect(list()).toBeNull();
    expect(trigger.hasAttribute('aria-controls')).toBe(false);

    await userEvent.click(trigger);
    await settle();
    expect(popup.matches(':popover-open')).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(trigger.getAttribute('aria-controls')).toBe(list().id);
    expect(list().getAttribute('role')).toBe('listbox');
    expect(list().querySelectorAll('.nui-select-group').length).toBe(2);
    expect(active()?.textContent).toContain('Pear');
    expect(active()?.getAttribute('aria-selected')).toBe('true');
    expect(trigger.getAttribute('aria-activedescendant')).toBe(active()?.id);

    // Down skips the heading; a disabled option can be active but not chosen.
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await settle();
    expect(active()?.textContent).toContain('Peach');
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(popup.matches(':popover-open')).toBe(true);
    expect(host.fruit()).toBe('pear');

    await userEvent.keyboard('{ArrowDown}{Enter}');
    await settle();
    expect(host.fruit()).toBe('plum');
    expect(popup.matches(':popover-open')).toBe(false);
    expect(document.activeElement).toBe(trigger);
    expect(trigger.textContent).toContain('Plum');
  });

  it('jumps to typed letters and closes on Escape without choosing', async () => {
    const { host, settle, part } = await setup();
    const { trigger, popup, active } = part('single');
    trigger.focus();
    await userEvent.keyboard('c');
    await settle();
    expect(popup.matches(':popover-open')).toBe(true);
    expect(active()?.textContent).toContain('Cherry');
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(popup.matches(':popover-open')).toBe(false);
    expect(host.fruit()).toBe('pear');
  });

  it('chooses many options, and all of them at once', async () => {
    const { host, settle, part } = await setup();
    const { trigger, popup, list, options } = part('multiple');
    await userEvent.click(trigger);
    await settle();
    expect(list().getAttribute('aria-multiselectable')).toBe('true');

    await userEvent.click(options()[0]);
    await userEvent.click(options()[2]);
    await settle();
    expect(host.picked()).toEqual(['apple', 'cherry']);
    expect(popup.matches(':popover-open')).toBe(true);
    expect(trigger.textContent).toContain('Apple, Cherry');

    const all = popup.querySelector<HTMLButtonElement>('.nui-select-all')!;
    await userEvent.click(all);
    await settle();
    expect(host.picked()).toEqual(['apple', 'cherry', 'pear', 'plum']);
    expect(all.textContent).toContain('Clear all');
    await userEvent.click(all);
    await settle();
    expect(host.picked()).toEqual([]);
  });

  it('is a tree when options have children', async () => {
    const { host, settle, part } = await setup();
    const { trigger, list, labels, active } = part('tree');
    expect(trigger.getAttribute('aria-haspopup')).toBe('tree');
    await userEvent.click(trigger);
    await settle();
    expect(list().getAttribute('role')).toBe('tree');
    expect(labels()).toEqual(['Europe', 'Asia']);
    expect(active()?.getAttribute('role')).toBe('treeitem');
    expect(active()?.getAttribute('aria-level')).toBe('1');
    expect(active()?.getAttribute('aria-expanded')).toBe('false');

    await userEvent.keyboard('{ArrowRight}');
    await settle();
    expect(labels()).toEqual(['Europe', 'Italy', 'Switzerland', 'Asia']);
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    await settle();
    expect(active()?.textContent).toContain('Italy');
    expect(active()?.getAttribute('aria-level')).toBe('2');
    expect(labels()).toContain('Rome');
    // ← collapses, then goes up to the parent.
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    await settle();
    expect(active()?.textContent).toContain('Europe');
    expect(labels()).not.toContain('Rome');

    await userEvent.keyboard('{Escape}');
    host.place.set('rome');
    await settle();
    await userEvent.click(trigger);
    await settle();
    expect(active()?.textContent).toContain('Rome');
  });

  it('renders only the rows in view of a long list, and works with forms', async () => {
    const { host, settle, part } = await setup();
    const { trigger, options, active } = part('many');
    await userEvent.click(trigger);
    await settle();
    expect(options().length).toBeGreaterThan(5);
    expect(options().length).toBeLessThan(100);
    expect(options()[0].getAttribute('aria-setsize')).toBe('10000');

    await userEvent.keyboard('{End}');
    await settle();
    expect(active()?.textContent).toContain('Item 9999');
    // The rows between the top and the end are never rendered, not even for a frame.
    expect(options().length).toBeLessThan(100);
    expect(active()?.getAttribute('aria-posinset')).toBe('10000');
    expect(document.getElementById(trigger.getAttribute('aria-activedescendant')!)).toBe(active());
    await userEvent.keyboard('{Enter}');
    await settle();
    expect(host.item.value).toBe(9999);

    host.item.disable();
    await settle();
    expect(trigger.disabled).toBe(true);
  });
});

@Component({
  imports: [NuiSelect],
  template: `
    <nui-select id="short" label="Fruit" [options]="fruits" [(value)]="fruit" />
    <nui-select id="long" label="Item" [options]="many" [(value)]="item" />
    <nui-select
      id="always"
      label="Fruit"
      search
      searchLabel="Find a fruit"
      [options]="fruits"
      [(value)]="fruit"
    />
  `,
})
class SearchHost {
  readonly fruits = fruits;
  readonly many = many;
  readonly fruit = signal<string | null>(null);
  readonly item = signal<number | null>(null);
}

describe('NuiSelect search', () => {
  async function open(id: string) {
    const fixture = TestBed.createComponent(SearchHost);
    await fixture.whenStable();
    const host = fixture.nativeElement.querySelector(`#${id}`) as HTMLElement;
    const settle = async () => {
      await new Promise((resolve) => setTimeout(resolve));
      await fixture.whenStable();
    };
    const trigger = host.querySelector<HTMLButtonElement>('.nui-select-trigger')!;
    return {
      fixture,
      settle,
      trigger,
      popup: host.querySelector<HTMLElement>('.nui-select-popup')!,
      field: () => host.querySelector<HTMLInputElement>('.nui-select-search'),
      active: () => host.querySelector<HTMLElement>('.nui-select-option[data-active]'),
      labels: () =>
        [...host.querySelectorAll<HTMLElement>('.nui-select-option-label')].map((label) =>
          label.textContent!.trim(),
        ),
    };
  }

  afterEach(() => vi.restoreAllMocks());

  it('searches long lists on touch screens, and waits for a tap to bring up the keyboard', async () => {
    touchScreen();
    const long = await open('long');
    await userEvent.click(long.trigger);
    await long.settle();
    const field = long.field()!;
    expect(field).not.toBeNull();
    expect(field.getAttribute('aria-label')).toBe('Search');
    expect(field.getAttribute('aria-controls')).toBe(long.trigger.getAttribute('aria-controls'));
    // Focus stays on the trigger: focusing the field would bring up a phone's keyboard.
    expect(document.activeElement).toBe(long.trigger);

    await userEvent.click(field);
    await userEvent.keyboard('Item 9999');
    await long.settle();
    expect(long.active()?.textContent).toContain('Item 9999');
    expect(field.getAttribute('aria-activedescendant')).toBe(long.active()?.id);
    await userEvent.keyboard('{Enter}');
    await long.settle();
    expect(long.fixture.componentInstance.item()).toBe(9999);
    expect(long.popup.matches(':popover-open')).toBe(false);
    expect(document.activeElement).toBe(long.trigger);

    // The next opening starts from the whole list.
    await userEvent.click(long.trigger);
    await long.settle();
    expect(long.field()!.value).toBe('');
  });

  it('leaves short lists, and screens with keys, to type-to-jump', async () => {
    touchScreen();
    const short = await open('short');
    await userEvent.click(short.trigger);
    await short.settle();
    expect(short.popup.matches(':popover-open')).toBe(true);
    expect(short.field()).toBeNull();
    vi.restoreAllMocks();

    const long = await open('long');
    await userEvent.click(long.trigger);
    await long.settle();
    expect(long.popup.matches(':popover-open')).toBe(true);
    expect(long.field()).toBeNull();
  });

  it('shows the field when asked, and takes letters typed on the trigger into it', async () => {
    const always = await open('always');
    always.trigger.focus();
    await userEvent.keyboard('c');
    await always.settle();
    const field = always.field()!;
    expect(field.getAttribute('aria-label')).toBe('Find a fruit');
    expect(document.activeElement).toBe(field);
    await userEvent.keyboard('h');
    await always.settle();
    expect(field.value).toBe('ch');
    expect(always.labels()[0]).toBe('Cherry');
    expect(always.active()?.textContent).toContain('Cherry');

    await userEvent.keyboard('{Escape}');
    await always.settle();
    expect(always.popup.matches(':popover-open')).toBe(false);
    expect(document.activeElement).toBe(always.trigger);
    expect(always.fixture.componentInstance.fruit()).toBeNull();
  });
});
