import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Shield, Swords, GitBranch, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import midgardCampaignImg from "@/assets/campaign/midgard-campaign.jpg";
import jotunheimCampaignImg from "@/assets/campaign/jotunheim-campaign.jpg";
import niflheimCampaignImg from "@/assets/campaign/niflheim-campaign.jpg";
import muspelheimCampaignImg from "@/assets/campaign/muspelheim-campaign.jpg";
import alfheimCampaignImg from "@/assets/campaign/alfheim-campaign.jpg";
import svartalfheimCampaignImg from "@/assets/campaign/svartalfheim-campaign.jpg";
import vanaheimCampaignImg from "@/assets/campaign/vanaheim-campaign.jpg";
import asgardCampaignImg from "@/assets/campaign/asgard-campaign.jpg";
import helheimCampaignImg from "@/assets/campaign/helheim-campaign.jpg";

// Types
interface LegacyCard {
  won: string;
  lost: string;
}

interface ScenarioNode {
  id: string;
  name: string;
  quote: string;
  difficulty?: string;
  monsters?: string;
  legacy?: LegacyCard;
  branchNote?: string;
}

interface BranchPath {
  condition: string;
  fromId: string;
  toId: string;
  label: string;
}

interface RealmCampaign {
  name: string;
  image: string;
  subtitle: string;
  linkType: "Standalone" | "Sequential" | "Conditional";
  linkNote: string;
  pack: "Core Box" | "Realm Pack";
  scenarios: ScenarioNode[];
  branches: BranchPath[];
}

