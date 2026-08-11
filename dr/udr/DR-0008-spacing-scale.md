---
dr_id: DR-0008
title: "Spacing scale: 0.25rem, 0.5rem, 1rem, 2rem steps"
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
  - design-visuals interview, Round 1. User confirmed formalisation of the implicit scale.
revisit_if: A new component or content section requires a spacing value outside this scale.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0008` — Spacing scale: 0.25rem, 0.5rem, 1rem, 2rem steps

## Context and problem statement

The current CSS uses an implicit spacing scale: `0.5rem` for list item gaps, `1rem` for paragraph margins and page padding, `2rem` for section padding. These values work for the current content but are not named or enforced. Formalising the scale makes future components consistent by default.

## Decision drivers

- The current implicit values already feel right — no need to change them
- Formalised tokens ("space units") prevent arbitrary one-off spacing values from entering the codebase
- A small step (`0.25rem`) covers tight gaps that don't currently exist but will in future (e.g. icon-to-label spacing)

## Options considered

| Option                         | Summary                                     | Why not chosen                                             |
| ------------------------------ | ------------------------------------------- | ---------------------------------------------------------- |
| Keep it implicit               | Use arbitrary rem values as needed          | Leads to inconsistent spacing as more components are added |
| Larger scale (0.5, 1, 2, 4rem) | Coarser steps                               | Lacks the tight `0.25rem` step needed for inline gaps      |
| **0.25, 0.5, 1, 2rem**         | Four named steps covering tight to generous | **Chosen**                                                 |

## Decision outcome

The spacing scale has four named steps:

| Token        | Value     | Role                                                                |
| ------------ | --------- | ------------------------------------------------------------------- |
| `--space-xs` | `0.25rem` | Tightest gap (icon-to-label, inline separators)                     |
| `--space-sm` | `0.5rem`  | Small gap (list items, label-to-value)                              |
| `--space-md` | `1rem`    | Default gap (paragraphs, card padding, page edge padding)           |
| `--space-lg` | `2rem`    | Large gap (section breaks, main content padding from viewport edge) |

## Consequences

- **Positive:** Every future component has a constrained set of spacing choices. The values are already battle-tested in the current CSS.
- **Negative:** None. This is a formalisation of what already exists, with one addition (`--space-xs`).
- **Accepted risk:** If a fifth step is needed later (e.g. `3rem` for a large hero section), it can be added as `--space-xl` without breaking the existing four.

## Evidence

| Source                                         | What it establishes                                          |
| ---------------------------------------------- | ------------------------------------------------------------ |
| design-visuals interview, Round 1 (2025-08-10) | User confirmed formalisation of the existing implicit scale. |
