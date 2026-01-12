import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show after scrolling past hero section
      setIsVisible(scrollY > windowHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0"
        >
          <div className="md:max-w-lg md:ml-auto md:mr-6 md:mb-6">
            <div className="bg-foreground text-primary-foreground rounded-2xl p-4 md:p-5 shadow-2xl border border-primary-foreground/10 relative">
              <button
                onClick={() => setIsDismissed(true)}
                className="absolute top-3 right-3 p-1 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pr-6">
                <div className="flex-1">
                  <p className="font-serif text-lg text-primary-foreground mb-1">
                    ¿Quieres formar parte?
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    Invierte desde 500€ en energía local
                  </p>
                </div>
                <a
                  href="#invertir"
                  className="shrink-0 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
                >
                  Empezar ahora
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
