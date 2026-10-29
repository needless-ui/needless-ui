import type { NuiGridFilter, NuiGridSort } from '@needless-ui/core/grid';
import { createRef, useState } from 'react';
import { userEvent } from 'vitest/browser';
import { render, settle } from '../../test/render.js';
import { NuiGrid, type NuiGridColumn, type NuiGridHandle, type NuiGridProps } from './grid.js';

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

type Settings = Partial<NuiGridProps<Sale>>;

async function setup(patch: Settings = {}) {
  const handle = createRef<NuiGridHandle>();
  const host = {
    settings: {
      layout: 'list',
      toolbar: 'auto',
      selection: 'none',
      sort: [],
      filters: {},
      selected: [],
      columns,
      ...patch,
    } as Settings,
    set: (_patch: Settings) => undefined as void,
  };
  function Host() {
    const [settings, setSettings] = useState(host.settings);
    host.settings = settings;
    host.set = (next) => setSettings((current) => ({ ...current, ...next }));
    return (
      <NuiGrid
        ref={handle}
        label="Sales"
        rows={sales}
        columns={columns}
        {...settings}
        onSortChange={(sort: readonly NuiGridSort[]) => host.set({ sort })}
        onFiltersChange={(filters: Readonly<Record<string, NuiGridFilter>>) =>
          host.set({ filters })
        }
        onSelectedChange={(selected) => host.set({ selected })}
      />
    );
  }
  const { container: root } = await render(<Host />);
  const select = () => root.querySelector<HTMLSelectElement>('.nui-grid-sort-by select')!;
  return {
    host,
    handle,
    root,
    select,
    update: async (next: Settings) => {
      host.set(next);
      await settle();
    },
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
  [...select.options].find((entry) => entry.value === value)!;

describe('NuiGrid cards', () => {
  it('sorts from the toolbar: a column, then its direction, and says so', async () => {
    const { host, select, toolbar, direction, cities, status } = await setup();
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
    expect(host.settings.sort).toEqual([{ column: 'amount', direction: 'asc' }]);
    expect(cities()).toEqual(['Seoul', 'Paris', 'Milan', 'Tokyo']);
    expect(direction('asc').getAttribute('aria-pressed')).toBe('true');
    expect(status()).toBe('Sorted by Amount, ascending');

    await userEvent.click(direction('desc'));
    await settle();
    expect(host.settings.sort).toEqual([{ column: 'amount', direction: 'desc' }]);
    expect(cities()).toEqual(['Tokyo', 'Milan', 'Paris', 'Seoul']);
    expect(direction('desc').getAttribute('aria-pressed')).toBe('true');
    expect(direction('asc').getAttribute('aria-pressed')).toBe('false');
    expect(status()).toBe('Sorted by Amount, descending');

    // Another column keeps the direction; none clears the sort.
    await userEvent.selectOptions(select(), option(select(), 'city'));
    await settle();
    expect(host.settings.sort).toEqual([{ column: 'city', direction: 'desc' }]);
    await userEvent.selectOptions(select(), option(select(), ''));
    await settle();
    expect(host.settings.sort).toEqual([]);
    expect(status()).toBe('Sort cleared');
    expect(direction('desc').disabled).toBe(true);
  });

  it('shows the first of a sort by several columns, and turns only it around', async () => {
    const { host, select, direction } = await setup({
      sort: [
        { column: 'code', direction: 'asc' },
        { column: 'amount', direction: 'desc' },
      ],
    });
    // A hidden column still shows when it's the one sorted by.
    expect(select().value).toBe('code');
    expect(select().options[select().selectedIndex].textContent!.trim()).toBe('Code');
    await userEvent.click(direction('desc'));
    await settle();
    expect(host.settings.sort).toEqual([
      { column: 'code', direction: 'desc' },
      { column: 'amount', direction: 'desc' },
    ]);
  });

  it('opens the column panel from the toolbar, picks its column, and gives focus back', async () => {
    const { host, filterButton, panel, cities, focused } = await setup();
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
    expect(host.settings.filters).toEqual({ region: { op: 'contains', value: 'Asia' } });
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
    const { root, filterButton, panel, focused } = await setup({
      filters: { amount: { op: 'gt', value: 60 } },
    });
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
    const { host, root, toolbar, selectAll, checks } = await setup({ selection: 'multiple' });
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
    expect(host.settings.selected).toEqual([2]);
    expect(selectAll().indeterminate).toBe(true);

    // A tap on the label's words, as a finger would.
    await userEvent.click(label);
    await settle();
    expect([...host.settings.selected!].sort()).toEqual([1, 2, 3, 4]);
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
    expect(host.settings.selected).toEqual([]);
    expect(selectAll().checked).toBe(false);
    expect(selectAll().hasAttribute('checked')).toBe(false);
  });

  it('selects the cards that pass the filters, and is off while none do', async () => {
    const { host, root, selectAll, update } = await setup({
      selection: 'multiple',
      filters: { region: { op: 'contains', value: 'Asia' } },
    });
    await userEvent.click(selectAll());
    await settle();
    expect([...host.settings.selected!].sort()).toEqual([2, 4]);
    expect(selectAll().checked).toBe(true);

    await update({ filters: { region: { op: 'contains', value: 'Mars' } } });
    expect(selectAll().disabled).toBe(true);
    expect(selectAll().checked).toBe(false);
    // Rows that don't pass stay selected.
    expect([...host.settings.selected!].sort()).toEqual([2, 4]);

    // The header's checkbox, over a table, is off too.
    await update({ layout: 'table' });
    expect(root.querySelector('.nui-grid-select-all')).toBeNull();
    expect(root.querySelector<HTMLInputElement>('thead input[type="checkbox"]')!.disabled).toBe(
      true,
    );
    await update({ filters: {} });
    expect(root.querySelector<HTMLInputElement>('thead input[type="checkbox"]')!.disabled).toBe(
      false,
    );
  });

  it('shows select all only with multiple selection, with or without columns to sort', async () => {
    const { toolbar, selectAll, update } = await setup({
      columns: columns.map((column) => ({ ...column, sortable: false, filterable: false })),
    });
    // Nothing to sort, filter or select: no toolbar.
    expect(toolbar()).toBeNull();
    await update({ selection: 'single' });
    expect(toolbar()).toBeNull();

    await update({ selection: 'multiple' });
    expect(toolbar()!.getAttribute('role')).toBe('group');
    expect(toolbar()!.querySelectorAll('select, button').length).toBe(0);
    expect(selectAll()).not.toBeNull();

    await update({ selection: 'none' });
    expect(toolbar()).toBeNull();
  });

  it('makes the first card the tab stop, since cards have no header row', async () => {
    const { root, handle, focused, update } = await setup();
    const stops = () => [...root.querySelectorAll<HTMLElement>('table [tabindex="0"]')];
    expect(stops().length).toBe(1);
    expect(stops()[0].closest('tbody')).not.toBeNull();

    stops()[0].focus();
    await userEvent.keyboard('{ArrowUp}');
    await settle();
    expect(focused().closest('tbody')).not.toBeNull();
    handle.current!.focusCell(-1, 1);
    await settle();
    expect(focused().closest('tr')!.getAttribute('aria-rowindex')).toBe('2');
    expect(focused().getAttribute('data-label')).toBe('Region');

    // A table has its header row back, and the keyboard reaches it.
    await update({ layout: 'table' });
    handle.current!.focusCell(-1, 1);
    await settle();
    expect(focused().closest('thead')).not.toBeNull();
  });

  it('puts the toolbar over a table only when asked, and leaves it out when turned off', async () => {
    const { toolbar, filterButton, panel, update } = await setup({ layout: 'table' });
    expect(toolbar()).toBeNull();

    await update({ toolbar: true });
    expect(toolbar()).not.toBeNull();
    // Over a table, the panel still picks its column, and pins and fits it too.
    await userEvent.click(filterButton());
    await settle();
    expect(panel().querySelector('select')!.closest('label')!.textContent).toContain('Column');
    expect(panel().querySelector('[aria-label="Pin"]')).not.toBeNull();

    // Turning into cards closes the panel, whose anchor may go.
    await update({ layout: 'list' });
    expect(panel().matches(':popover-open')).toBe(false);

    await update({ toolbar: false });
    expect(toolbar()).toBeNull();
  });
});
