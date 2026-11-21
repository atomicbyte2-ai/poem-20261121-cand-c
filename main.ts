// poem-20261121-cand-c — "Knock Twice"
// A son visits his estranged father and knocks, asking to come in.
// Permission to return; the door as the ask. Deterministic output:
// no network, no randomness, no Date.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const poem = `Knock Twice

I knocked twice, the way he taught me.
He opened the door and held it,
as if the house might leave.

"I came to ask," I said.
He stepped aside.

The hall was longer than I remembered.
So was his silence.
"Stay for supper."

I asked to come in.
He asked me to stay.`;

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), poem, 'utf8');
