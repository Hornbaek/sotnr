import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CharacterCardProps {
  data: {
    name: string;
    title: string;
    image?: string;
    stats?: {
      strength?: number;
      wisdom?: number;
      combat?: number;
    };
    quote?: string;
  };
}

export const CharacterCard = ({ data }: CharacterCardProps) => {
  return (
    <Card className="p-6 my-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20">
      <div className="flex flex-col items-center text-center">
        {data.image && (
          <img 
            src={data.image} 
            alt={data.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 mb-4"
          />
        )}
        
        <h3 className="text-2xl font-bold text-foreground mb-1">{data.name}</h3>
        <p className="text-primary font-semibold mb-6">{data.title}</p>
        
        {data.stats && (
          <div className="w-full max-w-md space-y-3 mb-6">
            {data.stats.strength !== undefined && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Strength</span>
                  <span className="text-foreground font-semibold">{data.stats.strength}/10</span>
                </div>
                <Progress value={data.stats.strength * 10} className="h-2" />
              </div>
            )}
            {data.stats.wisdom !== undefined && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Wisdom</span>
                  <span className="text-foreground font-semibold">{data.stats.wisdom}/10</span>
                </div>
                <Progress value={data.stats.wisdom * 10} className="h-2" />
              </div>
            )}
            {data.stats.combat !== undefined && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Combat</span>
                  <span className="text-foreground font-semibold">{data.stats.combat}/10</span>
                </div>
                <Progress value={data.stats.combat * 10} className="h-2" />
              </div>
            )}
          </div>
        )}
        
        {data.quote && (
          <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
            "{data.quote}"
          </blockquote>
        )}
      </div>
    </Card>
  );
};
