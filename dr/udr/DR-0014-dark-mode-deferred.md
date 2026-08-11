---
dr_id: DR-0014
title: "Dark mode deferred to v2"
status: accepted
decision_type: udr
date: 2025-08-10
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: none
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 2. User confirmed dark mode deferred.
revisit_if: Analytics show significant evening/night traffic, or a user requests it.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0014` — Dark mode deferred to v2

## Context and problem statement

The site has a warm light palette (DR-0010). Dark mode was already deferred in the To-Be spec for the homepage. The design-visuals interview confirmed this posture: brand refinement ships first, dark mode follows when there's more content to read.

## Decision drivers

- The page has minimal text — dark mode adds little comfort gain for two sentences
- The warm palette is inherently light; a dark variant would need its own palette rather than a simple inversion
- Already deferred in the To-Be spec — this record formalises the deferral

## Decision outcome

Dark mode is deferred to v2. When activated, it will require a full second palette with light text, dark background, and accent adjustments — it cannot be a simple CSS invert. The CSS custom property architecture established in DESIGN_SYSTEM.md supports adding dark variants without restructuring.

## Evidence

| Source                                         | What it establishes                      |
| ---------------------------------------------- | ---------------------------------------- |
| design-visuals interview, Round 2 (2025-08-10) | User confirmed later.                    |
| `to_be_homepage.md` §5                         | Dark mode listed as out of scope for v1. |
