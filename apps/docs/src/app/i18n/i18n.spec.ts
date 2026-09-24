import { provideLocationMocks } from '@angular/common/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { I18n, loadLocale } from './i18n';

@Component({ template: '' })
class Blank {}

describe('I18n', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideLocationMocks(),
        provideRouter([
          { path: 'it', children: [{ path: '**', canActivate: [loadLocale], component: Blank }] },
          { path: '**', canActivate: [loadLocale], component: Blank },
        ]),
      ],
    });
  });

  it('has no words until the language is loaded', async () => {
    const i18n = TestBed.inject(I18n);
    expect(() => i18n.t()).toThrowError(/not loaded/);

    await i18n.load('en');
    expect(i18n.t().site.nav.components).toBe('Components');
  });

  it('loads the next language before navigating to it', async () => {
    const i18n = TestBed.inject(I18n);
    await i18n.load('en');

    await TestBed.inject(Router).navigateByUrl('/it/components?tab=api');
    expect(i18n.locale()).toBe('it');
    expect(i18n.path()).toBe('/components');
    expect(i18n.t().site.nav.components).toBe('Componenti');
    expect(i18n.link('/guides/theming')).toBe('/it/guides/theming');
    expect(i18n.link('/guides/theming', 'en')).toBe('/guides/theming');
  });

  it('points links in translated text at the same language', async () => {
    const i18n = TestBed.inject(I18n);
    await i18n.load('en');
    await TestBed.inject(Router).navigateByUrl('/it/privacy');

    const text = JSON.stringify(i18n.t());
    expect(text).toContain('href=\\"/it/legal\\"');
    expect(text).not.toContain('href=\\"/legal\\"');
    expect(text).toContain(
      'href=\\"https://github.com/needless-ui/needless-ui/blob/main/LICENSE\\"',
    );
  });
});
