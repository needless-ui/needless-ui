import { Component, signal } from '@angular/core';
import {
  NuiScheduler,
  type NuiSchedulerChange,
  type NuiSchedulerEvent,
  NuiSchedulerEventTemplate,
  type NuiSchedulerResource,
  NuiSchedulerResourceTemplate,
  type NuiSchedulerSlot,
} from '@needless-ui/angular/scheduler';
import { bookings, type Host, type Room, ROOMS } from './data';

@Component({
  selector: 'scheduler-timeline-example',
  imports: [NuiScheduler, NuiSchedulerEventTemplate, NuiSchedulerResourceTemplate],
  templateUrl: './timeline.html',
  styleUrls: ['./scheduler.css', './timeline.css'],
})
export class SchedulerTimelineExample {
  protected readonly rooms = ROOMS;
  protected readonly bookings = signal<NuiSchedulerEvent<Host>[]>(bookings());
  protected readonly note = signal(
    'Drag a booking to another room or time, or across a room to book it.',
  );
  private count = 0;

  /** A room holds one booking at a time. */
  protected readonly free = (time: NuiSchedulerChange<Host> | NuiSchedulerSlot): boolean => {
    const id = 'event' in time ? time.event.id : null;
    const room = 'event' in time ? (time.resource ?? time.event.resource) : time.resource;
    return !this.bookings().some(
      (b) => b.id !== id && b.resource === room && b.start < time.end && b.end > time.start,
    );
  };

  protected move({ event, start, end, resource }: NuiSchedulerChange<Host>): void {
    this.bookings.update((all) =>
      all.map((b) =>
        b.id === event.id ? { ...b, start, end, resource: resource ?? b.resource } : b,
      ),
    );
  }

  protected book({ start, end, resource }: NuiSchedulerSlot): void {
    const room = this.rooms.find((r) => r.id === resource);
    this.bookings.update((all) => [
      ...all,
      {
        id: `new-${++this.count}`,
        title: 'New booking',
        start,
        end,
        resource,
        data: { host: 'You' },
      },
    ]);
    this.note.set(`Booked ${room?.title} from ${start.slice(11)} to ${end.slice(11)}.`);
  }

  protected seats(room: NuiSchedulerResource): number {
    return (room.data as Room).seats;
  }

  protected host(event: NuiSchedulerEvent): string {
    return (event.data as Host).host;
  }
}
