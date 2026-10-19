---
title: "FeMLoc — Federated Meta-Learning for Indoor Localization"
summary: "Collaborative meta-learning for faster adaptation of indoor localization models to new environments."
status: "Published research"
period: "2024"
tags: ["Federated learning", "Meta-learning", "Localization"]
featured: true
sortOrder: 1
paperUrl: "https://doi.org/10.1109/JIOT.2024.3440175"
---

## Problem

Fingerprint-based indoor localization methods tend to depend strongly on the environment where their training data was collected. Adapting a model to a new building or deployment may require substantial retraining and calibration.

## Approach

FeMLoc combines **federated learning** with **model-agnostic meta-learning**. Participating environments contribute to collaborative meta-training without requiring a single centrally pooled localization dataset. The learned initialization is then adapted to a new localization task using comparatively limited additional data.

## Contribution

The research developed and evaluated a federated meta-learning framework for adaptive wireless indoor localization, investigating the relationship between collaborative training and rapid environment-specific adaptation.

## Evaluation and findings

The study evaluated the method using real-world indoor localization data, including **UJIIndoorLoc**. In the reported experimental setting, FeMLoc achieved up to **80.95% improvement in localization accuracy** relative to a conventional neural-network baseline after 100 gradient steps. Reported gains depend on the task, dataset and evaluation setup; they are not universal performance guarantees.

## Research output

This work appeared in *IEEE Internet of Things Journal* (2024). See the DOI link for the version of record and the experimental details.
