---
dr_id: DR-0001
title: Ship MVP as a single static page — all content deferred to v2
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
  - Greenfield init interview, Round 1-2. User: "MVP is a single page with my name, a picture, and contacts (just email)."
revisit_if: Page is live on jpasse.com and the first content type (articles, talks, projects, or events) is ready to add.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0001` — Ship MVP as a single static page — all content deferred to v2

## Context and problem statement

We are defining the MVP for jpassedotcom, a software engineering portfolio site. The site will eventually list articles, talks, public projects, and upcoming events. We need to decide what ships first.

## Decision drivers

- The page needs to be live before there is content to populate it
- Content assets (articles, talks, projects, events descriptions) do not exist yet
- A live, minimal presence is better than a delayed, feature-rich one
- The domain (jpasse.com) is purchased and should serve something

## Options considered

| Option | Summary | Why not chosen |
| --- | --- | --- |
| Wait until content is ready | Build the full portfolio with articles, talks, projects, and events before shipping | Delays having any presence at all; content creation is unbounded |
| Ship progressively | Ship single page then add sections as content is created | Not chosen — this option *was* chosen and documented here |
| **Single page only for v1** | Name, photo, email link, and social links. Ship immediately. | **Chosen** |

## Decision outcome

The first release is a single static page with name, photo, email contact, and social links. Articles, talks, projects, events, blog, analytics, and dark mode are explicitly deferred to v2 or later. Brand refinement (colours, fonts, tone) is acknowledged as needed but deferred to a future release when it can be done in parallel.

## Consequences

- **Positive:** Something is live at jpasse.com immediately. The container exists before the content, so adding sections is additive work rather than redesign.
- **Negative:** The page is sparse. It may underwhelm a visitor who expects a full portfolio.
- **Accepted risk:** A sparse page is better than no page. The email link means a motivated visitor can still reach out.

## Evidence

| Source | What it establishes |
| --- | --- |
| Greenfield init interview, Round 1-2 (2025-08-10) | User confirmed MVP is single page with name, photo, email. All content sections deferred. |
