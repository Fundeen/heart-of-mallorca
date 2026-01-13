import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// HubSpot Configuration - Replace with your actual values
const HUBSPOT_PORTAL_ID = "YOUR_PORTAL_ID"; // e.g., "8765432"
const HUBSPOT_FORM_GUID = "YOUR_FORM_GUID"; // e.g., "7654abcd-123a-231b-555c-12345678abc"

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitToHubSpot = async () => {
    const submitURL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;
    
    const response = await fetch(submitURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        portalId: HUBSPOT_PORTAL_ID,
        formGuid: HUBSPOT_FORM_GUID,
        fields: [
          { name: "firstname", value: formData.name },
          { name: "email", value: formData.email },
          { name: "phone", value: formData.phone },
          { name: "message", value: formData.message },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el formulario");
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToHubSpot();
      setIsSubmitted(true);
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
    } catch (error) {
      console.error("HubSpot submission error:", error);
      toast({
        title: "Error al enviar",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center py-16"
          >
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} className="text-primary" />
            </div>
            <h3 className="text-editorial-lg text-foreground mb-4">
              ¡Gracias por tu interés!
            </h3>
            <p className="text-body text-foreground/70">
              Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo 
              en las próximas 24-48 horas para resolver todas tus dudas sobre Son Ripollet.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caption text-primary mb-4 block">
            Quiero saber más
          </span>
          <h2 className="text-editorial-lg text-foreground mb-4">
            ¿Tienes dudas? Te las resolvemos
          </h2>
          <p className="text-body-lg text-foreground/70 max-w-xl mx-auto">
            Déjanos tus datos y un miembro del equipo de Fundeen se pondrá en contacto 
            contigo para explicarte todos los detalles del proyecto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground/80">
                  <User size={16} />
                  Nombre completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-foreground/80">
                  <Mail size={16} />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-foreground/80">
                <Phone size={16} />
                Teléfono (opcional)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 600 000 000"
                className="bg-background border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 text-foreground/80">
                <MessageSquare size={16} />
                ¿En qué podemos ayudarte?
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos qué te gustaría saber sobre el proyecto Son Ripollet..."
                rows={4}
                className="bg-background border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-lg font-medium rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⏳
                  </motion.span>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Quiero que me contactéis
                  <Send size={20} />
                </span>
              )}
            </Button>

            <p className="text-xs text-center text-foreground/50">
              Al enviar este formulario, aceptas nuestra{" "}
              <a href="#" className="underline hover:text-primary">política de privacidad</a>.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
