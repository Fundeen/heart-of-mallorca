import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-solar-mallorca.jpg";

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
          className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10"
        >
          Un proyecto de energía solar en el corazón de Mallorca. 
          Una oportunidad para formar parte de algo real, cercano y compartido.
        </motion.p>

        {/* Campaign Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <div className="aspect-video bg-foreground/20 backdrop-blur-sm">
            <img
              src={heroImage}
              alt="Video de campaña Son Ripollet"
              className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-primary-foreground/95 rounded-full transition-all duration-300 group-hover:scale-110 shadow-xl">
                <Play size={32} className="text-primary ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Video label */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <span className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-1 block">
                Spot principal
              </span>
              <h3 className="font-serif text-lg md:text-xl text-primary-foreground">
                Cuidar lo que es nuestro
              </h3>
              <span className="text-sm text-primary-foreground/60">2:30 min</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="#historia"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg text-lg"
          >
            Quiero saber más
            <ArrowDown size={20} />
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
