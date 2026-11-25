---
dr_id: DR-0020
title: "Symbol colour palette: leaf green and calebasse tan join the palette; red and branch reuse existing tokens"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: DR-0010
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 2 (Q3–Q5). User accepted all recommended answers.
revisit_if: The leaf green fails contrast on a future background, or the calebasse illustration needs a second tone for depth.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0020` — Symbol colour palette: leaf green and calebasse tan join the palette; red and branch reuse existing tokens

## Context and problem statement

The redesign introduces two Chadian symbols — a calebasse (calabash) and a tree whose leaves are the menu. The existing five-colour palette (DR-0010) has no true green and no gourd/tan tone. The red→green→refactor leaf cycle needs a "red" phase and a "green" phase, the gourd needs a natural body colour, and the branch needs a bark colour — without letting the palette sprawl to eight or nine colours.

## Decision drivers

- The leaf cycle needs a green that is a *true* green, visually distinct from the existing blue-leaning teal `#0F8B8D`
- The calebasse should read as a natural dried gourd (tan), harmonising with the warm amber/red-orange family
- Palette discipline: reuse existing tokens wherever possible rather than adding a new colour for every symbol
- Any colour used as a text background (e.g. behind menu labels) must maintain WCAG AA contrast

## Options considered

| Option                                          | Summary                                                              | Why not chosen                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Reuse `#0F8B8D` as the leaf green              | No new green token; teal doubles as green                             | Teal leans blue and reads as "ocean", not "leaf"; weakens the metaphor   |
| Add a green, tan, *and* a bark brown            | Naturalistic: green leaf, tan gourd, brown branch                     | Eight colours total; the brown is redundant when dark teal already works |
| **Add green + tan only; reuse red and branch** | New `--color-leaf-green` and `--color-calebasse`; red reuses `#BF3100`; branch reuses `#143642` | **Chosen**                                                                |

## Decision outcome

Two new tokens join the palette; two symbol colours reuse existing tokens:

| Token                  | Value     | Role                                                                 |
| ---------------------- | --------- | -------------------------------------------------------------------- |
| `--color-leaf-green`   | `#2E7D32` | Stable/menu leaf fill — the "green" phase of the red-green cycle     |
| `--color-calebasse`    | `#C68B59` | Calebasse gourd body — warm medium tan                               |
| (reuse `--color-accent`) | `#BF3100` | Leaf "red" phase — already red-orange, no new red needed            |
| (reuse `--color-text`)   | `#143642` | Branch/trunk bark, and calebasse rim/detail lines                    |

**Contrast notes:**

- `#2E7D32` on `#fafafa` ≈ 4.9:1 — passes WCAG AA for normal text, so menu labels are legible on green leaves (dark text) or green leaves on cream (as shapes).
- `#C68B59` is decorative only (~2.8:1 against `#fafafa`); it never carries text. Its rim and detail lines use `#143642`, which maintains strong contrast.

## Consequences

- **Positive:** The symbols have natural, on-metaphor colours (leaf green, gourd tan) while the palette stays disciplined at seven tokens. The red-green-refactor cycle reuses the existing accent as its red.
- **Negative:** Two new tokens to maintain; the gourd tan is constrained to decorative use (never text).
- **Accepted risk:** The leaf green and gourd tan are tuned for the current light `#fafafa` background. Dark mode (still deferred, DR-0014) will need dark variants for both.

## Evidence

| Source                                         | What it establishes                                                                 |
| ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| design-visuals interview, Round 2 (2026-11-12) | User accepted `#2E7D32` green, `#C68B59` tan, and reuse of `#BF3100` and `#143642`. |
