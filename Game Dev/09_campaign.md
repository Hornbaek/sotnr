# Shadows of the Nine Realms — Campaign System

The campaign spans multiple scenarios with persistent progression, story consequences, and evolving challenges. Your choices determine which scenarios you face and what allies or enemies you make along the way — all tracked physically through Legacy Cards in the book-box spine, with no journal required.

---

## Campaign Structure

A standard campaign consists of **6-8 scenarios** played across multiple sessions.

- **Starting:** All heroes begin at Level 1 with starting abilities and 0 XP
- **Between Scenarios:** Recover health, spend loot, level up if enough XP, read Legacy Cards
- **Story Choices:** Recorded automatically via Legacy Cards in the spine — visible history at a glance

> ⚠️ **Phase 5 work:** Campaign branching map is undefined. Which scenarios are linear and which are choice-dependent is designed in Phase 5.

---

## Between-Session Flow

After every scenario, in this order:

1. **Resolve Act 3** — apply win or loss outcome from the Scenario Sleeve
2. **Award Scenario XP** — 20 XP (win) or 10 XP (loss) + named consolation reward
3. **Count Card XP** — total XP tokens earned during the session, add to running total
4. **Level up** — if XP threshold reached, advance the character board slider and apply rewards. See `05_progression.md`.
5. **Spend Loot** — each hero spends loot individually at the shop. See Loot Shop below.
6. **Recover Health** — all heroes restore Health to maximum
7. **Place Legacy Card** — slide the scenario's Legacy Card (won or lost face showing) into the next available spine slot
8. **Prepare next scenario** — set up the next Scenario Sleeve

---

## Legacy Cards

Legacy Cards are the campaign's memory. Six double-sided cards accumulate in the spine across a campaign — one per scenario, won or lost side showing. They passively modify subsequent scenarios without requiring any journal entries.

### Reading Legacy Cards at Setup
Read all spine cards left to right. Note any effects relevant to this scenario's location or type. Most sessions have 2-3 relevant cards. Irrelevant cards are skipped entirely.

**Setup time for Legacy Cards: under 60 seconds regardless of campaign length.**

### Interaction Rules

**When multiple cards apply:**
- **Additive effects** — both apply independently, stack naturally
- **Contradictory effects** — the **later spine slot wins** (narrative logic: the most recent event shapes the present most strongly)
- **Compounding effects** — two cards can amplify each other intentionally. Embrace this as emergent storytelling.

**The 15-word constraint:** Every Legacy Card effect is a single conditional sentence of 15 words or fewer. If it can't be expressed that simply, it belongs in the Scenario Sleeve instead.

> ✅ *"In forest scenarios, add 1 Huldra token at Act 2 start."*
> ✅ *"All negotiation actions roll with Advantage."*
> ❌ *"When a hero is Strained and adjacent to a monster that was previously cursed, they may..."*

**Spine slot references:** Late-campaign Legacy Cards (slots 5-6) may reference earlier slots by number for compounding effects. Use sparingly.

> *"If Slot 1 is won-side: all forest scenarios begin in Act 2 — skip Act 1 entirely."*

### Story Categories

Legacy Cards naturally track these campaign story elements through their effects:

| Category | How It Works |
|---|---|
| **Allies** | Won-side cards grant positive modifiers when that creature or faction appears |
| **Enemies** | Lost-side cards apply harder conditions when that creature or faction appears |
| **Legacy** | Permanent bonuses from significant campaign choices |
| **Secrets** | ⚠️ TODO Phase 5 — define Secrets system and what they unlock |

---

## Loot

Loot is earned individually per hero and spent independently between scenarios. Each hero holds a **maximum of 10 Loot Tokens** on their character board at any time.

### Earning Loot

| Source | Amount | Trigger |
|---|---|---|
| Scenario Completion (Win) | 3 Loot | At Act 3 Resolution |
| Scenario Completion (Loss) | 1 Loot | At Act 3 Resolution |
| Objective Loot | 1-2 Loot | Mid-scenario, printed on Scenario Sleeve |
| Class Action Loot | 1-2 Loot | When a Loot-marked card action is triggered |

> ⚠️ **Open design question:** Class action Loot currently lacks narrative logic (see DEV_PLAN). Consider splitting into gold/items in Phase 2 revision.

### Loot Shop

Spend loot between scenarios. Purchases are permanent unless otherwise noted.

| Item | Cost | Effect |
|---|---|---|
| Healing Draught | 2 Loot | Restore 3 Health (use once, during any session) |
| Weapon Upgrade | 4 Loot | +1 damage on all attacks (permanent) |
| Runic Charm | 5 Loot | Start next scenario with 2 Fate Tokens |
| New Ability | 6 Loot | Gain your 5th ability card early (before Level 2 XP unlock) |
| Blessing of the Gods | 8 Loot | Permanently lower your Strained threshold — triggers at 4 tokens instead of 3 |
