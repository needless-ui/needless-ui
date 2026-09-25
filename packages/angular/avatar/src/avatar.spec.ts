import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NuiAvatar, NuiAvatarGroup, nuiInitials, nuiNameHue } from './avatar';

@Component({
  imports: [NuiAvatar, NuiAvatarGroup],
  template: `
    <div nuiAvatarGroup>
      <span nuiAvatar name="Ada Lovelace" [src]="src()" status="online"></span>
      <span nuiAvatar name="Grace Hopper" decorative></span>
    </div>
  `,
})
class Host {
  readonly src = signal<string | undefined>(undefined);
}

describe('nuiInitials', () => {
  it('takes the first letters of the first and last words, whole graphemes', () => {
    expect(nuiInitials('Ada Lovelace')).toBe('AL');
    expect(nuiInitials('  émile   zola ')).toBe('ÉZ');
    expect(nuiInitials('Grace Brewster Murray Hopper')).toBe('GH');
    expect(nuiInitials('Plato')).toBe('P');
    expect(nuiInitials('毛泽东')).toBe('毛');
    expect(nuiInitials('Jean-Luc Picard')).toBe('JP');
    expect(nuiInitials('(Ada) Lovelace 🚀')).toBe('AL');
  });
});

describe('nuiNameHue', () => {
  it('is stable and ignores case and outer spaces', () => {
    expect(nuiNameHue('Ada Lovelace')).toBe(nuiNameHue(' ada lovelace '));
    expect(nuiNameHue('Ada Lovelace')).toBeGreaterThanOrEqual(0);
    expect(nuiNameHue('Ada Lovelace')).toBeLessThan(360);
  });
});

describe('NuiAvatar', () => {
  it('names the person, shows initials on their color, and a status dot', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const [ada, grace] = Array.from<HTMLElement>(
      fixture.nativeElement.querySelectorAll('.nui-avatar'),
    );
    expect(ada.getAttribute('role')).toBe('img');
    expect(ada.getAttribute('aria-label')).toBe('Ada Lovelace');
    expect(ada.textContent?.trim()).toBe('AL');
    expect(ada.style.getPropertyValue('--_hue')).toBe(String(nuiNameHue('Ada Lovelace')));
    expect(ada.querySelector('.nui-avatar-status')?.getAttribute('data-status')).toBe('online');
    expect(grace.getAttribute('aria-hidden')).toBe('true');
    expect(grace.hasAttribute('role')).toBe(false);
  });

  it('falls back to initials when the picture fails, and tries again for a new picture', async () => {
    const fixture = TestBed.createComponent(Host);
    const ada = () => fixture.nativeElement.querySelector('.nui-avatar') as HTMLElement;
    fixture.componentInstance.src.set('data:image/png;base64,broken');
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 100));
    await fixture.whenStable();
    expect(ada().querySelector('img')).toBeNull();
    expect(ada().textContent?.trim()).toBe('AL');

    fixture.componentInstance.src.set('/new.png');
    await fixture.whenStable();
    expect(ada().querySelector('img')?.getAttribute('src')).toBe('/new.png');
  });
});
