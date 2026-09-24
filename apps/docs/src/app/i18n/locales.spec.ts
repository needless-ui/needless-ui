import { localeOf, localizePath, pathnameOf, stripLocale } from './locales';

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
    expect(localeOf('/components/it')).toBe('en');
    expect(localeOf('/italy')).toBe('en');
    expect(localeOf('/')).toBe('en');
  });

  it('strips and adds the language prefix', () => {
    expect(stripLocale('/it/components/menu')).toBe('/components/menu');
    expect(stripLocale('/it')).toBe('/');
    expect(stripLocale('/components')).toBe('/components');
    expect(localizePath('/components', 'it')).toBe('/it/components');
    expect(localizePath('/', 'it')).toBe('/it');
    expect(localizePath('/components', 'en')).toBe('/components');
  });
});
