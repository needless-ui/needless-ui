import { Component, computed, signal } from '@angular/core';
import { form, FormField, validate } from '@angular/forms/signals';
import {
  nuiCardBrand,
  nuiCardMask,
  nuiCardValid,
  nuiIbanMask,
  nuiIbanValid,
  NuiMask,
} from '@needless-ui/angular/mask';

@Component({
  selector: 'mask-payment-example',
  imports: [FormField, NuiMask],
  templateUrl: './payment.html',
  styleUrl: './mask.css',
})
export class MaskPaymentExample {
  protected readonly cardMask = nuiCardMask;
  protected readonly ibanMask = nuiIbanMask;
  protected readonly payment = signal({ card: '', expiry: '', code: '', iban: '' });
  protected readonly fields = form(this.payment, (path) => {
    validate(path.card, ({ value }) =>
      value() && !nuiCardValid(value())
        ? { kind: 'card', message: 'Check the card number.' }
        : null,
    );
    validate(path.iban, ({ value }) =>
      value() && !nuiIbanValid(value()) ? { kind: 'iban', message: 'Check the IBAN.' } : null,
    );
  });
  protected readonly brand = computed(() => nuiCardBrand(this.payment().card));
  /** Four digits for American Express, three for the others. */
  protected readonly codeMask = computed(() => '0'.repeat(this.brand()?.code ?? 3));
  protected readonly codeHint = computed(() => '•'.repeat(this.brand()?.code ?? 3));
  protected readonly errors = computed(() => [
    ...this.fields.card().errors(),
    ...this.fields.iban().errors(),
  ]);
}
