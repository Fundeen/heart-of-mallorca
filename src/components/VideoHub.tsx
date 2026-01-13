import { motion } from "framer-motion";
import { Play } from "lucide-react";
import solarDetail from "@/assets/solar-panels-detail.jpg";

interface VideoCardProps {
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  description: string;
  index: number;
}

const VideoCard = ({ title, subtitle, duration, thumbnail, description, index }: VideoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    className="group"
  >
    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-12 items-center`}>
      {/* Video thumbnail */}
      <div className="relative w-full lg:w-3/5 aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-primary-foreground/90 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-foreground shadow-xl">
            <Play size={28} className="text-primary ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-foreground/80 backdrop-blur-sm rounded-full">
          <span className="text-sm text-primary-foreground">{duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-2/5 text-center lg:text-left">
        <span className="text-caption text-primary mb-2 block">
          {subtitle}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
          {title}
        </h3>
        <p className="text-body text-muted-foreground mb-6">
          {description}
        </p>
        <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300">
          <Play size={18} fill="currentColor" />
          Ver testimonio
        </button>
      </div>
    </div>
  </motion.div>
);

const VideoHub = () => {
  const videos = [
    {
      title: "La visión de Nacho",
      subtitle: "CEO Fundeen",
      duration: "4:15 min",
      thumbnail: solarDetail,
      description: "Nacho comparte su visión sobre cómo la inversión puede ser una herramienta de transformación positiva para el territorio y las comunidades locales.",
    },
    {
      title: "Por qué apostamos por Son Ripollet",
      subtitle: "Promotor · Sampol",
      duration: "3:45 min",
      thumbnail: solarDetail,
      description: "El equipo de Sampol explica qué hace especial a este proyecto y cómo se integra en el tejido energético de la isla.",
    },
    {
      title: "Mi primera inversión en renovables",
      subtitle: "Inversor",
      duration: "2:50 min",
      thumbnail: solarDetail,
      description: "Un inversor real comparte su experiencia al dar el paso hacia la inversión en energía solar, más cerca de lo que imaginaba.",
    },
    {
      title: "Invertir cerca de casa",
      subtitle: "Inversor",
      duration: "3:10 min",
      thumbnail: solarDetail,
      description: "Descubre por qué invertir en proyectos locales conecta de manera especial con quienes quieren ver el impacto de sus decisiones.",
    },
  ];

  return (
    <section id="testimonios-video" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-caption text-primary mb-4 block">
            Conoce el proyecto
          </span>
          <h2 className="text-editorial-lg text-foreground mb-4">
            Historias que importan
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Detrás de cada proyecto hay personas. Descubre las voces de quienes 
            hacen posible Son Ripollet.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              index={index}
              {...video}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHub;
