import { DOCUMENT, effect, inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeChoice = 'system' | 'light' | 'dark';

/** Kept in sync with the inline script in index.html, which applies it before first paint. */
export const THEME_STORAGE_KEY = 'nui-theme';

/** The reader's light or dark preference, stored in the browser. */
@Service()
export class ThemePreference {
  private readonly document = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly choice = signal<ThemeChoice>(this.stored());

  constructor() {
    effect(() => {
      const choice = this.choice();
      const root = this.document.documentElement;
      if (choice === 'system') root.removeAttribute('data-nui-theme');
      else root.setAttribute('data-nui-theme', choice);
      if (!this.browser) return;
      try {
        if (choice === 'system') localStorage.removeItem(THEME_STORAGE_KEY);
        else localStorage.setItem(THEME_STORAGE_KEY, choice);
      } catch {
        // Storage can be unavailable (private mode, blocked cookies); the choice still applies.
      }
    });
  }

  private stored(): ThemeChoice {
    if (!this.browser) return 'system';
    try {
      const value = localStorage.getItem(THEME_STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : 'system';
    } catch {
      return 'system';
    }
  }
}
