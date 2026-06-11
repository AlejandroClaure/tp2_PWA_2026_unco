import { useState, useEffect } from "react";
import { getFavoriteGames } from "../../services/gameApi";
import { GameList } from "../../components/GameList/GameList";

export default function Favorites() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleToggleFavorite = () => {
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);

    getFavoriteGames()
      .then((data) => setGames(data))
      .finally(() => setLoading(false));
  }, [refresh]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {loading ? (
        <p className="text-[#8f98a0] text-center py-12">
          Cargando favoritos...
        </p>
      ) : games.length === 0 ? (
        <p className="text-center text-gray-400">
          No tenés juegos en favoritos
        </p>
      ) : (
        <GameList
          games={games}
          loading={loading}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </div>
  );
}