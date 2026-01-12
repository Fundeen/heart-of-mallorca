import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle, Mail, User, Phone } from "lucide-react";

interface LeadFormProps {
  variant?: "hero" | "inline" | "full" | "event";
  title?: string;
  subtitle?: string;
  ctaText?: string;
  showPhone?: boolean;
  className?: string;
}

const LeadForm = ({ 
  variant = "inline", 
  title,
  subtitle,
  ctaText = "Quiero saber más",
  showPhone = false,
  className = ""
}: LeadFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-3 p-6 bg-sage/20 rounded-2xl text-center justify-center ${className}`}
      >
        <CheckCircle className="text-sage" size={24} />
        <p className="text-foreground font-medium">¡Gracias! Te contactaremos pronto.</p>
      </motion.div>
    );
  }

  // Compact inline form (for sections)
  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100 whitespace-nowrap flex items-center justify-center gap-2"
        >
          {loading ? "Enviando..." : ctaText}
          {!loading && <ArrowRight size={18} />}
        </button>
      </form>
    );
  }

  // Hero variant (dark background)
  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/50" size={18} />
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-12 pr-4 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 focus:border-primary-foreground/40 transition-all backdrop-blur-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100 whitespace-nowrap flex items-center justify-center gap-2"
        >
          {loading ? "Enviando..." : ctaText}
          {!loading && <ArrowRight size={18} />}
        </button>
      </form>
    );
  }

  // Full form with name and optional phone
  if (variant === "full" || variant === "event") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-card rounded-2xl p-8 border border-border ${className}`}
      >
        {title && (
          <h3 className="font-serif text-2xl text-foreground mb-2">{title}</h3>
        )}
        {subtitle && (
          <p className="text-muted-foreground mb-6">{subtitle}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          {(showPhone || variant === "event") && (
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="tel"
                placeholder="Teléfono (opcional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {loading ? "Enviando..." : ctaText}
            {!loading && <ArrowRight size={18} />}
          </button>
          <p className="text-xs text-center text-muted-foreground">
            Al enviar, aceptas recibir comunicaciones sobre Son Ripollet.
          </p>
        </form>
      </motion.div>
    );
  }

  return null;
};

export default LeadForm;
