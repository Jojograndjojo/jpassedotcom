---
dr_id: DR-0003
title: Use Astro as static site generator
status: accepted
decision_type: adr
date: 2025-08-10
capabilities: []
trigger: design-time
concerns: []
designed_against: none
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - Greenfield init interview, Round 3. User: "I was thinking about using Astro."
  - Node v26.7.0 available in environment
revisit_if: Astro proves unsuitable for a content section (articles, talks, projects, events) within two iterations of adding that section.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0003` — Use Astro as static site generator

## Context and problem statement

jpassedotcom starts as a single static page but will grow to include articles, talks, public projects, and upcoming events — each a content section with its own template and potentially its own content format. We need a static site generator that supports incremental growth from a single page to a content-rich site without a migration step.

## Decision drivers

- MVP is a single page — the tooling must not be heavier than the product
- Future sections (articles, talks, projects, events) need content templating and Markdown support
- Author has not used Astro before — learning curve is a real factor
- Node v26.7.0 is available; the tool should run in that environment
- The site is deployed as static files — no server runtime

## Options considered

| Option          | Summary                                                                     | Why not chosen                                                                                              |
| --------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Plain HTML/CSS  | No build step, no framework                                                 | Would require a migration when content sections arrive; incremental cost of Astro is low enough to pay now  |
| 11ty (Eleventy) | Node-based SSG, simpler than Astro, strong Markdown support                 | Astro has better component model for the portfolio's visual sections; author expressed preference for Astro |
| Hugo            | Go-based SSG, very fast builds                                              | Requires Go toolchain; author doesn't have Go installed; Node is the available runtime                      |
| **Astro**       | Component-based SSG, Markdown-native, builds to static HTML, Node ecosystem | **Chosen**                                                                                                  |

## Decision outcome

Astro is the static site generator for jpassedotcom. The initial build outputs a single page. As content sections are added, Astro's content collections and Markdown support mean no migration — each section is additive.

## Consequences

- **Positive:** The tooling scales from one page to many without a migration. Astro's component model fits a portfolio (each section is a component). Markdown support means articles can be written in plain text.
- **Negative:** Learning curve — author has not used Astro before. The build step exists even for a single page, which plain HTML would avoid. Node module weight for a static page is disproportionate at v1.
- **Accepted risk:** If Astro proves too heavy or the learning curve blocks shipping, the MVP is small enough to rewrite in plain HTML in an afternoon. The decision is reversible at low cost.

## Evidence

| Source                                          | What it establishes                                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Greenfield init interview, Round 3 (2025-08-10) | User chose Astro. Node v26.7.0 confirmed available.                                              |
| Astro documentation (astro.build)               | Astro builds to static HTML by default, supports Markdown content collections, and runs on Node. |
