# Design System — jpassedotcom

> Updated 2026-11-15 (dark theme + on-load intro — DR-0034, DR-0035, DR-0036).
> This file is the single source of truth for visual tokens.
> CSS implements these tokens; it does not define them.

---

## Colour Tokens

| Token                   | Value     | Role                                                              |
| ----------------------- | --------- | ----------------------------------------------------------------- |
| `--color-background`    | `#000000` | Page background — black (dark theme adopted, DR-0034)             |
| `--color-text`          | `#f5f5f5` | Body text, headings — near-white                                  |
| `--color-text-muted`    | `#bdbdbd` | Secondary text — bio paragraph                                    |
| `--color-accent`        | `#e05a2a` | Links, focus ring, JP monogram — red-orange (brightened for AA)   |
| `--color-accent-hover`  | `#ff9f1c` | Link hover, underline — amber                                     |
| `--color-secondary`     | `#0f8b8d` | Language toggle — teal                                            |
| `--color-leaf-green`    | `#2e7d32` | Reserved for the calebasse band (pending) + favicon leaf          |
| `--color-calebasse`     | `#c68b59` | Calebasse gourd body — warm tan (decorative)                      |
| `--color-calebasse-rim` | `#143642` | Calebasse rim/detail line — dark teal (decorative)                |

**Changed from the light palette (DR-0010):** background, text, and accent are now dark-theme
values. The accent brightened from `#BF3100` → `#E05A2A` to hold WCAG AA on black; the old
dark-teal text (`#143642`) is retained as `--color-calebasse-rim` for the gourd detail line.

**Contrast (WCAG AA) on `#000000`:**

| Foreground          | Background   | Ratio  | Result   |
| ------------------- | ------------ | ------ | -------- |
| `#f5f5f5` text      | `#000000` bg | 19.3:1 | ✅ AAA   |
| `#bdbdbd` muted     | `#000000` bg | 11.2:1 | ✅ AAA   |
| `#e05a2a` accent    | `#000000` bg | ~5.7:1 | ✅ AA    |
| `#ff9f1c` hover     | `#000000` bg | 10.2:1 | ✅ AAA   |
| `#0f8b8d` secondary | `#000000` bg | ~5.1:1 | ✅ AA    |
| `#c68b59` gourd     | `#000000` bg | —      | Decorative only — never text |

---

## Typography Tokens

| Token                   | Value                                                                                         | Role                            |
| ----------------------- | --------------------------------------------------------------------------------------------- | ------------------------------- |
| `--font-family-body`    | `"Titillium Web", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` | All text                        |
| `--font-size-h1`        | `1.75rem`                                                                                     | Primary heading (name)          |
| `--font-size-body`      | `1rem`                                                                                        | Body text, bio, links           |
| `--font-size-small`     | `0.875rem`                                                                                    | Language toggle, captions       |
| `--font-weight-normal`  | `400`                                                                                         | Body text                       |
| `--font-weight-bold`    | `600`                                                                                         | Name heading                    |
| `--line-height-body`    | `1.6`                                                                                         | Body text                       |
| `--line-height-heading` | `1.3`                                                                                         | Heading                         |

**Unchanged from DR-0009 / DR-0021.** Font source: Titillium Web via Google Fonts (weights 400, 600; Latin subset).

---

## Spacing Scale

| Token             | Value     | Role                                                   |
| ----------------- | --------- | ------------------------------------------------------ |
| `--space-xs`      | `0.25rem` | Tightest gap                                           |
| `--space-sm`      | `0.5rem`  | Small gap                                              |
| `--space-md`      | `1rem`    | Default gap (hero children, page edge padding)         |
| `--space-lg`      | `2rem`    | Large gap (brand-to-photo, contact links, page padding) |
| `--space-xl`      | `3rem`    | Section separation                                     |
| `--content-width` | `36rem`   | Max content column width                               |

---

## Breakpoints

| Token    | Value  | Role |
| -------- | ------ | ---- |
| `--bp-sm` | `600px` | Reserved (no two-column switch in the centred hero) |

The centred hero is a single column at every width; `600px` no longer triggers a layout switch.

---

## Layout

- **Single centred hero** (DR-0035): calebasse + portrait in a row, name below, bio below,
  contact links below — all centred on a black canvas.
- **Identity always visible**: name, bio, email, LinkedIn are in the served markup; the
  on-load intro only *reveals* them visually.
- **Tree + menu parked** (DR-0036): the branch, menu leaves, and ambient loop are removed for
  this iteration.
