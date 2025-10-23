import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// Import realm images
import niflheimImg from "@/assets/realms/niflheim.jpg";
import muspelheimImg from "@/assets/realms/muspelheim.jpg";
import asgardImg from "@/assets/realms/asgard.jpg";
import midgardImg from "@/assets/realms/midgard.jpg";
import vanaheimImg from "@/assets/realms/vanaheim.jpg";
import alfheimImg from "@/assets/realms/alfheim.jpg";
import svartalfheimImg from "@/assets/realms/svartalfheim.jpg";
import jotunheimImg from "@/assets/realms/jotunheim.jpg";
import helheimImg from "@/assets/realms/helheim.jpg";

const realms = [
  { 
    name: "Niflheim", 
    icon: "❄️", 
    description: "The frozen realm of mist and ice, where frost giants dwell.", 
    image: niflheimImg 
  },
  { 
    name: "Muspelheim", 
    icon: "🔥", 
    description: "The realm of fire and chaos, home to the fire giants.", 
    image: muspelheimImg 
  },
  { 
    name: "Asgard", 
    icon: "⚡", 
    description: "The golden realm of the gods, where legends are born.", 
    image: asgardImg 
  },
  { 
    name: "Midgard", 
    icon: "🌍", 
    description: "The realm of mortals, bound between heaven and hell.", 
    image: midgardImg 
  },
  { 
    name: "Vanaheim", 
    icon: "🌿", 
    description: "The realm of fertility and peace, home to the Vanir gods.", 
    image: vanaheimImg 
  },
  { 
    name: "Alfheim", 
    icon: "✨", 
    description: "The radiant realm of light elves and eternal dawn.", 
    image: alfheimImg 
  },
  { 
    name: "Svartalfheim", 
    icon: "🪨", 
    description: "The shadowed realm of the dwarves, masters of forge and stone.", 
    image: svartalfheimImg 
  },
  { 
    name: "Jotunheim", 
    icon: "🗻", 
    description: "The wild land of giants, untamed and perilous.", 
    image: jotunheimImg 
  },
  { 
    name: "Helheim", 
    icon: "☠️", 
    description: "The cold underworld ruled by Hel, daughter of Loki.", 
    image: helheimImg 
  },
];

export const NineRealmsPreview = () => {
  const plugin = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-tertiary-brown relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE5NiwxNjYsOTcsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Explore the <span className="text-primary">Nine Realms</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Venture through the realms of Norse myth — each one forged by the elements, gods, and ancient fate.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full max-w-7xl mx-auto mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {realms.map((realm, index) => (
                <CarouselItem key={realm.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg h-[400px]">
                      {/* Realm Image */}
                      <img
                        src={realm.image}
                        alt={realm.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      {/* Realm Info */}
                      <div className="absolute bottom-0 inset-x-0 p-6">
                        <div className="text-4xl mb-2">{realm.icon}</div>
                        <h3 className="text-xl font-display font-bold text-primary mb-2">
                          {realm.name}
                        </h3>
                        <p className="text-sm text-foreground/80 italic">
                          {realm.description}
                        </p>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 rounded-2xl pointer-events-none" />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-primary/40 bg-card/80 backdrop-blur-sm hover:bg-primary/20 hover:border-primary" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-primary/40 bg-card/80 backdrop-blur-sm hover:bg-primary/20 hover:border-primary" />
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link to="/lore">
            <Button size="lg" className="group">
              Enter the Codex
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
