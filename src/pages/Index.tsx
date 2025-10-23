import { Hero } from "@/components/Hero";
import { GameOverview } from "@/components/GameOverview";
import { RealmsShowcase } from "@/components/RealmsShowcase";
import { Features } from "@/components/Features";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <GameOverview />
      <RealmsShowcase />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
