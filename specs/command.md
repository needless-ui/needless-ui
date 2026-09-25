# Command palette

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A modal dialog (`nui-dialog nui-command`) near the top of the screen with a search field (`nui-command-field`, `nui-command-input`), the list of commands (the select's `nui-select-list`, with shortcuts in `nui-command-shortcut` and a chevron, `nui-command-more`, on commands that open a page) and key hints (`nui-command-hints`). On a page, a back button (`nui-command-back`) and the page's name (`nui-command-page`) come before the input.

## API

| CSS hook             | Angular                                    | Values                                                                                     | Default |
| -------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------ | ------- |
| —                    | `commands`                                 | `NuiCommand[]`: label, description, group, keywords, shortcut, disabled, children, run, id | —       |
| `open`               | `[(open)]`, `show()`, `hide()`, `toggle()` | boolean                                                                                    | false   |
| —                    | `hotkey`                                   | a shortcut such as `mod+k`, or null                                                        | `mod+k` |
| —                    | `bindShortcuts`                            | also run commands by their own shortcuts                                                   | false   |
| —                    | `loop`                                     | ↓ on the last command goes to the first                                                    | true    |
| `nui-select-loading` | `loading`, `(queryChange)`, `filtering`    | server search                                                                              | —       |
| `nui-command-hints`  | `hints`                                    | boolean                                                                                    | true    |
| —                    | `(run)`                                    | the command that ran                                                                       | —       |

Shortcuts are text: `mod+shift+p`, `alt+enter`, `?`. `mod` is ⌘ on Apple devices and Ctrl elsewhere; they're shown with each platform's symbols (⌘ ⇧ P, Ctrl Shift P). `nuiMatchesShortcut()` and `nuiShortcutKeys()` are exported from `@needless-ui/angular`.

## Behavior

- The hotkey opens and closes the palette from anywhere. It opens empty on the top page with the search field focused, and closing returns focus where it was.
- Phones and tablets on their own have no hotkey: give the palette a button there too (`show()`). On them the key hints and shortcuts are hidden.
- Search is fuzzy and reaches into pages: a match inside a page shows the page's name. Choosing a command closes the palette first and then runs it (`run()`, then `(run)`), so the command can move focus. Choosing a command with `children` opens it as a page.
- With `bindShortcuts`, a command's shortcut runs it anywhere on the page. Shortcuts without Ctrl, Alt or ⌘ don't fire while typing in a field.
- Letters typed on a non-Latin layout (or changed by Alt on a Mac) still match by the key's position.

## Keyboard

| Key                 | Behavior                                             |
| ------------------- | ---------------------------------------------------- |
| ⌘K / Ctrl+K         | Open or close (the `hotkey`)                         |
| ↓ / ↑               | Next / previous command, around the ends with `loop` |
| Page Down / Page Up | Ten commands down / up                               |
| Enter               | Run the active command, or open its page             |
| Escape              | Back to the page before; at the top, close           |
| Backspace           | In an empty field on a page: back                    |

## Accessibility

- A native modal `<dialog>` named by `label`: the page behind is inert and focus stays inside.
- The input is a combobox (`aria-expanded="true"`, `aria-controls`, `aria-activedescendant`); on a page it takes the page's name. Focus never leaves it for the list.
- Shortcut keys are real text in the option, so screen readers read them. The key hints at the bottom are hidden from assistive technology, which has its own keys.
- "No results" and loading are `role="status"`.
