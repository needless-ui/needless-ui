import { Component, signal } from '@angular/core';
import { type NuiOption, NuiSelect } from '@needless-ui/angular/select';

@Component({
  selector: 'select-countries-example',
  imports: [NuiSelect],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class SelectCountriesExample {
  protected readonly country = signal<string | null>('it');
  protected readonly countries: NuiOption<string>[] = [
    { value: 'fr', label: 'France', group: 'Europe' },
    { value: 'de', label: 'Germany', group: 'Europe' },
    { value: 'it', label: 'Italy', group: 'Europe' },
    { value: 'es', label: 'Spain', group: 'Europe' },
    { value: 'ch', label: 'Switzerland', group: 'Europe' },
    { value: 'br', label: 'Brazil', group: 'Americas' },
    { value: 'ca', label: 'Canada', group: 'Americas' },
    { value: 'mx', label: 'Mexico', group: 'Americas' },
    { value: 'in', label: 'India', group: 'Asia' },
    { value: 'jp', label: 'Japan', group: 'Asia' },
  ];
}
