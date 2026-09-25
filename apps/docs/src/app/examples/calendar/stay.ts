import { Component, computed, signal } from '@angular/core';
import { nuiDaysBetween } from '@needless-ui/angular';
import { NuiCalendar, type NuiDateRange } from '@needless-ui/angular/calendar';

@Component({
  selector: 'calendar-stay-example',
  imports: [NuiCalendar],
  templateUrl: './stay.html',
})
export class CalendarStayExample {
  protected readonly stay = signal<NuiDateRange | null>(null);
  protected readonly nights = computed(() => {
    const stay = this.stay();
    return stay ? nuiDaysBetween(stay.start, stay.end) : 0;
  });
}
