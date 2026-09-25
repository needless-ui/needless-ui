import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { userEvent } from 'vitest/browser';
import { NuiGrid } from './grid';
import type { NuiGridColumn, NuiGridFilter, NuiGridSort } from './types';

interface Sale {
  id: number;
  city: string;
  region: string;
  amount: number;
  note: string;
  code: string;
}

const sales: Sale[] = [
  { id: 1, city: 'Milan', region: 'Europe', amount: 100, note: 'b', code: 'MI' },
  { id: 2, city: 'Tokyo', region: 'Asia', amount: 300, note: 'a', code: 'TY' },
  { id: 3, city: 'Paris', region: 'Europe', amount: 50, note: 'c', code: 'PA' },
  { id: 4, city: 'Seoul', region: 'Asia', amount: 25, note: 'd', code: 'SE' },
];

const columns: NuiGridColumn<Sale>[] = [
  { id: 'city', header: 'City' },
  { id: 'region', header: 'Region' },
  { id: 'amount', header: 'Amount', type: 'number' },
  { id: 'note', header: 'Note', sortable: false, filterable: false },
  { id: 'code', header: 'Code', hidden: true },
];

@Component({
  imports: [NuiGrid],
  template: `
    <nui-grid
      label="Sales"
      [rows]="rows"
      [columns]="columns"
      [layout]="layout()"
      [toolbar]="toolbar()"
      [(sort)]="sort"
      [(filters)]="filters"
    />
  `,
})
class Host {
  readonly rows = sales;
  readonly columns = columns;
  readonly layout = signal<'table' | 'list'>('list');
  /** `''` is the bare attribute, `<nui-grid toolbar>`. */
  readonly toolbar = signal<boolean | 'auto' | ''>('auto');
  readonly sort = signal<readonly NuiGridSort[]>([]);
  readonly filters = signal<Readonly<Record<string, NuiGridFilter>>>({});
}

async function setup(change?: (host: Host) => void) {
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const settle = async () => {
    await new Promise((resolve) => setTimeout(resolve, 20));
    await fixture.whenStable();
  };
  await settle();
  const select = () => root.querySelector<HTMLSelectElement>('.nui-grid-sort-by select')!;
  return {
    host: fixture.componentInstance,
    grid: fixture.debugElement.children[0].componentInstance as NuiGrid<Sale>,
    root,
    settle,
    select,
    toolbar: () => root.querySelector<HTMLElement>('.nui-grid-toolbar'),
    direction: (direction: 'asc' | 'desc') =>
      root.querySelector<HTMLButtonElement>(`.nui-grid-direction[data-direction="${direction}"]`)!,
    filterButton: () => root.querySelector<HTMLButtonElement>('.nui-grid-filter-button')!,
    panel: () => root.querySelector<HTMLElement>('.nui-grid-panel')!,
    cities: () =>
      [...root.querySelectorAll('tbody tr[data-index]')].map((row) =>
        row.querySelector('td')!.textContent!.trim(),
      ),
    status: () => root.querySelector('[role="status"]')!.textContent!.trim(),
    focused: () => document.activeElement as HTMLElement,
  };
}

/** An option of a select, by value: selecting by text could match another option's value. */
const option = (select: HTMLSelectElement, value: string) =>
  [...select.options].find((option) => option.value === value)!;

