/** Languages the site is published in. The first one lives at the root URL. */
export const LOCALES = ['en', 'it'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_INFO: Record<Locale, { name: string; ogLocale: string }> = {
  en: { name: 'English', ogLocale: 'en_US' },
  it: { name: 'Italiano', ogLocale: 'it_IT' },
};

/** Locales that get a URL prefix: `/it/components`. */
export const PREFIXED_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

/** The pathname without query string or fragment. */
export function pathnameOf(url: string): string {
  const path = url.split(/[?#]/)[0] || '/';
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

export function localeOf(url: string): Locale {
  const [, first = ''] = pathnameOf(url).split('/');
  return isLocale(first) && first !== DEFAULT_LOCALE ? first : DEFAULT_LOCALE;
}

/** `/it/components/button` → `/components/button`; `/it` → `/`. */
export function stripLocale(url: string): string {
  const path = pathnameOf(url);
  const locale = localeOf(path);
  if (locale === DEFAULT_LOCALE) return path;
  const rest = path.slice(locale.length + 1);
  return rest === '' ? '/' : rest;
}

/** `/components` in `it` → `/it/components`; `/` in `it` → `/it`. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}
