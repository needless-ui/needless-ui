import { Component, signal } from '@angular/core';
import type { NuiDate } from '@needless-ui/angular';
import { NuiCalendar } from '@needless-ui/angular/calendar';

@Component({
  selector: 'calendar-days-off-example',
  imports: [NuiCalendar],
  templateUrl: './days-off.html',
})
export class CalendarDaysOffExample {
  protected readonly days = signal<readonly NuiDate[]>([]);
}
