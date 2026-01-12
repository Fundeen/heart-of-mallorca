import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import eventImage from "@/assets/event-community.jpg";
import LeadForm from "./LeadForm";

const EventSection = () => {
  return (
    <section id="evento" className="section-padding bg-background">
      <div className="container-wide">
        {/* Chapter intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption text-primary mb-2 block">Capítulo 5</span>
          <h2 className="text-editorial-lg text-foreground mb-4">
            Un espacio para encontrarnos
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Porque la inversión no solo sucede online. Te invitamos a conocer 
            de cerca el proyecto y a las personas que lo hacen posible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image and details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-golden/20 rounded-3xl blur-2xl" />
              <img
                src={eventImage}
                alt="Evento de inversores en Mallorca"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl">
                <Calendar size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Fecha</p>
                  <p className="font-medium text-foreground">15 Febrero 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl">
                <MapPin size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Lugar</p>
                  <p className="font-medium text-foreground">Palma de Mallorca</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl">
                <Clock size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Horario</p>
                  <p className="font-medium text-foreground">18:00 - 21:00h</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl">
                <Users size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Aforo</p>
                  <p className="font-medium text-foreground">Limitado a 50 personas</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Event registration form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LeadForm
              variant="event"
              title="Reserva tu plaza"
              subtitle="El aforo es limitado. Confirma tu asistencia y te enviaremos todos los detalles del evento."
              ctaText="Confirmar asistencia"
              showPhone={true}
            />
            
            <div className="mt-6 p-4 bg-primary/10 rounded-xl">
              <p className="text-sm text-foreground">
                <strong>¿Qué incluye el evento?</strong>
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Visita guiada a las instalaciones</li>
                <li>• Presentación del equipo promotor</li>
                <li>• Sesión de preguntas y respuestas</li>
                <li>• Networking con otros inversores</li>
                <li>• Cóctel de clausura</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
