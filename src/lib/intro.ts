/**
 * Pure state machine for the on-load welcome intro.
 *
 * Models the ordered steps the intro runs through once, on page load:
 * open → scale → rise → name → bio → complete.
 * Kept free of DOM and timing so it can be unit-tested in isolation.
 */

export const INTRO_STEPS = [
  "idle",
  "open",
  "scale",
  "rise",
  "name",
  "bio",
  "complete",
] as const;

export type IntroStep = (typeof INTRO_STEPS)[number];

export interface IntroState {
  step: IntroStep;
  started: boolean;
}

export function createIntroState(): IntroState {
  return { step: "idle", started: false };
}

/** Begin the intro at the first animated step. Idempotent. */
export function start(state: IntroState): IntroState {
  if (state.started) {
    return state;
  }
  return { step: "open", started: true };
}

/** Advance to the next step, clamping at `complete`. */
export function advance(state: IntroState): IntroState {
  const index = INTRO_STEPS.indexOf(state.step);
  if (index === -1 || index === INTRO_STEPS.length - 1) {
    return state;
  }
  return { step: INTRO_STEPS[index + 1], started: true };
}
