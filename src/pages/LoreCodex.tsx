import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, X, Search } from 'lucide-react';
import { RunicDivider } from '../components/RunicDivider';

export const LoreCodex = () => {
  const [selectedRealm, setSelectedRealm] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'common' | 'elite' | 'boss'>('common');
  const [searchTerm, setSearchTerm] = useState('');

  const realms = [
    {
      name: 'Asgard',
      title: 'Realm of the Gods',
      description: 'Home of the Aesir gods, a golden citadel floating above the clouds. Here, Odin watches over all the realms from his throne.',
      color: '#d4a259',
    },
    {
      name: 'Midgard',
      title: 'Realm of Mortals',
      description: 'The world of humans, connected to all other realms by the roots and branches of Yggdrasil, the World Tree.',
      color: '#8b6f47',
    },
    {
      name: 'Jotunheim',
      title: 'Land of Giants',
      description: 'A frozen wasteland inhabited by the fearsome Jotnar, ancient enemies of the Aesir gods.',
      color: '#c9e4f5',
    },
    {
      name: 'Niflheim',
      title: 'World of Mist',
      description: 'A primordial realm of ice and mist, home to the spring Hvergelmir and the dragon Nidhogg.',
      color: '#787165',
    },
    {
      name: 'Muspelheim',
      title: 'Land of Fire',
      description: 'A burning realm of eternal flames, ruled by the fire giant Surtr who guards the flaming sword.',
      color: '#f5a623',
    },
    {
      name: 'Alfheim',
      title: 'Realm of Light Elves',
      description: 'A radiant land inhabited by the Ljósálfar, beings of light and beauty who serve the gods.',
      color: '#f5a623',
    },
  ];

  const creatures = {
    common: [
      { name: 'Draugr Warrior', realm: 'Midgard', threat: 2 },
      { name: 'Ice Wraith', realm: 'Niflheim', threat: 2 },
      { name: 'Fire Imp', realm: 'Muspelheim', threat: 1 },
      { name: 'Shadow Wolf', realm: 'Svartalfheim', threat: 2 },
    ],
    elite: [
      { name: 'Frost Giant', realm: 'Jotunheim', threat: 4 },
      { name: 'Valkyrie Guardian', realm: 'Asgard', threat: 5 },
      { name: 'Corrupted Elf', realm: 'Alfheim', threat: 3 },
    ],
    boss: [
      { name: 'Nidhogg the Devourer', realm: 'Niflheim', threat: 8 },
      { name: 'Surtr the Flame King', realm: 'Muspelheim', threat: 9 },
      { name: 'Fenrir Unchained', realm: 'Midgard', threat: 10 },
    ],
  };

  const filteredCreatures = creatures[activeTab].filter((creature) =>
    creature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    creature.realm.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl text-[#d4a259] mb-6 flex items-center justify-center gap-4">
              <Book className="w-12 h-12" />
              Lore Codex
            </h1>
            <p className="text-xl text-[#a89274] max-w-3xl mx-auto">
              Explore the mysteries of the Nine Realms and the creatures that dwell within
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nine Realms Map */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl text-[#d4a259] text-center mb-12">
            The Nine Realms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {realms.map((realm, index) => (
              <motion.div
                key={realm.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedRealm(realm.name)}
                className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-6 cursor-pointer stone-texture hover:border-[#d4a259] transition-all"
              >
                <div
                  className="w-12 h-12 rounded-full mb-4 opacity-80"
                  style={{ backgroundColor: realm.color }}
                />
                <h3 className="text-2xl mb-2">{realm.name}</h3>
                <p className="text-[#d4a259] text-sm mb-3">{realm.title}</p>
                <p className="text-[#a89274] text-sm line-clamp-3">
                  {realm.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Realm Modal */}
      <AnimatePresence>
        {selectedRealm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedRealm(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259] p-8 max-w-2xl w-full stone-texture"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl text-[#d4a259] mb-2">{selectedRealm}</h3>
                  <p className="text-[#a89274]">
                    {realms.find((r) => r.name === selectedRealm)?.title}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedRealm(null)}
                  className="p-2 hover:bg-[#3a2f1f] rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-[#e8dcc4] mb-6">
                {realms.find((r) => r.name === selectedRealm)?.description}
              </p>
              <div className="text-[#a89274] space-y-2">
                <p>• Unique environmental hazards and opportunities</p>
                <p>• Distinct enemy types and boss encounters</p>
                <p>• Realm-specific artifacts and treasures</p>
                <p>• Deep connections to Norse mythology</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <RunicDivider />

      {/* Bestiary */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-[#d4a259] text-center mb-8">
            Bestiary
          </h2>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a89274]" />
              <input
                type="text"
                placeholder="Search creatures or realms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#2a2218] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {(['common', 'elite', 'boss'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg transition-all capitalize ${
                  activeTab === tab
                    ? 'bg-[#d4a259] text-[#1a1410]'
                    : 'bg-[#2a2218] border border-[#d4a259]/30 hover:border-[#d4a259]'
                }`}
              >
                {tab} Foes
              </button>
            ))}
          </div>

          {/* Creature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCreatures.map((creature, index) => (
              <motion.div
                key={creature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ rotateY: 180 }}
                className="relative h-64 preserve-3d cursor-pointer"
              >
                {/* Front */}
                <div className="absolute inset-0 bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-6 backface-hidden stone-texture flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#d4a259]/20 flex items-center justify-center mb-4">
                    <span className="text-4xl">⚔️</span>
                  </div>
                  <h3 className="text-xl text-center mb-2">{creature.name}</h3>
                  <p className="text-[#d4a259] text-sm">{creature.realm}</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-[#2a2218] rounded-lg border-2 border-[#d4a259] p-6 backface-hidden stone-texture rotate-y-180">
                  <h3 className="text-xl mb-4 text-[#d4a259]">{creature.name}</h3>
                  <div className="space-y-2 text-sm text-[#a89274]">
                    <p>Realm: {creature.realm}</p>
                    <p>Threat Level: {creature.threat}/10</p>
                    <p className="mt-4">A fearsome adversary that stalks the depths of {creature.realm}, challenging even the bravest heroes.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
