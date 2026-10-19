---
title: "FeMLoc — Federated Meta-Learning for Indoor Localization"
summary: "Collaborative meta-learning for faster adaptation of indoor localization models to new environments."
status: "Published"
period: "2024"
tags: ["Federated meta-learning", "Adaptation", "Localization"]
featured: true
sortOrder: 6
paperUrl: "https://doi.org/10.1109/JIOT.2024.3440175"
---

## Problem

Fingerprint-based localization models can lose accuracy when applied to buildings or environments that differ from their training data. Recalibrating a separate model for each environment requires additional measurements and model training.

## Method

**FeMLoc** combines model-agnostic meta-learning with federated training. Collaborative meta-training across multiple localization environments produces a model initialization that can be adapted to a new task using limited environment-specific data.

## Evaluation and findings

The method was evaluated using real-world indoor localization data, including **UJIIndoorLoc**. In the experiments reported in the paper, FeMLoc achieved **up to 80.95% improvement in localization accuracy** compared with a conventional neural-network baseline after 100 gradient steps. The evaluation also studied adaptation speed and scalability.

## Publication

*FeMLoc: Federated Meta-Learning for Adaptive Wireless Indoor Localization Tasks in IoT Networks*, **IEEE Internet of Things Journal**, 11(22), 36991–37007, 2024.
