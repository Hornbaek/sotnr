# Shadows of the Nine Realms — Monster AI System

Monsters are controlled by AI cards that determine their actions each Monster Phase. Every monster type has unique behaviour built from a standardised keyword system and a single Special Ability rooted in its folklore identity.

---

## Monster Card Format

Every monster has one double-sided card containing everything needed to run it — no rulebook lookup during play.

### Front Side

```
┌─────────────────────────────────────┐
│  NAME              [TIER ICON]      │
│  Realm: ___    Type: Standard/Elite │
│  Health: __  Move: __  Attack: +__  │
│  Damage: __                         │
├─────────────────────────────────────┤
│  PRIMARY KEYWORD:  [KEYWORD NAME]   │
│  SECONDARY KEYWORD: [KEYWORD NAME]  │
│                                     │
│  SPECIAL ABILITY                    │
│  [Name]: [One or two line effect]   │
│                                     │
│  BOSS THRESHOLD (boss tier only)    │
│  At __ HP: See Scenario Sleeve      │
├─────────────────────────────────────┤
│  LORE LINE                          │
│  [Single evocative sentence]        │
└─────────────────────────────────────┘
```

### Back Side — Dice Result Table

Each monster rolls the same D20 the heroes use but consults their own attack table. Monster attacks feel distinct without requiring separate dice.

```
┌─────────────────────────────────────┐
│  [MONSTER NAME] — ATTACK TABLE      │
├─────────────────────────────────────┤
│  1-5   Miss — [minor effect]        │
│  6-10  Weak Hit — [half damage]     │
│  11-16 Standard Hit — [full damage] │
│  17-19 Strong Hit — [full + bonus]  │
│  20    Critical — [double + bonus]  │
└─────────────────────────────────────┘
```

---

## Monster Tiers

| Tier | Health Range | Appears As | Boss Threshold |
|---|---|---|---|
| **Standard** | 4-8 | Multiple tokens per scenario | No |
| **Elite** | 8-15 | 1-2 per scenario | No |
| **Boss** | 20-40 | 1 per scenario | Yes — at 50% and 25% HP |

### Standard Stat Ranges

| Tier | Health | Move | Attack Modifier | Damage |
|---|---|---|---|---|
| Standard | 4-8 | 2-4 | +1 to +3 | 1-3 |
| Elite | 8-15 | 3-5 | +3 to +5 | 3-5 |
| Boss | 20-40 | 3-6 | +4 to +6 | 4-7 |

> ⚠️ All stat ranges are first iteration estimates. Validated in Phase 6 playtesting.

---

## Monster Tiers — Special Rules

### Elite Movement Exception
Elite monsters may move through one hero's hex per activation — forcing that hero 1 hex in a direction of the monster's choice. No damage, but the hero is displaced.

### Boss Movement Exception
Bosses ignore difficult terrain entirely and may move through hero hexes freely.

---

## The Monster AI Sequence

Every monster follows this exact sequence each activation. Six steps, always in this order:

1. **Identify Primary keyword target** — apply keyword, identify valid targets
2. **Apply Secondary keyword if tied** — narrow to one target
3. **Apply Threat Chain if still tied** — resolve to exactly one target
4. **Move toward target** — shortest path, full Speed, committed
5. **Attack if in range** — roll D20, consult back-of-card table
6. **Apply Special Ability** — as printed on Monster Card

---

## Targeting Keywords

Each monster has exactly one **Primary keyword** and optionally one **Secondary keyword**. No monster has more than two.

### Primary Keywords

| Keyword | Behaviour |
|---|---|
| CLOSEST | Target nearest hero — ties broken by most Exhaustion |
| WEAKEST | Target hero with lowest current Health |
| EXHAUSTION FOCUS | Target hero with most Exhaustion Tokens |
| PACK HUNTER | Target hero adjacent to 2+ of same monster type |
| ISOLATIONIST | Target hero not adjacent to any allies |
| RANGED PRIORITY | Target hero who made a ranged attack this round |
| HEALER HATE | Target hero who healed another hero this round |
| ELITE | Target hero with most Fate Tokens |
| SONG FOCUS | Target active Skald (or hero with highest Song Track value) |
| THREAD SEEKER | Target hero with most active Fate Threads |

