# Shadows of the Nine Realms — Development Plan

> This document tracks the full development roadmap for the game, organised into phases with prioritised backlogs. Items marked ✅ are complete, 🔄 are in progress, and ⬜ are not yet started.

---

## Phase 1 — Core Mechanics
*Goal: A complete, playable mechanical skeleton that can run any scenario. No content decisions needed to test this.*

### ✅ Done
- Fail-forward D20 combat system (base roll table defined)
- Fate Token economy (spend/earn rules defined)
- Round structure (Hero Phase / Monster Phase)
- Movement & positioning rules (hex grid, flanking, elevation)
- Conditions list (Wound, Poison, Immobilize, Disarm, Stun, Muddle, Strengthen, Invisible, Shield)
- Physical Character Board system (sliding XP track, token-peg ability slots, health/exhaustion dial)
- 3-Act Session Structure (Act 1 Approach / Act 2 Escalation / Act 3 Resolution with time budgets)
- Legacy Card system (6 double-sided cards, spine slots, replaces Campaign Journal)
- Saga Event system (12 cards, 3 thematic decks, D6 trigger, Saga Line / Immediate Effect / Echo)

### 🔄 In Progress
- XP and progression numbers calibrated to 7-10 round session structure

### ⬜ Backlog
- Resting rules (cost, timing, effect — currently undefined)
- Advantage / Disadvantage mechanic (defined in principle, not mechanically specified)
- Ability card deck cycle rules (edge cases — what happens when deck runs out mid-Act?)
- Monster AI edge cases (no valid target for keyword, multiple keywords, priority resolution)
- Exhaustion rules (what triggers it beyond card cycling, full Exhausted state rules)
- Loot earning rules (when and how loot is awarded during a session)
- Scenario Sleeve design spec (what information must every sleeve contain)
- Act transition triggers (define the specific trigger types available to scenario designers)
- Saga Event deck assignment (which deck is active per scenario location)
- Legacy Card interaction rules (what happens when multiple Legacy Cards are relevant simultaneously)

---

## Phase 2 — Character Classes
*Goal: Six mechanically distinct classes that feel different to play, not just different on paper.*

> ⚠️ All class content is currently placeholder. Role, Health, Speed, Signature abilities, and ability cards are undefined for all classes.

### Design principle
Core mechanics must be fully locked (Phase 1 complete) before class development begins. Classes are built on top of the mechanical foundation, not alongside it.

### ⬜ Backlog
- Define Role, Health, and Speed for all 6 classes
- Define Signature ability for each class (text + mechanical effect)
- Design 4 starting ability cards per class (Top + Bottom actions, initiative value)
- Design 2 unlockable ability cards per class (unlocked at Level 2 and Level 6)
- Define Level 4 Signature enhancement for each class
- Define Level 8 Signature mastery for each class
- Define "improved dice threshold" per level per class (what changes and when)
- Balance pass — compare class power curves against each other
- Class identity review — ensure mechanical differentiation is meaningful at the table

### Class-specific notes
- **Nidstang** — strongest thematic identity, curse-pole mechanic has high potential, prioritise this class
- **Einherjar** — shield/tank role, Shield Wall signature needs a concrete mechanical definition
- **Valkyrie** — mobility-focused, "attack again" on crit needs careful balancing
- **Seidr** — support/heal role, dual damage/heal on same roll table is unusual, worth testing early
- **Ulfhednar** — risk/reward mechanic implied by "Beast Within", needs a clear risk mechanic to be interesting
- **Skald** — inspiration mechanic, needs to feel meaningfully different from Seidr's support role

---

## Phase 3 — Monster System
*Goal: Every monster feels distinct, behaviourally and thematically, using the AI keyword system.*

