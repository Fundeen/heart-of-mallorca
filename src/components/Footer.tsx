const Footer = () => {
  return (
    <footer className="bg-coral-dark text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4 text-white">fundeen</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Conectamos personas con proyectos de energía renovable. 
              Invertir con impacto, cerca de ti.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-white/50">
              Proyecto
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#historia" className="hover:text-white transition-colors">La historia</a></li>
              <li><a href="#proyecto" className="hover:text-white transition-colors">Vídeos</a></li>
              <li><a href="#voces" className="hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#evento" className="hover:text-white transition-colors">Evento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-white/50">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Aviso legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CNMV</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © 2026 Fundeen. Plataforma de financiación participativa autorizada por la CNMV.
          </p>
          <p className="text-xs text-white/50">
            Invertir implica riesgos. Lee la documentación antes de invertir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
