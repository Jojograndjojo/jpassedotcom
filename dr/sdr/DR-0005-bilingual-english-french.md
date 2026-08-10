---
dr_id: DR-0005
title: Bilingual site — English and French from day one
status: accepted
decision_type: sdr
date: 2025-08-10
capabilities: []
trigger: design-time
concerns: []
designed_against: none
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - Greenfield init interview, Round 3. User: "I would like to do french as well (as I am hoping to eventually target french speaking clients)."
revisit_if: Maintaining two languages for every content section proves unsustainable, or analytics show one language dominates and the other is unused.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0005` — Bilingual site — English and French from day one

## Context and problem statement

jpassedotcom targets potential clients and employers. The author is bilingual (English/French) and wants to reach French-speaking clients. We need to decide whether the site is monolingual or bilingual, and if bilingual, whether both languages ship in v1.

## Decision drivers

- Target audience includes French-speaking clients — a monolingual English site excludes them
- The MVP is a single page with minimal text — the cost of bilingual is low now and grows with each content section
- Starting bilingual avoids a retroactive translation pass across every section later

## Options considered

| Option | Summary | Why not chosen |
| --- | --- | --- |
| English only for v1, add French later | Ship English page, translate when French-speaking audience materializes | Retrofitting bilingual support across multiple content sections is more work than starting with it; the MVP text is minimal — the cost of French now is a few extra lines |
| **Bilingual from day one** | English and French versions of all content from the start | **Chosen** |

## Decision outcome

The site is bilingual from day one. Every content section (starting with the single-page MVP) is available in English and French. The implementation should make adding a new language to a content section as cheap as adding a translation file or a parallel Markdown document — not a restructure.

## Consequences

- **Positive:** French-speaking clients are first-class from day one. No retroactive translation pass. Bilingual posture signals professionalism to both audiences.
- **Negative:** Every content section requires translation work. The author is the translator — this is a time cost, not a tooling cost. Navigation between languages adds a UI element to the single page.
- **Accepted risk:** If maintaining two languages proves too heavy, the site can drop to English-only. The structure supports either posture.

## Evidence

| Source | What it establishes |
| --- | --- |
| Greenfield init interview, Round 3 (2025-08-10) | User confirmed bilingual requirement for French-speaking client targeting. |
