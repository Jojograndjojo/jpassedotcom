---
dr_id: DR-0012
title: "Interaction states: accent-colour links with amber hover + underline, custom focus ring, 150ms transitions"
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
  - design-visuals interview, Round 4. User confirmed colour-shift + underline on hover, custom focus ring, and 150ms transitions.
revisit_if: Additional interactive elements (buttons, forms) are added in v2 and need expanded interaction tokens.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0012` — Interaction states: accent-colour links with amber hover + underline, custom focus ring, 150ms transitions

## Context and problem statement

The current CSS has a single interaction rule: `a:hover { opacity: 0.7; }` on body-coloured links. There are no focus styles, no transitions, and no distinction between link colour and body text before hover. With the new palette (DR-0010) and typography (DR-0009), interaction states need to be deliberate and accessible.

## Decision drivers

- Links must be visibly different from body text at rest (solved by DR-0010: `#BF3100` accent)
- Hover must be detectable by colour-blind and low-vision users — colour alone is insufficient
- Keyboard focus must be visible and on-brand
- Transitions should be subtle and functional, not decorative

## Options considered

| Option                                                                      | Summary                                 | Why not chosen                                   |
| --------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------ |
| Colour-only hover (accent → amber)                                          | Just a colour shift on hover            | Inaccessible to colour-blind users; easy to miss |
| Underline-always links                                                      | Underline on links at all times         | Visually noisy for a page with only three links  |
| **Colour shift + underline on hover, custom focus ring, 150ms transitions** | Multi-cue interaction across all states | **Chosen**                                       |

## Decision outcome

| State      | Token                              | Behaviour                                          |
| ---------- | ---------------------------------- | -------------------------------------------------- |
| Rest       | `--color-accent` (`#BF3100`)       | Links are red-orange, no underline                 |
| Hover      | `--color-accent-hover` (`#FF9F1C`) | Colour shifts to amber, underline appears          |
| Focus      | `#BF3100`                          | `outline: 2px solid #BF3100; outline-offset: 2px`  |
| Active     | —                                  | Browser default (momentary colour shift on click)  |
| Transition | —                                  | `transition: color 150ms ease, opacity 150ms ease` |

The language toggle uses the same interaction pattern as all other links (colour shift + underline on hover) for consistency. It is styled with the secondary accent (`#0F8B8D`) at rest, shifting to `#FF9F1C` on hover — consistent behaviour, distinct resting colour.

## Consequences

- **Positive:** Every interactive element is discoverable by sight, by hover, and by keyboard. The multi-cue hover (colour + underline) passes WCAG 2.1 SC 1.4.1 (Use of Colour). The focus ring is on-brand and visible.
- **Negative:** The underline appearing/disappearing on hover introduces a minor layout shift if not handled with `text-underline-offset`. Mitigated by using `text-underline-offset: 0.2em` to keep the underline close to the text baseline.
- **Accepted risk:** Only three interactive elements exist on the page (email link, LinkedIn link, language toggle). If v2 adds buttons or forms, the interaction tokens may need to expand — but the current set covers text links well.

## Evidence

| Source                                         | What it establishes                                                                      |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| design-visuals interview, Round 4 (2025-08-10) | User confirmed colour-shift + underline hover, custom focus ring, and 150ms transitions. |
