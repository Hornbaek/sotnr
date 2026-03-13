# Shadows of the Nine Realms — Development Plan

> This document tracks the full development roadmap for the game, organised into phases with prioritised backlogs. Items marked ✅ are complete, 🔄 are in progress, ❌ are cut, and ⬜ are not yet started.

---

## Phase 1 — Core Mechanics
*Goal: A complete, playable mechanical skeleton that can run any scenario. No content decisions needed to test this.*

### ✅ Complete
- Fail-forward D20 combat system (base roll table defined)
- Fate Token economy (spend/earn rules, 3-token max)
- Round structure (Hero Phase / Monster Phase)
- Movement & positioning rules (hex grid, flanking → Advantage, elevation → Advantage)
- Conditions list (Wound, Poison, Immobilize, Disarm, Stun, Muddle, Strengthen, Invisible, Shield)
- Physical Character Board system (sliding XP track, token-peg ability slots, health/exhaustion dial)
- 3-Act Session Structure (Act 1 Approach / Act 2 Escalation / Act 3 Resolution with time budgets)
- Legacy Card system (6 double-sided cards, spine slots, replaces Campaign Journal)
- Advantage / Disadvantage (single D20 rolled twice, keep higher/lower)
- XP & Progression (dual sources: Scenario XP + Card XP; revised thresholds; Saga Hero at Level 9)
- Resting & Exhaustion (three thresholds: Weary/Strained/Exhausted; in-turn rest via initiative; Act transition recovery; Scenario Sleeve override)
- Ability card deck cycle rules (Burnout state, mid-turn forced draws, Act transition hand reset, Scenario Sleeve override)
- Loot earning (three sources: Scenario Completion, Objective Loot, Class Action Loot; individual ownership; 10 Loot cap; revised shop)
- Act transition triggers (Type A: Objective, Type B: Round Count, Type C: Survival; Victorious/Besieged branching)
- Scenario Sleeve specification (front/back layout, seven zones, transition strips)
- Legacy Card interaction rules (15-word constraint, later card wins, Threat Chain, compounding)
- Monster AI edge cases (Universal Fallback, dual keywords, Threat Chain, committed movement)

### ❌ Cut
- **Saga Event system** — 12 cards + dedicated D6 removed from design and component list. Surprise and variety are fully handled by the Victorious/Besieged branching on the Scenario Sleeve. Scenario designers should incorporate unexpected moments into Act outcome text rather than a separate card system. Simpler, tighter, more portable.

---

## Phase 2 — Character Classes
*Goal: Six mechanically distinct classes that feel different to play, not just different on paper.*

> ⚠️ All class content is currently placeholder. Role, Health, Speed, Signature abilities, and ability cards are undefined for all classes.

### Design Constraints Established in Phase 1
- Each class needs **3-4 XP-marked actions** defined (thematic card XP)
- Each class needs **1-2 Loot-marked actions** defined (class action loot — needs logical narrative wrapper, consider gold/item split)
- Initiative numbers carry double meaning — also used as rest value in Resting rules. High initiative = poor rest card. Design accordingly.
- The 5th ability card can be unlocked early via Loot (6 Loot) before Level 2 XP — class design must account for early access
- Dice threshold improves at Level 5 (Strong Hit band widens to 14-19) and Level 9 (13-19) — must be reflected on Character Board

### ⬜ Backlog
- Define Role, Health, and Speed for all 6 classes
- Define Signature ability for each class (text + mechanical effect)
- Design 4 starting ability cards per class (Top + Bottom actions, initiative value, XP icons, Loot icons)
- Design 2 unlockable ability cards per class (unlocked at Level 2 and Level 6)
- Define Level 4 Signature enhancement for each class
- Define Level 8 Signature mastery for each class
- Balance pass — compare class power curves against each other
- Class identity review — ensure mechanical differentiation is meaningful at the table
- Revisit class action Loot mechanic — current version lacks narrative logic. Consider gold/item split.

### Class-Specific Notes
- **Nidstang** — strongest thematic identity, prioritise first. Curse-pole mechanic has high potential. XP icon on curse-trigger-kill actions.
- **Einherjar** — shield/tank role. Shield Wall signature needs concrete mechanical definition.
- **Valkyrie** — mobility-focused. "Attack again" on crit needs careful balancing against session time budget.
- **Seidr** — support/heal role. Dual damage/heal on same roll table is unusual, worth testing early.
- **Ulfhednar** — risk/reward mechanic implied by Beast Within. Needs a clear risk mechanic, not just a damage bonus.
- **Skald** — inspiration mechanic must feel meaningfully different from Seidr's support role.

---

## Phase 3 — Monster System
*Goal: Every monster feels distinct, behaviourally and thematically, using the AI keyword system.*

### Design Constraints Established in Phase 1
- Every Monster Card needs a **Primary keyword** and optionally a **Secondary keyword**
- No monster should have more than two keywords
- Keyword design should consider the Universal Fallback (defaults to CLOSEST)

