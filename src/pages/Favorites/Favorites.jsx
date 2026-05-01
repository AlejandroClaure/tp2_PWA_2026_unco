import { useState, useEffect } from "react";
import { getGameById } from "../../services/gameApi";
import { GameList } from "../../components/GameList/GameList";

export default function Favorites() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
      setGames([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    Promise.all(favoritos.map((id) => getGameById(id)))
      .then((data) => setGames(data))
      .finally(() => setLoading(false));
  }, []);

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
        <GameList games={games} />
      )}
    </div>
  );
}