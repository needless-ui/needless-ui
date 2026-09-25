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
      @case ('calendar') {
        <div class="nui-calendar preview-calendar">
          <div class="nui-calendar-header">
            <span class="nui-calendar-nav" data-direction="previous"></span>
            <span class="nui-calendar-title">September 2026</span>
            <span class="nui-calendar-nav" data-direction="next"></span>
          </div>
          <table class="nui-calendar-grid">
            <tbody>
              <tr>
                <td class="nui-calendar-day">14</td>
                <td class="nui-calendar-day">15</td>
                <td class="nui-calendar-day" data-in-range data-range-start>16</td>
                <td class="nui-calendar-day" data-in-range>17</td>
                <td class="nui-calendar-day" data-in-range>18</td>
                <td class="nui-calendar-day" data-in-range data-range-end>19</td>
                <td class="nui-calendar-day">20</td>
              </tr>
              <tr>
                <td class="nui-calendar-day">21</td>
                <td class="nui-calendar-day">22</td>
                <td class="nui-calendar-day">23</td>
                <td class="nui-calendar-day">24</td>
                <td class="nui-calendar-day" data-today>25</td>
                <td class="nui-calendar-day">26</td>
                <td class="nui-calendar-day">27</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
      @case ('chat') {
        <div class="nui-chat preview-chat">
          <div class="nui-chat-message" data-role="user">
            <div class="nui-chat-bubble">Weekend in Lisbon?</div>
          </div>
          <div class="nui-chat-message" data-role="assistant">
            <div class="nui-markdown">
              <p>Start in <strong>Alfama</strong>, then ride tram 28 west.</p>
            </div>
          </div>
          <div class="nui-chat-box preview-chat-box">
            <span class="preview-typed">Ask anything</span>
            <span class="nui-chat-send"></span>
          </div>
        </div>
      }
      @case ('combobox') {
        <div class="preview-stack">
          <div class="nui-combobox">
            <span class="nui-select-chip">docs<span class="nui-select-chip-remove"></span></span>
            <span class="nui-select-chip">design<span class="nui-select-chip-remove"></span></span>
            <span class="preview-typed">fea</span>
          </div>
          <div class="nui-select-popup preview-popup">
            <div class="nui-select-option" data-active>
              <span><mark>fea</mark>ture</span>
            </div>
            <div class="nui-select-option">Add “fea”</div>
          </div>
        </div>
      }
      @case ('command') {
        <div class="nui-dialog nui-command preview-command">
          <div class="nui-command-field"><span class="preview-typed">the</span></div>
          <div class="nui-select-list">
            <div class="nui-select-option" data-active>
              <span><mark>The</mark>me</span><span class="nui-command-more"></span>
            </div>
            <div class="nui-select-option">
              Share…
              <span class="nui-command-shortcut"><kbd>⌘</kbd><kbd>S</kbd></span>
            </div>
          </div>
        </div>
      }
      @case ('date-picker') {
        <div class="nui-date-picker preview-date-picker">
          <span class="nui-date-field">
            <span class="nui-date-segment">09</span><span class="nui-date-literal">/</span
            ><span class="nui-date-segment preview-segment">25</span
            ><span class="nui-date-literal">/</span><span class="nui-date-segment">2026</span>
          </span>
          <span class="nui-date-picker-button"></span>
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
      @case ('grid') {
        <div class="nui-grid preview-grid">
          <table class="nui-grid-table">
            <thead>
              <tr>
                <th class="nui-grid-header">
                  Customer<span class="nui-grid-sort" data-direction="asc"></span>
                </th>
                <th class="nui-grid-header" data-align="end">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr class="nui-grid-row">
                <td class="nui-grid-cell">Ada Lovelace</td>
                <td class="nui-grid-cell" data-align="end" data-type="number">480.00</td>
              </tr>
              <tr class="nui-grid-row">
                <td class="nui-grid-cell">Alan Turing</td>
                <td class="nui-grid-cell" data-align="end" data-type="number">120.50</td>
              </tr>
              <tr class="nui-grid-row">
                <td class="nui-grid-cell">Grace Hopper</td>
                <td class="nui-grid-cell" data-align="end" data-type="number">1,290.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
      @case ('markdown') {
        <div class="nui-markdown preview-markdown">
          <p><strong>Release notes</strong></p>
          <ul>
            <li class="nui-markdown-task">
              <span class="nui-markdown-check" data-checked></span>Faster <em>pages</em>
            </li>
            <li class="nui-markdown-task">
              <span class="nui-markdown-check"></span>Fewer <code>bytes</code>
            </li>
          </ul>
          <div class="nui-markdown-code">
            <pre><code>count.set(4);</code></pre>
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
      @case ('popover') {
        <div class="preview-stack">
          <span class="nui-button" data-size="sm" data-variant="outline" data-tone="neutral"
            >Filters</span
          >
          <div class="nui-popover preview-popover" data-arrow data-side="bottom">
            <span class="preview-check" data-checked>Open</span>
            <span class="preview-check" data-checked>In review</span>
            <span class="preview-check">Closed</span>
          </div>
        </div>
      }
      @case ('rating') {
        <span class="nui-rating" style="--_value: 4.5; --_max: 5"
          ><span class="nui-rating-display"></span
        ></span>
      }
      @case ('scheduler') {
        <div class="nui-scheduler preview-scheduler">
          <div class="preview-scheduler-day">
            <span class="nui-scheduler-event" data-tone="neutral" style="--_row: 1">Standup</span>
            <span class="nui-scheduler-event" style="--_row: 2; --_rows: 2">Design review</span>
          </div>
          <div class="preview-scheduler-day">
            <span class="nui-scheduler-event" data-tone="success" style="--_row: 2">Lunch</span>
            <span class="nui-scheduler-event" data-tone="warning" style="--_row: 3; --_rows: 2"
              >Interview</span
            >
          </div>
          <div class="preview-scheduler-day">
            <span class="nui-scheduler-event" data-tone="danger" style="--_row: 1; --_rows: 2"
              >Release</span
            >
          </div>
        </div>
      }
      @case ('select') {
        <div class="preview-stack">
          <span class="nui-select-trigger"><span class="nui-select-value">Italy</span></span>
          <div class="nui-select-popup preview-popup">
            <div class="nui-select-option">France</div>
            <div class="nui-select-option" data-active>Italy</div>
            <div class="nui-select-option">Spain</div>
          </div>
        </div>
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
