import { Link } from "react-router-dom";
import { Routes } from "../../const/routes";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";


function Footer() {

  return (
    <footer className="bg-[#171a21] border-t border-[#2a475e] mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 text-[#8f98a0] text-sm">
        
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-center">
          
          {/* LOGO + DESC */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h2 className="text-[#66c0f4] font-semibold text-lg">
              EsteamApp
            </h2>

            <p>
              Plataforma de exploración de videojuegos. Descubrí, explorá y guardá tus favoritos.
            </p>

            
          </div>

          {/* NAVEGACIÓN */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h3 className="text-[#c7d5e0] mb-3 font-medium">
              Navegación
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to={Routes.home}
                  className="hover:text-[#66c0f4]"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to={Routes.favorites}
                  className="hover:text-[#66c0f4]"
                >
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h3 className="text-[#c7d5e0] mb-3 font-medium">
              Contacto
            </h3>

            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:soporte@esteamapp.com"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-[#66c0f4]"
                >
                  <FaEnvelope />
                  soporte@esteamapp.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+5492991234567"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-[#66c0f4]"
                >
                  <FaPhone />
                  +54 299 123 4567
                </a>
              </li>
            </ul>
          </div>

          {/* REDES */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h3 className="text-[#c7d5e0] mb-3 font-medium">
              Redes
            </h3>

            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/esteamapp_fake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-[#66c0f4]"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/esteamapp_fake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-[#66c0f4]"
                >
                  <FaTwitter />
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/esteamapp_fake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-[#66c0f4]"
                >
                  <FaGithub />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#2a475e] my-6" />

        {/* BOTTOM */}
        <div className="text-center text-xs">
          © 2026 EsteamApp — Todos los derechos reservados
        </div>
      </div>

      
    </footer>
  );
}

export { Footer };