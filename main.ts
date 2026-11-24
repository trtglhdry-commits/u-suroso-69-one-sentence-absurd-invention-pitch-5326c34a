// One-Sentence Absurd Invention Pitch — u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
//
// One sentence pitching a ridiculous invention that fixes a tiny everyday
// annoyance: a fridge that judges your midnight snacking. The sentence is
// the whole entry: no code, no explanation.
//
// The program writes the pitch to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) and enforces its own 220-character gate:
// it refuses to write anything that is empty, whitespace-only, or longer
// than 220 characters, so a bad pitch can never reach the judge.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The laugh comes from the invention itself: the fridge is not broken, it
// is judgmental — it dims its own light and whispers "again?" so the tiny
// annoyance (midnight snacking) gets a witness, and the fix is silly yet
// weirdly plausible, because a fridge already watches you eat at 2 a.m.
const PITCH =
  "A fridge that dims its own light and whispers 'again?' every time you open it after midnight, so your 2 a.m. snack comes with a witness.";

const MAX_CHARS = 220;

function main(): void {
  const text = PITCH.trim();

  // Own gate: the entry must be 1..220 characters, not only whitespace.
  if (text.length === 0) {
    throw new Error("pitch is empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `pitch is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
  console.error(`wrote entry.txt: ${text.length} characters`);
}

main();
