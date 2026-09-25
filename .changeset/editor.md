---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

A rich text editor (`@needless-ui/angular/editor`), with its own document model: paragraphs, headings, quotes, nested lists, code blocks, dividers, bold, italic, underline, strikethrough, code and links. It draws the document and handles every edit itself (`beforeinput`, with input methods read back), so pasted or dropped content reaches the page only as that document.

- A WAI-ARIA toolbar with toggle buttons and shortcuts (`aria-keyshortcuts`), a link popover, and undo that groups typing.
- Markdown as you type: `# `, `- `, `1. `, `> `, ` ``` `, `---`, `**bold**`, `*italic*`, `` `code` ``, `~~strike~~`.
- Paste keeps structure and formats from HTML (Google Docs and Word styles included), Markdown-looking text and plain text, and drops everything else, unsafe links included.
- The value is HTML or Markdown (`format`), with Signal Forms, reactive forms and `ngModel`. The converters (`nuiEditorToHtml`, `nuiEditorFromHtml`, `nuiEditorToMarkdown`, `nuiEditorFromMarkdown`) are exported.
