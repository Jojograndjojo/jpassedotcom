---
dr_id: DR-0027
title: "Red-green-refactor cycle: a separate ambient loop, distinct from the stable menu"
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
  - design-visuals interview, Round 4 (Q4). User accepted all recommended answers.
revisit_if: The ambient loop distracts visitors, or the metaphor should instead animate the actual menu in a later iteration.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0027` — Red-green-refactor cycle: a separate ambient loop, distinct from the stable menu

## Context and problem statement

The brief describes two kinds of leaves: green menu leaves that "remain stable", and leaves that "appear in a shade of red, turn to green and then change shape before a new iteration of menu items less leaves happen" — a visual metaphor for the red-green-refactor development cycle. The risk is conflating these: if the *actual navigation* leaves morphed or disappeared, the menu would become unusable.

## Decision drivers

- The navigation must stay stable and predictable — morphing or deleting menu items breaks usability
- The metaphor (red → green → refactor → fewer leaves) is about the author's *process*, not the menu's behaviour
- The two leaf groups are visually distinct: stable menu leaves vs. a cycling decorative group

## Options considered

| Option                                        | Summary                                                             | Why not chosen                                                             |
| --------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Animate the real menu leaves through the cycle | Menu leaves turn red, morph, and reduce in number                   | Destroys navigation; visitors can't rely on menu items staying put        |
| No cycle at all                               | Drop the red-green-refactor metaphor                                | Loses a personal, on-message symbol the user explicitly asked for         |
| **Separate ambient loop**                     | Decorative branch cycles red→green→morph→fewer-leaves; menu stays stable | **Chosen**                                                                 |

## Decision outcome

The red-green-refactor cycle is a **decorative ambient loop**, visually separate from the menu:

- Lives on its own small branch/seedling, distinct from the stable menu branch.
- Each cycle: leaves appear red (`#BF3100`) → turn green (`#2E7D32`) → morph shape → the next iteration shows *fewer* leaves → loop.
- Period: ~2.5–3s per full cycle, looping indefinitely.
- The stable menu leaves never participate in the cycle and remain clickable at all times.

## Consequences

- **Positive:** The metaphor is present without compromising navigation; the stable-vs-cycling distinction matches the brief's own wording.
- **Negative:** A second, decorative branch to design alongside the menu branch; the loop must be implemented so it does not distract from reading.
- **Accepted risk:** A continuously looping animation risks feeling busy. Accepted because it is small, self-contained, and hidden entirely under `prefers-reduced-motion` (DR-0028).

## Evidence

| Source                                         | What it establishes                                                                      |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| design-visuals interview, Round 4 (2026-11-12) | User accepted keeping the menu stable and running the cycle as a separate ambient loop.  |
