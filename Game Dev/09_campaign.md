# Shadows of the Nine Realms — Campaign System

The campaign spans multiple scenarios with persistent progression, story consequences, and evolving challenges. Everything is tracked physically through Legacy Cards — no journal required at any level of play.

---

## Product Structure

**The Core Box** contains the complete game system plus the **Midgard starter campaign** — a self-contained set of scenario sleeves, realm Legacy Cards, and a **grand campaign map** showing all 9 realms connected by Yggdrasil's branches.

**Realm Campaign Packs** are self-contained expansions, one per realm. Each pack contains:
- A set of Scenario Sleeves (number bounded by book-box capacity — see Phase 7)
- Realm Legacy Cards for that campaign
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

The system supports all three — the core box doesn't mandate an order, but individual campaign packs may.

---

## Two-Tier Legacy Card System

Legacy Cards are split into two tiers with distinct physical slots in the book-box.

### Realm Legacy Cards (6 slots per realm campaign)

Earned within a single realm campaign at **special story moments** — not automatically after every scenario. A campaign designer defines exactly when they are earned:

- A specific Act 2 objective achieved
- A significant narrative choice made
- A named trigger condition met (printed on the Scenario Sleeve)

**Design constraint:** Effects must be written broadly enough to apply across multiple scenarios within the realm — not so specific they only fire once.

**Physical home:** The realm campaign pack's own Legacy sleeve. When a realm is complete, the realm cards are archived back into the pack.

---

### World Tree Legacy Cards (6 slots, permanent spine slots)

Earned only for the most significant cross-realm moments:
- Completing a realm campaign (won or lost side)
- Making a named grand campaign choice
- A specific trigger defined by the campaign designer

**Design constraint:** Effects must apply across multiple realms — no realm-specific references. These are the permanent scars and blessings of the grand journey.

**Physical home:** The 6 fixed slots in the book-box. These never leave. Later slot always wins on contradictions.

---

### Legacy Card Interaction Rules (Both Tiers)

- Read left to right within each tier at session start
- **Later slot wins** on any contradiction — within a tier and between tiers (World Tree cards override Realm cards on direct conflicts)
- **Additive effects** stack naturally
- **Compounding effects** are intentional — embrace emergent storytelling
- **15-word constraint** applies to all Legacy Cards at both tiers
- World Tree Cards may reference their own slot numbers for late-campaign compounding (use sparingly)

> ✅ *"In mountain scenarios, Frost Giant attacks deal 1 additional damage."*
> ✅ *"All heroes begin each session with 1 bonus Fate Token."*
> ❌ *"When adjacent to a cursed enemy in a forest hex during Act 2..."*

---

## Cross-Campaign Continuity

When heroes complete a realm campaign and move to the next:

| Element | Carries Forward? |
|---|---|
| Hero XP and Level | ✅ Yes — always |
| Loot Tokens | ✅ Yes — individual, capped at 10 |
| World Tree Legacy Cards | ✅ Yes — always in the spine |
| Realm Legacy Cards | ❌ No — archived in the completed realm pack |
| Health | Resets to maximum at new campaign start |

> ⚠️ **Open design question:** Does Saga Hero status (Level 9) carry into the next realm, or do heroes reset to a defined level between realms? See DEV_PLAN.

---

## Between-Session Flow

After every scenario, in this order:

1. **Resolve Act 3** — apply win or loss outcome from the Scenario Sleeve
2. **Award Scenario XP** — 20 XP (win) or 10 XP (loss) + named consolation reward
3. **Count Card XP** — total XP tokens earned during the session, add to running total
4. **Level up** — if XP threshold reached, advance the character board slider and apply rewards. See `05_progression.md`.
5. **Spend Loot** — each hero spends loot individually at the shop
6. **Recover Health** — all heroes restore Health to maximum
7. **Place Legacy Cards** — if a trigger condition was met this session, place the earned Realm or World Tree Legacy Card in the next available slot
8. **Prepare next scenario** — set up the next Scenario Sleeve

---

## Loot

Loot is earned individually per hero and spent independently between scenarios. Each hero holds a **maximum of 10 Loot Tokens** at any time. Loot carries forward between scenarios and between realm campaigns.

### Earning Loot

| Source | Amount | Trigger |
|---|---|---|
| Scenario Completion (Win) | 3 Loot | At Act 3 Resolution |
| Scenario Completion (Loss) | 1 Loot | At Act 3 Resolution |
| Objective Loot | 1-2 Loot | Mid-scenario, printed on Scenario Sleeve |
| Class Action Loot | 1-2 Loot | When a Loot-marked card action is triggered |

> ⚠️ **Open design question:** Class action Loot currently lacks narrative logic. Consider splitting into gold/items in Phase 2 revision. See DEV_PLAN.

### Loot Shop

Spend loot between scenarios. Purchases are permanent unless otherwise noted.

| Item | Cost | Effect |
|---|---|---|
| Healing Draught | 2 Loot | Restore 3 Health (use once, during any session) |
| Weapon Upgrade | 4 Loot | +1 damage on all attacks (permanent) |
| Runic Charm | 5 Loot | Start next scenario with 2 Fate Tokens |
| New Ability | 6 Loot | Gain your 5th ability card early (before Level 2 XP unlock) |
| Blessing of the Gods | 8 Loot | Permanently lower your Strained threshold — triggers at 4 tokens instead of 3 |
