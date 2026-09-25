# Markdown

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A block of rich text (`nui-markdown`) rendered from Markdown: paragraphs, headings, lists (ordered, bulleted, with task checkboxes), block quotes, code blocks (`nui-markdown-code`, with the language and a copy button), GitHub tables in a scroll container, rules, and inline strong, emphasis, strikethrough, code, links and line breaks.

The parser (`nuiParseMarkdown()`) turns text into a tree, and the component renders that tree with templates. Raw HTML in the text is shown as text; nothing is ever inserted as HTML. `nuiMarkdownToText()` gives the plain text, a line per block, for announcing or previewing it.

## API

| CSS hook            | Angular                           | Values                                                                                                                                                | Default |
| ------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| —                   | `text`                            | the Markdown                                                                                                                                          | `''`    |
| `data-streaming`    | `streaming`                       | still arriving: an open code fence and a dangling `**` or `` ` `` wait for the rest                                                                   | false   |
| —                   | `headingLevel`                    | the level `#` renders at; deeper ones follow, up to 6                                                                                                 | 3       |
| —                   | `images`                          | render images; otherwise their alt text links to them                                                                                                 | false   |
| —                   | `labels`                          | texts of the code blocks' copy button, for translation                                                                                                | —       |
| `nui-markdown-code` | `nuiMarkdownCode`, `codeTemplate` | a template for code blocks (for syntax highlighting); it gets the code, language and whether it's still open. `codeTemplate` takes one from elsewhere | —       |

## Behavior

- Links work only for `http`, `https`, `mailto` and `tel` addresses; anything else stays text. Links that leave the page open in a new tab, with `rel="noopener noreferrer"`.
- Headings start at `headingLevel`, so a reply's `#` doesn't outrank the page's own headings.
- While `streaming`, a code fence with no end yet renders as a code block, and an unmatched `**`, `*`, `~~` or `` ` `` at the end is held back instead of flashing as a symbol. Blocks that haven't changed keep their DOM, so a long reply costs one block per update. A caret (`nui-markdown-caret`) follows the last words, wherever they are: a paragraph, a list item, a table cell or a code block.
- Each block (paragraph, heading, list, quote, table) takes its direction from its own text, so an English reply reads left to right in a right-to-left page, and the reverse. Code is always left to right.
- Images are off by default, since an image address can track readers. With `images`, they load lazily, and their alt text is their name.

## Accessibility

- Real elements throughout: `h3`–`h6`, `ul`/`ol` with `li`, `blockquote`, `table` with `th` headers and `scope`, `pre`/`code`.
- Task list checkboxes are read-only checkboxes that say whether each task is done.
- Wide tables and code scroll inside a focusable region with a name, so they can be scrolled from the keyboard.
- The copy button is named for what it copies ("Copy code") and says "Copied" through a status message.
- The streaming caret is hidden from assistive technology, and stops blinking with reduced motion.
