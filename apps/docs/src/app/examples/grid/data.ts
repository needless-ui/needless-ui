import type { NuiOption } from '@needless-ui/angular/select';

export interface Order {
  id: number;
  customer: string;
  country: string;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'refunded';
  placed: string;
  express: boolean;
}

export const STATUSES: NuiOption<Order['status']>[] = [
  { value: 'pending', label: 'Pending' },
  { value: 'paid', label: 'Paid' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'refunded', label: 'Refunded' },
];

const FIRST = ['Ada', 'Alan', 'Grace', 'Hedy', 'Katherine', 'Linus', 'Margaret', 'Radia'];
const LAST = ['Lovelace', 'Turing', 'Hopper', 'Lamarr', 'Johnson', 'Liskov', 'Knuth', 'Allen'];
const COUNTRIES = ['Switzerland', 'Italy', 'Japan', 'Brazil', 'Kenya', 'Canada', 'India'];

/** Orders made up from their number, so every render (and the “server”) gets the same ones. */
export function orders(count: number): Order[] {
  return Array.from({ length: count }, (_, i) => {
    const n = (i * 7919 + 13) % 104729;
    return {
      id: i + 1,
      customer: `${FIRST[n % 8]} ${LAST[(n >> 3) % 8]}`,
      country: COUNTRIES[(n >> 5) % 7],
      total: 5 + ((n * 37) % 90000) / 100,
      status: STATUSES[(n >> 2) % 4].value,
      placed: `2026-${String(1 + (n % 9)).padStart(2, '0')}-${String(1 + (n % 28)).padStart(2, '0')}`,
      express: n % 5 === 0,
    };
  });
}
