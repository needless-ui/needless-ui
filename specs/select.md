# Select and combobox

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

- **Select** (`nui-select`): a button (`nui-select-trigger`, a select-only combobox) that opens a popup (`nui-select-popup`, a native popover) holding the list.
- **Combobox** (`nui-combobox`): a text field (`nui-combobox-input`, an editable combobox) that suggests options as you type. With `multiple`, the chosen options are chips (`nui-select-chip`) before the input.
- **The list** (`nui-select-list`, a `listbox`, or a `tree` when options have children): group headings (`nui-select-group`) and options (`nui-select-option`), each with its label (matched letters in `<mark>`), description and, for a search result from a tree, its path. The active option has `data-active`.

The list model (`NuiOptionEngine`) and the list (`nui-option-list`) are exported for other pickers; the command palette uses them.

## API

| CSS hook                        | Angular                                 | Values                                                                        | Default     |
| ------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------- | ----------- |
| —                               | `options`                               | `NuiOption[]`: value, label, description, group, keywords, disabled, children | —           |
| `aria-selected`                 | `[(value)]`, forms                      | the chosen value, or null                                                     | null        |
| `aria-multiselectable`          | `multiple`, `[(values)]`                | an array of values                                                            | false       |
| —                               | `compareWith`                           | `(a, b) => boolean`                                                           | `Object.is` |
| —                               | `virtual`                               | `true`, `false`, `'auto'` (above 200 rows)                                    | `'auto'`    |
| `nui-select-all` (select)       | `selectAll`                             | boolean, with `multiple`                                                      | false       |
| `nui-select-loading` (combobox) | `loading`, `(queryChange)`, `filtering` | server search: turn filtering off                                             | —           |
| —                               | `create` (combobox)                     | `(text) => value`: offers to add typed text                                   | none        |
| `nui-combobox-clear`            | `clearable` (combobox)                  | boolean                                                                       | false       |
| —                               | `displayWith` (combobox)                | text for a value that isn't among the options                                 | `String`    |
| `nui-select-option-text`        | `nuiOptionTemplate`, `nuiOptionText`    | custom rows that keep the highlighting                                        | —           |

Every visible string (`placeholder`, `emptyLabel`, `removeLabel`, …) is an input, for translation.

## Behavior

- Search is fuzzy and accent-insensitive: the best matches come first, keywords count a little less than the label, and the matched letters are marked. Search results from a tree are a flat list that shows each result's path.
- The select opens with the chosen option active and scrolled into view (its tree parents expanded). A single select closes on choosing; a multiple one stays open.
- The combobox opens as you type or click. A single combobox shows the chosen label and puts it back when you leave unfinished text; a multiple one clears the text after each pick and stays open. `create` adds an "Add …" option when the text isn't an option yet. Labels of chosen options are remembered, so they survive a new list from the server.
- Long lists render only the rows in view (measured, so rows can have any height). The active option always stays rendered, since `aria-activedescendant` points at it.
- The popup follows its field, flips above it when there's no room below, and is as wide as the field.

## Keyboard

Focus stays on the field; the list never takes it.

| Key                 | Select                                                                                                 | Combobox                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ↓ / ↑               | Open, then move                                                                                        | Open, then move                                                      |
| Alt + ↓ / Alt + ↑   | Open / choose and close                                                                                | Open / close                                                         |
| Home / End          | First / last option                                                                                    | (the text caret)                                                     |
| Page Down / Page Up | Ten options down / up                                                                                  | Ten options down / up                                                |
| Enter               | Open, or choose the active option                                                                      | Choose the active option                                             |
| Space               | Open, or choose                                                                                        | (types a space)                                                      |
| Letters             | Jump to the next option starting with them                                                             | Filter                                                               |
| → / ←               | In a tree: expand, go to the first child / collapse, go to the parent (mirrored in right-to-left text) | From the start of the text: into the chips (→ in right-to-left text) |
| Backspace           | —                                                                                                      | In an empty field: remove the last chip                              |
| Escape              | Close                                                                                                  | Close; then clear the text, or the value if `clearable`              |
| Tab                 | Choose the active option (single) and move on                                                          | Close and move on                                                    |

On a chip: ← / → move between chips, Backspace or Delete removes it.

## Accessibility

- The select's trigger is a `button` with `role="combobox"`, `aria-haspopup="listbox"` (or `tree`), `aria-expanded`, `aria-controls` and `aria-activedescendant`. The combobox's input adds `aria-autocomplete="list"`.
- Options carry `aria-selected`, `aria-disabled`, `aria-setsize` and `aria-posinset` (correct even when virtualized), and in a tree `aria-level` and `aria-expanded`.
- The active option has a solid fill, so it doesn't rely on color alone, and an outline in forced colors.
- Empty and loading states are `role="status"`. Chips are a named list; each remove button is named ("Remove Italy").
- Keys that confirm an IME composition (Enter, arrows) are left to the IME.
