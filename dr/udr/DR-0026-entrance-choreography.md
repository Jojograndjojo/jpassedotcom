---
dr_id: DR-0026
title: "Entrance choreography: calebasse button opens on a hinge, branch draws on, leaves pop staggered"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: DR-0012
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 4 (Q2–Q3). User accepted all recommended answers.
revisit_if: Keyboard or screen-reader testing finds the reveal sequence unclear, or the timing feels off once implemented.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0026` — Entrance choreography: calebasse button opens on a hinge, branch draws on, leaves pop staggered

## Context and problem statement

The animation brief is: a welcome invites a click on a calebasse, which opens 90° to reveal the pictures, then a branch pops up carrying the menu leaves. The question is how the entrance is triggered, ordered, and timed — and critically, how it stays operable by keyboard and screen reader, not just pointer.

## Decision drivers

- The reveal must be operable without a mouse (WCAG 2.1 — keyboard, screen reader)
- The sequence should read as one continuous story: open → reveal → grow
- Parent-first-then-children reads as organic growth rather than simultaneous noise

## Options considered

| Option                                          | Summary                                                               | Why not chosen                                                                 |
| ----------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Calebasse as a `<div>` with click handler       | Non-semantic clickable surface                                        | Not keyboard-focusable or announced; fails WCAG                              |
| Everything animates at once                     | Gourd, branch, and leaves all move simultaneously                     | Reads as noise, not growth; the sequence's story is lost                      |
| **`<button>` gourd → reveal → draw-on → stagger** | Button opens hinge; photo settles; branch draws on; leaves stagger in | **Chosen**                                                                     |

## Decision outcome

The entrance is one ordered sequence, triggered by the calebasse `<button>`:

1. **Click/keypress** on the calebasse `<button>` (focusable, visible focus ring, `aria-expanded`).
2. **Open:** the two gourd halves rotate on their hinge to 90° — `--duration-slow` (800ms) `ease-in-out`.
3. **Reveal:** the main picture settles into place — `--duration-medium` (400ms) `ease-out`.
4. **Grow:** the branch draws on via `stroke-dashoffset` — 600ms `ease-out`.
5. **Leaves:** each menu leaf pops in (scale + fade) — 300ms `ease-out`, staggered ~150ms apart.

`aria-expanded` toggles with the open state so assistive tech knows whether the reveal is open.

## Consequences

- **Positive:** One coherent story; operable by keyboard and screen reader; the stagger guides the eye along the branch.
- **Negative:** Five timed steps to implement and test; the button carries more semantics than a plain link.
- **Accepted risk:** 600ms/300ms/150ms are estimates tuned to the single current leaf; more leaves later may need a tighter stagger.

## Evidence

| Source                                         | What it establishes                                                                  |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| design-visuals interview, Round 4 (2026-11-12) | User accepted the button-triggered hinge open, draw-on branch, and staggered leaves. |
