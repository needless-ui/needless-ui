# Rich text editor

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A rich text editor (`nui-editor`): a toolbar (`nui-editor-toolbar`, a WAI-ARIA toolbar of `nui-editor-tool` buttons in groups split by `nui-editor-separator`) over the content (`nui-editor-content`, an editable `textbox`), and a popover to add links (`nui-editor-link`).

The editor keeps its own document: paragraphs, headings (levels 1 to 3), quotes, bulleted and numbered lists (nested by depth), code blocks and dividers, with bold, italic, underline, strikethrough, code and links inside. It draws the document into the content and handles every edit itself, so what's typed, pasted or dropped reaches the page only as that document.

## API

| CSS hook                         | Angular                                    | Values                                                       | Default      |
| -------------------------------- | ------------------------------------------ | ------------------------------------------------------------ | ------------ |
| —                                | `[(value)]`                                | the content, as HTML or Markdown; empty when there's no text | `''`         |
| —                                | `format`                                   | `html`, or `markdown` (GitHub's, without underline)          | `html`       |
| `data-tool`, `data-touch`        | `tools`                                    | the toolbar's buttons in order, `\|` between groups          | a common set |
| —                                | `label`, `labelledBy`, `describedBy`       | names and describes the content                              | —            |
| `data-empty`, `data-placeholder` | `placeholder`                              | shown while it's empty (`aria-placeholder`)                  | —            |
| `data-readonly`                  | `readonly`                                 | shows the content, formatted, without editing                | false        |
| `data-disabled`                  | `disabled`                                 | —                                                            | false        |
| `aria-invalid`                   | `invalid`                                  | —                                                            | false        |
| —                                | `doc()`, `selection()`                     | the document and selection, as signals                       | —            |
| —                                | `run(tool)`, `undo()`, `redo()`, `focus()` | commands from code                                           | —            |
| —                                | `labels`                                   | every text it says, for translation                          | —            |

Tools: `bold`, `italic`, `underline`, `strike`, `code`, `link`, `h1`, `h2`, `h3`, `bullet`, `ordered`, `indent`, `outdent`, `quote`, `codeblock`, `rule`, `clear`, `undo`, `redo`.

The default set (`NUI_EDITOR_TOOLS`) has `outdent` and `indent` after the lists, for touch screens only: a phone or a tablet on its own (`(hover: none) and (pointer: coarse)`) has no Tab key. They carry `data-touch`, and the CSS hides them on other screens until the editor runs and drops them, so the page is the same before it starts and after. Listed in other `tools`, they show everywhere.

Converters: `nuiEditorToHtml`, `nuiEditorFromHtml`, `nuiEditorToMarkdown`, `nuiEditorFromMarkdown`, `nuiEditorFromText`, and `nuiEditorSafeUrl` for link addresses.

## Behavior

- **Markdown as you type:** `# `, `## `, `### ` start headings, `- ` or `* ` a bulleted list, `1. ` a numbered one, `> ` a quote, ` ``` ` a code block, and `---` then Enter a divider. `**bold**`, `*italic*`, `` `code` `` and `~~strike~~` turn into formats as the closing mark is typed. Undo takes each one back to the text typed.
- **Enter** splits the block: a heading goes on as a paragraph, a list as another item; in an empty item it leaves the list (or goes up a level). Shift+Enter breaks the line. In a code block, Enter is a new line.
- **Backspace** at the start of a block turns a list item, quote or heading into a paragraph first (an indented item goes up a level), then joins it to the block before.
- **Indent and outdent** (the `indent` and `outdent` tools, Tab and Shift+Tab) move the list items in the selection a level in or out, eight levels at most. Outdented from the top level, an item turns into a paragraph, as Backspace does. Their buttons are enabled only in a list (Indent only above the deepest level).
- **Paste and drop** read HTML (keeping structure and formats, styles from Google Docs and Word included), Markdown-looking text, or plain text. Everything else is dropped: scripts, styles, classes, images, and links that aren't web, mail, phone or same-site addresses.
- **Copy** writes the editor's own HTML and plain text.
- **Formats** with nothing selected apply to what's typed next. Text typed at the end of a format goes on in it, except links and code.
- **Undo** groups typing in one go, and every other edit is its own step.
- **Input methods** (Chinese, Japanese, Korean and phone keyboards) write into the page themselves; the editor reads their text back when they're done.

## Keyboard

| Key (Ctrl on Windows and Linux, ⌘ on Apple) | Behavior                                                  |
| ------------------------------------------- | --------------------------------------------------------- |
| Ctrl+B, Ctrl+I, Ctrl+U                      | Bold, italic, underline                                   |
| Ctrl+Shift+X, Ctrl+E                        | Strikethrough, code                                       |
| Ctrl+K                                      | Add or edit a link                                        |
| Ctrl+Alt+1 to 3, Ctrl+Alt+0                 | Heading 1 to 3, paragraph                                 |
| Ctrl+Shift+7, 8, 9                          | Numbered list, bulleted list, quote                       |
| Ctrl+Alt+C                                  | Code block                                                |
| Tab, Shift+Tab                              | In a list, indent or outdent; elsewhere, leave the editor |
| Ctrl+Z, Ctrl+Shift+Z (or Ctrl+Y)            | Undo, redo                                                |
| ← / → in the toolbar                        | Move between buttons                                      |

## Accessibility

- The content is a `textbox` with `aria-multiline`, named by `label` or `labelledBy`, with `aria-placeholder`.
- The toolbar is a WAI-ARIA toolbar (one tab stop, arrow keys between buttons) that controls the content. Formats and block types are toggle buttons with `aria-pressed`, and every button names its shortcut in `aria-keyshortcuts` and its tooltip. A button that can't act now (Undo with nothing to undo, Indent outside a list) is `aria-disabled` and stays in the arrow-key order.
- A toolbar command returns focus to the text, where the selection was, whether it came from a key, a click or a tap; a tap on a button that can't act leaves focus in the text too, so a phone's on-screen keyboard stays up.
- The link popover is a `dialog` with a labeled address field, rendered the first time it opens; Escape closes it and returns to the text.
- Tab never gets stuck: outside lists it leaves the editor.
