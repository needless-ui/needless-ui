import { Component, signal } from '@angular/core';
import { NuiGrid, type NuiGridColumn } from '@needless-ui/angular/grid';
import { type Order, orders } from './data';

@Component({
  selector: 'grid-groups-example',
  imports: [NuiGrid],
  templateUrl: './groups.html',
  styleUrl: './groups.css',
})
export class GridGroupsExample {
  protected readonly orders = signal(orders(40));
  protected readonly groupBy = signal<readonly string[]>(['country']);
  protected readonly columns: NuiGridColumn<Order>[] = [
    { id: 'customer', header: 'Customer', flex: 1, minWidth: 200 },
    { id: 'country', header: 'Country', width: 130 },
    {
      id: 'id',
      header: 'Orders',
      type: 'number',
      width: 110,
      aggregate: 'count',
      format: { useGrouping: false },
    },
    {
      id: 'total',
      header: 'Total',
      type: 'number',
      width: 140,
      aggregate: 'sum',
      format: { style: 'currency', currency: 'CHF' },
    },
    {
      id: 'average',
      header: 'Average',
      type: 'number',
      width: 140,
      value: (order) => order.total,
      aggregate: 'avg',
      format: { style: 'currency', currency: 'CHF' },
    },
  ];
  protected readonly choices = [
    { label: 'Country', value: ['country'] },
    { label: 'Country, then customer', value: ['country', 'customer'] },
    { label: 'None', value: [] },
  ];
}
