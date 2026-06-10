console.log(import.meta.env.VITE_API_URL);
const BASE_URL = `${import.meta.env.VITE_API_URL}/games`;

export const getGames = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Error obteniendo juegos");
  }

  return res.json();
};

export const getGameById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Juego no encontrado");
  }

  return res.json();
};