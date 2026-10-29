<p align="center">
  <img src=".github/assets/nui-logo.png" alt="" width="240">
</p>

# Needless UI

**The Needlessly Engineered Styling Toolkit.** An open-source UI component library for Angular, and for React starting with the scheduler and the data grid. The name is a joke; the engineering isn't.

**Everything is free**, including what other libraries sell separately: a [scheduler](https://www.needlessui.com/components/scheduler) with resource timelines, repeating events and iCalendar files, and a [data grid](https://www.needlessui.com/components/grid) with grouping, tree data and Excel export. MIT, with no premium tier and no license key. Moving off a paid library? Read the guides for moving [from FullCalendar](https://www.needlessui.com/guides/from-fullcalendar) and [from AG Grid](https://www.needlessui.com/guides/from-ag-grid).

> Early development (`0.x`). APIs will change between minor versions until 1.0.

## Why another component library

- **No premium tier.** Everything is MIT, including what other libraries often sell separately: the scheduler's resource timeline and recurring events, and the data grid's grouping, tree data and Excel export.
- **Native elements first.** `<button nuiButton>` is a real `<button>`: native semantics, keyboard behavior and forms, with nothing wrapped around it.
- **One stylesheet for every framework.** Components are styled by a framework-free CSS package. Angular and React bindings only set classes and `data-*` attributes, so both frameworks look and behave the same.
- **Your CSS always wins.** Everything ships inside `@layer nui.*`, so plain CSS in your app overrides it without `!important` or specificity battles.
- **Accessible by construction.** Every color pair is checked against WCAG 2.2 AA when the palette is generated. Controls clear the 24px target minimum, and focus rings, forced colors and reduced motion are handled.
- **Needlessly customizable.** Springs, press effects, entrances, corner shapes, radius and density: one attribute for a whole subtree, or one input per component. The springs are real physics, solved at build time and shipped as CSS `linear()` easings.
- **Standard design tokens.** Tokens are W3C DTCG 2025.10 files, compiled to CSS custom properties with light and dark modes, including nested themes.
- **Modern Angular.** Signal inputs, zoneless, OnPush, SSR- and hydration-safe, with one entry point per component so apps only ship what they import.

## Packages

| Package                                    | What it is                                                             |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| [`@needless-ui/tokens`](packages/tokens)   | Design tokens in DTCG format, compiled to CSS custom properties        |
| [`@needless-ui/css`](packages/css)         | Framework-free component styles in cascade layers; works in plain HTML |
| [`@needless-ui/angular`](packages/angular) | Angular 22 directives and components that apply those styles           |
| [`@needless-ui/react`](packages/react)     | React 19 components: the scheduler and the data grid so far            |
| [`@needless-ui/core`](packages/core)       | Framework-free logic the Angular and React packages share              |

## Components

[AI chat](specs/chat.md), [Avatar](specs/avatar.md), [Breadcrumbs](specs/breadcrumbs.md), [Button](specs/button.md), [Calendar](specs/calendar.md), [Carousel](specs/carousel.md), [Color picker](specs/color-picker.md), [Combobox](specs/select.md), [Command palette](specs/command.md), [Data grid](specs/grid.md), [Date and time pickers](specs/date-picker.md), [Dialog](specs/dialog.md), [Dropzone](specs/dropzone.md), [Empty state](specs/empty.md), [Input mask](specs/mask.md), [Markdown](specs/markdown.md), [Menu](specs/menu.md), [Number field](specs/number-field.md), [OTP input](specs/otp.md), [Phone field](specs/phone-field.md), [Popover and hovercard](specs/popover.md), [Rating](specs/rating.md), [Rich text editor](specs/editor.md), [Scheduler and resource timeline](specs/scheduler.md), [Select](specs/select.md), [Skeleton](specs/skeleton.md), [Splitter](specs/splitter.md), [Toast](specs/toast.md) and [Tour](specs/tour.md). Each spec defines the API, keyboard behavior and accessibility. The Angular package implements every one, and the React package the scheduler and the data grid so far.

## Quick start (Angular)

```bash
ng add @needless-ui/angular
```

That adds the package with Angular Aria and the CDK, and imports the styles at the top of your global stylesheet. By hand, it's:

```bash
pnpm add @needless-ui/angular @angular/aria @angular/cdk
```

```css
/* src/styles.css */
@layer reset, nui, app; /* optional: keeps your resets from overriding components */
@import '@needless-ui/css';
```

With Tailwind CSS, components go after Tailwind's base styles and before its utilities: `@layer theme, base, nui, components, utilities;` (`ng add` writes that line when it finds Tailwind).

Use a component:

```ts
import { Component } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';

@Component({
  selector: 'app-root',
  imports: [NuiButton],
  template: `<button nuiButton variant="soft" tone="danger" (click)="remove()">Delete</button>`,
})
export class App {
  remove() {}
}
```

## Quick start (React)

React has the scheduler and the data grid so far; the other components are coming. They need React 19, render on the server and work with the Next.js App Router.

```bash
pnpm add @needless-ui/react @needless-ui/css
```

The components ship no styles: import the stylesheet once, from a CSS file of your app (`app/globals.css` in Next.js, `src/index.css` with Vite).

```css
@layer reset, nui, app; /* optional: keeps your resets from overriding components */
@import '@needless-ui/css';
```

Use a component:

```tsx
import { NuiGrid, type NuiGridColumn } from '@needless-ui/react/grid';

interface Order {
  id: number;
  customer: string;
  total: number;
}

const columns: NuiGridColumn<Order>[] = [
  { id: 'customer', header: 'Customer', flex: 1 },
  { id: 'total', header: 'Total', type: 'number', format: { style: 'currency', currency: 'EUR' } },
];

export function Orders({ orders }: { orders: Order[] }) {
  return <NuiGrid label="Orders" rows={orders} columns={columns} pageSize={25} />;
}
```

State is controlled (`sort` with `onSortChange`) or left to the component (`defaultSort`), events are callbacks, and methods are on the `ref`. The [package README](packages/react) has Next.js and Vite examples, and the [React guide](https://www.needlessui.com/guides/react) maps the rest of the API.

## Plain HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@needless-ui/css/dist/needless-ui.min.css"
/>

<button class="nui-button" data-variant="outline" data-tone="neutral">
  It works without a framework
</button>
```

## Starter app

[`templates/room-booking`](templates/room-booking) is a working Angular app built on the scheduler and the data grid: rooms on a timeline, bookings grouped by room, and Excel and calendar exports. Its README deploys it to Vercel or opens it in StackBlitz in one click.

## Customization

Any element can give everything inside it a personality, and components take the same values as inputs:

```html
<body data-nui-motion="jelly" data-nui-press="squish" data-nui-corners="squircle">
  <button nuiButton press="rubber" [spring]="{ stiffness: 900, damping: 12 }">Boing</button>
</body>
```

See the [customization spec](specs/customization.md), or play with it at [needlessui.com/guides/customization](https://www.needlessui.com/guides/customization).

## Theming

- **Light and dark** follow the operating system. Pin a theme on any element with `data-nui-theme="light"` or `"dark"`; themes can nest.
- **Override a token** anywhere, e.g. `:root { --nui-color-accent-solid: oklch(0.55 0.2 150); }`.
- **Change the brand palette** by editing the palette config in [`packages/tokens/scripts/palette.ts`](packages/tokens/scripts/palette.ts) and regenerating. Contrast is re-checked automatically.

## Browser support

| Browser                                   | From   |
| ----------------------------------------- | ------ |
| Chrome and Edge, on computers and Android | 120    |
| Firefox, on computers and Android         | 125    |
| Safari on Mac                             | 17     |
| Every browser on iPhone and iPad          | iOS 17 |
| Samsung Internet                          | 25     |

Every change runs the component tests in Chromium, Firefox and WebKit, and every docs page is checked in each of them, on a computer and on a touch screen. Components work with touch and down to 320px wide. Older browsers aren't supported: without the Popover API, menus, selects and popovers don't open there. What sets each version, what newer browsers add, and how it's tested: the [browser support guide](https://www.needlessui.com/guides/browser-support) and the [spec](specs/browser-support.md).

## Repository layout

```
packages/
  tokens/      DTCG token sources, palette generator, token compiler
  css/         component styles (one file per component) and the bundler
  core/        @needless-ui/core, the framework-free logic both bindings share
  angular/     @needless-ui/angular, one secondary entry point per component
  react/       @needless-ui/react, one entry point per component
apps/
  docs/        the documentation site, www.needlessui.com (30 languages)
specs/         framework-agnostic contract for each component
```

## Development

Requires Node.js 22.22+ or 24.15+ and pnpm 12.

```bash
pnpm install
pnpm dev        # docs site at http://localhost:4200
pnpm test       # token, CSS, Angular and React unit tests
pnpm build      # tokens → css → core → Angular and React packages
pnpm build:docs # prerendered docs site in dist/docs/browser
pnpm check:browsers # every page in Chromium, Firefox and WebKit, desktop and touch
```

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

[MIT](LICENSE)
