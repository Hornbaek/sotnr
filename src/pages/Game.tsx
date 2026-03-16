import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sword, Heart, Flame, Music, Skull, Users, Clock, Dices, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import hero images
import einherjarImg from "@/assets/heroes/einherjar.jpg";
import valkyrieImg from "@/assets/heroes/valkyrie.jpg";
import seidrImg from "@/assets/heroes/seidr.jpg";
import ulfhednarImg from "@/assets/heroes/ulfhednar.jpg";
import skaldImg from "@/assets/heroes/skald.jpg";
import nidstangImg from "@/assets/heroes/nidstang.jpg";

// Import monster images
import draugrImg from "@/assets/monsters/draugr.jpg";
import huldraImg from "@/assets/monsters/huldra.jpg";
import nokkenImg from "@/assets/monsters/nokken.jpg";
import trollImg from "@/assets/monsters/troll.jpg";
import frostGiantImg from "@/assets/monsters/frost-giant.jpg";
import dwarfWarriorImg from "@/assets/monsters/dwarf-warrior.jpg";
import maraImg from "@/assets/monsters/mara.jpg";

import niflheimImg from "@/assets/realms/niflheim.jpg";
import muspelheimImg from "@/assets/realms/muspelheim.jpg";
import asgardImg from "@/assets/realms/asgard.jpg";
import midgardImg from "@/assets/realms/midgard.jpg";
import vanaheimImg from "@/assets/realms/vanaheim.jpg";
import alfheimImg from "@/assets/realms/alfheim.jpg";
import svartalfheimImg from "@/assets/realms/svartalfheim.jpg";
import jotunheimImg from "@/assets/realms/jotunheim.jpg";
import helheimImg from "@/assets/realms/helheim.jpg";

import CampaignSection from "@/components/game/CampaignSection";

const heroClasses = [
  {
    name: "Einherjar",
    quote: "Stand firm, shield-brothers! The Einherjar do not yield!",
    role: "Tank / Defender",
    icon: Shield,
    image: einherjarImg,
    signature: "Skjaldborg (Shield Wall)",
    description: "Fallen warriors chosen by Odin. Masters of defense and battlefield control.",
    health: 14, speed: 3, poolSize: 8, handSize: 6,
  },
  {
    name: "Valkyrie",
    quote: "I choose the slain. I guide the worthy. I am the spear of judgment.",
    role: "Damage / Mobility",
    icon: Sword,
    image: valkyrieImg,
    signature: "Wings of War",
    description: "Odin's choosers of the slain. Swift executioners who reap the unworthy.",
    health: 10, speed: 5, poolSize: 8, handSize: 4,
  },
  {
    name: "Seiðr",
    quote: "The threads of fate are mine to weave… and to sever.",
    role: "Support / Fate Manipulation",
    icon: Heart,
    image: seidrImg,
    signature: "Völva's Trance",
    description: "Völva seers who read the threads of fate and bend reality to their will.",
    health: 8, speed: 3, poolSize: 8, handSize: 5,
  },
  {
    name: "Ulfhednar",
    quote: "The wolf does not pity the lamb. I am the wolf.",
    role: "Risk / Reward Damage",
    icon: Flame,
    image: ulfhednarImg,
    signature: "Beast Within",
    description: "Wolf-pelt warriors who channel the beast's fury for devastating results.",
    health: 12, speed: "4/6", poolSize: 6, handSize: 6,
  },
  {
    name: "Skald",
    quote: "Listen, and I will sing of heroes yet to fall…",
    role: "Inspire / Support",
    icon: Music,
    image: skaldImg,
    signature: "Saga of Heroes",
    description: "Poets who preserve the deeds of heroes and inspire allies to greater heights.",
    health: "TBD", speed: "TBD", poolSize: 8, handSize: 4,
  },
  {
    name: "Nidstang",
    quote: "I raise the curse-pole. Let doom find the unworthy.",
    role: "Debuff / Control / Damage-over-Time",
    icon: Skull,
    image: nidstangImg,
    signature: "The Nídstǫng Pole",
    description: "Dark practitioners who wield forbidden magic through the curse-pole.",
    health: 8, speed: 4, poolSize: 8, handSize: 5,
  },
];

