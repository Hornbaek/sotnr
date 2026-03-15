# Shadows of the Nine Realms — Core Mechanics

## The Round Structure

Shadows of the Nine Realms plays out in rounds, each consisting of two phases:

### 1. HERO PHASE
Players take turns in any order they choose (lowest initiative first within a round). On your turn, play two ability cards — one for its **TOP action** and one for its **BOTTOM action**. You may perform these actions in either order.

### 2. MONSTER PHASE
Each monster type activates in spawn order (1-4) and follows the full Monster AI sequence. See `06_monster_ai.md`.

---

## The 3-Act Session Structure

Every session is divided into three Acts with distinct dramatic roles. Acts are bounded by **transition triggers** defined on the Scenario Sleeve.

| Act | Name | Role | Target Duration |
|---|---|---|---|
| Act 1 | The Approach | Positioning, lower stakes, choices ripple forward | 10-12 min (~2-3 rounds) |
| Act 2 | The Escalation | Main threat arrives, primary combat, crunch | 15-20 min (~4-5 rounds) |
| Act 3 | The Resolution | Short punchy finale, Legacy Choice | 5-10 min (~1-2 rounds) |
| **Total** | | | **30-45 min (~7-10 rounds)** |

### Act Transitions
Every Act ends with a **Victorious** or **Besieged** outcome, printed on the Scenario Sleeve. The outcome determines what changes in the next Act — additional spawns, rule modifications, terrain changes, or recovery suppressions.

At every Act transition (unless suppressed by the Scenario Sleeve):
- Each hero removes Exhaustion Tokens: **2 tokens** at Act 1→2, **1 token** at Act 2→3
- Each hero returns all played cards to hand (full hand reset, no Exhaustion cost)

---

## Ability Cards

Each hero has unique ability cards. Each card has:

- **TOP ACTION:** Typically an attack or aggressive maneuver
- **BOTTOM ACTION:** Typically movement, defense, or utility
- **INITIATIVE NUMBER:** Determines turn order within the Hero Phase (lower goes first). Also used as the **Rest Value** — the number of Exhaustion Tokens removed when this card is used to Rest.
- **XP ICON (optional):** Earning XP when this action is performed in a thematically appropriate way
- **LOOT ICON (optional):** Earning Loot when this action is performed

### The TOP + BOTTOM Rule

Each round you play exactly **two cards:**
- **Card A** — played for its **TOP** action
- **Card B** — played for its **BOTTOM** action

You cannot play two TOPs or two BOTTOMs in the same round. The pairing of cards is the core decision — which TOP action do I want, and which card am I willing to sacrifice its TOP to get the BOTTOM I need?

**Exceptions:**
- **Special cards** printed with a [SPECIAL] tag may override this rule as described on the card
- **Certain items** may allow double-TOP or double-BOTTOM plays as their equipment effect

With 6 cards in hand and the pairing requirement, each round offers a meaningful combination of choices — ensuring no two rounds feel identical even with the same hand.

### Card Pool & Hand Size

Each class has a defined **card pool** (total cards available) and **hand size** (cards selected per Act). Both vary by class — see `04_classes.md`.

**Pool growth across levels:**

| Level | Cards Unlocked |
|---|---|
| 1 | Starting pool (class-defined) |
| 2 | +2 |
| 4 | +2 |
| 6 | +2 |
| 8 | +2 |
| 9 | No new cards — Saga Hero |

Maximum pool at Level 9 varies by class: 10 cards (small pool) to 16 cards (large pool).

### Deck Cycle Rules

After playing cards on your turn, refill your hand at turn end:

| Situation | Result |
|---|---|
| Deck has cards remaining | Draw 2, ready for next turn |
| Deck empty, discard has cards | Shuffle discard into new deck, gain **1 Exhaustion**, draw 2 |
| Deck AND discard empty | Enter **Burnout** — see below |

**Mid-turn forced draws** follow the same shuffle rule — shuffle discard and gain 1 Exhaustion immediately, potentially pushing into a higher Exhaustion threshold mid-combat.

**Shuffling while at Exhausted threshold:** if a shuffle would cause Incapacitation, the hero completes their current turn first, then becomes Incapacitated at turn end.

