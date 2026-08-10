# jpassedotcom

Personal site — a single page with who I am and how to reach me.

## What this is

The personal site of Jonathan Passe, software engineer. It serves as a professional presence on the web. It will grow to include articles, talks, public projects, and upcoming events.

## Success metrics

| Metric | Target | How measured |
| --- | --- | --- |
| Shipped | Live on jpasse.com | Navigate to the domain and see the page |

## MVP scope

- Single page with my name, a photo, and an email contact link
- Deployed and live at jpasse.com (domain purchased via Namecheap)

### Explicitly out of scope

| Not in v1 | Why | Deferred to |
| --- | --- | --- |
| Articles listing | Content doesn't exist yet; page needs to ship first | v2 |
| Talks listing | Content doesn't exist yet | v2 |
| Public projects listing | Content doesn't exist yet | v2 |
| Upcoming events listing | Content doesn't exist yet | v2 |
| Blog | Separate concern; portfolio page first | v2 |
| Analytics | Premature before traffic exists | v2 |
| Dark mode | Visual polish; ship the content first | v2 |

## Capabilities

- **View portfolio:** A visitor lands on jpasse.com and sees my name, a photo, and links to email and social profiles.

## Stack

| Layer | Choice | Why (short) |
| --- | --- | --- |
| Runtime | Node v26 | Available in environment; Astro runs on Node |
| Framework | Astro | Component-based SSG, Markdown-native, scales from one page to content-rich site |
| Infrastructure | GitHub Pages | Free, built into GitHub, custom domain jpasse.com with HTTPS |
| Data | None | Static site — no persistence needed |

Full architecture decisions: [`dr/adr/`](dr/adr/)

## Getting started

```bash
# Prerequisites: Node v26+, npm

# Install dependencies
npm install

# Run dev server
just dev

# Build for production
just build
```

## Testing

```bash
# Run test suite
just test

# Watch mode (re-runs on file change)
just test-watch

# Run all quality gates (lint + test + build)
just check
```

## Decisions

All decisions are recorded in [`dr/`](dr/) organized by type:
- [`adr/`](dr/adr/) — Architecture decisions
- [`sdr/`](dr/sdr/) — Scope decisions
- [`udr/`](dr/udr/) — UX decisions

See [`dr/DECISION_LOG.md`](dr/DECISION_LOG.md) for the full ledger.

## Agent instructions

See [`AGENT.md`](AGENT.md) for agentic conventions, skills, and constraints.