// Data
const realmCampaigns: RealmCampaign[] = [
  {
    name: "Midgard",
    image: midgardCampaignImg,
    subtitle: "Shadows Over Järnvik",
    linkType: "Standalone",
    linkNote: "Starting realm — included in the Core Box",
    pack: "Core Box",
    scenarios: [
      {
        id: "m1", name: "The Hollow of the Huldra",
        quote: "They say she lures the lonely into the deep woods.",
        difficulty: "⭐ Introductory", monsters: "Huldra ×1, Myling ×2",
        legacy: { won: "In forest scenarios, the Huldra does not spawn as enemy.", lost: "In forest scenarios, add 1 Huldra token at Act 2 start." },
        branchNote: "Choose: Eliminate or Negotiate the Huldra",
      },
      {
        id: "m2", name: "The Waking Mound",
        quote: "The burial ground has burst from within.",
        difficulty: "⭐⭐ Standard", monsters: "Draugr ×3 (Jarl), Myling ×2",
        legacy: { won: "Draugr deal −1 damage in all scenarios.", lost: "Draugr gain Shield 1 in all scenarios." },
      },
      {
        id: "m3", name: "What Rides the Night",
        quote: "She sits upon your chest while you sleep.",
        difficulty: "⭐⭐⭐ Challenging", monsters: "Mara ×1, Myling ×3",
        legacy: { won: "Heroes begin each session with 1 bonus Fate Token.", lost: "All heroes begin each session with 1 Exhaustion Token." },
      },
      {
        id: "m4", name: "The Mountain Road",
        quote: "The pass has been blocked since the first snow.",
        difficulty: "⭐⭐⭐ Challenging", monsters: "Troll ×1, Ice Wight ×2",
        legacy: { won: "Negotiation actions roll with Advantage.", lost: "Troll attacks deal +1 damage in all scenarios." },
        branchNote: "Choose: Fight, Sneak, or Bargain with the Troll",
      },
      {
        id: "m5", name: "The Rot Beneath",
        quote: "The roots of Järnvik are poisoned.",
        difficulty: "⭐⭐⭐⭐ Hard", monsters: "TBD",
        legacy: { won: "Järnvik endures — each hero gains 3 Loot entering next realm.", lost: "Järnvik falls — each hero begins next realm with 1 Exhaustion Token." },
        branchNote: "S1 outcome determines: Huldra appears as ally (won) or enemy (lost)",
      },
    ],
    branches: [
      { condition: "won", fromId: "m1", toId: "m5", label: "Huldra as optional ally" },
      { condition: "lost", fromId: "m1", toId: "m5", label: "Huldra as enemy" },
    ],
  },
  {
    name: "Jotunheim",
    image: jotunheimCampaignImg,
    subtitle: "Land of Giants",
    linkType: "Standalone",
    linkNote: "Can be played after Midgard in any order",
    pack: "Realm Pack",
    scenarios: [
      { id: "j1", name: "Frostfall Pass", quote: "The jotnar do not raid for gold. They raid to remind us we are small." },
      { id: "j2", name: "The Giant's Throne", quote: "He has sat there since before the first winter." },
      { id: "j3", name: "Avalanche of Bones", quote: "The mountain does not bury — it collects." },
    ],
    branches: [],
  },
  {
    name: "Niflheim",
    image: niflheimCampaignImg,
    subtitle: "Primordial Ice and Mist",
    linkType: "Standalone",
    linkNote: "Can be played after Midgard in any order",
    pack: "Realm Pack",
    scenarios: [
      { id: "n1", name: "The World Tree's Shadow", quote: "Nidhogg gnaws at the roots." },
      { id: "n2", name: "The Mist Devourer", quote: "It does not chase. It simply erases." },
    ],
    branches: [],
  },
  {
    name: "Muspelheim",
    image: muspelheimCampaignImg,
    subtitle: "The Fire Realm",
    linkType: "Standalone",
    linkNote: "Can be played after Midgard in any order",
    pack: "Realm Pack",
    scenarios: [
      { id: "mu1", name: "The Ember Gate", quote: "Beyond the gate, the air itself is a weapon." },
      { id: "mu2", name: "Trial of the Fire Giant", quote: "Surtr's children test the worthy with flame." },
    ],
    branches: [],
  },
  {
    name: "Alfheim",
    image: alfheimCampaignImg,
    subtitle: "Home of the Light Elves",
    linkType: "Standalone",
    linkNote: "Can be played after Midgard in any order",
    pack: "Realm Pack",
    scenarios: [
      { id: "a1", name: "The Stolen Light", quote: "When Alfheim darkens, all realms feel the cold." },
      { id: "a2", name: "Court of Thorns", quote: "The elves smile as they pass sentence." },
    ],
    branches: [],
  },
  {
    name: "Svartalfheim",
    image: svartalfheimCampaignImg,
    subtitle: "The Underground Realm",
    linkType: "Standalone",
    linkNote: "Can be played after Midgard in any order",
    pack: "Realm Pack",
    scenarios: [
      { id: "sv1", name: "The Forge of Svartalfheim", quote: "The dwarves craft wonders… and horrors." },
      { id: "sv2", name: "The Deep Market", quote: "Everything has a price. Everything." },
    ],
    branches: [],
  },
  {
    name: "Vanaheim",
    image: vanaheimCampaignImg,
    subtitle: "Ancient Nature Magic",
    linkType: "Standalone",
    linkNote: "Can be played after Midgard in any order",
    pack: "Realm Pack",
    scenarios: [
      { id: "v1", name: "The Overgrown Shrine", quote: "The forest reclaims what the gods abandoned." },
      { id: "v2", name: "Seeds of Corruption", quote: "Something poisons the roots." },
    ],
    branches: [],
  },
  {
    name: "Asgard",
    image: asgardCampaignImg,
    subtitle: "Halls of the Aesir",
    linkType: "Sequential",
    linkNote: "Unlocks after completing at least 3 other realms",
    pack: "Realm Pack",
    scenarios: [
      { id: "as1", name: "The Broken Bridge", quote: "Bifrost crumbles. What crosses now was never meant to." },
      { id: "as2", name: "Odin's Test", quote: "The All-Father watches. He does not help." },
    ],
    branches: [],
  },
  {
    name: "Helheim",
    image: helheimCampaignImg,
    subtitle: "Realm of the Dishonoured Dead",
    linkType: "Conditional",
    linkNote: "Unlocks based on World Tree Legacy Card outcomes",
    pack: "Realm Pack",
    scenarios: [
      { id: "h1", name: "The River of Knives", quote: "The Gjöll cuts deeper than steel. It cuts the soul." },
      { id: "h2", name: "Hel's Bargain", quote: "She offers a deal. She always offers a deal." },
    ],
    branches: [],
  },
];

