import { Component, signal } from '@angular/core';
import { type CalendarOptions, type EventInput, FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/angular/interaction';
import themePlugin from '@fullcalendar/angular/themes/classic';
import resourceTimelinePlugin from '@fullcalendar/angular-scheduler/resource-timeline';

@Component({
  selector: 'app-bookings',
  imports: [FullCalendarModule],
  template: `<full-calendar [options]="options" [events]="bookings()" />`,
})
export class Bookings {
  protected readonly bookings = signal<EventInput[]>([]);

  protected readonly options: CalendarOptions = {
    schedulerLicenseKey: 'YOUR-LICENSE-KEY', // Premium: see fullcalendar.io/license
    plugins: [themePlugin, interactionPlugin, resourceTimelinePlugin],
    initialView: 'resourceTimelineDay',
    headerToolbar: { start: 'prev,next today', center: 'title', end: '' },
    resources: [
      { id: 'atlas', title: 'Atlas' },
      { id: 'boreal', title: 'Boreal' },
    ],
    resourceColumns: [{ field: 'title', headerContent: 'Room' }],
    slotMinTime: '08:00',
    slotMaxTime: '19:00',
    snapDuration: '00:15',
    businessHours: { daysOfWeek: [1, 2, 3, 4, 5], startTime: '08:00', endTime: '19:00' },
    editable: true,
    selectable: true,
    eventOverlap: false,
    selectOverlap: false,
    select: ({ startStr, endStr, resource, view }) => {
      view.calendar.unselect();
      this.bookings.update((all) => [
        ...all,
        {
          id: crypto.randomUUID(),
          title: 'New booking',
          start: startStr,
          end: endStr,
          resourceId: resource?.id,
        },
      ]);
    },
    // FullCalendar has already moved the booking on screen: keep the app's copy in step.
    eventDrop: ({ event, newResource }) =>
      this.save(event.id, event.startStr, event.endStr, newResource?.id),
    eventResize: ({ event }) => this.save(event.id, event.startStr, event.endStr),
  };

  private save(id: string, start: string, end: string, room?: string): void {
    this.bookings.update((all) =>
      all.map((b) => (b.id === id ? { ...b, start, end, resourceId: room ?? b['resourceId'] } : b)),
    );
  }
}
