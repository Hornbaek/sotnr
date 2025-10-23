import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import heroImage from "@/assets/hero-norse.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-glow-pulse">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Shadows of the Nine Realmzzzz
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          A Portable Board Game Journey Through Norse Mythology
        </p>
        
        <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Navigate treacherous realms, forge alliances with legendary beings, and shape your destiny in this epic strategic adventure inspired by ancient Norse legends.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8">
            <Mail className="mr-2 h-5 w-5" />
            Join the Waitlist
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 border-primary/50 hover:border-primary">
            Learn More
          </Button>
        </div>

        {/* Floating Rune Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">
          ᚠ
        </div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: "2s" }}>
          ᚦ
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
