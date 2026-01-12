import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-solar-mallorca.jpg";
import LeadForm from "./LeadForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Planta solar Son Ripollet en Mallorca"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-caption text-primary-foreground/80 mb-6">
            Son Ripollet · Mallorca
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-editorial-xl text-primary-foreground mb-8 text-balance"
        >
          Cuidar lo que es nuestro es invertir en el futuro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8"
        >
          Un proyecto de energía solar en el corazón de Mallorca. 
          Una oportunidad para formar parte de algo real, cercano y compartido.
        </motion.p>

        {/* Lead Capture Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl mx-auto mb-8"
        >
          <p className="text-sm text-primary-foreground/70 mb-3">
            Recibe información exclusiva sobre el proyecto
          </p>
          <LeadForm 
            variant="hero" 
            ctaText="Quiero saber más"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group flex items-center gap-3 px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground/20">
            <span className="w-8 h-8 flex items-center justify-center bg-primary-foreground rounded-full transition-transform group-hover:scale-110">
              <Play size={14} className="text-foreground ml-0.5" fill="currentColor" />
            </span>
            Ver la historia
          </button>
          <a
            href="#historia"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 text-sm"
          >
            O sigue leyendo <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-primary-foreground/70"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
