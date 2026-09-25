import { Component, signal } from '@angular/core';
import { NuiScheduler, type NuiSchedulerEvent } from '@needless-ui/angular/scheduler';
import { month } from './data';

@Component({
  selector: 'scheduler-month-example',
  imports: [NuiScheduler],
  templateUrl: './month.html',
  styleUrl: './scheduler.css',
})
export class SchedulerMonthExample {
  protected readonly events = signal<NuiSchedulerEvent[]>(month());
}
