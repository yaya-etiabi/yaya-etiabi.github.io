# Yaya Etiabi — Research Website

Source for the personal research website at **https://yaya-etiabi.github.io/**, published from the GitHub organization repository [yaya-etiabi/yaya-etiabi.github.io](https://github.com/yaya-etiabi/yaya-etiabi.github.io).

> **Development status:** The public website is currently powered by **Jekyll / AcademicPages**. A research-oriented V2 is being planned and developed on a separate fork branch. This README documents the real repository, not the generic AcademicPages starter.

## Existing site (Jekyll)

The current production source lives in the root of this repository:

- `_pages/`: site pages and navigation destinations
- `_publications/`: research publication entries
- `_portfolio/`: events, scientific service and other activities
- `_talks/`: selected talks
- `_posts/`: blog posts
- `_data/`: structured site data
- `images/` and `files/`: media and downloads
- `_config.yml`: Jekyll configuration
- `.github/workflows/jekyll.yml`: existing GitHub Pages workflow

### Run the existing site locally

Requires Ruby, Bundler and a compatible Jekyll toolchain:

```bash
bundle install
bundle exec jekyll serve
```

The current production deployment must remain unchanged until V2 has been built and reviewed.

## V2 refactor

The new site will prioritize research questions, technical projects, verified publications, teaching and scientific service. Its target architecture is **Astro in static output mode**: GitHub Actions compiles HTML/CSS/JS, and GitHub Pages serves the generated files. No server-side runtime is planned.

See [V2 project documentation](docs/v2/README.md) for the scope, verified audit, content architecture, migration strategy and backlog.

### Branch strategy

- **Upstream production:** `yaya-etiabi/yaya-etiabi.github.io` → `master`
- **Development fork:** `Yaya195/yaya-etiabi.github.io`
- **V2 branch:** `refactor/research-website-v2`

Development should happen on the fork. Submit a PR upstream only after a review of content accuracy, URLs, build output, accessibility and GitHub Pages deployment.

## Credits and licenses

The currently deployed version uses [AcademicPages](https://github.com/academicpages/academicpages.github.io) / Minimal Mistakes and their respective licenses. Keep applicable attributions while migrating. Site text, original figures and research materials retain their respective authors' rights. Do not assume a general repository license automatically authorizes redistribution of publisher PDFs.
