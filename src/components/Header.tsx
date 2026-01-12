import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              fundeen
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#historia" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline">
              La historia
            </a>
            <a href="#proyecto" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline">
              El proyecto
            </a>
            <a href="#voces" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline">
              Voces
            </a>
            <a href="#evento" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline">
              Evento
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#invertir"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Participar desde 500€
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#historia"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                La historia
              </a>
              <a
                href="#proyecto"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                El proyecto
              </a>
              <a
                href="#voces"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Voces
              </a>
              <a
                href="#evento"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Evento
              </a>
              <a
                href="#invertir"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Participar desde 500€
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
