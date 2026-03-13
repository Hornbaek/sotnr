import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sword, Heart, Flame, Music, Skull, Users, Clock, Dices, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import realm images & icons
import niflheimImg from "@/assets/realms/niflheim.jpg";
import muspelheimImg from "@/assets/realms/muspelheim.jpg";
import asgardImg from "@/assets/realms/asgard.jpg";
import midgardImg from "@/assets/realms/midgard.jpg";
import vanaheimImg from "@/assets/realms/vanaheim.jpg";
import alfheimImg from "@/assets/realms/alfheim.jpg";
import svartalfheimImg from "@/assets/realms/svartalfheim.jpg";
import jotunheimImg from "@/assets/realms/jotunheim.jpg";
import helheimImg from "@/assets/realms/helheim.jpg";

const heroClasses = [
  {
    name: "Einherjar",
    quote: "Stand firm, shield-brothers! The Einherjar do not yield!",
    role: "Tank / Defender",
    icon: Shield,
    signature: "Shield Wall",
    description: "Fallen warriors chosen by Odin. Masters of defense and battlefield control."
  },
  {
    name: "Valkyrie",
    quote: "I choose the slain. I guide the worthy. I am the spear of judgment.",
    role: "Damage / Mobility",
    icon: Sword,
    signature: "Wings of War",
    description: "Odin's choosers of the slain. Swift executioners who reap the unworthy."
  },
  {
    name: "Seidr",
    quote: "The threads of fate are mine to weave… and to sever.",
    role: "Support / Healer",
    icon: Heart,
    signature: "Web of Fate",
    description: "Sorceresses who read the threads of fate and bend reality to their will."
  },
  {
    name: "Ulfhednar",
    quote: "The wolf does not pity the lamb. I am the wolf.",
    role: "Risk / Reward",
    icon: Flame,
    signature: "Beast Within",
    description: "Wolf-pelt warriors who channel the beast's fury for devastating results."
  },
  {
    name: "Skald",
    quote: "Listen, and I will sing of heroes yet to fall…",
    role: "Support / Inspire",
    icon: Music,
    signature: "Saga of Heroes",
    description: "Poets who preserve the deeds of heroes and inspire allies to greater heights."
  },
  {
    name: "Nidstang",
    quote: "I raise the curse-pole. Let doom find the unworthy.",
    role: "Debuffer / Curse",
    icon: Skull,
    signature: "Curse-Pole",
    description: "Dark practitioners who wield forbidden magic through the curse-pole."
  },
];

const monsters = [
  { name: "Draugr", quote: "The dead walk when dishonored.", health: 4, move: 3, attack: "+2", damage: 2 },
  { name: "Huldra", quote: "Beautiful as spring, hollow as a rotting log.", health: 6, move: 4, attack: "+3", damage: 3 },
  { name: "Nokken", quote: "He plays most beautifully when someone is about to drown.", health: 5, move: 3, attack: "+3", damage: 3 },
  { name: "Troll", quote: "Trolls turn to stone in sunlight. Until then, they crush.", health: 8, move: 2, attack: "+3", damage: 4 },
  { name: "Frost Giant", quote: "They raid to remind us we are small.", health: 15, move: 3, attack: "+4", damage: 5 },
  { name: "Dwarf Warrior", quote: "Dwarves craft wonders… and guard them with their lives.", health: 5, move: 3, attack: "+3", damage: 3 },
  { name: "Mara", quote: "She sits upon your chest while you sleep.", health: "TBD", move: "TBD", attack: "TBD", damage: "TBD" },
];

const scenarios = [
  { name: "The Hollow of the Huldra", quote: "They say she lures the lonely into the deep woods.", location: "Midgard", enemies: "Huldra" },
  { name: "The Drowned Fiddler", quote: "Beautiful music from the lake tonight. Too beautiful.", location: "Midgard", enemies: "Nokken" },
  { name: "Frostfall Pass", quote: "The jotnar do not raid for gold.", location: "Jotunheim Border", enemies: "Frost Giant, Trolls" },
  { name: "The Nightmare Rider", quote: "You cannot move. You cannot scream.", location: "Unknown", enemies: "Mara" },
  { name: "The Forge of Svartalfheim", quote: "The dwarves craft wonders… and horrors.", location: "Svartalfheim", enemies: "Dwarf Warriors" },
  { name: "The World Tree's Shadow", quote: "Nidhogg gnaws at the roots. If he breaks through, all realms fall.", location: "Niflheim / Yggdrasil", enemies: "Nidhogg's minions" },
];

const realms = [
  { name: "Asgard", image: asgardImg, description: "Realm of the Aesir gods, shining citadels and divine power." },
  { name: "Midgard", image: midgardImg, description: "The mortal realm, where humanity struggles against monsters and the whims of gods." },
  { name: "Jotunheim", image: jotunheimImg, description: "Land of frost and fire giants, treacherous and wild." },
  { name: "Niflheim", image: niflheimImg, description: "Realm of ice, mist, and primordial cold." },
  { name: "Muspelheim", image: muspelheimImg, description: "Fire realm of the fire giants, burning and eternal." },
  { name: "Alfheim", image: alfheimImg, description: "Home of the light elves, beautiful and deceiving." },
  { name: "Svartalfheim", image: svartalfheimImg, description: "Underground realm of dwarves and dark elves." },
  { name: "Vanaheim", image: vanaheimImg, description: "Realm of the Vanir gods, nature and ancient magic." },
  { name: "Helheim", image: helheimImg, description: "Realm of the dead, ruled by the goddess Hel." },
];

