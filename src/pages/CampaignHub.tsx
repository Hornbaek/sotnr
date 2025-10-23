import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Download, Save } from 'lucide-react';
import { RunicDivider } from '../components/RunicDivider';

export const CampaignHub = () => {
  const [playerNotes, setPlayerNotes] = useState('');
  const [sessionCount, setSessionCount] = useState(0);
  const [lastPlayed, setLastPlayed] = useState<string | null>(null);

  useEffect(() => {
    // Load from localStorage
    const savedNotes = localStorage.getItem('campaign-notes');
    const savedSessions = localStorage.getItem('session-count');
    const savedLastPlayed = localStorage.getItem('last-played');

    if (savedNotes) setPlayerNotes(savedNotes);
    if (savedSessions) setSessionCount(parseInt(savedSessions));
    if (savedLastPlayed) setLastPlayed(savedLastPlayed);
  }, []);

  const handleSaveNotes = () => {
    localStorage.setItem('campaign-notes', playerNotes);
    alert('Campaign notes saved!');
  };

  const handleIncrementSession = () => {
    const newCount = sessionCount + 1;
    const now = new Date().toLocaleDateString();
    setSessionCount(newCount);
    setLastPlayed(now);
    localStorage.setItem('session-count', newCount.toString());
    localStorage.setItem('last-played', now);
  };

  const resources = [
    { name: 'Core Rulebook', type: 'PDF', size: '12 MB' },
    { name: 'Quick Reference Guide', type: 'PDF', size: '2 MB' },
    { name: 'Character Sheets', type: 'PDF', size: '1 MB' },
    { name: 'Printable Tokens', type: 'PDF', size: '5 MB' },
  ];

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
              <Shield className="w-12 h-12" />
              Campaign Hub
            </h1>
            <p className="text-xl text-[#a89274] max-w-3xl mx-auto">
              Your central command for managing campaigns, tracking progress, and accessing resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Tracker */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl text-[#d4a259] mb-8 text-center">
            Campaign Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-6 text-center stone-texture"
            >
              <div className="text-5xl text-[#d4a259] mb-2 torch-glow">{sessionCount}</div>
              <p className="text-[#a89274]">Sessions Played</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-6 text-center stone-texture"
            >
              <div className="text-xl text-[#d4a259] mb-2">{lastPlayed || 'Not yet'}</div>
              <p className="text-[#a89274]">Last Played</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-6 flex items-center justify-center stone-texture"
            >
              <button
                onClick={handleIncrementSession}
                className="px-6 py-3 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-lg transition-all"
              >
                Log New Session
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <RunicDivider />

      {/* Player Log */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl text-[#d4a259] mb-8 text-center">
            Campaign Journal
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-[#d4a259]" />
              <h3 className="text-xl text-[#d4a259]">Your Notes</h3>
            </div>

            <textarea
              value={playerNotes}
              onChange={(e) => setPlayerNotes(e.target.value)}
              rows={12}
              placeholder="Record your campaign adventures, strategies, and memorable moments here..."
              className="w-full px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors resize-none mb-4"
            />

            <button
              onClick={handleSaveNotes}
              className="px-6 py-3 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Notes
            </button>
          </motion.div>
        </div>
      </section>

      {/* Digital Map */}
      <section className="py-20 px-4 bg-[#2a2218]/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl text-[#d4a259] mb-8 text-center">
            Overworld Map
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-[#1a1410] rounded-lg border-2 border-[#d4a259]/30 overflow-hidden"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1618385418700-35dc948cdeec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWFwJTIwcGFyY2htZW50fGVufDF8fHx8MTc2MTAyOTAyNHww&ixlib=rb-4.1.0&q=80&w=1080)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#1a1410]/50 flex items-center justify-center">
              <p className="text-[#a89274]">Interactive map coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl text-[#d4a259] mb-8 text-center">
            Resource Library
          </h2>

          <div className="space-y-4">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#2a2218] rounded-lg border border-[#d4a259]/30 p-6 flex items-center justify-between stone-texture hover:border-[#d4a259] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#d4a259]/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#d4a259]" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{resource.name}</h3>
                    <p className="text-sm text-[#a89274]">
                      {resource.type} • {resource.size}
                    </p>
                  </div>
                </div>
                <button className="p-3 rounded-full bg-[#3a2f1f] hover:bg-[#d4a259] transition-colors group">
                  <Download className="w-5 h-5 text-[#e8dcc4] group-hover:text-[#1a1410]" />
                </button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[#a89274] mt-8 text-sm">
            More resources will be available as development progresses
          </p>
        </div>
      </section>
    </div>
  );
};
