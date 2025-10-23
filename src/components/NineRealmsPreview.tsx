import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const realms = [
  { name: "Niflheim", description: "The frozen winds whisper songs of the dead", color: "from-blue-400/20 to-cyan-300/20", position: "top-1/4 left-1/4" },
  { name: "Muspelheim", description: "Flames dance eternal in the realm of fire", color: "from-orange-500/20 to-red-600/20", position: "top-1/4 right-1/4" },
  { name: "Asgard", description: "Golden halls where gods hold court", color: "from-yellow-400/20 to-amber-500/20", position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { name: "Midgard", description: "The mortal realm, crossroads of destiny", color: "from-green-600/20 to-emerald-500/20", position: "bottom-1/4 left-1/3" },
  { name: "Jotunheim", description: "Where giants stride through ancient stone", color: "from-gray-500/20 to-slate-600/20", position: "bottom-1/3 right-1/4" },
  { name: "Helheim", description: "Shadows gather in the realm of the dishonored", color: "from-purple-900/20 to-indigo-800/20", position: "bottom-1/4 left-1/2" },
];

export const NineRealmsPreview = () => {
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Explore the Nine Realms
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Journey through interconnected worlds of Norse mythology, each realm holding its own secrets, dangers, and glory.
          </p>
        </motion.div>

        {/* Realms Constellation */}
        <div className="relative w-full max-w-4xl mx-auto h-[500px] mb-12">
          {realms.map((realm, index) => (
            <motion.div
              key={realm.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
              className={`absolute ${realm.position} group cursor-pointer`}
            >
              {/* Realm Circle */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${realm.color} border-2 border-primary/40 shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(196,166,97,0.5)]`}>
                <span className="text-sm font-display font-bold text-foreground text-center px-2">
                  {realm.name}
                </span>
              </div>
              
              {/* Hover Tooltip */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <p className="text-xs text-center italic text-foreground/80 bg-card/90 backdrop-blur-sm rounded px-3 py-2 border border-primary/20">
                  {realm.description}
                </p>
              </div>

              {/* Connecting lines (optional decorative element) */}
              {index > 0 && (
                <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary/20 to-transparent -z-10 rotate-45" />
              )}
            </motion.div>
          ))}

          {/* Center decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full -z-20"
          />
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
