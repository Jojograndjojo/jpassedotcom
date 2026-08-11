---
dr_id: DR-0006
title: "Photo-first layout with two-column desktop, single-column mobile, 36rem content width"
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
  - design-visuals interview, Round 1. User confirmed photo-first hierarchy, two-column desktop (photo right, text left), stacked mobile, 36rem content width.
revisit_if: Content sections added in v2 change the amount of text on the page, or analytics show a different content width would improve readability.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0006` — Photo-first layout with two-column desktop, single-column mobile, 36rem content width

## Context and problem statement

The homepage currently uses a single-column stacked layout: language toggle, name, photo (300×300), identity statement, contact links. The name appears before the photo. The content width is 36rem but the layout does not exploit desktop width. We are defining the first deliberate visual hierarchy for jpassedotcom.

## Decision drivers

- A visitor should form a human impression within the first second — a face achieves this faster than a name
- The page has minimal content (name, photo, two-sentence identity, two links) — a wide single column wastes desktop space and looks unintentional
- Mobile must remain legible and stacked — the layout must collapse gracefully
- 36rem is already established as the content width and is a proven readable line length

## Options considered

| Option                                                          | Summary                                                                                          | Why not chosen                                                                     |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Name-first, single column everywhere                            | Keep current order, stack everything                                                             | Feels like unstyled HTML; wastes desktop space; name-before-face is less immediate |
| Photo-left, text-right (two-column desktop)                     | Photo on the left, text on the right                                                             | Photo-left is conventional but the user preferred photo-right                      |
| **Photo-right, text-left (two-column desktop), stacked mobile** | Photo on the right, identity and links on the left at desktop; stacks to single column on mobile | **Chosen**                                                                         |

## Decision outcome

The homepage uses a two-column layout on viewports wide enough to support it (≥600px):

- **Left column:** name, identity statement, contact links
- **Right column:** photo (300×300)
- **Below 600px:** everything stacks to a single column — photo first, then name, identity, contact links
- **Content max-width:** 36rem (unchanged)

The photo leads visually (it appears first in the stacked mobile layout). The name is the first text element the eye goes to in both layouts.

## Consequences

- **Positive:** The page looks intentionally designed on desktop. The photo humanises the page immediately on mobile. The layout uses the established 36rem width efficiently.
- **Negative:** Two-column CSS adds complexity over the current single-column approach. The breakpoint (~600px) must be coordinated with the photo size so the text column doesn't become too narrow.
- **Accepted risk:** The two-column layout works with the current minimal content. If v2 adds more text (articles, talks), the layout may need to change — but that's a v2 concern.

## Evidence

| Source                                         | What it establishes                                                                           |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| design-visuals interview, Round 1 (2025-08-10) | User confirmed photo-first, photo-right/text-left on desktop, stacked on mobile, 36rem width. |
