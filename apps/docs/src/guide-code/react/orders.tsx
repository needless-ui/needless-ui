'use client';

import { NuiGrid, type NuiGridColumn, type NuiGridHandle } from '@needless-ui/react/grid';
import { useRef, useState } from 'react';

interface Order {
  id: number;
  customer: string;
  region: string;
  total: number;
  shipped: boolean;
}

// Outside the component, so the grid doesn't redo its work on every render.
const columns: NuiGridColumn<Order>[] = [
  { id: 'customer', header: 'Customer', flex: 1, editable: true },
  { id: 'region', header: 'Region' },
  {
    id: 'total',
    header: 'Total',
    type: 'number',
    format: { style: 'currency', currency: 'EUR' },
    aggregate: 'sum',
  },
  { id: 'shipped', header: 'Shipped', type: 'boolean', editable: true },
];

export function Orders({ initial }: { initial: Order[] }) {
  const [orders, setOrders] = useState<readonly Order[]>(initial);
  const grid = useRef<NuiGridHandle>(null);
  const download = () => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(grid.current!.exportXlsx({ sheet: 'Orders' }));
    link.download = 'orders.xlsx';
    link.click();
  };
  return (
    <>
      <button type="button" className="nui-button" onClick={download}>
        Excel
      </button>
      <NuiGrid
        ref={grid}
        label="Orders"
        rows={orders}
        onRowsChange={setOrders}
        columns={columns}
        groupBy={['region']}
        totals
        pageSize={25}
      />
    </>
  );
}
