import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import eventImage from "@/assets/event-community.jpg";

const EventSection = () => {
  return (
    <section id="evento" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-2xl" />
            <img
              src={eventImage}
              alt="Evento de inversores en Mallorca"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-caption text-primary mb-4 block">
              Encuentro presencial
            </span>
            <h2 className="text-editorial-lg text-foreground mb-6">
              Un espacio para encontrarnos
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              Porque la inversión no solo sucede online. Te invitamos a conocer 
              de cerca el proyecto, a las personas que lo hacen posible y a otros 
              inversores que, como tú, creen en un futuro más sostenible.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <Calendar size={20} className="text-white" />
                <div>
                  <p className="text-sm text-white/70">Fecha</p>
                  <p className="font-medium text-white">15 Febrero 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <MapPin size={20} className="text-white" />
                <div>
                  <p className="text-sm text-white/70">Lugar</p>
                  <p className="font-medium text-white">Palma de Mallorca</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <Clock size={20} className="text-white" />
                <div>
                  <p className="text-sm text-white/70">Horario</p>
                  <p className="font-medium text-white">18:00 - 21:00h</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <Users size={20} className="text-white" />
                <div>
                  <p className="text-sm text-white/70">Aforo</p>
                  <p className="font-medium text-white">Limitado</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-coral-dark rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Reservar mi plaza
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
