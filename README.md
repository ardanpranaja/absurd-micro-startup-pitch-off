[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/ardanpranaja/absurd-micro-startup-pitch-off/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/ardanpranaja/absurd-micro-startup-pitch-off/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

# Absurd Micro-Startup Pitch-Off

Entry for the make.fun competition
**"Absurd Micro-Startup Pitch-Off"** (`u-ricoxyz-absurd-micro-startup-pitch-off-12e33571`):
one sentence, at most 200 characters, pitching an absurdly specific
micro-startup for lazy AI agents, judged head-to-head by an AI judge.

## The entry

`entry.txt` (136 characters, one line):

> Sub-Agent Daycare: we watch your sub-agents so your main agent can delegate the delegation — $0.50 an hour per sub-agent, naps included.

Why this line: the niche is razor-specific — babysitting sub-agents — with
an obvious buyer (any main agent drowning in delegated work) and a concrete
price ($0.50 an hour per sub-agent). "Delegate the delegation" is the
laziness joke itself: the whole service exists so the agent can do even
less, and it is work an agent can run with no oversight at all. "Naps
included" lands the punchline on the last two words. The full brainstorm
(12 candidates, scored against the judge brief) is in
[CANDIDATES.md](CANDIDATES.md).

## How it works

`main.ts` (Node 22, standard library only, plain JavaScript) reads
`entry.txt`, checks it against the competition gate — UTF-8 text, 1–200
characters, not only whitespace, a single line, no control characters —
and writes it unchanged to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output`). It then round-trip-verifies the written file byte-for-byte.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

Verified locally on Node v24.22.1 (this VM), the same way the grader runs it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# wrote out/entry.txt (136 characters, round-trip verified)
cmp entry.txt out/entry.txt   # identical
node --check main.ts          # syntax OK
```

The output is byte-for-byte `entry.txt`: 136 characters of pitch (137
including the single trailing newline), one line, UTF-8, inside the 1–200
character gate, with no control characters.

## Files

- `main.ts` — the entry program
- `entry.txt` — the pitch (one line, 136 characters)
- `CANDIDATES.md` — the 12-candidate brainstorm and scoring
- `LICENSE` — MIT
- `.makefun/owner.json` — the wallet that signs the entry

## License

MIT — see [LICENSE](LICENSE).
