---
'@needless-ui/angular': minor
'@needless-ui/css': minor
---

**Scheduler:** resources and a timeline, repeating events, working hours, and iCalendar files.

- `resources` (rooms, people, machines) lay out as rows of the new `view="timeline"`, and as columns of the day and the week. An event's `resource` names one or several of them. The timeline shows a day by its slots, or a week or a month by its days (`timelineSpan`), with overlapping events stacked in lanes and the time scrolled to `scrollHour`. Events drag onto another resource, and Alt with the arrows moves them there from the keyboard; `eventChange` reports the new `resource`, and `slotSelect` the resource time was chosen for. `nuiSchedulerResource` draws the heads of resources.
- Repeating events: an event's `rrule` (RFC 5545: FREQ, INTERVAL, COUNT, UNTIL, BYDAY with ordinals such as `-1FR`, BYMONTHDAY, BYMONTH, BYSETPOS, WKST) repeats it from its start, and `exdate` leaves occurrences out. The scheduler reports an occurrence with its own times and a `recurrenceId`, as iCalendar names one. `nuiSchedulerOccurrences()` gives them to apps, and `nuiSchedulerRule()` reads a rule.
- `nuiSchedulerToIcs()` writes events as an iCalendar file to add to any calendar, and `nuiSchedulerFromIcs()` reads one, moving times in UTC or another zone to the reader's (or `timeZone`), with rules, exceptions, and changed or cancelled occurrences.
- `dayStart` and `dayEnd` choose the hours the time grid shows. `businessHours` (and a resource's own) shade the time outside working hours. `weekends="false"` leaves out the locale's weekend in every view, and `weekNumbers` shows ISO weeks. `snapMinutes` sets the step events move and resize by.
- `allow` decides whether a move, a resize or a choice of time can happen: a drag it turns down shows in red and drops nothing, and the keyboard announces "Not available".
- Customization: an event's `color` (any CSS color) and `class`, a resource's `tone` and `color` for its events, `toolbar="false"` with the public `previous()`, `next()`, `goToday()` and `title` for a toolbar of your own (`exportAs: 'nuiScheduler'`), and the sizes `--nui-scheduler-row-height`, `--nui-scheduler-column-width`, `--nui-scheduler-slot-width` and `--nui-scheduler-resource-width`. All-day bars resize from their end.
- Cell keys (`data-cell`) name slots by their minutes since midnight, such as `2026-09-25|540`, and a resource's cells end with its index.
- Fixes: time chosen on today's column now shows (today's tint hid it), the time grid opens at `scrollHour` again when a view comes back, focus no longer jumps back into the grid after a key that moved nothing, and an `agendaDays` below 1 shows a day.
