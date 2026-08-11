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

## Code Style & Practices

### Test-Driven Development

Follow red-green-refactor:

1. **Red:** Write a test that fails. Run it to confirm the failure.
2. **Green:** Write the minimum code to pass. Run it to confirm the pass.
3. **Refactor:** Clean up while tests stay green.

Never write implementation before the test that exercises it. A passing test with no prior failing run is a warning sign — the test may be testing nothing.

### British English

Use British English spelling in all user-facing text and code comments:

- `colour`, not `color`
- `behaviour`, not `behavior`
- `organisation`, not `organization`
- `centre`, not `center`
- `analyse`, not `analyze`
- `licence` (noun), `license` (verb)

Variable names and code identifiers are exempt — `colorScheme` in TypeScript is fine.

### SOLID Principles

- **S — Single Responsibility:** Each Astro component, function, or module does exactly one thing. If a component renders a photo AND handles language switching, split it.
- **O — Open/Closed:** Prefer composition over modification. Add new behaviour by composing existing components, not by adding conditionals to their internals.
- **L — Liskov Substitution:** If a component accepts a prop typed as `ImageProps`, any subtype must work without the parent knowing the difference.
- **I — Interface Segregation:** Props interfaces are minimal. A component that only needs `src` and `alt` should not accept an entire `ImageMetadata` object.
- **D — Dependency Inversion:** High-level modules (pages) depend on abstractions (props interfaces), not on low-level modules (concrete API clients or file readers).

### Clean Code

- **Comments explain WHY, not WHAT.** The code tells what it does through structure and naming. A comment is for intent, constraints, or a non-obvious choice.
- **No commented-out code.** Delete it. Git remembers.
- **Meaningful names.** `getLocalisedGreeting(locale)` not `getGreeting(l)`.
- **Functions do one thing.** If the name needs an "and", it does two things.
- **Early returns** over deep nesting. A guard clause at the top beats an `if` wrapping the whole body.

### Modular Structure

- **Each Astro component has one reason to change.** A `PhotoCard.astro` renders a photo and caption. Language switching belongs elsewhere.
- **Extract reusable pieces into `src/components/`.** If the same markup appears in two places, it becomes a component.
- **Utilities live in `src/lib/`.** Pure functions with no Astro dependency — `formatDate`, `resolveLocale`, `validateEmail`.

### Separation of Concerns

- **Data, presentation, and interaction are separate.** An Astro page orchestrates data and passes it to components. A component renders markup. A script handles interaction.
- **Content lives in content files** (Markdown, YAML, or Astro content collections), not embedded in components.
- **i18n strings are never inlined in markup.** They live in translation files, keyed by locale. Components reference keys.

## Project Context

- **Domain:** Personal software engineering portfolio targeting potential clients and employers. Bilingual (English and French) from day one.
- **External dependencies:** None. The site is static. The domain jpasse.com is on Namecheap — DNS changes are manual and out of scope for the agent.
- **Known sharp edges:**
  - Astro is new to the author — expect learning-curve friction. Prefer clear explanations over clever solutions.
  - Bilingual content means every content change may need a French counterpart. Flag it when a change touches user-facing text.
  - The Astro build output directory feeds GitHub Pages. Don't move it without checking the deployment workflow.

## Astro Workflow

### Dev server

Use `npx astro` (not the Airflow CLI) for the dev server:

```bash
npx astro dev              # start dev server
```

Or use `just dev` from the justfile.

### Key Astro docs

Consult these before working on related tasks:

- [Routing — pages, dynamic routes, middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components — React, Vue, Svelte, etc.](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization (i18n)](https://docs.astro.build/en/guides/internationalization/) — **relevant: this project is bilingual (DR-0005)**

Full docs: https://docs.astro.build

## Decision Recording

Decisions live in `dr/<type>/` as `DR-nnnn-<slug>.md`.

| Type  | Directory | When to use                                                        |
| ----- | --------- | ------------------------------------------------------------------ |
| `adr` | `dr/adr/` | Architecture decisions — runtime, framework, infra, data, auth     |
| `sdr` | `dr/sdr/` | Scope decisions — what's in/out, capability boundaries, sequencing |
| `udr` | `dr/udr/` | UX decisions — interaction patterns, accessibility, design system  |

Numbering is global. Use `/skill:create-decision-record` to record new decisions.
The global ledger is `dr/DECISION_LOG.md`.
