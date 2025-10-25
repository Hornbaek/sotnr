import { Card } from "@/components/ui/card";

interface RealmSpotlightProps {
  data: {
    realm: string;
    title: string;
    description: string;
    features?: string[];
  };
}

const realmIcons: Record<string, string> = {
  asgard: '/src/assets/icons/asgard.png',
  midgard: '/src/assets/icons/midgard.png',
  vanaheim: '/src/assets/icons/vanaheim.png',
  jotunheim: '/src/assets/icons/jotunheim.png',
  alfheim: '/src/assets/icons/alfheim.png',
  svartalfheim: '/src/assets/icons/svartalfheim.png',
  niflheim: '/src/assets/icons/niflheim.png',
  muspelheim: '/src/assets/icons/muspelheim.png',
  helheim: '/src/assets/icons/helheim.png',
};

export const RealmSpotlight = ({ data }: RealmSpotlightProps) => {
  const iconPath = realmIcons[data.realm.toLowerCase()] || realmIcons.midgard;

  return (
    <Card className="p-6 my-8 border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
      <div className="flex items-start gap-4">
        <img 
          src={iconPath} 
          alt={data.title}
          className="w-16 h-16 object-contain"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-primary mb-3">{data.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{data.description}</p>
          
          {data.features && data.features.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">Key Features:</p>
              <ul className="space-y-1">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
