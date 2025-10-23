import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Nine Realms!",
        description: "You've been added to our waitlist. Prepare for your journey.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 animate-glow-pulse">
            <Mail className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Begin Your <span className="text-primary">Saga</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Join our waitlist to receive exclusive updates, early bird discounts, and be among the first to experience Shadows of the Nine Realms when we launch.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-card/50 border-border focus:border-primary"
            />
            <Button type="submit" size="lg" className="whitespace-nowrap">
              Join Waitlist
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
