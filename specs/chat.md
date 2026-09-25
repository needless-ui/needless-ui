# Chat

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A conversation with a model (`nui-chat`), in two parts that also work apart:

- **The thread** (`nui-chat-thread`): a scroll container (`nui-chat-scroll`) holding a feed (`nui-chat-feed`) of messages (`nui-chat-message`), and a button that jumps to the end (`nui-chat-jump`). Until the first message, it shows your greeting (`nui-chat-empty`).
  - The user's messages are bubbles (`nui-chat-bubble`) with their attachments (`nui-chat-files`).
  - Replies show, in order: the model's reasoning (`nui-chat-reasoning`, folded), its tool calls (`nui-chat-tool`, folded, or drawn by a template of yours), a typing indicator while nothing has arrived yet (`nui-chat-typing`), the text rendered as Markdown (see markdown.md), the sources it used (`nui-chat-sources`), and why it stopped or failed (`nui-chat-note`, `nui-chat-error`).
  - Each message ends with its actions (`nui-chat-actions`): copy, edit (the user's) or retry and rate (replies), and, when it has versions, a switcher between them (`nui-chat-versions`).
- **The composer** (`nui-chat-composer`): suggestions (`nui-chat-suggestion`), then a box (`nui-chat-box`) with the files to send, the text field (`nui-chat-input`) and a bar (`nui-chat-bar`) with the attach button and the send button, which stops the reply while one arrives.

The conversation itself is a `NuiChatSession`, with no DOM: the messages, every version of each, and the reply in progress. Readers for streamed responses (`nuiTextStream`, `nuiEventStream`, `nuiJsonStream`) turn a `fetch` into a reply.

## API

### Session

`new NuiChatSession({ respond, messages?, id? })`, in an injection context (or with `injector`). When it's destroyed, its reply stops.

| Member                                         | Meaning                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `respond(request)`                             | Yours: writes the reply to `request.messages`, and stops when `request.signal` aborts. See Replies.     |
| `messages()`, `all()`                          | The conversation on screen; every message of every version, to save and to pass back as `messages`      |
| `busy()`, `replying()`                         | Whether a reply is on its way; the reply itself                                                         |
| `send(text, files?)`                           | Sends the user's message and asks for a reply; a reply in progress stops first                          |
| `stop()`                                       | Stops the reply, keeping what it wrote                                                                  |
| `retry(message?)`                              | A new version of a reply (the last by default) beside the old one; a failed reply is replaced           |
| `edit(message, text)`                          | A new version of one of the user's messages, and a reply to it; what followed the old one stays with it |
| `versions(message)`, `show(message)`           | Every version of a message; switches the conversation to one                                            |
| `rate(message, rating)`                        | `up`, `down` or `null`                                                                                  |
| `remove(message)`, `load(messages)`, `clear()` | Removes a message and what follows it; replaces the conversation; starts over                           |

### Messages

`{ id, role, text, parent, status, time }`, and as they apply: `reasoning`, `reasoningTime`, `attachments`, `sources`, `tools`, `rating`, `error`, `data`. `role` is `user` or `assistant`. `status` is `pending` until a reply's first piece, then `streaming`, and ends `done`, `stopped` or `error`. Messages with the same `parent` are versions of each other, so a conversation is a tree, and `messages()` is the branch on screen.

### Replies

`respond` returns the whole reply (text, or a promise of it), or its pieces as they come: an async iterable, such as an `async function*`, or an Observable. A piece is text to add, or a delta:

| Delta                         | Effect                                                    |
| ----------------------------- | --------------------------------------------------------- |
| `{ type: 'text', text }`      | Adds to the text                                          |
| `{ type: 'reasoning', text }` | Adds to the reasoning, and times it until the text starts |
| `{ type: 'tool', tool }`      | Adds a tool call, or replaces the one with its `id`       |
| `{ type: 'source', source }`  | Adds a source, once per address                           |
| `{ type: 'data', data }`      | Sets the message's `data`                                 |

Throwing a `NuiChatError` shows its message; any other error shows `labels.error`, so nothing internal leaks.

### Components

| CSS hook              | Angular                                   | Values                                                                          | Default             |
| --------------------- | ----------------------------------------- | ------------------------------------------------------------------------------- | ------------------- |
| —                     | `session`                                 | the `NuiChatSession`                                                            | —                   |
| —                     | `assistant`                               | the assistant's name, in the headings screen readers see                        | `Assistant`         |
| `aria-level`          | `headingLevel`                            | the level of each message's heading; replies' own headings go deeper            | 3                   |
| —                     | `announce`                                | what screen readers hear when a reply is complete: `reply`, `notice` or `off`   | `reply`             |
| —                     | `images`                                  | render images in replies                                                        | false               |
| `nui-chat-suggestion` | `suggestions`                             | prompts to send with a click; `nui-chat` shows them until the first message     | `[]`                |
| —                     | `[(value)]`, `placeholder`                | the text being written                                                          | `''`                |
| —                     | `sendOn`                                  | `auto`, `enter` (Shift+Enter for a new line) or `mod+enter`                     | `auto`              |
| `data-dragging`       | `attach`, `accept`, `maxFiles`, `maxSize` | take files, picked, pasted or dropped; which kinds, how many, how large (bytes) | off, any, 10, 20 MB |
| —                     | `disabled`, `labels`                      | the composer can't send; every text, for translation                            | —                   |
| —                     | `(rated)`                                 | the reader rated a reply, or took it back                                       | —                   |
| —                     | `focus()`, `scrollToEnd()`                | the text field; the end of the conversation, followed from then on              | —                   |

Content marked `nuiChatEmpty` is the greeting; other content goes in the composer's bar. Templates: `nuiChatTool` (a tool call, by name, or every call without one) and `nuiMarkdownCode` (code blocks).

## Behavior

- The thread follows a reply as it streams. Scrolling up stops that and shows the jump button; reaching the end, jumping, or asking again resumes it.
- Only the newest messages spring in, from `--nui-enter` on `--nui-motion`; a restored conversation doesn't cascade.
- Retrying or editing never loses anything: the old message stays as a version, with what followed it, and the switcher moves between versions.
- A reply's reasoning shows "Thinking" while it arrives, then how long it took. Tool calls show their state, and their input and output when opened.
- Actions stay visible on the last message and on touch screens; on earlier ones they show on hover or focus.
- The composer sends with Enter, but never mid-composition (IME). While a reply arrives, Enter waits and the send button stops the reply.
- `auto` sends with Enter where there's a keyboard and a pointer that hovers. On a touch screen with nothing that hovers (a phone, a tablet on its own), Return makes a new line, as it's the only way to one there, and the send button sends; `enterkeyhint` names the key accordingly. Editing a sent message works the same way.
- Pressing the send button leaves focus in the field, so a phone's keyboard stays up between messages.
- Files are checked against `accept`, `maxSize` and `maxFiles`; what's refused is said below the field and announced. Images get previews, whose object URLs are released when the files are removed before sending.
- Links in replies and sources work only for web, mail and phone addresses.

## Keyboard

| Key                      | Behavior                                                            |
| ------------------------ | ------------------------------------------------------------------- |
| Page Down / Page Up      | Next or previous message (in the conversation)                      |
| Ctrl + End / Ctrl + Home | Leave the conversation: the next focusable element after, or before |
| Enter / Shift + Enter    | Send / new line (in the field and while editing)                    |
| Escape                   | Cancel editing a message                                            |

## Accessibility

- The conversation is a `feed` of `article`s, named "Conversation". Each article has a heading only screen readers see ("You said", "Assistant said") that names it, is described by its text, and carries `aria-posinset` and `aria-setsize`. One article is in the tab order at a time.
- A reply being written is `aria-busy`, so its words aren't read piece by piece. Once complete, it's announced whole (or as "Assistant replied.", or not at all, with `announce`); a failure is announced assertively.
- Every icon button has a name and a tooltip. Ratings are toggle buttons (`aria-pressed`). The version switcher is a group named "Version 2 of 3", and its ends are `aria-disabled` so focus stays put.
- The typing indicator is an image named "Thinking". Reasoning and tool calls are native disclosures (`details`).
- The text field is named "Message" and described by the file problems when there are any. Removing a file returns focus to the field.
