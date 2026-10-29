# @needless-ui/core

The framework-free logic behind [Needless UI](https://github.com/needless-ui/needless-ui), the Needlessly Engineered Styling Toolkit. [`@needless-ui/angular`](https://www.npmjs.com/package/@needless-ui/angular) and [`@needless-ui/react`](https://www.npmjs.com/package/@needless-ui/react) both build on it, so a component behaves the same in either framework. It has no dependencies and no DOM, except where it measures or places elements.

You rarely install it yourself: the framework packages depend on it and export what apps use. It's here for apps that want the logic without a component, such as reading an iCalendar file on a server.

| Entry point                   | What it holds                                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@needless-ui/core`           | Plain dates and times (ISO strings, no time zone), numbers read in a locale, placement of floating elements, and a virtualizer for long lists                 |
| `@needless-ui/core/scheduler` | Events laid out in days and lanes, repeat rules (RFC 5545 `RRULE`), iCalendar files (`nuiSchedulerToIcs`, `nuiSchedulerFromIcs`), and the scheduler's words   |
| `@needless-ui/core/grid`      | The data grid's model as pure functions: columns laid out, rows filtered, sorted, grouped and paged, the selection, CSV, and a spreadsheet writer (`nuiXlsx`) |

```ts
import { nuiSchedulerFromIcs, nuiSchedulerOccurrences } from '@needless-ui/core/scheduler';

const events = nuiSchedulerFromIcs(await file.text(), { timeZone: 'Europe/Rome' });
const october = events.flatMap((event) =>
  nuiSchedulerOccurrences(event, '2026-10-01', '2026-10-31'),
);
```

ESM only, with one module per file, so bundlers keep only what you import.

## License

[MIT](https://github.com/needless-ui/needless-ui/blob/main/LICENSE)
