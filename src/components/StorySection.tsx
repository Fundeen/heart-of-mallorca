import { motion } from "framer-motion";
import mallorcaImage from "@/assets/mallorca-landscape.jpg";
import LeadForm from "./LeadForm";

const StorySection = () => {
  return (
    <section id="historia" className="section-padding bg-background">
      <div className="container-wide">
        {/* Chapter intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption text-primary mb-2 block">Capítulo 1</span>
          <h2 className="text-editorial-lg text-foreground">El origen</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h3 className="font-serif text-3xl text-foreground mb-6 text-balance">
              Un proyecto que nace del territorio
            </h3>
            <div className="space-y-6 text-body text-muted-foreground">
              <p>
                Son Ripollet no es solo un nombre. Es un lugar real en Mallorca, 
                donde la tierra y el sol se encuentran para generar energía limpia.
              </p>
              <p>
                Promovido por <strong className="text-foreground">Sampol</strong>, un grupo mallorquín con más de 90 años de 
                historia, este proyecto representa algo más que una inversión: 
                es una forma de cuidar lo que siempre ha sido nuestro.
              </p>
              <p>
                Aquí no hablamos de promesas de futuro. Hablamos de paneles que ya 
                generan energía, de familias que ya la consumen, de un impacto que 
                ya se mide.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-terracotta-light/20 to-sage/20 rounded-3xl blur-2xl" />
              <img
                src={mallorcaImage}
                alt="Paisaje de Mallorca al atardecer"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Mallorca</span> — 
                  Donde la tradición se encuentra con la innovación
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story continuation with form */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <blockquote className="text-foreground font-medium italic font-serif text-2xl lg:text-3xl leading-relaxed border-l-4 border-primary pl-6 mb-8">
              "Invertir aquí es formar parte de un cambio que empieza en casa."
            </blockquote>
            <p className="text-muted-foreground text-lg">
              Creemos que las mejores inversiones no son solo las que dan rentabilidad, 
              sino las que tienen sentido. Las que puedes explicar, las que puedes visitar, 
              las que puedes sentir como tuyas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <LeadForm
              variant="full"
              title="¿Te identificas?"
              subtitle="Déjanos tu email y te contamos más sobre cómo puedes participar."
              ctaText="Recibir información"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
