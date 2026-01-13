import { motion } from "framer-motion";
import mallorcaImage from "@/assets/mallorca-landscape.jpg";

const StorySection = () => {
  return (
    <section id="historia" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-caption text-primary mb-4 block">
              La historia
            </span>
            <h2 className="text-editorial-lg text-foreground mb-6 text-balance">
              Un proyecto que nace del territorio
            </h2>
            <div className="space-y-6 text-body text-muted-foreground">
              <p>
                Son Ripollet no es solo un nombre. Es un lugar real en Mallorca, 
                donde la tierra y el sol se encuentran para generar energía limpia.
              </p>
              <p>
                Promovido por Sampol, un grupo mallorquín con más de 90 años de 
                historia, este proyecto representa algo más que una inversión: 
                es una forma de cuidar lo que siempre ha sido nuestro.
              </p>
              <p className="text-foreground font-medium italic font-serif text-lg">
                "Invertir aquí es formar parte de un cambio que empieza en casa."
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
              <div className="absolute -inset-4 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-2xl" />
              <img
                src={mallorcaImage}
                alt="Paisaje de Mallorca al atardecer"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-coral-dark/70">
                  <span className="font-medium text-coral-dark">Mallorca</span> — 
                  Donde la tradición se encuentra con la innovación
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