> **SONG FOCUS** and **THREAD SEEKER** create natural predators for the Skald and Seiðr classes — making those classes feel more tactically meaningful.

### Secondary Keywords (Tiebreaker)

All primary keywords can serve as secondary. Additionally:

| Keyword | As Secondary |
|---|---|
| BLOCKER | If tied, target the hero with the most adjacent allies |
| EXPOSED | If tied, target the hero with fewest active equipment items |

---

## Edge Cases

### No Valid Target — Universal Fallback
If no hero qualifies for the Primary keyword, default to **CLOSEST**. Always resolvable.

This creates counterplay — players can deny keywords through positioning. Breaking monster formations denies PACK HUNTER. The Seiðr can remove Fate Threads to become a less appealing THREAD SEEKER target.

### Multiple Keywords — Resolution Order
1. Apply Primary keyword — identify valid targets
2. If tied, apply Secondary keyword
3. If still tied, apply the Threat Chain

### The Threat Chain
When heroes are perfectly tied on any keyword metric:

1. Most Exhaustion Tokens
2. Lowest current Health
3. Fewest Fate Tokens held
4. Nearest hex position
5. Players choose (if all above also tied — extremely rare)

Same sequence every time, for every keyword. Learn it once.

### Committed Movement
Monster identifies target before moving. Does not switch mid-activation even if it ends in range of a different hero. Players can see exactly where a monster is heading and respond accordingly.

---

## Monster Movement

1. Identify target
2. Move toward target via **shortest path** (counts hexes)
3. If two paths are equal length, take the path ending **closer to the most enemies**
4. Difficult terrain costs 2 movement per hex
5. Cannot move through obstacle hexes
6. Does not stop when entering hero-adjacent hexes — continues to target hex unless out of movement

---

## Monster Attack Resolution

After moving, if in attack range of target:

1. Roll D20
2. Consult monster's back-of-card Dice Table
3. Apply damage and effects
4. Apply Special Ability if triggered

If **not** in range after moving: no attack this activation. Monster waits, committed to position.

---

## Special Ability Design Rules

Every monster has exactly **one Special Ability**. It must:
- Be expressible in two lines or fewer on the card
- Reflect the creature's folklore identity — not generic fantasy
- Create a different tactical problem than any other monster in the same realm
- Be fail-forward compatible — triggering the special moves the game forward

### Special Ability Trigger Types

| Trigger | Meaning |
|---|---|
| **ON HIT** | Activates when monster's attack succeeds |
| **ON ACTIVATION** | Activates at start of monster's turn |
| **ON DAMAGE** | Activates when monster takes damage |
| **PASSIVE** | Always active, no trigger needed |
| **THRESHOLD** | Activates when monster drops below X health |

---

## Boss-Specific Rules

### Boss Threshold Triggers
At 50% and 25% Health, check the Scenario Sleeve. The Monster Card says *"At threshold: see Scenario Sleeve."* This keeps cards reusable across multiple scenarios while the Sleeve defines each encounter's specific response.

**Common threshold responses (defined on Scenario Sleeve):**
- *Remove boss from map — read Escalation text* (escape)
- *Act ends immediately — resolve as Besieged*
- *Boss enters Enraged state — use Enraged Dice Table*

### Boss Enraged State
If the Sleeve specifies Enraged (rather than escape), flip the Monster Card. The back shows a simplified Enraged Dice Table — higher damage, simpler effects, faster activation.

### Boss Escape
When a boss escapes, remove its token from the map. The Monster Card goes face-down in the scenario discard. The boss does not return in Act 3 — but the Legacy Card (won or lost side) reflects whether it was driven to the threshold or not.

### Cannot Be Defeated Before Threshold
If a boss is reduced to 0 HP before reaching its threshold: *the boss escapes at 1 HP regardless.* A creature of this power cannot be destroyed in a single encounter. The Scenario Sleeve's Act 3 text acknowledges this.

---

## Storage & Campaign Loading

Monster Cards and tokens are stored in the **Master Vault** (separate from the book-box) by realm. When loading a campaign, only the relevant realm's monster cards and tokens are packed into the book-box. Monsters not in the active campaign remain in the Vault.

See `01_components.md` and Phase 7 for physical design of the Master Vault.
