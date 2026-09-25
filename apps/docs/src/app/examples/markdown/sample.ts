/** Markdown such as a model writes, for the demos. */
export const SAMPLE = `# Release notes

Version **2.0** is *mostly* about speed, with one ~~breaking~~ welcome change. Read the [changelog](https://github.com/needless-ui/needless-ui) for the rest.

## What's new

1. Pages render **40% faster**.
2. The \`respond\` function can return an Observable.
3. Tables scroll on small screens:

| Feature   | Before | After  |
| :-------- | -----: | :----: |
| First paint | 1.8 s | 1.1 s |
| Bundle      | 42 kB | 31 kB |

## Upgrading

- [x] Update the packages
- [ ] Rename \`stream\` to \`streaming\`

\`\`\`ts
const chat = new NuiChatSession({
  respond: ({ messages }) => model.reply(messages),
});
\`\`\`

> Raw HTML stays text: <script>alert('no')</script>

---

Questions? Write to <mailto:hello@example.com>.`;
