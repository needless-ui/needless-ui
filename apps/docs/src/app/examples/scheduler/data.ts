import { nuiAddDays, type NuiDate, nuiStartOfWeek, nuiToday } from '@needless-ui/angular';
import type { NuiSchedulerEvent } from '@needless-ui/angular/scheduler';

/** A week of work, this week, so the demos always look current. */
export function week(): NuiSchedulerEvent[] {
  const monday = nuiStartOfWeek(nuiToday(), 1);
  const at = (day: number, time: string) => `${nuiAddDays(monday, day)}T${time}`;
  return [
    ...[0, 1, 2, 3, 4].map((day) => ({
      id: `standup-${day}`,
      title: 'Standup',
      start: at(day, '09:00'),
      end: at(day, '09:15'),
      tone: 'neutral' as const,
    })),
    { id: 'review', title: 'Design review', start: at(1, '10:00'), end: at(1, '11:30') },
    {
      id: 'lunch',
      title: 'Lunch with Ada',
      start: at(2, '12:30'),
      end: at(2, '13:30'),
      tone: 'success',
    },
    {
      id: 'focus',
      title: 'Focus time',
      start: at(2, '14:00'),
      end: at(2, '17:00'),
      tone: 'neutral',
    },
    {
      id: 'interview',
      title: 'Interview',
      start: at(2, '15:00'),
      end: at(2, '16:00'),
      tone: 'warning',
    },
    { id: 'release', title: 'Release', start: at(3, '16:00'), end: at(3, '17:00'), tone: 'danger' },
    {
      id: 'conference',
      title: 'Conference',
      start: nuiAddDays(monday, 3),
      end: nuiAddDays(monday, 4),
    },
    { id: 'retro', title: 'Retro', start: at(4, '11:00'), end: at(4, '12:00') },
  ];
}

/** A month of plans around today, with a busy day and events across days. */
export function month(): NuiSchedulerEvent[] {
  const today = nuiToday();
  const day = (offset: number): NuiDate => nuiAddDays(today, offset);
  return [
    { id: 'trip', title: 'Trip to Lisbon', start: day(-9), end: day(-6), tone: 'success' },
    { id: 'launch', title: 'Launch', start: day(0), end: day(0), tone: 'danger' },
    {
      id: 'standup',
      title: 'Standup',
      start: `${day(0)}T09:00`,
      end: `${day(0)}T09:15`,
      tone: 'neutral',
    },
    { id: 'demo', title: 'Demo day', start: `${day(0)}T15:00`, end: `${day(0)}T16:00` },
    {
      id: 'party',
      title: 'Launch party',
      start: `${day(0)}T19:00`,
      end: `${day(0)}T23:00`,
      tone: 'warning',
    },
    { id: 'offsite', title: 'Team offsite', start: day(3), end: day(5) },
    {
      id: 'dentist',
      title: 'Dentist',
      start: `${day(8)}T08:30`,
      end: `${day(8)}T09:30`,
      tone: 'neutral',
    },
    { id: 'birthday', title: 'Grace’s birthday', start: day(12), end: day(12), tone: 'success' },
    { id: 'workshop', title: 'Workshop', start: `${day(-3)}T13:00`, end: `${day(-3)}T17:00` },
  ];
}

export interface Booking {
  room: string;
  host: string;
}

/** Today's bookings of the meeting rooms. */
export function rooms(): NuiSchedulerEvent<Booking>[] {
  const today = nuiToday();
  const at = (time: string) => `${today}T${time}`;
  const booking = (
    id: string,
    title: string,
    start: string,
    end: string,
    room: string,
    host: string,
  ) => ({
    id,
    title,
    start: at(start),
    end: at(end),
    tone:
      room === 'Atlas'
        ? ('accent' as const)
        : room === 'Boreal'
          ? ('success' as const)
          : ('warning' as const),
    data: { room, host },
  });
  return [
    booking('kickoff', 'Kickoff', '09:00', '10:00', 'Atlas', 'Ada'),
    booking('pairing', 'Pairing', '09:30', '11:00', 'Boreal', 'Alan'),
    booking('1on1', '1:1', '10:15', '10:45', 'Cirrus', 'Grace'),
    booking('planning', 'Sprint planning', '11:00', '12:30', 'Atlas', 'Ada'),
    booking('hiring', 'Hiring sync', '13:30', '14:15', 'Cirrus', 'Grace'),
    booking('customer', 'Customer call', '14:00', '15:00', 'Boreal', 'Margaret'),
  ];
}
