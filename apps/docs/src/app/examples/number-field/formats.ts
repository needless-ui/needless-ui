import { Component, signal } from '@angular/core';
import { NuiNumberField, NuiNumberInput, NuiNumberStep } from '@needless-ui/angular/number-field';

@Component({
  selector: 'number-field-formats-example',
  imports: [NuiNumberField, NuiNumberInput, NuiNumberStep],
  templateUrl: './formats.html',
})
export class NumberFieldFormatsExample {
  protected readonly price = signal<number | null>(1234.5);
  protected readonly discount = signal<number | null>(0.15);
}
