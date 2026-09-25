import { Component, signal } from '@angular/core';
import type { NuiDateRange } from '@needless-ui/angular/calendar';
import { NuiDateRangePicker, nuiDateRangePresets } from '@needless-ui/angular/date-picker';

@Component({
  selector: 'date-picker-range-example',
  imports: [NuiDateRangePicker],
  templateUrl: './range.html',
  styleUrl: './fields.css',
})
export class DatePickerRangeExample {
  protected readonly report = signal<NuiDateRange | null>(null);
  protected readonly presets = nuiDateRangePresets();
}
