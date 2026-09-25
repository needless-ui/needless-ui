import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiGrid, type NuiGridColumn } from '@needless-ui/angular/grid';

interface Quote {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const START: Quote[] = [
  { symbol: 'ALPN', name: 'Alpine Networks', price: 128.4, change: 0 },
  { symbol: 'BRZA', name: 'Breeza Energy', price: 42.15, change: 0 },
  { symbol: 'CMTR', name: 'Comet Robotics', price: 311.9, change: 0 },
  { symbol: 'DLTA', name: 'Delta Foods', price: 19.72, change: 0 },
  { symbol: 'EMBR', name: 'Ember Health', price: 76.03, change: 0 },
  { symbol: 'FJRD', name: 'Fjord Shipping', price: 54.88, change: 0 },
];

@Component({
  selector: 'grid-live-example',
  imports: [NuiButton, NuiGrid],
  templateUrl: './live.html',
  styleUrl: './live.css',
})
export class GridLiveExample {
  protected readonly quotes = signal(START);
  protected readonly running = signal(true);
  /** Rows keep their key across updates, so the grid knows which cells changed. */
  protected readonly rowId = (quote: Quote) => quote.symbol;
  protected readonly columns: NuiGridColumn<Quote>[] = [
    { id: 'symbol', header: 'Symbol', width: 110 },
    { id: 'name', header: 'Company', flex: 1, minWidth: 160 },
    {
      id: 'price',
      header: 'Price',
      type: 'number',
      width: 120,
      format: { style: 'currency', currency: 'USD' },
    },
    {
      id: 'change',
      header: 'Change',
      type: 'number',
      width: 110,
      format: { style: 'percent', signDisplay: 'exceptZero', maximumFractionDigits: 2 },
    },
  ];

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      let tick = 0;
      // Every two seconds, a couple of prices move.
      const timer = setInterval(() => {
        if (!this.running()) return;
        tick++;
        this.quotes.update((quotes) =>
          quotes.map((quote, i) => {
            if ((i + tick) % 3) return quote;
            const change = (((tick * 31 + i * 17) % 21) - 10) / 1000;
            return { ...quote, price: Math.round(quote.price * (1 + change) * 100) / 100, change };
          }),
        );
      }, 2000);
      destroyRef.onDestroy(() => clearInterval(timer));
    });
  }

  protected download(grid: NuiGrid<Quote>): void {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(grid.exportXlsx({ sheet: 'Quotes' }));
    link.download = 'quotes.xlsx';
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
