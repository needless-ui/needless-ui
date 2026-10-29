import { LiveAnnouncer } from '@angular/cdk/a11y';
import { _CdkPrivateStyleLoader, _VisuallyHiddenLoader } from '@angular/cdk/private';
import { inject } from '@angular/core';

/**
 * The CDK's `LiveAnnouncer`, with the styles that hide what it says. The CDK's other
 * accessibility tools load them, but its announcer doesn't: in an app without Angular
 * Material (or the CDK's prebuilt CSS), every announcement would show as text at the
 * bottom of the page. Call it where `inject()` works, as a component's field does.
 */
export function nuiAnnouncer(): LiveAnnouncer {
  inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  return inject(LiveAnnouncer);
}
