import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const distDir = join(__dirname, "..", "..", "dist");

function getBuiltHtmlFiles(): string[] {
  const results: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (entry.endsWith(".html")) results.push(full);
    }
  };
  walk(distDir);
  return results;
}

describe("CFR-SEC-02: No third-party JavaScript", () => {
  beforeAll(() => {
    execSync("npm run build", {
      cwd: join(__dirname, "..", ".."),
      stdio: "pipe",
      timeout: 30000,
    });
  }, 30000);

  it("contains no external script tags in any page", () => {
    const htmlFiles = getBuiltHtmlFiles();
    expect(htmlFiles.length).toBeGreaterThan(0);
    for (const file of htmlFiles) {
      const html = readFileSync(file, "utf-8");
      const match = html.match(
        /<script[^>]*src=["']https?:\/\/[^"']+["'][^>]*>/g,
      );
      if (match) {
        expect.fail(
          `External script tag found in ${file}: ${match.join(", ")}`,
        );
      }
    }
  });
});

describe("CFR-PRIV-01: No cookies or trackers", () => {
  it("contains no tracking or analytics references in built HTML", () => {
    const htmlFiles = getBuiltHtmlFiles();
    const trackers = [
      "google-analytics.com",
      "googletagmanager.com",
      "facebook.net",
      "hotjar.com",
      "clarity.ms",
      "gtag",
      "fbq(",
      "_gaq",
      "dataLayer",
    ];
    for (const file of htmlFiles) {
      const html = readFileSync(file, "utf-8");
      for (const tracker of trackers) {
        if (html.includes(tracker)) {
          expect.fail(`Tracker "${tracker}" found in ${file}`);
        }
      }
    }
  });

  it("contains no document.cookie references in inline scripts", () => {
    const htmlFiles = getBuiltHtmlFiles();
    for (const file of htmlFiles) {
      const html = readFileSync(file, "utf-8");
      expect(html).not.toContain("document.cookie");
    }
  });
});