const components = [
  { name: "Book-Box", qty: "1", desc: "Magnetic closure, A4 size, opens like a book" },
  { name: "Player Dashboards", qty: "4", desc: "Dry-erase compatible with health/exhaustion tracking" },
  { name: "Character Boards", qty: "6", desc: "Sliding XP track, token-peg ability slots, health dial" },
  { name: "Ability Cards", qty: "24", desc: "4 unique starting cards per class" },
  { name: "Monster Cards", qty: "12", desc: "6 types with stats and AI behaviour" },
  { name: "Scenario Sleeves", qty: "6", desc: "Front/back design, slides over the map" },
  { name: "Legacy Cards", qty: "6", desc: "Double-sided (won/lost), stored in spine slots" },
  { name: "D20 Die", qty: "1", desc: "Norse runic design" },
  { name: "Hero Miniatures", qty: "4", desc: "Wooden block-style figurines" },
  { name: "Monster Tokens", qty: "24", desc: "Wooden discs for each monster type" },
  { name: "Fate Tokens", qty: "40", desc: "Wooden tokens for dice manipulation" },
  { name: "Exhaustion Tokens", qty: "20", desc: "Track hero fatigue" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Game = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-28 px-4 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.06),transparent_60%)]" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
              The <span className="text-primary">Game</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 italic font-serif">
              A cooperative tactical adventure through Norse mythology
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> 1-4 Players</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 30-45 Minutes</span>
              <span className="flex items-center gap-2"><Dices className="w-4 h-4 text-primary" /> D20 Fail-Forward</span>
              <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary" /> Ages 14+</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Pillars */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Design <span className="text-primary">Pillars</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fail-Forward", desc: "Every roll accomplishes something. No dead ends, no wasted turns — even campaign losses reward the party." },
              { title: "Authentic Norse", desc: "Creatures and lore drawn from actual Scandinavian mythology, not generic fantasy." },
              { title: "Portable & Fast", desc: "Book-box design, under 5 minutes to set up, 30-45 minute sessions." },
              { title: "Cooperative", desc: "Players work together against the game. Reach Level 9 and fight for your allies as a Saga Hero." },
            ].map((pillar, i) => (
              <motion.div key={pillar.title} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Card className="bg-card/50 border-border hover:border-primary/30 transition-all h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heroes */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              The <span className="text-primary">Heroes</span>
            </h2>
            <p className="text-muted-foreground">Six unique classes — each with their own dice table, signature ability, and progression</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroClasses.map((hero, i) => {
              const Icon = hero.icon;
              return (
                <motion.div key={hero.name} {...fadeIn} transition={{ delay: i * 0.08, duration: 0.5 }}>
                  <Card className="bg-card/60 border-border hover:border-primary/40 transition-all group h-full">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary">{hero.name}</h3>
                          <span className="text-xs text-muted-foreground">{hero.role}</span>
                        </div>
                      </div>
                      <p className="text-sm italic text-foreground/60">"{hero.quote}"</p>
                      <p className="text-sm text-foreground/80">{hero.description}</p>
                      <div className="text-xs text-primary/70 pt-1">
                        Signature: <span className="font-semibold">{hero.signature}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monsters */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              The <span className="text-primary">Monsters</span>
            </h2>
            <p className="text-muted-foreground">Creatures drawn from authentic Norse folklore — each with unique AI-driven behaviour</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {monsters.map((monster, i) => (
              <motion.div key={monster.name} {...fadeIn} transition={{ delay: i * 0.06, duration: 0.5 }}>
                <Card className="bg-card/50 border-border hover:border-destructive/30 transition-all h-full">
                  <CardContent className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-primary">{monster.name}</h3>
                    <p className="text-xs italic text-foreground/60">"{monster.quote}"</p>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div>
                        <div className="text-muted-foreground">HP</div>
                        <div className="font-bold text-foreground">{monster.health}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Move</div>
                        <div className="font-bold text-foreground">{monster.move}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Atk</div>
                        <div className="font-bold text-foreground">{monster.attack}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Dmg</div>
                        <div className="font-bold text-foreground">{monster.damage}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nine Realms */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              The <span className="text-primary">Nine Realms</span>
            </h2>
            <p className="text-muted-foreground">The World Tree Yggdrasil connects nine distinct realms</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realms.map((realm, i) => (
              <motion.div key={realm.name} {...fadeIn} transition={{ delay: i * 0.05, duration: 0.5 }}>
                <div className="relative overflow-hidden rounded-xl h-56 group">
                  <img src={realm.image} alt={realm.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <h3 className="text-lg font-display font-bold text-primary mb-1">{realm.name}</h3>
                    <p className="text-xs text-foreground/80">{realm.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              The <span className="text-primary">Scenarios</span>
            </h2>
            <p className="text-muted-foreground">Six scenarios form a connected campaign across the Nine Realms</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, i) => (
              <motion.div key={scenario.name} {...fadeIn} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <Card className="bg-card/50 border-border hover:border-primary/30 transition-all h-full">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-base font-bold text-primary">{scenario.name}</h3>
                    <p className="text-xs italic text-foreground/60">"{scenario.quote}"</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>📍 {scenario.location}</span>
                      <span>⚔️ {scenario.enemies}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book-Box & Components */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              The <span className="text-primary">Book-Box</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A compact A4-sized box that opens like a tome. The left half holds the battlefield and storage, 
              the right half contains four player dashboards, and the spine stores Legacy Cards across your campaign.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {components.map((comp, i) => (
              <motion.div key={comp.name} {...fadeIn} transition={{ delay: i * 0.04, duration: 0.4 }}>
                <Card className="bg-card/40 border-border h-full">
                  <CardContent className="p-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-sm font-bold text-foreground">{comp.name}</h3>
                      <span className="text-xs text-primary font-mono">×{comp.qty}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{comp.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mt-12">
            <Link to="/rulebook">
              <Button size="lg" className="group">
                Read the Rulebook
                <Sword className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Game;
