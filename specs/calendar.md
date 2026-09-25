# Calendar

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A calendar (`nui-calendar`) to choose a day, a range of days, or several days. Each month (`nui-calendar-month`) has a header (`nui-calendar-header`) with previous and next buttons (`nui-calendar-nav`) and a title (`nui-calendar-title`), over a grid (`nui-calendar-grid`, a table) of weekday headers and six weeks of days (`nui-calendar-day`), starting on the locale's first day of the week. The title zooms out to the months of the year and to a span of twenty years, drawn as the same grid of `nui-calendar-cell`s.

Dates are plain ISO strings (`2026-09-25`) with no time zone, and the calendar is the Gregorian one. Names and digits follow the locale.

## API

| CSS hook                                              | Angular                     | Values                                                                     | Default                   |
| ----------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------- | ------------------------- |
| `data-selection`                                      | `selection`                 | `single`, `range` or `multiple`                                            | `single`                  |
| `data-selected`, `aria-selected`                      | `[(value)]`, `[(values)]`   | the chosen day; the chosen days, in order                                  | `null`, `[]`              |
| `data-range-start`, `data-range-end`, `data-in-range` | `[(range)]`                 | `{ start, end }`, both ends included                                       | `null`                    |
| —                                                     | `[(month)]`                 | the month shown, `2026-09` (the first, when several are)                   | the chosen day's          |
| `data-view`                                           | `[(view)]`                  | `day`, `month` or `year`                                                   | `day`                     |
| `aria-disabled`                                       | `min`, `max`, `unavailable` | the first and last days to choose; a function that rules out other days    | —                         |
| —                                                     | `months`                    | months side by side                                                        | 1                         |
| `nui-calendar-week`                                   | `weekNumbers`               | ISO week numbers before each week                                          | false                     |
| —                                                     | `firstDay`, `locale`        | 1 (Monday) to 7 (Sunday); names and digits                                 | the locale's; `LOCALE_ID` |
| —                                                     | `labels`                    | every text it shows or announces, for translation                          | —                         |
| —                                                     | `(picked)`, `focusDate()`   | each choice (a day, or a range once complete); moves the keyboard to a day | —                         |

Personality inputs: `corners`, `radius` and `density`.

## Behavior

- A range takes two picks. After the first, the band follows the pointer or the keyboard to show the range it would make; the second pick sets it, in order whichever end came first. Escape drops the first pick.
- Days outside the month show muted and can be picked, which turns to their month. Side by side, months show only their own days.
- Unavailable days and days outside `min` and `max` can be reached from the keyboard, but not chosen. The previous and next buttons are disabled when nothing lies beyond them.
- Six weeks always show, so the calendar keeps its height from month to month.
- Today is marked (`data-today`, `aria-current="date"`).

## Keyboard

The grid is one tab stop; the day that has it is the chosen one, or today.

| Key                                 | Behavior                                                            |
| ----------------------------------- | ------------------------------------------------------------------- |
| ← / →                               | Previous or next day (month, year); mirrored in right-to-left text  |
| ↑ / ↓                               | Previous or next week (three months, four years)                    |
| Home / End                          | First or last day of the week (month of the year, year of the span) |
| Page Up / Page Down                 | Previous or next month (year, span of years)                        |
| Shift + Page Up / Shift + Page Down | Previous or next year                                               |
| Enter, Space                        | Choose the day, or zoom in on the month or year                     |
| Escape                              | Drop the first end of a range, or zoom back in                      |

## Accessibility

- Each month is a `grid` (a native table) named by its title, with weekday headers that carry the full names in `abbr`.
- Every day is named by its full date, such as "Friday, September 25, 2026", with "Today", "unavailable" and the ends of a range added. `aria-selected` marks what's chosen, `aria-disabled` what can't be.
- The previous and next buttons are named for what they do, and the title button says it chooses a month or a year. Moving with them announces the new title through a status message.
- The grid uses a roving `tabindex`, so the page's tab order passes through it once.
