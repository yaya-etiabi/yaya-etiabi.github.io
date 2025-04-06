---
title: "FeMLoc: Federated Meta-Learning for Adaptive Wireless Indoor Localization Tasks in IoT Networks"
collection: publications
category: manuscripts
permalink: /publication/2024-01-01-FeMLoc-Federated-Meta-Learning
excerpt: 'This paper proposes FeMLoc, a federated meta-learning (MTL) framework for localization. It addresses the challenges of existing indoor localization solutions in dynamic and harsh conditions by using a two-stage approach: collaborative meta-training and rapid adaptation for new environments.'
date: 2024-01-01
venue: 'IEEE Internet of Things Journal'
doi: 10.1109/JIOT.2024.3440175
url: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85200803440&doi=10.1109%2fJIOT.2024.3440175&partnerID=40&md5=e9db662f27b3a06577978e2565c491e7'
citation: 'Y. Etiabi, W. Njima, and E. M. Amhoud, "FeMLoc: Federated Meta-Learning for Adaptive Wireless Indoor Localization Tasks in IoT Networks," IEEE Internet of Things Journal, vol. 11, no. 22, pp. 36991 – 37007, 2024.'
author_profile: true
---

## The Abstract

The proliferation of the Internet of Things fosters collaboration among connected devices for tasks like indoor localization. However, existing indoor localization solutions struggle with dynamic and harsh conditions, requiring extensive data collection and environment-specific calibration. These factors impede cooperation, scalability, and the utilization of prior research efforts. To address these challenges, we propose FeMLoc, a federated meta-learning (MTL) framework for localization. FeMLoc operates in two stages: 1) collaborative meta-training, where edge devices contribute diverse localization data to train a global meta-model using a combination of model-agnostic MTL and federated averaging techniques and 2) rapid adaptation for new environments, where the pretrained global meta-model initializes localization models, requiring only minimal fine-tuning with a small amount of new data. In this article, we provide a detailed technical overview of FeMLoc, highlighting its unique approach to privacy-preserving MTL in the context of indoor localization. Our performance evaluations on real-world data sets, including UJIIndoorLoc, demonstrate the superiority of FeMLoc over state-of-the-art methods, enabling swift adaptation to new indoor environments with reduced calibration effort. Specifically, FeMLoc achieves up to 80.95% improvement in localization accuracy compared to the conventional baseline neural network (NN) approach after only 100 gradient steps. Alternatively, for a target accuracy of around 5m, FeMLoc achieves the same level of accuracy up to 82.21% faster than the baseline NN approach. This translates to FeMLoc requiring fewer training iterations, thereby significantly reducing fingerprint data collection and calibration efforts. Moreover, FeMLoc exhibits enhanced scalability, making it well-suited for location-aware massive connectivity driven by emerging wireless communication technologies.

### Keywords

Federated learning (FL); federated meta-learning; indoor positioning; meta-learning (MTL); multienvironment learning; radio signal strength indicator (RSSI) fingerprinting