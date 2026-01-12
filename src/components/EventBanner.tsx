import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import eventImage from "@/assets/event-community.jpg";

const EventBanner = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src={eventImage}
          alt="Evento en Mallorca"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container-wide py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-caption text-primary-foreground/80">
              Próximo evento
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-primary-foreground text-center md:text-left">
              Encuentro de inversores en Mallorca
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-4 text-primary-foreground/90 text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                15 Feb 2026
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Palma
              </span>
            </div>
            <a
              href="#evento"
              className="flex items-center gap-2 px-6 py-2.5 bg-primary-foreground text-primary rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 group"
            >
              Reservar plaza
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventBanner;
