---
dr_id: DR-0022
title: "Symbol illustration: minimal flat SVG with stylised single-path leaves"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: none
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 3 (Q1, Q4). User accepted all recommended answers.
revisit_if: The flat style proves too plain once rendered, or the leaf morph needs a more detailed silhouette for legibility.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0022` — Symbol illustration: minimal flat SVG with stylised single-path leaves

## Context and problem statement

The redesign introduces two new illustrated symbols — the calebasse and the tree (branch + leaves) — that do not exist in the current codebase. The illustration style determines both their look and, critically, how they animate: the branch must "grow" (draw on), the leaves must change colour and shape, and the calebasse must open on a hinge.

## Decision drivers

- The symbols must be animatable: branch drawing, leaf fill transitions, and path morphing
- Payload must stay small for the Lighthouse FCP target (`CFR-PERF-01`)
- The symbols must render crisply at every viewport size from 320px to 2560px
- The style must sit naturally with the existing flat, token-driven design system

## Options considered

| Option                                     | Summary                                                           | Why not chosen                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Raster illustration (PNG/WebP)             | Pre-drawn gourd and tree images                                    | Cannot draw-on or morph paths; large payload; blurs on high-DPI               |
| Botanical/realistic SVG                    | Detailed veined leaves, textured gourd                            | Serrated/veined paths morph unreliably; reads as illustration, not UI         |
| **Minimal flat SVG, single-path leaves**   | Simple outlined/flat shapes in the symbol palette; one smooth path per leaf | **Chosen**                                                                     |

## Decision outcome

The calebasse and tree are drawn as minimal flat SVG:

- **Calebasse:** a simple gourd silhouette (body in `--color-calebasse`, rim/detail lines in `--color-text`), split into two halves so it can open on a hinge.
- **Branch/trunk:** a single stroke path (in `--color-text`) so it can draw on via `stroke-dashoffset`.
- **Leaves:** stylised, simple silhouettes — one smooth path per leaf (fill `--color-leaf-green`) — so the refactor shape-change is a clean path-to-path morph.

## Consequences

- **Positive:** Fully animatable (draw-on, fill transition, morph), tiny payload, crisp at any size, visually consistent with the flat token system.
- **Negative:** Minimal SVG requires care to look intentional rather than unfinished; the gourd and leaves are abstractions, not illustrations.
- **Accepted risk:** A stylised leaf may read less "botanical" than a detailed one. Accepted because morph reliability and animation capability outweigh botanical realism.

## Evidence

| Source                                         | What it establishes                                                               |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| design-visuals interview, Round 3 (2026-11-12) | User accepted minimal flat SVG and stylised single-path leaf silhouettes.         |
