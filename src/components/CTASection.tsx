import { motion } from "framer-motion";
import { ArrowRight, FileText, Euro } from "lucide-react";
import heroImage from "@/assets/hero-solar-mallorca.jpg";

const CTASection = () => {
  return (
    <section id="invertir" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Son Ripollet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/80 to-primary/60" />
      </div>

      <div className="relative z-10 container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-caption text-primary-foreground/70 mb-4 block">
            Da el siguiente paso
          </span>
          <h2 className="text-editorial-xl text-primary-foreground mb-6">
            Forma parte del cambio
          </h2>
          <p className="text-body-lg text-primary-foreground/80 max-w-xl mx-auto mb-12">
            Has llegado hasta aquí porque algo te conecta con este proyecto. 
            Ahora es el momento de decidir cómo quieres participar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {/* Option 1: Learn more */}
          <a
            href="#"
            className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-left transition-all duration-300 hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary-foreground/20 rounded-xl mb-6">
              <FileText size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl text-primary-foreground mb-3">
              Descubrir el proyecto
            </h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Accede a toda la información financiera y técnica del proyecto.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground group-hover:gap-3 transition-all">
              Ver landing técnica
              <ArrowRight size={16} />
            </span>
          </a>

          {/* Option 2: Invest */}
          <a
            href="#"
            className="group bg-primary rounded-2xl p-8 text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse-glow"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary-foreground/20 rounded-xl mb-6">
              <Euro size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl text-primary-foreground mb-3">
              Participar desde 500€
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Regístrate o accede a tu cuenta para empezar a invertir hoy.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground group-hover:gap-3 transition-all">
              Invertir ahora
              <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
