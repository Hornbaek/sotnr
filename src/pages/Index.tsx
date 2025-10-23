import { Hero } from "@/components/Hero";
import { AboutGame } from "@/components/AboutGame";
import { NineRealmsPreview } from "@/components/NineRealmsPreview";
import { WorkshopPreview } from "@/components/WorkshopPreview";
import { JournalPreview } from "@/components/JournalPreview";
import { Newsletter } from "@/components/Newsletter";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Hero />
      <AboutGame />
      <NineRealmsPreview />
      <WorkshopPreview />
      <JournalPreview />
      <Newsletter />
    </motion.div>
  );
};

export default Index;
