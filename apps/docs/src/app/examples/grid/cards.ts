import { Component, signal } from '@angular/core';
import { NuiGrid, type NuiGridColumn, type NuiGridSort } from '@needless-ui/angular/grid';
import { type Order, orders, STATUSES } from './data';

@Component({
  selector: 'grid-cards-example',
  imports: [NuiGrid],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class GridCardsExample {
  protected readonly orders = signal(orders(24));
  /** The toolbar sorts through the same model as the headers. */
  protected readonly sort = signal<readonly NuiGridSort[]>([
    { column: 'total', direction: 'desc' },
  ]);
  protected readonly columns: NuiGridColumn<Order>[] = [
    { id: 'customer', header: 'Customer' },
    { id: 'status', header: 'Status', type: 'enum', options: STATUSES },
    { id: 'placed', header: 'Placed', type: 'date' },
    {
      id: 'total',
      header: 'Total',
      type: 'number',
      format: { style: 'currency', currency: 'CHF' },
    },
  ];
}
