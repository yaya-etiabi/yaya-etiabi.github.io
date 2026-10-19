# Production release plan: research website V2

**Release status: NOT AUTHORIZED.** This document prepares the migration only.
The canonical `yaya-etiabi/yaya-etiabi.github.io` `master` branch remains unchanged until explicit approval.

## Repositories and rollback point

- **Official site:** `yaya-etiabi/yaya-etiabi.github.io`, deployed from `master`.
- **Development fork:** `Yaya195/yaya-etiabi.github.io`, branch `refactor/research-website-v2`.
- **Current official production baseline (verified 2026-10-19):**
  `2c4f8c02d0e6b32351c790c61d28db069dc47496`.
- **Hosting:** GitHub Pages Actions. The old `.github/workflows/jekyll.yml` builds Jekyll on pushes to `master`.
- **Cutover:** the same workflow filename is replaced by Astro build, tests and deploy. It is guarded to run only on upstream `master`; the old Jekyll workflow is no longer present after merging.
- **Lockfile:** `site-v2/package-lock.json` committed; `npm ci` is used for production and CI.

## Pre-approval verification (no production changes)

1. Ensure the fork branch is green: root build, preview build, link, anchor, SEO, and responsive browser checks.
2. Confirm all 11 supplied references and 8 research projects, including LocLLM and Radio-SLAM's review status.
3. Verify URLs for LinkedIn, GitHub, Scholar and ORCID.
4. Verify all intended production paths and aliases with the generated root `dist/`.
5. Check the historical content decisions below; do not silently migrate or invent blog text.
6. Confirm `master` has not changed since the recorded baseline. If it has, rebase/review first.
7. Inspect the release pull request. **Do not merge without explicit owner approval.**

## Known legacy URL coverage

- Legacy `/publication/<slug>/`, `/talks/<slug>/`, and `/portfolio/<slug>/` URLs are represented by static redirect pages.
- `/about.html` and `/contact.html` are preserved as HTML redirect pages.
- `/cv/`, `/resume/`, `/portfolio/`, `/teaching/`, and `/sitemap/` have defined routes or redirects.
- The former **seven `/posts/<slug>/` blog entries are not included in V2**, because there is no approval to migrate them. Their links will return 404 unless addressed separately. This is a launch decision, not an unnoticed omission.
- Other low-value legacy pages (including dummy teaching entries and deprecated non-menu routes) are intentionally not migrated; check whether externally used links need exceptions.

## Draft pull request (upstream organization authorization required)

The prepared branch is ahead of official `master` with no divergence. GitHub comparison:

https://github.com/yaya-etiabi/yaya-etiabi.github.io/compare/master...Yaya195:refactor/research-website-v2

Open **Create pull request**, mark it **Draft**, and keep it unmerged until content and deployment approval. Alternatively, grant the GitHub connection permission to create pull requests in the organization and retry. Merely opening this draft does not deploy the V2.

## Release action (requires explicit approval)

1. Open a **draft PR** in the GitHub web UI from `Yaya195:refactor/research-website-v2` into official `master` using the compare link below. The connected GitHub integration could not create the organization PR (403), so **no upstream PR has been opened yet**.
2. Check that GitHub Pages is configured to use **GitHub Actions**. Do not change the Pages source based on guesswork.
3. Recheck `master`, CI runs and PR file changes.
4. Merge the approved PR. Its merge will trigger the **single Astro** Pages deployment to the same canonical URL.
5. Track the workflow and GitHub Pages completion; do not conclude success from a green build alone.
6. Verify live root, research, publications, all project routes, About, Teaching, Talks, contact, images, canonical, indexability, sitemap and representative historical redirects. Confirm `/sitemap.xml` and `/robots.txt` on the official domain.
7. Only after release, perform Search Console indexing checks, sitemap submission and crawl monitoring.

## Rollback

1. Record the actual production merge SHA; preserve the original Jekyll commit above.
2. Prefer **reverting the release merge commit** in upstream `master` via a normal new commit. This restores the old `.github/workflows/jekyll.yml`, triggering its original Jekyll Pages build. Avoid force-pushing or deleting repository history.
3. If the merge cannot be safely reverted in one commit, restore the old Jekyll workflow and source from `2c4f8c02d0e6b32351c790c61d28db069dc47496` in a new audited commit.
4. Confirm the rollback GitHub Pages deployment reaches `success` and the old homepage is actually served.
5. Keep the V2 branch, reports and PR for investigation; do not modify DNS or canonical URLs during rollback.

## Scope boundaries

- The staging fork preview is not indexed.
- No site copy or research claims are modified solely for SEO or GEO.
- Nothing in this runbook itself changes the official GitHub Pages configuration.
