import { Button } from "@/components/ui/button";
import { Flame, Scroll } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-norse.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-[var(--gradient-mist)]" />
      </motion.div>

      {/* Floating mist particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-foreground/5 blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            animate={{ 
              filter: [
                "drop-shadow(0 0 20px hsl(40 100% 60% / 0.4))",
                "drop-shadow(0 0 40px hsl(40 100% 60% / 0.6))",
                "drop-shadow(0 0 20px hsl(40 100% 60% / 0.4))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Flame className="w-12 h-12 text-primary" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Shadows of the Nine Realms
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            A Cooperative Dungeon Crawler Through Norse Mythology
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Navigate treacherous realms, forge alliances with legendary beings, and shape your destiny in this epic strategic adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-torch)]">
              <Scroll className="mr-2 h-5 w-5" />
              Join the Waitlist
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary/30 hover:border-primary hover:bg-primary/10">
              Explore the Realms
            </Button>
          </div>
        </motion.div>

        {/* Floating runes */}
        <motion.div 
          className="absolute top-20 left-10 text-6xl text-primary/20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ᚠ
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-6xl text-primary/20"
          animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          ᚦ
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

