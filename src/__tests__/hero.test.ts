import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const enHtml = readFileSync(
  join(__dirname, "..", "..", "dist", "en", "index.html"),
  "utf-8",
);
const frHtml = readFileSync(
  join(__dirname, "..", "..", "dist", "fr", "index.html"),
  "utf-8",
);

describe("Homepage hero (SCN-01)", () => {
  it("renders the name as a heading", () => {
    expect(enHtml).toMatch(/<h1[^>]*>\s*Jonathan Passe/);
  });

  it("renders the English bio", () => {
    expect(enHtml).toContain(
      "bridge the gap between technical architecture and human knowledge",
    );
  });

  it("renders the French bio", () => {
    expect(frHtml).toContain("Je fais le pont entre");
  });

  it("includes an email contact link", () => {
    expect(enHtml).toMatch(/mailto:/);
  });

  it("includes a LinkedIn link", () => {
    expect(enHtml).toContain("linkedin.com/in/jonathan-passe");
  });

  it("includes a grayscale-capable photo with alt text", () => {
    expect(enHtml).toMatch(/<img[^>]+alt="[^"]+"/);
    expect(enHtml).toContain('src="/main.jpg"');
  });

  it("renders the calebasse brand mark", () => {
    expect(enHtml).toContain('src="/calebasse.svg"');
    expect(enHtml).toContain("hero__calebasse");
  });

  it("starts the hero in the idle step for the intro", () => {
    expect(enHtml).toContain("data-hero");
    expect(enHtml).toContain('data-step="idle"');
  });

  it("does not render the parked tree or menu", () => {
    expect(enHtml).not.toContain("scene__tree");
    expect(enHtml).not.toContain("scene__ambient");
    expect(enHtml).not.toContain("Articles");
  });

  it("has no click-gating calebasse button", () => {
    expect(enHtml).not.toContain('aria-expanded="false"');
    expect(enHtml).not.toContain("data-calebasse");
  });
});
