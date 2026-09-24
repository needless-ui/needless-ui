import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuiOtp, NuiOtpInput } from '@needless-ui/angular/otp';

@Component({
  selector: 'otp-verify-example',
  imports: [NuiOtp, NuiOtpInput, FormsModule],
  templateUrl: './verify.html',
})
export class OtpVerifyExample {
  protected readonly code = signal('');
  protected readonly wrong = signal(false);
  protected readonly verified = signal(false);

  protected verify(code: string): void {
    const ok = code === '123456';
    this.verified.set(ok);
    this.wrong.set(!ok);
    // Let the shake finish, then clear the code for another try.
    if (!ok) setTimeout(() => (this.code.set(''), this.wrong.set(false)), 600);
  }
}
