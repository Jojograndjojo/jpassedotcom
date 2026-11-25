---
dr_id: DR-0019
title: "Tree menu orientation: horizontal branch on desktop, vertical stem on mobile"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: none
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 1 (Q5). User accepted the recommendation for a horizontal branch on desktop and a vertical stem on mobile.
revisit_if: The menu grows beyond ~4 leaves, or a second-level navigation is introduced.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0019` — Tree menu orientation: horizontal branch on desktop, vertical stem on mobile

## Context and problem statement

The tree menu holds the site's navigation as leaves (currently one leaf: Articles). It must read clearly on a 320px-wide phone and on a desktop stage up to 48rem. A fixed horizontal branch will overflow narrow screens; a fixed vertical stem wastes the desktop stage.

## Decision drivers

- `BR-RESP-01` requires no horizontal scroll from 320px to 2560px
- The menu will grow (articles today; talks, projects, events likely later), so orientation must scale
- Leaves are the interaction surface — they must stay large enough to tap/click at any width

## Options considered

| Option                                            | Summary                                                          | Why not chosen                                                              |
| ------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Horizontal branch everywhere                     | Leaves along a single horizontal branch at all widths            | Overflows at 320px once there is more than one leaf                         |
| Vertical stem everywhere                          | Leaves stacked vertically at all widths                          | Wastes the 48rem desktop stage; reads as a list, not a tree                 |
| **Horizontal desktop, vertical stem mobile**      | Branch spans the stage on desktop; rotates to a vertical stem on narrow screens | **Chosen**                                                                  |

## Decision outcome

The tree menu is responsive:

- **Desktop (wide):** a horizontal branch spanning the stage, with menu leaves hanging along it.
- **Mobile (narrow):** the branch becomes a vertical stem, with leaves stacked down it.

The switch point reuses the existing `≥600px` breakpoint so the tree reorients at the same width as the two-column layout. Each leaf remains a full-sized tap/click target in both orientations.

## Consequences

- **Positive:** No horizontal scroll; the tree reads naturally at both extremes; leaves stay tappable.
- **Negative:** Two visual orientations of the same menu to design and test.
- **Accepted risk:** Reusing the 600px breakpoint for tree orientation is an approximation — it is tuned for the current 1–4 leaf range and may need its own breakpoint if the menu grows.

## Evidence

| Source                                         | What it establishes                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| design-visuals interview, Round 1 (2026-11-12) | User accepted horizontal branch on desktop and vertical stem on mobile.               |
