import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, MapPin, Trophy, Scroll, Shield, Swords, ArrowRight } from "lucide-react";

import grandCampaignMapImg from "@/assets/campaign/grand-campaign-map.jpg";
import midgardCampaignImg from "@/assets/campaign/midgard-campaign.jpg";
import jotunheimCampaignImg from "@/assets/campaign/jotunheim-campaign.jpg";
import niflheimCampaignImg from "@/assets/campaign/niflheim-campaign.jpg";
import muspelheimCampaignImg from "@/assets/campaign/muspelheim-campaign.jpg";
import alfheimCampaignImg from "@/assets/campaign/alfheim-campaign.jpg";
import svartalfheimCampaignImg from "@/assets/campaign/svartalfheim-campaign.jpg";
import vanaheimCampaignImg from "@/assets/campaign/vanaheim-campaign.jpg";
import asgardCampaignImg from "@/assets/campaign/asgard-campaign.jpg";
import helheimCampaignImg from "@/assets/campaign/helheim-campaign.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const campaignRealms = [
  {
    name: "Midgard",
    image: midgardCampaignImg,
    tagline: "Where Your Saga Begins",
    description: "The mortal realm — Viking settlements beset by creatures from the old tales. Midgard serves as your home base and the starting point of the Grand Campaign. Its three scenarios introduce core mechanics and set the stage for the horrors to come.",
    pack: "Core Box",
    difficulty: "Introductory",
    legacyReward: "Bifrost Shard — Unlocks travel to the first Realm Pack",
    scenarios: [
      { name: "The Hollow of the Huldra", quote: "They say she lures the lonely into the deep woods.", objective: "Track the Huldra to her lair before she claims another victim." },
      { name: "The Drowned Fiddler", quote: "Beautiful music from the lake tonight. Too beautiful.", objective: "Silence the Nøkken's melody and rescue the enthralled villagers." },
      { name: "The Shadow Over Birka", quote: "The dead do not rest easy in Birka. Not anymore.", objective: "Discover why the draugr rise and seal the barrow." },
    ],
  },
  {
    name: "Jotunheim",
    image: jotunheimCampaignImg,
    tagline: "Land of Giants",
    description: "Mountains that breathe hostility and valleys carved by ancient rage. The jotnar do not negotiate — they dominate. Your party must navigate treacherous passes and survive encounters with beings who consider mortals insects.",
    pack: "Realm Pack",
    difficulty: "Moderate",
    legacyReward: "Giant's Tooth — Grants +1 damage against Large enemies",
    scenarios: [
      { name: "Frostfall Pass", quote: "The jotnar do not raid for gold. They raid to remind us we are small.", objective: "Cross the frozen pass before the giant patrol returns." },
      { name: "The Giant's Throne", quote: "He has sat there since before the first winter. He will sit there after the last.", objective: "Steal the Rune Stone from the sleeping giant king." },
      { name: "Avalanche of Bones", quote: "The mountain does not bury — it collects.", objective: "Escape the bone-slide while fighting off frost wights." },
    ],
  },
  {
    name: "Niflheim",
    image: niflheimCampaignImg,
    tagline: "Primordial Ice and Mist",
    description: "The realm where creation began in darkness and cold. Even sound freezes here. Visibility is near-zero, and the creatures that dwell in the mist have evolved beyond the need for sight.",
    pack: "Realm Pack",
    difficulty: "Hard",
    legacyReward: "Mist Cloak — Heroes can spend 1 Fate to become Invisible for 1 round",
    scenarios: [
      { name: "The World Tree's Shadow", quote: "Nidhogg gnaws at the roots. If he breaks through, all realms fall.", objective: "Defend the roots of Yggdrasil from Nidhogg's spawn." },
      { name: "The Mist Devourer", quote: "It does not chase. It simply erases.", objective: "Navigate the shifting fog to find and destroy the Devourer's core." },
    ],
  },
  {
    name: "Muspelheim",
    image: muspelheimCampaignImg,
    tagline: "The Fire Realm",
    description: "Burning since before time itself. The air is a weapon, the ground a furnace. Surtr's fire giants guard the realm's borders, and the deeper you venture, the more the world tries to consume you.",
    pack: "Realm Pack",
    difficulty: "Hard",
    legacyReward: "Ember Heart — Immunity to the first Wound condition each scenario",
    scenarios: [
      { name: "The Ember Gate", quote: "Beyond the gate, the air itself is a weapon.", objective: "Breach the Ember Gate before the fire tide rises." },
      { name: "Trial of the Fire Giant", quote: "Surtr's children test the worthy with flame. The unworthy, they consume.", objective: "Survive three rounds of the fire giant's trial arena." },
    ],
  },
  {
    name: "Alfheim",
    image: alfheimCampaignImg,
    tagline: "Home of the Light Elves",
    description: "Beautiful and treacherous in equal measure. The light elves' smiles hide ancient cruelty, and their courts operate on rules mortals cannot comprehend. Trust nothing — especially the beauty.",
    pack: "Realm Pack",
    difficulty: "Moderate",
    legacyReward: "Lightweave — Healing abilities restore +1 additional Health",
    scenarios: [
      { name: "The Stolen Light", quote: "When Alfheim darkens, all realms feel the cold.", objective: "Recover the stolen sunstone before eternal twilight falls." },
      { name: "Court of Thorns", quote: "The elves smile as they pass sentence. They always smile.", objective: "Navigate the elven court's politics to win an audience with the queen." },
    ],
  },
  {
    name: "Svartalfheim",
    image: svartalfheimCampaignImg,
    tagline: "The Underground Realm",
    description: "Where dwarves and dark elves forge wonders and horrors in equal measure. The tunnels twist and the markets sell everything — if you can pay the price. What the dwarves craft, they guard with their lives.",
    pack: "Realm Pack",
    difficulty: "Moderate",
    legacyReward: "Dwarven Rune — One weapon gains Rune slots for permanent enchantment",
    scenarios: [
      { name: "The Forge of Svartalfheim", quote: "The dwarves craft wonders… and horrors.", objective: "Retrieve the legendary hammer before the dark elves claim it." },
      { name: "The Deep Market", quote: "Everything has a price. Everything.", objective: "Barter, bluff, or fight your way to the artifact dealer." },
    ],
  },
  {
    name: "Vanaheim",
    image: vanaheimCampaignImg,
    tagline: "Ancient Nature Magic",
    description: "Realm of the Vanir gods where nature magic runs wild and unchecked. The forests grow sentient, the rivers remember, and something ancient poisons the roots of the world.",
    pack: "Realm Pack",
    difficulty: "Moderate",
    legacyReward: "Nature's Bond — Party gains 1 Fate Token at the start of each scenario",
    scenarios: [
      { name: "The Overgrown Shrine", quote: "The forest reclaims what the gods abandoned.", objective: "Cleanse the corrupted shrine before the rot spreads." },
      { name: "Seeds of Corruption", quote: "Something poisons the roots. The Vanir cannot see it — but you can feel it.", objective: "Trace the corruption to its source deep in the wild heart." },
    ],
  },
  {
    name: "Asgard",
    image: asgardCampaignImg,
    tagline: "Halls of the Aesir",
    description: "Even the gods' halls show cracks as Ragnarök approaches. The Bifrost crumbles, the walls weaken, and things that were never meant to cross between realms begin to slip through.",
    pack: "Realm Pack",
    difficulty: "Very Hard",
    legacyReward: "Odin's Favour — May reroll any die once per scenario without spending Fate",
    scenarios: [
      { name: "The Broken Bridge", quote: "Bifrost crumbles. What crosses now was never meant to.", objective: "Repair the Bifrost fragment before the breach widens." },
      { name: "Odin's Test", quote: "The All-Father watches. He does not help.", objective: "Prove your worth in Odin's arena against divine champions." },
    ],
  },
  {
    name: "Helheim",
    image: helheimCampaignImg,
    tagline: "Realm of the Dishonoured Dead",
    description: "The final realm. Hel herself decides who stays and who serves. The River Gjöll cuts deeper than steel — it cuts the soul. This is where the Grand Campaign reaches its climax.",
    pack: "Realm Pack",
    difficulty: "Legendary",
    legacyReward: "Death's Reprieve — If a hero falls, they may fight one final round",
    scenarios: [
      { name: "The River of Knives", quote: "The Gjöll cuts deeper than steel. It cuts the soul.", objective: "Cross the Gjöll without losing a party member to its depths." },
      { name: "Hel's Bargain", quote: "She offers a deal. She always offers a deal.", objective: "Face Hel and make your choice — the fate of the Nine Realms depends on it." },
    ],
  },
];

