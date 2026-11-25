---
dr_id: DR-0025
title: "Motion tokens: three named durations and an easing language"
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
  - design-visuals interview, Round 4 (Q1). User accepted all recommended answers.
revisit_if: The choreography feels rushed or sluggish once implemented, or a fourth duration is genuinely needed.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0025` — Motion tokens: three named durations and an easing language

## Context and problem statement

The redesign introduces a choreographed sequence — calebasse opening, branch drawing on, leaves popping, and a recurring red-green-refactor cycle. The current system has a single `--transition-duration: 150ms` (DR-0012), which is a micro-interaction duration, not a motion vocabulary. Without named tokens, each animation would hard-code its own duration and easing, drifting out of sync.

## Decision drivers

- Different beats need different speeds: micro-interactions (fast), leaf pops (medium), the big reveal (slow)
- A shared easing language makes the motion feel coherent rather than assembled
- Tokens keep DESIGN_SYSTEM.md the single source of truth instead of scattered magic numbers

## Options considered

| Option                                        | Summary                                                    | Why not chosen                                                       |
| --------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| Hard-code per-animation durations             | Each animation picks its own ms value and easing            | Drift and inconsistency; no single source of truth                   |
| One duration for everything                   | Reuse 150ms everywhere                                      | 150ms is far too fast for a gourd opening; motion loses its hierarchy |
| **Three named durations + easing language**   | `--duration-fast/medium/slow` with entrance/transform easings | **Chosen**                                                           |

## Decision outcome

Three duration tokens and an easing convention:

| Token                | Value | Role                                              |
| -------------------- | ----- | ------------------------------------------------- |
| `--duration-fast`    | 150ms | Micro-interactions (hover, focus, colour) — existing value |
| `--duration-medium`  | 400ms | Leaf pops, photo settle, medium entrances          |
| `--duration-slow`    | 800ms | The calebasse hinge opening                         |

Easing convention:

- `ease-out` for **entrances** (things appearing — branch, leaves, photo).
- `ease-in-out` for **transforms** (the hinge opening).

## Consequences

- **Positive:** A coherent, documented motion vocabulary; no magic numbers; easy to tune the whole feel by adjusting three tokens.
- **Negative:** Three tokens to maintain; misuse of a duration (e.g. a slow hover) would feel sluggish.
- **Accepted risk:** The specific 400ms/800ms values are estimates chosen before implementation; they may be tuned once the sequence is running.

## Evidence

| Source                                         | What it establishes                                                          |
| ---------------------------------------------- | ---------------------------------------------------------------------------- |
| design-visuals interview, Round 4 (2026-11-12) | User accepted fast/medium/slow duration tokens and the easing convention.    |
