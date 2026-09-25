# @needless-ui/angular

## 0.6.1

### Patch Changes

- [`de899b0`](https://github.com/needless-ui/needless-ui/commit/de899b044e85d5c7a03ec1b4388041b545980940) - Android's back gesture now closes menus, combobox lists, hovercards and interactive tour cards, as Escape does, in browsers with the CloseWatcher API (Chrome and Edge 126, Firefox 149). Browsers already did this for dialogs and `popover="auto"` popups, but not for these manual popovers. Elsewhere nothing changes, and Escape closes them as before.

  - **Menu:** a close request closes the innermost open menu only. A submenu closes back to its item, and its menu stays open; the menu closes with focus back on its trigger. Escape still closes the whole menu.
  - **Combobox:** the list closes as on Escape, and focus stays in the field.
  - **Hovercard:** it hides without moving focus. The Escape that hides it no longer also closes a dialog or popover behind it.
  - **Tour:** on an interactive step, the tour ends as dismissed, and focus goes back where it was. Modal steps are dialogs, which the browser already closed.
  - `nuiOnCloseRequest()` in `@needless-ui/angular` does the same for your own popups: call it when one opens, and the function it returns when it closes.

- [`104e05c`](https://github.com/needless-ui/needless-ui/commit/104e05c6fba1d2f5fa8cdda7381c6a11f4e62ba0) - Every component now runs its tests in Chromium, Firefox and WebKit, and `specs/browser-support.md` lists the supported browsers: Chrome and Edge 120, Firefox 125, Safari 17 and iOS 17. What that turned up:

  - **Safari doesn't focus the buttons it clicks.**
    - The select focuses its trigger when its list opens, so keys pressed after opening it by mouse work there too (the phone field's country list included).
    - A popover trigger focuses itself when clicked, so Tab goes on into the popover and focus comes back to the trigger on close.
    - A clicked rating star takes focus, so the arrow keys go on from it.
    - A dialog returns focus to the control that opened it, instead of leaving it on the page.
  - **Avatar initials** split names at spaces instead of using `Intl.Segmenter`'s word dictionaries. Firefox has none for Chinese, so a name like 毛泽东 got no initials there.
  - **Dropzone:** files whose folder entries can't be read (dragged in from some apps) arrive as plain files instead of not at all.
  - **Drags** (splitter handles, the color area, grid column edges, toast swipes) no longer fail when the pointer can't be captured, as with synthetic events in tests.
  - **CSS:**
    - The dialog backdrop gets a fallback color where `::backdrop` can't read custom properties (Chrome 120–121, Safari 17.0–17.3).
    - The carousel's rotation ring stays drawn without `@property` (Firefox 125–127).
    - The bundle's prefixes target the supported browsers.

- [`c3580b1`](https://github.com/needless-ui/needless-ui/commit/c3580b19a304ff601b4e24ea038a2dee5f7ca15f) - **Rich text editor:** list items nest from the toolbar, for touch screens, which have no Tab key.

  - New `indent` and `outdent` tools move the list items in the selection a level in or out, as Tab and Shift+Tab do. Their buttons are enabled only in a list (Indent only above the deepest level) and name Tab and Shift+Tab as their keys. Their labels are `indent` and `outdent` in `NuiEditorLabels`.
  - The default toolbar (`NUI_EDITOR_TOOLS`) has them after the lists, on touch screens only: a phone or a tablet on its own, `(hover: none) and (pointer: coarse)`. Listed in other `tools`, they show on every screen. On other screens the CSS hides them (`data-touch`) until the editor runs and drops them, so a page rendered on the server doesn't shift when it starts.
  - Outdenting a top-level item, with the button or Shift+Tab, turns it into a paragraph, as Backspace does. Shift+Tab used to leave it as it was.
  - A click or a tap on a toolbar button leaves focus in the text, so a phone's on-screen keyboard stays open. Before, the toolbar moved focus to the button after the command ran, and a click on Link, once its form had opened, left focus on the button instead of the address field.
  - Buttons that can't act, such as Undo with nothing to undo, are `aria-disabled` from the start; the attribute used to say `false` until the first edit. They stay in the toolbar's arrow-key order.
  - CSS: icons for the two tools, turned for right-to-left text.

- [`2b6ceff`](https://github.com/needless-ui/needless-ui/commit/2b6ceff3b793c95a8211545a5e1946d910447b48) - **Grid:** cards (`layout="list"`, or `auto` below 36rem) hide the header row, and with it the sort buttons and the column menus, so on phones rows could be neither sorted nor filtered. A toolbar above the cards now does both:

  - A "Sort by" select with the visible columns that sort, and ascending and descending buttons. Choosing a column replaces the sort; the buttons turn its first column around.
  - A Filter button that opens the column panel, with a select to pick the column. It counts the columns that filter. On cards, the panel leaves out pinning and fitting, which cards have no use for.
  - `toolbar` shows the bar over a table too (`true`), or never (`false`). It defaults to `auto`: with cards.
  - The controls are at least 24px, taller on touch screens, and the select has 16px text there so iPhones don't zoom into it.

  `NuiGridLabels` gains `toolbar`, `sortBy`, `unsorted`, `column` and `activeFilters` for the toolbar's words.

  Cards also move the grid's tab stop into the rows. It stayed on the hidden header row, so Tab never reached cards, and the arrow keys and `focusCell()` could go up to a row that isn't there.

  The grid's rules for its header, totals and print layout now start at `.nui-grid`. A bare `thead` let critical-CSS tools inline the header's rule into every page with a table, and in print a bare `[data-pinned]` reached elements outside the grid.

- [`1119df4`](https://github.com/needless-ui/needless-ui/commit/1119df4bf2b522562c84e418431d6a73333ae707) - **Grid:** cards hide the header row, and with it the checkbox that selects every row, so on touch screens, with `selection="multiple"`, rows could only be selected one at a time (Ctrl + A needs a keyboard). The toolbar now has a "Select all rows" checkbox:

  - A native checkbox named by its label on screen (`NuiGridLabels.selectAll`). Like the header's, it's checked when every row that passes the filters is selected and mixed when some are, and it selects or clears them all.
  - It comes after the sort buttons, so on a narrow toolbar it wraps to the start of the second line, above the cards' checkboxes. The whole label is its target, as tall as the other controls and taller on touch screens.
  - The toolbar also shows for it alone, when no column sorts or filters.

  Both select-all checkboxes are disabled while no row passes the filters. A click on the header's used to check it with nothing selected. `NuiGridEngine.selectableKeys` holds the keys that select all acts on.

  Cards line their checkboxes up with the column names and the toolbar's, and a selected, hovered or group card is colored to its edges.

- [`3801ef9`](https://github.com/needless-ui/needless-ui/commit/3801ef95d63541adc6a6c0f284ac27b69d31268b) - Found by trying every component with a finger in Safari on iOS 17:

  - **Select, combobox, phone field and command palette:** their option lists opened empty in Safari 17, whose flexbox gave a `flex: 1` list no height inside a popup sized by its content. The lists now take `flex: 1 1 auto`.
  - **Dialog:** with the on-screen keyboard up, Safari on iPhone left a strip of the page below the backdrop undimmed. The backdrop now reaches past the viewport.
  - **OTP input:** Safari on iPhone drew its own caret beside the first slot, whatever `caret-color` said. The hidden text now starts out of view there.
  - **Chat:** tapping send took focus from the field, so a phone's keyboard closed after every message. The button no longer takes focus.

- [`317efe7`](https://github.com/needless-ui/needless-ui/commit/317efe7322cd97d15fba178932ab145ade5fbefc) - Every component was tried on phones and tablets, with touch and on-screen keyboards. What that turned up:

  - **Rich text editor:** words from keyboards that compose them (Android keyboards compose every word) no longer end up scrambled. The editor redraws once each composition ends and measures the text actually on screen.
  - **Scheduler:**
    - A scroll that started on an event or a cell used to leave a drag half-done, and the next tap anywhere moved or created an event. Now a drag the browser takes back changes nothing.
    - On touch screens, a long press picks an event up (or starts choosing time), and the finger then drags it instead of scrolling the page. The resize edge is taller for a finger.
    - The scheduler narrows with its container instead of pushing past it, and keeps its times in view as a week scrolls sideways.
  - **Date and time fields:** text a keyboard composes is taken once, when the composition ends, instead of piling up in the segment ("AaM").
  - **Number field:** a lone `.` or `,` reads as the decimal point unless three digits follow it, since a phone's keypad has its region's separator, not the page's. Fixed along the way: with `maximumFractionDigits: 0`, German numbers read their group separator as a decimal point. On iPhone and iPad, a field that takes negatives asks for the text keyboard, because the number pad has no minus key.
  - **OTP input:** tapping a slot selects its character, as a click does. Characters a keyboard composes that the pattern doesn't allow are cleaned out.
  - **Grid:**
    - A tap on the active cell starts editing it, since touch screens have no double click.
    - A sideways scroll that starts on a header no longer moves the column; dragging headers is left to the column menu on touch.
    - Column edges are wider and always visible for a finger.
  - **Menu:** a tap outside closes it, even when the tapped trigger didn't take focus, as in Safari. The trigger focuses itself when clicked.
  - **Popups** stay in the visible part of the page, above the on-screen keyboard, and go below their anchor when there's no room beside it. With an arrow, a popover that's taller than its room scrolls, and its arrow goes.
  - **Tour:** a card with no room above or below its target goes in the middle instead of shrinking until its buttons are out of reach, and scrolls on short screens.
  - **Chat:** `sendOn` defaults to a new `auto`. Enter sends where there's a keyboard and a pointer; on touch screens, Return makes a new line and the button sends, as in message editing. `enterkeyhint` says which.
  - **Combobox:** its buttons no longer bring up the on-screen keyboard when tapped, and the option lists don't highlight or scroll under a finger.
  - **Date range picker:** one month on screens under 40rem, where two months stacked were taller than the screen.
  - **Carousel:** a finger on the slides stops the rotation for good, as keyboard focus does.
  - **Masks:** no autocorrect or spell check.
  - **CSS:**
    - Fields have at least 16px of text on touch screens, so Safari on iPhone doesn't zoom into them.
    - Splitter handles and color slider thumbs grow for a finger.
    - The breadcrumbs, color picker, date range picker, OTP input and phone field narrow down to 320px wide.
    - The dropzone's folder button hides on phones and tablets, and the command palette hides its key hints there.
    - Toasts stay clear of a phone's safe areas.
    - Presses show on iOS: components register the touch listener Safari needs to match `:active`.

- Updated dependencies [[`104e05c`](https://github.com/needless-ui/needless-ui/commit/104e05c6fba1d2f5fa8cdda7381c6a11f4e62ba0), [`c3580b1`](https://github.com/needless-ui/needless-ui/commit/c3580b19a304ff601b4e24ea038a2dee5f7ca15f), [`2b6ceff`](https://github.com/needless-ui/needless-ui/commit/2b6ceff3b793c95a8211545a5e1946d910447b48), [`1119df4`](https://github.com/needless-ui/needless-ui/commit/1119df4bf2b522562c84e418431d6a73333ae707), [`3801ef9`](https://github.com/needless-ui/needless-ui/commit/3801ef95d63541adc6a6c0f284ac27b69d31268b), [`317efe7`](https://github.com/needless-ui/needless-ui/commit/317efe7322cd97d15fba178932ab145ade5fbefc)]:
  - @needless-ui/css@0.6.1

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

- Updated dependencies [[`ba7d0c6`](https://github.com/needless-ui/needless-ui/commit/ba7d0c6d0ec185042ad50f0a0d12cf698cefa7f1), [`eb3dab4`](https://github.com/needless-ui/needless-ui/commit/eb3dab4b14fc0083656a25209ab60f14ce21451b), [`6f9e416`](https://github.com/needless-ui/needless-ui/commit/6f9e41638c568e12f6fbfefa79a8b278cc347200), [`eb3dab4`](https://github.com/needless-ui/needless-ui/commit/eb3dab4b14fc0083656a25209ab60f14ce21451b), [`eb3dab4`](https://github.com/needless-ui/needless-ui/commit/eb3dab4b14fc0083656a25209ab60f14ce21451b), [`d8fe7e5`](https://github.com/needless-ui/needless-ui/commit/d8fe7e5fc07027de4d5b60268ca84dcbac26ea0b), [`4331ae3`](https://github.com/needless-ui/needless-ui/commit/4331ae36a5339d1da938938d8cb4605dd54dc1c3), [`d8fe7e5`](https://github.com/needless-ui/needless-ui/commit/d8fe7e5fc07027de4d5b60268ca84dcbac26ea0b)]:
  - @needless-ui/css@0.6.0

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

- Updated dependencies [[`2a1e871`](https://github.com/needless-ui/needless-ui/commit/2a1e8719f5295d361798f8a948cc17b0aca86f41)]:
  - @needless-ui/css@0.5.0

## 0.4.0

### Minor Changes

- [`1ae373f`](https://github.com/needless-ui/needless-ui/commit/1ae373f491976437d2723167e097a31790f964df) - Four new components, and the pieces they share:

  - **Select:** one option or many, with groups, trees, type to jump and select all. Long lists render only the rows in view, so 100,000 options open as fast as ten.
  - **Combobox:** a text field with fuzzy search that marks what matched, chips for many values, new values from typed text, and results from a server.
  - **Command palette:** ⌘K from anywhere, search that reaches into nested pages, and shortcuts shown the way each platform writes them.
  - **Popover and hovercard:** native popovers next to their trigger that flip and follow it, with arrows, and hover delays for the rich tooltip.

  Shared, for building your own: `NuiOptionEngine` and `nui-option-list` (`@needless-ui/angular/select`), and in `@needless-ui/angular` `nuiFollow()` and `nuiPlace()` for placement, `NuiVirtualizer`, `nuiFuzzyMatch()`, and `nuiMatchesShortcut()` with `nuiShortcutKeys()`.

### Patch Changes

- Updated dependencies [[`1ae373f`](https://github.com/needless-ui/needless-ui/commit/1ae373f491976437d2723167e097a31790f964df)]:
  - @needless-ui/css@0.4.0

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

- Updated dependencies [[`4dba452`](https://github.com/needless-ui/needless-ui/commit/4dba4526e82eace539ffc2d9116c8bc3bba873ab)]:
  - @needless-ui/css@0.3.0

## 0.2.0

### Minor Changes

- [`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f) - Needlessly customizable components: spring physics, press effects, entrances, corner shapes, radius and density, for a whole subtree or one component.

  - **Tokens:** spring tokens (`--nui-spring-snappy` to `--nui-spring-mechanical`) are solved from real physics and compiled to `linear()` easings, and `--nui-motion` holds the one components use. New `--nui-radius-scale` and `--nui-density` tokens. The compiler now supports DTCG `transition` tokens.
  - **CSS:** `data-nui-motion`, `data-nui-press`, `data-nui-enter`, `data-nui-corners`, `data-nui-radius` and `data-nui-density` presets (`presets.css`). Buttons press in and spring back; dialogs and menus arrive on the spring and leave with a quick fade; menus grow out of the side they open on. Nothing moves under reduced motion, and density never takes a control below 24px.
  - **Angular:** `motion`, `spring`, `press`, `enter`, `corners`, `radius` and `density` inputs on `nuiButton`, `nuiDialog` and `nuiMenu`. The primary entry point adds `NuiPersonality`, the shared customization types and `springTransition()`.

### Patch Changes

- Updated dependencies [[`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f)]:
  - @needless-ui/css@0.2.0

## 0.1.0

### Minor Changes

- [`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec) - Initial release: `nuiButton` for native buttons and links, `nuiDialog` for the native `<dialog>` element, and `nuiMenu` built on Angular Aria, with submenus and checkbox and radio items. Standalone, signal-based directives, with `@angular/core`, `@angular/common`, `@angular/aria` and `@angular/cdk` 22 as peer dependencies.

### Patch Changes

- Updated dependencies [[`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec)]:
  - @needless-ui/css@0.1.0
