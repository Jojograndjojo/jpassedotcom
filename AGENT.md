# Agent Instructions — jpassedotcom

## Auto-Load Skills

- `create-as-is-spec` — capture current reality of a capability
- `create-to-be-spec` — design the next iteration of a capability
- `create-decision-record` — record decisions during reconciliation and development
- `incorporate-feedback` — capture, triage, and apply reviewer feedback on content
- `greenfield-init` — scaffold new projects within this repository

## Conventions

### Language & runtime

- **Language:** TypeScript (via Astro)
- **Runtime version:** Node v26
- **Package manager:** npm

### Testing

- **Framework:** Vitest
- **Expectation:** Unit tests for components and utilities. At minimum, a smoke test that the page renders in English and French and all links resolve.
- **Command:** `npx vitest run`

### Linting & formatting

- **Linter:** ESLint (with eslint-plugin-astro)
- **Formatter:** Prettier
- **Command:** `npx eslint . && npx prettier --check .`

### Git workflow

- **Branching:** Trunk-based on `main`
- **Commit style:** Conventional commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`)
- **PR expectations:** Squash merge. No PR required for solo work — push directly to `main` unless you prefer review.

## Constraints

- Never commit without explicit user approval
- Never modify the DNS or domain configuration for jpasse.com (manual, on Namecheap)
- Never add a dependency without explaining why and getting approval
- Never change the Astro build output directory without confirmation (GitHub Pages deployment may depend on it)
- Never invent placeholder content — the photo, bio text, and any article drafts are personal. Ask before generating or committing content.

## Project Context

- **Domain:** Personal software engineering portfolio targeting potential clients and employers. Bilingual (English and French) from day one.
- **External dependencies:** None. The site is static. The domain jpasse.com is on Namecheap — DNS changes are manual and out of scope for the agent.
- **Known sharp edges:**
  - Astro is new to the author — expect learning-curve friction. Prefer clear explanations over clever solutions.
  - Bilingual content means every content change may need a French counterpart. Flag it when a change touches user-facing text.
  - The Astro build output directory feeds GitHub Pages. Don't move it without checking the deployment workflow.

## Decision Recording

Decisions live in `dr/<type>/` as `DR-nnnn-<slug>.md`.

| Type | Directory | When to use |
| --- | --- | --- |
| `adr` | `dr/adr/` | Architecture decisions — runtime, framework, infra, data, auth |
| `sdr` | `dr/sdr/` | Scope decisions — what's in/out, capability boundaries, sequencing |
| `udr` | `dr/udr/` | UX decisions — interaction patterns, accessibility, design system |

Numbering is global. Use `/skill:create-decision-record` to record new decisions.
The global ledger is `dr/DECISION_LOG.md`.
