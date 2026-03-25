

# Sync Website with Latest Game Dev Documents — Comprehensive Comparison

## Summary

After comparing all 11 game dev documents against the website (Game page, Rulebook, Campaign page), here are the discrepancies organized by severity.

---

## GAME PAGE (`src/pages/Game.tsx`)

### Monster Data — Needs Updates

| Monster | Field | Website | Docs |
|---|---|---|---|
| Troll | health | 10 | **12** (07_monsters.md line 85) |
| Troll | tier | Elite | Correct, but move is **2** not shown |
| Dwarf Warrior | primary keyword | PACK HUNTER | Correct ✓ |
| Mara | primary | EXHAUSTION FOCUS | Website says **EXHAUSTION FOCUS** ✓ |
| Nokken | realm | shown in Midgard monsters | Docs place Nokken in **Alfheim** (07_monsters.md line 746) — currently in Midgard section |

**New Midgard monster missing:** The docs define **Myling** (HP 5, Move 4, Standard, CLOSEST/EXHAUSTION FOCUS) as a Midgard monster. It appears in every Midgard scenario but is not on the Game page's monster showcase.

**Nokken is Alfheim, not Midgard:** The docs moved Nokken from Midgard to Alfheim. The Game page still shows it alongside Midgard monsters.

### Hero Data — Minor Updates

| Hero | Field | Website | Docs |
|---|---|---|---|
| Skald | health | 9 | **9** ✓ (now defined in docs — was TBD) |
| Skald | speed | 4 | **4** ✓ (now defined) |
| Skald | handSize | 4 | **4** ✓ |
| Skald | poolSize | 8 | **8** ✓ |
| Skald | signature | "Saga of Heroes" | ✓ Correct |
| Ulfhednar | signature | listed as "Beast Within" | Docs say **"Odin's Wolf"** (04_classes.md line 513) |

### Round Structure — Major Change

The docs now define a **Swift/Steady monster initiative system** (10_quick_reference.md lines 5-16):
- **Phase 1 — Swift Monsters** (Initiative 1-5): Activate BEFORE heroes
- **Phase 2 — Hero Phase**: All heroes act
- **Phase 3 — Steady Monsters** (Initiative 6-10): Activate AFTER heroes

The website's "How to Play" and "Quick Reference" still show the old 2-phase structure (Hero Phase → Monster Phase). This is a fundamental change to round structure.

### Components List — Minor Updates

| Component | Website | Docs |
|---|---|---|
| Scenario Sleeves desc | "Front/back design, slides over the map" | Should add: **"adds terrain and rules to map during play"** |
| Character Boards desc | "Sliding XP track, token-peg ability slots, health dial, 3 equipment slots" | Should add **"health/exhaustion dial"** and mention Exhaustion Token Slots |
| Character Sleeves desc | "One per class — slim pocket holding board, cards, tokens, and equipment" | Correct ✓ |
| Fate Tokens desc | Missing max detail | Should note **"max 3 per hero"** |
| Exhaustion Tokens desc | Missing max detail | Should note **"max 6 per hero"** |
| Loot Tokens desc | Missing max detail | Should note **"max 10 per hero"** |

---

## RULEBOOK PAGE (`src/pages/Rulebook.tsx`)

### How to Play Tab — Round Structure Wrong

**Website shows:**
> 1. Hero Phase — Players take turns
> 2. Monster Phase — Each monster activates

**Docs say (3-phase):**
> Phase 1 — Swift Monsters (Initiative 1-5) activate before heroes
> Phase 2 — Hero Phase
> Phase 3 — Steady Monsters (Initiative 6-10) activate after heroes

### How to Play Tab — Setup Missing Steps

Website setup is 6 steps. Docs define 7 steps with specific details:
- Step 2 should reference reading **front and back** of Scenario Sleeve
- Step 5 should be **"Select Opening Hand"** (currently missing as a distinct step)
- Missing: first game recommendation (Einherjar, Valkyrie, Seiðr)

### How to Play Tab — Missing Card Selection Section

The docs have a full **Card Selection** section (01_components.md lines 86-97) explaining when and how cards are selected at Act transitions, including suppression rules. This is not in the How to Play tab.

### How to Play Tab — Missing Terrain & Line of Sight

The docs have full **Terrain** (02_core_mechanics.md lines 186-201) and **Line of Sight** (lines 204-218) sections. Neither appears in the Rulebook currently.

