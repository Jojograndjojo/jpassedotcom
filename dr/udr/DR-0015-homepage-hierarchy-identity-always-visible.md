---
dr_id: DR-0015
title: "Homepage hierarchy: identity always visible, calebasse gates the photo and detail reveal"
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
  - design-visuals interview, Round 1 (Q2). User accepted the recommendation to keep identity visible and gate only the photo and details behind the calebasse.
revisit_if: Analytics show visitors abandon before engaging the calebasse, or SEO requirements demand the photo be visible without interaction.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0015` — Homepage hierarchy: identity always visible, calebasse gates the photo and detail reveal

## Context and problem statement

The redesign introduces a calebasse (calabash) as the entry point: a welcome invites the visitor to click it, it opens, and reveals pictures. The naive reading would put the *entire* page content — name, identity, contact, and photo — behind the click. But hiding identity behind an interaction is a UX and SEO hazard for a portfolio whose only goal is to introduce Jonathan to clients and employers.

## Decision drivers

- The two user profiles in the To-Be spec (potential client, potential employer) must form a first impression within seconds — without needing to solve a puzzle
- Content behind an interaction is not discoverable to search crawlers and can frustrate visitors who arrive expecting a name and contact details
- The user's own reveal description is about *pictures* ("reveal the pictures"), not identity
- The welcome + calebasse should be a delight layer, not a gatekeeper for core content

## Options considered

| Option                                                          | Summary                                                                              | Why not chosen                                                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Gate everything behind the calebasse click                      | Name, photo, identity, and contact all hidden until interaction                      | Hides the portfolio's entire purpose; hurts SEO and first impression              |
| No gate — animate on load automatically                         | Calebasse opens by itself, no click required                                         | Removes the user's intended invitation to click; weaker story                     |
| **Identity always visible; calebasse gates only photo + details** | Name, identity, contact render on load; welcome invites click; calebasse reveals photo then details | **Chosen**                                                                        |

## Decision outcome

The homepage has a three-layer hierarchy:

1. **Always visible on load:** name, professional identity statement, and contact links (the existing MVP content).
2. **Invitation layer:** a welcome line inviting the visitor to click the calebasse.
3. **Gated reveal:** clicking the calebasse opens it and reveals the main picture, then the detail pictures/captions follow.

The calebasse is an enhancement, not an obstacle. If JavaScript is unavailable or reduced-motion is requested, the identity layer remains fully usable regardless.

## Consequences

- **Positive:** The portfolio's purpose survives with zero interaction; the calebasse adds story and delight on top. Core content stays crawlable and immediately legible.
- **Negative:** The design must handle three visible states (pre-click, opening, post-reveal), which adds complexity versus a single static layout.
- **Accepted risk:** Some visitors may never click the calebasse and miss the photo/details. This is acceptable because the essential identity and contact are already visible, and the welcome invitation exists to encourage the click.

## Evidence

| Source                                         | What it establishes                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------ |
| design-visuals interview, Round 1 (2026-11-12) | User accepted keeping identity visible and gating only photo + details.       |
