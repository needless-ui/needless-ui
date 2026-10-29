import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiGrid, type NuiGridColumn } from '@needless-ui/angular/grid';

interface Order {
  id: number;
  customer: string;
  country: string;
  total: number;
}

@Component({
  selector: 'app-orders',
  imports: [NuiButton, NuiGrid],
  template: `
    <input
      type="search"
      aria-label="Search orders"
      [value]="search()"
      (input)="search.set($any($event.target).value)"
    />
    <button nuiButton type="button" (click)="exportExcel(grid)">Export to Excel</button>
    <nui-grid
      #grid
      label="Orders"
      height="32rem"
      selection="multiple"
      totals
      [(rows)]="orders"
      [columns]="columns"
      [(groupBy)]="groupBy"
      [(search)]="search"
      [(selected)]="selected"
    />
  `,
})
export class Orders {
  protected readonly orders = signal<readonly Order[]>([]);
  protected readonly search = signal('');
  protected readonly groupBy = signal<readonly string[]>(['country']);
  /** The selected rows' keys: their `id`, unless `rowId` says otherwise. */
  protected readonly selected = signal<readonly unknown[]>([]);

  protected readonly columns: NuiGridColumn<Order>[] = [
    { id: 'customer', header: 'Customer', flex: 1, minWidth: 200 },
    { id: 'country', header: 'Country', width: 140 },
    {
      id: 'total',
      header: 'Total',
      type: 'number',
      width: 140,
      aggregate: 'sum',
      format: { style: 'currency', currency: 'CHF' },
    },
  ];

  protected exportExcel(grid: NuiGrid<Order>): void {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(grid.exportXlsx({ sheet: 'Orders' }));
    link.download = 'orders.xlsx';
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
