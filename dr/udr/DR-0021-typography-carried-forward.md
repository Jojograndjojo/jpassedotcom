---
dr_id: DR-0021
title: "Typography carried forward: Titillium Web and scale unchanged, welcome line reuses existing sizes"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: DR-0009
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 2 (Q1–Q2). User accepted keeping typography unchanged and rendering the welcome line at the existing scale.
revisit_if: The welcome invitation feels visually weak once implemented, or a distinct display face is wanted for the symbol era of the site.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0021` — Typography carried forward: Titillium Web and scale unchanged, welcome line reuses existing sizes

## Context and problem statement

The redesign introduces a welcome line (the invitation to click the calebasse) that did not exist before. It is tempting to give the welcome a new display size or a new typeface. But the redesign changes structure and symbols, not the reading experience — the existing typography (DR-0009) is working and carries no known deficit.

## Decision drivers

- Typography is stable and validated (DR-0009); churning it adds risk with no benefit
- The welcome's emphasis should come from the calebasse's *motion*, not from a larger font
- Fewer type tokens means fewer things to drift out of sync with DESIGN_SYSTEM.md

## Options considered

| Option                                       | Summary                                                            | Why not chosen                                                            |
| -------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| New display face for the welcome             | A distinct typeface for the invitation line                        | Splits the type system for one line; adds a font download and latency     |
| New `--font-size-hero` for the welcome       | A larger size token just for the invitation                        | A new token for a guess; the motion already carries the emphasis          |
| **Keep DR-0009; welcome at existing scale**  | Titillium Web and 1.75/1/0.875rem unchanged; welcome at body size or bold weight | **Chosen**                                                                |

## Decision outcome

Typography is carried forward unchanged from DR-0009:

- Font stack: Titillium Web (400/600) — unchanged.
- Type scale: h1 1.75rem, body 1rem, small 0.875rem — unchanged.
- The new welcome line renders at the existing body size (1rem), optionally `--font-weight-bold`, rather than introducing a hero size.

## Consequences

- **Positive:** No new tokens, no new font download, no drift. The welcome's emphasis is carried by the calebasse animation rather than type size.
- **Negative:** None material — the welcome may look understated until the motion is in place.
- **Accepted risk:** If the welcome reads too weak in practice, a `--font-size-hero` can be added later. Accepted because guessing a size now is worse than measuring once it's built.

## Evidence

| Source                                         | What it establishes                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------ |
| design-visuals interview, Round 2 (2026-11-12) | User accepted keeping typography unchanged and reusing existing sizes for the welcome. |
