import { Component, signal } from '@angular/core';
import {
  NuiScheduler,
  type NuiSchedulerEvent,
  NuiSchedulerEventTemplate,
} from '@needless-ui/angular/scheduler';
import { type Booking, rooms } from './data';

@Component({
  selector: 'scheduler-rooms-example',
  imports: [NuiScheduler, NuiSchedulerEventTemplate],
  templateUrl: './rooms.html',
  styleUrls: ['./scheduler.css', './rooms.css'],
})
export class SchedulerRoomsExample {
  protected readonly bookings = signal<NuiSchedulerEvent<Booking>[]>(rooms());

  protected booking(event: NuiSchedulerEvent): Booking {
    return event.data as Booking;
  }
}
