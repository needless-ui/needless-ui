import { RenderMode, type ServerRoute } from '@angular/ssr';
import { COMPONENT_IDS, GUIDE_IDS } from './docs/ids';
import { PREFIXED_LOCALES } from './i18n/locales';

const prefixes = ['', ...PREFIXED_LOCALES.map((locale) => `${locale}/`)];

const prerender = (path: string, ids: readonly string[]): ServerRoute => ({
  path,
  renderMode: RenderMode.Prerender,
  getPrerenderParams: async () => ids.map((id) => ({ id })),
});

/** Every page is prerendered to static HTML, in every language. */
export const serverRoutes: ServerRoute[] = [
  ...prefixes.flatMap((prefix) => [
    prerender(`${prefix}components/:id`, COMPONENT_IDS),
    prerender(`${prefix}components/:id/api`, COMPONENT_IDS),
    prerender(`${prefix}components/:id/accessibility`, COMPONENT_IDS),
    prerender(`${prefix}guides/:id`, GUIDE_IDS),
  ]),
  { path: '**', renderMode: RenderMode.Prerender },
];
