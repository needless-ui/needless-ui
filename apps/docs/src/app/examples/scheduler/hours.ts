import { Component, signal } from '@angular/core';
import {
  NuiScheduler,
  type NuiSchedulerChange,
  type NuiSchedulerEvent,
  type NuiSchedulerHours,
} from '@needless-ui/angular/scheduler';
import { workWeek } from './data';

@Component({
  selector: 'scheduler-hours-example',
  imports: [NuiScheduler],
  templateUrl: './hours.html',
  styleUrl: './scheduler.css',
})
export class SchedulerHoursExample {
  protected readonly events = signal<NuiSchedulerEvent[]>(workWeek());
  /** Mornings and afternoons with lunch between, and a short Friday. */
  protected readonly hours: NuiSchedulerHours[] = [
    { days: [1, 2, 3, 4], start: '09:00', end: '12:30' },
    { days: [1, 2, 3, 4], start: '13:30', end: '17:30' },
    { days: [5], start: '09:00', end: '13:00' },
  ];

  protected move({ event, start, end }: NuiSchedulerChange): void {
    this.events.update((all) => all.map((e) => (e.id === event.id ? { ...e, start, end } : e)));
  }
}
