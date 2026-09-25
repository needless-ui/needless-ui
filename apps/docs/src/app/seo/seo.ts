import { DOCUMENT, inject, Service } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { I18n } from '../i18n/i18n';
import { DEFAULT_LOCALE, LOCALE_INFO, LOCALES, localizePath, type Locale } from '../i18n/locales';
import { OG_IMAGE, REPO_URL, SITE_URL } from '../site';

export interface PageSeo {
  /** Page title without the site name. */
  title: string;
  /** Use `title` as the whole document title (the home page). */
  fullTitle?: boolean;
  /** 50–160 characters; the build fails outside that range. */
  description: string;
  /** Locale-agnostic path of the page, e.g. `/components/button/api`. */
  path: string;
  /** Trail after the home page, with locale-agnostic paths. */
  breadcrumbs?: { name: string; path: string }[];
  /** `website` for the home page, `article` for documentation, `page` for anything else. */
  type?: 'website' | 'article' | 'page';
  /** Keeps the page out of search results (the 404 page). */
  noindex?: boolean;
}

const MANAGED = 'data-seo';

/** Absolute URL of a path: the root keeps its slash, other paths have none. */
export function absoluteUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/**
 * Writes everything search engines and link previews read: title, description,
 * canonical and hreflang links, Open Graph and Twitter tags, `<html lang>` and
 * JSON-LD. Pages call `set()`; prerendering captures the result in static HTML.
 */
@Service()
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(I18n);

  set(page: PageSeo): void {
    const locale = this.i18n.locale();
    const site = this.i18n.t().site;
    const url = absoluteUrl(localizePath(page.path, locale));
    const title = page.fullTitle ? page.title : `${page.title} · ${site.name}`;

    const info = LOCALE_INFO[locale];
    this.document.documentElement.lang = info.tag;
    this.document.documentElement.dir = info.dir;
    this.title.setTitle(title);

    this.setMeta('name', 'description', page.description);
    this.setMeta('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow');
    this.setMeta(
      'property',
      'og:type',
      page.type === 'page' ? 'website' : (page.type ?? 'article'),
    );
    this.setMeta('property', 'og:site_name', site.name);
    this.setMeta('property', 'og:title', title);
    this.setMeta('property', 'og:description', page.description);
    this.setMeta('property', 'og:url', url);
    this.setMeta('property', 'og:image', OG_IMAGE);
    this.setMeta('property', 'og:image:width', '1200');
    this.setMeta('property', 'og:image:height', '630');
    this.setMeta('property', 'og:image:alt', `${site.name}: ${site.tagline}`);
    this.setMeta('property', 'og:locale', info.ogLocale);
    // X reads the title, description and image from Open Graph. No
    // `og:locale:alternate` either: Facebook asks for those with `?fb_locale=`,
    // which a static page can't answer; hreflang links name the other languages.
    this.setMeta('name', 'twitter:card', 'summary_large_image');

    this.replaceManaged(
      page.noindex
        ? []
        : [
            this.link({ rel: 'canonical', href: url }),
            ...LOCALES.map((l) =>
              this.link({
                rel: 'alternate',
                hreflang: LOCALE_INFO[l].tag,
                href: absoluteUrl(localizePath(page.path, l)),
              }),
            ),
            this.link({
              rel: 'alternate',
              hreflang: 'x-default',
              href: absoluteUrl(localizePath(page.path, DEFAULT_LOCALE)),
            }),
            this.jsonLd(this.graph(page, locale, title, url)),
          ],
    );
  }

  private setMeta(key: 'name' | 'property', name: string, content: string): void {
    this.meta.updateTag({ [key]: name, content }, `${key}="${name}"`);
  }

  private link(attributes: Record<string, string>): HTMLLinkElement {
    const link = this.document.createElement('link');
    for (const [name, value] of Object.entries(attributes)) link.setAttribute(name, value);
    return link;
  }

  private jsonLd(data: object): HTMLScriptElement {
    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    // Escape "<" so the JSON can never close the script element.
    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
    return script;
  }

  private replaceManaged(elements: Element[]): void {
    const head = this.document.head;
    head.querySelectorAll(`[${MANAGED}]`).forEach((element) => element.remove());
    for (const element of elements) {
      element.setAttribute(MANAGED, '');
      head.appendChild(element);
    }
  }

  private graph(page: PageSeo, locale: Locale, title: string, url: string): object {
    const site = this.i18n.t().site;
    const home = absoluteUrl(localizePath('/', locale));
    // The home page describes the site; other pages only name it, for `isPartOf`,
    // which keeps a few hundred bytes out of every page's first round trip.
    const website = {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: home,
      name: site.name,
      ...(page.type === 'website'
        ? { alternateName: site.tagline, description: site.description }
        : {}),
      inLanguage: LOCALE_INFO[locale].tag,
    };
    const crumbs = page.breadcrumbs ?? [];
    const nodes: object[] = [
      website,
      {
        '@type': page.type === 'website' || page.type === 'page' ? 'WebPage' : 'TechArticle',
        '@id': `${url}#page`,
        url,
        name: title,
        headline: page.title,
        description: page.description,
        inLanguage: LOCALE_INFO[locale].tag,
        isPartOf: { '@id': website['@id'] },
        ...(crumbs.length ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
      },
    ];
    if (crumbs.length) {
      nodes.push({
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [{ name: site.name, path: '/' }, ...crumbs].map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(localizePath(crumb.path, locale)),
        })),
      });
    }
    if (page.type === 'website') {
      nodes.push({
        '@type': 'SoftwareSourceCode',
        name: site.name,
        description: site.description,
        codeRepository: REPO_URL,
        programmingLanguage: ['TypeScript', 'CSS'],
        runtimePlatform: 'Angular',
        license: 'https://opensource.org/licenses/MIT',
      });
    }
    return { '@context': 'https://schema.org', '@graph': nodes };
  }
}
