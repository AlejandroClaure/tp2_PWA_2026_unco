/**
 * =========================================================
CONFIGURACIÓN DE API EN .env

LOCAL:
VITE_API_URL=http://localhost:3000/api

PRODUCCIÓN (Vercel):
VITE_API_URL=https:/laurldelautaro.vercel.app/api

La URL se configura mediante variables de entorno. (si no está el archivo .env, crearlo en la raiz y agregar VITE_API_URL=http://localhost:3000/api)
NO modificar BASE_URL manualmente.
=========================================================
 */

const BASE_URL = `${import.meta.env.VITE_API_URL}/games`;

export const getGames = async (
  page = 1,
  search = ""
) => {
  const params = new URLSearchParams({
    page,
    limit: 5,
  });

  if (search.trim()) {
    params.append("search", search);
  }

  const res = await fetch(
    `${BASE_URL}?${params.toString()}`
  );

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