const linkTypeColors: Record<string, string> = {
  Standalone: "bg-green-500/20 text-green-400 border-green-500/30",
  Sequential: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Conditional: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

// Scenario Node Component
const ScenarioNodeCard = ({
  scenario,
  index,
  isSelected,
  onClick,
  hasBranch,
}: {
  scenario: ScenarioNode;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  hasBranch: boolean;
}) => (
  <motion.button
    onClick={onClick}
    className={cn(
      "relative group text-left w-full",
      "rounded-lg border p-3 transition-all duration-300",
      isSelected
        ? "border-primary bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
        : "border-border/60 bg-card/30 hover:border-primary/40 hover:bg-card/50"
    )}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Scenario number badge */}
    <div className="flex items-start gap-3">
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
          isSelected
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground/70"
        )}
      >
        S{index + 1}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-bold text-foreground truncate">{scenario.name}</span>
          {hasBranch && (
            <GitBranch className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          )}
        </div>
        <p className="text-xs italic text-muted-foreground mt-0.5 line-clamp-1">"{scenario.quote}"</p>
        {scenario.difficulty && (
          <span className="text-[10px] text-foreground/50 mt-1 block">{scenario.difficulty}</span>
        )}
      </div>
      <ChevronDown
        className={cn(
          "w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 mt-1",
          isSelected && "rotate-180 text-primary"
        )}
      />
    </div>
  </motion.button>
);

// Flow connector line
const FlowConnector = ({ hasBranch }: { hasBranch: boolean }) => (
  <div className="flex justify-center py-1">
    <div className="flex flex-col items-center">
      <div className={cn(
        "w-px h-6",
        hasBranch ? "bg-gradient-to-b from-primary/60 to-primary/20" : "bg-border/60"
      )} />
      {hasBranch ? (
        <GitBranch className="w-3 h-3 text-primary/60 my-0.5" />
      ) : (
        <ArrowRight className="w-3 h-3 text-border/60 rotate-90 my-0.5" />
      )}
      <div className={cn(
        "w-px h-6",
        hasBranch ? "bg-gradient-to-b from-primary/20 to-primary/60" : "bg-border/60"
      )} />
    </div>
  </div>
);

