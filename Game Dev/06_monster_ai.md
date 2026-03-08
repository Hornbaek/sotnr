# Shadows of the Nine Realms — Monster AI System

Monsters are controlled by AI cards that determine their actions. Each monster type has unique behavior patterns and preferred targets.

## How Monster AI Works

During the **Monster Phase**, each monster activates in spawn order (1-4) and follows these steps:

1. **Determine Target** — Use the monster's preferred target keyword (see below)
2. **Move** toward the target
3. **Attack** if in range
4. **Apply special rules** unique to that monster type

---

## Preferred Target Keywords

These keywords determine which hero a monster will attack when multiple are in range:

| Keyword | Behavior |
|---|---|
| CLOSEST | Target nearest hero (tie: most Exhaustion) |
| WEAKEST | Target hero with lowest remaining Health |
| EXHAUSTION FOCUS | Target hero with most Exhaustion Tokens |
| PACK HUNTER | Focus hero adjacent to 2+ of same monster type |
| ISOLATIONIST | Target heroes not adjacent to any allies |
| RANGED PRIORITY | Target heroes who made ranged attacks |
| HEALER HATE | Target heroes who healed others |
| ELITE | Target hero with most Fate Tokens |

---

## Notes

> ⚠️ **TODO:** Define what happens when no valid target exists for a keyword (e.g. PACK HUNTER when no hero is adjacent to 2+ monsters).

> ⚠️ **TODO:** Define whether monsters can have multiple keywords, and if so, how priority is resolved.

> ⚠️ **TODO:** Define monster special abilities and how they trigger (e.g. Nokken's enchanting song, Troll's sunlight weakness).
