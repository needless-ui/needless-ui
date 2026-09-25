import { Component, computed, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiGrid, type NuiGridColumn } from '@needless-ui/angular/grid';
import { type Order, orders, STATUSES } from './data';

@Component({
  selector: 'grid-selection-example',
  imports: [NuiButton, NuiGrid],
  templateUrl: './selection.html',
  styleUrl: './selection.css',
})
export class GridSelectionExample {
  protected readonly orders = signal(orders(12));
  protected readonly selected = signal<readonly unknown[]>([]);
  protected readonly count = computed(() => this.selected().length);
  protected readonly columns: NuiGridColumn<Order>[] = [
    { id: 'customer', header: 'Customer', flex: 1, minWidth: 160 },
    { id: 'status', header: 'Status', type: 'enum', options: STATUSES },
    {
      id: 'total',
      header: 'Total',
      type: 'number',
      format: { style: 'currency', currency: 'CHF' },
    },
  ];

  protected archive(): void {
    const gone = new Set(this.selected());
    this.orders.update((rows) => rows.filter((row) => !gone.has(row.id)));
    this.selected.set([]);
  }
}
