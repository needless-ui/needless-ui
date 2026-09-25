# Contributing to Needless UI

Thanks for helping. This guide covers setup, how the repository fits together, and what a pull request needs.

## Setup

You need Node.js 22.22+ or 24.15+ (see `.nvmrc`) and pnpm 12.

```bash
pnpm install
pnpm exec playwright install chromium firefox webkit   # once: Angular tests run in all three
pnpm dev
```

`pnpm dev` builds the tokens and starts the docs site at http://localhost:4200. Edits to component CSS in `packages/css` and to Angular code reload live.

## How the pieces fit

```
tokens (DTCG JSON) ──build──▶ tokens.css ──imported by──▶ @needless-ui/css ◀──classes/data-*── @needless-ui/angular
```

- **Tokens** live in `packages/tokens/src/*.tokens.json`. Color scales are generated: edit `scripts/palette.ts`, then run `pnpm --filter @needless-ui/tokens palette`. Never hand-edit `src/color/*.tokens.json`.
- **Component CSS** lives in `packages/css/src/components/<name>.css`, inside `@layer nui.components`. It may only use semantic tokens (`--nui-color-bg-*`, `--nui-color-<tone>-*` and so on), never the numbered scales. A test fails if a component references a token that doesn't exist.
- **Angular components** live in `packages/angular/<name>/`, one secondary entry point each. They don't ship styles; they set the classes and `data-*` attributes that the CSS targets.
- **Specs** in `specs/<name>.md` define anatomy, API, states, keyboard behavior and accessibility for each component. Framework packages implement the spec, so Angular and React stay in step.

## Adding a component

1. Write `specs/<name>.md`, following the WAI-ARIA Authoring Practices pattern if one applies.
2. Add `packages/css/src/components/<name>.css` and import it from `src/index.css`.
3. Add `packages/angular/<name>/` with `ng-package.json`, `index.ts` and `src/`. Build on native elements, `@angular/aria` or `@angular/cdk` rather than reimplementing behavior.
4. Write unit tests next to the source (`*.spec.ts`). They run in a real browser (Vitest browser mode), so use `userEvent` from `vitest/browser` for keyboard and pointer input.
5. Document it on the docs site (see below) and check it with the keyboard, in light and dark mode, and with forced colors emulated.
6. Run `pnpm changeset` and describe the change.

## The docs site

`apps/docs` is the site at www.needlessui.com. Every page is prerendered to static HTML in 30 languages: English at the root, the others under their id (`/it`, `/zh-hans`, `/ar`, …).

- **A component page** needs its id in `src/app/docs/ids.ts`, its API and examples in `src/app/docs/registry.ts`, and example files in `src/app/examples/<name>/` (the code viewer shows them, highlighted at build time).
- **Words** live in `src/app/i18n/messages/<locale>.ts`, one file per language, typed by `messages/types.ts`. `en.ts` is the source; a missing or misspelled key fails the build, so every language stays complete. Native speakers improving a translation are very welcome.
- **SEO**: each page calls `Seo.set()` with its title and description. `pnpm build:docs` checks every prerendered page (title, description length, canonical and hreflang links, structured data, broken internal links) and fails on any problem. It then writes `sitemap.xml`.

## Conventions

- Prefix everything with `nui`: selectors (`nui-*`, `[nui*]`), classes (`.nui-*`), custom properties (`--nui-*`) and layers (`nui.*`).
- Angular: standalone, signal `input()` / `model()` / `output()`, host bindings in the `host` object, no `@HostBinding`, no NgModules. The generated `CLAUDE.md` lists the rest of the Angular style rules.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat(button): …`, `fix(css): …`).
- Code is formatted with Prettier (`pnpm format`); CI runs `pnpm format:check`.

## Checks

CI runs the same commands you can run locally:

```bash
pnpm format:check
pnpm typecheck
pnpm build
pnpm test
pnpm build:docs   # prerenders every page, which catches SSR-unsafe code, and checks SEO
```

Components must work in the browsers listed in [specs/browser-support.md](specs/browser-support.md). The Angular tests run in Chromium, Firefox and WebKit. Code that depends on a browser detail (focus, pointer capture, clipboard events) deserves a test in all three.

## Releases

Before merging a release, run `pnpm build:docs` and then `pnpm check:browsers`: it opens every component page in Chromium, Firefox and WebKit, on a computer screen and a phone-sized touch screen, and fails on any page that doesn't start, throws, overflows the screen or has a popup that won't open.

Maintainers merge the "release packages" pull request that Changesets opens. The release workflow then publishes to npm with trusted publishing and provenance. All `@needless-ui/*` packages share one version number.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
