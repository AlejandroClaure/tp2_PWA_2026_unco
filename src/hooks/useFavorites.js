export const useFavorites = () => {
  const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };

  const toggleFavorite = (game) => {
    const favs = getFavorites();
    const exists = favs.find((g) => g.id === game.id);

    let updated;
    if (exists) {
      updated = favs.filter((g) => g.id !== game.id);
    } else {
      updated = [...favs, game];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
  };

  return { getFavorites, toggleFavorite };
};