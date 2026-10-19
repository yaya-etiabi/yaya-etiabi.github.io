# Astro implementation status

## Confirmed

- Full static Astro scaffold in site-v2/
- Eight bibliographic entries and six research-project records
- Pages: Home, Research, Projects, individual Projects, Publications, About, CV, Contact, 404
- Historic publication redirects at publication/<legacy-slug>/
- Responsive global CSS and base-aware URL helper
- Dedicated GitHub Actions CI run: https://github.com/Yaya195/yaya-etiabi.github.io/actions/runs/39185178218
- Root-site and fork-subpath static builds, including internal link tests, PASSED.
- Development branch in personal fork only: refactor/research-website-v2

## Under evaluation

- Fork preview publication workflow, independent of organization Pages
- Publisher bibliographic verification for all entries
- Final editorial copy and research figures
- Recent academic CV, approved public email and full academic activities record
- Lockfile and deployment release checklist

## Constraints

- The organization repository and its live GitHub Pages site remain untouched.
- A fork preview is deliberately marked noindex/nofollow.
- No server-side rendering, API server or database at runtime.
- A successful static build does not replace visual, accessibility or bibliographic validation.
