---
dr_id: DR-0009
title: "Typography: Titillium Web with formalised type scale (1.75rem / 1rem / 0.875rem)"
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
  - design-visuals interview, Round 2. User selected Titillium Web and confirmed formalised type scale.
revisit_if: Titillium Web proves to have rendering issues on a target platform, or content sections in v2 require additional type sizes.
supersedes: none
review_flag: none
review_reason: n/a
---

# `DR-0009` — Typography: Titillium Web with formalised type scale

## Context and problem statement

The site currently uses a system font stack (`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`). The type scale is implicit: h1 at `1.75rem`, body at `1rem` (browser default), nav link at `0.875rem`, line-height at `1.6`. We are selecting a deliberate font and formalising the type tokens.

## Decision drivers

- The page is a personal portfolio — the font should convey personality without sacrificing readability
- A web font adds a download cost; it must justify that cost with distinctiveness
- The type scale already works — formalise it, don't redesign it
- Google Fonts is free, widely cached, and easy to self-host via Astro

## Options considered

| Option                 | Summary                                                                                   | Why not chosen                                           |
| ---------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Keep system font stack | Zero latency, native rendering on every platform                                          | User wanted more personality than a system font provides |
| **Titillium Web**      | Geometric sans-serif from Google Fonts, designed at the Accademia di Belle Arti di Urbino | **Chosen**                                               |

## Decision outcome

The primary font is **Titillium Web**, loaded from Google Fonts (weights 400 and 600). The system font stack is retained as the fallback.

| Token                   | Value                                                                                         | Role                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `--font-family-body`    | `"Titillium Web", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` | All text                                               |
| `--font-size-h1`        | `1.75rem`                                                                                     | Primary heading (name)                                 |
| `--font-size-body`      | `1rem`                                                                                        | Body text, contact links                               |
| `--font-size-small`     | `0.875rem`                                                                                    | Language toggle, secondary text                        |
| `--font-weight-normal`  | `400`                                                                                         | Body text                                              |
| `--font-weight-bold`    | `600`                                                                                         | Name heading                                           |
| `--line-height-body`    | `1.6`                                                                                         | Body text                                              |
| `--line-height-heading` | `1.3`                                                                                         | Name heading (slightly tighter for a single-line name) |

## Consequences

- **Positive:** Titillium Web gives the page a distinctive, modern character. It's a well-hinted font that renders cleanly at body sizes. The formalised scale makes future typography decisions trivial.
- **Negative:** Adds ~40KB of font download (two weights, Latin subset). First paint may show the fallback font during load (FOUT). Acceptable for a portfolio — the content is short, so the flash is brief.
- **Accepted risk:** Google Fonts is an external dependency. If it goes down, the system fallback renders the page legibly. For production hardening, the font can be self-hosted via Astro's font optimization.

## Evidence

| Source                                         | What it establishes                                                  |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| design-visuals interview, Round 2 (2025-08-10) | User selected Titillium Web and confirmed the formalised type scale. |
