---
dr_id: DR-0004
title: Deploy to GitHub Pages with custom domain jpasse.com
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
  - Greenfield init interview, Round 3. User: "might as well do Github."
  - Domain jpasse.com purchased via Namecheap
revisit_if: GitHub Pages proves insufficient for a future need (e.g., server-side redirects, edge functions, or analytics requirements that Cloudflare Pages handles better).
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0004` — Deploy to GitHub Pages with custom domain jpasse.com

## Context and problem statement

jpassedotcom is a static site built with Astro. It needs a hosting platform that serves static files over HTTPS at the custom domain jpasse.com. We need to choose a deployment target.

## Decision drivers

- Static files only — no server runtime, no database
- Custom domain jpasse.com must be the primary URL
- HTTPS is mandatory
- Deployment should be as simple as pushing to a branch or triggering a GitHub Action
- Free tier is strongly preferred for a personal portfolio

## Options considered

| Option           | Summary                                                                                                                    | Why not chosen                                                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Cloudflare Pages | Global CDN, built-in analytics, automatic HTTPS, custom domain support                                                     | Requires Cloudflare account and DNS management on Cloudflare's nameservers; adds an external dependency when GitHub already hosts the repo |
| Vercel           | Optimized for frontend frameworks, automatic HTTPS, custom domain support                                                  | Free tier includes bandwidth limits and branding; another external account for a project already on GitHub                                 |
| Netlify          | Similar to Vercel, strong static site support                                                                              | Same tradeoffs as Vercel — another account, another platform                                                                               |
| **GitHub Pages** | Free, built into GitHub, custom domain support, automatic HTTPS via Let's Encrypt, deploy via branch push or GitHub Action | **Chosen**                                                                                                                                 |

## Decision outcome

The site deploys to GitHub Pages with the custom domain jpasse.com. Deployment is triggered by pushing to a `gh-pages` branch or via a GitHub Action that builds the Astro site and deploys the static output.

## Consequences

- **Positive:** Zero additional accounts or platforms. Repo and hosting are in the same place. Free. HTTPS included. Custom domain support is straightforward with a CNAME file and DNS configuration.
- **Negative:** No edge functions or server-side logic (not needed). Analytics require a third-party integration (not needed in v1). Build times are constrained by GitHub Actions free tier limits (irrelevant for a single-page site).
- **Accepted risk:** If the site eventually needs features GitHub Pages cannot provide (edge functions, server-side redirects, A/B testing), migration to Cloudflare Pages or Vercel is straightforward — the output is static files.

## Evidence

| Source                                          | What it establishes                                                |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| Greenfield init interview, Round 3 (2025-08-10) | User chose GitHub Pages. Domain jpasse.com confirmed on Namecheap. |
