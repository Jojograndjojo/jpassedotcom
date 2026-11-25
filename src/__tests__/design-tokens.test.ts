import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const css = readFileSync(
  join(__dirname, "..", "styles", "global.css"),
  "utf-8",
);

const expectedTokens = [
  // Colour
  "--color-background",
  "--color-text",
  "--color-text-muted",
  "--color-accent",
  "--color-accent-hover",
  "--color-secondary",
  "--color-leaf-green",
  "--color-calebasse",
  "--color-calebasse-rim",
  // Spacing
  "--space-xs",
  "--space-sm",
  "--space-md",
  "--space-lg",
  "--space-xl",
  "--content-width",
  // Motion
  "--duration-fast",
  "--duration-medium",
  "--duration-slow",
];

describe("Design tokens in global.css", () => {
  it("defines every token from DESIGN_SYSTEM.md", () => {
    for (const token of expectedTokens) {
      expect(css).toContain(token);
    }
  });
});
