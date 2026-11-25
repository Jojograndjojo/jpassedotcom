---
dr_id: DR-0016
title: "Two-width canvas: 36rem text column plus 48rem stage, with 3rem stage spacing"
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
  - design-visuals interview, Round 1 (Q1). User accepted the recommendation to keep 36rem for prose and add a wider 48rem stage.
revisit_if: The tree gains many more leaves and outgrows 48rem, or a future content section needs a wider reading column.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0016` — Two-width canvas: 36rem text column plus 48rem stage, with 3rem stage spacing

## Context and problem statement

The site currently caps all content at 36rem (`--content-width`). The redesign introduces an animated scene — a calebasse and a tree with a branch holding menu leaves — which needs more horizontal room than a text column while the prose (name, identity, contact) stays most readable at the established 36rem.

## Decision drivers

- Prose readability is optimised around 36rem and should not change (DR-0006)
- A tree with multiple future leaves needs horizontal space to grow without colliding with the text column
- The scene and the text are visually different kinds of content and should not share one width

## Options considered

| Option                                    | Summary                                                          | Why not chosen                                                                |
| ----------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Widen everything to 48rem                 | One width for text and scene                                     | 48rem lines of prose are harder to read than 36rem                            |
| Keep everything at 36rem                  | Scene fits inside the existing text column                       | The tree has no room to grow; scene feels cramped                             |
| **Two widths: 36rem text, 48rem stage**   | Separate tokens for the reading column and the animated stage    | **Chosen**                                                                    |

## Decision outcome

Two layout tokens govern the homepage:

- `--content-width: 36rem` — unchanged, for the prose column (name, identity, contact).
- `--stage-width: 48rem` — new, for the calebasse + tree scene.

The spacing scale gains one new step to separate the stage from the prose:

- `--space-xl: 3rem` — page-level / stage separation.

The existing steps (`--space-xs` 0.25rem, `--space-sm` 0.5rem, `--space-md` 1rem, `--space-lg` 2rem) carry over unchanged.

## Consequences

- **Positive:** The scene has room to breathe and grow; prose readability is untouched; a clean token (rather than a magic number) documents the wider stage.
- **Negative:** Two width tokens to coordinate at breakpoints instead of one.
- **Accepted risk:** 48rem is chosen for the current single-leaf menu. If the tree grows substantially in later iterations, `--stage-width` may need revisiting.

## Evidence

| Source                                         | What it establishes                                                          |
| ---------------------------------------------- | ---------------------------------------------------------------------------- |
| design-visuals interview, Round 1 (2026-11-12) | User accepted a 36rem text column plus a 48rem stage, with a 3rem step added. |
