import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Dices, BookOpen } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "1-4 Players",
      description: "Cooperative adventures — work together against the game, not each other"
    },
    {
      icon: Clock,
      title: "30-45 Minutes",
      description: "Fast sessions with a built-in 3-Act dramatic structure"
    },
    {
      icon: Dices,
      title: "Fail-Forward D20",
      description: "Every roll accomplishes something — no dead ends, no wasted turns"
    },
    {
      icon: BookOpen,
      title: "Portable Book-Box",
      description: "A4-sized book-box design — opens like a tome, sets up in under 5 minutes"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Design <span className="text-primary">Pillars</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for authentic Norse mythology, cooperative strategy, and fast play
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="bg-card/50 border-border hover:border-accent/50 transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
