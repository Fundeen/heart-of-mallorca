import { motion } from "framer-motion";
import { Play } from "lucide-react";
import solarDetail from "@/assets/solar-panels-detail.jpg";

interface VideoCardProps {
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  featured?: boolean;
}

const VideoCard = ({ title, subtitle, duration, thumbnail, featured = false }: VideoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
      featured ? "col-span-full lg:col-span-2 aspect-video" : "aspect-[4/3]"
    }`}
  >
    <img
      src={thumbnail}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
    
    {/* Play button */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-primary-foreground/90 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-foreground shadow-xl">
        <Play size={28} className="text-primary ml-1" fill="currentColor" />
      </div>
    </div>
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <span className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-2 block">
        {subtitle}
      </span>
      <h3 className={`font-serif text-primary-foreground ${featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
        {title}
      </h3>
      <span className="text-sm text-primary-foreground/60 mt-2 block">
        {duration}
      </span>
    </div>
  </motion.div>
);

const VideoHub = () => {
  const videos = [
    {
      title: "Cuidar lo que es nuestro",
      subtitle: "Spot principal",
      duration: "2:30 min",
      thumbnail: solarDetail,
      featured: true,
    },
    {
      title: "La visión de Nacho",
      subtitle: "CEO Fundeen",
      duration: "4:15 min",
      thumbnail: solarDetail,
    },
    {
      title: "Por qué Sampol",
      subtitle: "Promotor",
      duration: "3:45 min",
      thumbnail: solarDetail,
    },
    {
      title: "Mi primera inversión",
      subtitle: "Inversor",
      duration: "2:50 min",
      thumbnail: solarDetail,
    },
    {
      title: "Invertir cerca de casa",
      subtitle: "Inversor",
      duration: "3:10 min",
      thumbnail: solarDetail,
    },
  ];

  return (
    <section id="proyecto" className="section-padding bg-card">
      <div className="container-wide">
        {/* Chapter intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-caption text-primary mb-2 block">Capítulo 2</span>
          <h2 className="text-editorial-lg text-foreground mb-4">
            Las voces del proyecto
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Detrás de cada proyecto hay personas. Conoce a quienes hacen posible 
            Son Ripollet y escucha sus historias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              {...video}
            />
          ))}
        </div>

        {/* Narrative text after videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground">
            Cada historia que escuches es una razón más para confiar. 
            No son actores, son personas reales que han decidido invertir en su tierra.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHub;
