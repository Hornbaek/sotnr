# Shadows of the Nine Realms — Monster AI System

Monsters are controlled by AI cards that determine their actions each Monster Phase. Every monster type has unique behaviour patterns built from a standardised keyword system.

---

## The Monster AI Sequence

Every monster follows this exact sequence each activation. Six steps, always in this order, no exceptions:

1. **Identify Primary keyword target** — apply keyword, identify valid targets
2. **Apply Secondary keyword if tied** — narrow to one target
3. **Apply Threat Chain if still tied** — resolve to exactly one target
4. **Move toward target** — shortest path, full Speed, committed (see Committed Movement)
5. **Attack if in range** — apply attack roll and damage
6. **Apply special ability** — as printed on Monster Card

---

## Preferred Target Keywords

Each monster has exactly one **Primary keyword** and optionally one **Secondary keyword**. No monster has more than two.

| Keyword | Behaviour |
|---|---|
| CLOSEST | Target nearest hero (tie: most Exhaustion) |
| WEAKEST | Target hero with lowest remaining Health |
| EXHAUSTION FOCUS | Target hero with most Exhaustion Tokens |
| PACK HUNTER | Target hero adjacent to 2+ of the same monster type |
| ISOLATIONIST | Target hero not adjacent to any allies |
| RANGED PRIORITY | Target hero who made a ranged attack this round |
| HEALER HATE | Target hero who healed another hero this round |
| ELITE | Target hero with the most Fate Tokens |

---

## Edge Cases

### No Valid Target — Universal Fallback
If no hero qualifies for the Primary keyword, the monster defaults to **CLOSEST** — the nearest hero, ties broken by most Exhaustion. Always resolvable, never ambiguous.

This creates meaningful counterplay — players can deliberately deny a keyword through positioning and behaviour. A hero can choose not to heal in a round to avoid becoming the HEALER HATE target. Breaking monster formations denies PACK HUNTER and forces CLOSEST behaviour.

### Multiple Keywords — Resolution Order
1. Apply the **Primary keyword** — identify valid targets
2. If multiple valid targets remain, apply the **Secondary keyword** to break the tie
3. If still tied, apply the **Threat Chain**

### The Threat Chain
When two or more heroes are perfectly tied on any keyword metric, resolve using this fixed sequence — same every time, for every keyword:

1. Most Exhaustion Tokens
2. Lowest current Health
3. Fewest Fate Tokens held
4. Nearest physical position on the hex grid
5. Players choose (only if all above are also tied — extremely rare)

Learn the Threat Chain once — it resolves every future tie without hesitation or debate.

### Committed Movement
A monster identifies its target before moving and commits to that target for the entire activation. It moves its full Speed toward the target via the shortest available path.

If the monster ends its movement in attack range of a *different* hero, it **does not switch targets** — it has committed. It moves and waits, attacking only its designated target next round if it reaches it.

This makes monster behaviour fully predictable. Players can see exactly where a monster is heading and respond accordingly — leading monsters away from vulnerable allies is a valid tactic.

---

## Monster AI Card Format

Each monster has an AI Card defining its complete behaviour. All six fields are required:

| Field | Content |
|---|---|
| **Primary Keyword** | Main targeting behaviour |
| **Secondary Keyword** | Tiebreaker (optional) |
| **Move** | Speed value |
| **Attack** | Roll modifier (D20 + X) |
| **Damage** | Damage on a hit |
| **Special Ability** | Folklore-rooted special behaviour |

> ⚠️ **Phase 3 work:** Keywords and special abilities are assigned to all monsters in Phase 3. See `07_monsters.md`.
