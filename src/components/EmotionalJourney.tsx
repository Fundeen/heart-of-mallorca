import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Users, Leaf } from "lucide-react";

const emotions = [
  {
    icon: Heart,
    title: "Pertenencia",
    description: "Un proyecto que nace en un lugar concreto y reconocible. Tu tierra, tu inversión.",
    color: "text-white",
  },
  {
    icon: Shield,
    title: "Cuidado",
    description: "Invertir como una forma de proteger y mejorar lo que es de todos.",
    color: "text-white",
  },
  {
    icon: Lightbulb,
    title: "Consciencia",
    description: "Tomar decisiones sobre el futuro desde la responsabilidad.",
    color: "text-white",
  },
  {
    icon: Users,
    title: "Confianza",
    description: "Personas reales, plantas funcionando, un proyecto que ya existe.",
    color: "text-white",
  },
  {
    icon: Leaf,
    title: "Acción compartida",
    description: "Formar parte del cambio junto a una comunidad de inversores.",
    color: "text-white",
  },
];

const EmotionalJourney = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption text-primary mb-4 block">
            El recorrido emocional
          </span>
          <h2 className="text-editorial-lg text-foreground mb-4">
            Por qué importa invertir aquí
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {emotions.map((emotion, index) => (
              <motion.div
                key={emotion.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 border border-white/30 mb-6 relative z-10">
                  <emotion.icon size={28} className={emotion.color} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {emotion.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {emotion.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalJourney;
