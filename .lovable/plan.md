

# Redesign Scenarios Section — Realm-Based Campaign Structure

## What Changes

The current flat list of 6 scenarios gets replaced with a **realm-based campaign structure** that reflects the actual game design: a grand campaign starting in Midgard, traveling through all 9 realms, with each realm containing multiple scenarios. Only one realm "pack" fits in the box at a time.

## Data Structure

Each realm gets 2-3 sample scenarios (placeholder). The realms array gains a `scenarios` sub-array:

```text
Midgard (Starter - Core Box)
  ├── The Hollow of the Huldra
  ├── The Drowned Fiddler  
  └── The Shadow Over Birka

Jotunheim
  ├── Frostfall Pass
  ├── The Giant's Throne
  └── Avalanche of Bones

Niflheim
  ├── The World Tree's Shadow
  └── The Mist Devourer

Muspelheim
  ├── The Ember Gate
  └── Trial of the Fire Giant

Alfheim
  ├── The Stolen Light
  └── Court of Thorns

Svartalfheim
  ├── The Forge of Svartalfheim
  └── The Deep Market

Vanaheim
  ├── The Overgrown Shrine
  └── Seeds of Corruption

Asgard
  ├── The Broken Bridge
  └── Odin's Test

Helheim
  ├── The River of Knives
  └── Hel's Bargain
```

## Image Generation

Generate **10 images**:
- 1 grand campaign map (Yggdrasil connecting 9 realms, dark Norse art style, top-down stylized map)
- 9 realm campaign illustrations (one per realm, showing the realm's theme/environment)

## UI Changes to `src/pages/Game.tsx`

1. **Replace** the flat scenarios section with a new "Grand Campaign" section
2. Add the **campaign map** image at the top with explanatory text about the realm pack system
3. Show each realm as an **expandable card** (using Accordion) containing:
   - Realm image (existing)
   - Realm description
   - "Realm Pack" label (Midgard marked as "Core Box")
   - List of scenario names with quotes
4. Update the section nav anchor from "Scenarios" to "Campaign"

## Files Modified

| File | Change |
|---|---|
| `src/pages/Game.tsx` | Rewrite scenarios section into realm-based campaign; add campaign map image; update nav anchor |
| `src/assets/campaign/` | 10 new generated images (1 map + 9 realm campaign illustrations) |

