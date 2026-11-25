---
dr_id: DR-0028
title: "Reduced motion and symbol interaction states"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity, accessibility]
designed_against: DR-0012
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 4 (Q5–Q6). User accepted all recommended answers.
revisit_if: WCAG 2.3.3 testing flags the animations, or the symbol hover treatment feels inconsistent with the text links.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0028` — Reduced motion and symbol interaction states

## Context and problem statement

The redesign is animation-heavy. WCAG 2.3.3 requires that motion be avoidable or not harmful for users who request reduced motion, and the new symbols (calebasse button, menu leaves) need interaction states that are consistent with the existing link/focus patterns (DR-0012).

## Decision drivers

- Users with vestibular or motion-sensitivity needs must still reach all content without animation
- Keyboard and pointer users need a visible response on the symbols
- Consistency with the existing accent hover + focus ring (DR-0012) avoids a second, competing interaction language

## Options considered

| Option                                              | Summary                                                              | Why not chosen                                                              |
| --------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Ignore reduced motion                               | Animations play regardless                                           | Fails WCAG 2.3.3; harms motion-sensitive users                              |
| New colour for leaf hover                           | Introduce a distinct hover colour for the leaves                     | Adds a colour; breaks consistency with DR-0012                             |
| **Reduced-motion fallbacks + reuse DR-0012**        | Instant reveal under reduced motion; leaves reuse accent hover/focus + subtle scale | **Chosen**                                                                  |

## Decision outcome

Two complementary decisions:

**Reduced motion (`prefers-reduced-motion`):**
- The calebasse opens *instantly* (no hinge animation); the branch and leaves appear fully formed.
- The red-green-refactor ambient loop is hidden entirely.
- All content stays reachable and legible without any motion.

**Symbol interaction states (menu leaves and calebasse button):**
- Leaves reuse the DR-0012 pattern: accent hover with underline-equivalent, 2px accent focus ring, `--duration-fast` (150ms) transitions.
- Leaves add a subtle scale/darken on hover so the symbol itself responds — a tactile, "alive" feel without a new colour.
- The calebasse `<button>` uses the same focus ring and hover treatment as the leaves.

## Consequences

- **Positive:** Motion-sensitive users lose nothing; the symbols feel responsive and consistent with the rest of the site; WCAG 2.3.3 is satisfied.
- **Negative:** Two code paths (animated vs. reduced-motion) to implement and test.
- **Accepted risk:** The subtle leaf scale must be small enough not to shift layout or feel jittery; tune to `--duration-fast`.

## Evidence

| Source                                         | What it establishes                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| design-visuals interview, Round 4 (2026-11-12) | User accepted reduced-motion fallbacks and reuse of DR-0012 for the symbols.          |
