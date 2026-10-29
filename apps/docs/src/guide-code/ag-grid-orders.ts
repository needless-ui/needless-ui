import { Component, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, GridApi, GridReadyEvent, RowSelectionOptions } from 'ag-grid-community';

interface Order {
  id: number;
  customer: string;
  country: string;
  total: number;
}

const chf = new Intl.NumberFormat('en-CH', { style: 'currency', currency: 'CHF' });

// Registered once in main.ts, with the license key:
//   ModuleRegistry.registerModules([AllCommunityModule, RowGroupingModule, ExcelExportModule]);
//   LicenseManager.setLicenseKey('YOUR-LICENSE-KEY');
@Component({
  selector: 'app-orders',
  imports: [AgGridAngular],
  template: `
    <input
      type="search"
      aria-label="Search orders"
      [value]="search()"
      (input)="search.set($any($event.target).value)"
    />
    <button type="button" (click)="exportExcel()">Export to Excel</button>
    <ag-grid-angular
      style="height: 32rem"
      [rowData]="orders()"
      [columnDefs]="columns"
      [autoGroupColumnDef]="{ headerName: 'Country', minWidth: 200 }"
      [groupDefaultExpanded]="-1"
      grandTotalRow="pinnedBottom"
      [rowSelection]="selection"
      [quickFilterText]="search()"
      [includeHiddenColumnsInQuickFilter]="true"
      (gridReady)="api = $event.api"
      (selectionChanged)="selected.set(api?.getSelectedRows() ?? [])"
    />
  `,
})
export class Orders {
  protected readonly orders = signal<Order[]>([]);
  protected readonly search = signal('');
  protected readonly selected = signal<Order[]>([]);
  protected api?: GridApi<Order>;

  protected readonly columns: ColDef<Order>[] = [
    { field: 'country', rowGroup: true, hide: true }, // Enterprise
    { field: 'customer', flex: 1 },
    {
      field: 'total',
      aggFunc: 'sum', // Enterprise
      valueFormatter: ({ value }) => (value == null ? '' : chf.format(value)),
    },
  ];
  protected readonly selection: RowSelectionOptions = {
    mode: 'multiRow',
    groupSelects: 'filteredDescendants',
    selectAll: 'filtered',
  };

  protected exportExcel(): void {
    this.api?.exportDataAsExcel({ fileName: 'orders.xlsx', sheetName: 'Orders' }); // Enterprise
  }
}
