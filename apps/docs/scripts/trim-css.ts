/**
 * Runs after paint-first.ts. Drops the custom properties that nothing on a page
 * reads from the page's inline critical CSS.
 *
 * Beasties inlines the rules a page's elements match, and every design token
 * comes along with `:root`, most of them unread on that page. A token stays when
 * a rule, an inline style or another kept token reads it; the rest go. So do the
 * `@property` registrations Beasties keeps on every page, for properties nothing
 * on it uses. The full stylesheet, which loads right after the first paint, still
 * has them all. That saves about 1.5 KB of brotli per page, which keeps pages in
 * the first round trip.
 *
 * Run: node apps/docs/scripts/trim-css.ts
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../../../dist/docs/browser/', import.meta.url));
const STYLE = /<style(\s[^>]*)?>([\s\S]*?)<\/style>/g;
/** A custom property declaration, right after `{` or `;`; values may quote `;` and `}`. */
const DECLARATION = /(?<=[{;]\s*)(--[\w-]+)\s*:((?:[^;{}"']|"[^"]*"|'[^']*')*);?/g;
const READ = /var\(\s*(--[\w-]+)/g;
/**
 * An `@property` rule. Beasties writes a `;` after each, which at the top level
 * starts the next rule's selector, so browsers drop that rule: once, the editor's
 * whole `@layer` block. The `;` goes with the rule.
 */
const PROPERTY = /@property\s+(--[\w-]+)\s*\{[^}]*\};?/g;

function trimCss(html: string): string {
  const css = [...html.matchAll(STYLE)].map((style) => style[2]).join('\n');
  if (!css) return html;
  const values = new Map<string, string>();
  for (const [, name, value] of css.matchAll(DECLARATION)) {
    values.set(name, `${values.get(name) ?? ''} ${value}`);
  }
  // Start from what's read outside the declarations: the rules, and the HTML itself.
  const keep = new Set<string>();
  const visit = (name: string) => {
    if (keep.has(name)) return;
    keep.add(name);
    for (const [, read] of (values.get(name) ?? '').matchAll(READ)) visit(read);
  };
  const outside = css.replace(DECLARATION, '') + html.replace(STYLE, '');
  for (const [, name] of outside.matchAll(READ)) visit(name);
  const trimmed = html.replace(
    STYLE,
    (_, attributes = '', body: string) =>
      `<style${attributes}>${body.replace(DECLARATION, (declaration, name) => (keep.has(name) ? declaration : ''))}</style>`,
  );
  // A registered property stays when anything else on the page names it.
  const rest = trimmed.replace(PROPERTY, '');
  return trimmed.replace(STYLE, (_, attributes = '', body: string) => {
    const kept = body.replace(PROPERTY, (rule, name: string) =>
      rest.includes(name) ? rule.replace(/;$/, '') : '',
    );
    return `<style${attributes}>${kept}</style>`;
  });
}

const files = (await readdir(DIST, { recursive: true })).filter((file) => file.endsWith('.html'));
let before = 0;
let after = 0;
for (const file of files) {
  const full = path.join(DIST, file);
  const html = await readFile(full, 'utf8');
  const trimmed = trimCss(html);
  before += html.length;
  after += trimmed.length;
  if (trimmed !== html) await writeFile(full, trimmed);
}

console.log(
  `docs: trimmed unread custom properties from ${files.length} pages (${Math.round((before - after) / files.length)} bytes each)`,
);
