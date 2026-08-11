---
dr_id: DR-0007
title: "Language toggle placed top-right in header, styled as a subtle text link"
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
  - design-visuals interview, Round 1. User confirmed top-right placement.
revisit_if: Additional languages are added, or the toggle proves hard to find in usability testing.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0007` — Language toggle placed top-right in header, styled as a subtle text link

## Context and problem statement

The site is bilingual (English and French, DR-0005). The language toggle is the only navigation element on the page. It currently sits top-left in the `<header>` as a plain text link at `0.875rem`. We need to decide its placement and prominence.

## Decision drivers

- Bilingual visitors expect a language switcher in the top-right — it is the strongest web convention for this control
- The toggle should not compete with the page's primary content (name, photo, identity)
- The site has exactly two languages — a simple text link is sufficient; a dropdown is overkill
- Moving the toggle right separates navigation from content identity

## Options considered

| Option                          | Summary                                                          | Why not chosen                                                     |
| ------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| Keep top-left                   | Current placement, no change                                     | Separates from web convention; sits in the visual path to the name |
| Dropdown with flag icons        | A select menu or flag buttons                                    | Overkill for two languages; adds visual weight and icon dependency |
| **Top-right, subtle text link** | Right-aligned in the header, same font size and style as current | **Chosen**                                                         |

## Decision outcome

The language toggle is placed in the top-right of the `<header>`, aligned with the content column's right edge. It remains a simple text link (`Français` / `English`) at `0.875rem`, styled the same as the current implementation. No flag icons, no dropdown, no border or background.

## Consequences

- **Positive:** Follows the strongest web convention for language switchers. Keeps the toggle visible but visually quiet. Separates navigation from content.
- **Negative:** Top-right is a convention, not a guarantee — some visitors may look elsewhere. But with only one interactive element beyond the contact links, discovery risk is low.
- **Accepted risk:** If the site adds more interactive elements (e.g. a dark mode toggle), the top-right will become a utility zone. The language toggle can coexist there.

## Evidence

| Source                                         | What it establishes                                     |
| ---------------------------------------------- | ------------------------------------------------------- |
| design-visuals interview, Round 1 (2025-08-10) | User confirmed top-right placement with subtle styling. |
