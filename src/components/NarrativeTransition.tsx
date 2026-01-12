import { motion } from "framer-motion";

interface NarrativeTransitionProps {
  text: string;
  subtext?: string;
  className?: string;
}

const NarrativeTransition = ({ text, subtext, className = "" }: NarrativeTransitionProps) => {
  return (
    <div className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative line */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-gradient-to-b from-transparent to-border" />
          
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic max-w-3xl mx-auto text-balance">
            "{text}"
          </p>
          
          {subtext && (
            <p className="text-muted-foreground mt-6 text-lg">
              {subtext}
            </p>
          )}
          
          {/* Decorative line */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-border to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default NarrativeTransition;
