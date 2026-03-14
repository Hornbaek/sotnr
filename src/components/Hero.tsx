import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-norse.jpg";
import logo from "@/assets/sotnr-logo.png";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <img 
              src={logo} 
              alt="Nine Realms Logo" 
              className="w-20 h-20 md:w-24 md:h-24 mx-auto object-contain drop-shadow-[0_0_20px_rgba(196,166,97,0.5)]" 
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground">
            Shadows of the <span className="text-primary">Nine Realms</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-serif italic">
            A Norse mythology board game of strategy, fate, and glory
          </p>

          <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Journey through the Nine Realms of Norse mythology. Command legendary heroes, 
            forge alliances with gods, and shape the fate of the cosmos in this epic strategic adventure.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
            >
              Join the Waitlist
            </Button>
            <a href="/game">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-border hover:bg-muted transition-all"
              >
                Explore the Realms
              </Button>
            </a>
          </motion.div>

          {/* Subtle Runes */}
          <motion.div
            className="absolute top-20 left-10 text-primary/20 text-4xl font-rune hidden md:block"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            ᚠ
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-10 text-primary/20 text-4xl font-rune hidden md:block"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            ᚦ
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

