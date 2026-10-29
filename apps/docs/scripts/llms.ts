/**
 * Runs after `ng build docs`. Writes two Markdown files for AI coding assistants
 * (llmstxt.org): llms.txt, a map of the docs with the rules for writing code
 * with Needless UI, and llms-full.txt, the guides and every component's
 * reference (imports, Angular API, anatomy, states, keyboard, accessibility) in
 * one file. Models trained before Needless UI existed read these instead of
 * guessing its API.
 *
 * Run: node apps/docs/scripts/llms.ts
 */
import { readFile, writeFile } from 'node:fs/promises';
import { COMPONENT_IDS, GUIDE_IDS, type ComponentId } from '../src/app/docs/ids.ts';
import { COMPONENT_DOCS, type ApiMember } from '../src/app/docs/registry.ts';
import { messages } from '../src/app/i18n/messages/en.ts';
import type { GuideBlock } from '../src/app/i18n/messages/types.ts';

const DIST = new URL('../../../dist/docs/browser/', import.meta.url);
const ROOT = new URL('../../../', import.meta.url);
const SRC = new URL('../src/', import.meta.url);
const SITE = 'https://www.needlessui.com';
const REPO = 'https://github.com/needless-ui/needless-ui';
/** Components whose contract is part of another component's spec. */
const SPEC_OF: Partial<Record<ComponentId, string>> = { combobox: 'select' };
const FENCE: Record<string, string> = { sh: 'bash', ts: 'ts', html: 'html', css: 'css' };

const SUMMARY = `Needless UI is an MIT component library for Angular 22: ${COMPONENT_IDS.length} accessible components, including a scheduler with resource timelines and repeating events, and a data grid with grouping, tree data and Excel export. Components are signal-based directives on native elements, styled by one framework-free stylesheet in CSS cascade layers.`;

const RULES = `Write code with it like this:

- Set up an app with \`ng add @needless-ui/angular\`. It adds \`@angular/aria\` and \`@angular/cdk\`, and imports \`@needless-ui/css\` at the top of the global stylesheet. By hand: install \`@needless-ui/angular @angular/aria @angular/cdk\`, then put \`@import '@needless-ui/css';\` at the top of \`src/styles.css\`.
- Import each component from its own entry point, and add it to a standalone component's \`imports\`: \`import { NuiButton } from '@needless-ui/angular/button';\`. Every component's imports are in its reference.
- Use the directives on native elements as they are: \`<button nuiButton>\`, \`<dialog nuiDialog>\`, \`<input nuiNumberInput>\`. Don't wrap them in other elements to style them.
- Inputs are signal inputs, and values that change both ways are models (\`[(value)]\`, \`[(open)]\`). Form controls with one value follow Signal Forms' control contract, so \`[formField]\`, reactive forms and \`ngModel\` all bind them.
- Components ship no styles: \`@needless-ui/css\` styles their classes and \`data-*\` attributes inside \`@layer nui\`, so the app's own CSS overrides it without \`!important\`. Theme with \`--nui-*\` custom properties such as \`--nui-color-accent-solid\`, and pin a light or dark theme on any element with \`data-nui-theme\`.
- With Tailwind CSS 4, declare \`@layer theme, base, nui, components, utilities;\` before the imports, so Tailwind's reset can't undo components and its utilities still win.
- Everything works with server rendering, hydration and without zone.js.`;

const page = (path: string) => `${SITE}${path}`;
const fence = (code: string, lang: string) => `\`\`\`${lang}\n${code.trimEnd()}\n\`\`\``;

const ENTITIES: Record<string, string> = { lt: '<', gt: '>', amp: '&', quot: '"', '#39': "'" };
const decode = (text: string) =>
  text.replace(/&(lt|gt|amp|quot|#39);/g, (_, name: string) => ENTITIES[name]);

/** The docs' message HTML (code, links, emphasis) as Markdown. */
function markdown(html: string): string {
  return decode(
    html
      .replace(/<code>(.*?)<\/code>/g, '`$1`')
      .replace(
        /<a href="([^"]+)"[^>]*>(.*?)<\/a>/g,
        (_, href: string, text: string) => `[${text}](${href.startsWith('/') ? page(href) : href})`,
      )
      .replace(/<\/?strong>/g, '**')
      .replace(/<\/?em>/g, '_')
      .replace(/<[^>]+>/g, ''),
  );
}

async function snippet(file: string): Promise<string> {
  const code = await readFile(new URL(file, SRC), 'utf8');
  return fence(code, FENCE[file.split('.').pop() ?? ''] ?? '');
}

async function guideBlock(block: GuideBlock): Promise<string | undefined> {
  switch (block.kind) {
    case 'p':
      return markdown(block.html);
    case 'h2':
      return `## ${block.text}`;
    case 'code':
      return snippet(block.file);
    case 'table': {
      const cell = (html: string) => markdown(html).replace(/\|/g, '\\|');
      return [
        `**${block.caption}**`,
        '',
        `| ${block.head.map(cell).join(' | ')} |`,
        `| ${block.head.map(() => '---').join(' | ')} |`,
        ...block.rows.map((row) => `| ${row.map(cell).join(' | ')} |`),
      ].join('\n');
    }
    case 'demo':
      return undefined; // interactive, nothing to read
  }
}

