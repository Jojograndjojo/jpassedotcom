import { describe, it, expect } from "vitest";
import { INTRO_STEPS, advance, createIntroState, start } from "../lib/intro";

describe("Intro sequence state machine", () => {
  it("starts idle and not started", () => {
    const state = createIntroState();
    expect(state.step).toBe("idle");
    expect(state.started).toBe(false);
  });

  it("starts at open on start", () => {
    const state = start(createIntroState());
    expect(state.started).toBe(true);
    expect(state.step).toBe("open");
  });

  it("is idempotent — re-starting does not restart", () => {
    const started = start(createIntroState());
    const again = start(started);
    expect(again).toEqual(started);
  });

  it("progresses through the ordered steps", () => {
    let state = start(createIntroState());
    const seen = [state.step];
    while (state.step !== "complete") {
      state = advance(state);
      seen.push(state.step);
    }
    expect(seen).toEqual(["open", "scale", "rise", "name", "bio", "complete"]);
  });

  it("stays complete once complete", () => {
    let state = start(createIntroState());
    while (state.step !== "complete") {
      state = advance(state);
    }
    expect(advance(state).step).toBe("complete");
  });

  it("exposes the canonical step order", () => {
    expect(INTRO_STEPS).toEqual([
      "idle",
      "open",
      "scale",
      "rise",
      "name",
      "bio",
      "complete",
    ]);
  });
});
