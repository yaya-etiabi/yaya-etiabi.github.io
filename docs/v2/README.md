# Research Website V2 — Working Brief

**Repository:** `Yaya195/yaya-etiabi.github.io` (development fork)  
**Canonical publication:** https://yaya-etiabi.github.io/  
**Upstream:** https://github.com/yaya-etiabi/yaya-etiabi.github.io  
**Status:** P0/P1 foundation, **not deployed**.

## Goal

Build a serious, maintainable personal research website that demonstrates **research problems, original contributions, experimental evidence and technical implementations**, not merely attendance at events. The site should serve researchers, R&D hiring managers and collaborators while remaining useful for teaching and outreach.

## Scientific identity

**Yaya Etiabi, PhD — Machine Learning Researcher**  
*Wireless Systems · Edge Intelligence · Sensing & Localization*

Proposed short description (editorial draft, not approved bio):

> I develop machine learning methods for intelligent wireless systems, focusing on efficient learning, sensing and localization in distributed and resource-constrained environments.

Avoid generic claims of AI expertise detached from actual work. Do not call research in progress "published", "accepted", or "open source" unless verified.

## Principles

1. Evidence before promotion: show a method, evaluation, diagram, open resource or precise result.
2. Accuracy before completeness: bibliographic fields and project statuses must be verified.
3. Scholarly and technical tone: precise language, no exaggerated impact claims.
4. Preservation: keep working historical publication URLs through a mapping and redirects.
5. Accessibility and performance: content should work without JavaScript.
6. Static hosting: a GitHub Pages deployable `dist/`, with no backend or server-side rendering.
7. Small maintenance surface: structured Markdown or MDX, reusable components and documented content schemas.

## Deliverables

- [Content and repository audit](CONTENT_AUDIT.md)
- [Information architecture](INFORMATION_ARCHITECTURE.md)
- [Pages deployment strategy](GITHUB_PAGES_DEPLOYMENT.md)
- [Execution backlog and quality gates](BACKLOG.md)
- [Publication register](publications-audit.csv)

## Milestone decisions

- Preserve the current production site while building V2 in the fork.
- English first; French localization is a possible later phase.
- Sections: Home, Research, Projects, Publications, About, CV and Contact.
- Talks, teaching, mentoring and service are secondary pages under About.
- No "Updates" page until there is substantive and maintainable content.
- Blog remains archived; a future technical-notes section should have its own editorial standard.

## Safe migration sequence

`Inventory → validate content → prototype → Astro static build → CI checks → link/SEO/redirect tests → PR review → production deployment`

**Do not merge or switch GitHub Pages publication sources merely to preview a design.**
