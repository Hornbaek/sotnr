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
              <SectionCard title="The Round Structure">
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><span className="font-bold text-primary">1. Hero Phase</span> — Players take turns in any order (lowest initiative first). Play two ability cards — one for its Top action, one for its Bottom action.</p>
                  <p><span className="font-bold text-primary">2. Monster Phase</span> — Each monster activates in spawn order and follows the full Monster AI sequence.</p>
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
                  <li>Read the Scenario Sleeve — front (Acts, rules) and back (transitions).</li>
                  <li>Check active Legacy Cards in the spine slots.</li>
                  <li>Each player chooses a hero, sets XP slider, places miniature on starting hex.</li>
                  <li>Place monster tokens on indicated hexes.</li>
                  <li>Distribute tokens — Fate, Exhaustion, Loot, XP.</li>
                </ol>
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
                  headers={["Level", "XP Needed", "Rewards"]}
                  rows={[
                    ["1", "0", "Starting board, 4 ability cards"],
                    ["2", "25", "Unlock 5th ability card"],
                    ["3", "55", "+2 Health"],
                    ["4", "90", "Signature ability enhanced"],
                    ["5", "120", "Dice threshold improvement (Strong Hit: 14-19)"],
                    ["6", "150", "Unlock 6th ability card"],
                    ["7", "180", "+2 Health"],
                    ["8", "210", "Signature ability mastery"],
                    ["9", "240", "Saga Hero — Strong Hit: 13-19"],
                  ]}
                />
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

              <SectionCard title="Loot Shop">
                <TableBlock
                  headers={["Item", "Cost", "Effect"]}
                  rows={[
                    ["Healing Draught", "2", "Restore 3 Health (once, any session)"],
                    ["Weapon Upgrade", "4", "+1 damage permanently"],
                    ["Runic Charm", "5", "Start next scenario with 2 Fate Tokens"],
                    ["New Ability", "6", "Gain 5th ability card early"],
                    ["Blessing of the Gods", "8", "Strained threshold moves to 4 tokens permanently"],
                  ]}
                />
              </SectionCard>
            </TabsContent>

            {/* MONSTER AI */}
            <TabsContent value="monster-ai" className="space-y-6">
              <SectionCard title="The Monster AI Sequence">
                <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/80">
                  <li>Identify Primary keyword target</li>
                  <li>Apply Secondary keyword if tied</li>
                  <li>Apply Threat Chain if still tied</li>
                  <li>Move toward target (shortest path, full Speed, committed)</li>
                  <li>Attack if in range</li>
                  <li>Apply special ability</li>
                </ol>
              </SectionCard>

              <SectionCard title="Preferred Target Keywords">
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

              <SectionCard title="Committed Movement">
                <p className="text-sm text-foreground/80">
                  A monster identifies its target before moving and commits for the entire activation. If it ends movement in range of a different hero, it does not switch targets. This makes monster behaviour fully predictable — leading monsters away from vulnerable allies is a valid tactic.
                </p>
              </SectionCard>
            </TabsContent>

            {/* QUICK REFERENCE */}
            <TabsContent value="reference" className="space-y-6">
              <SectionCard title="Turn Order">
                <div className="space-y-2 text-sm text-foreground/80">
                  <p><span className="font-bold text-primary">1. Hero Phase:</span> Play 2 cards — Top + Bottom action, any order.</p>
                  <p><span className="font-bold text-primary">2. Monster Phase:</span> Target → Move → Attack → Special Ability</p>
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

              <SectionCard title="Loot Shop">
                <TableBlock
                  headers={["Item", "Cost", "Effect"]}
                  rows={[
                    ["Healing Draught", "2", "Restore 3 HP"],
                    ["Weapon Upgrade", "4", "+1 damage (permanent)"],
                    ["Runic Charm", "5", "Start with 2 Fate Tokens"],
                    ["New Ability", "6", "Gain 5th card early"],
                    ["Blessing", "8", "Strained at 4 tokens"],
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
