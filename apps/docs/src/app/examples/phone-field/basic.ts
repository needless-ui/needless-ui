import { Component, computed, signal } from '@angular/core';
import { NuiPhoneField, nuiPhoneValid } from '@needless-ui/angular/phone-field';

@Component({
  selector: 'phone-field-basic-example',
  imports: [NuiPhoneField],
  templateUrl: './basic.html',
  styleUrl: './phone.css',
})
export class PhoneFieldBasicExample {
  protected readonly phone = signal('');
  protected readonly country = signal('');
  protected readonly valid = computed(() => nuiPhoneValid(this.phone()));
}
