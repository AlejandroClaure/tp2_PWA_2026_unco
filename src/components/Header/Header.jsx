import { Link } from "react-router-dom";
import { Routes } from "../../const/routes";
import { SearchBar } from "../SearchBar/SearchBar";
import { useTranslation } from "react-i18next";

function Header({ onSearch }) {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className="bg-linear-to-b from-[#1b2838] to-[#171a21] border-b border-[#2a475e]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <Link
          to={Routes.home}
          className="flex items-center gap-2 text-[#66c0f4] font-semibold text-lg"
        >
          <span className="text-xl">⚙️</span>
          EsteamApp
        </Link>

        {/* SEARCH */}
        <div className="flex-1 max-w-md mx-6">
          <div className="bg-[#2a475e] rounded-md px-3 py-1">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>

        {/* DERECHA */}
        <div className="flex items-center gap-4 text-sm text-[#c7d5e0]">
          
          {/* FAVORITOS */}
          <Link
            to={Routes.favorites}
            className="hover:text-[#66c0f4] transition flex items-center gap-1"
          >
            Favoritos <span className="text-yellow-400">★</span>
          </Link>

          {/* LANG */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => changeLang("es")}
              className={`hover:text-white ${
                i18n.language === "es" ? "text-white" : "opacity-60"
              }`}
            >
              ES
            </button>

            <span className="opacity-50">|</span>

            <button
              onClick={() => changeLang("en")}
              className={`hover:text-white ${
                i18n.language === "en" ? "text-white" : "opacity-60"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };