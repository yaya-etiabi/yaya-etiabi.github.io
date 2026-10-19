---
title: "Communication-Efficient Federated Distillation for Localization"
summary: "A federated-distillation approach to regression tasks, studied through collaborative indoor localization."
status: "Published"
period: "2024"
tags: ["Knowledge distillation", "Federated learning", "IoT"]
featured: false
sortOrder: 7
paperUrl: "https://doi.org/10.1109/JSEN.2024.3357798"
---

## Problem

Conventional federated learning exchanges model updates that can be costly for bandwidth-limited or energy-constrained wireless nodes. Many early federated-distillation schemes focused on classification rather than continuous localization targets.

## Approach

This research extended federated distillation to **regression** and evaluated the approach in a collaborative indoor-localization setting, with particular attention to exchanged information and computational tradeoffs.

## Contribution

The study formulated a regression-oriented federated-distillation approach and compared its learning behavior and communication overhead with federated-learning alternatives.

## Evaluation and findings

Under the published experimental conditions, the approach reduced the **number of transmitted bits by up to 98%** compared with the federated-learning reference, while investigating the associated localization-accuracy and energy tradeoffs. The communication gain is tied to the evaluation setting and should not be interpreted as a guaranteed reduction across all devices or tasks.

## Research output

*Federated Distillation Based Indoor Localization for IoT Networks*, *IEEE Sensors Journal*, 24(7), 11678–11692 (2024). The linked DOI points to the journal article, not to an unrelated preprint or venue.
