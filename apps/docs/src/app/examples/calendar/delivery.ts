import { Component, computed, inject, LOCALE_ID, signal } from '@angular/core';
import {
  nuiAddDays,
  type NuiDate,
  nuiFormatDate,
  nuiToday,
  nuiWeekday,
} from '@needless-ui/angular';
import { NuiCalendar } from '@needless-ui/angular/calendar';

@Component({
  selector: 'calendar-delivery-example',
  imports: [NuiCalendar],
  templateUrl: './delivery.html',
})
export class CalendarDeliveryExample {
  private readonly locale = inject(LOCALE_ID);
  protected readonly today = nuiToday();
  protected readonly last = nuiAddDays(this.today, 60);
  protected readonly day = signal<NuiDate | null>(null);
  protected readonly chosen = computed(() => {
    const day = this.day();
    return day ? nuiFormatDate(day, this.locale, { dateStyle: 'full' }) : '';
  });

  /** No deliveries on Sundays. */
  protected readonly sunday = (date: NuiDate) => nuiWeekday(date) === 7;
}