describe('NuiGrid cards', () => {
  it('sorts from the toolbar: a column, then its direction, and says so', async () => {
    const { host, settle, select, toolbar, direction, cities, status } = await setup();
    expect(toolbar()!.getAttribute('role')).toBe('group');
    expect(toolbar()!.getAttribute('aria-label')).toBe('Sort and filter');
    expect(select().closest('label')!.textContent).toContain('Sort by');
    // The visible columns that sort.
    expect([...select().options].map((o) => o.textContent!.trim())).toEqual([
      'None',
      'City',
      'Region',
      'Amount',
    ]);
    expect(select().value).toBe('');
    expect(direction('asc').disabled).toBe(true);

    await userEvent.selectOptions(select(), option(select(), 'amount'));
    await settle();
    expect(host.sort()).toEqual([{ column: 'amount', direction: 'asc' }]);
    expect(cities()).toEqual(['Seoul', 'Paris', 'Milan', 'Tokyo']);
    expect(direction('asc').getAttribute('aria-pressed')).toBe('true');
    expect(status()).toBe('Sorted by Amount, ascending');

    await userEvent.click(direction('desc'));
    await settle();
    expect(host.sort()).toEqual([{ column: 'amount', direction: 'desc' }]);
    expect(cities()).toEqual(['Tokyo', 'Milan', 'Paris', 'Seoul']);
    expect(direction('desc').getAttribute('aria-pressed')).toBe('true');
    expect(direction('asc').getAttribute('aria-pressed')).toBe('false');
    expect(status()).toBe('Sorted by Amount, descending');

    // Another column keeps the direction; none clears the sort.
    await userEvent.selectOptions(select(), option(select(), 'city'));
    await settle();
    expect(host.sort()).toEqual([{ column: 'city', direction: 'desc' }]);
    await userEvent.selectOptions(select(), option(select(), ''));
    await settle();
    expect(host.sort()).toEqual([]);
    expect(status()).toBe('Sort cleared');
    expect(direction('desc').disabled).toBe(true);
  });

  it('shows the first of a sort by several columns, and turns only it around', async () => {
    const { host, settle, select, direction } = await setup((h) =>
      h.sort.set([
        { column: 'code', direction: 'asc' },
        { column: 'amount', direction: 'desc' },
      ]),
    );
    // A hidden column still shows when it's the one sorted by.
    expect(select().value).toBe('code');
    expect(select().options[select().selectedIndex].textContent!.trim()).toBe('Code');
    await userEvent.click(direction('desc'));
    await settle();
    expect(host.sort()).toEqual([
      { column: 'code', direction: 'desc' },
      { column: 'amount', direction: 'desc' },
    ]);
  });

  it('opens the column panel from the toolbar, picks its column, and gives focus back', async () => {
    const { host, settle, filterButton, panel, cities, focused } = await setup();
    const button = filterButton();
    expect(button.getAttribute('aria-haspopup')).toBe('dialog');
    expect(button.getAttribute('aria-expanded')).toBe('false');

    await userEvent.click(button);
    await settle();
    expect(panel().matches(':popover-open')).toBe(true);
    expect(panel().getAttribute('role')).toBe('dialog');
    expect(panel().getAttribute('aria-label')).toBe('City column options');
    expect(button.getAttribute('aria-expanded')).toBe('true');
    const picker = panel().querySelector<HTMLSelectElement>('select')!;
    expect(focused()).toBe(picker);
    expect(picker.closest('label')!.textContent).toContain('Column');
    // Cards have no pinned edges or widths.
    expect(panel().querySelector('[aria-label="Pin"]')).toBeNull();
    expect(panel().textContent).not.toContain('Fit to content');

    await userEvent.selectOptions(picker, option(picker, 'region'));
    await settle();
    expect(panel().getAttribute('aria-label')).toBe('Region column options');
    await userEvent.fill(panel().querySelector<HTMLInputElement>('.nui-grid-panel-input')!, 'Asia');
    await settle();
    expect(host.filters()).toEqual({ region: { op: 'contains', value: 'Asia' } });
    expect(cities()).toEqual(['Tokyo', 'Seoul']);
    expect(button.querySelector('.nui-grid-count')!.textContent!.trim()).toBe('1');
    expect(button.querySelector('.nui-grid-hidden')!.textContent!.trim()).toBe('1 active');

    await userEvent.keyboard('{Escape}');
    await settle();
    expect(panel().matches(':popover-open')).toBe(false);
    expect(focused()).toBe(button);
    expect(button.getAttribute('aria-expanded')).toBe('false');

    // It opens on the column it showed last, and closes on a second press.
    await userEvent.click(button);
    await settle();
    expect(panel().getAttribute('aria-label')).toBe('Region column options');
    await userEvent.click(button);
    await settle();
    expect(panel().matches(':popover-open')).toBe(false);
  });

  it('opens on a column that filters, and hides a column from there', async () => {
    const { settle, root, filterButton, panel, focused } = await setup((h) =>
      h.filters.set({ amount: { op: 'gt', value: 60 } }),
    );
    await userEvent.click(filterButton());
    await settle();
    expect(panel().getAttribute('aria-label')).toBe('Amount column options');
    await userEvent.click(
      [...panel().querySelectorAll('button')].find((b) => b.textContent!.includes('Hide column'))!,
    );
    await settle();
    expect(panel().matches(':popover-open')).toBe(false);
    expect(focused()).toBe(filterButton());
    const labels = [...root.querySelectorAll('tbody tr[data-index]')][0].querySelectorAll('td');
    expect([...labels].map((cell) => cell.getAttribute('data-label'))).toEqual([
      'City',
      'Region',
      'Note',
    ]);
  });

  it('makes the first card the tab stop, since cards have no header row', async () => {
    const { host, root, grid, settle, focused } = await setup();
    const stops = () => [...root.querySelectorAll<HTMLElement>('table [tabindex="0"]')];
    expect(stops().length).toBe(1);
    expect(stops()[0].closest('tbody')).not.toBeNull();

    stops()[0].focus();
    await userEvent.keyboard('{ArrowUp}');
    await settle();
    expect(focused().closest('tbody')).not.toBeNull();
    grid.focusCell(-1, 1);
    await settle();
    expect(focused().closest('tr')!.getAttribute('aria-rowindex')).toBe('2');
    expect(focused().getAttribute('data-label')).toBe('Region');

    // A table has its header row back, and the keyboard reaches it.
    host.layout.set('table');
    await settle();
    grid.focusCell(-1, 1);
    await settle();
    expect(focused().closest('thead')).not.toBeNull();
  });

  it('puts the toolbar over a table only when asked, and leaves it out when turned off', async () => {
    const { host, settle, toolbar, filterButton, panel } = await setup((h) =>
      h.layout.set('table'),
    );
    expect(toolbar()).toBeNull();

    host.toolbar.set('');
    await settle();
    expect(toolbar()).not.toBeNull();
    // Over a table, the panel still picks its column, and pins and fits it too.
    await userEvent.click(filterButton());
    await settle();
    expect(panel().querySelector('select')!.closest('label')!.textContent).toContain('Column');
    expect(panel().querySelector('[aria-label="Pin"]')).not.toBeNull();

    // Turning into cards closes the panel, whose anchor may go.
    host.layout.set('list');
    await settle();
    expect(panel().matches(':popover-open')).toBe(false);

    host.toolbar.set(false);
    await settle();
    expect(toolbar()).toBeNull();
  });
});
