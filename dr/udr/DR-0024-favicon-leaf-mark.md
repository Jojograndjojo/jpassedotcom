---
dr_id: DR-0024
title: "Favicon: leaf mark replaces the JP monogram"
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
  - design-visuals interview, Round 3 (Q5). User accepted updating the favicon to a leaf mark.
revisit_if: The leaf mark is illegible at 16px, or a dedicated logo/monogram is designed later.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0024` — Favicon: leaf mark replaces the JP monogram

## Context and problem statement

The current favicon (`public/favicon.svg`) is a "JP" monogram on a dark rounded square. The redesign makes the tree/leaf the site's navigation symbol, so the favicon should reflect that identity rather than the previous initials.

## Decision drivers

- The tree/leaf is now the recurring brand motif (menu leaves, red-green-refactor cycle)
- A leaf silhouette reads cleanly at 16–32px; a gourd silhouette is less recognisable at favicon size
- The favicon should reuse the symbol palette for consistency

## Options considered

| Option                                  | Summary                                                  | Why not chosen                                                     |
| --------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| Keep the JP monogram                     | No change                                                | Doesn't reflect the new symbol identity                             |
| Calebasse mark                           | A small gourd silhouette                                  | Hard to read at 16px; gourd reads as a blob at favicon size         |
| **Leaf mark**                            | Simple leaf in `--color-leaf-green` on the existing rounded square | **Chosen**                                                          |

## Decision outcome

The favicon becomes a simple leaf mark:

- A single stylised leaf path in `#2E7D32` (`--color-leaf-green`) on the existing rounded-square background, replacing the "JP" text.
- Drawn in the same minimal flat SVG style as the tree leaves (DR-0022), so the mark and the menu motif are one.

## Consequences

- **Positive:** The favicon aligns with the site's new visual identity and is recognisable at small sizes.
- **Negative:** The initials "JP" are dropped from the browser tab — acceptable since the leaf now carries the identity.
- **Accepted risk:** A monochrome leaf is simple; if a richer brand mark is commissioned later, the favicon is trivially replaceable.

## Evidence

| Source                                         | What it establishes                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------ |
| design-visuals interview, Round 3 (2026-11-12) | User accepted replacing the JP monogram with a leaf mark.                |
