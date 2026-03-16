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

### Design Constraints Established

**Card Pool System:**
- Each class has its own defined **pool size** (total unlockable cards) and **hand size** (cards brought per Act)
- Pool grows at Level 2 (+1 card) and Level 6 (+1 card) — no other source adds ability cards
- Variety across the grand campaign comes from **item equipment**, not card unlocks
- Hand size may vary by player count — defined per class
- Card selection happens at each Act transition where hand reset is not suppressed
- Cards not selected do not exist mechanically during that Act

**Card Design:**
- Each class needs **3-4 XP-marked actions** — thematic actions rewarding class identity
- Each class needs **1-2 Loot-marked actions** — with clear narrative logic per class
- Initiative numbers carry double meaning — also used as Rest Value. High initiative = powerful but poor rest card. Design accordingly.
- Pool size and hand size must create genuine sacrifice decisions every Act

**Item System (resolved):**
- Items do **not** directly modify ability cards — they modify the hero's behaviour independently
- Items have 3 slots: Weapon, Armour, Relic
- Loot Tokens = universal currency. Items = what you buy with them.
- Class action Loot icon narrative logic is now resolved — fear, reputation, and class-specific tradeable value

**Progression:**
- Dice threshold improves at Level 5 (Strong Hit: 14-19) and Level 9 (13-19)
- Must be reflected on Character Board physical design

### ✅ Complete
- **Nidstang** — full class design. Role: Debuff/Control/DoT. Health: 8. Speed: 4. Pool: 8→16. Hand: 5. Curse Token system, Nídstǫng Pole Signature (base/L4/L8), 8 starting cards.
- **Einherjar** — full class design. Role: Tank/Defender. Health: 14. Speed: 3. Pool: 8→16. Hand: 6. Hold Ground system, Skjaldborg Signature (base/L4/L8), 8 starting cards.
- **Valkyrie** — full class design. Role: Damage/Mobility. Health: 10. Speed: 5. Pool: 8→16. Hand: 4. Verdict system, Wings of War Signature (base/L4/L8), 8 starting cards.
- **TOP + BOTTOM rule** — each round: one card played TOP, one card played BOTTOM. Exceptions via Special card or item only.
- **Card pool framework** — class-dependent. Grows +2 at levels 2/4/6/8. Max pool: 10 (Ulfhednar) to 16 (all others).

### 🔄 In Progress
- All six classes complete as first iterations

### ⬜ Backlog
- **Skald** — full class design. Role: Inspire/Amplify. Health: 9. Speed: 4. Pool: 8→16. Hand: 4. Song Track system (1-5), Saga of Heroes Signature (base/L4/L8), 8 starting cards.
- **Seiðr** — full class design. Role: Support/Fate Manipulation. Health: 8. Speed: 3. Pool: 8→16. Hand: 5. Fate Thread system (Protection/Doom/Reversal), Völva's Trance Signature (base/L4/L8), 8 starting cards.
- **Ulfhednar** — full class design. Role: Risk/Reward Damage. Health: 12. Speed: 4/6. Pool: 6→10. Hand: 6. Two-state system (Human/Wolf), Rage Tokens, Odin's Wolf Signature (base/L4/L8), 6 starting cards.
- Balance pass — compare all six class power curves, pool sizes, and hand sizes
- Class identity review — ensure no two classes feel similar at the table
- Validate Loot icon narrative logic per class
- Design unlockable cards (+2 per unlock per class, levels 2/4/6/8)

### Class-Specific Notes
- **Nidstang** ✅ — complete.
- **Einherjar** ✅ — complete.
- **Valkyrie** ✅ — complete.
- **Seiðr** ✅ — complete.
- **Ulfhednar** ✅ — complete.
- **Skald** ✅ — complete.

---

## Phase 3 — Monster System
*Goal: Every monster feels distinct, behaviourally and thematically, using the AI keyword system.*

