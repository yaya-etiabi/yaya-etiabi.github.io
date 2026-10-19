# GitHub Pages compatibility and migration safety

## Exact hosting arrangement

**Canonical site:** https://yaya-etiabi.github.io/  
**Organization repository:** `yaya-etiabi/yaya-etiabi.github.io`  
**Development fork:** `Yaya195/yaya-etiabi.github.io`

The upstream repository is an **organization user-site** and serves its output at the domain root. The fork is **not** `Yaya195/Yaya195.github.io`, so if fork Pages is enabled, its normal preview URL is a **project site** with a subpath:

```text
https://Yaya195.github.io/yaya-etiabi.github.io/
```

This distinction matters to internal links and asset paths.

## Selected tech boundary

Astro in **static pre-rendered output mode**, compiled by GitHub Actions; GitHub Pages serves only built HTML, CSS, images and client-side JavaScript. No Node runtime, SSR, server adapters, private API secrets sent to browsers or runtime databases.

Official references:
- Astro deployment: https://docs.astro.build/en/guides/deploy/github/
- GitHub custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Configuration targets

Production should use:

```js
export default defineConfig({
  site: 'https://yaya-etiabi.github.io',
  output: 'static',
  // no base: this site is served at /
});
```

A fork-hosted preview, **if enabled**, should use:

```js
export default defineConfig({
  site: 'https://Yaya195.github.io',
  base: '/yaya-etiabi.github.io',
  output: 'static',
});
```

Use `import.meta.env.BASE_URL` or an equivalent base-aware URL helper for local navigation and static assets. Do not hard-code root-relative links that break the fork preview.

## CI/CD roll-out

1. Add `site-v2/` alongside legacy Jekyll sources on the development branch.
2. Introduce an Astro `package.json` **and a generated lockfile** (commit both).
3. Add a **build-only** pull-request workflow: setup Node, `npm ci`, `npm run build`, check output.
4. Validate routes and assets under both a production-root build and a fork project-path build.
5. Preserve `_pages` historical URLs through static redirects/mapping.
6. Only during approved cutover, replace the existing Jekyll deployment with the Astro Pages deployment. Avoid simultaneously deploying two workflows to the same Pages environment.
7. Merge upstream after content, SEO, license, and accessibility review.

## Release checks

- Complete static build; no server-only endpoints.
- All navigation and asset paths resolve with and without a base path.
- Historical publication URLs remain reachable.
- Robots, sitemap, canonical tags and metadata use the canonical organization domain.
- No personal secrets or unpublished material in `dist/`.
- Check keyboard navigation, images, responsive layout and performance.
- Fork staging pages, if published, use `noindex` and distinct canonical behavior.

**Do not change upstream `master`, GitHub Pages settings or the current production deployment as part of this foundation commit.**
