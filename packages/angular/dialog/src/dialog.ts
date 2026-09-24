import { _IdGenerator } from '@angular/cdk/a11y';
import {
  afterRenderEffect,
  booleanAttribute,
  DestroyRef,
  Directive,
  ElementRef,
  HostAttributeToken,
  inject,
  input,
  model,
  output,
  signal,
  type WritableSignal,
} from '@angular/core';
import { NuiPersonality, type NuiSize } from '@needless-ui/angular';

/**
 * Turns a native `<dialog>` into a Needless UI dialog. The browser provides the
 * modal behavior: the page behind becomes inert, focus stays inside, Escape
 * closes it and focus returns to the opener afterwards.
 *
 * ```html
 * <button nuiButton (click)="editing.set(true)">Edit</button>
 *
 * <dialog nuiDialog [(open)]="editing" (closed)="onClosed($event)">
 *   <h2 nuiDialogTitle>Edit profile</h2>
 *   <p nuiDialogDescription>Changes apply everywhere you're signed in.</p>
 *   <div nuiDialogActions>
 *     <button nuiButton variant="soft" tone="neutral" nuiDialogClose>Cancel</button>
 *     <button nuiButton nuiDialogClose="save">Save</button>
 *   </div>
 * </dialog>
 * ```
 *
 * `enter`, `motion` and `spring` set how it arrives; `corners`, `radius` and
 * `density` how it looks. The matching `data-nui-*` attributes do it for a subtree.
 */
@Directive({
  selector: 'dialog[nuiDialog]',
  exportAs: 'nuiDialog',
  hostDirectives: [
    {
      directive: NuiPersonality,
      inputs: ['enter', 'motion', 'spring', 'corners', 'radius', 'density'],
    },
  ],
  host: {
    class: 'nui-dialog',
    '[attr.data-size]': 'size()',
    '[attr.aria-labelledby]': 'labelledBy()',
    '[attr.aria-describedby]': 'describedBy()',
    '(close)': 'onClose()',
    '(cancel)': 'onCancel($event)',
    '(pointerdown)': 'onPointerDown($event)',
    '(click)': 'onClick($event)',
  },
})
export class NuiDialog {
  /** Whether the dialog is open. Bind with `[(open)]`. */
  readonly open = model(false);
  /** Opens as a modal: backdrop, inert page, focus kept inside. */
  readonly modal = input(true, { transform: booleanAttribute });
  /** Whether Escape and clicks on the backdrop close the dialog. */
  readonly dismissible = input(true, { transform: booleanAttribute });
  /** Maximum width. */
  readonly size = input<NuiSize>('md');
  /** Emits the dialog's return value each time it closes (empty when dismissed). */
  readonly closed = output<string>();

  /** The native `<dialog>` element. */
  readonly element = inject<ElementRef<HTMLDialogElement>>(ElementRef).nativeElement;

  /** @internal Set by `nuiDialogTitle`. */
  readonly labelledBy = signal<string | null>(null);
  /** @internal Set by `nuiDialogDescription`. */
  readonly describedBy = signal<string | null>(null);

  private pressStartedOutside = false;

  constructor() {
    afterRenderEffect(() => {
      const open = this.open();
      const dialog = this.element;
      if (open && !dialog.open && dialog.isConnected) {
        dialog.returnValue = '';
        if (this.modal()) dialog.showModal();
        else dialog.show();
      } else if (!open && dialog.open) {
        dialog.close();
      }
    });
  }

  /** Closes the dialog. `closed` emits `returnValue`. */
  close(returnValue?: string): void {
    if (this.element.open) this.element.close(returnValue);
    else this.open.set(false);
  }

  protected onClose(): void {
    this.open.set(false);
    this.closed.emit(this.element.returnValue);
  }

  protected onCancel(event: Event): void {
    if (!this.dismissible()) event.preventDefault();
  }

  // A backdrop click is a press that starts and ends outside the dialog box;
  // a text selection dragged out of the dialog doesn't count.
  protected onPointerDown(event: PointerEvent): void {
    this.pressStartedOutside = this.isOutside(event);
  }

  protected onClick(event: MouseEvent): void {
    const backdropClick = this.pressStartedOutside && this.isOutside(event);
    this.pressStartedOutside = false;
    if (backdropClick && this.modal() && this.dismissible()) this.close();
  }

  private isOutside(event: MouseEvent): boolean {
    if (event.target !== this.element) return false;
    const box = this.element.getBoundingClientRect();
    return (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    );
  }
}

/** Names the dialog: sets `aria-labelledby` on the surrounding `nuiDialog`. */
@Directive({
  selector: '[nuiDialogTitle]',
  host: { class: 'nui-dialog-title', '[id]': 'id' },
})
export class NuiDialogTitle {
  protected readonly id =
    inject(new HostAttributeToken('id'), { optional: true }) ??
    inject(_IdGenerator).getId('nui-dialog-title-');

  constructor() {
    linkToDialog(inject(NuiDialog).labelledBy, this.id);
  }
}

/** Describes the dialog: sets `aria-describedby` on the surrounding `nuiDialog`. */
@Directive({
  selector: '[nuiDialogDescription]',
  host: { class: 'nui-dialog-description', '[id]': 'id' },
})
export class NuiDialogDescription {
  protected readonly id =
    inject(new HostAttributeToken('id'), { optional: true }) ??
    inject(_IdGenerator).getId('nui-dialog-description-');

  constructor() {
    linkToDialog(inject(NuiDialog).describedBy, this.id);
  }
}

/** Row of actions at the bottom of a dialog, aligned to the end. */
@Directive({
  selector: '[nuiDialogActions]',
  host: { class: 'nui-dialog-actions' },
})
export class NuiDialogActions {}

/**
 * Closes the surrounding dialog when clicked. The attribute value becomes the
 * dialog's return value: `<button nuiDialogClose="delete">`.
 */
@Directive({
  selector: '[nuiDialogClose]',
  host: { '(click)': 'dialog.close(returnValue())' },
})
export class NuiDialogClose {
  /** Value the dialog closes with. */
  readonly returnValue = input('', { alias: 'nuiDialogClose' });
  protected readonly dialog = inject(NuiDialog);
}

function linkToDialog(target: WritableSignal<string | null>, id: string): void {
  target.set(id);
  inject(DestroyRef).onDestroy(() => {
    if (target() === id) target.set(null);
  });
}
