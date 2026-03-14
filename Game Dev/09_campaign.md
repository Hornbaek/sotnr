# Shadows of the Nine Realms — Campaign System

The campaign spans multiple scenarios with persistent progression, story consequences, and evolving challenges. Everything is tracked physically through Legacy Cards and Character Sleeves — no journal required at any level of play.

---

## Product Structure

**The Core Box** contains the complete game system plus the **Midgard starter campaign** — a self-contained set of scenario sleeves, realm Legacy Cards, and a **grand campaign map** showing all 9 realms connected by Yggdrasil's branches.

**Realm Campaign Packs** are self-contained expansions, one per realm. Each pack contains:
- A set of Scenario Sleeves (number bounded by book-box capacity — see Phase 7)
- Realm Legacy Cards for that campaign
- Realm-specific loot shop items (equipment and consumables themed to that realm)
- Any realm-specific special rules or components
- A defined linking structure: standalone, sequential, or conditional (campaign designer's choice)

---

## The Grand Campaign

The grand campaign is the full arc across all 9 realms. The grand campaign map tracks which realms have been visited, completed, and how they connect.

### Realm Linking Types
Campaign designers choose how their realm connects to others:

| Type | Meaning |
|---|---|
| **Standalone** | Can be played at any point, no prerequisites |
| **Sequential** | Unlocks only after a specific realm is completed |
| **Conditional** | Unlocks based on a specific World Tree Legacy Card outcome |

---

## Two-Tier Legacy Card System

### Realm Legacy Cards (6 slots per realm campaign)
Earned within a single realm campaign at **special story moments** — not automatically after every scenario. A campaign designer defines exactly when they are earned. Effects must apply broadly across multiple scenarios within the realm.

**Physical home:** The realm campaign pack's own Legacy sleeve. Archived back into the pack when the realm is complete.

### World Tree Legacy Cards (6 slots, permanent spine)
Earned only for the most significant cross-realm moments — completing a realm, making a named grand campaign choice, or a specific trigger defined by the campaign designer. Effects must apply across multiple realms — no realm-specific references.

**Physical home:** 6 fixed slots in the book-box spine. Never leave. Later slot always wins on contradictions.

### Legacy Card Rules (Both Tiers)
- Read left to right within each tier at session start
- **Later slot wins** on any contradiction — World Tree cards override Realm cards on direct conflicts
- **15-word constraint** applies to all cards at both tiers
- Additive effects stack naturally; compounding effects are intentional

---

## Cross-Campaign Continuity

| Element | Carries Forward? |
|---|---|
| Hero XP and Level | ✅ Yes — always |
| Loot Tokens | ✅ Yes — individual, capped at 10 |
| Equipped Items | ✅ Yes — stored in Character Sleeve |
| World Tree Legacy Cards | ✅ Yes — always in the spine |
| Realm Legacy Cards | ❌ No — archived in completed realm pack |
| Health | Resets to maximum at new campaign start |

> ⚠️ **Open design question:** Does Saga Hero status (Level 9) carry into the next realm, or do heroes reset to a defined level between realms? See DEV_PLAN.

---

## Between-Session Flow

After every scenario, in this order:

1. **Resolve Act 3** — apply win or loss outcome from the Scenario Sleeve
2. **Award Scenario XP** — 20 XP (win) or 10 XP (loss) + named consolation reward
3. **Count Card XP** — total XP tokens earned, add to running total
4. **Level up** — if XP threshold reached, advance the character board slider and apply rewards
5. **Spend Loot** — each hero spends Loot Tokens individually at the shop (consumables and/or equipment)
6. **Equip items** — swap equipment if desired. Replaced items are discarded.
7. **Recover Health** — all heroes restore Health to maximum
8. **Place Legacy Cards** — if a trigger condition was met, place the earned Legacy Card in the next available slot (Realm or World Tree tier as appropriate)
9. **Prepare next scenario** — set up the next Scenario Sleeve

---

## Loot & Items

### Loot Tokens
Loot Tokens are the universal currency of the campaign. Earned individually, spent individually. Maximum 10 per hero at any time. Carries forward between scenarios and realm campaigns.

### Earning Loot

| Source | Amount | Trigger |
|---|---|---|
| Scenario Completion (Win) | 3 Loot | At Act 3 Resolution |
| Scenario Completion (Loss) | 1 Loot | At Act 3 Resolution |
| Objective Loot | 1-2 Loot | Mid-scenario, printed on Scenario Sleeve |
| Class Action Loot | 1-2 Loot | When a Loot-marked card action is triggered |

### The Item System

Items are purchased with Loot Tokens and equipped between scenarios. They modify the hero's behaviour during play — independently of which ability cards are selected for each Act.

**Three item types:**

| Type | Slot | Effect Style |
|---|---|---|
| **Consumable** | No slot — single use | Immediate effect, then discarded |
| **Equipment** | Weapon / Armour / Relic | Passive modifier active all session while equipped |

**Equipment rules:**
- One item per slot (Weapon, Armour, Relic)
- Equipping a new item in an occupied slot discards the old one
- Swapping happens between scenarios only — never mid-session
- Items are stored in the Character Sleeve alongside ability cards

**Realm-specific items:** Each Realm Campaign Pack introduces new items to the loot shop for the duration of that realm's campaign. These are thematically tied to the realm and represent the unique resources, materials, and magic of that world.

See `05_progression.md` for the full loot shop listing.
