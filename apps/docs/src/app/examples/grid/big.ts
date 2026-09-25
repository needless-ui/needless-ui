import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiGrid, type NuiGridColumn, type NuiGridColumnState } from '@needless-ui/angular/grid';
import { type Order, orders, STATUSES } from './data';

const KEY = 'grid-example-layout';

@Component({
  selector: 'grid-big-example',
  imports: [NuiButton, NuiGrid],
  templateUrl: './big.html',
  styleUrl: './big.css',
})
export class GridBigExample {
  protected readonly orders = signal(orders(100_000));
  protected readonly layout = signal<readonly NuiGridColumnState[]>(this.saved());
  protected readonly columns: NuiGridColumn<Order>[] = [
    {
      id: 'id',
      header: 'Order',
      type: 'number',
      width: 100,
      pinned: 'start',
      format: { useGrouping: false },
    },
    { id: 'customer', header: 'Customer', width: 180 },
    { id: 'country', header: 'Country', width: 140 },
    { id: 'status', header: 'Status', type: 'enum', options: STATUSES, width: 130 },
    { id: 'placed', header: 'Placed', type: 'date', width: 140 },
    { id: 'express', header: 'Express', type: 'boolean', width: 110 },
    {
      id: 'total',
      header: 'Total',
      type: 'number',
      width: 130,
      pinned: 'end',
      format: { style: 'currency', currency: 'CHF' },
    },
  ];

  // The layout lives in this browser: widths, order, pins and hidden columns.
  protected keep(layout: readonly NuiGridColumnState[]): void {
    this.layout.set(layout);
    try {
      localStorage.setItem(KEY, JSON.stringify(layout));
    } catch {
      // Storage can be off; the layout then lasts until the page closes.
    }
  }

  protected reset(): void {
    this.keep([]);
  }

  private saved(): NuiGridColumnState[] {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}
