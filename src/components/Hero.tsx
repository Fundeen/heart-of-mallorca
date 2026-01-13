import { motion } from "framer-motion";
import { Play, ArrowDown, ArrowRight } from "lucide-react";
import videoThumbnail from "@/assets/hero-solar-mallorca.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm Mediterranean Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, 
            hsl(35 30% 92%) 0%, 
            hsl(20 45% 85%) 30%, 
            hsl(35 35% 88%) 60%, 
            hsl(90 20% 85%) 100%)`
        }}
      >
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 25% 30%, hsl(35 60% 70% / 0.5) 0%, transparent 50%),
                         radial-gradient(circle at 75% 70%, hsl(20 50% 65% / 0.4) 0%, transparent 45%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-caption text-foreground/70 mb-6">
            Son Ripollet · Mallorca
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-editorial-xl text-foreground mb-6 text-balance"
        >
          Cuidar lo que es nuestro es invertir en el futuro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-lg text-foreground/80 max-w-2xl mx-auto mb-8"
        >
          Un proyecto de energía solar en el corazón de Mallorca. 
          Una oportunidad para formar parte de algo real, cercano y compartido.
        </motion.p>

        {/* CTA Buttons - Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#historia"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg text-lg"
          >
            Quiero saber más
            <ArrowDown size={20} />
          </a>
          <a
            href="https://fundeen.com/proyecto/son-ripollet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground/10 text-foreground rounded-full font-medium transition-all duration-300 hover:bg-foreground/20 text-lg border border-foreground/20"
          >
            Ver ficha técnica
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Campaign Video - Hero Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <div className="aspect-video">
            <img
              src={videoThumbnail}
              alt="Video de campaña Son Ripollet"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-foreground/10" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-primary rounded-full transition-all duration-300 group-hover:scale-110 shadow-2xl">
                <Play size={40} className="text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Video label */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-left">
              <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs uppercase tracking-widest rounded-full mb-3">
                Spot de campaña
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-primary-foreground mb-1">
                Cuidar lo que es nuestro
              </h3>
              <span className="text-sm text-primary-foreground/70">2:30 min</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-foreground/50"
        >
          <span className="text-xs uppercase tracking-widest">Descubre las historias</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
