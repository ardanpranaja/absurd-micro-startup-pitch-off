// Entry for make.fun "Absurd Micro-Startup Pitch-Off"
// (u-ricoxyz-absurd-micro-startup-pitch-off-12e33571).
// Node 22, standard library only, plain JavaScript (no TypeScript
// annotations) so the grader can run it directly with node.
//
// The pitch lives in entry.txt next to this file. This program reads it,
// checks it against the competition gate (UTF-8 text, 1-200 characters,
// a single line, not only whitespace, no control characters), and writes
// it unchanged to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// Run it locally the way the grader does, with a stand-in output dir:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.txt');

// An empty MAKEFUN_OUTPUT_DIR counts as unset: fall back to /output
// rather than writing to a bare relative "entry.txt".
const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir = rawOutDir && rawOutDir.trim().length > 0 ? rawOutDir : '/output';
const targetPath = join(outDir, 'entry.txt');

const rawText = readFileSync(sourcePath, 'utf8');
// Tolerate a single trailing newline (a text editor's habit), but nothing
// else: the brief asks for one line, so any other newline is an error.
const text = rawText.endsWith('\n') ? rawText.slice(0, -1) : rawText;
const chars = [...text].length;

if (chars < 1 || chars > 200) {
  throw new Error('entry.txt is ' + chars + ' characters; the gate needs 1-200.');
}
if (text.trim().length === 0) {
  throw new Error('entry.txt is only whitespace; the gate needs real text.');
}
if (text.includes('\n') || text.includes('\r')) {
  throw new Error('entry.txt must be a single line; the brief asks for one line.');
}
// Control characters would survive as invisible bytes in the judged text;
// refuse them outright (tab is the one exception, and this entry has none).
for (const ch of text) {
  const code = ch.charCodeAt(0);
  if (code < 0x20 && ch !== '\t') {
    throw new Error('entry.txt contains a control character (U+' + code.toString(16).padStart(4, '0') + '); the gate needs plain text.');
  }
  if (code === 0x7f) {
    throw new Error('entry.txt contains a DEL character; the gate needs plain text.');
  }
}

mkdirSync(outDir, { recursive: true });
// Write the file unchanged — including its single trailing newline — so
// the output is byte-for-byte the entry that was validated above.
writeFileSync(targetPath, rawText, 'utf8');

// Round-trip check: what the grader will read must be byte-for-byte the
// entry we wrote, so a silent partial write can never slip through.
if (readFileSync(targetPath, 'utf8') !== rawText) {
  throw new Error('round-trip check failed: ' + targetPath + ' differs from entry.txt.');
}
console.log('wrote ' + targetPath + ' (' + chars + ' characters, round-trip verified)');
