# Shadows of the Nine Realms — Quick Reference

## Round Structure — Swift/Steady Phase

**PHASE 1 — SWIFT MONSTERS (Initiative 1-5)**
Activates before heroes. Lowest Initiative first. Ties broken by spawn order.

**PHASE 2 — HERO PHASE**
All heroes take their turns in any order the group agrees.
Play 2 cards per turn — one TOP action, one BOTTOM action.

**PHASE 3 — STEADY MONSTERS (Initiative 6-10)**
Activates after all heroes. Lowest Initiative first. Ties broken by spawn order.

Each Monster Card shows its Initiative value and [SWIFT] or [STEADY] label.

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

## Terrain

| Terrain | Movement Cost | Combat Effect |
|---|---|---|
| Open | 1 per hex | Standard |
| Difficult (hatched) | 2 per hex | None |
| Elevated (raised border) | 1 per hex | Attacker gains Advantage vs lower ground |

A hex can be both Elevated and Difficult simultaneously. Apply both effects.

---

## Line of Sight

Draw a line from attacker centre to target centre:

| Situation | Result |
|---|---|
| Line through obstacle hex | Blocked — no LoS |
| Line along shared hex edge | Obscured — Disadvantage on attack |
| Elevated attacker, line over adjacent ground obstacle | Clear — height sees over it |
| Adjacent hexes | Always clear — LoS regardless |

---

## Advantage & Disadvantage

Roll the D20 **twice.**
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

## Card Selection

At each Act transition where the hand reset is **not suppressed**, players select which cards from their full pool to bring into the upcoming Act.

- Read the transition strip and upcoming Act zone on the Scenario Sleeve first
- Hand size varies by class — see Character Board
- Cards not selected do not exist mechanically during that Act
- **Suppressed transition:** No reset, no re-selection — carry forward what remains in hand

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
- Return all played cards to hand
- **Re-select hand** from full card pool

---

## Ability Card Deck Cycle

| Situation | Result |
|---|---|
| Deck has cards | Draw 2 normally |
| Deck empty | Shuffle discard, gain 1 Exhaustion, draw 2 |
| Deck + discard empty | **Burnout** — Basic Action only this turn, full reset at turn end |

**Basic Action (Burnout):** Move up to Speed, OR deal 1 damage to adjacent enemy.

---

## Equipment Slots

Each hero has 3 equipment slots on their Character Board:

| Slot | Type | Effect Style |
|---|---|---|
| Weapon | Attack modifier | Changes how hits behave |
| Armour | Defence modifier | Reduces damage or gains resources |
| Relic | Passive special | Unique persistent effects |

One item per slot. Swap between scenarios only.

---

## Monster AI — Threat Chain

When heroes are tied on any keyword metric, resolve in this order:
1. Most Exhaustion Tokens
2. Lowest current Health
3. Fewest Fate Tokens
4. Nearest hex position
5. Players choose (if all above tied)

**Universal Fallback:** If no valid target for keyword → default to CLOSEST.

**Committed Movement:** Monster identifies target before moving. Does not switch mid-activation.

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

## Loot Shop — Consumables

| Item | Cost | Effect |
|---|---|---|
| Healing Draught | 2 | Restore 3 Health (once, any session) |
| Mead of Courage | 3 | Gain 2 Fate Tokens immediately |
| Rune Salve | 3 | Remove all Exhaustion Tokens (once, any session) |

## Loot Shop — Equipment

| Item | Slot | Cost | Effect |
|---|---|---|---|
| Runed Blade | Weapon | 4 | Hit an enemy → deal 1 damage to adjacent enemy |
| Spear of Precision | Weapon | 6 | Glancing Blows deal 2 damage instead of 1 |
| Venom Edge | Weapon | 5 | Enemies you hit gain Wound |
| Iron Shield | Armour | 3 | Gain Shield 1 at start of each Act |
| Wolf Pelt | Armour | 4 | Suffer Exhaustion from monster → gain 1 Fate Token |
| Rune-Stitched Cloak | Armour | 5 | Reduce all incoming damage by 1 (min 1) |
| Blessing of the Gods | Relic | 6 | Strained threshold moves to 4 tokens permanently |
| Rune-Carved Pendant | Relic | 5 | Cursed/Wounded enemy defeated → gain 1 Fate Token |
| Cloak of Shadows | Relic | 6 | Start each Act with Invisible for 1 round |
| Draupnir Echo | Relic | 7 | Gain 1 Loot Token at end of each scenario |

---

## Legacy Card Rules

- Read left to right — Realm Cards first, then World Tree Cards
- Later slot **wins** on any contradiction
- World Tree Cards override Realm Cards on direct conflicts
- Each effect: one conditional sentence, 15 words or fewer
- Skip cards irrelevant to this scenario
