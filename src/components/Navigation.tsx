import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/game", label: "The Game" },
  { path: "/lore", label: "Lore Codex" },
  { path: "/workshop", label: "Workshop" },
  { path: "/campaign", label: "Campaign Hub" },
  { path: "/community", label: "Community" },
  { path: "/journal", label: "Dev Journal" },
  { path: "/vault", label: "Relic Vault" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              animate={{ 
                filter: [
                  "drop-shadow(0 0 8px hsl(40 100% 60% / 0.3))",
                  "drop-shadow(0 0 16px hsl(40 100% 60% / 0.6))",
                  "drop-shadow(0 0 8px hsl(40 100% 60% / 0.3))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Flame className="w-8 h-8 text-primary" />
            </motion.div>
            <span className="text-xl font-display font-bold">
              <span className="text-primary">Shadows</span>
              <span className="text-muted-foreground"> of the Nine Realms</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/20 text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-card overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-muted"
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
