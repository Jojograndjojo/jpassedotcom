# Welcome Page — Intro Animation Storyboard

> Draft 2 (decisions locked) · 2026-11-15
> Source frames: `Untitled_Artwork-1.png` → `Untitled_Artwork-17.png` (chronological by `-N`).
> Status: **storyboard locked** — ready for implementation.

---

## 1. Intent

A single, non-repeating **on-load intro** for the welcome/hero section. One continuous
motion: the **calebasse** spins 90° upright, the **portrait** appears beside it, the pair
**scales and rises**, then the **name** and **bio** fade in beneath.

Everything below is a _decoration_ on an already-complete page: the final state
(logo, portrait, name, bio) must exist in the served HTML and be visible without JS.

---

## 2. The calebasse and the "JP" monogram

The emblem is the **calebasse** (calabash gourd). The red shape in the frames is a
**"J" and a "P"** (Jonathan Passe), readable **only when the gourd is open**. The JP sits
**on the gourd's surface** and becomes legible **as it rotates open** (not drawn onto a
separate interior face).

- **Frame 1 (closed):** smooth half-dome; the red mark is an unreadable crest/shield with a
  small green counter — JP is _not_ legible yet.
- **Frames 2–7 (spin):** the gourd rotates from flat (horizontal) to upright (vertical,
  right end up) — a 90° in-plane spin. The JP patterns are still to be added by the author.

---

## 3. Asset inventory

| Element                              | Status        | Notes                                                                                  |
| ------------------------------------ | ------------- | -------------------------------------------------------------------------------------- |
| Portrait                             | ✅ Have asset | `public/main.jpg` (2000×2000, colour). **Apply `grayscale`** + circular crop (locked). |
| Calebasse gourd                      | ✅ Have asset | `public/calebasse.svg` (traced from frame 1, cleaned). JP patterns pending.            |
| "JP" monogram                        | ❌ To build   | New SVG path(s) on the gourd surface, legible once rotated open.                       |
| Name "Jonathan Passe"                | ✅ Text       | Existing i18n (`name`).                                                                |
| Bio paragraph                        | ⚠️ Text       | **Copy is final (EN).** No FR version yet → fall back to EN per `ERR-02.1`.            |

---

## 4. Timeline

Total ≈ **2.9s**, then idle. Easing reuses the existing motion tokens where they fit.

| Phase                        | Time (cum.) | Duration | Motion                                                                       | Easing                                      | Token                     |
| ---------------------------- | ----------- | -------- | ---------------------------------------------------------------------------- | ------------------------------------------- | ------------------------- |
| **P1 · Calebasse in & spin** | 0–900ms     | 900ms    | Gourd fades/scales in and **spins 90°** from flat (0°) to upright (−90°, right end up) | `ease-in-out` (spin), `ease-out` (fade-in) | `--duration-slow` (800ms) |
| **P2 · Portrait in**         | 900–1300ms  | 400ms    | Portrait **fades in** to the right of the gourd, equal size, same axis       | `ease-out`                                  | `--duration-medium`       |
| **P3 · Scale rebalance**     | 1300–1700ms | 400ms    | Portrait **scales up** (~2–3× the logo); logo holds small                    | `ease-in-out`                               | `--duration-medium`       |
| **P4 · Pair rises**          | 1700–2100ms | 400ms    | Logo + portrait **slide up** toward upper-middle, freeing space below        | `ease-in-out`                               | `--duration-medium`       |
| **P5 · Name in**             | 2100–2500ms | 400ms    | **"Jonathan Passe"** fades/slides in beneath the pair                        | `ease-out`                                  | `--duration-medium`       |
| **P6 · Bio in**              | 2500–2900ms | 400ms    | **Bio** fades in under the name                                              | `ease-out`                                  | `--duration-medium`       |

### Frame mapping

| Frames | Phase                                                                       |
| ------ | --------------------------------------------------------------------------- |
| 1–7    | P1 — gourd spins from flat (horizontal) to upright (vertical, right end up) |
| 8–10   | P2 — portrait fades in beside logo (equal circles)                          |
| 11–12  | P3 — portrait grows; logo becomes the small accent                          |
| 13–15  | P4 — pair moves up                                                          |
| 16     | P5 — name appears                                                           |
| 17     | P6 — bio appears; hero complete                                             |

---

## 5. Locked decisions (2026-11-15)

| #   | Question                   | Decision                                                                                |
| --- | -------------------------- | --------------------------------------------------------------------------------------- |
| 1   | Click-to-open vs. on-load? | **On-load.** The tree + menu concept is **parked for now** (not rendered in this pass). |
| 2   | Background                 | **Black** for the welcome/hero.                                                         |
| 3   | Portrait treatment         | **Grayscale** (filter) + circular crop.                                                 |
| 4   | End layout                 | **Centred** — logo+portrait above, name+bio below.                                      |
| 5   | JP placement               | **On the gourd surface** (patterns added later); legible once the gourd is upright.    |
| 6   | Bio copy                   | **Final (EN)**; no FR yet → FR falls back to EN.                                        |

---

## 6. Behavioural rules (aligns with existing spec)

- **On-load, once:** plays once per page load; no replay, no loop.
- **No-JS:** final state present in markup; the animation is progressive enhancement.
- **Reduced motion:** under `prefers-reduced-motion`, skip the animation — everything
  appears fully formed immediately (consistent with DR-0028).
- **FCP:** the intro does not gate first paint; content is in the HTML from the start.
- **Bilingual:** name stays i18n; bio uses EN for both until a FR string exists
  (`ERR-02.1` fallback).
- **Tree parked:** the tree/menu/ambient-loop markup and logic are removed or disabled for
  this pass; revisit later.
