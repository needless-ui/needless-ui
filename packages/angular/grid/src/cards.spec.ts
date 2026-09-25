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
      [selection]="selection()"
      [(sort)]="sort"
      [(filters)]="filters"
      [(selected)]="selected"
    />
  `,
})
class Host {
  readonly rows = sales;
  columns = columns;
  readonly layout = signal<'table' | 'list'>('list');
  /** `''` is the bare attribute, `<nui-grid toolbar>`. */
  readonly toolbar = signal<boolean | 'auto' | ''>('auto');
  readonly selection = signal<'none' | 'single' | 'multiple'>('none');
  readonly sort = signal<readonly NuiGridSort[]>([]);
  readonly filters = signal<Readonly<Record<string, NuiGridFilter>>>({});
  readonly selected = signal<readonly unknown[]>([]);
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
    selectAll: () => root.querySelector<HTMLInputElement>('.nui-grid-select-all input')!,
    checks: () => [...root.querySelectorAll<HTMLInputElement>('tbody .nui-grid-select input')],
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

  it('selects every card from the toolbar, as the header checkbox does', async () => {
    const { host, root, settle, toolbar, selectAll, checks } = await setup((h) =>
      h.selection.set('multiple'),
    );
    // A native checkbox named by its label on screen, after the sort and before the filter.
    const label = selectAll().labels![0];
    expect(label.textContent!.trim()).toBe('Select all rows');
    expect([...toolbar()!.children].map((child) => child.className)).toEqual([
      'nui-grid-sort-by',
      'nui-grid-directions',
      'nui-grid-select-all',
      'nui-grid-filter-button',
    ]);
    expect(selectAll().checked).toBe(false);
    expect(selectAll().indeterminate).toBe(false);

    await userEvent.click(checks()[1]);
    await settle();
    expect(host.selected()).toEqual([2]);
    expect(selectAll().indeterminate).toBe(true);

    // A tap on the label's words, as a finger would.
    await userEvent.click(label);
    await settle();
    expect([...host.selected()].sort()).toEqual([1, 2, 3, 4]);
    expect(selectAll().checked).toBe(true);
    expect(selectAll().indeterminate).toBe(false);
    // The attribute too, for the server's HTML.
    expect(selectAll().hasAttribute('checked')).toBe(true);
    expect(root.querySelectorAll('tbody tr[aria-selected="true"]').length).toBe(4);
    expect(checks().every((check) => check.checked)).toBe(true);

    // Space on the checkbox, from the keyboard.
    selectAll().focus();
    await userEvent.keyboard(' ');
    await settle();
    expect(host.selected()).toEqual([]);
    expect(selectAll().checked).toBe(false);
    expect(selectAll().hasAttribute('checked')).toBe(false);
  });

  it('selects the cards that pass the filters, and is off while none do', async () => {
    const { host, root, settle, selectAll } = await setup((h) => {
      h.selection.set('multiple');
      h.filters.set({ region: { op: 'contains', value: 'Asia' } });
    });
    await userEvent.click(selectAll());
    await settle();
    expect([...host.selected()].sort()).toEqual([2, 4]);
    expect(selectAll().checked).toBe(true);

    host.filters.set({ region: { op: 'contains', value: 'Mars' } });
    await settle();
    expect(selectAll().disabled).toBe(true);
    expect(selectAll().checked).toBe(false);
    // Rows that don't pass stay selected.
    expect([...host.selected()].sort()).toEqual([2, 4]);

    // The header's checkbox, over a table, is off too.
    host.layout.set('table');
    await settle();
    expect(root.querySelector('.nui-grid-select-all')).toBeNull();
    expect(root.querySelector<HTMLInputElement>('thead input[type="checkbox"]')!.disabled).toBe(
      true,
    );
    host.filters.set({});
    await settle();
    expect(root.querySelector<HTMLInputElement>('thead input[type="checkbox"]')!.disabled).toBe(
      false,
    );
  });

  it('shows select all only with multiple selection, with or without columns to sort', async () => {
    const { host, settle, toolbar, selectAll } = await setup((h) => {
      h.columns = columns.map((column) => ({ ...column, sortable: false, filterable: false }));
    });
    // Nothing to sort, filter or select: no toolbar.
    expect(toolbar()).toBeNull();
    host.selection.set('single');
    await settle();
    expect(toolbar()).toBeNull();

    host.selection.set('multiple');
    await settle();
    expect(toolbar()!.getAttribute('role')).toBe('group');
    expect(toolbar()!.querySelectorAll('select, button').length).toBe(0);
    expect(selectAll()).not.toBeNull();

    host.selection.set('none');
    await settle();
    expect(toolbar()).toBeNull();
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