### ✅ Complete
- **Monster Card format** — double-sided card. Front: Health, Move, Primary/Secondary keywords, any permanent Passives, lore line. Back: integrated Dice Table (max 10 rows) with damage and all special effects built into roll results.
- **Dice Table design rules** — Miss (1-5) always clean. Effects scale upward. 1-4 distinct effects per monster woven into the table at specific rolls or ranges. Permanent passives noted on front of card.
- **Monster tier system** — Standard (HP 4-8), Elite (HP 8-15), Boss (HP 20-40) with stat ranges defined
- **Full keyword list** — 10 Primary keywords (including SONG FOCUS and THREAD SEEKER for Skald/Seiðr synergy), 2 Secondary keywords
- **Boss rules** — Threshold mechanic (50% and 25% HP), Enraged state, Cannot Be Defeated before threshold. Boss cards carry zero threshold text — all threshold behaviour defined on Scenario Sleeve only.
- **Boss Escape mechanic** — bosses escape at threshold HP, can recur across multiple campaign scenarios
- **Full 48-monster compendium** — 5 monsters per realm (Midgard/Jotunheim/Svartalfheim/Muspelheim/Niflheim/Helheim), 6 per realm (Alfheim/Vanaheim/Asgard including bosses)
- **9 realm bosses** — Frost Giant (Jotunheim), Fáfnir (Svartalfheim), Fire Giant (Muspelheim), Níðhöggr (Niflheim), Garmr (Helheim), Dökkálfr the Unbound (Alfheim), Jörð's Wrath (Vanaheim), Loki's Shade (Asgard). Midgard has no dedicated boss by design.
- **Master Vault** — physical storage concept established (separate from book-box, stores all inactive campaigns, characters, and monster sets)

### ⬜ Open Items (validated in Phase 6)
- All stat values are first iteration estimates
- Soul Husk respawn requires Scenario Sleeve to define Cleansed hex locations
- Glamour Hound and Dökkálfr the Unbound alias token placement needs setup ruling in scenario design guidelines
- Wisp Swarm split timing: split tokens activate the following round (not the round they split)
- Loki's Shade Trickster Form — monitor for feel and speed in Phase 6
- Hrimfaxi's Shadow damage boost when target has no Fate Tokens — monitor balance in Phase 6
- Níðhöggr's "Cannot Be Defeated" passive needs clear physical indicator on card (suggested: red border)
- Garmr's threshold stat boosts need tracking mechanism (suggested: small tokens on card)
- Midgard has no boss by design — campaign designers may import from adjacent realms or use recurring bosses

---

## Phase 4 — Scenarios
*Goal: Complete, playtestable scenarios with branching objectives that feel mechanically different from each other.*

### ✅ Complete — Midgard Starter Campaign: *Shadows Over Järnvik*
- **Campaign structure** — 5 scenarios, linear with one branch at S1 (Huldra won/lost)
- **Scenario 1 — The Hollow of the Huldra** — Introductory. Eliminate vs Negotiate branching. Introduces Trust token mechanic and Forest Lure environmental rule.
- **Scenario 2 — The Waking Mound** — Standard. Dual-condition Act 2 objective (seal hexes + weaken jarl). Introduces named monster variants and Darkness rule.
- **Scenario 3 — What Rides the Night** — Challenging. Survival/defense with hidden Mara. Suppressed Act 1→2 Exhaustion recovery. Introduces Sleeper hex protection mechanic.
- **Scenario 4 — The Mountain Road** — Challenging. Three-approach Act 1 (Fight/Sneak/Bargain). Introduces Rune Knowledge carry-forward token.
- **Scenario 5 — The Night of All Shadows** — Campaign finale. Legacy-state-dependent monster roster. Huldra as ally if S1 won. Rune Knowledge token from S4 applies. First World Tree Legacy Card earned.
- **All 5 Legacy Cards designed** — 4 Realm Cards + 1 World Tree Card (Järnvik endures/falls)
- **Scenario design checklist** defined — reference for all future realm campaign designers

### ⬜ Open Items
- Zone 2 hex maps need physical layout diagrams (Phase 7)
- Trust token proxy (Fate Tokens) — confirm no resource conflict in play
- Rune Knowledge token — new component, 1 per Midgard campaign pack
- Scenario 5 worst-case monster count (8 activations) needs balance testing
- Three-approach Scenario 4 needs playtesting at all player counts

### ⬜ Future Campaign Backlog
- Design remaining 8 realm campaigns (Jotunheim, Svartalfheim, Muspelheim, Niflheim, Helheim, Alfheim, Vanaheim, Asgard) — after playtesting validates the Midgard reference implementation
- Each realm campaign: 4-6 scenarios, dedicated boss, realm-specific Legacy Cards
- Define hidden scenarios and Secrets system across grand campaign

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
- **Master Vault** physical design — stores all inactive campaigns, characters, monsters, and components not currently loaded in the book-box. Should accommodate all 9 realm packs, all 6 character sleeves, and all 45 monster sets

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
