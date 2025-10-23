import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';
import { motion, AnimatePresence } from 'motion/react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMuted, toggleMute } = useAudio();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/game', label: 'The Game' },
    { path: '/lore', label: 'Lore Codex' },
    { path: '/workshop', label: 'Workshop' },
    { path: '/campaign', label: 'Campaign Hub' },
    { path: '/community', label: 'Community' },
    { path: '/journal', label: 'Journal' },
    { path: '/vault', label: 'Relic Vault' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2a2218]/95 backdrop-blur-sm border-b border-[#d4a259]/20 stone-texture">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 torch-glow rounded-full blur-md"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a259] to-[#8b6f47] flex items-center justify-center relative">
                <span className="text-[#1a1410]">⚔️</span>
              </div>
            </div>
            <span className="hidden md:block transition-colors group-hover:text-[#d4a259]">
              Shadows of the Nine Realms
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition-colors ${
                  isActive(link.path) ? 'text-[#d4a259]' : 'hover:text-[#d4a259]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4a259]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-[#3a2f1f] transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[#3a2f1f] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#2a2218] border-t border-[#d4a259]/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#3a2f1f] text-[#d4a259]'
                      : 'hover:bg-[#3a2f1f]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
