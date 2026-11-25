---
dr_id: DR-0017
title: "Single-scene composition: the tree grows out of the opened calebasse"
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
  - design-visuals interview, Round 1 (Q3). User accepted the recommendation to compose calebasse and tree as one continuous scene.
revisit_if: The two symbols need to be independently placed (e.g. the menu moves to a fixed header and the calebasse stays in the hero).
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0017` — Single-scene composition: the tree grows out of the opened calebasse

## Context and problem statement

The redesign uses two Chadian symbols — the calebasse (calabash) and the tree. They could be rendered as two disconnected zones (a reveal vignette and a separate nav bar), or composed as one scene. The choice determines the page's narrative structure and where the visitor's eye travels during the animation.

## Decision drivers

- The calebasse and tree should reinforce a single story, not compete as two separate motifs
- The animation sequence is continuous (open calebasse → reveal pictures → branch pops up → leaves appear), which favours one anchor point
- A single anchor simplifies the motion choreography and the responsive layout

## Options considered

| Option                                       | Summary                                                              | Why not chosen                                                        |
| -------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Two separate zones                           | Calebasse reveal in one area, tree menu in another (e.g. a nav bar)  | Two competing vignettes; weaker metaphor; the sequence has two anchors |
| Tree first, calebasse separate               | Tree menu loads immediately, calebasse is a side delight             | Breaks the intended open → reveal → grow sequence                    |
| **Tree grows out of the opened calebasse**   | One continuous scene: the gourd holds the picture and grows the tree | **Chosen**                                                            |

## Decision outcome

The homepage renders one continuous scene:

- The calebasse is the root of the composition.
- Opening it reveals the pictures.
- The branch then grows *up and out of the opened calebasse*, carrying the menu leaves.

Symbolically: the gourd holds the content (pictures) and grows the structure (navigation) — content and navigation share a single root. The scene has one visual anchor, and the animation has one continuous through-line.

## Consequences

- **Positive:** One narrative, one anchor, simpler choreography. The two symbols reinforce each other rather than competing.
- **Negative:** The two animations are coupled — the tree cannot appear without the calebasse having opened. Layout changes to either symbol affect the other.
- **Accepted risk:** Coupling means a change to the reveal (e.g. auto-play instead of click) forces a review of the tree's timing too. Acceptable because both are part of the same intended sequence.

## Evidence

| Source                                         | What it establishes                                                                 |
| ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| design-visuals interview, Round 1 (2026-11-12) | User accepted composing the calebasse and tree as one continuous scene.             |
