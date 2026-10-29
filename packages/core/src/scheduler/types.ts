/**
 * What a scheduler says and what it reports, the same in every binding: its
 * words, and the changes and choices of time people make on it.
 */
import type { NuiSchedulerEvent, NuiSchedulerView } from './layout.js';

type Period = 'month' | 'week' | 'day' | 'agenda';

/** Every text the scheduler shows or announces. */
export interface NuiSchedulerLabels {
  today: string;
  /** The timeline pages by its day, week or month. */
  previous: Record<Period, string>;
  next: Record<Period, string>;
  views: Record<NuiSchedulerView, string>;
  /** Names the group of view buttons. */
  view: string;
  allDay: string;
  /** Heads the column of times. */
  time: string;
  /** Heads the timeline's column of resources. */
  resource: string;
  /** Heads the month's column of week numbers. */
  week: string;
  weekNumber: (week: number) => string;
  more: (count: number) => string;
  events: (count: number) => string;
  empty: string;
  /** Said of an event that repeats, after its time. */
  repeats: string;
  /** Said after an event moves or changes length, before its new time. */
  moved: (title: string, when: string) => string;
  /** Said when `allow` turns down a move or a choice of time. */
  unavailable: string;
}

export const NUI_SCHEDULER_LABELS: NuiSchedulerLabels = {
  today: 'Today',
  previous: {
    month: 'Previous month',
    week: 'Previous week',
    day: 'Previous day',
    agenda: 'Earlier',
  },
  next: { month: 'Next month', week: 'Next week', day: 'Next day', agenda: 'Later' },
  views: { month: 'Month', week: 'Week', day: 'Day', agenda: 'Agenda', timeline: 'Timeline' },
  view: 'View',
  allDay: 'All day',
  time: 'Time',
  resource: 'Resource',
  week: 'Wk',
  weekNumber: (week) => `Week ${week}`,
  more: (count) => `${count} more`,
  events: (count) => (count === 1 ? '1 event' : `${count} events`),
  empty: 'Nothing scheduled.',
  repeats: 'Repeats',
  moved: (title, when) => `${title}: ${when}`,
  unavailable: 'Not available',
};

/** An event moved or resized to new times. */
export interface NuiSchedulerChange<T = unknown> {
  /** The event, or the occurrence of a repeating one (with its `recurrenceId`). */
  event: NuiSchedulerEvent<T>;
  /** Dates for all-day events (the end included), dates and times otherwise. */
  start: string;
  end: string;
  /** Its resources, when it moved to another one. */
  resource?: string | readonly string[];
}

/** Time chosen on the grid, to create an event in. */
export interface NuiSchedulerSlot {
  /** Dates when `allDay` (the end included), dates and times otherwise (the end not). */
  start: string;
  end: string;
  allDay: boolean;
  /** The resource it was chosen for, in the timeline and the resource columns. */
  resource?: string;
}
