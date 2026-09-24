import { Component, signal } from '@angular/core';
import { NuiCombobox, type NuiOption } from '@needless-ui/angular/select';

@Component({
  selector: 'combobox-country-example',
  imports: [NuiCombobox],
  templateUrl: './country.html',
  styleUrl: './country.css',
})
export class ComboboxCountryExample {
  protected readonly country = signal<string | null>(null);
  protected readonly countries: NuiOption<string>[] = [
    { value: 'at', label: 'Austria', keywords: ['Österreich'] },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany', keywords: ['Deutschland'] },
    { value: 'it', label: 'Italy', keywords: ['Italia'] },
    { value: 'es', label: 'Spain', keywords: ['España'] },
    { value: 'se', label: 'Sweden', keywords: ['Sverige'] },
    { value: 'ch', label: 'Switzerland', keywords: ['Schweiz', 'Suisse', 'Svizzera'] },
    { value: 'gb', label: 'United Kingdom', keywords: ['UK', 'Britain'] },
  ];
}
