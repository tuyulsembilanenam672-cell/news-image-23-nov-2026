// The World in One Day — Monday 23 November 2026.
// Entry program for make.fun's news-image-20261123 bounty.
// It copies the rendered front page (entry.png, built from index.html in
// this repository) to the output directory as entry.png.
// Deterministic: the same input bytes are copied on every run.
// No network, no dependencies, Node standard library only.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const source: string = join(here, "entry.png");
const outDir: string = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