async function guide(id: (typeof GUIDE_IDS)[number]): Promise<string> {
  const { title, blocks } = messages.guides.items[id];
  const parts = [`# ${title}`, `Docs: ${page(`/guides/${id}`)}`];
  for (const block of blocks) {
    const text = await guideBlock(block);
    if (text) parts.push(text);
  }
  return parts.join('\n\n');
}

/** Each directive's selector, then its members with their types, defaults and descriptions. */
function api(id: ComponentId): string {
  const text = messages.components.items[id].api;
  return COMPONENT_DOCS[id].api
    .map((entry) => {
      const words = text[entry.name];
      // As on the API page: the shared customization inputs take their words from one place.
      const describe = (member: ApiMember) => {
        const html = member.customization
          ? messages.components.api.customization.members[member.customization]
          : words?.members[member.name];
        return html ? markdown(html) : '';
      };
      const head = [
        entry.selector && `Selector \`${entry.selector}\``,
        entry.exportAs && `exported as \`${entry.exportAs}\``,
      ].filter(Boolean);
      const lines = [
        `### ${entry.name}`,
        [head.join(', '), words && markdown(words.summary)].filter(Boolean).join('. '),
        entry.members
          .map((member) => {
            const facts = [member.kind, `\`${member.type}\``];
            if (member.default) facts.push(`default \`${member.default}\``);
            const description = describe(member);
            return `- \`${member.name}\` (${facts.join(', ')})${description ? `: ${description}` : ''}`;
          })
          .join('\n'),
        entry.texts &&
          `Inputs that only hold texts to show or announce: ${entry.texts.map((name) => `\`${name}\``).join(', ')}.`,
      ];
      return lines.filter(Boolean).join('\n\n');
    })
    .join('\n\n');
}

async function component(id: ComponentId, included: Map<string, string>): Promise<string> {
  const { name, summary } = messages.components.items[id];
  const parts = [
    `# ${name}`,
    markdown(summary),
    `Docs: ${page(`/components/${id}`)}`,
    await snippet(COMPONENT_DOCS[id].importFile),
    '## Angular API',
    api(id),
  ];
  const spec = SPEC_OF[id] ?? id;
  const sharedWith = included.get(spec);
  if (sharedWith) {
    parts.push(
      `Its anatomy, states, keyboard and accessibility are in the ${sharedWith} section above: the two share one spec.`,
    );
  } else {
    included.set(spec, name);
    const source = await readFile(new URL(`specs/${spec}.md`, ROOT), 'utf8');
    // The spec's title and status table go: the section has its own title, and
    // the table is about packages. Links between specs point at GitHub.
    const body = source.replace(/^# .*\n+(\|.*\n)*\n*/, '').trim();
    parts.push(body.replace(/\]\((?!https?:|#)([^)]+)\)/g, `](${REPO}/blob/main/specs/$1)`));
  }
  return parts.join('\n\n');
}

const guides = messages.guides.items;
const components = messages.components.items;

const index = [
  '# Needless UI',
  `> ${SUMMARY}`,
  RULES,
  '## Guides',
  GUIDE_IDS.map(
    (id) => `- [${guides[id].title}](${page(`/guides/${id}`)}): ${guides[id].description}`,
  ).join('\n'),
  '## Components',
  COMPONENT_IDS.map(
    (id) =>
      `- [${components[id].name}](${page(`/components/${id}`)}): ${markdown(components[id].summary)}`,
  ).join('\n'),
  '## Optional',
  [
    `- [Everything in one file](${page('/llms-full.txt')}): the guides and every component's reference: imports, Angular API, anatomy, states, keyboard and accessibility.`,
    `- [Component specs](${REPO}/tree/main/specs): the framework-agnostic contract of each component.`,
    `- [Source code](${REPO}) and [@needless-ui/angular on npm](https://www.npmjs.com/package/@needless-ui/angular).`,
  ].join('\n'),
].join('\n\n');

/** Spec → the component whose section has it. */
const included = new Map<string, string>();
const full = [
  '# Needless UI',
  `> ${SUMMARY}`,
  RULES,
  ...(await Promise.all(GUIDE_IDS.map(guide))),
  // In order: a spec shared by two components goes with the first one.
  ...(await COMPONENT_IDS.reduce<Promise<string[]>>(
    async (done, id) => [...(await done), await component(id, included)],
    Promise.resolve([]),
  )),
].join('\n\n');

await writeFile(new URL('llms.txt', DIST), `${index}\n`);
await writeFile(new URL('llms-full.txt', DIST), `${full}\n`);

const kb = (text: string) => (Buffer.byteLength(text) / 1024).toFixed(0);
console.log(`llms: wrote llms.txt (${kb(index)} kB) and llms-full.txt (${kb(full)} kB)`);
