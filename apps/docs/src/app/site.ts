/** Canonical origin. Pages are served from www; the apex redirects there. */
export const SITE_URL = 'https://www.needlessui.com';
export const REPO_URL = 'https://github.com/needless-ui/needless-ui';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Who runs the site, as the legal notice and the privacy policy name them. */
export const OPERATOR = {
  name: 'Angelo Lamonaca',
  url: 'https://www.angelolamonaca.com',
  street: 'Am Rainbach 22',
  postcode: '6340',
  city: 'Baar',
  email: 'angelo.lamonaca@pm.me',
  chId: 'CH-170-1012138-5',
  uid: 'CHE-491.417.985',
} as const;
