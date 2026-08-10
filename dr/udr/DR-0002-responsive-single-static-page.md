---
dr_id: DR-0002
title: Responsive single static page from day one
status: accepted
decision_type: udr
date: 2025-08-10
capabilities: []
trigger: design-time
concerns: []
designed_against: none
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - Greenfield init interview, Round 2. User: "Responsive from day one."
revisit_if: Analytics show zero mobile traffic over a meaningful window, or a redesign changes the UX posture.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0002` — Responsive single static page from day one

## Context and problem statement

We are designing the interaction for potential clients and employers visiting jpasse.com. The site is a single static page (name, photo, email, social links). We need to decide the UX posture: responsive or desktop-only.

## Decision drivers

- Target audience (employers, clients) will view on both desktop and mobile
- A portfolio that doesn't work on a phone signals carelessness
- Responsive design is table stakes for a personal site in 2025
- The MVP is a single page — responsiveness is low overhead

## Options considered

| Option | Summary | Why not chosen |
| --- | --- | --- |
| Desktop-first, mobile later | Ship desktop layout, add responsive breakpoints in v2 | Audience will view on phones from day one; not worth the rework |
| **Responsive from day one** | Layout adapts to viewport width; all content legible on any device | **Chosen** |

## Decision outcome

The page is responsive from day one. It must be legible and navigable on any viewport width. No JavaScript is required unless the chosen framework demands it — the page is static content with an email link and social link icons.

## Consequences

- **Positive:** The page works for any visitor on any device. No rework needed to add responsiveness later.
- **Negative:** Slightly more CSS work up front compared to a fixed-width desktop layout.
- **Accepted risk:** Minimal — responsive CSS for a single static page is well-trodden ground.

## Evidence

| Source | What it establishes |
| --- | --- |
| Greenfield init interview, Round 2 (2025-08-10) | User confirmed "Responsive from day one." |
