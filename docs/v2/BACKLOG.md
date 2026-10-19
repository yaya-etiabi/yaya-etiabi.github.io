# V2 execution backlog

This is a technical checklist, not a claim that unimplemented tasks are complete.

## P0 — Preservation and audit

- [x] Confirm canonical organization repository and personal fork.
- [x] Create a development branch separate from `master`.
- [x] Inventory principal collections and template remnants.
- [x] Identify the material incorrect DOI record.
- [x] Replace the generic project README with accurate status and links.
- [ ] Produce machine-readable URL migration inventory (all public routes).
- [ ] Review publication metadata against primary records.
- [ ] Identify which images, PDFs and scripts can be legally/technically retained.

## P1 — Editorial architecture

- [x] Define research identity and target audiences.
- [x] Define target navigation and research pillars.
- [x] Propose project and publication content schemas.
- [ ] Approve final homepage copy, contact details and CV source.
- [ ] Confirm project shortlist and which work can be made public.
- [ ] Select featured publication list.

## P2 — Design prototype

- [ ] Produce responsive layouts (home, research, project, publication, about).
- [ ] Select type scale, grid, accessible color palette and figure treatment.
- [ ] Review mobile/desktop readability with real content.

## P3 — Implementation

- [ ] Initialize `site-v2/` with Astro static output and lockfile.
- [ ] Add layouts, navigation, metadata and components.
- [ ] Implement content validation and generated pages.
- [ ] Create CI workflow that **builds but never deploys** on draft branches.
- [ ] Check root-vs-subpath builds for organization and fork.

## P4 — Editorial migration

- [ ] Populate verified publication records.
- [ ] Publish selected research case studies with diagrams/results.
- [ ] Rewrite homepage and research agenda.
- [ ] Integrate accurate CV, teaching, mentoring, talks and service.
- [ ] Redirect old URLs and archive previous content when appropriate.

## P5 — Quality / release

- [ ] Bibliographic verification and broken-link check.
- [ ] Mobile, keyboard, accessibility and performance audit.
- [ ] Confirm no confidential, template or example content in output.
- [ ] Enable Pages deploy **only on official release/cutover**.
- [ ] PR review and deliberate merge into upstream organization repository.
- [ ] Check the live canonical site after deployment.
