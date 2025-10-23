import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Hammer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import realmsShowcase from "@/assets/realms-showcase.jpg";

export const WorkshopPreview = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-tertiary-brown to-background relative overflow-hidden">
      {/* Decorative sparks */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(196,166,97,0.05),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Hammer className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              The Carver's Forge
            </h2>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto italic">
            Where wood and steel meet myth — each rune and hero figure is born in fire and craftsmanship
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-primary/30 shadow-2xl">
              <img 
                src={realmsShowcase} 
                alt="Handcrafted game pieces and wooden elements"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
            
            {/* Decorative corner runes */}
            <motion.div
              className="absolute -bottom-3 -left-3 text-5xl text-primary/30 font-rune"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ᚻ
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-foreground/90">
              <p>
                Every piece in <span className="text-primary font-semibold">Shadows of the Nine Realms</span> is crafted with dedication to authenticity and artistry. From CNC-carved wooden tiles to hand-painted hero miniatures, each element tells a story.
              </p>
              
              <p>
                Witness the journey from raw materials to finished game components — where ancient Norse aesthetics meet modern fabrication techniques.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link to="/workshop">
                <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                  Visit the Workshop
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
