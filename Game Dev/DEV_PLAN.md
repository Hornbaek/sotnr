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
*Goal: A living world campaign structure that scales from a single realm to the full grand campaign across all Nine Realms, without requiring a journal or heavy administration.*

### Product Structure

**The Core Box** contains the complete game system plus the **Midgard starter campaign** — a self-contained set of scenario sleeves, realm Legacy Cards, and a grand campaign map showing all 9 realms. The grand campaign map is included from the start as both a teaser and a functional reference for players tracking their journey.

**Realm Campaign Packs** are self-contained expansions, one per realm. Each pack contains:
- A set of Scenario Sleeves (number determined by the campaign designer, bounded by box capacity)
- Realm Legacy Cards (earned only at special story moments — not one per scenario)
- Any realm-specific rules or components
- A defined linking structure: standalone, sequential, or conditional (designer's choice)

**The Grand Campaign** is the full arc across all 9 realms. It is included in the core box. Additional grand campaigns (different stories across the same realms) may be developed as separate products later.

### Two-Tier Legacy Card System

Legacy Cards are split into two distinct tiers, each with dedicated physical slots in the book-box:

**Realm Legacy Cards** (6 slots per realm campaign)
- Earned within a single realm campaign at special story moments — not automatically after every scenario
- Earned when: a specific Act 2 objective is achieved, a significant choice is made, or a named condition is met (defined per campaign pack)
- Won/lost sides as before — 15-word constraint applies
- Effects should be written broadly enough to remain relevant across scenarios in that realm
- Physical home: the realm campaign pack's own Legacy sleeve, archived in the pack when the realm is complete

**World Tree Legacy Cards** (6 slots in the book-box spine, permanent)
- Earned only for the most significant cross-realm moments — completing a realm, making a grand campaign choice, or a named trigger defined by the campaign designer
- Effects must be written broadly enough to apply across multiple realms — no realm-specific references
- These 6 slots represent the permanent shape of the heroes' grand saga
- Later slot always wins on contradictions, same as realm cards

### Cross-Campaign Continuity

When players complete a realm campaign and move to the next:
- **Hero XP and level** carry forward — heroes grow across the full grand campaign
- **Loot** carries forward — individual, capped at 10 tokens per hero
- **World Tree Legacy Cards** carry forward — always in the spine
- **Realm Legacy Cards** are archived in the completed realm pack — they do not carry forward, but the World Tree cards they triggered do
- **Health** resets to maximum at campaign start

### Grand Campaign Map

The campaign map (included in the core box) shows all 9 realms connected by Yggdrasil's branches. It serves two functions:
- **Navigation** — tracks which realms have been visited, won, or lost
- **Linking** — campaign designers can print route connections on their pack's map overlay, showing which realms their campaign unlocks or requires

Linking types a campaign designer can define:
- **Standalone** — realm can be played at any point, no prerequisites
- **Sequential** — realm unlocks only after a specific other realm is completed
- **Conditional** — realm unlocks based on a specific World Tree Legacy Card outcome

### Design Constraints Established
- Legacy Cards are the sole campaign state — no journal at any level
- Later spine slot always wins on contradictions (both tiers)
- Realm Legacy Cards must be written broadly — no effects so specific they only apply to one scenario
- World Tree Legacy Cards must be written broadly — no realm-specific references
- Hero progression (XP, loot, level) carries forward across all realm campaigns
- The box capacity defines the maximum number of scenario sleeves per realm campaign — exact count defined in Phase 7

### ⬜ Backlog
- Define the grand campaign map design (realm positions, Yggdrasil branch connections, tracking mechanism)
- Define exact trigger conditions for earning Realm Legacy Cards (what counts as "special enough")
- Define exact trigger conditions for earning World Tree Legacy Cards
- Define concrete mechanical effects for Allies and Enemies across realm campaigns
- Define Secrets system (what clues look like, how they unlock hidden realms or scenarios)
- Define between-session and between-realm flow step by step
- Define how XP scaling works across a grand campaign — does Level 9 Saga Hero status carry into the next realm?
- Design the Midgard starter campaign as the reference implementation for all campaign pack design
- Confirm physical slot design for both Legacy Card tiers (see Phase 7)

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

### Book-Box Physical Design — Concept

> ⚠️ Physical design is still being decided. The following captures current thinking, not final decisions.

The book-box uses a **three-panel unfold sequence:**

- **Closed:** A4 format, spine up. Fully portable, fits in a bag.
- **First unfold** (opens like a book): Left panel = hex grid battlefield + Scenario Sleeve slot. Right panel = player dashboards. Footprint: 2× A4.
- **Second unfold** (a third panel folds out from the right panel, away from the battlefield): Contains Legacy Card slots (both tiers), grand campaign map, and between-session reference. Footprint: 3× A4.

The second panel is only needed at setup and between sessions — it folds back during active play, keeping the battlefield clean.

**Manufacturing flags for this design:**
- Robust hinge required between panels 2 and 3
- Legacy Card slots need a retention mechanism so cards don't slide out when the panel folds
- The 3× A4 footprint must be validated against typical table sizes
- Panel 3 thickness must account for 12 Legacy Card slots (6 Realm + 6 World Tree) without adding significant bulk to the closed box

### ⬜ Backlog
- Finalise component list with manufacturing specs
- Confirm three-panel unfold feasibility with manufacturing constraints
- Define panel 3 layout (Realm Legacy Card slots, World Tree Legacy Card slots, campaign map area, between-session reference)
- Character Board physical design (dial, slider, peg slots, Exhaustion threshold markers at slots 3 and 5)
- Scenario Sleeve template design (front/back, seven zones, transition strips)
- Legacy Card template design — two versions: Realm Cards and World Tree Cards (visually distinct)
- Rulebook final draft (all TODOs resolved)
- Quick Reference card final version
- Transition strip icon design (Norse-inspired symbols)
- Grand campaign map design (realm positions, Yggdrasil branch connections, tracking mechanism)
- Realm Campaign Pack physical design (sleeve storage, realm Legacy Card sleeve, pack-specific components)

---

## Open Design Questions
*Unresolved decisions that will affect multiple phases when answered.*

- Should loot be split into gold (spendable currency) and items (physical equipment cards)? Current class action loot mechanic lacks narrative logic. (affects Phase 2, 4, 5)
- Does failing a scenario always move the campaign forward, or are there dead-end outcomes? (affects Phase 4, 5)
- Can Legacy Cards ever be removed or flipped mid-campaign, or are they permanent once placed? (affects Phase 1, 5)
- Does Saga Hero status (Level 9) carry forward into the next realm campaign, or do heroes reset to a defined level between realms? (affects Phase 5, 6)
- What is the maximum number of scenario sleeves a realm campaign pack can contain, given the book-box capacity? (affects Phase 5, 7)
- What do hidden scenarios look like physically — separate Scenario Sleeves stored in the realm pack? (affects Phase 5, 7)
- Does the grand campaign map use a dry-erase surface for tracking, or physical tokens/stickers? (affects Phase 7)
