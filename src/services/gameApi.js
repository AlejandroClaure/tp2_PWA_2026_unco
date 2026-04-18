const BASE_URL = "https://69e2e9773327837a1552b35a.mockapi.io/api/v1/juegos";

export const getGames = async (page = 1, search = "") => {
  const res = await fetch(
    `${BASE_URL}?page=${page}&limit=5&search=${search}`
  );
  return res.json();
};

export const getGameById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};