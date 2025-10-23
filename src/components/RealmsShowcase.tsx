import { Card, CardContent } from "@/components/ui/card";
import realmsImage from "@/assets/realms-showcase.jpg";

export const RealmsShowcase = () => {
  const realms = [
    {
      name: "Niflheim",
      description: "The frozen realm of mist and ice, where frost giants dwell",
      icon: "❄️"
    },
    {
      name: "Muspelheim",
      description: "The realm of fire and chaos, home to the fire giants",
      icon: "🔥"
    },
    {
      name: "Asgard",
      description: "The golden realm of the gods, where legends are born",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore the <span className="text-primary">Nine Realms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each realm offers unique challenges, treasures, and encounters with legendary beings from Norse mythology
          </p>
        </div>

        {/* Featured Realms Image */}
        <div className="mb-12 animate-fade-in">
          <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-card)] max-w-5xl mx-auto">
            <img 
              src={realmsImage} 
              alt="The Nine Realms featuring Niflheim, Muspelheim, and Asgard from Norse mythology" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Realm Cards */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          {realms.map((realm, index) => (
            <Card 
              key={realm.name} 
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{realm.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{realm.name}</h3>
                <p className="text-muted-foreground">{realm.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