// Scenario detail panel
const ScenarioDetailPanel = ({ scenario, branches, onClose }: {
  scenario: ScenarioNode;
  branches: BranchPath[];
  onClose: () => void;
}) => {
  const relevantBranches = branches.filter(b => b.fromId === scenario.id || b.toId === scenario.id);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <Card className="bg-card/60 border-primary/20 mt-2 mb-1">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-display font-bold text-foreground">{scenario.name}</h4>
              <p className="text-xs italic text-muted-foreground mt-1">"{scenario.quote}"</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Stats */}
          {(scenario.difficulty || scenario.monsters) && (
            <div className="flex flex-wrap gap-3 text-xs">
              {scenario.difficulty && (
                <span className="text-foreground/70">
                  <span className="text-primary font-semibold">Difficulty:</span> {scenario.difficulty}
                </span>
              )}
              {scenario.monsters && (
                <span className="text-foreground/70">
                  <span className="text-primary font-semibold">Monsters:</span> {scenario.monsters}
                </span>
              )}
            </div>
          )}

          {/* Branch note */}
          {scenario.branchNote && (
            <div className="flex items-start gap-2 bg-primary/5 border border-primary/15 rounded-lg p-3">
              <GitBranch className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-xs text-foreground/80">{scenario.branchNote}</p>
            </div>
          )}

          {/* Legacy Card */}
          {scenario.legacy && (
            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-primary uppercase tracking-wider">Legacy Card</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Shield className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-bold text-primary uppercase">Victory Boon</span>
                  </div>
                  <p className="text-xs text-foreground/70">{scenario.legacy.won}</p>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Swords className="w-3 h-3 text-destructive" />
                    <span className="text-[10px] font-bold text-destructive uppercase">Defeat Scar</span>
                  </div>
                  <p className="text-xs text-foreground/70">{scenario.legacy.lost}</p>
                </div>
              </div>
            </div>
          )}

          {/* Branch paths */}
          {relevantBranches.length > 0 && (
            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-primary uppercase tracking-wider">Branching Paths</h5>
              <div className="space-y-1.5">
                {relevantBranches.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-foreground/70">
                    <span className={cn(
                      "px-1.5 py-0.5 rounded text-[10px] font-bold",
                      b.condition === "won" ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"
                    )}>
                      {b.condition === "won" ? "WON" : "LOST"}
                    </span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Single realm tracker
const RealmTracker = ({ realm }: { realm: RealmCampaign }) => {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedData = realm.scenarios.find(s => s.id === selectedScenario);
  const branchedScenarioIds = new Set(
    realm.branches.flatMap(b => [b.fromId, b.toId])
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={cn(
        "bg-card/30 border-border/60 overflow-hidden transition-all duration-300",
        isExpanded && "border-primary/30"
      )}>
        {/* Realm header - always visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left"
        >
          <div className="relative">
            {/* Background image strip */}
            <div className="h-24 sm:h-28 overflow-hidden relative">
              <img
                src={realm.image}
                alt={realm.name}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-card/60" />
              <div className="absolute inset-0 flex items-center px-5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-foreground">
                      {realm.name}
                    </h3>
                    <Badge
                      variant={realm.pack === "Core Box" ? "default" : "secondary"}
                      className="text-[10px] px-1.5 py-0"
                    >
                      {realm.pack}
                    </Badge>
                    <span className={cn(
                      "text-[10px] px-2 py-0.5 rounded-full border font-semibold",
                      linkTypeColors[realm.linkType]
                    )}>
                      {realm.linkType}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground italic">{realm.subtitle}</p>
                  <p className="text-[10px] text-foreground/50 mt-1">{realm.linkNote}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-right hidden sm:block">
                    <div className="text-2xl font-bold text-primary">{realm.scenarios.length}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Scenarios</div>
                  </div>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform",
                    isExpanded && "rotate-180"
                  )} />
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Expanded content - scenario flow */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-5 pt-3 border-t border-border/40">
                {/* Midgard branch diagram */}
                {realm.branches.length > 0 && (
                  <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/15">
                    <div className="flex items-center gap-2 mb-2">
                      <GitBranch className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Campaign Flow</span>
                    </div>
                    <p className="text-xs text-foreground/60 font-mono">
                      S1 ──Won──► S2 ► S3 ► S4 ► S5 (Huldra as ally)
                    </p>
                    <p className="text-xs text-foreground/60 font-mono">
                      {"   "}└──Lost──► S2 ► S3 ► S4 ► S5 (Huldra as enemy)
                    </p>
                  </div>
                )}

                {/* Scenario flow */}
                <div className="space-y-0">
                  {realm.scenarios.map((scenario, i) => (
                    <div key={scenario.id}>
                      <ScenarioNodeCard
                        scenario={scenario}
                        index={i}
                        isSelected={selectedScenario === scenario.id}
                        onClick={() => setSelectedScenario(
                          selectedScenario === scenario.id ? null : scenario.id
                        )}
                        hasBranch={branchedScenarioIds.has(scenario.id)}
                      />

                      {/* Detail panel */}
                      <AnimatePresence>
                        {selectedScenario === scenario.id && selectedData && (
                          <ScenarioDetailPanel
                            scenario={selectedData}
                            branches={realm.branches}
                            onClose={() => setSelectedScenario(null)}
                          />
                        )}
                      </AnimatePresence>

                      {/* Connector to next scenario */}
                      {i < realm.scenarios.length - 1 && (
                        <FlowConnector
                          hasBranch={branchedScenarioIds.has(scenario.id)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

// Main tracker component
const CampaignTracker = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Campaign <span className="text-primary">Progress Tracker</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore the branching scenario paths across all Nine Realms.
            Click any realm to reveal its scenarios, then click a scenario to see its details, Legacy Cards, and branching paths.
          </p>

          {/* Link type legend */}
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            {[
              { type: "Standalone", desc: "No prerequisites" },
              { type: "Sequential", desc: "Requires prior realms" },
              { type: "Conditional", desc: "Legacy Card dependent" },
            ].map(l => (
              <span
                key={l.type}
                className={cn(
                  "px-2.5 py-1 rounded-full border font-semibold",
                  linkTypeColors[l.type]
                )}
              >
                {l.type}: {l.desc}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {realmCampaigns.map((realm) => (
            <RealmTracker key={realm.name} realm={realm} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignTracker;
