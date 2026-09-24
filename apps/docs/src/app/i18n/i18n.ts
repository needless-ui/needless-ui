import { Location } from '@angular/common';
import { computed, inject, Service, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { type CanActivateFn, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { localeOf, localizePath, type Locale, stripLocale } from './locales';
import type { Messages } from './messages/types';

/** Each language is its own chunk, so a page downloads only the one it shows. */
const LOADERS: Record<Locale, () => Promise<{ messages: Messages }>> = {
  en: () => import('./messages/en'),
  'zh-hans': () => import('./messages/zh-hans'),
  'zh-hant': () => import('./messages/zh-hant'),
  hi: () => import('./messages/hi'),
  es: () => import('./messages/es'),
  ar: () => import('./messages/ar'),
  fr: () => import('./messages/fr'),
  bn: () => import('./messages/bn'),
  pt: () => import('./messages/pt'),
  ru: () => import('./messages/ru'),
  id: () => import('./messages/id'),
  ur: () => import('./messages/ur'),
  de: () => import('./messages/de'),
  ja: () => import('./messages/ja'),
  mr: () => import('./messages/mr'),
  vi: () => import('./messages/vi'),
  te: () => import('./messages/te'),
  ha: () => import('./messages/ha'),
  tr: () => import('./messages/tr'),
  pa: () => import('./messages/pa'),
  sw: () => import('./messages/sw'),
  tl: () => import('./messages/tl'),
  ta: () => import('./messages/ta'),
  fa: () => import('./messages/fa'),
  ko: () => import('./messages/ko'),
  th: () => import('./messages/th'),
  jv: () => import('./messages/jv'),
  it: () => import('./messages/it'),
  gu: () => import('./messages/gu'),
  kn: () => import('./messages/kn'),
};

/**
 * Site links in translated html are written without a language prefix
 * (`href="/legal"`); point them at the loaded language's pages.
 */
function localizeLinks<T>(value: T, locale: Locale): T {
  if (typeof value === 'string') {
    return value.replace(/href="(\/[^"/][^"]*|\/)"/g, (_, path: string) => {
      const [pathname, hash = ''] = path.split('#');
      return `href="${localizePath(pathname, locale)}${hash && `#${hash}`}"`;
    }) as T;
  }
  if (Array.isArray(value)) return value.map((item) => localizeLinks(item, locale)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeLinks(item, locale)]),
    ) as T;
  }
  return value;
}

/** The current language, derived from the URL, and its messages. */
@Service()
export class I18n {
  private readonly router = inject(Router);
  private readonly loaded = signal<Partial<Record<Locale, Messages>>>({});

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    // The address bar, not `router.url`: that reads `/` until the first navigation
    // ends, and the header renders before then.
    { initialValue: inject(Location).path() },
  );

  readonly locale = computed<Locale>(() => localeOf(this.url()));
  readonly t = computed(() => {
    const messages = this.loaded()[this.locale()];
    if (!messages) throw new Error(`Messages for "${this.locale()}" are not loaded yet.`);
    return messages;
  });
  /** The current page's path without its language prefix. */
  readonly path = computed(() => stripLocale(this.url()));

  /** Downloads a language's messages once. Bootstrap and navigation wait for it. */
  async load(locale: Locale): Promise<void> {
    if (this.loaded()[locale]) return;
    const { messages } = await LOADERS[locale]();
    this.loaded.update((all) => ({ ...all, [locale]: localizeLinks(messages, locale) }));
  }

  /** A locale-agnostic path in the current language: `/components` → `/it/components`. */
  link(path: string, locale: Locale = this.locale()): string {
    return localizePath(path, locale);
  }
}

/** Holds a navigation until the target page's language is loaded. */
export const loadLocale: CanActivateFn = async (_route, state) => {
  await inject(I18n).load(localeOf(state.url));
  return true;
};
