import { LOCALE_INFO, LOCALES, localeOf, localizePath, pathnameOf, stripLocale } from './locales';

describe('locale paths', () => {
  it('reads the pathname without query, fragment or trailing slash', () => {
    expect(pathnameOf('/components/button/?tab=api#usage')).toBe('/components/button');
    expect(pathnameOf('/')).toBe('/');
    expect(pathnameOf('')).toBe('/');
    expect(pathnameOf('?q=1')).toBe('/');
  });

  it('finds the language in the first segment only', () => {
    expect(localeOf('/it')).toBe('it');
    expect(localeOf('/it/components?x=1')).toBe('it');
    expect(localeOf('/zh-hans/components')).toBe('zh-hans');
    expect(localeOf('/components/it')).toBe('en');
    expect(localeOf('/italy')).toBe('en');
    expect(localeOf('/zh')).toBe('en');
    expect(localeOf('/')).toBe('en');
  });

  it('strips and adds the language prefix', () => {
    expect(stripLocale('/it/components/menu')).toBe('/components/menu');
    expect(stripLocale('/zh-hant/guides/theming')).toBe('/guides/theming');
    expect(stripLocale('/ar')).toBe('/');
    expect(stripLocale('/components')).toBe('/components');
    expect(localizePath('/components', 'fa')).toBe('/fa/components');
    expect(localizePath('/', 'it')).toBe('/it');
    expect(localizePath('/components', 'en')).toBe('/components');
  });
});

describe('languages', () => {
  it('publishes 30, each with a name, a tag and a direction', () => {
    expect(LOCALES.length).toBe(30);
    expect(new Set(LOCALES).size).toBe(30);
    for (const locale of LOCALES) {
      const info = LOCALE_INFO[locale];
      expect(info.name.trim()).not.toBe('');
      expect(info.tag.toLowerCase()).toBe(locale);
      expect(info.ogLocale).toMatch(/^[a-z]{2}_[A-Z]{2}$/);
    }
  });

  it('writes Arabic, Urdu and Persian right to left', () => {
    const rtl = LOCALES.filter((locale) => LOCALE_INFO[locale].dir === 'rtl');
    expect(rtl).toEqual(['ar', 'ur', 'fa']);
  });
});
