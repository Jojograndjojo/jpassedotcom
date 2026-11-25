---
dr_id: DR-0032
title: "Serve the root language redirect client-side instead of via server Accept-Language"
status: accepted
decision_type: adr
date: 2026-11-12
capabilities: [homepage]
trigger: divergence
concerns: [SCN-01, SCN-02]
designed_against: TOBE-HOMEPAGE-v1.0
observed_in: none
deciders:
  - Jonathan Passe, author
evidence:
  - src/pages/index.astro (read 2026-11-12) — client-side navigator.language redirect with fallback links
  - astro.config.mjs (read 2026-11-12) — i18n with prefixDefaultLocale, en/fr locales
  - .github/workflows/deploy.yml (read 2026-11-12) — GitHub Pages static deployment
revisit_if: The site moves to a host with server-side routing, or a middleware layer is added.
supersedes: none
review_flag: specification
review_reason: The spec specified a server-side mechanism that the chosen host cannot provide, and no feasibility check caught it.
---

# `DR-0032` — Serve the root language redirect client-side instead of via server Accept-Language

## Context and problem statement

`TOBE-HOMEPAGE-v1.0` §4.1 specified the i18n strategy as subdirectory routing (`/en/`, `/fr/`) with "the root `/` redirecting based on `Accept-Language`". Reality: GitHub Pages serves static files with no server runtime, so the root redirect is implemented client-side in `src/pages/index.astro` via `navigator.language`, with no-JS fallback links to `/en/` and `/fr/`.

## Decision drivers

- GitHub Pages is static-only (DR-0004) — there is no server to read the `Accept-Language` header
- A redirect must still work when JavaScript is disabled, hence the fallback links
- Subdirectory routing itself is unchanged and remains the correct choice for static hosting

## Options considered

| Option | Summary | Why not chosen |
| --- | --- | --- |
| Server-side `Accept-Language` redirect (as specified) | The server inspects the header and redirects | Infeasible on GitHub Pages — no server runtime |
| **Client-side `navigator.language` redirect with no-JS fallback** | JS picks the locale; static links cover no-JS | **Chosen** |

## Decision outcome

The root `/` page performs a client-side language redirect: `navigator.language` starting with `fr` goes to `/fr/`, otherwise `/en/`. A no-JS fallback renders two plain links (`/en/` and `/fr/`). Subdirectory routing is unchanged.

**Effect on the next To-Be:** the next To-Be SHALL specify the root redirect as client-side (`navigator.language`) with a no-JS fallback, and SHALL NOT require server-side `Accept-Language` handling.

## Consequences

- **Positive:** Works on the chosen static host; degrades gracefully without JS; already implemented and tested.
- **Negative:** The redirect is JS-dependent (a crawler or JS-disabled visitor sees the fallback links, not an automatic redirect); the chosen locale is the *browser's*, not a server-negotiated preference.
- **Accepted risk:** The browser locale is a close-enough proxy for the visitor's preference, and the language toggle remains reachable for corrections.

## Evidence

| Source | What it establishes |
| --- | --- |
| `src/pages/index.astro` (read 2026-11-12) | The redirect is client-side with fallback links |
| `astro.config.mjs` (read 2026-11-12) | Subdirectory i18n is configured |
| `.github/workflows/deploy.yml` (read 2026-11-12) | Hosting is static GitHub Pages |

## Optimisation review flag

**Flag:** `specification`

**What the process failed to catch:** The To-Be specified a mechanism the chosen host cannot provide, and neither the Technical Lens nor any review surfaced the infeasibility before implementation.

**Candidate improvement:** Add a "feasible on the chosen host?" check to the Technical Lens authoring step, so server-dependent mechanisms on static hosting are caught at spec time.
