---
dr_id: DR-0023
title: "Revealed imagery: circular portrait retained, details as rounded-rect cards"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: DR-0011
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 3 (Q2–Q3). User accepted all recommended answers.
revisit_if: The detail pictures end up with a different aspect ratio, or more than ~4 details make the card cascade unwieldy.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0023` — Revealed imagery: circular portrait retained, details as rounded-rect cards

## Context and problem statement

The calebasse reveals the main picture first, then the detail pictures/captions (DR-0015, DR-0018). The main portrait already has a validated treatment — a 300×300 circle (DR-0011) — but the *details* are new content with no treatment. The two kinds of imagery need to read as distinct (main vs. detail) at a glance.

## Decision drivers

- Reuse the validated circular portrait rather than invent a second treatment for the main picture
- The calabash's opening is round, so a circular portrait reinforces the gourd metaphor
- Details must be visually subordinate to the portrait and support a top-to-bottom cascade

## Options considered

| Option                                       | Summary                                                             | Why not chosen                                                        |
| -------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Change the main portrait to a rounded square | Match the detail cards                                               | Discards a working treatment; loses the round-gourd alignment         |
| Details as plain full-width images           | Each detail image spans the column                                   | Details would compete with the portrait instead of cascading beneath  |
| **Circle portrait + rounded-rect detail cards** | Main picture stays 300×300 circle; details are small rounded-rect cards | **Chosen**                                                            |

## Decision outcome

Two image treatments are in force:

- **Main picture:** unchanged — 300×300 circular crop (DR-0011), revealed inside the opened calabash's round opening.
- **Details:** small rounded-rectangle cards — ~160px wide, 4:3 aspect ratio, `border-radius: 0.5rem`, each with a caption line beneath, cascading below the portrait.

The actual detail images and captions are content to be sourced later; this decision settles their treatment tokens only.

## Consequences

- **Positive:** Main and detail read as distinct at a glance; the circular portrait reinforces the gourd; the card treatment supports the cascade order.
- **Negative:** Two image treatments to maintain instead of one.
- **Accepted risk:** The ~160px card size is an approximation chosen before the real detail images exist; it may be adjusted once content lands.

## Evidence

| Source                                         | What it establishes                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| design-visuals interview, Round 3 (2026-11-12) | User accepted keeping the circular portrait and rendering details as rounded-rect cards. |
