// The Meeting That Should Have Been an Email — entry program.
// Writes a single one-line joke (<= 200 chars) to /output/entry.txt.
// Node 22 stdlib only.
import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY =
  'After an hour, the meeting\u2019s only decision was to schedule another meeting to decide what the first meeting was about.';

if (ENTRY.length > 200) throw new Error(`entry too long: ${ENTRY.length} chars`);
if (ENTRY.includes('\n')) throw new Error('entry must be a single line');

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY, 'utf8');
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
