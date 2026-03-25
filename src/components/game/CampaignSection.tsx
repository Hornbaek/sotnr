import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import grandCampaignMapImg from "@/assets/campaign/grand-campaign-map.jpg";
import midgardCampaignImg from "@/assets/campaign/midgard-campaign.jpg";
import jotunheimCampaignImg from "@/assets/campaign/jotunheim-campaign.jpg";
import niflheimCampaignImg from "@/assets/campaign/niflheim-campaign.jpg";
import muspelheimCampaignImg from "@/assets/campaign/muspelheim-campaign.jpg";
import alfheimCampaignImg from "@/assets/campaign/alfheim-campaign.jpg";
import svartalfheimCampaignImg from "@/assets/campaign/svartalfheim-campaign.jpg";
import vanaheimCampaignImg from "@/assets/campaign/vanaheim-campaign.jpg";
import asgardCampaignImg from "@/assets/campaign/asgard-campaign.jpg";
import helheimCampaignImg from "@/assets/campaign/helheim-campaign.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const campaignRealms = [
  {
    name: "Midgard",
    image: midgardCampaignImg,
    description: "The mortal realm — where your saga begins. Viking settlements beset by creatures from the old tales.",
    pack: "Core Box",
    scenarios: [
      { name: "The Hollow of the Huldra", quote: "They say she lures the lonely into the deep woods." },
      { name: "The Waking Mound", quote: "Something stirs beneath the barrow. It remembers its name." },
      { name: "What Rides the Night", quote: "She sits upon your chest while you sleep. When you wake, you are less." },
      { name: "The Mountain Road", quote: "The path narrows. The stones watch. The trolls are patient." },
      { name: "The Night of All Shadows", quote: "They all came at once. As if something called them." },
    ],
  },
  {
    name: "Jotunheim",
    image: jotunheimCampaignImg,
    description: "Land of frost and fire giants. The mountains themselves seem to breathe hostility.",
    pack: "Realm Pack",
    scenarios: [
      { name: "Frostfall Pass", quote: "The jotnar do not raid for gold. They raid to remind us we are small." },
      { name: "The Giant's Throne", quote: "He has sat there since before the first winter. He will sit there after the last." },
      { name: "Avalanche of Bones", quote: "The mountain does not bury — it collects." },
    ],
  },
  {
    name: "Niflheim",
    image: niflheimCampaignImg,
    description: "Realm of primordial ice and mist. Even sound freezes here.",
    pack: "Realm Pack",
    scenarios: [
      { name: "The World Tree's Shadow", quote: "Nidhogg gnaws at the roots. If he breaks through, all realms fall." },
      { name: "The Mist Devourer", quote: "It does not chase. It simply erases." },
    ],
  },
  {
    name: "Muspelheim",
    image: muspelheimCampaignImg,
    description: "The fire realm, burning since before time. Surtr waits at the end of all things.",
    pack: "Realm Pack",
    scenarios: [
      { name: "The Ember Gate", quote: "Beyond the gate, the air itself is a weapon." },
      { name: "Trial of the Fire Giant", quote: "Surtr's children test the worthy with flame. The unworthy, they consume." },
    ],
  },
  {
    name: "Alfheim",
    image: alfheimCampaignImg,
    description: "Home of the light elves — beautiful and treacherous in equal measure.",
    pack: "Realm Pack",
    scenarios: [
      { name: "The Stolen Light", quote: "When Alfheim darkens, all realms feel the cold." },
      { name: "Court of Thorns", quote: "The elves smile as they pass sentence. They always smile." },
    ],
  },
  {
    name: "Svartalfheim",
    image: svartalfheimCampaignImg,
    description: "Underground realm of dwarves and dark elves. What they forge, they guard with their lives.",
    pack: "Realm Pack",
    scenarios: [
      { name: "The Forge of Svartalfheim", quote: "The dwarves craft wonders… and horrors." },
      { name: "The Deep Market", quote: "Everything has a price. Everything." },
    ],
  },
  {
    name: "Vanaheim",
    image: vanaheimCampaignImg,
    description: "Realm of the Vanir gods — ancient nature magic runs wild and unchecked.",
    pack: "Realm Pack",
    scenarios: [
      { name: "The Overgrown Shrine", quote: "The forest reclaims what the gods abandoned." },
      { name: "Seeds of Corruption", quote: "Something poisons the roots. The Vanir cannot see it — but you can feel it." },
    ],
  },
  {
    name: "Asgard",
    image: asgardCampaignImg,
    description: "Realm of the Aesir. Even the gods' halls show cracks as Ragnarök approaches.",
    pack: "Realm Pack",
    scenarios: [
      { name: "The Broken Bridge", quote: "Bifrost crumbles. What crosses now was never meant to." },
      { name: "Odin's Test", quote: "The All-Father watches. He does not help." },
    ],
  },
  {
    name: "Helheim",
    image: helheimCampaignImg,
    description: "Realm of the dishonoured dead. Hel herself decides who stays — and who serves.",
    pack: "Realm Pack",
    scenarios: [
      { name: "The River of Knives", quote: "The Gjöll cuts deeper than steel. It cuts the soul." },
      { name: "Hel's Bargain", quote: "She offers a deal. She always offers a deal." },
    ],
  },
];

const CampaignSection = () => {
  return (
    <section id="campaign" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            The Grand <span className="text-primary">Campaign</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Journey through all Nine Realms in a connected campaign. Each realm is a self-contained
            "Realm Pack" that slots into the Book-Box — one realm at a time.
          </p>
        </motion.div>

        {/* Campaign Map */}
        <motion.div {...fadeIn} className="max-w-2xl mx-auto mb-16">
          <div className="relative rounded-xl overflow-hidden border border-border">
            <img
              src={grandCampaignMapImg}
              alt="Grand Campaign Map — Yggdrasil connecting the Nine Realms"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3 italic">
            Yggdrasil — The World Tree connects all Nine Realms. Your campaign begins in Midgard.
          </p>
        </motion.div>

        {/* Realm Accordions */}
        <motion.div {...fadeIn}>
          <Accordion type="single" collapsible className="space-y-3">
            {campaignRealms.map((realm, i) => (
              <AccordionItem
                key={realm.name}
                value={realm.name}
                className="border border-border rounded-xl overflow-hidden bg-card/40 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-card/60">
                  <div className="flex items-center gap-4 text-left">
                    <img
                      src={realm.image}
                      alt={realm.name}
                      className="w-16 h-10 rounded object-cover hidden sm:block"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-foreground">{realm.name}</span>
                        <Badge
                          variant={realm.pack === "Core Box" ? "default" : "secondary"}
                          className="text-[10px] px-1.5 py-0"
                        >
                          {realm.pack}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{realm.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img
                      src={realm.image}
                      alt={realm.name}
                      className="w-full md:w-64 h-36 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-3">
                      <p className="text-sm text-foreground/80">{realm.description}</p>
                      <div>
                        <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                          Scenarios ({realm.scenarios.length})
                        </h4>
                        <ul className="space-y-2">
                          {realm.scenarios.map((s) => (
                            <li key={s.name} className="border-l-2 border-primary/30 pl-3">
                              <div className="text-sm font-medium text-foreground">{s.name}</div>
                              <div className="text-xs italic text-muted-foreground">"{s.quote}"</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignSection;
