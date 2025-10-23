import { motion } from "framer-motion";
import { Swords, Compass, Axe } from "lucide-react";
import gameBoardImage from "@/assets/game-board.jpg";

const features = [
  {
    icon: Swords,
    title: "Tactical Combat",
    description: "Strategic battles against mythic foes"
  },
  {
    icon: Compass,
    title: "Overworld Exploration",
    description: "Journey through the Nine Realms"
  },
  {
    icon: Axe,
    title: "Norse Heroes & Myths",
    description: "Command legendary warriors"
  }
];

export const AboutGame = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,166,97,0.03),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              The Descent Begins
            </h2>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                <span className="text-primary font-semibold">Shadows of the Nine Realms</span> is a cooperative Norse mythology board game where strategy, fate, and glory intertwine. Players navigate between the Overworld and treacherous Dungeon phases, making critical decisions that shape their saga.
              </p>
              
              <p>
                Command legendary heroes, forge alliances with gods, and face mythic beasts in tactical combat. Each choice echoes through the realms as you uncover ancient secrets and challenge the threads of destiny itself.
              </p>
              
              <p className="text-sm italic text-foreground/70">
                Will you carve your name into legend, or fade into the mists of Niflheim?
              </p>
            </div>

            {/* Feature Icons */}
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
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xs font-semibold text-primary">{feature.title}</h3>
                  <p className="text-xs text-foreground/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
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
            
            {/* Decorative runes */}
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
