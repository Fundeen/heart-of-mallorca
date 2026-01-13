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
      className="fixed top-0 left-0 right-0 z-50 bg-coral/90 backdrop-blur-md"
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold text-white">
              fundeen
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#historia" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              La historia
            </a>
            <a href="#proyecto" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              El proyecto
            </a>
            <a href="#voces" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Voces
            </a>
            <a href="#evento" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Evento
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#invertir"
              className="px-6 py-2.5 bg-white text-coral-dark rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Iniciar sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
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
            className="md:hidden py-4 border-t border-white/20"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#historia"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                La historia
              </a>
              <a
                href="#proyecto"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                El proyecto
              </a>
              <a
                href="#voces"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Voces
              </a>
              <a
                href="#evento"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Evento
              </a>
              <a
                href="#invertir"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-coral-dark rounded-full text-sm font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar sesión
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
