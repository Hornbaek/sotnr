import { motion } from "framer-motion";
import gameBoardImage from "@/assets/game-board.jpg";
import combatIcon from "@/assets/icons/combat.png";
import explorationIcon from "@/assets/icons/exploration.png";
import heroesIcon from "@/assets/icons/heroes.png";

const features = [
  {
    icon: combatIcon,
    title: "D20 Tactical Combat",
    description: "Fail-forward dice system — every roll moves the story"
  },
  {
    icon: explorationIcon,
    title: "Nine Realms Campaign",
    description: "6 scenarios across a connected campaign"
  },
  {
    icon: heroesIcon,
    title: "6 Norse Heroes",
    description: "Unique classes from Einherjar to Nidstang"
  }
];

export const AboutGame = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,166,97,0.03),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              The Descent Begins
            </h2>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                <span className="text-primary font-semibold">Shadows of the Nine Realms</span> is a cooperative tactical adventure board game for 1-4 players set in authentic Nordic mythology. Every session follows a dramatic 3-Act structure — Approach, Escalation, Resolution — keeping play within 30-45 minutes.
              </p>
              
              <p>
                Command legendary heroes, roll the D20 with a fail-forward system where every outcome matters, and face mythic beasts driven by intelligent AI behaviour. Your choices ripple through a campaign as Legacy Cards shape the story across sessions.
              </p>
              
              <p className="text-sm italic text-foreground/70">
                Will you carve your name into legend, or fade into the mists of Niflheim?
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center space-y-2"
                >
                  <div className="inline-flex items-center justify-center">
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-xs font-semibold text-primary">{feature.title}</h3>
                  <p className="text-xs text-foreground/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-primary/20 shadow-2xl">
              <img 
                src={gameBoardImage} 
                alt="Game board showing Norse mythology elements"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            <motion.div
              className="absolute -top-4 -right-4 text-6xl text-primary/20 font-rune"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              ᚱ
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
