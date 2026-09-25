import { Component, signal } from '@angular/core';
import {
  NuiScheduler,
  type NuiSchedulerChange,
  type NuiSchedulerEvent,
  type NuiSchedulerSlot,
} from '@needless-ui/angular/scheduler';
import { week } from './data';

@Component({
  selector: 'scheduler-planner-example',
  imports: [NuiScheduler],
  templateUrl: './planner.html',
  styleUrl: './scheduler.css',
})
export class SchedulerPlannerExample {
  protected readonly events = signal<NuiSchedulerEvent[]>(week());
  protected readonly note = signal('Drag events, or choose time on the grid to add one.');
  private count = 0;

  /** The scheduler reports a move; the events are ours to change. */
  protected move({ event, start, end }: NuiSchedulerChange): void {
    this.events.update((events) =>
      events.map((e) => (e.id === event.id ? { ...e, start, end } : e)),
    );
  }

  protected create({ start, end, allDay }: NuiSchedulerSlot): void {
    const id = `new-${++this.count}`;
    this.events.update((events) => [
      ...events,
      { id, title: 'New event', start, end, allDay, tone: 'success' },
    ]);
    this.note.set(`Added an event from ${start} to ${end}.`);
  }

  protected open(event: NuiSchedulerEvent): void {
    this.note.set(`${event.title}: ${event.start} to ${event.end}.`);
  }
}