const monsters = [
  { name: "Draugr", quote: "The dead walk when dishonored.", health: 6, move: 3, tier: "Standard", keyword: "CLOSEST", image: draugrImg },
  { name: "Huldra", quote: "Beautiful as spring, hollow as a rotting log.", health: 7, move: 4, tier: "Standard", keyword: "ISOLATIONIST", image: huldraImg },
  { name: "Nokken", quote: "He plays most beautifully when someone is about to drown.", health: 11, move: 3, tier: "Elite", keyword: "SONG FOCUS", image: nokkenImg },
  { name: "Troll", quote: "Trolls turn to stone in sunlight. Until then, they crush.", health: 10, move: 2, tier: "Elite", keyword: "CLOSEST", image: trollImg },
  { name: "Frost Giant", quote: "They raid to remind us we are small.", health: 28, move: 3, tier: "Boss", keyword: "ELITE", image: frostGiantImg },
  { name: "Dwarf Warrior", quote: "Dwarves craft wonders… and guard them with their lives.", health: 5, move: 3, tier: "Standard", keyword: "CLOSEST", image: dwarfWarriorImg },
  { name: "Mara", quote: "She sits upon your chest while you sleep.", health: 8, move: 3, tier: "Elite", keyword: "THREAD SEEKER", image: maraImg },
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
  { name: "Hex Grid Map", qty: "1", desc: "Modular battlefield — Scenario Sleeve overlays change the terrain" },
  { name: "Character Sleeves", qty: "6", desc: "Slide over Character Board, one per hero class" },
  { name: "Character Boards", qty: "6", desc: "Sliding XP track, token-peg ability slots, health dial, 3 equipment slots" },
  { name: "Ability Cards", qty: "36+", desc: "Starting pool + unlockable cards per class" },
  { name: "Equipment Cards", qty: "30+", desc: "Weapons, Armour, and Relics — one per slot" },
  { name: "Monster Cards", qty: "12", desc: "7 types with stats, dice tables, and AI behaviour" },
  { name: "Scenario Sleeves", qty: "6", desc: "Front/back design, slides over the map" },
  { name: "Realm Legacy Cards", qty: "6", desc: "Double-sided (Boon/Scar) — one per realm scenario" },
  { name: "World Tree Legacy Cards", qty: "6", desc: "Double-sided — earned at grand campaign milestones" },
  { name: "D20 Die", qty: "1", desc: "Norse runic design — rolled twice for Advantage/Disadvantage" },
  { name: "Hero Miniatures", qty: "4", desc: "Wooden block-style figurines" },
  { name: "Monster Tokens", qty: "24", desc: "Wooden discs for each monster type" },
  { name: "Fate Tokens", qty: "40", desc: "Wooden tokens for dice manipulation" },
  { name: "Exhaustion Tokens", qty: "20", desc: "Track hero fatigue" },
  { name: "Loot Tokens", qty: "40", desc: "Currency for equipment and consumables" },
  { name: "XP Tokens", qty: "30", desc: "Earned from XP-marked card actions" },
  { name: "Curse Tokens", qty: "20", desc: "Used by the Nidstang class and certain monsters" },
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

          {/* Section Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mt-10"
          >
            {[
              { label: "Heroes", id: "heroes" },
              { label: "Monsters", id: "monsters" },
              { label: "Realms", id: "realms" },
              { label: "Campaign", id: "campaign" },
              { label: "Book-Box", id: "book-box" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 rounded-full border border-primary/30 text-sm text-primary hover:bg-primary/10 hover:border-primary/60 transition-all"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
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
      <section id="heroes" className="py-20 px-4 bg-gradient-to-b from-background to-card/20 scroll-mt-20">
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
                  <Card className="bg-card/60 border-border hover:border-primary/40 transition-all group h-full overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img src={hero.image} alt={hero.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-lg font-bold text-primary">{hero.name}</h3>
                        <span className="text-xs text-foreground/70">{hero.role}</span>
                      </div>
                    </div>
                    <CardContent className="p-5 space-y-3">
                      <p className="text-xs italic text-foreground/60">"{hero.quote}"</p>
                      <p className="text-sm text-foreground/80">{hero.description}</p>
                      <div className="grid grid-cols-4 gap-2 text-center text-xs pt-1">
                        <div>
                          <div className="text-muted-foreground">HP</div>
                          <div className="font-bold text-foreground">{hero.health}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Speed</div>
                          <div className="font-bold text-foreground">{hero.speed}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Pool</div>
                          <div className="font-bold text-foreground">{hero.poolSize}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Hand</div>
                          <div className="font-bold text-foreground">{hero.handSize}</div>
                        </div>
                      </div>
                      <div className="text-xs text-primary/70">
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
      <section id="monsters" className="py-20 px-4 scroll-mt-20">
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
                <Card className="bg-card/50 border-border hover:border-destructive/30 transition-all h-full overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <img src={monster.image} alt={monster.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 text-lg font-bold text-primary">{monster.name}</h3>
                  </div>
                  <CardContent className="p-4 space-y-2">
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
      <section id="realms" className="py-20 px-4 bg-gradient-to-b from-background to-card/20 scroll-mt-20">
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

      {/* Grand Campaign */}
      <CampaignSection />

      {/* Book-Box & Components */}
      <section id="book-box" className="py-20 px-4 bg-gradient-to-b from-background to-card/20 scroll-mt-20">
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
