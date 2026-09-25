---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

An AI chat (`@needless-ui/angular/chat`), and the Markdown renderer its replies use (`@needless-ui/angular/markdown`).

- **`NuiChatSession`** holds the conversation, with no DOM. Its `respond` function returns the reply whole, as a promise, from an `async function*` or as an Observable, in text pieces or deltas that add reasoning, tool calls, sources and data. Stopping ends the reply at once, even when the source is slow to notice.
- **Nothing is lost:** a retried reply or an edited question becomes a new version beside the old one, and the conversation keeps every branch, to switch between and to save with `all()`.
- **`<nui-chat>`** follows a streaming reply until the reader scrolls up, then offers a jump back. Replies have copy, retry and rating actions; the user's messages can be edited in place. Reasoning and tool calls fold away, or tools draw with a `nuiChatTool` template of yours. The composer grows with its text, sends with Enter (never mid-IME), turns into a stop button while a reply arrives, and takes files picked, pasted or dropped. `<nui-chat-thread>` and `<nui-chat-composer>` work apart, for layouts of your own.
- **Accessible:** the conversation is a feed of articles, named by headings screen readers see, with Page Up and Page Down between them. Each reply is announced once complete, not word by word.
- **Stream readers:** `nuiTextStream`, `nuiEventStream` (server-sent events, by the HTML standard's rules) and `nuiJsonStream` turn a `fetch` response into a reply.
- **`<nui-markdown>`** renders CommonMark with GitHub's tables, task lists, strikethrough and bare links, as real elements and never as HTML. Links go only to web, mail and phone addresses. While `streaming`, an open code fence is already code, a lone `**` waits for its partner, a table's head is a table, and a caret follows the last words; unchanged blocks keep their DOM. Code blocks get a copy button, or a `nuiMarkdownCode` template for highlighting.
