import { Component } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';

/** Two panels that pin their own theme, whatever the page uses. */
@Component({
  selector: 'docs-nested-themes',
  imports: [NuiButton],
  template: `
    <div class="theme-panels">
      @for (theme of themes; track theme) {
        <div class="theme-panel" [attr.data-nui-theme]="theme">
          <code>data-nui-theme="{{ theme }}"</code>
          <div class="theme-panel-row">
            <button nuiButton type="button">Save</button>
            <button nuiButton type="button" variant="soft" tone="neutral">Cancel</button>
            <button nuiButton type="button" variant="ghost" tone="danger">Delete</button>
          </div>
        </div>
      }
    </div>
  `,
})
export class NestedThemesDemo {
  protected readonly themes = ['light', 'dark'] as const;
}
