import { useEffect, useState } from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getGameById, getFavoriteGames, addFavoriteGame, removeFavoriteGame } from "../../services/gameApi";

function GameDetailCard({ id }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [game, setGame] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!id) return;

    getGameById(id)
      .then(setGame)
      .catch(() => navigate("/notfound"));

    getFavoriteGames()
      .then((favs) => setIsFavorite(favs.some((g) => g.id === id)))
      .catch(() => {});
  }, [id]);

  const handleFav = async () => {
    if (isFavorite) {
      await removeFavoriteGame(id);
      setIsFavorite(false);
    } else {
      await addFavoriteGame(id);
      setIsFavorite(true);
    }
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <p className="text-gray-300 text-xl">{t("loading")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex justify-center items-start py-10">
      <div className="w-[700px] bg-[#111827] text-white rounded-xl shadow-lg border border-gray-700">
        <div className="p-4">
          <img
            src={game.imagen}
            alt={game.titulo}
            className="w-full h-[353px] object-cover rounded-md border border-gray-600"
          />
        </div>

        <div className="px-6 pb-6">
          <h1 className="text-3xl font-semibold mb-3">{game.titulo}</h1>

          <div className="flex items-center gap-4 text-gray-300 mb-4">
            <span className="text-xl font-semibold text-white">
              ${game.precio}
            </span>
            <span>⭐ {game.rating}</span>
            <span className="text-sm">{game.plataformas}</span>
          </div>

          <div className="flex gap-2 mb-4">
            <span className="bg-blue-700 px-2 py-1 rounded text-sm">
              {game.anio}
            </span>
            <span className="bg-green-700 px-2 py-1 rounded text-sm">
              {game.genero}
            </span>
          </div>

          <p className="text-gray-300 mb-4 border-t border-gray-700 pt-4">
            {game.descripcion}
          </p>

          <p className="text-gray-400 text-sm border-t border-gray-700 pt-4">
            <span className="text-white font-medium">
              {t("developer")}:
            </span>{" "}
            {game.developer}
          </p>

          <div className="mt-6 flex justify-center">
            <FavoriteButton
              onFav={handleFav}
              esFavorito={isFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetailCard;