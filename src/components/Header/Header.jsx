import { Link } from "react-router-dom";
import { Routes } from "../../const/routes";
import { SearchBar } from "../SearchBar/SearchBar";

function Header({ onSearch }) {
  return (
    <header className="bg-[#171a21] border-b border-[#2a475e] p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to={Routes.home} className="text-white font-bold">
        LOGO
      </Link>

      {/* Navegación */}
      <nav className="flex gap-4 items-center">
        <Link to={Routes.favorites} className="text-white">
          Favorites
        </Link>

        <SearchBar onSearch={onSearch} />
      </nav>
    </header>
  );
}

export { Header };