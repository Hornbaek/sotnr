import { Link } from 'react-router-dom';
import { Github, Youtube, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1a1410] border-t border-[#d4a259]/20 stone-texture mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-[#d4a259] mb-4">Shadows of the Nine Realms</h3>
            <p className="text-[#a89274] text-sm">
              A cooperative dungeon crawler inspired by Norse mythology and the nine realms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d4a259] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/game" className="text-[#a89274] hover:text-[#d4a259] transition-colors text-sm">
                  The Game
                </Link>
              </li>
              <li>
                <Link to="/lore" className="text-[#a89274] hover:text-[#d4a259] transition-colors text-sm">
                  Lore Codex
                </Link>
              </li>
              <li>
                <Link to="/workshop" className="text-[#a89274] hover:text-[#d4a259] transition-colors text-sm">
                  Workshop
                </Link>
              </li>
              <li>
                <Link to="/vault" className="text-[#a89274] hover:text-[#d4a259] transition-colors text-sm">
                  Relic Vault
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-[#d4a259] mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/community" className="text-[#a89274] hover:text-[#d4a259] transition-colors text-sm">
                  Community Hall
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-[#a89274] hover:text-[#d4a259] transition-colors text-sm">
                  Developer Journal
                </Link>
              </li>
              <li>
                <Link to="/campaign" className="text-[#a89274] hover:text-[#d4a259] transition-colors text-sm">
                  Campaign Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#d4a259] mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#3a2f1f] hover:bg-[#d4a259] transition-colors group"
                aria-label="Discord"
              >
                <Github className="w-5 h-5 text-[#e8dcc4] group-hover:text-[#1a1410]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#3a2f1f] hover:bg-[#d4a259] transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-[#e8dcc4] group-hover:text-[#1a1410]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#3a2f1f] hover:bg-[#d4a259] transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#e8dcc4] group-hover:text-[#1a1410]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#3a2f1f] hover:bg-[#d4a259] transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-[#e8dcc4] group-hover:text-[#1a1410]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#d4a259]/20 flex flex-col sm:flex-row items-center justify-between text-[#a89274] text-sm gap-4">
          <p>&copy; 2025 Shadows of the Nine Realms. All rights reserved.</p>
          <Link 
            to="/admin/login" 
            className="text-[#a89274]/50 hover:text-[#d4a259] transition-colors text-xs"
            title="Admin Access"
          >
            ⚔️ Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};
