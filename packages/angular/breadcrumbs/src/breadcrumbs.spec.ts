import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NuiBreadcrumbs } from './breadcrumbs';

@Component({
  imports: [NuiBreadcrumbs],
  template: `
    <div style="inline-size: 120px">
      <nav nuiBreadcrumbs>
        <!-- The component CSS isn't loaded in unit tests: overflow like it does. -->
        <ol style="display: flex; overflow-x: auto; white-space: nowrap">
          <li><a href="#a">Home</a></li>
          <li><a href="#b">A rather long section name</a></li>
          <li><span aria-current="page">The current page</span></li>
        </ol>
      </nav>
    </div>
  `,
})
class Host {}

describe('NuiBreadcrumbs', () => {
  it('is a named landmark that starts scrolled to the current page', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const nav: HTMLElement = fixture.nativeElement.querySelector('nav');
    const list = nav.querySelector('ol')!;
    expect(nav.getAttribute('aria-label')).toBe('Breadcrumb');
    expect(nav.classList).toContain('nui-breadcrumbs');
    expect(list.scrollLeft).toBeGreaterThan(0);
  });
});
