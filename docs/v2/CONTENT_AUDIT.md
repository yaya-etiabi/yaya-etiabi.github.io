# Baseline audit — legacy Jekyll site

Snapshot analyzed: the upstream `master` state at commit `2c4f8c02d0e6b32351c790c61d28db069dc47496` (27 April 2025).

## Repository structure

The public Jekyll repository contains:

| Area | Count / observation | Migration action |
| --- | --- | --- |
| `_publications/` | 8 entries | Verify and normalize metadata, preserve permalinks |
| `_portfolio/` | 11 entries, mostly events and service | Classify and move to appropriate secondary pages |
| `_talks/` | 4 entries | Integrate into academic activities |
| `_posts/` | 7 articles | Preserve/archive, review tone and relevance |
| `_teaching/` | 2 example-looking older entries | Verify against real teaching record, remove placeholder content |
| `_data/cv.json` | Template names, universities and fictitious papers | Remove from public V2 data; reconstruct CV from verified evidence |
| `_pages/updates.html` | Empty updates promise | Remove from main navigation |
| `_config.yml` | Old location/affiliation and profile | Update identity and all public contacts |
| `README.md` | Single placeholder sentence | Replaced on this development branch |
| `images/` | About 100 MiB in tracked images | Audit copyright/usage and resize relevant images |
| `files/` | Generic example papers and slides | Identify/remove template files from V2 |
| `.github/workflows/` | Jekyll deploy and old talk-map workflow | Keep existing deploy until cutover; replace with V2 CI at launch |

## Content / UX gaps

- The homepage emphasizes personal aspirations more than original methods and evidence.
- A "Portfolio" page largely documents attendance and service, not engineering or research work.
- GitHub is not exposed in the author sidebar.
- The CV is not clearly linked from navigation and the JSON-based CV includes template placeholders.
- Publications are based on full abstracts rather than clear research contribution summaries.
- "Updates" has no substantive content.
- AcademicPages cruft remains in example files, theme configuration and scripts.

## Bibliographic issue requiring explicit correction

The entry `_publications/2024-01-01-Federated-distillation-for-localization.md` has a mismatched title, author list and DOI. It currently records DOI `10.1016/j.eswa.2024.119793`, despite citing an *IEEE Sensors Journal* paper on pages 11678–11692.

The bibliographic candidate verified against Crossref-indexed and IEEE-related records is:

- **Title:** Federated Distillation Based Indoor Localization for IoT Networks
- **Journal:** IEEE Sensors Journal, 24(7), 11678–11692 (2024)
- **DOI:** `10.1109/JSEN.2024.3357798`
- **Author record:** Yaya Etiabi and El Mehdi Amhoud (verify formal version of record before migration)

Source: https://doi.org/10.1109/JSEN.2024.3357798

**Action:** verify author names and publication metadata from the publisher version of record before placing on the new site. This is a specific and material discrepancy, not a global automatic replacement.

## Do not migrate blindly

- Conference photos and talk records are potentially valuable archive material.
- Do not automatically expose unpublished manuscripts, private datasets or research code.
- Preserve original DOI and publisher links but do not copy copyrighted PDFs without publication rights.
- Old public slugs must be listed and mapped before any switch.

## Prioritized blockers

1. Confirm up-to-date affiliation, contact email and academic CV.
2. Validate every publication from authoritative metadata.
3. Select research case studies with diagrams and results that are safe to publish.
4. Map existing URLs to new destinations.
5. Run static-build and GitHub Pages tests before switching deploy workflows.
