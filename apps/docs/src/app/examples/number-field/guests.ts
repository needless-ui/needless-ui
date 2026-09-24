import { Component, signal } from '@angular/core';
import { NuiNumberField, NuiNumberInput, NuiNumberStep } from '@needless-ui/angular/number-field';

@Component({
  selector: 'number-field-guests-example',
  imports: [NuiNumberField, NuiNumberInput, NuiNumberStep],
  templateUrl: './guests.html',
})
export class NumberFieldGuestsExample {
  protected readonly guests = signal<number | null>(2);
}
