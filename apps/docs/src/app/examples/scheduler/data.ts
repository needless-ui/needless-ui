import { nuiAddDays, type NuiDate, nuiStartOfWeek, nuiToday } from '@needless-ui/angular';
import type {
  NuiSchedulerEvent,
  NuiSchedulerResource,
  NuiSchedulerTone,
} from '@needless-ui/angular/scheduler';

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

export interface Room {
  seats: number;
}

/** Meeting rooms, each with its seats and a color for its bookings. */
export const ROOMS: NuiSchedulerResource<Room>[] = [
  { id: 'atlas', title: 'Atlas', tone: 'accent', data: { seats: 12 } },
  { id: 'boreal', title: 'Boreal', tone: 'success', data: { seats: 6 } },
  { id: 'cirrus', title: 'Cirrus', tone: 'warning', data: { seats: 4 } },
  { id: 'delta', title: 'Delta', tone: 'neutral', data: { seats: 20 } },
];

export interface Host {
  host: string;
}

/** Today's bookings of the meeting rooms. */
export function bookings(): NuiSchedulerEvent<Host>[] {
  const today = nuiToday();
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
    start: `${today}T${start}`,
    end: `${today}T${end}`,
    resource: room,
    data: { host },
  });
  return [
    booking('kickoff', 'Kickoff', '09:00', '10:00', 'atlas', 'Ada'),
    booking('planning', 'Sprint planning', '11:00', '12:30', 'atlas', 'Ada'),
    booking('pairing', 'Pairing', '09:30', '11:00', 'boreal', 'Alan'),
    booking('customer', 'Customer call', '14:00', '15:00', 'boreal', 'Margaret'),
    booking('1on1', '1:1', '10:15', '10:45', 'cirrus', 'Grace'),
    booking('hiring', 'Hiring sync', '13:30', '14:15', 'cirrus', 'Grace'),
    booking('all-hands', 'All hands', '16:00', '17:00', 'delta', 'Linus'),
  ];
}

/** People of a team, each with a color for their plans. */
export const TEAM: NuiSchedulerResource[] = [
  { id: 'ada', title: 'Ada Lovelace', color: 'oklch(58% 0.16 265)' },
  { id: 'alan', title: 'Alan Turing', color: 'oklch(62% 0.15 150)' },
  { id: 'grace', title: 'Grace Hopper', color: 'oklch(66% 0.16 60)' },
  { id: 'margaret', title: 'Margaret Hamilton', color: 'oklch(60% 0.18 330)' },
  { id: 'linus', title: 'Linus Torvalds', color: 'oklch(62% 0.12 200)' },
];

/** A month of the team: trips, time off and projects, around today. */
export function plans(): NuiSchedulerEvent[] {
  const today = nuiToday();
  const day = (offset: number): NuiDate => nuiAddDays(today, offset);
  const plan = (
    id: string,
    title: string,
    from: number,
    to: number,
    who: string,
    tone?: NuiSchedulerTone,
  ) => ({
    id,
    title,
    start: day(from),
    end: day(to),
    resource: who,
    ...(tone ? { tone } : {}),
  });
  return [
    plan('launch', 'Launch', -6, 2, 'ada'),
    plan('vacation-ada', 'Vacation', 8, 15, 'ada', 'neutral'),
    plan('conference', 'Conference in Lisbon', -2, 0, 'alan'),
    plan('migration', 'Data migration', 3, 12, 'alan'),
    plan('on-call', 'On call', -10, -4, 'grace', 'warning'),
    plan('audit', 'Security audit', 1, 6, 'grace'),
    plan('sick', 'Out sick', -1, -1, 'margaret', 'neutral'),
    plan('flight', 'Flight software', 2, 18, 'margaret'),
    plan('kernel', 'Kernel release', -4, 5, 'linus'),
    plan('workshop', 'Workshop', 9, 10, 'linus', 'success'),
  ];
}

/** Routines that repeat: standups, one-on-ones, a monthly retro and payday. */
export function routines(): NuiSchedulerEvent[] {
  const monday = nuiStartOfWeek(nuiToday(), 1);
  const at = (day: number, time: string) => `${nuiAddDays(monday, day)}T${time}`;
  return [
    {
      id: 'standup',
      title: 'Standup',
      start: at(-28, '09:00'),
      end: at(-28, '09:15'),
      tone: 'neutral',
      rrule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR',
    },
    {
      id: 'one-on-one',
      title: '1:1 with Grace',
      start: at(-27, '15:00'),
      end: at(-27, '15:30'),
      tone: 'success',
      rrule: 'FREQ=WEEKLY;INTERVAL=2;BYDAY=TU,TH',
    },
    {
      id: 'gym',
      title: 'Gym',
      start: at(-14, '18:00'),
      end: at(-14, '19:00'),
      tone: 'warning',
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12',
    },
    {
      id: 'retro',
      title: 'Retro',
      start: at(-60, '16:00'),
      end: at(-60, '17:00'),
      rrule: 'FREQ=MONTHLY;BYDAY=FR;BYSETPOS=-1',
    },
    {
      id: 'payday',
      title: 'Payday',
      start: nuiAddDays(monday, -60),
      end: nuiAddDays(monday, -60),
      tone: 'success',
      rrule: 'FREQ=MONTHLY;BYMONTHDAY=-1',
    },
  ];
}

/** A work week with lunch breaks, in colors of its own. */
export function workWeek(): NuiSchedulerEvent[] {
  const monday = nuiStartOfWeek(nuiToday(), 1);
  const at = (day: number, time: string) => `${nuiAddDays(monday, day)}T${time}`;
  const event = (
    id: string,
    title: string,
    day: number,
    start: string,
    end: string,
    color: string,
  ) => ({
    id,
    title,
    start: at(day, start),
    end: at(day, end),
    color,
  });
  return [
    event('deep-work', 'Deep work', 0, '09:00', '12:00', 'oklch(58% 0.16 265)'),
    event('design', 'Design critique', 1, '10:30', '11:30', 'oklch(60% 0.18 330)'),
    event('support', 'Support rotation', 1, '14:00', '17:30', 'oklch(66% 0.16 60)'),
    event('interviews', 'Interviews', 2, '09:30', '12:00', 'oklch(62% 0.15 150)'),
    event('review', 'Code review', 3, '15:00', '16:30', 'oklch(58% 0.16 265)'),
    event('demo', 'Demo', 4, '11:00', '12:00', 'oklch(62% 0.12 200)'),
    event('early', 'Early flight', 4, '06:00', '08:30', 'oklch(55% 0.02 265)'),
  ];
}
