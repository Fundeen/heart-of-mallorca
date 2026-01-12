import { motion } from "framer-motion";
import { ArrowRight, FileText, Euro, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-solar-mallorca.jpg";
import LeadForm from "./LeadForm";

const benefits = [
  "Inversión desde 500€",
  "Rentabilidad estimada del 6% anual",
  "Proyecto ya en funcionamiento",
  "Impacto local y sostenible",
];

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
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/85 to-primary/60" />
      </div>

      <div className="relative z-10 container-wide">
        {/* Chapter intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption text-primary-foreground/70 mb-2 block">El siguiente paso</span>
          <h2 className="text-editorial-xl text-primary-foreground mb-6">
            Forma parte del cambio
          </h2>
          <p className="text-body-lg text-primary-foreground/80 max-w-xl mx-auto">
            Has llegado hasta aquí porque algo te conecta con este proyecto. 
            Ahora es el momento de decidir cómo quieres participar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option 1: Learn more */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 transition-all duration-300 hover:bg-primary-foreground/20 hover:border-primary-foreground/40"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary-foreground/20 rounded-xl mb-6">
              <FileText size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl text-primary-foreground mb-3">
              Quiero más información
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Accede a toda la información financiera, técnica y legal del proyecto 
              en nuestra landing detallada.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground group-hover:gap-3 transition-all">
              Ver landing técnica
              <ArrowRight size={16} />
            </span>
          </motion.a>

          {/* Option 2: Quick registration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary rounded-2xl p-8 animate-pulse-glow"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary-foreground/20 rounded-xl mb-6">
              <Euro size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl text-primary-foreground mb-3">
              Quiero empezar a invertir
            </h3>
            
            <ul className="space-y-2 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-primary-foreground/90 text-sm">
                  <CheckCircle size={16} className="text-primary-foreground/70 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <LeadForm
              variant="hero"
              ctaText="Empezar ahora"
            />
            
            <p className="text-xs text-primary-foreground/60 mt-4 text-center">
              Te contactaremos en menos de 24 horas
            </p>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-foreground/60 text-sm mb-4">
            Más de 500 inversores ya confían en Son Ripollet
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/40">
            <span className="font-serif text-lg">Fundeen</span>
            <span className="text-2xl">•</span>
            <span className="font-serif text-lg">Sampol</span>
            <span className="text-2xl">•</span>
            <span className="font-serif text-lg">CNMV</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
