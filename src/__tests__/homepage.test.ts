import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const distDir = join(__dirname, "..", "..", "dist");

describe("Homepage (SCN-01)", () => {
  beforeAll(() => {
    // Build the site before tests run
    execSync("npm run build", {
      cwd: join(__dirname, "..", ".."),
      stdio: "pipe",
      timeout: 30000,
    });
  }, 30000);

  it("serves the English homepage at /en/", () => {
    const html = readFileSync(join(distDir, "en", "index.html"), "utf-8");
    expect(html).toContain("Jonathan Passe");
  });

  it("serves the French homepage at /fr/", () => {
    const html = readFileSync(join(distDir, "fr", "index.html"), "utf-8");
    expect(html).toContain("Jonathan Passe");
  });

  it("displays the professional identity statement in English", () => {
    const html = readFileSync(join(distDir, "en", "index.html"), "utf-8");
    expect(html).toContain(
      "bridge the gap between technical architecture and human knowledge",
    );
  });

  it("displays the professional identity statement in French", () => {
    const html = readFileSync(join(distDir, "fr", "index.html"), "utf-8");
    expect(html).toContain("Je fais le pont entre");
  });

  it("includes an email contact link", () => {
    const html = readFileSync(join(distDir, "en", "index.html"), "utf-8");
    expect(html).toMatch(/mailto:/);
  });

  it("includes a LinkedIn link", () => {
    const html = readFileSync(join(distDir, "en", "index.html"), "utf-8");
    expect(html).toContain("linkedin.com/in/jonathan-passe");
  });

  it("includes a photo with alt text", () => {
    const html = readFileSync(join(distDir, "en", "index.html"), "utf-8");
    expect(html).toMatch(/<img[^>]+alt="[^"]+"/);
  });

  it("includes a language toggle linking to the alternate locale", () => {
    const html = readFileSync(join(distDir, "en", "index.html"), "utf-8");
    expect(html).toContain('href="/fr/"');
  });
});