const difficultyColor: Record<string, string> = {
  Introductory: "text-green-400",
  Moderate: "text-yellow-400",
  Hard: "text-orange-400",
  "Very Hard": "text-red-400",
  Legendary: "text-purple-400",
};

const Campaign = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 px-4 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.06),transparent_60%)]" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
              The Grand <span className="text-primary">Campaign</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 italic font-serif">
              Journey through all Nine Realms. One Realm Pack at a time.
            </p>
            <p className="text-sm text-foreground/60 max-w-xl mx-auto">
              A connected campaign spanning 21 scenarios across every corner of Norse mythology. 
              Your choices carry forward through Legacy Cards — victories grant permanent boons, 
              defeats leave lasting scars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Map */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeIn} className="relative rounded-xl overflow-hidden border border-border">
            <img
              src={grandCampaignMapImg}
              alt="Grand Campaign Map — Yggdrasil connecting the Nine Realms"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 p-6 text-center">
              <p className="text-sm text-foreground/80 font-serif italic">
                Yggdrasil — The World Tree connects all Nine Realms
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            How the Campaign <span className="text-primary">Works</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Realm Packs",
                desc: "Each realm is a self-contained pack that slots into the Book-Box. Only one realm is 'loaded' at a time — swap packs as you travel between realms.",
              },
              {
                icon: MapPin,
                title: "Linear Journey",
                desc: "Begin in Midgard with the Core Box. Complete its scenarios to unlock the Bifrost and travel to your first Realm Pack. The order of middle realms is flexible.",
              },
              {
                icon: Scroll,
                title: "Legacy Cards",
                desc: "Each scenario has a double-sided Legacy Card. Win: flip to the victory side for a permanent boon. Lose: the defeat side imposes a lasting scar. Both are stored in the Book-Box spine.",
              },
              {
                icon: Trophy,
                title: "The Final Battle",
                desc: "After completing all eight Realm Packs, Helheim unlocks the Grand Finale. Every Legacy Card you've earned — for better or worse — shapes the final confrontation.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.5 }}>
                  <Card className="bg-card/50 border-border hover:border-primary/30 transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campaign Progression */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Campaign <span className="text-primary">Progression</span>
          </motion.h2>
          <motion.p {...fadeIn} className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Track your journey through the Nine Realms. Each realm completed brings you closer to the final confrontation — and every Legacy Card shapes your fate.
          </motion.p>

          <motion.div {...fadeIn} className="space-y-3">
            {campaignRealms.map((realm, i) => (
              <div key={realm.name} className="flex items-center gap-4 p-3 rounded-lg bg-card/30 border border-border/50">
                <img src={realm.image} alt={realm.name} className="w-12 h-12 rounded-lg object-cover hidden sm:block" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-bold text-sm text-foreground">{realm.name}</span>
                    <Badge variant={realm.pack === "Core Box" ? "default" : "secondary"} className="text-[10px] px-1.5 py-0">
                      {realm.pack}
                    </Badge>
                    <span className={`text-[10px] font-semibold ${difficultyColor[realm.difficulty]}`}>
                      {realm.difficulty}
                    </span>
                  </div>
                  <Progress value={0} className="h-1.5" />
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{realm.scenarios.length} scenarios</span>
              </div>
            ))}
          </motion.div>

          <motion.p {...fadeIn} className="text-center text-xs text-muted-foreground mt-4 italic">
            Progress tracking shown above is illustrative. In the physical game, Legacy Cards in the Book-Box spine track your advancement.
          </motion.p>
        </div>
      </section>

      {/* Legacy Card System */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Legacy <span className="text-primary">Cards</span>
          </motion.h2>
          <motion.p {...fadeIn} className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every scenario outcome is permanent. Legacy Cards are double-sided — victory grants a boon, defeat imposes a scar. Both are stored in the Book-Box spine and affect all future scenarios.
          </motion.p>

          <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="bg-card/50 border-primary/30 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Victory Side</h3>
                    <p className="text-xs text-primary">Permanent Boon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  When you complete a scenario successfully, flip the Legacy Card to its victory side. 
                  The boon applies to all future scenarios in the campaign.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Stat bonuses, new abilities, or unique items</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Unlock alternate paths in later realms</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Strengthen your party for the Grand Finale</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-destructive/30 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Swords className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Defeat Side</h3>
                    <p className="text-xs text-destructive">Lasting Scar</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  If the party fails a scenario, the Legacy Card shows its defeat side. 
                  The scar persists — but the campaign continues. You always move forward.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <ArrowRight className="w-3 h-3 text-destructive" />
                    <span>Penalties, lost opportunities, or harder encounters</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <ArrowRight className="w-3 h-3 text-destructive" />
                    <span>Altered story paths — the narrative adapts</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <ArrowRight className="w-3 h-3 text-destructive" />
                    <span>The Grand Finale becomes more desperate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Realm Details */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            The Nine <span className="text-primary">Realms</span>
          </motion.h2>
          <motion.p {...fadeIn} className="text-center text-muted-foreground mb-10">
            Expand each realm to explore its scenarios, Legacy Rewards, and lore.
          </motion.p>

          <motion.div {...fadeIn}>
            <Accordion type="single" collapsible className="space-y-3">
              {campaignRealms.map((realm) => (
                <AccordionItem
                  key={realm.name}
                  value={realm.name}
                  className="border border-border rounded-xl overflow-hidden bg-card/40 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-card/60">
                    <div className="flex items-center gap-4 text-left">
                      <img src={realm.image} alt={realm.name} className="w-16 h-10 rounded object-cover hidden sm:block" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display font-bold text-foreground">{realm.name}</span>
                          <Badge variant={realm.pack === "Core Box" ? "default" : "secondary"} className="text-[10px] px-1.5 py-0">
                            {realm.pack}
                          </Badge>
                          <span className={`text-[10px] font-semibold ${difficultyColor[realm.difficulty]}`}>
                            {realm.difficulty}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{realm.tagline}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5">
                    <div className="flex flex-col md:flex-row gap-5">
                      <img src={realm.image} alt={realm.name} className="w-full md:w-64 h-40 rounded-lg object-cover" />
                      <div className="flex-1 space-y-4">
                        <p className="text-sm text-foreground/80">{realm.description}</p>

                        {/* Legacy Reward */}
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                          <h4 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider flex items-center gap-1.5">
                            <Trophy className="w-3 h-3" /> Legacy Reward (Victory)
                          </h4>
                          <p className="text-sm text-foreground/70">{realm.legacyReward}</p>
                        </div>

                        {/* Scenarios */}
                        <div>
                          <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                            Scenarios ({realm.scenarios.length})
                          </h4>
                          <ul className="space-y-3">
                            {realm.scenarios.map((s) => (
                              <li key={s.name} className="border-l-2 border-primary/30 pl-3">
                                <div className="text-sm font-medium text-foreground">{s.name}</div>
                                <div className="text-xs italic text-muted-foreground mb-1">"{s.quote}"</div>
                                <div className="text-xs text-foreground/60">
                                  <span className="text-primary/70 font-semibold">Objective:</span> {s.objective}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center">
        <motion.div {...fadeIn} className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Begin <span className="text-primary">Your Saga?</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            The Grand Campaign starts with the Core Box. Midgard awaits — and the Nine Realms beyond.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Campaign;
