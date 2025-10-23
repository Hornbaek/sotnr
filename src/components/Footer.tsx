import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-3 text-primary">
              Nine Realms
            </h3>
            <p className="text-foreground/70 text-sm">
              Journey through the Nine Realms of Norse mythology in this epic strategic board game.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-primary">Explore</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><Link to="/game" className="hover:text-primary transition-colors">The Game</Link></li>
              <li><Link to="/lore" className="hover:text-primary transition-colors">Lore Codex</Link></li>
              <li><Link to="/workshop" className="hover:text-primary transition-colors">Workshop</Link></li>
              <li><Link to="/vault" className="hover:text-primary transition-colors">Relic Vault</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Shadows of the Nine Realms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
