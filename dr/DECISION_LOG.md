# Decision Log

| DR      | Type | Title                                                                     | Status   | Date       |
| ------- | ---- | ------------------------------------------------------------------------- | -------- | ---------- |
| DR-0001 | sdr  | Ship MVP as a single static page — all content deferred to v2             | accepted | 2025-08-10 |
| DR-0002 | udr  | Responsive single static page from day one                                | accepted | 2025-08-10 |
| DR-0003 | adr  | Use Astro as static site generator                                        | accepted | 2025-08-10 |
| DR-0004 | adr  | Deploy to GitHub Pages with custom domain jpasse.com                      | accepted | 2025-08-10 |
| DR-0005 | sdr  | Bilingual site — English and French from day one                          | accepted | 2025-08-10 |
| DR-0006 | udr  | Photo-first layout, two-column desktop, single-column mobile, 36rem width | superseded (DR-0035) | 2025-08-10 |
| DR-0007 | udr  | Language toggle top-right in header                                       | accepted | 2025-08-10 |
| DR-0008 | udr  | Spacing scale: 0.25, 0.5, 1, 2rem steps                                   | accepted | 2025-08-10 |
| DR-0009 | udr  | Typography: Titillium Web with formalised type scale                      | accepted | 2025-08-10 |
| DR-0010 | udr  | Colour palette: warm cream, dark teal, red-orange accent                  | superseded (DR-0034) | 2025-08-10 |
| DR-0011 | udr  | Photo treatment: circular crop, subtle border, 300px desktop              | superseded (DR-0035) | 2025-08-10 |
| DR-0012 | udr  | Interaction states: accent links, amber hover, focus ring                 | accepted | 2025-08-10 |
| DR-0013 | udr  | Polish: OG image, print stylesheet, 404 consolidation, no footer          | accepted | 2025-08-10 |
| DR-0014 | udr  | Dark mode deferred to v2                                                  | superseded (DR-0034) | 2025-08-10 |
| DR-0015 | udr  | Homepage hierarchy: identity always visible, calebasse gates photo + details | superseded (DR-0035) | 2026-11-12 |
| DR-0016 | udr  | Two-width canvas: 36rem text column plus 48rem stage, 3rem stage spacing  | accepted | 2026-11-12 |
| DR-0017 | udr  | Single-scene composition: tree grows out of the opened calebasse          | parked (DR-0036) | 2026-11-12 |
| DR-0018 | udr  | Reveal layout: main picture into two-column, details cascade below        | accepted | 2026-11-12 |
| DR-0019 | udr  | Tree menu orientation: horizontal branch desktop, vertical stem mobile    | parked (DR-0036) | 2026-11-12 |
| DR-0020 | udr  | Symbol colours: leaf green + calebasse tan, red and branch reuse tokens   | accepted | 2026-11-12 |
| DR-0021 | udr  | Typography carried forward; welcome line reuses existing scale            | accepted | 2026-11-12 |
| DR-0022 | udr  | Symbol illustration: minimal flat SVG, stylised single-path leaves        | accepted | 2026-11-12 |
| DR-0023 | udr  | Revealed imagery: circular portrait retained, details as rounded-rect cards | accepted | 2026-11-12 |
| DR-0024 | udr  | Favicon: leaf mark replaces the JP monogram                               | accepted | 2026-11-12 |
| DR-0025 | udr  | Motion tokens: three named durations + easing language                    | accepted | 2026-11-12 |
| DR-0026 | udr  | Entrance choreography: button hinge open, branch draw-on, leaf stagger    | superseded (DR-0035) | 2026-11-12 |
| DR-0027 | udr  | Red-green-refactor cycle as separate ambient loop, menu stays stable      | parked (DR-0036) | 2026-11-12 |
| DR-0028 | udr  | Reduced motion fallbacks + symbol interaction states                      | accepted | 2026-11-12 |
| DR-0029 | udr  | Progressive enhancement: reveal in DOM; welcome as a paragraph            | accepted | 2026-11-12 |
| DR-0030 | udr  | Polish: print hides scene, lazy detail images, OG card unchanged          | accepted | 2026-11-12 |
| DR-0031 | udr  | Drop the dedicated OG card; keep /main.jpg as the social preview image    | accepted | 2026-11-12 |
| DR-0032 | adr  | Serve the root language redirect client-side instead of Accept-Language   | accepted | 2026-11-12 |
| DR-0033 | sdr  | FCP stays a Lighthouse 'warn' assertion, not a hard CI gate this iteration | accepted | 2026-11-12 |
| DR-0034 | udr  | Dark theme adopted now: black background, light text, brightened accent   | accepted | 2026-11-15 |
| DR-0035 | udr  | Welcome hero: centred layout, on-load intro, calebasse JP monogram        | accepted | 2026-11-15 |
| DR-0036 | sdr  | Park the tree, menu, and ambient loop for the welcome redesign            | accepted | 2026-11-15 |
