import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Invertir en Son Ripollet es mucho más que un retorno financiero. Es saber que estoy contribuyendo a algo que beneficia a mi comunidad.",
    name: "María García",
    role: "Inversora desde 2024",
    location: "Palma de Mallorca",
  },
  {
    quote: "Después de 90 años construyendo en Mallorca, Sampol apuesta por un futuro donde la energía sea limpia y cercana.",
    name: "Gabriel Sampol",
    role: "Promotor",
    location: "Grupo Sampol",
  },
  {
    quote: "Lo que me convenció fue ver que el proyecto ya existe, que no es una promesa. Son paneles reales generando energía real.",
    name: "Joan Miralles",
    role: "Inversor desde 2023",
    location: "Inca, Mallorca",
  },
];

const TestimonialSection = () => {
  return (
    <section id="voces" className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption text-primary mb-4 block">
            Voces reales
          </span>
          <h2 className="text-editorial-lg text-foreground mb-4">
            Lo que dicen quienes ya forman parte
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background rounded-2xl p-8 relative"
            >
              <Quote size={32} className="text-terracotta-light/30 absolute top-6 right-6" />
              <blockquote className="font-serif text-lg text-foreground mb-6 leading-relaxed italic">
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
      </div>
    </section>
  );
};

export default TestimonialSection;
