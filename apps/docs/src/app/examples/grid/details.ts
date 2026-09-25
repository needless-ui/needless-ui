import { Component, signal } from '@angular/core';
import { NuiGrid, NuiGridDetail, type NuiGridColumn } from '@needless-ui/angular/grid';
import { type Order, orders, STATUSES } from './data';

const ITEMS = ['Keyboard', 'Monitor', 'Desk lamp', 'Headphones', 'Webcam', 'Chair', 'Mouse'];

@Component({
  selector: 'grid-details-example',
  imports: [NuiGrid, NuiGridDetail],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class GridDetailsExample {
  protected readonly orders = signal(orders(8));
  protected readonly details = signal<readonly unknown[]>([1]);
  protected readonly columns: NuiGridColumn<Order>[] = [
    { id: 'id', header: 'Order', type: 'number', width: 100, format: { useGrouping: false } },
    { id: 'customer', header: 'Customer', flex: 1, minWidth: 180 },
    { id: 'status', header: 'Status', type: 'enum', options: STATUSES, width: 130 },
    {
      id: 'total',
      header: 'Total',
      type: 'number',
      width: 130,
      format: { style: 'currency', currency: 'CHF' },
    },
  ];

  /** The order's lines, made up from its number. */
  protected lines(order: Order): { item: string; quantity: number }[] {
    return [0, 1, 2].slice(0, 1 + (order.id % 3)).map((i) => ({
      item: ITEMS[(order.id * 3 + i) % ITEMS.length],
      quantity: 1 + ((order.id + i) % 4),
    }));
  }
}
