import { Component, signal } from '@angular/core';
import { nuiAddDays, nuiToday } from '@needless-ui/angular';
import { NuiDatePicker } from '@needless-ui/angular/date-picker';

@Component({
  selector: 'date-picker-pickers-example',
  imports: [NuiDatePicker],
  templateUrl: './pickers.html',
  styleUrl: './fields.css',
})
export class DatePickerPickersExample {
  protected readonly today = nuiToday();
  protected readonly lastDay = nuiAddDays(this.today, 330);
  protected readonly departure = signal<string | null>(null);
  protected readonly meeting = signal<string | null>(`${nuiAddDays(this.today, 1)}T09:30`);
}
