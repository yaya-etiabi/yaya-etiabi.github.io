# Research Website V2 — Astro

This is the new static research website for Yaya Etiabi, developed **alongside** the existing Jekyll production site.

**Status:** implementation branch / review. The official website is still published from `yaya-etiabi/yaya-etiabi.github.io` and has not been replaced.

## Requirements

Node.js 22 or newer and npm.

## Local development

```sh
cd site-v2
npm install
npm run dev
```

## Static production build

```sh
SITE_URL=https://yaya-etiabi.github.io BASE_PATH=/ npm run build
npm run test:links
```

GitHub Pages only receives files from `dist/`, not a running Node server.

### Fork subpath preview

A fork is a **project site**, not an organization-root site. To verify asset and navigation prefixes:

```sh
SITE_URL=https://Yaya195.github.io BASE_PATH=/yaya-etiabi.github.io/ npm run build
BASE_PATH=/yaya-etiabi.github.io/ npm run test:links
```

The fork preview is tagged `noindex,nofollow`; the official organization-root build is indexable.

## Content maintenance

- `src/content/projects/*.md` — technical case studies with validated status, tags and optional paper/code links
- `src/content/publications/*.md` — bibliographic data with DOI links and legacy slugs
- `src/content.config.ts` — schemas checked at build time
- `src/pages/` — page templates and static URL generation
- `src/styles/global.css` — accessible global design system
- `src/lib/site.ts` — shared profile links and base-path URL helper

Most content is plain Markdown plus YAML frontmatter. No backend database or runtime API is required.

## Deployment safety

The CI workflow at `../.github/workflows/site-v2-ci.yml` deliberately **does not deploy**. It checks two static builds. The production deployment workflow in the old Jekyll repository should be changed only after a reviewed pull request and release decision.

## Current limitations

- The first set of publication records is migrated from the existing site and needs a final full bibliographic audit.
- Research-in-progress pages intentionally have no invented code links or accepted-paper claims.
- The current CV page is a research-background summary until an approved up-to-date PDF is available.
- Portrait/figures and contact email will be added after selecting authoritative assets and details.
- A dependency lockfile still needs to be generated from a real npm install and committed prior to production release.

See `../docs/v2/` for the migration plan.

## Preview deployment note

A fork-only GitHub Pages preview workflow is included. GitHub Actions successfully generated its Pages artifact, but the first deployment was rejected with HTTP 404 because Pages has not yet been enabled on the fork. Enable GitHub Pages in fork repository Settings → Pages, select **GitHub Actions** as the source, then re-run the failed job. The canonical organization site is unaffected.
