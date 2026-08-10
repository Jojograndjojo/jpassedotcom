---
mode: as-is
spec_id: ASIS-HOMEPAGE-v1.0
capability_id: CAP-01-HOMEPAGE
capability: Homepage
lifecycle_stage: in-development
point_in_time: 2025-08-10
promoted_from: none
supersedes: none
authors:
  - name: Jonathan Passe
    role: Author
---

# As-Is Capability Specification: Homepage

## 1. Summary & Intent

An Astro project exists with a default scaffold page. No portfolio content, testing, linting, or deployment has been implemented. The `src/pages/index.astro` page renders "Astro" in an `<h1>` tag — the Astro starter kit boilerplate, unchanged. Five decision records in `dr/` capture intended architecture and scope, but none have been realized in code. The site is not deployed; it runs only on a local dev server.

## 2. Inherited Goals

| Id | Goal (past tense) | Evidence | Non-circular? | Confidence |
| --- | --- | --- | --- | --- |
| `GOL-01` | The capability **was built to** serve as a personal software engineering portfolio for Jonathan Passe, targeting potential clients and employers. | `[DOC-1]` `[SME-1]` | Yes — stated intent in README.md and confirmed by SME during greenfield-init | High |
| `GOL-02` | The capability **was built to** ship as a single static page (name, photo, email, social links) with all content sections deferred to v2. | `[DOC-2]` | Yes — DR-0001 records the explicit scope decision | High |
| `GOL-03` | The capability **was built to** be bilingual (English and French) from day one. | `[DOC-6]` | Yes — DR-0005 records the bilingual decision with rationale | High |
| `GOL-04` | The capability **was built to** be responsive on mobile and desktop from day one. | `[DOC-3]` | Yes — DR-0002 records the UX decision | High |
| `GOL-05` | The capability **was built to** use Astro as the static site generator, deployed to GitHub Pages with the custom domain jpasse.com. | `[DOC-4]` `[DOC-5]` | Yes — DR-0003 and DR-0004 record architecture decisions | High |
| `GOL-06` | The capability **was built to** be developed with Spec-Driven Development using create-as-is-spec, create-to-be-spec, and create-decision-record skills. | `[DOC-7]` | Yes — AGENT.md lists these as auto-load skills | High |

---

## 3. The Business Lens

### 3.1 Context

jpassedotcom is a personal software engineering portfolio. The domain jpasse.com is purchased via Namecheap but not yet configured. The project exists as a local Astro scaffold with two git commits: one adding documentation and decision records, one initializing the Astro project. No content has been written beyond the Astro starter boilerplate.

### 3.2 User Profiles (served today)

| Id | Profile | Served? | Evidence |
| --- | --- | --- | --- |
| `USR-VISITOR` | Any visitor to the local dev server at localhost:4321 | Partially — the site renders a page, but it says "Astro" and contains no portfolio content | `[CODE-1]` |

### 3.3 Business Processes (implemented today)

None. The site is a static page with no business processes.

### 3.4 Business Rules (enforced today)

None enforced. The intended bilingual requirement (DR-0005) and responsive requirement (DR-0002) are documented but not implemented: the page uses `<html lang="en">` with no French alternative, and includes a viewport meta tag (a framework default, not a deliberate responsive implementation).

| Id | Enforced statement (descriptive EARS) | Matches To-Be? | Evidence |
| --- | --- | --- | --- |
| `BR-LANG-01` | THE page declares `lang="en"` in the `<html>` element. | no ancestor — but contradicts DR-0005 (bilingual intent) | `[CODE-1]` |

### 3.5 Scenarios (exhibited today)

#### `SCN-01` — Local dev server renders default Astro page

> **Ancestry:** none. EMERGENT.

**Actor:** Developer
**Trigger:** `npm run dev` is executed

**Steps**

1. Developer runs `npm run dev` from the project root
2. Astro dev server starts on localhost:4321
3. Developer navigates browser to localhost:4321
4. Browser displays a page with "Astro" in an `<h1>` tag and Astro favicons

**Observed behaviour (descriptive EARS)**

| Id | Statement |
| --- | --- |
| `AC-01.1` | WHEN a developer runs `npm run dev` THE Astro dev server starts on localhost:4321. |
| `AC-01.2` | WHEN a browser requests localhost:4321 THE system serves an HTML page containing `<h1>Astro</h1>`. |
| `AC-01.3` | THE system serves favicon.ico and favicon.svg from the `public/` directory. |

**Error cases**

| Id | Statement |
| --- | --- |
| `ERR-01.1` | IF port 4321 is occupied THEN the Astro dev server fails to start with an address-in-use error. |

**Rules applied:** `BR-LANG-01`
**Source:** `[CODE-1]` `[CODE-2]`

---

## 4. The Technical Lens

### 4.1 Architecture (as built)

A single Astro page (`src/pages/index.astro`) with no components, no layouts, no content collections, and no integrations. The file is an Astro component with an empty frontmatter section and static HTML in the template. No CSS, no JavaScript, no imports.

```
src/
└── pages/
    └── index.astro    ← boilerplate: <h1>Astro</h1>
public/
├── favicon.ico
└── favicon.svg
```

### 4.2 Consumers (wired today)

| Id | Consumer | Protocol | Evidence |
| --- | --- | --- | --- |
| `CON-01` | Web browser (developer only) | HTTP/1.1, localhost:4321 | `[CODE-1]` |

### 4.3 Providers (integrated today)

None. No external APIs, no data sources, no CDN, no auth provider is integrated.

### 4.4 Topology (deployed today)

