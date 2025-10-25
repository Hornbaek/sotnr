import { Card } from "@/components/ui/card";

interface RunicQuoteProps {
  data: {
    quote: string;
    author?: string;
    runeTop?: string;
    runeBottom?: string;
  };
}

export const RunicQuote = ({ data }: RunicQuoteProps) => {
  const defaultRunes = "ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ";
  
  return (
    <Card className="p-8 my-8 bg-gradient-to-br from-primary/5 via-card to-primary/10 border-2 border-primary/30">
      <div className="text-center space-y-4">
        <div className="text-primary text-2xl tracking-widest">
          {data.runeTop || defaultRunes}
        </div>
        
        <blockquote className="text-lg md:text-xl text-foreground font-serif italic leading-relaxed px-4">
          "{data.quote}"
        </blockquote>
        
        {data.author && (
          <cite className="block text-muted-foreground not-italic text-sm">
            — {data.author}
          </cite>
        )}
        
        <div className="text-primary text-2xl tracking-widest">
          {data.runeBottom || defaultRunes}
        </div>
      </div>
    </Card>
  );
};
