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
      @case ('avatar') {
        <div class="preview-row">
          <span class="nui-avatar" style="--_hue: 212"
            ><span class="nui-avatar-initials">AL</span
            ><span class="nui-avatar-status" data-status="online"></span
          ></span>
          <span class="nui-avatar-group">
            <span class="nui-avatar" data-size="sm" style="--_hue: 34">GH</span>
            <span class="nui-avatar" data-size="sm" style="--_hue: 150">AT</span>
            <span class="nui-avatar" data-size="sm" style="--_hue: 300">MH</span>
          </span>
        </div>
      }
      @case ('breadcrumbs') {
        <nav class="nui-breadcrumbs">
          <ol>
            <li><span class="preview-link">Home</span></li>
            <li><span class="preview-link">Docs</span></li>
            <li><span aria-current="page">Button</span></li>
          </ol>
        </nav>
      }
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
      @case ('empty') {
        <div class="nui-empty preview-empty">
          <div class="nui-empty-media" data-illustration="inbox"></div>
          <p class="nui-empty-title">Inbox zero</p>
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
      @case ('number-field') {
        <div class="nui-number-field">
          <span class="nui-number-step" data-step="down"></span>
          <span class="nui-number-input preview-number">12</span>
          <span class="nui-number-step" data-step="up"></span>
        </div>
      }
      @case ('otp') {
        <div class="nui-otp">
          <div class="nui-otp-slots">
            <span class="nui-otp-slot" data-filled>4</span>
            <span class="nui-otp-slot" data-filled>2</span>
            <span class="nui-otp-slot" data-active data-caret></span>
            <span class="nui-otp-separator"></span>
            <span class="nui-otp-slot"></span>
            <span class="nui-otp-slot"></span>
            <span class="nui-otp-slot"></span>
          </div>
        </div>
      }
      @case ('rating') {
        <span class="nui-rating" style="--_value: 4.5; --_max: 5"
          ><span class="nui-rating-display"></span
        ></span>
      }
      @case ('skeleton') {
        <div class="preview-skeleton">
          <span class="nui-skeleton" data-shape="circle"></span>
          <span class="preview-lines">
            <span class="nui-skeleton" style="inline-size: 50%"></span>
            <span class="nui-skeleton"></span>
          </span>
        </div>
      }
      @case ('toast') {
        <div class="nui-toast preview-toast" data-tone="success">
          <div class="nui-toast-body">
            <p class="nui-toast-title">Published</p>
            <p class="nui-toast-description">Your post is live.</p>
          </div>
        </div>
      }
    }
  `,
})
export class ComponentPreview {
  readonly id = input.required<ComponentId>();
}
