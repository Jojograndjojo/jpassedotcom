---
dr_id: DR-0036
title: "Park the tree, menu, and ambient loop for the welcome redesign"
status: accepted
decision_type: sdr
date: 2026-11-15
capabilities: [homepage]
trigger: animation-concept
concerns: [scope]
designed_against: DR-0017
observed_in: design/animation-concept
deciders:
  - Jonathan Passe, author
evidence:
  - User: "we can park the tree for now" (2026-11-15)
revisit_if: The Articles menu or the red-green-refactor loop is reintroduced.
supersedes: DR-0017, DR-0019, DR-0027
review_flag: none
review_reason: n/a
---

# `DR-0036` — Park the tree, menu, and ambient loop for the welcome redesign

## Context and problem statement

The v1.1 homepage grew a branch and menu leaves out of the opened calebasse, plus a decorative
red-green-refactor ambient loop. The new welcome concept (DR-0035) is a centred on-load intro with
no tree. The user confirmed the tree is parked for now.

## Decision outcome

Remove — for this iteration — the branch, menu leaves, and ambient loop:

- `scene__tree`, `scene__branch`, `scene__menu`, `scene__leaf` markup
- `scene__ambient` markup and the `leaf-cycle` state machine
- the `reveal` click-gated state machine (replaced by the `intro` on-load state machine)
- the now-unused i18n keys (`welcome`, `calebasse.ariaLabel`, `menu.*`)

## Consequences

- **Positive:** The hero is simpler and matches the new concept; dead code is removed rather than
  commented out.
- **Negative:** The Articles entry point and the ambient loop disappear from the page.
- **Accepted risk:** Restoring the tree later means re-adding markup, styles, and the leaf-cycle
  module — recoverable from git history.

## Evidence

| Source | What it establishes |
| --- | --- |
| User, 2026-11-15 | "we can park the tree for now" |
