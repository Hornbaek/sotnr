

# Website Redesign Plan — Aligned to Game Structure

## Summary

The game design documents reveal a rich, well-structured board game with 6 character classes, 7 monsters, 6 scenarios, a 3-act session structure, a campaign system spanning 9 realms, and deep mechanics (D20 combat, exhaustion, fate tokens, legacy cards). The current website has mostly placeholder pages. This plan redesigns the site to properly showcase the game.

## Current State vs. Game Structure

```text
Current Site Pages          Game Content Available
─────────────────          ──────────────────────
Home (generic)             Overview, design pillars, player info
The Game (placeholder)     Components, book-box, character boards
Rulebook (placeholder)     Full mechanics, combat, progression
Lore (DB articles)         Nine Realms descriptions, monster lore
Journal (working)          Dev journal (working)
```

## Proposed Site Structure

### 1. Home Page — Update hero text and feature cards

Update the `AboutGame` section and `Features` component to reflect the actual game:
- Change feature cards to: "1-4 Players", "30-45 Minutes", "Fail-Forward D20", "Portable Book-Box"
- Update description text to match the game's design pillars (cooperative, fail-forward, authentic Norse, portable)
- Fix "Explore the Realms" button to link to `/game`

### 2. The Game Page — Full game showcase

Transform from placeholder into a rich overview page with these sections:
- **Hero banner** with game tagline and key stats (1-4 players, 30-45 min, ages 14+)
- **Design Pillars** — four cards: Fail-Forward, Authentic Norse, Portable & Fast, Cooperative
- **The Heroes** — grid of 6 character class cards (Einherjar, Valkyrie, Seidr, Ulfhednar, Skald, Nidstang) each with name, quote, role placeholder, and icon
- **The Monsters** — grid of 7 monster cards (Draugr, Huldra, Nokken, Troll, Frost Giant, Dwarf Warrior, Mara) with name, quote, and stats (Health/Move/Attack/Damage)
- **The Nine Realms** — reuse realm data already in `NineRealmsPreview` but expanded, showing all 9 realms with descriptions
- **The Scenarios** — list of 6 scenarios with name, quote, and location
- **The Book-Box** — section explaining the physical design and components

### 3. Rulebook Page — Interactive rules reference

Build a tabbed or accordion-based rules page with content from the game docs:
- **How to Play** — round structure, 3-act session, setup steps
- **Combat** — D20 table, advantage/disadvantage, conditions
- **Fate & Exhaustion** — fate tokens, exhaustion thresholds, resting
- **Progression** — XP table, level rewards, dice threshold progression, Saga Hero
- **Monster AI** — keyword system, threat chain, committed movement
- **Quick Reference** — condensed reference card view

All content is static (from the markdown files), no database needed.

### 4. Lore Page — Keep as-is

Already functional with database-driven articles. Just update the heading from "Lore Codex" to "Lore".

### 5. Navigation — No changes needed

Current nav (Home, The Game, Rulebook, Lore, Journal) maps well to this structure.

## Technical Approach

### New/Modified Files

| File | Action | Description |
|---|---|---|
| `src/pages/Game.tsx` | Rewrite | Full game showcase with heroes, monsters, realms, scenarios, book-box sections |
| `src/pages/Rulebook.tsx` | Rewrite | Tabbed rules reference with all mechanics content |
| `src/pages/Index.tsx` | Minor edit | Update feature cards and about text |
| `src/components/AboutGame.tsx` | Edit | Update descriptions and stats to match actual game |
| `src/components/Features.tsx` | Edit | Update to 1-4 players, 30-45 min, etc. |
| `src/components/Hero.tsx` | Minor edit | Link "Explore the Realms" button to `/game` |
| `src/pages/Lore.tsx` | Minor edit | Change "Lore Codex" heading to "Lore" |

### Data Approach

All game content (classes, monsters, scenarios, rules) will be **hardcoded as static data** within the components — no database tables needed. This content comes directly from the game design documents. Placeholder images will use icons from `src/assets/icons/` where available, or styled card designs without images.

### Placeholder Assumptions

Since characters, monsters, and scenarios are still in design:
- **Character classes**: Use the 6 defined names, quotes, and suggested roles (Tank, Damage/Mobility, Support/Healer, Risk/Reward, Support/Inspire, Debuffer/Curse)
- **Monsters**: Use the 7 defined names, quotes, and available stats. Mara gets "TBD" stats.
- **Scenarios**: Use the 6 defined names, quotes, and known locations
- All marked with subtle "In Development" or similar indicators where appropriate

### Design Patterns

- Use existing Framer Motion animations and card patterns from the codebase
- Norse-themed styling consistent with current dark theme and gold primary color
- Responsive grid layouts matching current patterns
- Accordion/Tabs from existing Radix UI components for the Rulebook

### No Database Changes

This is a frontend-only redesign. No migrations needed.

