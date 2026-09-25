import { Component, signal } from '@angular/core';
import { NuiGrid, type NuiGridColumn, type NuiGridEdit } from '@needless-ui/angular/grid';

interface Product {
  id: number;
  name: string;
  category: 'keyboards' | 'mice' | 'screens';
  price: number;
  stock: number;
  available: boolean;
}

@Component({
  selector: 'grid-editing-example',
  imports: [NuiGrid],
  templateUrl: './editing.html',
  styleUrl: './editing.css',
})
export class GridEditingExample {
  protected readonly products = signal<readonly Product[]>([
    {
      id: 1,
      name: 'Split keyboard',
      category: 'keyboards',
      price: 189,
      stock: 12,
      available: true,
    },
    { id: 2, name: 'Trackball', category: 'mice', price: 79, stock: 0, available: false },
    { id: 3, name: '27″ display', category: 'screens', price: 429, stock: 5, available: true },
    {
      id: 4,
      name: 'Low-profile keyboard',
      category: 'keyboards',
      price: 119,
      stock: 31,
      available: true,
    },
  ]);
  protected readonly last = signal('Nothing changed yet.');
  protected readonly columns: NuiGridColumn<Product>[] = [
    {
      id: 'name',
      header: 'Product',
      flex: 1,
      minWidth: 180,
      editable: true,
      validate: (name: string) => (name.trim() ? null : 'Give it a name'),
    },
    {
      id: 'category',
      header: 'Category',
      type: 'enum',
      editable: true,
      options: [
        { value: 'keyboards', label: 'Keyboards' },
        { value: 'mice', label: 'Mice' },
        { value: 'screens', label: 'Screens' },
      ],
    },
    {
      id: 'price',
      header: 'Price',
      type: 'number',
      editable: true,
      format: { style: 'currency', currency: 'CHF' },
      validate: (price: number | null) => (price && price > 0 ? null : 'Enter a price above 0'),
    },
    {
      id: 'stock',
      header: 'Stock',
      type: 'number',
      editable: true,
      validate: (stock: number | null) =>
        stock !== null && Number.isInteger(stock) && stock >= 0 ? null : 'Enter a whole number',
    },
    { id: 'available', header: 'On sale', type: 'boolean', editable: true },
  ];

  protected onEdit(edit: NuiGridEdit<Product>): void {
    this.last.set(`${edit.row.name}: ${edit.column} is now ${edit.value}.`);
  }
}
