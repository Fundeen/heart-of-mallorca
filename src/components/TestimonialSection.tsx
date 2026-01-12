import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";

const testimonials = [
  {
    quote: "Invertir en Son Ripollet es mucho más que un retorno financiero. Es saber que estoy contribuyendo a algo que beneficia a mi comunidad.",
    name: "María García",
    role: "Inversora desde 2024",
    location: "Palma de Mallorca",
    hasVideo: true,
  },
  {
    quote: "Después de 90 años construyendo en Mallorca, Sampol apuesta por un futuro donde la energía sea limpia y cercana.",
    name: "Gabriel Sampol",
    role: "Promotor",
    location: "Grupo Sampol",
    hasVideo: true,
  },
  {
    quote: "Lo que me convenció fue ver que el proyecto ya existe, que no es una promesa. Son paneles reales generando energía real.",
    name: "Joan Miralles",
    role: "Inversor desde 2023",
    location: "Inca, Mallorca",
    hasVideo: false,
  },
];

const TestimonialSection = () => {
  return (
    <section id="voces" className="section-padding bg-card">
      <div className="container-wide">
        {/* Chapter intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption text-primary mb-2 block">Capítulo 4</span>
          <h2 className="text-editorial-lg text-foreground mb-4">
            Lo que dicen quienes ya forman parte
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            No hay mejor forma de entender un proyecto que a través de las palabras 
            de quienes ya confiaron en él.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background rounded-2xl p-8 relative group"
            >
              <Quote size={32} className="text-terracotta-light/30 absolute top-6 right-6" />
              
              {testimonial.hasVideo && (
                <div className="absolute top-6 left-6 flex items-center gap-2 text-primary text-xs font-medium">
                  <Play size={12} fill="currentColor" />
                  Ver vídeo
                </div>
              )}
              
              <blockquote className="font-serif text-lg text-foreground mb-6 leading-relaxed italic mt-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-6">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-primary mt-1">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative continuation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada mes, más personas como tú deciden formar parte. 
            La comunidad de inversores de Son Ripollet sigue creciendo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
