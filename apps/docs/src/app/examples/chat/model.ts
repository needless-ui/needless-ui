/**
 * A pretend model for the demos: canned replies, streamed a few words at a time.
 * In your app, `respond` calls your server instead (see the server example).
 */

/** Resolves after `ms`, or rejects as soon as the reply is stopped. */
export function wait(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal.addEventListener(
      'abort',
      () => {
        clearTimeout(timer);
        reject(signal.reason);
      },
      { once: true },
    );
  });
}

/** Streams text a word or two at a time, at a model's pace. */
export async function* stream(text: string, signal: AbortSignal): AsyncGenerator<string> {
  for (const word of text.match(/\S+\s*|\s+/g) ?? []) {
    await wait(15 + Math.random() * 35, signal);
    yield word;
  }
}

const REPLIES: [RegExp, string][] = [
  [
    /lisbon|trip|weekend|travel/i,
    `A weekend in **Lisbon**, at an easy pace:

| Day      | Morning             | Afternoon                   | Evening             |
| -------- | ------------------- | --------------------------- | ------------------- |
| Saturday | Alfama and the castle | Tram 28 to Estrela         | Fado in Mouraria    |
| Sunday   | Belém and its tower  | Pastéis de nata, still warm | Sunset at a miradouro |

Pack:

- [x] Comfortable shoes, for the hills
- [ ] A light jacket, for the wind off the river

> Tip: a Viva Viagem card covers the trams, the metro and the ferries.`,
  ],
  [
    /haiku|poem|css/i,
    `Here's a haiku about CSS:

*Cascading softly*\\
*one rule overrides the next —*\\
*\`!important\` sighs.*`,
  ],
  [
    /signal|angular|code/i,
    `A **signal** holds a value and tells Angular when it changes:

\`\`\`ts
import { computed, signal } from '@angular/core';

const count = signal(1);
const double = computed(() => count() * 2);

count.set(4); // double() is now 8
\`\`\`

Read it by calling it, and change it with \`set()\` or \`update()\`. Templates that read a signal update on their own.`,
  ],
];

/** A reply to the user's message: a canned one if it matches, or a note that it's a demo. */
export function reply(question: string, files: readonly string[] = []): string {
  const match = REPLIES.find(([pattern]) => pattern.test(question));
  if (match) return match[1];
  const got = files.length
    ? `Thanks for ${files.map((name) => `\`${name}\``).join(' and ')}. `
    : '';
  const asked = question.trim() ? `You asked: *${question.replace(/[*_`[\]]/g, '')}*\n\n` : '';
  return `${asked}${got}I'm a pretend model for this page, so I only know three answers. Try one of the suggestions, or connect \`respond\` to a real model.`;
}
