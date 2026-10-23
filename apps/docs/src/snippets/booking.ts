import { Component, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiScheduler,
  type NuiSchedulerChange,
  type NuiSchedulerEvent,
  NuiSchedulerResourceTemplate,
  type NuiSchedulerSlot,
} from '@needless-ui/angular/scheduler';
import { downloadIcs } from './booking-ics';

@Component({
  selector: 'app-bookings',
  imports: [NuiButton, NuiScheduler, NuiSchedulerResourceTemplate],
  templateUrl: './booking.html',
})
export class Bookings {
  /** Rooms are resources; bookings are events, with their room in `resource`. */
  protected readonly rooms = [
    { id: 'atlas', title: 'Atlas' },
    { id: 'boreal', title: 'Boreal' },
  ];
  protected readonly bookings = signal<NuiSchedulerEvent[]>([]);
  /** Open on weekdays from 8:00 to 19:00: other time is shaded. */
  protected readonly hours = [{ days: [1, 2, 3, 4, 5], start: '08:00', end: '19:00' }];
  /** The days on screen: load their bookings when it changes. */
  protected readonly range = signal<{ start: string; end: string } | null>(null);

  protected book({ start, end, resource }: NuiSchedulerSlot): void {
    const booking = { id: crypto.randomUUID(), title: 'New booking', start, end, resource };
    this.bookings.update((all) => [...all, booking]);
  }

  protected move({ event, start, end, resource }: NuiSchedulerChange): void {
    this.bookings.update((all) =>
      all.map((b) =>
        b.id === event.id ? { ...b, start, end, resource: resource ?? b.resource } : b,
      ),
    );
  }

  /** A room holds one booking at a time. */
  protected readonly free = (time: NuiSchedulerChange | NuiSchedulerSlot): boolean => {
    const id = 'event' in time ? time.event.id : null;
    const room = 'event' in time ? (time.resource ?? time.event.resource) : time.resource;
    return !this.bookings().some(
      (b) => b.id !== id && b.resource === room && b.start < time.end && b.end > time.start,
    );
  };

  protected download(): void {
    downloadIcs(this.bookings(), 'bookings');
  }
}
