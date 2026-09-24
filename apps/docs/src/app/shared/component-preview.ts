import { Component, input } from '@angular/core';
import type { ComponentId } from '../docs/ids';

/**
 * A decorative, non-interactive picture of a component, drawn with the real
 * stylesheet: spans and divs with the component classes, hidden from assistive
 * technology because the card's own text describes it.
 */
@Component({
  selector: 'docs-preview',
  host: { class: 'preview', 'aria-hidden': 'true' },
  template: `
    @switch (id()) {
      @case ('button') {
        <div class="preview-row">
          <span class="nui-button" data-size="sm">Save</span>
          <span class="nui-button" data-size="sm" data-variant="soft" data-tone="neutral"
            >Cancel</span
          >
          <span class="nui-button" data-size="sm" data-variant="ghost" data-tone="danger"
            >Delete</span
          >
        </div>
      }
      @case ('dialog') {
        <div class="nui-dialog preview-dialog" data-size="sm">
          <p class="nui-dialog-title">Delete project?</p>
          <p class="nui-dialog-description">This can’t be undone.</p>
          <div class="nui-dialog-actions">
            <span class="nui-button" data-size="sm" data-variant="soft" data-tone="neutral"
              >Cancel</span
            >
            <span class="nui-button" data-size="sm" data-tone="danger">Delete</span>
          </div>
        </div>
      }
      @case ('menu') {
        <div class="nui-menu preview-menu">
          <div class="nui-menu-item">Edit <span class="nui-menu-shortcut">⌘E</span></div>
          <div class="nui-menu-item" data-active="true">
            Duplicate <span class="nui-menu-shortcut">⌘D</span>
          </div>
          <div class="nui-menu-separator"></div>
          <div class="nui-menu-item" data-tone="danger">Delete</div>
        </div>
      }
    }
  `,
})
export class ComponentPreview {
  readonly id = input.required<ComponentId>();
}
