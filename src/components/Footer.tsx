import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4">fundeen</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Conectamos personas con proyectos de energía renovable. 
              Invertir con impacto, cerca de ti.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-primary-foreground/50">
              Proyecto
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#historia" className="hover:text-primary-foreground transition-colors">La historia</a></li>
              <li><a href="#proyecto" className="hover:text-primary-foreground transition-colors">Vídeos</a></li>
              <li><a href="#voces" className="hover:text-primary-foreground transition-colors">Testimonios</a></li>
              <li><a href="#evento" className="hover:text-primary-foreground transition-colors">Evento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-primary-foreground/50">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Aviso legal</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">CNMV</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Fundeen. Plataforma de financiación participativa autorizada por la CNMV.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Invertir implica riesgos. Lee la documentación antes de invertir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
