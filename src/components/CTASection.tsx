import { motion } from "framer-motion";
import { FileText, Euro } from "lucide-react";
import heroImage from "@/assets/hero-solar-mallorca.jpg";
import { FundeenButton } from "@/components/ui/fundeen-button";

// HubSpot Landing Page URL - Replace with your actual HubSpot landing page
const HUBSPOT_LANDING_URL = "https://share.hsforms.com/YOUR_FORM_ID";

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
          className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 sm:px-0"
        >
          <FundeenButton
            href="https://fundeen.com/proyecto/son-ripollet"
            variant="secondaryLight"
            size="xl"
            icon={FileText}
            iconPosition="left"
            iconAnimate="none"
          >
            Descubrir el proyecto
          </FundeenButton>

          <FundeenButton
            href={HUBSPOT_LANDING_URL}
            variant="colorFull"
            size="xl"
            icon={Euro}
            iconPosition="left"
            iconAnimate="none"
            className="animate-pulse-glow"
          >
            Reservar mi plaza
          </FundeenButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
