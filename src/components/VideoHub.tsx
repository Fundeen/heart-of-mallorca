import { motion } from "framer-motion";
import { Play, User } from "lucide-react";
import solarDetail from "@/assets/solar-panels-detail.jpg";
import mallorcaLandscape from "@/assets/mallorca-landscape.jpg";

interface VideoCardProps {
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  thumbnail: string;
  description: string;
  index: number;
  featured?: boolean;
  compact?: boolean;
}

const VideoCard = ({ title, subtitle, role, duration, thumbnail, description, index, featured, compact }: VideoCardProps) => {
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="group"
      >
        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}>
          {/* Video thumbnail */}
          <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-primary rounded-full transition-all duration-300 group-hover:scale-110 shadow-lg">
                <Play size={24} className="text-primary-foreground ml-0.5" fill="currentColor" />
              </div>
            </div>

            {/* Duration */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-foreground/70 backdrop-blur-sm rounded-full">
              <span className="text-xs text-primary-foreground font-medium">{duration}</span>
            </div>

            {/* Role badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary/90 rounded-full flex items-center gap-1.5">
              <User size={12} className="text-primary-foreground" />
              <span className="text-xs uppercase tracking-wider text-primary-foreground font-medium">{role}</span>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-caption text-primary mb-2 block">
              {subtitle}
            </span>
            <h4 className="font-serif text-xl md:text-2xl text-foreground mb-3">
              {title}
            </h4>
            <p className="text-body text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
        {/* Video thumbnail */}
        <div className={`relative w-full ${featured ? 'lg:w-2/3' : 'lg:w-3/5'} aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-xl`}>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`${featured ? 'w-20 h-20 md:w-24 md:h-24' : 'w-16 h-16 md:w-20 md:h-20'} flex items-center justify-center bg-primary rounded-full transition-all duration-300 group-hover:scale-110 shadow-xl`}>
              <Play size={featured ? 32 : 28} className="text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-foreground/80 backdrop-blur-sm rounded-full">
            <span className="text-sm text-primary-foreground font-medium">{duration}</span>
          </div>

          {/* Role badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full flex items-center gap-2">
            <User size={14} className="text-primary-foreground" />
            <span className="text-xs uppercase tracking-wider text-primary-foreground font-medium">{role}</span>
          </div>
        </div>

        {/* Content */}
        <div className={`w-full ${featured ? 'lg:w-1/3' : 'lg:w-2/5'} text-center lg:text-left`}>
          <span className="text-caption text-primary mb-2 block">
            {subtitle}
          </span>
          <h3 className={`font-serif ${featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} text-foreground mb-4`}>
            {title}
          </h3>
          <p className="text-body text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <button className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary/20 transition-all duration-300">
            <Play size={18} fill="currentColor" />
            Ver historia
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const VideoHub = () => {
  const videos = [
    {
      title: "Por qué creamos Fundeen",
      subtitle: "Nacho Pinedo · Fundador",
      role: "Fundeen",
      duration: "4:15 min",
      thumbnail: solarDetail,
      description: "Nacho comparte la visión detrás de Fundeen: democratizar la inversión en renovables y conectar a las personas con proyectos que generan impacto real en sus territorios.",
      featured: true,
    },
    {
      title: "Son Ripollet: más que un proyecto",
      subtitle: "Marta García · Directora de Proyecto",
      role: "Sampol",
      duration: "3:45 min",
      thumbnail: mallorcaLandscape,
      description: "Marta, desde Sampol, explica por qué Son Ripollet representa un modelo diferente de desarrollo energético: integrado en el paisaje, cercano a la comunidad y con vocación de permanencia.",
      featured: true,
    },
    {
      title: "Mi primer proyecto de inversión local",
      subtitle: "Pere Torrens · Inversor en Mallorca",
      role: "Inversor",
      duration: "2:50 min",
      thumbnail: solarDetail,
      description: "Pere cuenta cómo decidió dar el paso hacia la inversión en renovables cerca de su pueblo, y qué significa para él ver las placas cada vez que pasa por la carretera.",
    },
    {
      title: "Invertir donde puedo verlo",
      subtitle: "Maria Antònia Vidal · Inversora",
      role: "Inversora",
      duration: "3:10 min",
      thumbnail: mallorcaLandscape,
      description: "Maria Antònia eligió proyectos locales porque quería sentir que su dinero trabajaba en algo tangible. Hoy visita las plantas con su familia.",
    },
    {
      title: "El futuro está aquí",
      subtitle: "Tomeu Riera · Inversor desde 2021",
      role: "Inversor",
      duration: "2:40 min",
      thumbnail: solarDetail,
      description: "Tomeu lleva tres años invirtiendo en proyectos de Fundeen. Explica cómo ha cambiado su forma de entender el ahorro y la inversión.",
    },
    {
      title: "Una decisión en familia",
      subtitle: "Catalina Mas · Inversora",
      role: "Inversora",
      duration: "3:25 min",
      thumbnail: mallorcaLandscape,
      description: "Catalina decidió invertir junto a sus hijos como una forma de enseñarles que el dinero puede tener un propósito. Hoy lo consideran un proyecto familiar.",
    },
  ];

  const mainVideos = videos.slice(0, 2);
  const investorVideos = videos.slice(2);

  return (
    <section id="voces" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-caption text-primary mb-4 block">
            Las voces del proyecto
          </span>
          <h2 className="text-editorial-lg text-foreground mb-6">
            Historias que importan
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Detrás de cada proyecto hay personas. Conoce a quienes hacen posible 
            Son Ripollet y a inversores que ya forman parte de esta comunidad.
          </p>
        </motion.div>

        {/* Main videos - Nacho & Marta */}
        <div className="space-y-24 md:space-y-32 mb-24">
          {mainVideos.map((video, index) => (
            <VideoCard
              key={index}
              index={index}
              {...video}
            />
          ))}
        </div>

        {/* Investor videos section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caption text-primary mb-3 block">
            Testimonios reales
          </span>
          <h3 className="text-editorial-md text-foreground mb-4">
            Inversores que ya forman parte
          </h3>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            Personas como tú que decidieron dar el paso en otros proyectos de inversión local.
          </p>
        </motion.div>

        {/* Investor videos - alternating layout */}
        <div className="space-y-16">
          {investorVideos.map((video, index) => (
            <VideoCard
              key={index + 2}
              index={index}
              {...video}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHub;
