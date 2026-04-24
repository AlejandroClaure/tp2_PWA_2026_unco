import { GameCard } from "../GameCard/GameCard";

function GameList({ games }) {
  if (!games.length) {
    return (
      <p className="text-[#8f98a0] text-center py-12">
        No se encontraron juegos.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export { GameList };
