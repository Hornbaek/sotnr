import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-3">
              <span className="text-primary">Shadows</span>
              <span className="text-muted-foreground"> of the Nine Realms</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              An epic cooperative dungeon crawler through Norse mythology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/game" className="hover:text-primary transition-colors">The Game</Link></li>
              <li><Link to="/lore" className="hover:text-primary transition-colors">Lore Codex</Link></li>
              <li><Link to="/workshop" className="hover:text-primary transition-colors">Workshop</Link></li>
              <li><Link to="/vault" className="hover:text-primary transition-colors">Relic Vault</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Join Our Community</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Shadows of the Nine Realms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