Not deployed. The project runs exclusively on a local Astro dev server (`astro dev`). There is no GitHub Actions workflow, no deployment configuration, and the custom domain jpasse.com is not configured. The `astro.config.mjs` file is empty — no site URL, no i18n configuration, no integrations.

### 4.5 Stack (in use today)

| Layer | What is actually running | Notes |
| --- | --- | --- |
| Runtime | Node.js (>=22.12.0 per package.json `engines`) | v26.7.0 confirmed in environment |
| Framework | Astro 7.2.0 | Default scaffold, no integrations |
| Package manager | npm | `package-lock.json` present |
| Language | TypeScript (Astro strict tsconfig) | No project-specific `.ts` files exist |
| Build | `astro build` → `dist/` | Default output directory; no custom configuration |

### 4.6 Cross-Functional Requirements

No obligations stated, ratified, or measured. The site is not deployed, so behaviour data does not exist. This is a legitimate blank at the in-development stage.

| Id | Category | Stated obligation | Ratification | Measured actual | Meets? | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `CFR-RESP-01` | A11Y | Viewport meta tag present (`<meta name="viewport" content="width=device-width">`) | Framework default (Astro scaffold includes this) | n/a — not deployed | n/a | `[CODE-1]` |

All other CFR categories (PERF, AVAIL, SEC, PRIV, OBS, COST) are blank. The project is pre-deployment; no SLOs, performance targets, or security requirements have been stated.

### 4.7 Quality Assurance (what actually runs)

Nothing runs. There are no tests, no linting configuration, no CI pipeline, and no pre-commit hooks. The `package.json` contains no test script. ESLint and Prettier are specified in AGENT.md but not installed or configured. Vitest is specified in AGENT.md but not installed or configured.

---

## 5. Known Gaps

| Id | Gap | Reason |
| --- | --- | --- |
| `GAP-01` | No portfolio content exists — the page displays "Astro" boilerplate | Implementation has not started; scaffolding is the only code `[CODE-1]` |
| `GAP-02` | Bilingual support is not implemented — `<html lang="en">` with no French alternative | DR-0005 records the intent, but Astro i18n is not configured `[CODE-1]` `[CODE-2]` |
| `GAP-03` | No tests exist | Vitest is specified in AGENT.md but not installed; no test files exist in the repository `[CODE-3]` `[DOC-7]` |
| `GAP-04` | No linting or formatting is configured | ESLint and Prettier are specified in AGENT.md but not installed or configured `[CODE-3]` `[DOC-7]` |
| `GAP-05` | No deployment mechanism exists | GitHub Pages is specified in DR-0004 but no GitHub Actions workflow or deployment configuration exists `[CODE-3]` `[DOC-5]` |
| `GAP-06` | Custom domain jpasse.com is not configured | Domain is purchased but no DNS or GitHub Pages custom domain configuration has been done `[DOC-5]` `[SME-1]` |
| `GAP-07` | No behaviour data is available | Site is not deployed; no telemetry, analytics, or production measurements exist |

---

## 6. Open Questions

| Id | Question | Owner | Needed by |
| --- | --- | --- | --- |
| `Q-01` | What is the photo to be used on the portfolio page? | Jonathan Passe | Before content is added to index.astro |
| `Q-02` | Which social links (beyond email) should appear on the page? | Jonathan Passe | Before content is added to index.astro |
| `Q-03` | What is the Astro i18n strategy — subdirectories (`/en/`, `/fr/`), subdomains, or query parameters? | Jonathan Passe | Before bilingual content is implemented |

---

## Appendix — Sources Ledger

| Id | Pillar | Reference | Retrieved | Confidence |
| --- | --- | --- | --- | --- |
| `CODE-1` | Code | `src/pages/index.astro` (commit 3dbd507) | 2025-08-10 | High |
| `CODE-2` | Code | `astro.config.mjs` (commit 3dbd507) | 2025-08-10 | High |
| `CODE-3` | Code | `package.json` (commit 3dbd507, modified post-commit for name) | 2025-08-10 | High |
| `CODE-4` | Code | `tsconfig.json` (commit 3dbd507) | 2025-08-10 | High |
| `CODE-5` | Code | `public/favicon.ico`, `public/favicon.svg` (commit 3dbd507) | 2025-08-10 | High |
| `DOC-1` | Business documentation | `README.md` (commit 25695e2) | 2025-08-10 | High |
| `DOC-2` | Business documentation | `dr/sdr/DR-0001-single-page-mvp-content-deferred.md` (commit 25695e2) | 2025-08-10 | High |
| `DOC-3` | Business documentation | `dr/udr/DR-0002-responsive-single-static-page.md` (commit 25695e2) | 2025-08-10 | High |
| `DOC-4` | Business documentation | `dr/adr/DR-0003-use-astro-as-ssg.md` (commit 25695e2) | 2025-08-10 | High |
| `DOC-5` | Business documentation | `dr/adr/DR-0004-deploy-github-pages-custom-domain.md` (commit 25695e2) | 2025-08-10 | High |
| `DOC-6` | Business documentation | `dr/sdr/DR-0005-bilingual-english-french.md` (commit 25695e2) | 2025-08-10 | High |
| `DOC-7` | Business documentation | `AGENT.md` (commit 25695e2, modified post-commit) | 2025-08-10 | High |
| `SME-1` | SME input | Jonathan Passe, author (greenfield-init interview) | 2025-08-10 | High |

**Pillars not consulted.** Behaviour data — the site is not deployed. No telemetry, analytics, or production measurements exist. This is expected at the in-development stage and is recorded as `GAP-07`.