- **Language toggle:** top-right in the header, unchanged (DR-0007).

---

## Motion Tokens

| Token                | Value  | Role                                       |
| -------------------- | ------ | ------------------------------------------ |
| `--duration-fast`    | `150ms` | Micro-interactions (hover, focus, colour) |
| `--duration-medium`  | `400ms` | Portrait, scale, rise, name, bio entrances |
| `--duration-slow`    | `800ms` | The calebasse rotation reveal             |

**Easing:** `ease-out` for entrances; `ease-in-out` for transforms (the rotation reveal).

**On-load intro choreography (DR-0035):** runs once per page load, ~2.9s total.

| Phase | Time (cum.) | Motion                                    | Easing |
| ----- | ----------- | ----------------------------------------- | ------ |
| open  | 0–900ms     | Calebasse spins 90°: flat (0°) → upright (−90°, right end up) | `ease-in-out` |
| portrait | 900–1300ms | Portrait fades in at logo scale           | `ease-out` |
| scale | 1300–1700ms | Portrait grows to full size               | `ease-in-out` |
| rise  | 1700–2100ms | Brand + portrait slide up                 | `ease-in-out` |
| name  | 2100–2500ms | Name fades/slides in                      | `ease-out` |
| bio   | 2500–2900ms | Bio + contact links fade in               | `ease-out` |

**Reduced motion (DR-0028):** under `prefers-reduced-motion`, the intro is skipped — everything
appears fully formed immediately.

---

## Image Tokens

| Property              | Value                          |
| --------------------- | ------------------------------ |
| Photo width           | `280px`                        |
| Photo border-radius   | `50%` (circle)                 |
| Photo treatment       | `filter: grayscale(100%)`      |
| Photo border          | none                           |

**Loading:** main photo eager.

---

## Symbol Tokens

| Symbol     | Token / value                                        | Notes                                        |
| ---------- | ---------------------------------------------------- | -------------------------------------------- |
| Calebasse  | Body `#C68B59`; rim `#143642`                        | Placeholder gourd; band + JP patterns pending |
| Favicon    | Leaf mark `#2E7D32` on rounded square                | Unchanged (DR-0024)                          |
| Tree/menu  | —                                                    | Parked this iteration (DR-0036)              |

---

## Interaction Tokens

| Token                | Value                                             | Role                                        |
| -------------------- | ------------------------------------------------- | ------------------------------------------- |
| Link rest colour     | `#E05A2A`                                         | Red-orange, no underline                    |
| Link hover colour    | `#FF9F1C`                                         | Amber, underline appears                    |
| Link focus           | `outline: 2px solid #E05A2A; outline-offset: 2px` | Custom focus ring                           |
| Transition           | `var(--duration-fast) ease`                       | Hover/colour changes                        |
| Language toggle rest | `#0F8B8D`                                         | Secondary teal, same interaction pattern    |

The calebasse is no longer a button — it is decorative (`aria-hidden`). There is no interaction
to gate the reveal.

---

## Print Stylesheet

```css
@media print {
  header { display: none; }
  .hero__brand { display: none; } /* hide the calebasse */
  .hero__photo img { filter: none; }
  body { color: #000; background: #fff; }
  a { color: #000; text-decoration: underline; }
}
```

---

## Decisions

| DR      | Title                                                                        |
| ------- | ---------------------------------------------------------------------------- |
| DR-0006 | Photo-first layout, two-column desktop — **superseded by DR-0035**           |
| DR-0010 | Colour palette: warm cream, dark teal, red-orange accent — **superseded by DR-0034** |
| DR-0011 | Photo treatment: circular crop, subtle border, 300px desktop — **updated by DR-0035** |
| DR-0014 | Dark mode deferred to v2 — **superseded by DR-0034**                         |
| DR-0015 | Homepage hierarchy: calebasse gates photo + details — **superseded by DR-0035** |
| DR-0017 | Single-scene composition: tree grows out of the opened calebasse — **parked by DR-0036** |
| DR-0019 | Tree menu orientation — **parked by DR-0036**                                |
| DR-0026 | Entrance choreography: click-triggered hinge open — **superseded by DR-0035** |
| DR-0027 | Red-green-refactor cycle ambient loop — **parked by DR-0036**                |
| DR-0034 | Dark theme adopted now: black background, light text, brightened accent      |
| DR-0035 | Welcome hero: centred layout, on-load intro, calebasse JP monogram           |
| DR-0036 | Park the tree + menu + ambient loop for this iteration                       |
