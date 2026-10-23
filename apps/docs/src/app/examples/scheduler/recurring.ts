import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiScheduler,
  type NuiSchedulerChange,
  type NuiSchedulerEvent,
  nuiSchedulerToIcs,
} from '@needless-ui/angular/scheduler';
import { routines } from './data';

@Component({
  selector: 'scheduler-recurring-example',
  imports: [NuiButton, NuiScheduler],
  templateUrl: './recurring.html',
  styleUrl: './scheduler.css',
})
export class SchedulerRecurringExample {
  protected readonly events = signal<NuiSchedulerEvent[]>(routines());
  protected readonly note = signal(
    'Choose an event to see its rule, or drag one to move only that day’s.',
  );

  protected open(event: NuiSchedulerEvent): void {
    this.note.set(event.rrule ? `${event.title} repeats: ${event.rrule}` : `${event.title}, once.`);
  }

  /** Moving an occurrence moves that one only: its series skips it, and a copy takes its place. */
  protected move({ event, start, end }: NuiSchedulerChange): void {
    const { recurrenceId } = event;
    this.events.update((all) => {
      if (recurrenceId === undefined) {
        return all.map((e) => (e.id === event.id ? { ...e, start, end } : e));
      }
      const { id, title, tone } = event;
      return [
        ...all.map((e) =>
          e.id === id ? { ...e, exdate: [...(e.exdate ?? []), recurrenceId] } : e,
        ),
        { id: `${id}-${recurrenceId}`, title, tone, start, end },
      ];
    });
  }

  /** The events as an iCalendar file, for any calendar app to import. */
  protected download(): void {
    const file = new Blob([nuiSchedulerToIcs(this.events(), { name: 'Routines' })], {
      type: 'text/calendar',
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'routines.ics';
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
