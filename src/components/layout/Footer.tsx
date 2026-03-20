import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="font-neulis text-2xl font-bold text-neutral mb-6 inline-block">
              Dra. Dina Reyes
            </span>
            <p className="text-neutral/80 text-sm leading-relaxed mb-6">
              Recupera tu libertad y bienestar con empatía y atención no
              invasiva, para ti y para tu familia.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-neutral">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-neutral/80 text-sm">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-white transition-colors"
                >
                  Conóceme
                </a>
              </li>
              <li>
                <a
                  href="#online"
                  className="hover:text-white transition-colors"
                >
                  Terapia Online
                </a>
              </li>
              <li>
                <a
                  href="#recursos"
                  className="hover:text-white transition-colors"
                >
                  Recursos Gratuitos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-neutral">Servicios</h4>
            <ul className="space-y-3 text-neutral/80 text-sm">
              <li>Rehabilitación Física</li>
              <li>Tratamientos Neurológicos</li>
              <li>Terapia de Lenguaje (Logopedia)</li>
              <li>Estimulación Temprana</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-neutral">Contacto</h4>
            <ul className="space-y-3 text-neutral/80 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>
                  Clínica de Rehabilitación Central, Estelí, Nicaragua
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+505 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>contacto@dradinareyes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center text-sm text-neutral/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Dra. Dina Reyes. Todos los
            derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
