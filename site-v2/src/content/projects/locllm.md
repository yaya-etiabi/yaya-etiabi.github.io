---
title: "LocLLM: Radio-Inertial Localization with Language Models"
summary: "Investigating language-model-based fusion of radio and inertial observations for indoor localization and adaptation across buildings."
status: "Research in Progress"
period: "2026"
tags: ["Radio-inertial localization", "Language models", "Cross-building adaptation"]
featured: false
sortOrder: 4
---

## Research problem

Indoor localization from wireless measurements is sensitive to changes in buildings, radio environments and motion patterns. Radio observations provide location-dependent information, while inertial measurements describe motion between observations. Combining these sources and adapting across environments remain challenging.

## Research approach

**LocLLM** investigates how a language-model backbone can be adapted to radio-inertial localization. The approach explores sensor-specific representations of wireless and inertial observations, embeddings compatible with the model, and prediction heads for indoor position and floor estimation.

The work also examines parameter-efficient adaptation, including **LoRA**, for transfer across buildings, together with motion-consistency objectives for sequential localization. These are research directions being evaluated, not established performance claims.

## Experimental investigation

The study uses the **Microsoft Indoor Localization** dataset to investigate localization error, floor estimation, generalization across environments and consistency along trajectories. Experimental development includes data preparation, model adaptation and comparisons with localization baselines.

## Status

**Research in progress.** The project is being developed and evaluated; finalized experimental results are not yet reported here.
