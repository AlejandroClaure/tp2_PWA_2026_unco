import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getGames } from "../../services/gameApi";
import { GameList } from "../../components/GameList/GameList";

function Home() {
  const { search } = useOutletContext();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getGames(1, search)
      .then(setGames)
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {loading ? (
        <p className="text-[#8f98a0] text-center py-12">Cargando juegos...</p>
      ) : (
        <GameList games={games} />
      )}
    </div>
  );
}

export { Home };
