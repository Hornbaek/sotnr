import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const TableBlock = ({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} className="text-left px-3 py-2 border-b border-border text-primary font-semibold text-xs uppercase tracking-wide">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border/50 hover:bg-card/30">
            {row.map((cell, j) => (
              <td key={j} className="px-3 py-2 text-foreground/80 text-sm">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div {...fadeIn}>
    <Card className="bg-card/40 border-border mb-6">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-display font-bold text-primary">{title}</h3>
        {children}
      </CardContent>
    </Card>
  </motion.div>
);

const Rulebook = () => {
  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-primary">Rulebook</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The complete rules for Shadows of the Nine Realms
            </p>
          </motion.div>

          <Tabs defaultValue="how-to-play" className="w-full">
            <TabsList className="flex flex-wrap w-full h-auto gap-1 bg-muted/50 p-1 mb-8">
              <TabsTrigger value="how-to-play" className="text-xs sm:text-sm">How to Play</TabsTrigger>
              <TabsTrigger value="combat" className="text-xs sm:text-sm">Combat</TabsTrigger>
              <TabsTrigger value="fate-exhaustion" className="text-xs sm:text-sm">Fate & Exhaustion</TabsTrigger>
              <TabsTrigger value="progression" className="text-xs sm:text-sm">Progression</TabsTrigger>
              <TabsTrigger value="monster-ai" className="text-xs sm:text-sm">Monster AI</TabsTrigger>
              <TabsTrigger value="reference" className="text-xs sm:text-sm">Quick Reference</TabsTrigger>
            </TabsList>

            {/* HOW TO PLAY */}
            <TabsContent value="how-to-play" className="space-y-6">
              <SectionCard title="The Round Structure — Swift & Steady Initiative">
                <div className="space-y-3 text-sm text-foreground/80">
                  <p>Each round has <span className="font-bold text-primary">three phases</span>, determined by monster Initiative values printed on their cards:</p>
                  <p><span className="font-bold text-primary">Phase 1 — Swift Monsters</span> (Initiative 1-5): These monsters activate <span className="font-bold">before</span> all heroes. Lowest Initiative first.</p>
                  <p><span className="font-bold text-primary">Phase 2 — Hero Phase</span>: Players take turns in any order. Play two ability cards — one for its Top action, one for its Bottom action.</p>
                  <p><span className="font-bold text-primary">Phase 3 — Steady Monsters</span> (Initiative 6-10): These monsters activate <span className="font-bold">after</span> all heroes. Lowest Initiative first.</p>
                  <p className="text-xs text-muted-foreground italic">Swift monsters must be anticipated. Steady monsters give heroes first-move advantage. This creates meaningful tactical decisions each round.</p>
                </div>
              </SectionCard>

              <SectionCard title="The 3-Act Session Structure">
                <p className="text-sm text-foreground/80 mb-4">Every session is divided into three Acts with distinct dramatic roles, keeping sessions within 30-45 minutes.</p>
                <TableBlock
                  headers={["Act", "Name", "Role", "Duration"]}
                  rows={[
                    ["1", "The Approach", "Positioning, lower stakes, choices ripple forward", "10-12 min"],
                    ["2", "The Escalation", "Main threat arrives, primary combat", "15-20 min"],
                    ["3", "The Resolution", "Short punchy finale, Legacy Choice", "5-10 min"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-3">At each Act transition: remove Exhaustion Tokens (2 at Act 1→2, 1 at Act 2→3) and return all played cards to hand.</p>
              </SectionCard>

              <SectionCard title="Ability Cards">
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>Each card has a <span className="text-primary font-semibold">Top Action</span> (attack/aggressive) and <span className="text-primary font-semibold">Bottom Action</span> (movement/defense/utility).</p>
                  <p>The <span className="text-primary font-semibold">Initiative Number</span> determines turn order and also serves as the Rest Value.</p>
                  <p>Some actions are marked with an <span className="text-primary font-semibold">XP Icon</span> — triggering these earns XP tokens (~8-12 per session). Others have a <span className="text-primary font-semibold">Loot Icon</span> — earning Loot Tokens when performed.</p>
                </div>
                <h4 className="text-sm font-bold text-primary mt-4 mb-2">The TOP + BOTTOM Rule</h4>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>Each round you play exactly <span className="font-bold">two cards</span>: one for its TOP action and one for its BOTTOM action. You cannot play two TOPs or two BOTTOMs.</p>
                  <p>The pairing is the core decision — which TOP do you want, and which card's TOP are you willing to sacrifice for its BOTTOM?</p>
                </div>
                <h4 className="text-sm font-bold text-primary mt-4 mb-2">Card Pool & Hand Size</h4>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>Each class has a defined <span className="font-bold">card pool</span> (total cards available) and <span className="font-bold">hand size</span> (cards selected per Act). Both vary by class.</p>
                  <p>Pool grows +2 cards at levels 2, 4, 6, and 8. Maximum pool ranges from 10 (Ulfhednar) to 16 (all others).</p>
                </div>
                <h4 className="text-sm font-bold text-primary mt-4 mb-2">Deck Cycle</h4>
                <TableBlock
                  headers={["Situation", "Result"]}
                  rows={[
                    ["Deck has cards", "Draw 2, ready for next turn"],
                    ["Deck empty, discard has cards", "Shuffle discard, gain 1 Exhaustion, draw 2"],
                    ["Both empty", "Burnout — Basic Action only, full reset at turn end"],
                  ]}
                />
                <h4 className="text-sm font-bold text-primary mt-4 mb-2">Burnout</h4>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>When both deck and discard are empty: perform one <span className="font-bold">Basic Action</span> — move up to your Speed OR deal 1 damage to an adjacent enemy. At turn end, ALL played cards return to hand — full reset, no Exhaustion cost.</p>
                </div>
              </SectionCard>

              <SectionCard title="Setup (Under 5 Minutes)">
                <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/80">
                  <li>Open the book-box. Slide the Scenario Sleeve over the left half.</li>
                  <li>Read the Scenario Sleeve — <span className="font-bold">front</span> (Acts, rules) <span className="font-bold">and back</span> (transitions, special rules).</li>
                  <li>Check active Legacy Cards in the spine slots.</li>
                  <li>Each player chooses a hero, sets XP slider, places miniature on starting hex.</li>
                  <li><span className="font-bold text-primary">Select Opening Hand</span> — each player selects cards from their pool up to their hand size.</li>
                  <li>Place monster tokens on indicated hexes.</li>
                  <li>Distribute tokens — Fate, Exhaustion, Loot, XP.</li>
                </ol>
                <p className="text-xs text-muted-foreground mt-3 italic">First game recommendation: Start with Einherjar, Valkyrie, and Seiðr for a balanced party.</p>
              </SectionCard>

              <SectionCard title="Card Selection">
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>At the <span className="font-bold text-primary">start of each Act</span>, select your hand from your card pool (up to your class hand size). This is your toolkit for the Act.</p>
                  <p>Played cards go to your discard pile. When your deck is empty, shuffle your discard back in (gaining 1 Exhaustion).</p>
                  <p>At each Act transition, <span className="font-bold">all played cards return to hand</span> — a full reset.</p>
                  <p className="text-xs text-muted-foreground italic">Note: The Scenario Sleeve's transition strip can suppress recovery with suppression icons — always narratively motivated.</p>
                </div>
              </SectionCard>

              <SectionCard title="Terrain">
                <TableBlock
                  headers={["Terrain", "Movement Cost", "Combat Effect"]}
                  rows={[
                    ["Open", "1 move point per hex", "Standard"],
                    ["Difficult", "2 move points per hex", "No combat effect"],
                    ["Elevated", "1 move point per hex", "Advantage attacking lower ground; Disadvantage attacking upward"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-2">A hex can be both Elevated and Difficult (e.g. a rocky slope) — apply both effects.</p>
              </SectionCard>

              <SectionCard title="Line of Sight">
                <TableBlock
                  headers={["Situation", "Result"]}
                  rows={[
                    ["Line passes through obstacle hex", "Blocked — no LoS"],
                    ["Line passes along shared edge of two hexes", "Obscured — LoS exists but attack at Disadvantage"],
                    ["Attacker Elevated, line passes over one ground-level obstacle", "Clear — elevated position sees over it"],
                    ["Adjacent hexes", "Always clear — regardless of other terrain"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-2">LoS is checked at the moment of the action. Movement during a turn does not retroactively affect LoS.</p>
              </SectionCard>
            </TabsContent>

            {/* COMBAT */}
            <TabsContent value="combat" className="space-y-6">
              <SectionCard title="The D20 System">
                <p className="text-sm text-foreground/80 mb-4">Roll the D20 and consult your Character Board's Dice Result Table. The game uses a fail-forward philosophy — even poor rolls accomplish something.</p>
                <TableBlock
                  headers={["Roll", "Result", "Effect"]}
                  rows={[
                    ["1-3", "Glancing Blow", "Deal 1 damage OR minor bonus effect"],
                    ["4-6", "Weak Hit", "Half damage (round down), no bonus"],
                    ["7-14", "Standard Hit", "Full damage/effect"],
                    ["15-19", "Strong Hit", "Full damage + bonus OR 1 Fate Token"],
                    ["20", "Critical Hit", "Double damage + all bonuses + 2 Fate Tokens"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Dice Threshold Progression">
                <p className="text-sm text-foreground/80 mb-4">As heroes level up, the Strong Hit band widens.</p>
                <TableBlock
                  headers={["Level", "Standard", "Strong", "Critical"]}
                  rows={[
                    ["1-4 (Base)", "7-14", "15-19", "20"],
                    ["5-8 (Tier 1)", "7-13", "14-19", "20"],
                    ["9 (Legendary)", "7-12", "13-19", "20"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Advantage & Disadvantage">
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>Roll the D20 <span className="font-bold">twice</span>. <span className="text-primary">Advantage</span>: keep the higher. <span className="text-primary">Disadvantage</span>: keep the lower.</p>
                  <p>If you have both, they cancel out. Multiple sources of the same type do not stack.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-2">Advantage Sources</h4>
                    <ul className="text-xs text-foreground/70 space-y-1">
                      <li>• Flanking (attacking from behind)</li>
                      <li>• Higher Ground (elevated hex)</li>
                      <li>• Strengthen condition</li>
                      <li>• Certain Legacy Card bonuses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-2">Disadvantage Sources</h4>
                    <ul className="text-xs text-foreground/70 space-y-1">
                      <li>• Strained state (3-4 Exhaustion)</li>
                      <li>• Partial Obscurement</li>
                      <li>• Muddle condition</li>
                      <li>• Certain Legacy Card penalties</li>
                    </ul>
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Conditions">
                <TableBlock
                  headers={["Condition", "Effect"]}
                  rows={[
                    ["Wound", "Suffer 1 damage at start of each turn"],
                    ["Poison", "Suffer 1 damage; healing reduced by 1"],
                    ["Immobilize", "Cannot perform Move actions"],
                    ["Disarm", "Cannot perform Attack actions"],
                    ["Stun", "Skip entire turn"],
                    ["Muddle", "All attacks at Disadvantage"],
                    ["Strengthen", "All attacks at Advantage"],
                    ["Invisible", "Cannot be targeted by monsters"],
                    ["Shield X", "Reduce next X damage by X"],
                  ]}
                />
              </SectionCard>
            </TabsContent>

            {/* FATE & EXHAUSTION */}
            <TabsContent value="fate-exhaustion" className="space-y-6">
              <SectionCard title="Fate Tokens">
                <p className="text-sm text-foreground/80 mb-2">Maximum: 3 per hero. Represent the Norns' favour.</p>
                <h4 className="text-sm font-bold text-primary mt-4 mb-2">Spending</h4>
                <TableBlock
                  headers={["Cost", "Effect", "Timing"]}
                  rows={[
                    ["1", "Reroll the D20 (must use new result)", "Before consulting Dice Table"],
                    ["1", "Add +2 to a D20 result", "After rolling, before Dice Table"],
                    ["1", "Negate 1 Exhaustion", "When Exhaustion is applied"],
                    ["1", "Move 1 additional hex", "As part of any movement"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Exhaustion Thresholds">
                <p className="text-sm text-foreground/80 mb-4">Exhaustion Tokens accumulate on the 6 slots of your Character Board.</p>
                <TableBlock
                  headers={["Tokens", "State", "Effect"]}
                  rows={[
                    ["1-2", "Weary", "No mechanical penalty"],
                    ["3-4", "Strained", "All D20 rolls at Disadvantage"],
                    ["5-6", "Exhausted", "Cannot Attack. Must Rest next turn."],
                    ["7+", "Incapacitated", "Removed from play until Act transition"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Incapacitated Heroes">
                <p className="text-sm text-foreground/80 mb-4">Removed from the hex map but remain engaged. Once per round they may spend Fate Tokens from the sidelines:</p>
                <TableBlock
                  headers={["Cost", "Effect"]}
                  rows={[
                    ["1 Fate", "Give any hero +1 on their next roll"],
                    ["2 Fate", "Remove 1 Exhaustion from any hero"],
                    ["3 Fate", "Grant any hero 1 bonus movement hex"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-2">Returns at next Act transition with 3 Exhaustion Tokens.</p>
              </SectionCard>

              <SectionCard title="Resting">
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><span className="font-bold text-primary">In-Turn Rest:</span> Instead of playing cards, play one card face-down. Remove Exhaustion Tokens equal to that card's initiative number. Cannot Rest while in melee range of an enemy.</p>
                  <p><span className="font-bold text-primary">Act Transition Recovery:</span></p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Act 1 → Act 2: Remove 2 Exhaustion per hero</li>
                    <li>• Act 2 → Act 3: Remove 1 Exhaustion per hero</li>
                  </ul>
                </div>
              </SectionCard>
            </TabsContent>

            {/* PROGRESSION */}
            <TabsContent value="progression" className="space-y-6">
              <SectionCard title="XP Sources">
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><span className="font-bold text-primary">Scenario XP:</span> Win = 20 XP, Loss = 10 XP (plus consolation reward)</p>
                  <p><span className="font-bold text-primary">Card XP:</span> Certain ability cards are marked with an XP icon. Trigger them to earn XP tokens (~8-12 per session).</p>
                </div>
              </SectionCard>

              <SectionCard title="XP Thresholds & Rewards">
                <TableBlock
                  headers={["Level", "XP Needed", "XP Gap", "Rewards"]}
                  rows={[
                    ["1", "0", "—", "Starting board, starting card pool (6 or 8), 3 equipment slots"],
                    ["2", "25", "25", "Unlock ability card (pool grows)"],
                    ["3", "55", "30", "+2 Health"],
                    ["4", "90", "35", "Signature ability enhanced"],
                    ["5", "120", "30", "Dice threshold improvement (Strong Hit: 14-19)"],
                    ["6", "150", "30", "Unlock ability card (pool grows)"],
                    ["7", "180", "30", "+2 Health"],
                    ["8", "210", "30", "Signature ability mastery"],
                    ["9", "240", "30", "Saga Hero — Strong Hit: 13-19"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Card Pool Growth">
                <p className="text-sm text-foreground/80 mb-3">Cards are unlocked at specific levels. No other source adds ability cards.</p>
                <TableBlock
                  headers={["Level", "Cards Unlocked", "Notes"]}
                  rows={[
                    ["1", "Starting pool (class-defined: 6 or 8)", "Varies by class"],
                    ["2", "+2", "First unlock"],
                    ["4", "+2", "Second unlock"],
                    ["6", "+2", "Third unlock"],
                    ["8", "+2", "Fourth unlock"],
                    ["9", "No new cards", "Saga Hero"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-2">Maximum pool at Level 9: 10 cards (Ulfhednar) to 16 cards (all others). Hand size varies by class (4-6 cards per Act).</p>
              </SectionCard>

              <SectionCard title="Level 9 — Saga Hero">
                <p className="text-sm text-foreground/80 mb-4">Reaching Level 9 unlocks Saga Hero status. XP-marked actions now generate Saga Points to benefit allies:</p>
                <TableBlock
                  headers={["Cost", "Effect"]}
                  rows={[
                    ["1 Saga Point", "Give 1 Fate Token to any hero"],
                    ["2 Saga Points", "Any hero moves +2 hexes this turn"],
                    ["3 Saga Points", "Any hero negates damage from one attack"],
                    ["4 Saga Points", "Any hero immediately takes a bonus turn"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Equipment Slots">
                <p className="text-sm text-foreground/80 mb-4">Every hero has <span className="font-bold text-primary">3 equipment slots</span> on their Character Board from Level 1. One item per slot. Swapping happens between scenarios only.</p>
                <TableBlock
                  headers={["Slot", "Type", "Examples"]}
                  rows={[
                    ["Weapon", "Affects attack behaviour", "Runed Blade, Spear of Precision, Venom Edge"],
                    ["Armour", "Affects defence and resilience", "Iron Shield, Wolf Pelt, Rune-Stitched Cloak"],
                    ["Relic", "Affects special abilities and passives", "Blessing of the Gods, Rune-Carved Pendant, Cloak of Shadows"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Loot Shop — Consumables">
                <p className="text-sm text-foreground/80 mb-3">Single-use items purchased with Loot Tokens between scenarios. Maximum 10 Loot Tokens held at any time.</p>
                <TableBlock
                  headers={["Item", "Cost", "Effect"]}
                  rows={[
                    ["Healing Draught", "2 Loot", "Restore 3 Health (use once, any session)"],
                    ["Mead of Courage", "3 Loot", "Gain 2 Fate Tokens immediately"],
                    ["Rune Salve", "3 Loot", "Remove all Exhaustion Tokens (use once, any session)"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Loot Shop — Weapons">
                <TableBlock
                  headers={["Item", "Cost", "Effect"]}
                  rows={[
                    ["Runed Blade", "4 Loot", "On hit, deal 1 damage to an adjacent enemy"],
                    ["Spear of Precision", "6 Loot", "Glancing Blows (1-3) deal 2 damage instead of 1"],
                    ["Venom Edge", "5 Loot", "Enemies you hit gain the Wound condition"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Loot Shop — Armour">
                <TableBlock
                  headers={["Item", "Cost", "Effect"]}
                  rows={[
                    ["Iron Shield", "3 Loot", "Gain Shield 1 at the start of each Act"],
                    ["Wolf Pelt", "4 Loot", "Gain 1 Fate Token when you suffer Exhaustion from a monster attack"],
                    ["Rune-Stitched Cloak", "5 Loot", "Reduce all incoming damage by 1 (minimum 1)"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Loot Shop — Relics">
                <TableBlock
                  headers={["Item", "Cost", "Effect"]}
                  rows={[
                    ["Blessing of the Gods", "6 Loot", "Strained threshold permanently moves to 4 tokens"],
                    ["Rune-Carved Pendant", "5 Loot", "Gain 1 Fate Token when a cursed/Wounded enemy is defeated"],
                    ["Cloak of Shadows", "6 Loot", "Start each Act with Invisible for 1 round"],
                    ["Draupnir Echo", "7 Loot", "Gain 1 Loot Token at the end of each scenario automatically"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Mastery Pool (Grand Campaign)">
                <div className="space-y-3 text-sm text-foreground/80">
                  <p>In the grand campaign (all 9 realms), your <span className="font-bold text-primary">Mastery Pool</span> — all unlocked ability cards — carries forward across realms. This is separate from your <span className="font-bold text-primary">Active Pool</span> (cards available for the current realm based on level).</p>
                  <p>Your <span className="font-bold text-primary">level resets to 3</span> when entering a new realm. You keep equipment and Legacy Cards, but must re-earn XP for levels 4-9.</p>
                </div>
                <h4 className="text-sm font-bold text-primary mt-4 mb-2">What Carries Forward Between Realms</h4>
                <TableBlock
                  headers={["Carries Forward", "Resets"]}
                  rows={[
                    ["All unlocked ability cards (Mastery Pool)", "Level → 3"],
                    ["Equipment (all 3 slots)", "XP → 55 (Level 3 threshold)"],
                    ["Legacy Cards (Realm + World Tree)", "Exhaustion Tokens"],
                    ["Loot Tokens (current balance)", "Fate Tokens → starting value"],
                  ]}
                />
                <h4 className="text-sm font-bold text-primary mt-4 mb-2">Mastery Pool Growth Arc</h4>
                <TableBlock
                  headers={["After Realm", "Mastery Pool Size", "Active Pool (at L3)"]}
                  rows={[
                    ["Midgard (Realm 1)", "~14 cards", "Starting pool + 4"],
                    ["Realm 2", "~18 cards", "Starting pool + 4"],
                    ["Realm 3+", "Growing", "Select from ever-larger Mastery Pool"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-2">This creates a growing tactical toolkit while keeping each realm's challenge fresh.</p>
              </SectionCard>

              <SectionCard title="Campaign Math">
                <p className="text-sm text-foreground/80 mb-3">Expected XP earnings per campaign type:</p>
                <TableBlock
                  headers={["Campaign", "Scenarios", "Expected XP", "Target Level"]}
                  rows={[
                    ["Single Realm (Midgard)", "5", "~140-180", "Level 5-6"],
                    ["Two-Realm Arc", "8-10", "~250-320", "Level 7-8"],
                    ["Grand Campaign (all 9)", "27+", "Level 9 per realm*", "Saga Hero"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-2">*Grand campaign resets level to 3 per realm — reaching Level 9 in any realm unlocks Saga Hero for that realm's finale.</p>
              </SectionCard>
            </TabsContent>

            {/* MONSTER AI */}
            <TabsContent value="monster-ai" className="space-y-6">
              <SectionCard title="Monster Tiers">
                <p className="text-sm text-foreground/80 mb-3">Every monster belongs to a tier that determines its complexity and threat level.</p>
                <TableBlock
                  headers={["Tier", "HP Range", "Appears As", "Boss Threshold"]}
                  rows={[
                    ["Standard", "4-8", "Multiple tokens per scenario", "No"],
                    ["Elite", "8-15", "1-2 per scenario", "No"],
                    ["Boss", "20-40", "1 per scenario", "Yes — at 50% and 25% HP"],
                  ]}
                />
                <h4 className="text-sm font-bold text-primary mt-4 mb-2">Stat Ranges by Tier</h4>
                <TableBlock
                  headers={["Tier", "Health", "Move", "Attack Mod", "Damage"]}
                  rows={[
                    ["Standard", "4-8", "2-4", "+1 to +3", "1-3"],
                    ["Elite", "8-15", "3-5", "+3 to +5", "3-5"],
                    ["Boss", "20-40", "3-6", "+4 to +6", "4-7"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Monster Initiative — Swift & Steady">
                <p className="text-sm text-foreground/80 mb-3">Every Monster Card has an Initiative value (1-10) that determines when it activates:</p>
                <TableBlock
                  headers={["Initiative", "Phase", "Activates"]}
                  rows={[
                    ["1-5", "Swift", "Before all heroes (Phase 1)"],
                    ["6-10", "Steady", "After all heroes (Phase 3)"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-2">Within each phase, monsters activate in Initiative order (lowest first). Ties broken by spawn order.</p>
              </SectionCard>

              <SectionCard title="The Monster AI Sequence">
                <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/80">
                  <li>Identify Primary keyword target</li>
                  <li>Apply Secondary keyword if tied</li>
                  <li>Apply Threat Chain if still tied</li>
                  <li>Move toward target (shortest path, full Speed, committed)</li>
                  <li>Attack if in range — roll D20, consult monster's back-of-card Dice Table</li>
                </ol>
                <p className="text-xs text-muted-foreground mt-2">Special abilities are built into the Dice Table — each roll result may include effects alongside damage. Some monsters also have permanent Passive abilities on the front of the card.</p>
              </SectionCard>

              <SectionCard title="Primary Target Keywords">
                <TableBlock
                  headers={["Keyword", "Behaviour"]}
                  rows={[
                    ["CLOSEST", "Target nearest hero (tie: most Exhaustion)"],
                    ["WEAKEST", "Target hero with lowest remaining Health"],
                    ["EXHAUSTION FOCUS", "Target hero with most Exhaustion Tokens"],
                    ["PACK HUNTER", "Target hero adjacent to 2+ of the same monster type"],
                    ["ISOLATIONIST", "Target hero not adjacent to any allies"],
                    ["RANGED PRIORITY", "Target hero who made a ranged attack this round"],
                    ["HEALER HATE", "Target hero who healed another this round"],
                    ["ELITE", "Target hero with the most Fate Tokens"],
                    ["SONG FOCUS", "Target active Skald (or hero with highest Song Track value)"],
                    ["THREAD SEEKER", "Target hero with most active Fate Threads"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Secondary Keywords (Tie-Breakers)">
                <p className="text-sm text-foreground/80 mb-3">All primary keywords can serve as secondary. Additionally:</p>
                <TableBlock
                  headers={["Keyword", "Behaviour"]}
                  rows={[
                    ["BLOCKER", "If tied, target the hero with the most adjacent allies"],
                    ["EXPOSED", "If tied, target the hero with fewest active equipment items"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="The Threat Chain">
                <p className="text-sm text-foreground/80 mb-3">When heroes are tied on any keyword metric, resolve in this fixed order:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-foreground/80">
                  <li>Most Exhaustion Tokens</li>
                  <li>Lowest current Health</li>
                  <li>Fewest Fate Tokens held</li>
                  <li>Nearest hex position</li>
                  <li>Players choose (extremely rare)</li>
                </ol>
              </SectionCard>

              <SectionCard title="Monster Movement & Exceptions">
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>Monsters identify their target before moving and <span className="font-bold">commit</span> for the entire activation — no switching targets mid-move.</p>
                  <h4 className="text-sm font-bold text-primary mt-3 mb-1">Elite Movement Exception</h4>
                  <p>Elite monsters may move through <span className="font-bold">one hero's hex</span> per activation — forcing that hero 1 hex in a direction of the monster's choice. No damage, but displacement.</p>
                  <h4 className="text-sm font-bold text-primary mt-3 mb-1">Boss Movement Exception</h4>
                  <p>Bosses <span className="font-bold">ignore difficult terrain</span> entirely and may move through hero hexes freely.</p>
                </div>
              </SectionCard>

              <SectionCard title="Monster Attack Resolution">
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>After moving, if in attack range of target:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Roll D20</li>
                    <li>Consult monster's back-of-card Dice Table</li>
                    <li>Apply the full result — damage and all listed effects simultaneously</li>
                  </ol>
                  <p className="mt-2">If <span className="font-bold">not</span> in range after moving: no attack this activation. Monster waits, committed to position.</p>
                  <p className="text-xs text-muted-foreground italic mt-2">Effects in the Dice Table are always applied together. No order dependency within a single result.</p>
                </div>
              </SectionCard>

              <SectionCard title="Boss-Specific Rules">
                <div className="space-y-3 text-sm text-foreground/80">
                  <div>
                    <h4 className="font-bold text-primary mb-1">Threshold Triggers</h4>
                    <p>At 50% and 25% Health, check the Scenario Sleeve. Boss Monster Cards carry no threshold text — all behaviour is defined on the Sleeve for reusability.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Enraged State</h4>
                    <p>If the Sleeve specifies Enraged, flip the Monster Card. The back shows a simplified Enraged Dice Table — higher damage, simpler effects.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Boss Escape</h4>
                    <p>When a boss escapes, remove its token. It does not return in Act 3. The Legacy Card reflects whether it was driven to threshold.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Cannot Be Defeated Before Threshold</h4>
                    <p>If reduced to 0 HP before reaching threshold: the boss escapes at 1 HP. A creature of this power cannot be destroyed in a single encounter.</p>
                  </div>
                </div>
              </SectionCard>
            </TabsContent>

            {/* QUICK REFERENCE */}
            <TabsContent value="reference" className="space-y-6">
              <SectionCard title="Round Structure">
                <div className="space-y-2 text-sm text-foreground/80">
                  <p><span className="font-bold text-primary">Phase 1 — Swift Monsters:</span> Initiative 1-5 activate before heroes.</p>
                  <p><span className="font-bold text-primary">Phase 2 — Hero Phase:</span> Play 2 cards — Top + Bottom action, any order.</p>
                  <p><span className="font-bold text-primary">Phase 3 — Steady Monsters:</span> Initiative 6-10 activate after heroes.</p>
                </div>
              </SectionCard>

              <div className="grid md:grid-cols-2 gap-6">
                <SectionCard title="D20 Results">
                  <TableBlock
                    headers={["Roll", "Result"]}
                    rows={[
                      ["1-3", "Glancing Blow"],
                      ["4-6", "Weak Hit"],
                      ["7-14", "Standard Hit"],
                      ["15-19", "Strong Hit + bonus/Fate"],
                      ["20", "Critical — double + 2 Fate"],
                    ]}
                  />
                </SectionCard>

                <SectionCard title="Fate Token Spending">
                  <TableBlock
                    headers={["Cost", "Effect"]}
                    rows={[
                      ["1", "Reroll D20"],
                      ["1", "+2 to D20 result"],
                      ["1", "Negate 1 Exhaustion"],
                      ["1", "Move +1 hex"],
                    ]}
                  />
                </SectionCard>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <SectionCard title="Exhaustion">
                  <TableBlock
                    headers={["Tokens", "State", "Effect"]}
                    rows={[
                      ["1-2", "Weary", "No penalty"],
                      ["3-4", "Strained", "Disadvantage"],
                      ["5-6", "Exhausted", "No attacks, must Rest"],
                      ["7+", "Incapacitated", "Out until Act transition"],
                    ]}
                  />
                </SectionCard>

                <SectionCard title="Deck Cycle">
                  <TableBlock
                    headers={["Situation", "Result"]}
                    rows={[
                      ["Deck has cards", "Draw 2"],
                      ["Deck empty", "Shuffle, +1 Exhaustion, draw 2"],
                      ["Both empty", "Burnout → Basic Action, full reset"],
                    ]}
                  />
                </SectionCard>
              </div>

              <SectionCard title="Movement & Terrain">
                <TableBlock
                  headers={["Situation", "Effect"]}
                  rows={[
                    ["Normal Terrain", "1 movement point per hex"],
                    ["Difficult Terrain", "2 movement points per hex"],
                    ["Flanking", "Advantage on attack"],
                    ["Higher Ground", "Advantage on attack"],
                    ["Partial Obscurement", "Disadvantage on attack"],
                    ["Obstacle", "Blocks line of sight and movement"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Conditions">
                <TableBlock
                  headers={["Condition", "Effect"]}
                  rows={[
                    ["Wound", "1 damage/turn"],
                    ["Poison", "1 damage, healing -1"],
                    ["Immobilize", "No Move"],
                    ["Disarm", "No Attack"],
                    ["Stun", "Skip turn"],
                    ["Muddle", "Disadvantage"],
                    ["Strengthen", "Advantage"],
                    ["Invisible", "Untargetable"],
                    ["Shield X", "Reduce X damage"],
                  ]}
                />
              </SectionCard>

              <SectionCard title="Equipment Slots">
                <TableBlock
                  headers={["Slot", "Type"]}
                  rows={[
                    ["Weapon", "Affects attacks"],
                    ["Armour", "Affects defence"],
                    ["Relic", "Affects abilities/passives"],
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-2">One item per slot. Swap between scenarios only.</p>
              </SectionCard>

              <div className="grid md:grid-cols-2 gap-6">
                <SectionCard title="Consumables">
                  <TableBlock
                    headers={["Item", "Cost", "Effect"]}
                    rows={[
                      ["Healing Draught", "2", "Restore 3 HP"],
                      ["Mead of Courage", "3", "Gain 2 Fate Tokens"],
                      ["Rune Salve", "3", "Remove all Exhaustion"],
                    ]}
                  />
                </SectionCard>

                <SectionCard title="Card Selection">
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>Each Act, select your <span className="font-bold">hand</span> from your card pool.</p>
                    <p>Play 2 cards per round: 1 TOP + 1 BOTTOM.</p>
                    <p><span className="font-bold text-primary">Burnout:</span> Both deck & discard empty → Basic Action, then full reset.</p>
                  </div>
                </SectionCard>
              </div>

              <SectionCard title="Legacy Cards">
                <div className="space-y-2 text-sm text-foreground/80">
                  <p><span className="font-bold text-primary">Realm Legacy:</span> One per realm scenario — Victory Boon or Defeat Scar.</p>
                  <p><span className="font-bold text-primary">World Tree Legacy:</span> Earned at grand campaign milestones — higher impact.</p>
                  <p>Stored in spine slots of the Book-Box. Active cards affect all future sessions.</p>
                </div>
              </SectionCard>

              <SectionCard title="Monster AI Keywords">
                <TableBlock
                  headers={["Keyword", "Target"]}
                  rows={[
                    ["CLOSEST", "Nearest hero"],
                    ["WEAKEST", "Lowest HP"],
                    ["EXHAUSTION FOCUS", "Most Exhaustion"],
                    ["PACK HUNTER", "Adjacent to 2+ same type"],
                    ["ISOLATIONIST", "No adjacent allies"],
                    ["RANGED PRIORITY", "Used ranged attack"],
                    ["HEALER HATE", "Healed this round"],
                    ["ELITE", "Most Fate Tokens"],
                    ["SONG FOCUS", "Most movement"],
                    ["THREAD SEEKER", "Most conditions"],
                  ]}
                />
              </SectionCard>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Rulebook;
