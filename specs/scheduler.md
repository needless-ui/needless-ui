# Scheduler

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Implemented |

## Anatomy

A scheduler (`nui-scheduler`) shows events in five views:

- **Week and day:** a grid (`nui-scheduler-grid`) with a header of days (`nui-scheduler-day`), an all-day row (`nui-scheduler-all-day`) and a row per slot of time, headed by its time (`nui-scheduler-time`). Timed events (`nui-scheduler-event`, `data-kind="timed"`) sit in the cell they start in and reach down over the slots they last, side by side where they overlap, with a handle to resize them (`nui-scheduler-resize`). A line marks now (`nui-scheduler-now`). With resources, each resource gets a column of each day (`nui-scheduler-resource` heads them): the day shows a column per resource, and the week heads each resource's seven days with its name.
- **Month:** six weeks of days, each with its number (`nui-scheduler-date`), events as bars stacked in lanes (`data-kind="bar"`) that run across days, and a button for those that don't fit (`nui-scheduler-more`). Week numbers (`nui-scheduler-week`) can head each week.
- **Agenda:** the days ahead that have events, each with its list (`nui-scheduler-agenda-day`).
- **Timeline:** a row per resource, headed by its name (`nui-scheduler-resource`), and time running across: the slots of a day (`nui-scheduler-slot` heads them), or the days of a week or a month. Events are bars along their row, stacked in lanes where they overlap.

Above them, a toolbar (`nui-scheduler-toolbar`): Today, previous and next (`nui-scheduler-page`), the title (`nui-scheduler-title`), and the views (`nui-scheduler-view`). The body (`nui-scheduler-body`) scrolls. An app can leave the toolbar out and build its own.

Events are data: `{ id, title, start, end, allDay?, tone?, color?, class?, resource?, rrule?, exdate?, editable?, data? }`, with plain ISO times and no time zone. A timed event's end isn't included; an all-day event's end is its last day. Resources are data too: `{ id, title, tone?, color?, businessHours?, data? }`. The scheduler never changes events itself: it reports what people do.

## API

| CSS hook                         | Angular                                                          | Values                                                                                                                                    | Default                                   |
| -------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| —                                | `events`, `resources`                                            | the events to show; the rooms, people or machines they belong to                                                                          | `[]`                                      |
| `data-view`                      | `[(view)]`, `views`                                              | `month`, `week`, `day`, `agenda`, `timeline`; the views offered                                                                           | `week`; all (the timeline with resources) |
| `data-span`                      | `timelineSpan`                                                   | `day` (by slots), `week`, `month` (by days)                                                                                               | `day`                                     |
| —                                | `[(date)]`                                                       | the day shown, and where the keyboard is                                                                                                  | today                                     |
| `--nui-scheduler-row-height`     | `slotMinutes`, `snapMinutes`                                     | minutes per row of the time grid (or column of the day's timeline); the step events move by                                               | 30; `slotMinutes`                         |
| —                                | `dayStart`, `dayEnd`, `scrollHour`, `agendaDays`                 | the hours the time grid shows; the hour it opens at; the days the agenda looks ahead                                                      | 0, 24; 8; 30                              |
| `data-off`                       | `businessHours`, a resource's `businessHours`                    | working hours: `{ days, start, end }[]`, days 1 (Monday) to 7; other time is shaded                                                       | none                                      |
| —                                | `weekends`                                                       | shows the locale's weekend days; without, every view leaves them out                                                                      | true                                      |
| `nui-scheduler-week`             | `weekNumbers`                                                    | ISO week numbers before each week of the month, and above the times                                                                       | false                                     |
| `data-moving`, `data-ghost`      | `editable`                                                       | events move and resize by pointer and keyboard (an event's own `editable` wins)                                                           | false                                     |
| `data-selected`, `aria-selected` | `selectable`                                                     | time can be chosen on the grid                                                                                                            | false                                     |
| `data-invalid`                   | `allow`                                                          | a function that turns down a move, a resize or a choice of time                                                                           | —                                         |
| `data-tone`, `data-color`        | an event's (or its resource's) `tone`, `color`                   | `accent`, `neutral`, `success`, `warning`, `danger`; any CSS color                                                                        | `accent`                                  |
| —                                | `firstDay`, `locale`                                             | the first day of the week; names, digits and clock                                                                                        | the locale's; `LOCALE_ID`                 |
| `aria-level`                     | `headingLevel`                                                   | the title's level; the agenda's days are one deeper                                                                                       | 2                                         |
| `nui-scheduler-toolbar`          | `toolbar`; `previous()`, `next()`, `goToday()`, `title`          | shows the toolbar; what a toolbar of your own calls                                                                                       | true                                      |
| —                                | `labels`                                                         | every text it shows or announces, for translation                                                                                         | —                                         |
| —                                | `(eventClick)`, `(eventChange)`, `(slotSelect)`, `(rangeChange)` | an event chosen; moved or resized (`{ event, start, end, resource? }`); time chosen (`{ start, end, allDay, resource? }`); the days shown | —                                         |

Templates: `nuiSchedulerEvent` draws events, with the event and its time; `nuiSchedulerResource` draws the heads of resources. Personality inputs: `corners`, `radius` and `density`. Sizes: `--nui-scheduler-row-height`, `--nui-scheduler-column-width` (the least a day or a resource gets), `--nui-scheduler-slot-width` (a column of the timeline) and `--nui-scheduler-resource-width` (its column of names).

Helpers: `nuiSchedulerOccurrences(event, first, last)` gives an event as it shows on those days (each occurrence of a repeating one); `nuiSchedulerRule(text)` reads a rule; `nuiSchedulerToIcs(events, options)` writes an iCalendar file and `nuiSchedulerFromIcs(text, { timeZone })` reads one.

React (`@needless-ui/react/scheduler`) takes the same API in React's terms: `view` and `date` are controlled (`view`, `onViewChange`) or the scheduler's own (`defaultView`, `defaultDate`), outputs are callbacks (`onEventClick`, `onEventChange`, `onSlotSelect`, `onRangeChange`), the templates are `renderEvent` and `renderResource`, and `previous()`, `next()`, `goToday()` and `title` are on its `ref` (`toolbar` can also be a function that draws a toolbar of its own). `locale` defaults to `en-US`.

## Behavior

- Timed events that overlap share the width, each in the first free column, and stretch into free columns to their right. An event that crosses midnight, or the hours shown, shows its part, cut square where it goes on. All-day events, and timed ones a day long or longer, run across the all-day row as bars. Events wholly outside the hours shown don't show in the time grid.
- In the timeline, events along a day keep their times to the minute and stack in lanes where they overlap (each at least 15 minutes wide); along days, they cover the days they touch. Without resources, the timeline has one row of every event.
- An event with resources shows in each of their columns or rows. Events without resources don't show in the resource columns or the timeline rows.
- A repeating event (`rrule`, RFC 5545: FREQ DAILY, WEEKLY, MONTHLY or YEARLY, INTERVAL, COUNT, UNTIL, BYDAY with its ordinal, BYMONTHDAY, BYMONTH, BYSETPOS, WKST) shows each occurrence that falls in the days shown, at its start's time of day. Its start is always the first occurrence; COUNT counts from it; `exdate` leaves out occurrences by their start (a date leaves out that day's). The scheduler reports an occurrence as the event with its own `start` and `end`, and `recurrenceId`: the start its rule gave it.
- Dragging an event moves it by `snapMinutes` (or by days, in the month, the all-day row and a timeline of days), and onto another resource's column or row; dragging its handle changes its end (along bars, across). A ghost shows where it would land, in red when `allow` turns it down, and Escape cancels. Dragging across empty cells chooses that time, for the resource under it. Nothing changes until the app updates `events` from `eventChange`; what `allow` turns down emits nothing.
- On a touch screen, a finger that moves at once scrolls the page. A long press (400ms) picks an event up, or starts choosing time, and from then on the finger drags it, not the page. A drag the browser takes back (`pointercancel`, when it scrolls or zooms) changes nothing. The handle is bigger for a finger. The click that ends a drag, or a tap that chose time, isn't a click on the event under it (the one just moved or booked there), and emits nothing.
- With the weekend hidden, every view leaves it out: a day view of a weekend day shows the next weekday, paging and arrow keys skip it, and moves land on days shown. A month pages to a day of the next month.
- A month cell shows three lanes of bars; "N more" opens that day.
- `rangeChange` reports the first and last day shown whenever they change, and once at the start, so events can be loaded as people move. Hidden weekend days count in the range.
- The time grid opens scrolled to `scrollHour`: down the week and the day, with the hour's label in view, and across a day's timeline, right after the resources' names. The other way, each view opens at its start, whatever the view before it showed. The first hour's label sits under its line, clear of the head; the others sit on theirs. The now line moves every half minute.

