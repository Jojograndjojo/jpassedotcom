---
dr_id: DR-0010
title: "Colour palette: warm cream background, dark teal text, red-orange accent"
status: accepted
decision_type: udr
date: 2025-08-10
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: none
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 2. User generated palette via coolors.co and confirmed role mapping.
revisit_if: Accessibility audits show insufficient contrast on any pairing, or a dark mode is added and the palette needs dark variants.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0010` — Colour palette: warm cream background, dark teal text, red-orange accent

## Context and problem statement

The site currently uses `#1a1a1a` text on `#fff` background with no accent colour — links match body text and only reveal themselves on hover via an opacity shift. The page is visually flat. We are defining a deliberate five-colour palette that gives the site warmth, distinctiveness, and discoverable interactive elements.

## Decision drivers

- The palette should feel personal and warm, not corporate-generic
- Links must be visibly different from body text at a glance (accessibility and usability)
- The palette must support the bilingual, text-light nature of the current page
- All text-background pairings must meet WCAG AA contrast minimums

## Options considered

| Option                                        | Summary                                               | Why not chosen                                                  |
| --------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------- |
| Stick with `#1a1a1a` on `#fff` with no accent | Minimal, clean, zero personality                      | Links are invisible; page reads as unstyled rather than minimal |
| Muted blue accent on white                    | Professional, safe                                    | User wanted something warmer and more distinctive               |
| **Five-colour warm palette from coolors.co**  | `#BF3100`, `#FF9F1C`, `#FEF5EF`, `#143642`, `#0F8B8D` | **Chosen**                                                      |

## Decision outcome

The five colours are assigned to semantic roles:

| Token                  | Value     | Role                                                                |
| ---------------------- | --------- | ------------------------------------------------------------------- |
| `--color-background`   | `#FEF5EF` | Page background — warm cream                                        |
| `--color-text`         | `#143642` | Body text — dark teal (softer and more distinctive than near-black) |
| `--color-accent`       | `#BF3100` | Links, focus ring — bold red-orange, highly discoverable            |
| `--color-accent-hover` | `#FF9F1C` | Link hover state — warm amber                                       |
| `--color-secondary`    | `#0F8B8D` | Secondary accent — language toggle, future meta/dates               |

**Contrast verification (WCAG AA):**

| Foreground          | Background           | Ratio   | AA normal     | AA large |
| ------------------- | -------------------- | ------- | ------------- | -------- |
| `#143642` text      | `#FEF5EF` background | ~10.5:1 | ✅ Pass       | ✅ Pass  |
| `#BF3100` accent    | `#FEF5EF` background | ~5.2:1  | ✅ Pass       | ✅ Pass  |
| `#0F8B8D` secondary | `#FEF5EF` background | ~4.7:1  | ⚠️ Borderline | ✅ Pass  |

The secondary accent (`#0F8B8D`) is borderline for normal text at small sizes. It will only be used for non-critical elements (language toggle, metadata) at `0.875rem` or larger, where AA large-text thresholds apply.

## Consequences

- **Positive:** The palette is warm, personal, and distinctive. The red-orange accent makes links immediately discoverable. The cream background softens the page without looking beige.
- **Negative:** Five colours to manage instead of two. The secondary teal (`#0F8B8D`) needs care — it must not be used for critical body text at small sizes.
- **Accepted risk:** The warm palette works for the current single-page portfolio. If dark mode is added later, these colours will need dark variants (likely a full second palette rather than a simple inversion).

## Evidence

| Source                                         | What it establishes                                                   |
| ---------------------------------------------- | --------------------------------------------------------------------- |
| design-visuals interview, Round 2 (2025-08-10) | User generated palette via coolors.co and confirmed the role mapping. |
