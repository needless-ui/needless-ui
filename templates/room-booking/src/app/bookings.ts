import { nuiAddDays, nuiToday } from '@needless-ui/angular';
import {
  type NuiSchedulerEvent,
  type NuiSchedulerResource,
  nuiSchedulerToIcs,
} from '@needless-ui/angular/scheduler';

/** The rooms are the scheduler's resources. Change them to yours. */
export const ROOMS: NuiSchedulerResource[] = [
  { id: 'atlas', title: 'Atlas' },
  { id: 'boreal', title: 'Boreal' },
  { id: 'cove', title: 'Cove' },
  { id: 'dune', title: 'Dune' },
];

/** A few bookings from today on, so the app never opens empty. */
export function sampleBookings(): NuiSchedulerEvent[] {
  const today = nuiToday();
  const at = (day: number, time: string) => `${nuiAddDays(today, day)}T${time}`;
  const booking = (
    id: string,
    title: string,
    room: string,
    day: number,
    from: string,
    to: string,
  ) =>
    ({
      id,
      title,
      resource: room,
      start: at(day, from),
      end: at(day, to),
    }) satisfies NuiSchedulerEvent;
  return [
    booking('standup', 'Team standup', 'atlas', 0, '09:00', '09:30'),
    booking('design', 'Design review', 'boreal', 0, '10:00', '11:30'),
    booking('interviews', 'Interviews', 'cove', 0, '13:00', '16:00'),
    booking('workshop', 'Customer workshop', 'dune', 0, '14:00', '17:30'),
    booking('planning', 'Sprint planning', 'atlas', 1, '09:30', '11:00'),
    booking('retro', 'Retrospective', 'boreal', 2, '15:00', '16:00'),
  ];
}

/** Saves a file the browser downloads. */
export function save(file: Blob, name: string): void {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = name;
  link.click();
  URL.revokeObjectURL(link.href);
}

/** An .ics file, which Google Calendar, Outlook and Apple Calendar import. */
export function icsFile(events: readonly NuiSchedulerEvent[]): Blob {
  return new Blob([nuiSchedulerToIcs(events, { name: 'Room bookings' })], {
    type: 'text/calendar',
  });
}
