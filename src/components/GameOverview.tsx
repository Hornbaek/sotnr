import gameBoardImage from "@/assets/game-board.jpg";

export const GameOverview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={gameBoardImage} 
                alt="Shadows of the Nine Realms game board with Norse runes and golden accents" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Journey</span> Through the Realms
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shadows of the Nine Realms is a strategic board game where 2-4 players embark on an epic quest through the interconnected worlds of Norse mythology. Each realm presents unique challenges, mythical creatures, and powerful artifacts.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-2xl">⚔️</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Strategic Combat</h3>
                  <p className="text-muted-foreground">Face legendary creatures and rival players in tactical battles</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-2xl">🌍</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Nine Unique Realms</h3>
                  <p className="text-muted-foreground">Explore diverse worlds from icy Niflheim to golden Asgard</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-2xl">📦</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Portable Design</h3>
                  <p className="text-muted-foreground">Compact and travel-friendly for gaming anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
