# Shadows of the Nine Realms — Quick Reference

## Turn Order

**1. HERO PHASE**
Players take turns (any order, lowest initiative first). Play 2 cards — Top action + Bottom action, in any order.

**2. MONSTER PHASE**
Each monster activates in spawn order (1-4):
Target → Move → Attack → Special Ability

---

## D20 Result Table

| Roll | Result | Effect |
|---|---|---|
| 1-3 | Glancing Blow | Minimum effect — always something |
| 4-6 | Weak Hit | Half damage (round down), no bonus |
| 7-14 | Standard Hit | Full damage/effect |
| 15-19 | Strong Hit | Full damage + bonus OR 1 Fate Token |
| 20 | Critical Hit | Double damage + 2 Fate Tokens |

### Dice Threshold by Level
| Level | Standard | Strong | Critical |
|---|---|---|---|
| 1-4 | 7-14 | 15-19 | 20 |
| 5-8 | 7-13 | 14-19 | 20 |
| 9 | 7-12 | 13-19 | 20 |

---

## Advantage & Disadvantage

Roll the D20 **twice** (or roll once, then again).
- **Advantage:** Keep the higher result
- **Disadvantage:** Keep the lower result
- **Both at once:** Cancel out — roll once normally
- Multiple sources of the same type do **not** stack

---

## Fate Token Spending

| Cost | Effect | Timing |
|---|---|---|
| 1 | Reroll the D20 | Before consulting Dice Table |
| 1 | Add +2 to D20 result | After rolling, before Dice Table |
| 1 | Negate 1 Exhaustion | When Exhaustion is applied |
| 1 | Move +1 hex | As part of any movement |

**Maximum: 3 Fate Tokens per hero**

---

## Exhaustion Thresholds

| Tokens | State | Effect |
|---|---|---|
| 1-2 | Weary | No penalty |
| 3-4 | Strained | All D20 rolls at Disadvantage |
| 5-6 | Exhausted | Cannot Attack. Must Rest next turn. |
| 7+ | Incapacitated | Removed from play until Act transition |

### Incapacitated Hero (Sideline Actions)
| Cost | Effect |
|---|---|
| 1 Fate | Give any hero +1 on their next roll |
| 2 Fate | Remove 1 Exhaustion from any hero |
| 3 Fate | Grant any hero +1 bonus movement hex |

Returns at next Act transition with 3 Exhaustion Tokens.

---

## Resting

**In-Turn Rest:** Instead of playing cards, play one card face-down. Remove Exhaustion Tokens equal to that card's **initiative number**. Cannot Rest while in melee range of an enemy.

**Act Transition Recovery (unless suppressed by Sleeve):**
- Act 1 → Act 2: Remove **2** Exhaustion Tokens per hero
- Act 2 → Act 3: Remove **1** Exhaustion Token per hero

---

## Act Transition (unless suppressed by Sleeve)
- Remove Exhaustion Tokens (see above)
- Return all played cards to hand (no cost, no shuffle)

---

## Ability Card Deck Cycle

| Situation | Result |
|---|---|
| Deck has cards | Draw 2 normally |
| Deck empty | Shuffle discard, gain 1 Exhaustion, draw 2 |
| Deck + discard empty | **Burnout** — Basic Action only this turn, full reset at turn end |

**Basic Action (Burnout):** Move up to Speed, OR deal 1 damage to adjacent enemy.

---

## Monster AI — Threat Chain

When heroes are tied on any keyword metric, resolve in this order:
1. Most Exhaustion Tokens
2. Lowest current Health
3. Fewest Fate Tokens
4. Nearest hex position
5. Players choose (if all above tied)

**Universal Fallback:** If no valid target for keyword → default to CLOSEST.

**Committed Movement:** Monster identifies target before moving. Does not switch targets mid-activation even if it ends in range of another hero.

---

## Movement

| Situation | Effect |
|---|---|
| Normal Terrain | 1 movement point per hex |
| Difficult Terrain | 2 movement points per hex |
| Flanking (behind target) | Advantage on attack |
| Higher Ground | Advantage on attack |
| Partial Obscurement | Disadvantage on attack |
| Obstacle | Blocks line of sight and movement |

---

## Conditions

| Condition | Effect |
|---|---|
| Wound | Suffer 1 damage at start of each turn |
| Poison | Suffer 1 damage; healing reduced by 1 |
| Immobilize | Cannot perform Move actions |
| Disarm | Cannot perform Attack actions |
| Stun | Skip entire turn |
| Muddle | All attacks at Disadvantage |
| Strengthen | All attacks at Advantage |
| Invisible | Cannot be targeted by monsters |
| Shield X | Reduce next X damage by X |

---

## Loot Shop

| Item | Cost | Effect |
|---|---|---|
| Healing Draught | 2 | Restore 3 Health (once, any session) |
| Weapon Upgrade | 4 | +1 damage permanently |
| Runic Charm | 5 | Start next scenario with 2 Fate Tokens |
| New Ability | 6 | Gain 5th ability card early |
| Blessing of the Gods | 8 | Strained threshold moves to 4 tokens permanently |

---

## Legacy Card Rules

- Read left to right across spine slots at session start
- Later slot **wins** on any contradiction
- Each card effect: one conditional sentence, 15 words or fewer
- Only read cards relevant to this scenario — skip the rest
