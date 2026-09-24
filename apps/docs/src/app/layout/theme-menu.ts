import { type Menu, MenuTrigger } from '@angular/aria/menu';
import { Component, computed, inject, viewChild } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiMenu, NuiMenuItem, NuiMenuTrigger } from '@needless-ui/angular/menu';
import { I18n } from '../i18n/i18n';
import { type ThemeChoice, ThemePreference } from '../theme/theme';

/**
 * The header's theme switch. The header hydrates it lazily, so the trigger renders
 * every choice and CSS shows the one matching `<html data-nui-theme>`: the label is
 * right from the first paint, whether or not this component has hydrated yet.
 *
 * The menu itself is closed at first, so it isn't prerendered: it renders when the
 * browser is idle, when the pointer or focus reaches the trigger, or once the trigger
 * opens (a click replayed after hydration). That keeps it and its styles out of every
 * page's first round trip; Aria's trigger opens it as soon as it exists.
 */
@Component({
  selector: 'docs-theme-menu',
  imports: [NuiButton, NuiMenuTrigger, NuiMenu, NuiMenuItem],
  template: `
    @let nav = t().site.nav;
    <button
      nuiButton
      type="button"
      variant="ghost"
      tone="neutral"
      size="sm"
      class="theme-trigger"
      [nuiMenuTrigger]="menu()"
      #trigger
    >
      <svg
        data-choice="system"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M4 5h16v11H4zM9 20h6m-3-4v4" />
      </svg>
      <svg
        data-choice="light"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m11.4 0 1.4 1.4M4.9 4.9l1.4 1.4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        />
      </svg>
      <svg
        data-choice="dark"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      <span class="visually-hidden">{{ nav.theme }}:</span>
      @for (choice of choices; track choice) {
        <span class="theme-label" [attr.data-choice]="choice">{{ nav.themes[choice] }}</span>
      }
    </button>
    @defer (on idle; on hover(trigger); when opening()) {
      <div nuiMenu #menu="ngMenu">
        @for (choice of choices; track choice) {
          <div
            nuiMenuItem
            role="menuitemradio"
            [value]="choice"
            [checked]="theme.choice() === choice"
            (selected)="theme.choice.set(choice)"
          >
            {{ nav.themes[choice] }}
          </div>
        }
      </div>
    }
  `,
})
export class ThemeMenu {
  protected readonly t = inject(I18n).t;
  protected readonly theme = inject(ThemePreference);
  protected readonly choices: ThemeChoice[] = ['system', 'light', 'dark'];
  protected readonly menu = viewChild<Menu<ThemeChoice>>('menu');
  private readonly trigger = viewChild(MenuTrigger);
  protected readonly opening = computed(() => this.trigger()?.expanded() ?? false);
}