### ⬜ Backlog
- Assign preferred target keywords to all 6 monsters in the compendium
- Define special abilities for each monster (folklore-rooted)
- Write full AI card for each monster (target → move → attack → special)
- Add Mara to the compendium (currently referenced in Scenario 4 but missing)
- Define Nidhogg's minions (referenced in Scenario 6 but unnamed)
- Balance pass — compare monster threat levels against class health pools
- Define multi-keyword resolution (if a monster has 2 keywords, how is priority decided?)
- Define "no valid target" fallback behaviour for each keyword

---

## Phase 4 — Scenarios
*Goal: 6 complete, playtestable scenarios with branching objectives that feel mechanically different from each other.*

> ⚠️ All scenario content is currently placeholder. Locations, difficulty, enemy counts, and objective rules are undefined.

### Design principle
Branching objectives (e.g. Eliminate vs Negotiate) must play differently at the table, not just resolve differently. Each branch needs its own mechanical logic.

### ⬜ Backlog
- Define all missing fields for each scenario (location, difficulty, player count, enemy lists)
- Design Eliminate and Negotiate mechanical flows for Scenarios 1 and 3
- Design Ambush mechanical flow for Scenario 3
- Define special rules for each scenario (Nokken enchantment, Mara night mechanic, Forge timer, etc.)
- Define Act 1 → Act 2 and Act 2 → Act 3 triggers for each scenario
- Assign active Saga Event deck to each scenario
- Design Legacy Card (won + lost sides) for each scenario
- Define campaign branching — which scenarios unlock from which choices
- Define any hidden scenarios and what Secrets unlock them
- Balance pass — difficulty curve across Scenarios 1-6

---

## Phase 5 — Campaign System
*Goal: A campaign that feels like a living world without requiring a journal or heavy administration.*

### ⬜ Backlog
- Define campaign branching map (which scenarios are linear, which are choice-dependent)
- Define concrete mechanical effects for Allies (e.g. Huldra appearing in later scenarios)
- Define concrete mechanical effects for Enemies (e.g. Frost Giants deal more damage if angered)
- Define Legacy bonus types (stat boost, narrative flag, new ability, or other)
- Define Secrets system (what clues look like, how they unlock hidden content)
- Define between-session flow (recovery, levelling up, loot spending — step by step)
- Define loot earning (per monster? per objective? fixed per scenario?)
- Confirm Legacy Card spine slot physical design (6 slots, won/lost face visible)

---

## Phase 6 — Playtesting & Balance
*Goal: The game plays in 30-45 minutes with meaningful decisions throughout. No dominant strategy, no dead rounds.*

### ⬜ Backlog
- Solo playtest — run a full campaign solo to identify pacing issues
- 2-player playtest
- 3-player playtest
- 4-player playtest (longest setup and session, most likely to exceed time budget)
- Identify and fix any rounds that feel "empty" (fail-forward check)
- Saga Event balance pass (are any events too swingy? too irrelevant?)
- Legacy Card balance pass (are any cards too dominant across a campaign?)
- XP curve validation (does progression feel rewarding within a 6-8 scenario campaign?)
- Final conditions review (are all 9 conditions actually used across the game?)

---

## Phase 7 — Production & Presentation
*Goal: Components are manufacturable, rules are clear to a first-time reader.*

### ⬜ Backlog
- Finalise component list with manufacturing specs
- Character Board physical design (dial, slider, peg slots)
- Scenario Sleeve template design
- Saga Event card template design
- Legacy Card template design
- Rulebook final draft (all TODOs resolved)
- Quick Reference card final version
- Box layout and spine slot design

---

## Open Design Questions
*Decisions that are unresolved and will affect multiple phases when answered.*

- What does "improved dice threshold" mean concretely at each level? (affects Phase 1, 2, 6)
- Does failing a scenario always move the campaign forward, or are there dead-end outcomes? (affects Phase 4, 5)
- How many Saga Event decks are there — 3 fixed decks or one per scenario? (affects Phase 1, 4)
- Can Legacy Cards ever be removed or flipped mid-campaign, or are they permanent once placed? (affects Phase 1, 5)
- Is there a maximum campaign length, or can players keep playing beyond 6 scenarios? (affects Phase 5)
