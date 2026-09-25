import { Component, signal } from '@angular/core';
import { NuiGrid, type NuiGridColumn, type NuiGridQuery } from '@needless-ui/angular/grid';
import { type Order, orders, STATUSES } from './data';

const ALL = orders(1000);

/** Stands in for your API: it searches, sorts and pages, then answers half a second later. */
function fetchOrders(query: NuiGridQuery): Promise<{ rows: Order[]; total: number }> {
  const words = query.search.toLowerCase().split(/\s+/).filter(Boolean);
  let rows = ALL.filter((order) =>
    words.every((word) => `${order.customer} ${order.country}`.toLowerCase().includes(word)),
  );
  // Stable sorts from the last key to the first sort by all of them.
  for (const { column, direction } of [...query.sort].reverse()) {
    const key = column as keyof Order;
    const sign = direction === 'asc' ? 1 : -1;
    rows = [...rows].sort((a, b) => (a[key] > b[key] ? sign : a[key] < b[key] ? -sign : 0));
  }
  const start = query.page * query.pageSize;
  const page = { rows: rows.slice(start, start + query.pageSize), total: rows.length };
  return new Promise((resolve) => setTimeout(() => resolve(page), 500));
}

@Component({
  selector: 'grid-server-example',
  imports: [NuiGrid],
  templateUrl: './server.html',
  styleUrl: './server.css',
})
export class GridServerExample {
  protected readonly rows = signal<readonly Order[]>([]);
  protected readonly total = signal(0);
  protected readonly loading = signal(true);
  protected readonly search = signal('');
  protected readonly columns: NuiGridColumn<Order>[] = [
    { id: 'customer', header: 'Customer', flex: 1, minWidth: 160, filterable: false },
    { id: 'country', header: 'Country', filterable: false },
    { id: 'status', header: 'Status', type: 'enum', options: STATUSES, filterable: false },
    {
      id: 'total',
      header: 'Total',
      type: 'number',
      filterable: false,
      format: { style: 'currency', currency: 'CHF' },
    },
  ];
  private latest = 0;

  protected async load(query: NuiGridQuery): Promise<void> {
    const request = ++this.latest;
    this.loading.set(true);
    const answer = await fetchOrders(query);
    // A newer query may have gone out while this one was on its way.
    if (request !== this.latest) return;
    this.rows.set(answer.rows);
    this.total.set(answer.total);
    this.loading.set(false);
  }
}