### ⬜ Backlog
- Assign Primary and Secondary keywords to all monsters in the compendium
- Define special abilities for each monster (folklore-rooted)
- Write full AI card for each monster (target → move → attack → special)
- Add Mara to the compendium (referenced in Scenario 4, currently missing)
- Define Nidhogg's minions (referenced in Scenario 6, unnamed)
- Balance pass — compare monster threat levels against class health pools

---

## Phase 4 — Scenarios
*Goal: 6 complete, playtestable scenarios with branching objectives that feel mechanically different from each other.*

> ⚠️ All scenario content is currently placeholder.

### Design Constraints Established in Phase 1
- Every scenario must use the **Scenario Sleeve spec** (front/back, seven zones, transition strips)
- Every Act must have exactly **one primary trigger** and **one fallback trigger** (Type A/B/C)
- Every Act transition must resolve into exactly **two named outcomes** (Victorious / Besieged)
- Every scenario must define a **consolation reward** for a lost Act 3
- Every scenario must define a **Legacy Card** (won side + lost side, 15 words or fewer per effect)
- Branching objectives must play differently at the table, not just resolve differently

### ⬜ Backlog
- Restructure `08_scenarios.md` entries to match the seven-zone Sleeve format
- Define all missing fields for each scenario (location, difficulty, player count, enemy lists)
- Design Act 1, 2, and 3 triggers for each scenario (type + fallback)
- Write Victorious and Besieged outcome text for each Act transition
- Design Eliminate and Negotiate mechanical flows for Scenarios 1 and 3
- Design Ambush mechanical flow for Scenario 3
- Define special rules for each scenario (Nokken enchantment, Mara night mechanic, Forge timer, etc.)
- Write consolation reward for each scenario's lost outcome
- Design Legacy Card (won + lost sides, 15-word constraint) for all 6 scenarios
- Define campaign branching — which scenarios unlock from which choices
- Define any hidden scenarios and what Secrets unlock them
- Balance pass — difficulty curve across Scenarios 1-6

---

## Phase 5 — Campaign System
*Goal: A campaign that feels like a living world without requiring a journal or heavy administration.*

### Design Constraints Established in Phase 1
- Legacy Cards are the sole campaign state — no journal
- Later spine slot always wins on contradictions
- Legacy Cards can reference other spine slots by number for compounding effects (use sparingly, late-campaign only)
- Each hero has individual Loot — maximum 10 tokens carried forward
- Between-session flow: recover health, spend loot, level up, read Legacy Cards

### ⬜ Backlog
- Define campaign branching map (which scenarios are linear, which are choice-dependent)
- Define concrete mechanical effects for Allies and Enemies via Legacy Cards
- Define Legacy bonus types (stat boost, narrative flag, new ability, or other)
- Define Secrets system (what clues look like, how they unlock hidden content)
- Define between-session flow step by step (recovery, levelling up, loot spending)
- Confirm Legacy Card spine slot physical design (6 slots, won/lost face visible, slot numbers printed)

---

## Phase 6 — Playtesting & Balance
*Goal: The game plays in 30-45 minutes with meaningful decisions throughout.*

### ⬜ Backlog
- Solo playtest — run a full campaign solo to identify pacing issues
- 2-player playtest
- 3-player playtest
- 4-player playtest (most likely to exceed time budget)
- Validate XP curve — strong campaign (6W/2L) should reach Level 9; tough campaign (4W/4L) should reach Level 7-8
- Validate Exhaustion thresholds — Strained at 3-4 tokens should feel like genuine pressure not constant state
- Validate Loot earning rates — heroes should reach meaningful purchases within 2-3 scenarios
- Validate Burnout frequency — should feel like a rare dramatic moment, not routine
- Validate Act timing — Acts 1/2/3 should hit 10-12 / 15-20 / 5-10 minute targets
- Final conditions review (are all 9 conditions actually used across the game?)
- Legacy Card balance pass (are any cards too dominant across a campaign?)

---

## Phase 7 — Production & Presentation
*Goal: Components are manufacturable, rules are clear to a first-time reader.*

### ⬜ Backlog
- Finalise component list with manufacturing specs
- Character Board physical design (dial, slider, peg slots, Exhaustion threshold markers at slots 3 and 5)
- Scenario Sleeve template design (front/back, seven zones, transition strips)
- Legacy Card template design (spine slot numbers, won/lost sides)
- Rulebook final draft (all TODOs resolved)
- Quick Reference card final version
- Transition strip icon design (Norse-inspired symbols)
- Box layout and spine slot design (6 Legacy Card slots, numbered)

---

## Open Design Questions
*Unresolved decisions that will affect multiple phases when answered.*

- Should loot be split into gold (spendable currency) and items (physical equipment cards)? Current class action loot mechanic lacks narrative logic. (affects Phase 2, 4, 5)
- Does failing a scenario always move the campaign forward, or are there dead-end outcomes? (affects Phase 4, 5)
- Can Legacy Cards ever be removed or flipped mid-campaign, or are they permanent once placed? (affects Phase 1, 5)
- Is there a maximum campaign length, or can players keep playing beyond 6 scenarios? (affects Phase 5)
- What do hidden scenarios look like physically — separate Scenario Sleeves stored outside the box? (affects Phase 5, 7)
