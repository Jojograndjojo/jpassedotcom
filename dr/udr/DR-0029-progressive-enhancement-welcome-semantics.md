---
dr_id: DR-0029
title: "Progressive enhancement and welcome semantics: reveal content in the DOM, welcome as a paragraph"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity, accessibility]
designed_against: DR-0015
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 5 (Q1–Q2). User accepted all recommended answers.
revisit_if: SEO audits show the revealed content is not indexed, or the welcome needs to become a section heading.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0029` — Progressive enhancement and welcome semantics: reveal content in the DOM, welcome as a paragraph

## Context and problem statement

The redesign makes the photo and details appear through a click-triggered animation. If the markup only renders that content *after* JavaScript runs, visitors without JS (and crawlers) would see an incomplete page — undercutting DR-0015's guarantee that identity is always visible. The welcome line is also new, and needs a semantic home in the document outline.

## Decision drivers

- Content must be reachable and indexable without JavaScript (SEO, robustness)
- The animation should decorate an already-complete page, not gate its content
- The `<h1>` is the name; the welcome is an invitation, not a section heading

## Options considered

| Option                                         | Summary                                                             | Why not chosen                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Render reveal content only after JS interaction | Photo/details injected into the DOM on click                       | No-JS and crawler users see nothing; fragile                            |
| Welcome as an `<h2>`                           | Give the invitation heading semantics                              | Creates a heading with no section under it; muddies the outline         |
| **Content in the DOM; welcome as `<p>`**       | Photo + details present by default; animation reveals them; welcome is a bold paragraph | **Chosen**                                                              |

## Decision outcome

- **Progressive enhancement:** the photo and detail pictures/captions are present in the HTML by default. The calebasse interaction is an enhancement that animates their reveal — nothing depends on JavaScript. Without JS, the full page (identity, photo, details) is simply visible.
- **Welcome semantics:** the invitation is a `<p>`, optionally `--font-weight-bold`. The `<h1>` remains the name.

## Consequences

- **Positive:** The page is complete without JS and fully crawlable; the document outline stays clean; the animation is pure enhancement.
- **Negative:** The reveal must be implemented as hide-then-animate rather than inject-then-render, which requires care to avoid a flash of content on load.
- **Accepted risk:** A brief visible state where the photo/details are shown pre-animation could occur if JS is slow. Accepted because it is the correct fallback and far better than hiding content.

## Evidence

| Source                                         | What it establishes                                                               |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| design-visuals interview, Round 5 (2026-11-12) | User accepted the no-JS DOM presence and welcome-as-paragraph decisions.          |
