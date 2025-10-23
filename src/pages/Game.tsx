import { motion } from 'motion/react';
import { Gamepad2, Users, Dices, Target, Play } from 'lucide-react';
import { RunicDivider } from '../components/RunicDivider';
import { useState } from 'react';

export const Game = () => {
  const [actionPoints, setActionPoints] = useState(3);

  const mechanics = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cooperative Play',
      description: 'Work together with 1-4 players to survive the dungeon depths.',
    },
    {
      icon: <Dices className="w-8 h-8" />,
      title: 'Tactical Combat',
      description: 'Use action points strategically to outmaneuver your foes.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Progression System',
      description: 'Unlock new realms, heroes, and abilities as you advance.',
    },
  ];

  const handleActionClick = () => {
    if (actionPoints > 0) {
      setActionPoints(actionPoints - 1);
      setTimeout(() => setActionPoints(3), 2000);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1617975376068-70b03a09bcc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGR1bmdlb24lMjB0b3JjaHxlbnwxfHx8fDE3NjEwMjkwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#1a1410]/90"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl text-[#d4a259] mb-6 flex items-center justify-center gap-4">
              <Gamepad2 className="w-12 h-12" />
              The Game
            </h1>
            <p className="text-xl text-[#a89274] max-w-3xl mx-auto">
              A cooperative dungeon crawler where heroes navigate the Nine Realms, 
              battling mythical creatures and uncovering ancient secrets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
          >
            <h2 className="text-3xl text-[#d4a259] mb-6">Overview</h2>
            <p className="text-[#a89274] mb-4">
              Shadows of the Nine Realms is a cooperative board game for 1-4 players. 
              Take on the role of legendary heroes as you traverse the Overworld, 
              choosing which realms to explore and which dangers to face.
            </p>
            <p className="text-[#a89274]">
              Each dungeon dive challenges your tactical skills as you manage limited 
              action points, coordinate with allies, and adapt to ever-changing threats. 
              Will you emerge victorious, or will the shadows consume you?
            </p>
          </motion.div>
        </div>
      </section>

      <RunicDivider />

      {/* Mechanics */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl text-[#d4a259] text-center mb-12">
            Core Mechanics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mechanics.map((mechanic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2a2218] rounded-lg border border-[#d4a259]/30 p-6 text-center stone-texture hover:border-[#d4a259] transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4a259]/20 text-[#d4a259] mb-4">
                  {mechanic.icon}
                </div>
                <h3 className="text-xl mb-3">{mechanic.title}</h3>
                <p className="text-[#a89274]">{mechanic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Point Demo */}
      <section className="py-20 px-4 bg-[#2a2218]/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl text-[#d4a259] mb-6">
              Action Point System
            </h2>
            <p className="text-[#a89274] mb-8">
              Each turn, you have 3 action points to spend on movement, attacks, or abilities.
              Click the button to simulate using an action point.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              {[1, 2, 3].map((point) => (
                <motion.div
                  key={point}
                  animate={{
                    scale: point <= actionPoints ? 1 : 0.7,
                    opacity: point <= actionPoints ? 1 : 0.3,
                  }}
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${
                    point <= actionPoints
                      ? 'border-[#d4a259] bg-[#d4a259]/20 torch-glow'
                      : 'border-[#4a3f2f] bg-[#3a2f1f]'
                  }`}
                >
                  <span className="text-2xl">{point}</span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={handleActionClick}
              disabled={actionPoints === 0}
              className="px-8 py-4 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              <Target className="w-5 h-5" />
              Use Action Point
            </button>

            {actionPoints === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-[#d4a259]"
              >
                Actions refreshing...
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Phase Breakdown */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-[#d4a259] text-center mb-12">
            Game Phases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
            >
              <h3 className="text-2xl text-[#d4a259] mb-4">Overworld Phase</h3>
              <ul className="space-y-3 text-[#a89274]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a259]">•</span>
                  Navigate the interconnected realms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a259]">•</span>
                  Choose which dungeons to explore
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a259]">•</span>
                  Manage resources and prepare
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a259]">•</span>
                  Unlock new paths and opportunities
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
            >
              <h3 className="text-2xl text-[#d4a259] mb-4">Dungeon Phase</h3>
              <ul className="space-y-3 text-[#a89274]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a259]">•</span>
                  Tactical turn-based combat
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a259]">•</span>
                  Manage action points strategically
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a259]">•</span>
                  Face mythical creatures and bosses
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a259]">•</span>
                  Discover treasures and artifacts
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-[#2a2218]/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl text-[#d4a259] mb-8">
            Gameplay Preview
          </h2>
          <div className="relative aspect-video bg-[#1a1410] rounded-lg border-2 border-[#d4a259]/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-20 h-20 text-[#d4a259] mx-auto mb-4 torch-glow" />
                <p className="text-[#a89274]">Gameplay video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
