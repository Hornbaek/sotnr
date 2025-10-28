import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { z } from "zod";
import runeIcon from "@/assets/icons/rune.png";

// Input validation schema
const waitlistSchema = z.object({
  name: z.string().trim().max(100, "Name must be less than 100 characters").optional(),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters")
});

export const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate input data
      const result = waitlistSchema.safeParse({ 
        name: name || undefined, 
        email 
      });
      
      if (!result.success) {
        toast({
          title: "Invalid input",
          description: result.error.errors[0].message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const { data: validatedData } = result;

      const { error } = await supabase
        .from('waitlist')
        .insert([{ 
          name: validatedData.name || null, 
          email: validatedData.email 
        }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already among us",
            description: "This email is already etched in our runes.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Your name is etched among the runes",
          description: "Welcome to the descent. Prepare for your journey through the Nine Realms.",
        });
        setName("");
        setEmail("");
      }
    } catch (error) {
      // Only log detailed errors in development
      if (import.meta.env.DEV) {
        console.error('Waitlist error:', error);
      }
      toast({
        title: "The runes resist",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-tertiary-brown">
      {/* Mystical background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,166,97,0.1),transparent_70%)]" />
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(196,166,97,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title with Icon */}
          <div className="inline-flex items-center gap-4 mb-4">
            <img src={runeIcon} alt="Rune" className="w-10 h-10 object-contain" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Relic Vault
            </h2>
          </div>
          
          <p className="text-lg text-foreground/80 mb-2 italic">
            Claim your place among the first to descend
          </p>
          
          <p className="text-base text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join our waitlist for exclusive updates, early bird access, and be among the first to experience Shadows of the Nine Realms when the gates open.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <Input 
              type="text" 
              placeholder="Your name (optional)" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-card-brown/50 border-border focus:border-primary text-foreground"
              disabled={isLoading}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card-brown/50 border-border focus:border-primary text-foreground"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg" 
                className="whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? "Inscribing..." : "Join Waitlist"}
              </Button>
            </div>
          </form>

          <p className="text-sm text-foreground/60 mt-4">
            Your journey is sacred. Unsubscribe at any time.
          </p>

          {/* Decorative runes */}
          <div className="flex items-center justify-center gap-4 mt-8 text-primary/30 text-2xl font-rune">
            <motion.span
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ᚠ
            </motion.span>
            <span>◆</span>
            <motion.span
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              ᚦ
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
