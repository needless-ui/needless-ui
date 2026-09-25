import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { nuiFormatPhone, NuiPhoneField } from '@needless-ui/angular/phone-field';

@Component({
  selector: 'phone-field-countries-example',
  imports: [NuiPhoneField, ReactiveFormsModule],
  templateUrl: './countries.html',
  styleUrl: './phone.css',
})
export class PhoneFieldCountriesExample {
  protected readonly europe = ['AT', 'BE', 'CH', 'DE', 'ES', 'FR', 'GB', 'IE', 'IT', 'NL', 'PT'];
  protected readonly phone = new FormControl('+33612345678');
  private readonly value = toSignal(this.phone.valueChanges, { initialValue: this.phone.value });
  protected readonly formatted = computed(() => nuiFormatPhone(this.value() ?? ''));
}
