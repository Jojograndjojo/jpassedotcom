---
dr_id: DR-0013
title: "Polish: dedicated OG image, minimal print stylesheet, 404 inherits global styles, no footer"
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
  - design-visuals interview, Round 5. User confirmed dedicated OG image, print stylesheet, 404 consolidation, and no footer.
revisit_if: Content sections in v2 warrant a footer, or the OG image needs updating with new branding.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0013` — Polish: dedicated OG image, minimal print stylesheet, 404 inherits global styles, no footer

## Context and problem statement

Several finishing details were unsettled after the core visual identity was defined: the social sharing preview image, print behaviour, the 404 page's style isolation, and whether the page needs a footer. These are small but collectively determine whether the site feels complete.

## Decision drivers

- The current OG image (`/main.jpg`, 300×300) will crop awkwardly in social cards — it's a square photo in a landscape frame
- Printing a portfolio page should produce clean output without nav chrome
- The 404 page currently duplicates global styles inline — it should inherit the design system
- A footer with only a copyright line adds noise, not value

## Decision outcome

**OG image:** A dedicated 1200×630 card using the design tokens: warm cream background (`#FEF5EF`), name in Titillium Web (`#143642`), and the accent (`#BF3100`) as a rule or small mark. Generated as a static asset in `public/og.jpg` or `public/og.png`.

**Print stylesheet:** A single `@media print` rule added to `global.css`:

```css
@media print {
  header {
    display: none;
  }
  body {
    color: #000;
    background: #fff;
  }
  a {
    color: #000;
    text-decoration: underline;
  }
}
```

**404 page:** Refactored to use the Base layout so it inherits `global.css`, the font stack, the colour palette, and the header with the language toggle. The 404-specific content (two-language "not found" message and home link) becomes a minimal component or inline content passed as a slot.

**Footer:** No footer. The page has no secondary navigation, no legal requirements, and no content to place in a footer. Revisit when v2 adds content sections.

## Consequences

- **Positive:** The site looks intentional when shared on social media. The print output is clean. The 404 page stops maintaining a parallel set of styles.
- **Negative:** The OG image is a manual asset to create and maintain. If the identity statement or palette changes, it must be regenerated.
- **Accepted risk:** The OG image is a one-time creation for a static page. If content changes frequently in v2, a build-time generation approach (via Astro) would be better — but that's a v2 concern.

## Evidence

| Source                                         | What it establishes                                                                    |
| ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| design-visuals interview, Round 5 (2025-08-10) | User confirmed dedicated OG image, print stylesheet, 404 consolidation, and no footer. |
