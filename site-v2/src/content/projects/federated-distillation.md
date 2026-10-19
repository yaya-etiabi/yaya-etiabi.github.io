---
title: "Communication-Efficient Federated Distillation for Localization"
summary: "Federated distillation adapted to regression, evaluated through collaborative wireless indoor localization."
status: "Published"
period: "2024"
tags: ["Federated distillation", "Regression", "Localization"]
featured: false
sortOrder: 7
paperUrl: "https://doi.org/10.1109/JSEN.2024.3357798"
---

## Problem

Conventional federated learning typically exchanges model parameters or updates between participating devices and a coordinating server. In bandwidth-limited wireless networks, these exchanges can account for substantial communication overhead. Early federated-distillation methods were primarily developed for classification, whereas localization requires continuous position estimates.

## Method

This work develops a federated-distillation approach for **regression** and evaluates it on collaborative indoor localization. The method exchanges compact training information in place of conventional model updates, allowing comparison of localization performance and communication load with federated-learning baselines.

## Findings

In the experiments reported in the paper, the method reduced the **number of transmitted bits by up to 98%** relative to the federated-learning reference. The study also evaluates the associated localization-accuracy, scalability and energy tradeoffs.

## Publication

*Federated Distillation Based Indoor Localization for IoT Networks*, **IEEE Sensors Journal**, 24(7), 11678–11692, 2024.
