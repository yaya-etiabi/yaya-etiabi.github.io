# Information architecture and editorial design

## Audience

- **Researchers:** questions, methods, contributions, publications and reproducibility links.
- **R&D teams / industry:** implementation choices, comparisons, datasets, software artifacts.
- **Collaborators / students:** current directions, background, mentoring and contact.

## Primary navigation

| Route | Purpose | Required content |
| --- | --- | --- |
| `/` | Concise entry point | Identity, research focus, featured work, selected papers, actions |
| `/research/` | Research agenda | Three connected directions and associated outputs |
| `/projects/` | Technical evidence | Selected research case studies with status clearly labeled |
| `/publications/` | Bibliography | Verified, chronological, structured publication records |
| `/about/` | Professional biography | Education, research appointments, teaching and service |
| `/cv/` | Professional document | Up-to-date downloadable/HTML academic CV (real data only) |
| `/contact/` | Reach out | Accurate email or profile links; no server form |

Subordinate areas (not main navigation): `/about/teaching/`, `/about/service/`, `/about/talks/`; archived technical notes may be introduced later.

## Research directions

1. **Collaborative & Privacy-Preserving ML**  
   Federated learning, federated meta-learning, distillation and communication-efficient adaptation.
2. **Wireless Sensing & Localization**  
   Radio measurements, positioning, joint channel-parameter estimation and radio SLAM.
3. **Edge Intelligence & ISCC**  
   On-device/edge learning, split inference, sensing–communication–computation co-design.

Explain problem setting and scientific approach. Avoid presenting these as rigid silos: cross-link projects and publications.

## Candidate case studies (editorial status pending)

- **FeMLoc:** published, federated meta-learning, adaptation across indoor environments.
- **Federated distillation for localization:** published, regression and reduced transmissions.
- **Factorized Transformer for MPC estimation:** research manuscript, publication status to verify.
- **Radio-SLAM / NIR-SLAM:** ongoing research; include only cleared results and details.
- **Wireless ML Data Hub:** public software/data-catalog project. https://github.com/Yaya195/wireless-ml-datasets
- **Neuromorphic ISCC / split inference:** exploratory; do not claim peer-reviewed publication.

## Project page schema

Frontmatter proposal:

```yaml
title: "Research project name"
slug: "project-slug"
status: "published"  # published | preprint | ongoing | exploratory | open-source
period: "2024–2025"
research_areas: ["wireless-localization", "federated-learning"]
publication_ids: ["paper-key"]
summary: "One factual sentence."
featured: false
code_url: null
paper_url: null
dataset_url: null
hero_image: null
```

Sections: **Problem → Approach → Original Contribution → Evaluation → Main Findings → Publications & Resources**. The "My contribution" portion should disambiguate co-authored work; do not suggest sole authorship.

## Publication metadata

```yaml
title: "Exact title in version of record"
authors: ["Full Name", "Full Name"]
year: 2024
type: "journal"  # journal | conference | preprint | thesis
venue: "Exact journal or conference"
doi: "10.xxxx/..."
status: "published"  # published | preprint
projects: ["project-slug"]
featured: false
pdf_url: null
code_url: null
legacy_permalink: "/publication/historical-slug"
```

Static schema validation should require accurate DOI formats for published records and block nonexistent internal links.

## Homepage hierarchy

1. Clear research identity and action links.
2. Three short research pillars.
3. Two to four featured technical works with links to evidence.
4. Selected publications (with DOI).
5. Academic experience, teaching and service in a compact section.
6. Direct collaboration/contact links.

## Editorial rules

- English first; terminology aligned with the existing academic CV.
- Prefer objective verbs: designed, implemented, evaluated, investigated, demonstrated.
- Avoid "pioneering", "revolutionary", unsupported state-of-the-art or performance claims.
- Date and label ongoing work honestly.
- No empty categories, automated GitHub counters or decorative academic badges.
- Provide relevant alt text and properly caption figures.
