import { Component } from '@angular/core';

/** The Needless UI mark: a needle, because the engineering is needless. */
@Component({
  selector: 'docs-logo',
  host: { class: 'logo' },
  template: `
    <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true" focusable="false">
      <rect class="logo-tile" width="64" height="64" rx="15" />
      <path class="logo-needle" d="M14 50 41.6 16.4A6 6 0 0 1 49.6 24.4Z" />
      <rect
        class="logo-tile"
        x="41.2"
        y="20.7"
        width="6"
        height="2.2"
        rx="1.1"
        transform="rotate(-45 44.2 21.8)"
      />
    </svg>
  `,
})
export class Logo {}
