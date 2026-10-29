import { nuiToday } from '@needless-ui/core';
import type { ReactNode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { settle } from '../test/render.js';
import { NuiGrid, type NuiGridColumn } from './grid/index.js';
import { NuiScheduler } from './scheduler/index.js';

/** Renders as a server would, then hydrates that HTML; returns what React had to recover from. */
async function hydrate(ui: ReactNode): Promise<{ container: HTMLElement; errors: unknown[] }> {
  const container = document.body.appendChild(document.createElement('div'));
  container.innerHTML = renderToString(ui);
  const errors: unknown[] = [];
  const logged = console.error;
  console.error = (...args: unknown[]) => errors.push(args);
  try {
    const root = hydrateRoot(container, ui, { onRecoverableError: (error) => errors.push(error) });
    await settle();
    onTestFinished(() => {
      root.unmount();
      container.remove();
    });
  } finally {
    console.error = logged;
  }
  return { container, errors };
}

describe('hydration', () => {
  it('hydrates the scheduler’s HTML without a mismatch, then shows the reader’s today', async () => {
    // The reader's today, as the scheduler marks it: in their time zone, not UTC.
    const date = nuiToday();
    const { container, errors } = await hydrate(
      <NuiScheduler
        defaultDate={date}
        events={[{ id: 'a', title: 'Call', start: `${date}T09:00`, end: `${date}T10:00` }]}
      />,
    );
    expect(errors).toEqual([]);
    expect(container.querySelector('[data-today]')).not.toBeNull();
  });

  it('hydrates the grid’s HTML without a mismatch', async () => {
    const columns: NuiGridColumn<{ id: number; name: string }>[] = [{ id: 'name', header: 'Name' }];
    const { container, errors } = await hydrate(
      <NuiGrid
        label="Names"
        rows={[
          { id: 1, name: 'Ada' },
          { id: 2, name: 'Grace' },
        ]}
        columns={columns}
        selection="multiple"
        pageSize={10}
        totals
      />,
    );
    expect(errors).toEqual([]);
    expect(container.querySelectorAll('tbody tr[data-index]').length).toBe(2);
  });
});
