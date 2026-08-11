import { describe, it, expect } from "vitest";
import { getTranslation } from "../lib/i18n";

describe("i18n", () => {
  it("returns English translation for a known key", () => {
    const result = getTranslation("en", "name");
    expect(result).toBe("Jonathan Passe");
  });

  it("returns French translation for a known key", () => {
    const result = getTranslation("fr", "name");
    expect(result).toBe("Jonathan Passe");
  });

  it("returns key name as fallback when translation is missing", () => {
    const result = getTranslation("en", "nonexistent.key");
    expect(result).toBe("nonexistent.key");
  });

  it("returns English fallback when locale is unsupported", () => {
    const result = getTranslation("de", "name");
    expect(result).toBe("Jonathan Passe");
  });
});
