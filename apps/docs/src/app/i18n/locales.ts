/**
 * Languages the site is published in: the 30 most spoken, by total speakers.
 * The first one lives at the root URL; the others under their id (`/de`).
 */
export const LOCALES = [
  'en',
  'zh-hans',
  'zh-hant',
  'hi',
  'es',
  'ar',
  'fr',
  'bn',
  'pt',
  'ru',
  'id',
  'ur',
  'de',
  'ja',
  'mr',
  'vi',
  'te',
  'ha',
  'tr',
  'pa',
  'sw',
  'tl',
  'ta',
  'fa',
  'ko',
  'th',
  'jv',
  'it',
  'gu',
  'kn',
] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleInfo {
  /** The language's own name for itself. */
  name: string;
  /** BCP 47 tag for `lang` and `hreflang`. */
  tag: string;
  ogLocale: string;
  dir: 'ltr' | 'rtl';
}

const ltr = (name: string, tag: string, ogLocale: string): LocaleInfo => ({
  name,
  tag,
  ogLocale,
  dir: 'ltr',
});
const rtl = (name: string, tag: string, ogLocale: string): LocaleInfo => ({
  name,
  tag,
  ogLocale,
  dir: 'rtl',
});

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: ltr('English', 'en', 'en_US'),
  'zh-hans': ltr('简体中文', 'zh-Hans', 'zh_CN'),
  'zh-hant': ltr('繁體中文', 'zh-Hant', 'zh_TW'),
  hi: ltr('हिन्दी', 'hi', 'hi_IN'),
  es: ltr('Español', 'es', 'es_ES'),
  ar: rtl('العربية', 'ar', 'ar_AR'),
  fr: ltr('Français', 'fr', 'fr_FR'),
  bn: ltr('বাংলা', 'bn', 'bn_BD'),
  pt: ltr('Português', 'pt', 'pt_BR'),
  ru: ltr('Русский', 'ru', 'ru_RU'),
  id: ltr('Bahasa Indonesia', 'id', 'id_ID'),
  ur: rtl('اردو', 'ur', 'ur_PK'),
  de: ltr('Deutsch', 'de', 'de_DE'),
  ja: ltr('日本語', 'ja', 'ja_JP'),
  mr: ltr('मराठी', 'mr', 'mr_IN'),
  vi: ltr('Tiếng Việt', 'vi', 'vi_VN'),
  te: ltr('తెలుగు', 'te', 'te_IN'),
  ha: ltr('Hausa', 'ha', 'ha_NG'),
  tr: ltr('Türkçe', 'tr', 'tr_TR'),
  pa: ltr('ਪੰਜਾਬੀ', 'pa', 'pa_IN'),
  sw: ltr('Kiswahili', 'sw', 'sw_KE'),
  tl: ltr('Filipino', 'tl', 'tl_PH'),
  ta: ltr('தமிழ்', 'ta', 'ta_IN'),
  fa: rtl('فارسی', 'fa', 'fa_IR'),
  ko: ltr('한국어', 'ko', 'ko_KR'),
  th: ltr('ไทย', 'th', 'th_TH'),
  jv: ltr('Basa Jawa', 'jv', 'jv_ID'),
  it: ltr('Italiano', 'it', 'it_IT'),
  gu: ltr('ગુજરાતી', 'gu', 'gu_IN'),
  kn: ltr('ಕನ್ನಡ', 'kn', 'kn_IN'),
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
