# Date and time pickers

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

- **Date field** (`nui-date-field`): a group of segments (`nui-date-segment`), one per part of the date, in the locale's order and with its separators (`nui-date-literal`). With `granularity`, time segments follow: hour, minute, second, and AM or PM where the locale uses a 12-hour clock.
- **Time field** (`nui-time-field`): the time segments alone.
- **Date picker** (`nui-date-picker`): a date field and a button (`nui-date-picker-button`) that opens a calendar in a popover (`nui-date-picker-popover`).
- **Date range picker** (`nui-date-range-picker`): a start field, a dash (`nui-date-range-dash`) and an end field, with a popover holding presets (`nui-date-range-preset`) and a two-month range calendar.

Values are plain ISO strings with no time zone, as native inputs hold them: `2026-09-25`, `14:30`, `2026-09-25T14:30`; a range is `{ start, end }`. Every one works with Signal Forms, reactive forms and `ngModel`.

## API

| CSS hook           | Angular                             | Values                                                                      | Default                     |
| ------------------ | ----------------------------------- | --------------------------------------------------------------------------- | --------------------------- |
| —                  | `[(value)]`                         | the date, time, date and time, or range; null until every segment is filled | `null`                      |
| `data-type`        | `granularity`                       | `day`, `hour`, `minute` or `second` (a time field: `hour` to `second`)      | `day` / `minute`            |
| `data-invalid`     | `min`, `max`                        | the earliest and latest values; outside them the field is invalid           | —                           |
| —                  | `unavailable`                       | days the calendar won't pick (pickers)                                      | —                           |
| `data-placeholder` | `placeholder`                       | where empty segments start from with the arrow keys                         | now                         |
| —                  | `hourCycle`, `minuteStep`           | a 12- or 24-hour clock; how far the arrows move minutes                     | the locale's; 1             |
| —                  | `presets`                           | named ranges, such as `nuiDateRangePresets()` (range picker)                | `[]`                        |
| —                  | `months`, `firstDay`, `weekNumbers` | the calendar's (pickers)                                                    | 1 or 2; the locale's; false |
| `data-disabled`    | `disabled`, `readonly`              | booleans                                                                    | false                       |
| —                  | `locale`, `labels`                  | names, digits and order; every text, for translation                        | `LOCALE_ID`                 |
| —                  | `focus()`, `show()`                 | focus the first empty segment; open the calendar                            | —                           |

## Behavior

- Digits fill a segment and move on as soon as no other digit could follow: typing 3 in a month moves on, 1 waits for a possible 10, 11 or 12. A year takes its value once it has four digits. Separators such as `/`, `.` and `:` move on too.
- The arrow keys step a segment, wrapping around (years stop at 1 and 9999); on an empty segment, the first press shows the placeholder's value. The day of the month shrinks to fit when the month or year changes.
- Backspace clears a segment; on an empty one, it goes back to the one before. Pasting a date, ISO or in the locale's format, fills every segment.
- Digits of other scripts (Arabic-Indic, Persian, Devanagari…) type like 0 to 9, and segments show the locale's.
- The calendar opens on the chosen day, and picking closes it and returns focus to the button. With a time, the calendar changes only the date.
- A range picker's value is null until both ends are set in order; an end before the start marks it invalid.

## Keyboard

| Key                        | Behavior                                                |
| -------------------------- | ------------------------------------------------------- |
| Digits, A / P              | Type into the segment; A and P set AM or PM             |
| ↑ / ↓, Page Up / Page Down | Step the segment by one, or by more                     |
| Home / End                 | The segment's lowest or highest value                   |
| ← / →, Tab                 | Previous or next segment (← and → mirror right to left) |
| Backspace, Delete          | Clear the segment, then go back                         |

The calendar's keys are in calendar.md; Escape closes its popover.

## Accessibility

- A field is a `group`, named with `aria-label` or `aria-labelledby` on it. Each segment is a `spinbutton` named for its part ("Month"), with its value, range and a text value that reads months by name and empty segments as "Empty".
- Segments are editable text, so touch keyboards open on digits (`inputmode="numeric"`), and a focused segment gets a solid fill.
- `aria-invalid` marks a value outside `min` and `max`.
- The picker's button is named "Choose a date"; its popover is a `dialog` named "Calendar". The range picker's fields are named "Start date" and "End date", and its presets are toggle buttons.