### Burnout

When both deck and discard are empty on your turn:
- You may not play any ability cards this turn
- Perform one **Basic Action** instead: move up to your Speed, OR deal 1 damage to an adjacent enemy
- At end of your turn, ALL played cards are automatically returned to hand — full reset, no shuffle, no Exhaustion cost

Burnout is a rare dramatic moment — hitting the wall and digging deep. The automatic reset means you bounce back next round.

### Act Transition Hand Reset

At every Act transition, each hero returns all played cards to hand — no Exhaustion cost, no shuffle. You never enter a new Act resource-depleted from the previous one.

> **Scenario Sleeve override:** The Scenario Sleeve can suppress the hand reset at a specific Act transition using the transition strip icon. This is rare and always narratively motivated.

---

## Movement & Positioning

The hex grid map uses standard hex movement. Each movement point moves you to one adjacent hex.

| Situation | Effect |
|---|---|
| Normal Terrain | 1 movement point per hex |
| Difficult Terrain | 2 movement points per hex |
| Flanking (attacking from behind target) | **Advantage** on attack roll |
| Higher Ground (elevated hex) | **Advantage** on attack roll |
| Partial Obscurement (line of sight blocked) | **Disadvantage** on attack roll |
| Obstacle | Blocks line of sight and movement |

> **Note:** Positional bonuses use Advantage/Disadvantage rather than flat modifiers, keeping arithmetic off the table. See `03_combat_system.md`.

---

## Exhaustion

Exhaustion represents your hero's fatigue and dwindling resources.

### Exhaustion Sources
| Source | Exhaustion Gained |
|---|---|
| Ability card deck runs out mid-Act (shuffle) | 1 |
| Mid-turn forced card draw (shuffle triggered) | 1 |
| Specific monster attacks | As printed on Monster Card |
| Spending a turn to Rest | See Resting below |
| Certain Legacy Card penalties | As printed on Legacy Card |

### Exhaustion Thresholds

Exhaustion Tokens accumulate on the 6 slots of your Character Board. Threshold markers are printed at slots 3 and 5 — no rulebook lookup needed.

| Tokens | State | Effect |
|---|---|---|
| 1-2 | **Weary** | No mechanical penalty |
| 3-4 | **Strained** | All D20 rolls at Disadvantage |
| 5-6 | **Exhausted** | Cannot perform Attack actions. Move only. Must Rest on next turn. |
| 7+ | **Incapacitated** | Removed from active play until next Act transition |

> **Maximum Exhaustion Tokens = 6.** A 7th token triggers Incapacitation.

### Incapacitation

An Incapacitated hero is removed from the hex map but remains engaged. Once per round they may spend Fate Tokens from the sidelines:

| Cost | Effect |
|---|---|
| 1 Fate Token | Give any hero +1 on their next roll |
| 2 Fate Tokens | Remove 1 Exhaustion from any hero |
| 3 Fate Tokens | Grant any hero 1 bonus movement hex |

At the next Act transition, the Incapacitated hero returns to play with 3 Exhaustion Tokens (Strained, but back in the fight).

> **Scenario Sleeve override:** A sleeve icon can suppress hero return at Act transitions for scenarios where Incapacitation is permanent within that session.

### Resting

**In-Turn Rest (Active):**
On your Hero Phase turn, instead of playing ability cards, declare a Rest. Play one card **face-down** as a recovery card — no actions taken. Remove Exhaustion Tokens equal to that card's **initiative number**.

> *Example: Resting with an initiative-3 card removes 3 Exhaustion Tokens. Resting with an initiative-7 card removes 7.*

**Constraint:** You cannot Rest while in melee range of an enemy. You must disengage first.

This creates a genuine tactical decision — high-initiative cards are your strongest combat options but weak rest cards. Low-initiative cards are valuable recovery tools.

**Act Transition Recovery (Passive):**

| Transition | Tokens Removed |
|---|---|
| Act 1 → Act 2 | 2 Exhaustion Tokens per hero |
| Act 2 → Act 3 | 1 Exhaustion Token per hero |

> **Scenario Sleeve override:** The transition strip can suppress either or both recoveries. A suppression icon means no recovery at that boundary — always narratively motivated.
