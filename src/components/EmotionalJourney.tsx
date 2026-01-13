import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Users, Leaf } from "lucide-react";
const emotions = [{
  icon: Heart,
  title: "Pertenencia",
  description: "Un proyecto que nace en un lugar concreto y reconocible. Tu tierra, tu inversión.",
  color: "text-terracotta"
}, {
  icon: Shield,
  title: "Cuidado",
  description: "Invertir como una forma de proteger y mejorar lo que es de todos.",
  color: "text-sage"
}, {
  icon: Lightbulb,
  title: "Consciencia",
  description: "Tomar decisiones sobre el futuro desde la responsabilidad.",
  color: "text-golden"
}, {
  icon: Users,
  title: "Confianza",
  description: "Personas reales, plantas funcionando, un proyecto que ya existe.",
  color: "text-primary"
}, {
  icon: Leaf,
  title: "Acción compartida",
  description: "Formar parte del cambio junto a una comunidad de inversores.",
  color: "text-sage"
}];
const EmotionalJourney = () => {
  return <section className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-caption text-primary mb-4 block">
            El recorrido emocional
          </span>
          <h2 className="text-editorial-lg text-foreground mb-4">
            Por qué importa invertir aquí
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {emotions.map((emotion, index) => <motion.div key={emotion.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border border-border mb-6 relative z-10">
                  <emotion.icon size={28} className={emotion.color} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {emotion.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {emotion.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default EmotionalJourney;