import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NuiCombobox, type NuiOption } from '@needless-ui/angular/select';

const PEOPLE = [
  'Ada Lovelace',
  'Alan Turing',
  'Barbara Liskov',
  'Donald Knuth',
  'Edsger Dijkstra',
  'Frances Allen',
  'Grace Hopper',
  'Hedy Lamarr',
  'Katherine Johnson',
  'Margaret Hamilton',
  'Radia Perlman',
  'Tim Berners-Lee',
];
const toOption = (name: string): NuiOption<string> => ({ value: name, label: name });

@Component({
  selector: 'combobox-people-example',
  imports: [NuiCombobox],
  templateUrl: './people.html',
  styleUrl: './people.css',
})
export class ComboboxPeopleExample {
  protected readonly person = signal<string | null>(null);
  protected readonly people = signal(PEOPLE.map(toOption));
  protected readonly loading = signal(false);
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  // Stands in for a request to your server.
  protected search(query: string): void {
    clearTimeout(this.timer);
    this.loading.set(true);
    this.timer = setTimeout(() => {
      const words = query.toLowerCase();
      this.people.set(PEOPLE.filter((name) => name.toLowerCase().includes(words)).map(toOption));
      this.loading.set(false);
    }, 400);
  }
}
