import { Component } from '@angular/core';
import { NuiAvatar } from '@needless-ui/angular/avatar';

@Component({
  selector: 'avatar-people-example',
  imports: [NuiAvatar],
  templateUrl: './people.html',
})
export class AvatarPeopleExample {
  // A picture that needs no network request: a gradient portrait drawn in SVG.
  protected readonly photo =
    'data:image/svg+xml,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#f7a17d"/><stop offset="1" stop-color="#214f3e"/></linearGradient></defs><rect width="40" height="40" fill="url(#g)"/><circle cx="20" cy="16" r="7" fill="#fefcf8"/><path d="M6 40c2-9 8-13 14-13s12 4 14 13z" fill="#fefcf8"/></svg>`,
    );
}
