import { Component, DOCUMENT, ElementRef, inject, signal, viewChild } from '@angular/core';
import { I18n } from '../i18n/i18n';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * The big red button in the corner of every page. Lift the cover and press it,
 * and the page falls apart under real physics (`gravity.ts`, downloaded only
 * then). There is no undo: reloading the page is the only way back.
 */
@Component({
  selector: 'docs-emergency',
  template: `
    @let text = i18n.t().site.emergency;
    <div class="emergency-unit" [class.armed]="armed()">
      <div class="emergency-housing">
        <button
          #red
          type="button"
          class="emergency-button"
          [disabled]="!armed() || pressed()"
          [attr.aria-label]="text.button"
          (click)="press()"
        ></button>
        <button
          type="button"
          class="emergency-cover"
          [attr.aria-label]="text.cover"
          [inert]="armed()"
          (click)="arm()"
        ></button>
      </div>
      <span class="emergency-label" aria-hidden="true">{{ text.label }}</span>
    </div>
    <p class="emergency-status" role="status">{{ status() }}</p>
  `,
})
export class Emergency {
  protected readonly i18n = inject(I18n);
  private readonly document = inject(DOCUMENT);
  private readonly red = viewChild.required<ElementRef<HTMLButtonElement>>('red');

  protected readonly armed = signal(false);
  protected readonly pressed = signal(false);
  protected readonly status = signal('');

  protected arm(): void {
    this.armed.set(true);
    this.status.set(this.i18n.t().site.emergency.armed);
    // Focus follows the cover up, once the button is enabled.
    setTimeout(() => this.red().nativeElement.focus());
  }

  protected async press(): Promise<void> {
    const text = this.i18n.t().site.emergency;
    const view = this.document.defaultView;
    if (!view || view.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.status.set(text.reduced);
      return;
    }
    this.pressed.set(true);
    this.status.set(text.falling);
    const root = this.document.documentElement;
    root.classList.add('gravity-alarm');
    const [{ startGravity }] = await Promise.all([import('./gravity'), wait(900)]);
    root.classList.remove('gravity-alarm');
    startGravity(this.document);
    this.status.set(text.fallen);
  }
}
