

# Sync Rulebook & Characters with Updated Game Dev Documents

## Discrepancies Found

### Game Page — Character Data (`src/pages/Game.tsx`)
1. **Seidr role** says "Support / Healer" — docs say **"Support / Fate Manipulation"** (explicitly not a healer)
2. **Nidstang signature** says "Curse-Pole" — docs say **"The Nídstǫng Pole"**
3. **Nidstang role** says "Debuffer / Curse" — docs say **"Debuff / Control / Damage-over-Time"**
4. **Ulfhednar role** says "Risk / Reward" — docs say **"Risk / Reward Damage"**
5. **Skald role** says "Support / Inspire" — docs say **"Inspire / Support"**
6. Hero cards are missing **Health, Speed, Pool Size, Hand Size** stats that are now defined (at least for Einherjar and Nidstang)

### Rulebook — Progression Tab (`src/pages/Rulebook.tsx`)
7. **Loot Shop is completely outdated** — shows generic items (Weapon Upgrade, Runic Charm, New Ability) that don't exist. Docs now have a full **3-slot equipment system** (Weapon/Armour/Relic) plus Consumables with specific named items
8. **XP Thresholds table is wrong** — says "4 ability cards" at L1 and "Unlock 5th/6th card" at L2/L6. Docs say starting pool is class-defined (6 or 8), pool grows +2 at levels 2/4/6/8, and L1 includes 3 equipment slots
9. **Missing Equipment Slots section** entirely

### Rulebook — How to Play Tab
10. **Ability Cards section** missing: XP icon, Loot icon mentions, the TOP+BOTTOM pairing rule, card pool vs hand size concept, Burnout details

### Rulebook — Quick Reference Tab
11. Loot Shop table is also outdated (same issue as #7)
12. Missing: Card Selection rules, Equipment Slots reference, Legacy Card Rules, Burnout definition

## Plan

### 1. Update Game page hero data (~6 fields)
- Fix Seidr role, Nidstang role/signature, Ulfhednar role, Skald role
- Add `health`, `speed`, `poolSize`, `handSize` to hero data (use values from docs where defined, "TBD" for incomplete classes)
- Show these stats on the hero cards as small stat badges

### 2. Update Rulebook — Progression tab
- Fix XP Thresholds table to match docs (class-defined starting pool, +2 at 2/4/6/8, 3 equipment slots at L1)
- Replace old Loot Shop with two sections: **Consumables** (Healing Draught, Mead of Courage, Rune Salve) and **Equipment** (Weapon/Armour/Relic items with slot labels)
- Add new **Equipment Slots** section explaining the 3-slot system

### 3. Update Rulebook — How to Play tab
- Expand Ability Cards section with TOP+BOTTOM pairing rule, XP/Loot icon explanation, card pool vs hand size
- Add Burnout explanation

### 4. Update Rulebook — Quick Reference tab
- Replace old Loot Shop with Consumables + Equipment tables
- Add Equipment Slots, Card Selection, Legacy Card Rules, and Burnout sections

### Files Modified

| File | Changes |
|---|---|
| `src/pages/Game.tsx` | Fix hero roles/signatures, add stat fields, render stat badges on cards |
| `src/pages/Rulebook.tsx` | Update Progression tab (XP table, equipment system, loot shop), How to Play tab (ability cards), Quick Reference tab (all missing sections) |