## Keyboard

The grid is one tab stop: a day in the month, a slot (or the all-day row) in the week and day, and a resource's slot or day in the timeline.

| Key                                | Behavior                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arrows                             | Move by day and by slot (a week, up and down, in the month); in the timeline, along time and between resources; mirrored right to left                                         |
| Home / End                         | First or last day of the week (of a resource's days); along the timeline, its first or last column; with Ctrl, the all-day row or the last slot, or the first or last resource |
| Page Up / Page Down                | Previous or next month, week or day                                                                                                                                            |
| Shift + arrows                     | Extend the chosen time                                                                                                                                                         |
| Enter, Space (on a cell)           | Go into its events, or choose its time                                                                                                                                         |
| ↑ / ↓ (on an event)                | Previous or next event in the cell                                                                                                                                             |
| Enter (on an event)                | Open it (`eventClick`)                                                                                                                                                         |
| Alt + arrows (on an event)         | Move it to the next cell that way: by `snapMinutes` or a day, to the next resource (a week, up and down, in the month)                                                         |
| Alt + Shift + arrows (on an event) | Shorten or lengthen it along time: down the time grid, across the timeline and bars                                                                                            |
| Escape                             | Back to the cell; drop the chosen time; cancel a drag                                                                                                                          |

## Accessibility

- The month, week, day and timeline are `grid`s named by their title. Days and resources are column headers (days with their full date), and times and resources row headers, so each cell reads with its day, time and resource; a month cell also carries its full date and how many events it holds.
- Every event is a button named by its title, resources, day and time, such as "Standup, Atlas, Friday, September 25, 9:00 – 9:30 AM", and "Repeats" for an occurrence of a repeating event. Moving or resizing one announces its new time; a move `allow` turns down announces "Not available".
- Dragging has keyboard equivalents for all it does. For a single pointer without dragging (WCAG 2.5.7), a tap on an event emits `eventClick`, where the app opens its form to change the times, and a tap on a slot chooses it (`slotSelect`).
- The views are toggle buttons in a group, and paging announces the new title. The agenda's days are headings.
- Shading outside working hours is decoration: what's open stays in the app's own rules (`allow`), which also hold for the keyboard.
