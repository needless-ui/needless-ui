import { Component, signal } from '@angular/core';
import { type NuiOption, NuiSelect } from '@needless-ui/angular/select';

@Component({
  selector: 'select-toppings-example',
  imports: [NuiSelect],
  templateUrl: './toppings.html',
  styleUrl: './toppings.css',
})
export class SelectToppingsExample {
  protected readonly picked = signal<readonly string[]>(['basil', 'mozzarella']);
  protected readonly toppings: NuiOption<string>[] = [
    { value: 'basil', label: 'Basil' },
    { value: 'mozzarella', label: 'Mozzarella' },
    { value: 'mushrooms', label: 'Mushrooms' },
    { value: 'olives', label: 'Olives' },
    { value: 'peppers', label: 'Peppers' },
    { value: 'pineapple', label: 'Pineapple', description: 'Sold out today', disabled: true },
  ];
}
