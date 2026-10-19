---
title: "Factorized Transformer for Multipath Estimation"
summary: "Joint estimation of multipath delay, angle of arrival and angle of departure from MIMO-OFDM observations."
status: "Ongoing research"
period: "2026"
tags: ["Transformers", "MIMO-OFDM", "Channel estimation"]
featured: true
sortOrder: 3
---

## Problem

Radio positioning and mapping algorithms rely on geometric information extracted from multipath propagation. Jointly identifying multiple propagation components and estimating their parameters is challenging in dense wireless channels.

## Approach

The investigated architecture processes angle-delay representations derived from MIMO-OFDM observations. A factorized feature extractor and a query-based Transformer decoder are used to estimate a set of propagation paths and their **delay, AoA and AoD** parameters.

## Research contribution

The study investigates a factorized detection-and-estimation pipeline and downstream use of inferred multipath parameters in positioning and radio mapping.

## Evaluation

Experimental work uses ray-tracing-based channel data and comparisons covering detection performance, parameter estimation, set consistency and computational cost. Positioning and Radio-SLAM demonstrations examine whether estimated path parameters are useful as geometric observations.

## Publication status

This is presented as **ongoing research**. A journal or preprint citation will be linked only when the relevant manuscript becomes publicly available.
