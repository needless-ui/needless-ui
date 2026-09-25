import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiGrid, NuiGridCell, type NuiGridColumn } from '@needless-ui/angular/grid';
import { type Order, orders, STATUSES } from './data';

@Component({
  selector: 'grid-orders-example',
  imports: [NuiButton, NuiGrid, NuiGridCell],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class GridOrdersExample {
  protected readonly orders = signal(orders(48));
  protected readonly search = signal('');
  protected readonly columns: NuiGridColumn<Order>[] = [
    { id: 'id', header: 'Order', type: 'number', width: 100, format: { useGrouping: false } },
    { id: 'customer', header: 'Customer', flex: 1, minWidth: 160 },
    { id: 'country', header: 'Country', width: 130 },
    { id: 'status', header: 'Status', type: 'enum', options: STATUSES, width: 130 },
    { id: 'placed', header: 'Placed', type: 'date', width: 130 },
    {
      id: 'total',
      header: 'Total',
      type: 'number',
      width: 120,
      format: { style: 'currency', currency: 'CHF' },
    },
  ];

  protected download(grid: NuiGrid<Order>): void {
    const file = new Blob([grid.exportCsv({ bom: true })], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'orders.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
