---
dr_id: DR-0011
title: "Photo treatment: circular crop with subtle border, 300px desktop, fluid on mobile"
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
  - design-visuals interview, Round 3. User confirmed circle crop with subtle border, 300px desktop, fluid mobile.
revisit_if: The photo is replaced with a different image that has a different composition or aspect ratio.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0011` — Photo treatment: circular crop with subtle border, 300px desktop, fluid on mobile

## Context and problem statement

The homepage photo (`/main.jpg`) is currently displayed as a 300×300 square with no border-radius, no border, and no shadow. We are defining its shape and treatment to match the new warm palette (DR-0010) and two-column layout (DR-0006).

## Decision drivers

- The photo should feel intentional, not like a raw asset dropped on the page
- The treatment should work with the warm cream background (`#FEF5EF`) and dark teal text (`#143642`)
- The photo must remain legible at all viewport sizes
- The existing `max-width: 100%` responsive behaviour already works and should be preserved

## Options considered

| Option                        | Summary                                                      | Why not chosen                                                                    |
| ----------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Square, no border             | Current state                                                | Feels unfinished against the deliberate palette                                   |
| Circle, no border             | Friendly, clean                                              | The photo edge can blend into the cream background depending on the image content |
| **Circle with subtle border** | `border-radius: 50%`, thin border using the secondary accent | **Chosen**                                                                        |

## Decision outcome

The photo is displayed as a circle (`border-radius: 50%`) with a subtle border:

| Property        | Value               | Rationale                                    |
| --------------- | ------------------- | -------------------------------------------- |
| `border-radius` | `50%`               | Circle crop                                  |
| `border`        | `2px solid #0F8B8D` | Subtle definition using the secondary accent |
| `width`         | `300px`             | Desktop size                                 |
| `max-width`     | `100%`              | Fluid on mobile (inherited)                  |
| `height`        | `auto`              | Maintains aspect ratio (inherited)           |

The favicon (JP initials SVG) is unchanged — it was already settled as part of v1.

## Consequences

- **Positive:** The circle crop immediately signals "person." The subtle teal border ties the photo to the palette without shouting. The photo survives any background colour change.
- **Negative:** `border-radius: 50%` only works if the image is square. The current photo is 300×300, so this holds. If replaced with a non-square image, it will need `object-fit: cover`.
- **Accepted risk:** If the photo's edges are close to the subject's head, a circle crop can clip awkwardly. The current photo has enough headroom.

## Evidence

| Source                                         | What it establishes                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------------- |
| design-visuals interview, Round 3 (2025-08-10) | User confirmed circle crop, subtle border, 300px desktop, fluid mobile. |
