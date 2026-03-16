

# Sync Website with Updated Game Dev Documents

## Discrepancies Found

### Game Page — Hero Stats

| Hero | Field | Website | Docs |
|---|---|---|---|
| Valkyrie | health | "TBD" | **10** |
| Valkyrie | speed | "TBD" | **5** |
| Seiðr | health | "TBD" | **8** |
| Seiðr | speed | "TBD" | **3** |
| Seiðr | signature | "Web of Fate" | **"Völva's Trance"** |
| Ulfhednar | health | "TBD" | **12** |
| Ulfhednar | speed | "TBD" | **4 / 6 (Human/Wolf)** |
| Skald | health | "TBD" | still TBD in docs — keep as-is |
| Skald | speed | "TBD" | still TBD in docs — keep as-is |

### Game Page — Monster Stats (docs now define full stats)

| Monster | Field | Website | Docs |
|---|---|---|---|
| Draugr | health | 4 | **6** |
| Draugr | attack | "+2" | no attack modifier in new format — remove column or show "—" |
| Huldra | health | 6 | **7** |
| Nokken | health | 5 | **11** (now Elite tier) |
| Nokken | move | 3 | **3** ✓ |
| Troll | health | 8 | **10** (now Elite tier) |
| Frost Giant | health | 15 | **28** (now Boss tier) |
| Mara | all stats | "TBD" | **Health: 8, Move: 3** (now fully defined) |

Monster cards no longer have a simple "attack modifier + damage" — they have dice tables. The current 4-column stat grid (HP/Move/Atk/Dmg) should be updated to show HP and Move only, replacing Atk/Dmg with the monster's **tier** (Standard/Elite/Boss) and **primary keyword**.

### Game Page — Components List

| Component | Website | Docs |
|---|---|---|
| Player Dashboards ×4 | Listed | **Removed** — replaced by Character Sleeves ×6 |
| Character Boards ×6 | "Sliding XP track, token-peg ability slots, health dial" | Add "3 equipment slots" |
| Ability Cards ×24 | "4 unique starting cards per class" | **36+** — "Starting pool + unlockable cards per class" |
| Legacy Cards ×6 | Single entry | Now **two tiers**: Realm Legacy ×6 + World Tree Legacy ×6 |
| Missing: Loot Tokens ×40 | Not listed | Add |
| Missing: XP Tokens ×30 | Not listed | Add |
| Missing: Curse Tokens ×20 | Not listed | Add |
| Hex Grid Map ×1 | Not listed | Add |
| Equipment Cards ×30+ | Not listed | Add |
| D20 Die desc | "Norse runic design" | Add "rolled twice for Advantage/Disadvantage" |

### Game Page — Campaign Section

The Midgard campaign is now fully defined as "Shadows Over Järnvik" with 5 scenarios (not 3). Update:
- Midgard scenarios: The Hollow of the Huldra, The Waking Mound, What Rides the Night, The Mountain Road, The Rot Beneath (5 total)
- Current website only shows 3 placeholder Midgard scenarios

### Rulebook — Monster AI Tab

| Item | Website | Docs |
|---|---|---|
| AI Sequence step 6 | "Apply special ability" | **Remove** — special abilities are baked into dice tables, not separate steps |
| Keywords missing | — | Add **SONG FOCUS** and **THREAD SEEKER** |
| Secondary keywords | Not shown | Add **BLOCKER** and **EXPOSED** as secondary-only keywords |
| Monster Tiers section | Missing | Add Standard/Elite/Boss tier explanation |
| Monster movement rules | Missing | Add committed movement + shortest path details |

### Rulebook — How to Play Tab

- Setup section missing: "Read Active Legacy Cards" step and "Select Opening Hand" step
- Setup still references "Player Dashboards" — should say Character Sleeves
- Missing Card Selection section (choosing cards before each Act)

### Rulebook — Progression Tab

- XP table shows "+2 ability cards" at levels 4 and 8 — docs say cards unlock at 2, 4, 6, 8 (this is already correct)
- Missing: **Mastery Pool** system for grand campaign (cards never reset, level resets to 3 between realms)
- Missing: Campaign Math section showing expected XP per campaign type

### Rulebook — Quick Reference Tab

Need to check if Monster AI section matches updated keywords.

## Plan

### 1. Update Game.tsx hero data
- Set Valkyrie: health=10, speed=5
- Set Seiðr: health=8, speed=3, signature="Völva's Trance"
- Set Ulfhednar: health=12, speed="4/6"

### 2. Update Game.tsx monster data
- Fix all monster stats to match docs (Draugr HP 6, Huldra HP 7, Troll HP 10, Frost Giant HP 28, Mara HP 8/Move 3, Nokken HP 11)
- Replace Atk/Dmg columns with Tier and Primary Keyword

### 3. Update Game.tsx components list
- Replace "Player Dashboards ×4" with "Character Sleeves ×6"
- Update Ability Cards to "36+"
- Split Legacy Cards into two tiers
- Add Loot Tokens, XP Tokens, Curse Tokens, Hex Grid Map, Equipment Cards
- Update descriptions to match docs

### 4. Update CampaignSection.tsx Midgard scenarios
- Replace 3 placeholder scenarios with the 5 real ones from docs: The Hollow of the Huldra, The Waking Mound, What Rides the Night, The Mountain Road, The Rot Beneath

### 5. Update Rulebook.tsx
- Monster AI: remove step 6, add SONG FOCUS/THREAD SEEKER/BLOCKER/EXPOSED keywords, add Monster Tiers section
- How to Play: update Setup to include Legacy Cards step and Card Selection, fix "Player Dashboards" reference
- Progression: add Mastery Pool section, add Campaign Math
- Quick Reference: update keywords list

### Files Modified

| File | Changes |
|---|---|
| `src/pages/Game.tsx` | Hero stats, monster stats/format, components list |
| `src/components/game/CampaignSection.tsx` | Midgard scenarios (5 real ones) |
| `src/pages/Rulebook.tsx` | Monster AI keywords/tiers, Setup steps, Mastery Pool, Campaign Math |

