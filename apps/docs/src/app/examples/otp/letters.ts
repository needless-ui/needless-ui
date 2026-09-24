import { Component } from '@angular/core';
import { NuiOtp, NuiOtpInput } from '@needless-ui/angular/otp';

@Component({
  selector: 'otp-letters-example',
  imports: [NuiOtp, NuiOtpInput],
  templateUrl: './letters.html',
})
export class OtpLettersExample {}
