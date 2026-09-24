import { Component } from '@angular/core';
import { NuiAvatar } from '@needless-ui/angular/avatar';
import { NuiHovercard, NuiHovercardTrigger } from '@needless-ui/angular/popover';

@Component({
  selector: 'popover-profile-example',
  imports: [NuiAvatar, NuiHovercard, NuiHovercardTrigger],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class PopoverProfileExample {}
