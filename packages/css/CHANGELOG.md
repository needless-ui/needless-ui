# @needless-ui/css

## 0.6.0

### Minor Changes

- [`ba7d0c6`](https://github.com/needless-ui/needless-ui/commit/ba7d0c6d0ec185042ad50f0a0d12cf698cefa7f1) - An AI chat (`@needless-ui/angular/chat`), and the Markdown renderer its replies use (`@needless-ui/angular/markdown`).

  - **`NuiChatSession`** holds the conversation, with no DOM. Its `respond` function returns the reply whole, as a promise, from an `async function*` or as an Observable, in text pieces or deltas that add reasoning, tool calls, sources and data. Stopping ends the reply at once, even when the source is slow to notice.
  - **Nothing is lost:** a retried reply or an edited question becomes a new version beside the old one, and the conversation keeps every branch, to switch between and to save with `all()`.
  - **`<nui-chat>`** follows a streaming reply until the reader scrolls up, then offers a jump back. Replies have copy, retry and rating actions; the user's messages can be edited in place. Reasoning and tool calls fold away, or tools draw with a `nuiChatTool` template of yours. The composer grows with its text, sends with Enter (never mid-IME), turns into a stop button while a reply arrives, and takes files picked, pasted or dropped. `<nui-chat-thread>` and `<nui-chat-composer>` work apart, for layouts of your own.
  - **Accessible:** the conversation is a feed of articles, named by headings screen readers see, with Page Up and Page Down between them. Each reply is announced once complete, not word by word.
  - **Stream readers:** `nuiTextStream`, `nuiEventStream` (server-sent events, by the HTML standard's rules) and `nuiJsonStream` turn a `fetch` response into a reply.
  - **`<nui-markdown>`** renders CommonMark with GitHub's tables, task lists, strikethrough and bare links, as real elements and never as HTML. Links go only to web, mail and phone addresses. While `streaming`, an open code fence is already code, a lone `**` waits for its partner, a table's head is a table, and a caret follows the last words; unchanged blocks keep their DOM. Code blocks get a copy button, or a `nuiMarkdownCode` template for highlighting.

- [`eb3dab4`](https://github.com/needless-ui/needless-ui/commit/eb3dab4b14fc0083656a25209ab60f14ce21451b) - A carousel (`@needless-ui/angular/carousel`): slides in a row that scrolls and snaps natively, so swiping, trackpads and the arrow keys move it, with previous and next buttons, dots, several slides per view (`perView`, or `auto` for slides with their own width), `loop`, and `[(index)]`. With `autoplay`, it turns by itself behind a rotation control first in the tab order, with a ring that fills until the next slide; rotation pauses under the pointer and on hidden pages, and stops for good when keyboard focus comes in, as the WAI-ARIA carousel pattern asks. Where it lands is announced after a swipe or a button, and it runs right to left.

- [`6f9e416`](https://github.com/needless-ui/needless-ui/commit/6f9e41638c568e12f6fbfefa79a8b278cc347200) - A calendar (`@needless-ui/angular/calendar`) and date and time pickers (`@needless-ui/angular/date-picker`), on plain ISO values with no time zone: `2026-09-25`, `14:30`, `2026-09-25T14:30`.

  - **`<nui-calendar>`** chooses a day, a range (previewed between the two picks) or several days, with `min`, `max`, `unavailable` days, months side by side, ISO week numbers and the locale's first day of the week. Its title zooms out to months and years. The keyboard follows the WAI-ARIA date picker, mirrored right to left, and every day is named by its full date.
  - **`<nui-date-field>`** and **`<nui-time-field>`** are typed in segments, spin buttons in the locale's order, with its separators, digits and 12- or 24-hour clock. Digits move on by themselves once no other could follow, the arrow keys step, Backspace goes back, and a pasted date fills every segment. Empty segments show the locale's initials (`mm/dd/yyyy`, `TT.MM.JJJJ`, `jj/mm/aaaa`, `年/月/日`).
  - **`<nui-date-picker>`** adds a calendar in a popover (with `granularity`, it takes a time too), and **`<nui-date-range-picker>`** two fields with a two-month range calendar and presets (`nuiDateRangePresets()`).
  - Every field works with Signal Forms, reactive forms and `ngModel`.
  - The primary entry point gains plain-date helpers: arithmetic that stays in the month (`nuiAddMonths`), weekdays and ISO weeks, the locale's week (`nuiWeekInfo`), and formatting that never shifts a day (`nuiFormatDate`).

  Also: `@angular/forms` is now a peer dependency, as the number field already needed it.

- [`eb3dab4`](https://github.com/needless-ui/needless-ui/commit/eb3dab4b14fc0083656a25209ab60f14ce21451b) - A rich text editor (`@needless-ui/angular/editor`), with its own document model: paragraphs, headings, quotes, nested lists, code blocks, dividers, bold, italic, underline, strikethrough, code and links. It draws the document and handles every edit itself (`beforeinput`, with input methods read back), so pasted or dropped content reaches the page only as that document.

  - A WAI-ARIA toolbar with toggle buttons and shortcuts (`aria-keyshortcuts`), a link popover, and undo that groups typing.
  - Markdown as you type: `# `, `- `, `1. `, `> `, ` ``` `, `---`, `**bold**`, `*italic*`, `` `code` ``, `~~strike~~`.
  - Paste keeps structure and formats from HTML (Google Docs and Word styles included), Markdown-looking text and plain text, and drops everything else, unsafe links included.
  - The value is HTML or Markdown (`format`), with Signal Forms, reactive forms and `ngModel`. The converters (`nuiEditorToHtml`, `nuiEditorFromHtml`, `nuiEditorToMarkdown`, `nuiEditorFromMarkdown`) are exported.

- [`eb3dab4`](https://github.com/needless-ui/needless-ui/commit/eb3dab4b14fc0083656a25209ab60f14ce21451b) - The data grid's second round:

  - **Groups:** `[(groupBy)]` groups rows by columns in turn, as a treegrid, with a row per group that shows each column's `aggregate` (`sum`, `avg`, `min`, `max`, `count` or a function) and a checkbox for its rows. Groups open and close with the arrow keys; `[(collapsed)]` keeps which.
  - **Tree data:** `children` nests rows, sorted among their siblings; a search keeps the rows above a match open. `[(expanded)]` keeps which rows are open.
  - **Details:** an `nuiGridDetail` template opens under a row from a column of toggles (`[(details)]`).
  - **Totals:** `totals` adds a sticky row with each column's aggregate over every filtered row, which the keyboard reaches.
  - **Live data:** `flash` makes cells whose text changes flash for a moment.
  - **Export and print:** `exportXlsx()` writes a real spreadsheet (typed cells, number formats, a bold frozen header with filters), with a zip writer of our own (`nuiXlsx`, `nuiZip`); `print()` and the browser's print lay out every row.
  - **Cards:** `layout="list"`, or `auto` below 36rem, shows rows as cards.

- [`d8fe7e5`](https://github.com/needless-ui/needless-ui/commit/d8fe7e5fc07027de4d5b60268ca84dcbac26ea0b) - An input mask, a phone field and a color picker.

  - **Input mask** (`@needless-ui/angular/mask`): `input[nuiMask]` formats a native field as people type, with tokens for digits, letters and codes, your own tokens, and masks picked by what's typed. The caret keeps its place, deleting skips over literals, digits of any script count, and forms get the data (`unmask`) or what's shown, with unfinished values as errors. Helpers for card numbers (brand, grouping, Luhn) and IBANs (country lengths, check digits).
  - **Phone field** (`@needless-ui/angular/phone-field`): a country picker and a number grouped as the country writes it, valued in E.164. A trunk prefix typed at home is left out of the value; a calling code typed or pasted (`+44`, `0044`) picks its country, and so does an area code where countries share a code. `nuiParsePhone`, `nuiFormatPhone` and `nuiPhoneValid` work on their own.
  - **Color picker** (`@needless-ui/angular/color-picker`): OKLCH, with an area that fills the sRGB or Display P3 gamut and marks where sRGB ends, hue and opacity sliders, a field that reads every CSS color syntax, formats from hex to `color(display-p3)`, swatches, the eyedropper, and a WCAG 2 contrast check. The color functions (`nuiParseColor`, `nuiFormatColor`, `nuiToGamut`, `nuiContrast`) are exported.
  - The select gains `triggerText`, for what its trigger shows.

- [`4331ae3`](https://github.com/needless-ui/needless-ui/commit/4331ae36a5339d1da938938d8cb4605dd54dc1c3) - A scheduler (`@needless-ui/angular/scheduler`): events in a month, a week, a day or an agenda.

  - Events are plain data with ISO times. Timed events that overlap share the width and stretch into free columns; events across midnight show in both days; all-day and multi-day events run across days as bars in lanes, with "N more" when a month cell is full. A line marks now.
  - With `editable`, events move and resize by dragging, with a ghost where they'd land; with `selectable`, dragging across empty time chooses it. The scheduler reports `eventChange`, `slotSelect`, `eventClick` and `rangeChange` (the days shown, to load their events), and never changes the events itself.
  - The grid is one tab stop: arrows move through days and times, Shift extends the chosen time, Enter goes into a cell's events, and Alt with the arrows moves an event (with Shift, resizes it), so every drag has a keyboard equivalent. Moves are announced.
  - `nuiSchedulerEvent` draws events your way. The layout functions (`nuiSchedulerPlace`, `nuiSchedulerLanes`) are exported too.

- [`d8fe7e5`](https://github.com/needless-ui/needless-ui/commit/d8fe7e5fc07027de4d5b60268ca84dcbac26ea0b) - A splitter, a guided tour and a dropzone.

  - **Splitter** (`@needless-ui/angular/splitter`): panes side by side or stacked, with handles that drag and move from the keyboard (the WAI-ARIA window splitter). Panes take sizes and limits in pixels, rems or percent; a handle that reaches a limit pushes the panes beyond it; `collapsible` panes fold below half their minimum, or with Enter, and come back at their size. `[(sizes)]` binds the layout, and `storageKey` keeps it between visits.
  - **Tour** (`@needless-ui/angular/tour`): a card for each step, beside its target, with the page dimmed around it by a spotlight that follows scrolling. Each card is a dialog, modal unless the step is `interactive`; `beforeShow` can open what a step points into, targets out of view scroll in, Escape ends the tour, and focus goes back where it was.
  - **Dropzone** (`@needless-ui/angular/dropzone`): files dropped, chosen, pasted, or whole folders, checked against `accept`, sizes, `maxFiles` and your own `validate`, with image previews. With an `upload` function, files upload a few at a time with progress, cancel and retry (`NuiUploadQueue` works on its own too); without one, the dropzone holds them for a form, with Signal Forms, reactive forms or `ngModel`.

### Patch Changes

- Updated dependencies []:
  - @needless-ui/tokens@0.6.0

## 0.5.0

### Minor Changes

- [`2a1e871`](https://github.com/needless-ui/needless-ui/commit/2a1e8719f5295d361798f8a948cc17b0aca86f41) - A data grid (`@needless-ui/angular/grid`), on a native table:

  - **Sorting** by several columns (Shift adds one), stable and type-aware: text in the locale's order with numbers in sequence, enums in the order of their options, empty values last.
  - **Filters** per column in a panel (text, number and date comparisons, yes or no, enum choices), plus a search across the visible cells that ignores case and accents.
  - **Pages** with a pager, or **virtual scrolling** that renders only the rows in view, so 100,000 rows scroll like ten.
  - **Selection** by key (single or multiple, ranges, select all), and **editing** in place with validation, committed to `rows` immutably.
  - **Columns** people can resize, move, pin to either edge, hide and fit to their content, with the layout kept in a `columnState` model to save.
  - **Server mode**: it keeps the sort, filters, search and page, and reports them in `queryChange`.
  - Every cell is reachable from the keyboard, and sorting, filtering, paging and errors are announced.

  Also: `NuiVirtualizer.slice()` renders the rows in view plus any row that must stay rendered, with gaps between them. The select's list uses it, so pressing End in a long list no longer renders every row in between for a frame. `NuiPopover.show()` passes its anchor as the popover's invoker, so supporting browsers return focus there.

### Patch Changes

- Updated dependencies []:
  - @needless-ui/tokens@0.5.0

## 0.4.0

### Minor Changes

- [`1ae373f`](https://github.com/needless-ui/needless-ui/commit/1ae373f491976437d2723167e097a31790f964df) - Four new components, and the pieces they share:

  - **Select:** one option or many, with groups, trees, type to jump and select all. Long lists render only the rows in view, so 100,000 options open as fast as ten.
  - **Combobox:** a text field with fuzzy search that marks what matched, chips for many values, new values from typed text, and results from a server.
  - **Command palette:** ⌘K from anywhere, search that reaches into nested pages, and shortcuts shown the way each platform writes them.
  - **Popover and hovercard:** native popovers next to their trigger that flip and follow it, with arrows, and hover delays for the rich tooltip.

  Shared, for building your own: `NuiOptionEngine` and `nui-option-list` (`@needless-ui/angular/select`), and in `@needless-ui/angular` `nuiFollow()` and `nuiPlace()` for placement, `NuiVirtualizer`, `nuiFuzzyMatch()`, and `nuiMatchesShortcut()` with `nuiShortcutKeys()`.

### Patch Changes

- Updated dependencies []:
  - @needless-ui/tokens@0.4.0

## 0.3.0

### Minor Changes

- [`4dba452`](https://github.com/needless-ui/needless-ui/commit/4dba4526e82eace539ffc2d9116c8bc3bba873ab) - Eight new components:

  - **Toast:** a stack of toasts in the top layer, with promise toasts, actions, swipe to dismiss and timers that pause.
  - **OTP input:** separate slots over one native input, with SMS autofill, WebOTP and paste cleanup.
  - **Number field:** a spinbutton formatted for any locale, with step buttons that repeat when held.
  - **Rating:** stars on native radio buttons, with a fractional read-only view.
  - **Avatar:** initials on a stable, contrast-safe color per name, with pictures, status dots and groups.
  - **Skeleton:** placeholders sharing one page-wide shimmer.
  - **Breadcrumbs:** a trail that scrolls when it's too long.
  - **Empty state:** built-in pictures that float.

### Patch Changes

- Updated dependencies []:
  - @needless-ui/tokens@0.3.0

## 0.2.0

### Minor Changes

- [`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f) - Needlessly customizable components: spring physics, press effects, entrances, corner shapes, radius and density, for a whole subtree or one component.

  - **Tokens:** spring tokens (`--nui-spring-snappy` to `--nui-spring-mechanical`) are solved from real physics and compiled to `linear()` easings, and `--nui-motion` holds the one components use. New `--nui-radius-scale` and `--nui-density` tokens. The compiler now supports DTCG `transition` tokens.
  - **CSS:** `data-nui-motion`, `data-nui-press`, `data-nui-enter`, `data-nui-corners`, `data-nui-radius` and `data-nui-density` presets (`presets.css`). Buttons press in and spring back; dialogs and menus arrive on the spring and leave with a quick fade; menus grow out of the side they open on. Nothing moves under reduced motion, and density never takes a control below 24px.
  - **Angular:** `motion`, `spring`, `press`, `enter`, `corners`, `radius` and `density` inputs on `nuiButton`, `nuiDialog` and `nuiMenu`. The primary entry point adds `NuiPersonality`, the shared customization types and `springTransition()`.

### Patch Changes

- Updated dependencies [[`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f)]:
  - @needless-ui/tokens@0.2.0

## 0.1.0

### Minor Changes

- [`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec) - Initial release: styles for button, dialog and menu inside `@layer nui.*`, so plain CSS in your app overrides them without `!important`. They use only semantic tokens, so light, dark and nested themes work everywhere.

### Patch Changes

- Updated dependencies [[`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec)]:
  - @needless-ui/tokens@0.1.0
