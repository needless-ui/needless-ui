import { Directive, inject, input, TemplateRef } from '@angular/core';
import type { NuiGridColumn } from './types';

/** What a custom cell template gets. */
export interface NuiGridCellContext<T> {
  /** The row. */
  $implicit: T;
  value: unknown;
  /** The value as the column formats it. */
  text: string;
  column: NuiGridColumn<T>;
}

/**
 * Draws a column's cells yourself:
 *
 * ```html
 * <ng-template nuiGridCell="status" let-order let-text="text">
 *   <span class="badge" [attr.data-status]="order.status">{{ text }}</span>
 * </ng-template>
 * ```
 */
@Directive({ selector: 'ng-template[nuiGridCell]' })
// `any` so templates can read the row's fields: the column id can't carry its type.
export class NuiGridCell<T = any> {
  /** The column's id. */
  readonly column = input.required<string>({ alias: 'nuiGridCell' });
  readonly template = inject<TemplateRef<NuiGridCellContext<T>>>(TemplateRef);

  static ngTemplateContextGuard<T>(
    _directive: NuiGridCell<T>,
    context: unknown,
  ): context is NuiGridCellContext<T> {
    return true;
  }
}

/** Draws a column's header yourself. The context holds the column. */
@Directive({ selector: 'ng-template[nuiGridHeader]' })
export class NuiGridHeader {
  /** The column's id. */
  readonly column = input.required<string>({ alias: 'nuiGridHeader' });
  readonly template = inject<TemplateRef<{ $implicit: NuiGridColumn }>>(TemplateRef);
}

/** What the grid shows when there are no rows. The context says whether filters hid them. */
@Directive({ selector: 'ng-template[nuiGridEmpty]' })
export class NuiGridEmpty {
  readonly template = inject<TemplateRef<{ $implicit: boolean }>>(TemplateRef);
}

/**
 * A row's details, shown under it when opened: the grid adds a column of
 * toggles. The context holds the row.
 *
 * ```html
 * <ng-template nuiGridDetail let-order>
 *   <ul>@for (line of order.lines; track line.sku) { <li>{{ line.name }}</li> }</ul>
 * </ng-template>
 * ```
 */
@Directive({ selector: 'ng-template[nuiGridDetail]' })
// `any` so templates can read the row's fields.
export class NuiGridDetail<T = any> {
  readonly template = inject<TemplateRef<{ $implicit: T }>>(TemplateRef);

  static ngTemplateContextGuard<T>(
    _directive: NuiGridDetail<T>,
    context: unknown,
  ): context is { $implicit: T } {
    return true;
  }
}
