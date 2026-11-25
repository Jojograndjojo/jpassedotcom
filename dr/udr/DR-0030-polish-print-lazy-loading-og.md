---
dr_id: DR-0030
title: "Polish: print hides the decorative scene, detail images lazy-load, OG card unchanged"
status: accepted
decision_type: udr
date: 2026-11-12
capabilities: [homepage]
trigger: design-visuals
concerns: [visual-identity]
designed_against: DR-0013
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - design-visuals interview, Round 5 (Q3–Q5). User accepted all recommended answers.
revisit_if: The OG image is regenerated to include the leaf mark, or a footer becomes necessary in v2.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0030` — Polish: print hides the decorative scene, detail images lazy-load, OG card unchanged

## Context and problem statement

DR-0013 settled the OG image, print stylesheet, 404, and footer for the original static page. The redesign adds an animated scene (gourd + tree) and below-the-fold detail images, which the existing print and loading behaviour do not account for.

## Decision drivers

- A printed portfolio should include the picture and identity, not the interactive decoration
- Below-the-fold detail images should not cost first-paint bandwidth (`CFR-PERF-01`)
- The OG card already exists and works; changing it is cosmetic and non-blocking

## Options considered

| Option                                        | Summary                                                              | Why not chosen                                                             |
| --------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Print the whole scene                         | Gourd and tree included in print output                              | Prints decorative chrome that means nothing on paper                       |
| Eager-load all images                         | Load main + details immediately                                      | Wastes bandwidth on below-fold images; hurts FCP                          |
| Regenerate the OG card now                    | Add the leaf mark to the social card                                 | Cosmetic; not worth blocking this pass                                     |
| **Hide scene in print; lazy details; keep OG** | Extend print to hide decorations, lazy-load details, leave OG as-is  | **Chosen**                                                                 |

## Decision outcome

- **Print:** extend the DR-0013 `@media print` rule to hide the decorative scene (gourd, tree, ambient loop) while showing the photo and details as normal, alongside name and contact.
- **Image loading:** the main portrait loads eagerly; detail pictures use `loading="lazy" decoding="async"`.
- **OG image:** unchanged from DR-0013 (the dedicated 1200×630 card). Regenerate only if the leaf/calebasse mark is wanted on it later.

## Consequences

- **Positive:** Clean printed output; faster first paint; no churn on an already-working asset.
- **Negative:** The print rule must be coordinated with the reveal state so the photo is never hidden by an un-revealed animation state.
- **Accepted risk:** Lazy loading below-fold details is standard and low-risk; the main risk is forgetting the print rule when the scene markup lands.

## Evidence

| Source                                         | What it establishes                                                                  |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| design-visuals interview, Round 5 (2026-11-12) | User accepted print hiding the scene, lazy detail images, and an unchanged OG card.  |
