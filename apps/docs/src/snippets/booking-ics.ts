import { type NuiSchedulerEvent, nuiSchedulerToIcs } from '@needless-ui/angular/scheduler';

/** Saves events as an .ics file, which Google Calendar, Outlook and Apple Calendar import. */
export function downloadIcs(events: readonly NuiSchedulerEvent[], name: string): void {
  const file = new Blob([nuiSchedulerToIcs(events, { name })], { type: 'text/calendar' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = `${name}.ics`;
  link.click();
  URL.revokeObjectURL(link.href);
}
