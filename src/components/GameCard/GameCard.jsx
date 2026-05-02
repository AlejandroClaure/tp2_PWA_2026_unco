import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Routes } from "../../const/routes";

const getFavIds = () => JSON.parse(localStorage.getItem("favoritos")) || [];

function GameCard({ game }) {
  const navigate = useNavigate();

  const gameId = Number(game.id);

  const [isFav, setIsFav] = useState(() => getFavIds().includes(gameId));

  const handleFav = (e) => {
    e.stopPropagation();
    const favs = getFavIds();
    const updated = favs.includes(gameId)
      ? favs.filter((f) => f !== gameId)
      : [...favs, gameId];
    localStorage.setItem("favoritos", JSON.stringify(updated));
    setIsFav(!isFav);
  };

  return (
    <article
      onClick={() => navigate(`/items/${game.id}`)}
      className="bg-[#2a475e] rounded-lg overflow-hidden cursor-pointer hover:scale-105 hover:brightness-110 transition-all duration-200 flex flex-col"
    >
      <img
        src={game.imagen}
        alt={game.titulo}
        className="w-full aspect-video object-cover"
      />

      <div className="flex flex-col flex-1 p-3 gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#66c0f4] bg-[#1b2838] px-2 py-0.5 rounded">
            {game.genero}
          </span>
          <span className="text-xs text-[#8f98a0]">{game.anio}</span>
        </div>

        <h2 className="text-[#c7d5e0] font-semibold text-sm leading-tight">
          {game.titulo}
        </h2>

        <div className="mt-auto flex items-center justify-between pt-2 border-t border-[#1b2838]">
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            <FaStar size={12} />
            <span className="text-[#c7d5e0]">{game.rating}</span>
          </div>

          <span className="text-[#66c0f4] font-semibold text-sm">
            ${game.precio}
          </span>

          <button
            onClick={handleFav}
            className="text-red-400 hover:text-red-300 transition-colors"
            aria-label={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {isFav ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
          </button>
        </div>
      </div>
    </article>
  );
}

export { GameCard };
