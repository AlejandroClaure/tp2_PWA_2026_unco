import { GameCard } from "../GameCard/GameCard";
import { useTranslation } from "react-i18next";

function GameList({ games, loading, onToggleFavorite }) {
  const { t } = useTranslation();

  return (
    <>
      {!games.length && !loading ? (
        <p className="text-[#8f98a0] text-center py-12">
          {t("gamesNotFound")}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}

      {loading && (
        <p className="text-[#8f98a0] text-center py-6">
          {t("loadingGames")}
        </p>
      )}
    </>
  );
}

export { GameList };