import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Swords,
  Map,
  Scroll,
  ChevronRight,
} from "lucide-react";
import { RunicDivider } from "../components/RunicDivider";

export const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position (fade out after 100px)
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 100);

  const realms = [
    {
      name: "Asgard",
      position: "top-20 left-1/2",
      color: "#d4a259",
    },
    {
      name: "Midgard",
      position: "top-1/2 left-1/2",
      color: "#8b6f47",
    },
    {
      name: "Jotunheim",
      position: "top-1/4 right-1/4",
      color: "#c9e4f5",
    },
    {
      name: "Alfheim",
      position: "top-1/3 left-1/4",
      color: "#f5a623",
    },
    {
      name: "Svartalfheim",
      position: "bottom-1/4 left-1/3",
      color: "#5a5a5a",
    },
    {
      name: "Niflheim",
      position: "bottom-1/4 right-1/3",
      color: "#787165",
    },
  ];

  const news = [
    {
      title:
        "Journey Begins: Shadows of the Nine Realms Announced",
      date: "October 15, 2025",
      preview:
        "Embark on a cooperative adventure through Norse mythology...",
    },
    {
      title: "Behind the Runes: Crafting the Overworld",
      date: "October 10, 2025",
      preview:
        "Discover how we designed the interconnected realm system...",
    },
    {
      title: "Community Spotlight: Your Hero Designs",
      date: "October 5, 2025",
      preview:
        "Check out the incredible hero concepts from our community...",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1613132272685-cb011dd656ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMGZvcmVzdHxlbnwxfHx8fDE3NjExMjA3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/80 via-[#1a1410]/60 to-[#1a1410]"></div>
        </div>

        {/* Fog Layers */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 fog-drift" />
          <div
            className="absolute bottom-0 left-0 w-full h-full opacity-20 fog-drift"
            style={{ animationDelay: "5s" }}
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4"
        >
          <div className="mb-6 relative">
            <div className="absolute inset-0 torch-glow rounded-full blur-3xl"></div>
            <h1 className="text-5xl md:text-7xl text-[#d4a259] relative torch-flicker">
              Shadows of the Nine Realms
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-[#a89274] mb-8 max-w-2xl mx-auto">
            A cooperative dungeon crawler through Norse
            mythology
          </p>

          <Link
            to="/game"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-2xl hover:scale-105 transition-all torch-glow"
          >
            <Swords className="w-5 h-5" />
            Begin Your Descent
            <ChevronRight className="w-5 h-5" />
          </Link>

          {/* Scroll Indicator */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: scrollIndicatorOpacity,
            }}
            transition={{
              y: { duration: 4, repeat: Infinity },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
            style={{
              pointerEvents:
                scrollIndicatorOpacity === 0 ? "none" : "auto",
            }}
          >
            <div className="w-6 h-10 border-2 border-[#d4a259] rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-2 bg-[#d4a259] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Realm Map */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#d4a259] mb-4 flex items-center justify-center gap-3">
              <Map className="w-10 h-10" />
              The Nine Realms
            </h2>
            <p className="text-[#a89274]">
              Explore the interconnected worlds of Norse
              mythology
            </p>
          </motion.div>

          <div className="relative h-96 max-w-4xl mx-auto bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 stone-texture overflow-hidden">
            {realms.map((realm, index) => (
              <motion.div
                key={realm.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className={`absolute ${realm.position} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
              >
                <div
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all"
                  style={{ borderColor: realm.color }}
                >
                  <div
                    className="w-12 h-12 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: realm.color }}
                  />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <span className="text-sm px-3 py-1 bg-[#2a2218] rounded-full border border-[#d4a259]/30">
                    {realm.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RunicDivider />

      {/* News & Announcements */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#d4a259] mb-4 flex items-center justify-center gap-3">
              <Scroll className="w-10 h-10" />
              Tales & Tidings
            </h2>
            <p className="text-[#a89274]">
              Latest news from the realms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#2a2218] rounded-lg border border-[#d4a259]/30 p-6 stone-texture cursor-pointer"
              >
                <div className="text-sm text-[#d4a259] mb-2">
                  {item.date}
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-[#a89274] text-sm mb-4">
                  {item.preview}
                </p>
                <Link
                  to="/journal"
                  className="text-[#d4a259] hover:text-[#f5a623] inline-flex items-center gap-1 text-sm"
                >
                  Read more <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};