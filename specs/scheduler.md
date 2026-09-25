# Scheduler

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A scheduler (`nui-scheduler`) shows events in four views:

- **Week and day:** a grid (`nui-scheduler-grid`) with a header of days (`nui-scheduler-day`), an all-day row (`nui-scheduler-all-day`) and a row per slot of time, headed by its time (`nui-scheduler-time`). Timed events (`nui-scheduler-event`, `data-kind="timed"`) sit in the cell they start in and reach down over the slots they last, side by side where they overlap, with a handle to resize them (`nui-scheduler-resize`). A line marks now (`nui-scheduler-now`).
- **Month:** six weeks of days, each with its number (`nui-scheduler-date`), events as bars stacked in lanes (`data-kind="bar"`) that run across days, and a button for those that don't fit (`nui-scheduler-more`).
- **Agenda:** the days ahead that have events, each with its list (`nui-scheduler-agenda-day`).

Above them, a toolbar (`nui-scheduler-toolbar`): Today, previous and next (`nui-scheduler-page`), the title (`nui-scheduler-title`), and the views (`nui-scheduler-view`). The body (`nui-scheduler-body`) scrolls.

Events are data: `{ id, title, start, end, allDay?, tone?, editable?, data? }`, with plain ISO times and no time zone. A timed event's end isn't included; an all-day event's end is its last day. The scheduler never changes them itself: it reports what people do.

## API

| CSS hook                         | Angular                                                          | Values                                                                                                              | Default                   |
| -------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| —                                | `events`                                                         | the events to show                                                                                                  | `[]`                      |
| `data-view`                      | `[(view)]`, `views`                                              | `month`, `week`, `day`, `agenda`; the views offered                                                                 | `week`; all four          |
| —                                | `[(date)]`                                                       | the day shown, and where the keyboard is                                                                            | today                     |
| `--_slot`                        | `slotMinutes`                                                    | minutes per row of the time grid, and the step events move by                                                       | 30                        |
| —                                | `scrollHour`, `agendaDays`                                       | the hour the time grid opens at; the days the agenda looks ahead                                                    | 8; 30                     |
| `data-moving`, `data-ghost`      | `editable`                                                       | events move and resize by pointer and keyboard (an event's own `editable` wins)                                     | false                     |
| `data-selected`, `aria-selected` | `selectable`                                                     | time can be chosen on the grid                                                                                      | false                     |
| `data-tone`                      | an event's `tone`                                                | `accent`, `neutral`, `success`, `warning`, `danger`                                                                 | `accent`                  |
| —                                | `firstDay`, `locale`                                             | the first day of the week; names, digits and clock                                                                  | the locale's; `LOCALE_ID` |
| `aria-level`                     | `headingLevel`                                                   | the title's level; the agenda's days are one deeper                                                                 | 2                         |
| —                                | `labels`                                                         | every text it shows or announces, for translation                                                                   | —                         |
| —                                | `(eventClick)`, `(eventChange)`, `(slotSelect)`, `(rangeChange)` | an event chosen; moved or resized (`{ event, start, end }`); time chosen (`{ start, end, allDay }`); the days shown | —                         |

Templates: `nuiSchedulerEvent` draws events, with the event and its time. Personality inputs: `corners`, `radius` and `density`.

## Behavior

- Timed events that overlap share the width, each in the first free column, and stretch into free columns to their right. An event that crosses midnight shows in both days, cut square where it goes on. All-day events, and timed ones a day long or longer, run across the all-day row as bars.
- Dragging an event moves it by slots (or by days, in the month and the all-day row); dragging its handle changes its end. A ghost shows where it would land, and Escape cancels. Dragging across empty cells chooses that time. Nothing changes until the app updates `events` from `eventChange`.
- On a touch screen, a finger that moves at once scrolls the page. A long press (400ms) picks an event up, or starts choosing time, and from then on the finger drags it, not the page. A drag the browser takes back (`pointercancel`, when it scrolls or zooms) changes nothing. The handle is taller for a finger.
- A month cell shows three lanes of bars; "N more" opens that day.
- `rangeChange` reports the first and last day shown whenever they change, and once at the start, so events can be loaded as people move.
- The time grid opens scrolled to `scrollHour`. The now line moves every half minute.

## Keyboard

The grid is one tab stop: a day in the month, or a slot (or the all-day row) in the week and day.

| Key                               | Behavior                                                                            |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| Arrows                            | Move by day and by slot (a week, up and down, in the month); mirrored right to left |
| Home / End                        | First or last day of the week; with Ctrl, the all-day row or the last slot          |
| Page Up / Page Down               | Previous or next month, week or day                                                 |
| Shift + arrows                    | Extend the chosen time                                                              |
| Enter, Space (on a cell)          | Go into its events, or choose its time                                              |
| ↑ / ↓ (on an event)               | Previous or next event in the cell                                                  |
| Enter (on an event)               | Open it (`eventClick`)                                                              |
| Alt + arrows (on an event)        | Move it by a slot or a day (a week, up and down, in the month)                      |
| Alt + Shift + ↑ / ↓ (on an event) | Shorten or lengthen it                                                              |
| Escape                            | Back to the cell; drop the chosen time; cancel a drag                               |

## Accessibility

- The month, week and day are `grid`s named by their title. Days are column headers with their full date, and times row headers, so each cell reads with its day and time; a month cell also carries its full date and how many events it holds.
- Every event is a button named by its title, day and time, such as "Standup, Friday, September 25, 9:00 – 9:30 AM". Moving or resizing one announces its new time.
- Dragging has keyboard equivalents for all it does. For a single pointer without dragging (WCAG 2.5.7), a tap on an event emits `eventClick`, where the app opens its form to change the times, and a tap on a slot chooses it (`slotSelect`).
- The views are toggle buttons in a group, and paging announces the new title. The agenda's days are headings.