### Monster AI Tab — Keywords Wrong

| Keyword | Website Description | Docs Description |
|---|---|---|
| SONG FOCUS | "Target hero who moved most hexes" | **"Target active Skald (or hero with highest Song Track value)"** |
| THREAD SEEKER | "Target hero with most conditions" | **"Target hero with most active Fate Threads"** |
| EXPOSED | "Prefer heroes not adjacent to any ally" | **"Prefer heroes with fewest active equipment items"** |
| BLOCKER | "Prefer heroes adjacent to allies" | **"If tied, target the hero with the most adjacent allies"** — similar but should say "most adjacent allies" |

### Monster AI Tab — Missing Content

- **Monster Tiers table** HP ranges wrong: Website says Standard "5-8", docs say **"4-8"** (06_monster_ai.md line 56)
- Missing: **Monster Initiative** section (Swift/Steady system)
- Missing: **Elite Movement Exception** (move through one hero hex)
- Missing: **Boss Movement Exception** (ignore difficult terrain)
- Missing: **Boss-Specific Rules** (threshold triggers, enraged state, escape rules, cannot be defeated before threshold)
- Missing: **Monster Attack Resolution** details
- Missing: **Dice Table Design Rules** explanation

### Progression Tab — XP Table Minor Issue

Website shows "+2 ability cards" at Level 4 and Level 8. Docs say Level 4 gives "Signature ability enhanced" and Level 8 gives "Signature ability mastery" — the +2 cards are separate from these. **The XP gap column is also missing** from the website table (docs show specific gaps: 25, 30, 35, 30, 30, 30, 30, 30).

### Progression Tab — Mastery Pool Incomplete

Website text says "card pool never resets" and "level resets to 3" which is correct but missing key details:
- **Mastery Pool vs Active Pool** distinction not explained
- Missing: what carries forward between realms table
- Missing: Mastery Pool growth arc table (after Midgard: 14 cards, after Realm 2: 18, etc.)

### Quick Reference Tab — Round Structure Wrong

Still shows old 2-phase structure. Should show Swift/Steady 3-phase.

---

## CAMPAIGN PAGE (`src/pages/Campaign.tsx` & `CampaignTracker.tsx`)

### Midgard Scenario 5 — Missing Details

The docs now fully define **Scenario 5 — The Rot Beneath** (08_scenarios.md lines 415+). The CampaignTracker shows it with "TBD" monsters. Docs should be checked for the actual monster list for S5.

### Between-Session Flow Missing

The docs define a detailed 9-step **between-session flow** (09_campaign.md lines 139-152) and 8-step **between-realm flow** (lines 155-164). Neither appears on the Campaign page.

---

## PLAN — Changes by File

### 1. `src/pages/Game.tsx`
- Fix Troll HP from 10 → **12**
- Fix Ulfhednar signature from "Beast Within" → **"Odin's Wolf"**
- Add **Myling** monster (HP 5, Move 4, Standard, CLOSEST/EXHAUSTION FOCUS) with a placeholder image
- Move **Nokken** realm association or add a note it's Alfheim
- Update component descriptions (add per-hero max values for tokens)

### 2. `src/pages/Rulebook.tsx`
- **How to Play**: Rewrite round structure to 3-phase Swift/Steady system
- **How to Play**: Add Card Selection section, Terrain & LoS section, update Setup steps
- **Monster AI**: Fix SONG FOCUS, THREAD SEEKER, EXPOSED, BLOCKER descriptions
- **Monster AI**: Fix Standard tier HP range (4-8), add Monster Initiative section, add Boss Rules section, add Elite/Boss movement exceptions
- **Monster AI**: Add Monster Attack Resolution section
- **Progression**: Add XP Gap column to table, expand Mastery Pool section with carry-forward table and growth arc
- **Quick Reference**: Update round structure to 3-phase, update keyword descriptions

### 3. `src/components/game/CampaignSection.tsx`
- No changes needed — scenarios and structure are current

### 4. `src/components/game/CampaignTracker.tsx`
- Update S5 monster list if docs specify (check remaining scenario doc)

### Files Modified

| File | Scope |
|---|---|
| `src/pages/Game.tsx` | Monster stats, Ulfhednar signature, add Myling, component descriptions |
| `src/pages/Rulebook.tsx` | Round structure overhaul (3-phase), Card Selection, Terrain/LoS, Monster AI fixes, Boss rules, Mastery Pool expansion |

