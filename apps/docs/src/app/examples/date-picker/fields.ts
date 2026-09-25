import { Component, signal } from '@angular/core';
import { NuiDateField, NuiTimeField } from '@needless-ui/angular/date-picker';

@Component({
  selector: 'date-picker-fields-example',
  imports: [NuiDateField, NuiTimeField],
  templateUrl: './fields.html',
  styleUrl: './fields.css',
})
export class DatePickerFieldsExample {
  protected readonly birthday = signal<string | null>(null);
  protected readonly alarm = signal<string | null>('07:30');
}
