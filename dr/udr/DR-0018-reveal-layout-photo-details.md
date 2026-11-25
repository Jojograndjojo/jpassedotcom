---
dr_id: DR-0018
title: "Reveal layout: main picture settles into the two-column, details cascade below"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: DR-0006
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 1 (Q4). User accepted the recommendation to reuse the two-column for the main picture and cascade details below.
revisit_if: The number or aspect ratio of detail pictures changes such that a cascade no longer fits.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0018` — Reveal layout: main picture settles into the two-column, details cascade below

## Context and problem statement

When the calebasse opens, the main picture appears first, and the detail pictures/captions follow (per the user's reveal sequence). The question is where the revealed content *settles* once the animation completes — it should not float arbitrarily or force an entirely new layout for content that already has a validated two-column treatment (DR-0006).

## Decision drivers

- Reuse the existing photo treatment and layout rather than invent a second one
- The user's sequence is main picture first, details after — the layout must support a staged arrival
- The revealed content must coexist with the always-visible identity column

## Options considered

| Option                                             | Summary                                                               | Why not chosen                                                       |
| -------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Revealed photo in a new full-width band            | Photo expands across the stage, text sits above/below                | Breaks the existing two-column rhythm; more layout to maintain       |
| Details to the side of the photo                   | Photo and details side by side                                       | Crowded at mobile; details have no natural sequential flow           |
| **Photo into two-column, details cascade below**   | Main picture settles into the DR-0006 two-column; details appear sequentially beneath it | **Chosen**                                                           |

## Decision outcome

The revealed content settles as follows:

- **Main picture:** settles into the existing two-column layout (DR-0006) — photo beside the identity text.
- **Details:** appear one after another, cascading *below* the photo, in the sequence the user described (picture, then its details).

The staged arrival (main picture first, details after) is an animation timing concern; the *end state* is a stable two-column layout plus a details cascade, so the page does not depend on the animation to be legible.

## Consequences

- **Positive:** Reuses the validated two-column treatment; the end state is stable and legible even if the animation is interrupted. Details have a natural top-to-bottom reading order.
- **Negative:** The details cascade adds vertical length below the fold on desktop and mobile.
- **Accepted risk:** Details below the photo may be missed on a short viewport. Acceptable because they are supplementary to the main picture, and the cascade order is the natural reading order.

## Evidence

| Source                                         | What it establishes                                                                 |
| ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| design-visuals interview, Round 1 (2026-11-12) | User accepted reusing the two-column for the main picture and cascading details below. |
