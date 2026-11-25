---
dr_id: DR-0035
title: "Welcome hero: centred layout, on-load intro, calebasse JP monogram"
status: accepted
decision_type: udr
date: 2026-11-15
capabilities: [homepage]
trigger: animation-concept
concerns: [visual-identity]
designed_against: DR-0015
observed_in: design/animation-concept
deciders:
  - Jonathan Passe, author
evidence:
  - design/animation-concept frames, chronological (2026-11-15)
  - User decisions: on-load, centred, grayscale portrait, JP legible as it rotates (2026-11-15)
revisit_if: The JP glyph reads poorly once rendered, or the intro timing feels off in the browser.
supersedes: DR-0015, DR-0026
review_flag: none
review_reason: n/a
---

# `DR-0035` — Welcome hero: centred layout, on-load intro, calebasse JP monogram

## Context and problem statement

The homepage previously gated the photo + details behind a **click** on the calebasse, then grew
a branch and menu leaves out of it. The new concept replaces that with a single **on-load intro**
that plays once: the calebasse rotates open to reveal the **"JP"** monogram, the portrait appears
beside it, the pair scales and rises, then the name and bio fade in. The final layout is centred,
not two-column.

## Decision drivers

- The intro must run once on load with no replay or loop.
- The final state must be present in the served HTML (progressive enhancement, no-JS safe).
- The calebasse is the brand mark carrying "JP", legible only once rotated face-on.
- The portrait is the human focal point; the logo is a supporting accent.

## Options considered

| Option | Summary | Why not chosen |
| --- | --- | --- |
| Keep click-to-open + tree | Minimal change from v1.1 | Concept shows an automatic intro with no tree |
| Hinge-open two-half gourd | Reuse existing gourd | "JP legible as it rotates" implies a rotation, not a hinge |
| **Centred hero + rotateY reveal + timed steps** | Gourd rotates in revealing JP; portrait/name/bio cascade | **Chosen** |

## Decision outcome

The hero is a single centred column, revealed by a 6-phase intro (~2.9s):

1. **open** (900ms): calebasse rotates in (`rotateY`) so the on-surface **JP** becomes legible.
2. **portrait** (400ms): grayscale circular portrait fades in at logo scale.
3. **scale** (400ms): portrait grows to full size; logo holds as the small accent.
4. **rise** (400ms): brand + portrait slide up.
5. **name** (400ms): "Jonathan Passe" fades in.
6. **bio** (400ms): bio + contact links fade in.

The calebasse is decorative (`aria-hidden`); there is no button and no `aria-expanded`. Identity,
bio, and contact links are always in the markup. Under `prefers-reduced-motion` the intro is
skipped.

## Consequences

- **Positive:** One coherent, automatic story; simpler than the gated click sequence; content
  stays crawlable and no-JS safe.
- **Negative:** The tree/menu/ambient loop are removed (see DR-0036); the JP glyph is new SVG
  and may need visual polish.
- **Accepted risk:** The 6 timings are estimates tuned to this content set.

## Evidence

| Source | What it establishes |
| --- | --- |
| animation-concept frames 1–17 | The full intro sequence and final centred state |
| User, 2026-11-15 | On-load, centred, grayscale, "JP legible as it rotates" |
