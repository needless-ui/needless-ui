import { Component } from '@angular/core';

/**
 * The Needless UI mark, traced from the logo in `.github/assets/nui-logo.png`.
 * The eyes are holes, so they show the header behind them in either theme.
 */
@Component({
  selector: 'docs-logo',
  host: { class: 'logo' },
  template: `
    <svg viewBox="0 0 126 100" width="35" height="28" aria-hidden="true" focusable="false">
      <path
        class="logo-ink"
        fill-rule="evenodd"
        d="M38 0.4C18 2.4 4.5 19.3 1 46.8C-0.4 58-0.3 77.3 1.1 83.6C3.3 92.8 9.1 98.3 18.4 99.6C29.5 101.3 37.4 95.9 39.7 85C40.2 82.8 40.3 81.3 40.4 74.6C40.6 65 40.9 63.4 43 60.7C44.2 59.1 46.7 58.4 48.6 59.2C51.6 60.5 53.3 63.3 57.1 72.7C60.9 81.9 63.5 86.6 67 90.3C72.9 96.7 81.7 100 92.7 100C108.9 100 120.2 92.7 124.2 79.6C125.5 75.3 125.6 74.8 125.6 62C125.6 48.7 125.5 48.5 123.6 44.6C118.5 34.1 101.2 33.9 94.3 44.3C92.1 47.6 91.3 50.6 91.3 55.2C91.3 60.5 90.7 64 89.6 65.8C87.9 68.3 84.7 68.2 82.8 65.6C80.9 63 80 59 77.6 42.8C75.3 27.8 72.8 20.3 67.6 13.4C60.9 4.4 49.3-0.7 38 0.4M46.7 21.8C44.8 24 44.8 28.2 46.7 30.4C48.7 32.7 51.4 30.2 51.4 26.1C51.4 22 48.7 19.5 46.7 21.8M35.5 25.6C33.2 27.9 33.7 33.7 36.2 34.9C37.2 35.4 37.2 35.4 38 34.9C40.7 33.5 40.9 26.5 38.3 25.1C37.2 24.6 36.4 24.7 35.5 25.6"
      />
      <circle class="logo-dot" cx="108.69" cy="17.28" r="17.28" />
    </svg>
  `,
})
export class Logo {}
