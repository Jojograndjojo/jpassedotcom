---
dr_id: DR-0034
title: "Dark theme adopted now: black background, light text, brightened accent"
status: accepted
decision_type: udr
date: 2026-11-15
capabilities: [homepage]
trigger: animation-concept
concerns: [visual-identity]
designed_against: DR-0010
observed_in: design/animation-concept
deciders:
  - Jonathan Passe, author
evidence:
  - design/animation-concept frames, all on a pure-black canvas (2026-11-15)
  - User: "Let's have it black" / whole page dark, 2026-11-15
revisit_if: Accessibility audit finds the brightened accent is off-brand, or a light mode is restored.
supersedes: DR-0010, DR-0014
review_flag: none
review_reason: n/a
---

# `DR-0034` — Dark theme adopted now: black background, light text, brightened accent

## Context and problem statement

The welcome-page animation concept (frames in `design/animation-concept/`) is drawn on a pure
black canvas. The user confirmed the **whole page** goes dark — not just the hero — which
supersedes the light palette (DR-0010) and the earlier "dark mode deferred to v2" note (DR-0014).

## Decision drivers

- The whole page must use the dark canvas shown in the concept frames.
- Text/background pairings must keep meeting WCAG AA (a stated quality gate).
- The warm, personal palette (teal/red-orange/tan/green) should survive the inversion.

## Options considered

| Option | Summary | Why not chosen |
| --- | --- | --- |
| Dark hero only, light rest | Minimal change | User chose whole-page dark |
| Invert palette verbatim | `#143642` becomes background, cream becomes text | User asked for black, not teal |
| **Black canvas + adapted accents** | `#000000` background, near-white text, accent brightened for AA | **Chosen** |

## Decision outcome

| Token | Value | Change |
| --- | --- | --- |
| `--color-background` | `#000000` | was `#fafafa` |
| `--color-text` | `#f5f5f5` | was `#143642` |
| `--color-text-muted` | `#bdbdbd` | new — bio/secondary text |
| `--color-accent` | `#e05a2a` | was `#bf3100` — brightened to hold AA on black |
| `--color-calebasse-rim` | `#143642` | new — keeps the old teal for on-gourd detail |
| `--color-accent-hover` | `#ff9f1c` | unchanged |
| `--color-secondary` | `#0f8b8d` | unchanged (passes AA on black) |
| `--color-leaf-green` | `#2e7d32` | unchanged (decorative) |
| `--color-calebasse` | `#c68b59` | unchanged (decorative) |

## Consequences

- **Positive:** The page matches the concept; text/links still meet AA on black.
- **Negative:** The brand red-orange shifted (`#bf3100` → `#e05a2a`); the old dark teal now
  exists solely as a decorative gourd-detail colour.
- **Accepted risk:** A future light-mode toggle would need the original light values restored.

## Evidence

| Source | What it establishes |
| --- | --- |
| animation-concept frames | Black canvas across all 17 frames |
| User, 2026-11-15 | "Let's have it black" → whole page dark |
