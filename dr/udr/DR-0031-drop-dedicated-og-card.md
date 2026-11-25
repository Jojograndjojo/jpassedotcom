---
dr_id: DR-0031
title: "Drop the dedicated OG card; keep /main.jpg as the social preview image"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: abandoned
concerns: []
designed_against: TOBE-HOMEPAGE-v1.0
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - src/layouts/Base.astro (read 2026-11-12) — og:image points to /main.jpg
  - dr/udr/DR-0013-polish-og-print-404-footer.md — specified a dedicated 1200x630 card
  - To-Be reconciliation conversation (2026-11-12) — user: "keep and drop"
revisit_if: Social sharing previews crop /main.jpg badly enough to matter, or a branded share card is commissioned.
supersedes: DR-0013
review_flag: harness
review_reason: A specified asset was silently never built, and nothing at promotion time caught the absence.
---

# `DR-0031` — Drop the dedicated OG card; keep /main.jpg as the social preview image

## Context and problem statement

DR-0013 (carried into `TOBE-HOMEPAGE-v1.0`) specified a dedicated 1200×630 OG card using the design tokens. Reality: `src/layouts/Base.astro` sets `og:image` to `/main.jpg`, and no dedicated card was ever generated. The item was desired last iteration, not built, and is now no longer wanted.

## Decision drivers

- The redesign should not block on generating and maintaining an extra static asset
- The square photo crops acceptably in a landscape share frame for a personal site
- The dedicated card would be a manual asset to regenerate whenever the palette or identity changes (already noted as a cost in DR-0013)

## Options considered

| Option | Summary | Why not chosen |
| --- | --- | --- |
| Dedicated 1200×630 card (DR-0013) | Generate a static share card from the design tokens | Extra asset to make and maintain; not worth blocking the redesign |
| **Keep `/main.jpg` as `og:image`** | Use the existing square photo as the share preview | **Chosen** |

## Decision outcome

The social preview image stays `/main.jpg`. There is no dedicated OG card.

**Effect on the next To-Be:** the next To-Be SHALL specify `og:image` as `/main.jpg` and SHALL NOT reference a dedicated OG card.

## Consequences

- **Positive:** One fewer asset to generate and maintain; the redesign proceeds without an OG-image task in its path.
- **Negative:** The square photo will crop in landscape share frames (the exact problem DR-0013 set out to fix).
- **Accepted risk:** A cropped share preview on a personal portfolio is low-impact; revisit only if social sharing becomes important.

## Evidence

| Source | What it establishes |
| --- | --- |
| `src/layouts/Base.astro` (read 2026-11-12) | `og:image` currently resolves to `/main.jpg` |
| `dr/udr/DR-0013` | The dedicated card was specified but never produced |
| Reconciliation conversation (2026-11-12) | User confirmed dropping the card and keeping `/main.jpg` |

## Optimisation review flag

**Flag:** `harness`

**What the process failed to catch:** A specified deliverable (the card) was silently absent from the built site, and no check flagged it.

**Candidate improvement:** An automated SEO assertion (e.g. `og:image` points to the agreed asset) in the CI test suite, or a promotion checklist that verifies every design-asset decision against the built output.
