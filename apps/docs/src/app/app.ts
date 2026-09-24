import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { I18n } from './i18n/i18n';
import { LOCALE_INFO, LOCALES } from './i18n/locales';
import { Logo } from './layout/logo';
import { ThemeMenu } from './layout/theme-menu';
import { REPO_URL } from './site';

@Component({
  selector: 'docs-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Logo, ThemeMenu],
  templateUrl: './app.html',
})
export class App {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;

  protected readonly repo = REPO_URL;
  protected readonly localeInfo = LOCALE_INFO;

  /** Links to the current page in every other language. */
  protected readonly otherLocales = computed(() => LOCALES.filter((l) => l !== this.i18n.locale()));
  protected readonly inGuides = computed(() => this.i18n.path().startsWith('/guides'));
  protected readonly skipHref = computed(() => `${this.i18n.link(this.i18n.path())}#main`);
}
