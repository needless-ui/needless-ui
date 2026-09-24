import type { Routes } from '@angular/router';
import { loadLocale } from './i18n/i18n';
import { PREFIXED_LOCALES } from './i18n/locales';

/**
 * Every page, mounted once per language: at the root for English, under `/it` for
 * Italian. Each one waits for its language's messages before it renders.
 */
const pages: Routes = [
  {
    path: '',
    canActivate: [loadLocale],
    loadComponent: () => import('./pages/home/home-page').then((m) => m.HomePage),
  },
  {
    path: 'components',
    canActivate: [loadLocale],
    loadComponent: () => import('./pages/components/components-page').then((m) => m.ComponentsPage),
  },
  {
    path: 'components/:id',
    canActivate: [loadLocale],
    loadComponent: () => import('./pages/component/component-page').then((m) => m.ComponentPage),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/component/sections').then((m) => m.OverviewSection),
      },
      {
        path: 'api',
        loadComponent: () => import('./pages/component/sections').then((m) => m.ApiSection),
      },
      {
        path: 'accessibility',
        loadComponent: () =>
          import('./pages/component/sections').then((m) => m.AccessibilitySection),
      },
    ],
  },
  {
    path: 'guides/:id',
    canActivate: [loadLocale],
    loadComponent: () => import('./pages/guide/guide-page').then((m) => m.GuidePage),
  },
  {
    path: '404',
    canActivate: [loadLocale],
    loadComponent: () => import('./pages/not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];

export const routes: Routes = [
  ...PREFIXED_LOCALES.map((locale) => ({ path: locale, children: pages })),
  ...pages,
  {
    path: '**',
    canActivate: [loadLocale],
    loadComponent: () => import('./pages/not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
