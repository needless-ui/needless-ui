import { Component, computed, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiGrid, type NuiGridColumn } from '@needless-ui/angular/grid';
import {
  NuiScheduler,
  type NuiSchedulerChange,
  type NuiSchedulerEvent,
  NuiSchedulerResourceTemplate,
  type NuiSchedulerSlot,
} from '@needless-ui/angular/scheduler';
import { icsFile, ROOMS, sampleBookings, save } from './bookings';

/** A booking as a grid row: one per booking, grouped by room. */
interface Row {
  id: string;
  room: string;
  title: string;
  day: string;
  from: string;
  to: string;
  hours: number;
}

@Component({
  selector: 'app-root',
  imports: [NuiButton, NuiGrid, NuiScheduler, NuiSchedulerResourceTemplate],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly rooms = ROOMS;
  protected readonly bookings = signal<NuiSchedulerEvent[]>(sampleBookings());
  /** Open on weekdays from 8:00 to 19:00: other time is shaded. */
  protected readonly hours = [{ days: [1, 2, 3, 4, 5], start: '08:00', end: '19:00' }];
  private count = 0;

  protected readonly rows = computed<Row[]>(() =>
    this.bookings().map((booking) => ({
      id: booking.id,
      room: this.rooms.find((room) => room.id === booking.resource)?.title ?? '',
      title: booking.title,
      day: booking.start.slice(0, 10),
      from: booking.start.slice(11, 16),
      to: booking.end.slice(11, 16),
      hours: (Date.parse(booking.end) - Date.parse(booking.start)) / 3_600_000,
    })),
  );

  protected readonly columns: NuiGridColumn<Row>[] = [
    { id: 'room', header: 'Room', width: 190 },
    { id: 'title', header: 'Booking', flex: 1, minWidth: 180 },
    { id: 'day', header: 'Day', type: 'date', width: 150, format: { dateStyle: 'medium' } },
    { id: 'from', header: 'From', width: 100 },
    { id: 'to', header: 'To', width: 100 },
    { id: 'hours', header: 'Hours', type: 'number', width: 110, aggregate: 'sum' },
  ];
  protected readonly groupBy = signal<readonly string[]>(['room']);

  /** A room holds one booking at a time. */
  protected readonly free = (time: NuiSchedulerChange | NuiSchedulerSlot): boolean => {
    const id = 'event' in time ? time.event.id : null;
    const room = 'event' in time ? (time.resource ?? time.event.resource) : time.resource;
    return !this.bookings().some(
      (b) => b.id !== id && b.resource === room && b.start < time.end && b.end > time.start,
    );
  };

  protected book({ start, end, resource }: NuiSchedulerSlot): void {
    this.bookings.update((all) => [
      ...all,
      { id: `new-${++this.count}`, title: 'New booking', start, end, resource },
    ]);
  }

  protected move({ event, start, end, resource }: NuiSchedulerChange): void {
    this.bookings.update((all) =>
      all.map((b) =>
        b.id === event.id ? { ...b, start, end, resource: resource ?? b.resource } : b,
      ),
    );
  }

  protected exportExcel(grid: NuiGrid<Row>): void {
    save(grid.exportXlsx({ sheet: 'Bookings' }), 'bookings.xlsx');
  }

  protected addToCalendar(): void {
    save(icsFile(this.bookings()), 'bookings.ics');
  }
}
