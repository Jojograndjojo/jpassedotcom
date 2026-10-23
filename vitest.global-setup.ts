import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default function globalSetup() {
  execSync("npm run build", {
    cwd: rootDir,
    stdio: "inherit",
    timeout: 120000,
  });
}
