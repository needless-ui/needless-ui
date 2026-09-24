# Security policy

## Supported versions

Needless UI is in early development. Security fixes land in the latest `0.x` release only.

## Reporting a vulnerability

Please don't open a public issue. Report it privately through [GitHub security advisories](https://github.com/needless-ui/needless-ui/security/advisories/new). You'll get an acknowledgement within a few days and updates as the fix progresses; once a fix is released, the advisory is published with credit to you unless you prefer otherwise.

## How releases are protected

- Packages are published only from GitHub Actions with npm trusted publishing (OIDC), so no long-lived npm tokens exist.
- Every release carries an npm provenance attestation that links the tarball to the commit and workflow that built it.
- Runtime dependencies are kept to Angular peers plus our own packages.
