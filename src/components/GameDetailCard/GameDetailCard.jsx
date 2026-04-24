import { useEffect, useState } from "react";

function GameDetailCard({ id }) {
  const [game, setGame] = useState(null);

  const obtenerDatos = async () => {
    try {
      const res = await fetch(
        `https://69e2e9773327837a1552b35a.mockapi.io/api/v1/juegos/${id}`
      );

      if (!res.ok) throw new Error("Error al traer el juego");

      const data = await res.json();
      setGame(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, [id]);

  if (!game) return <p className="text-white">Cargando...</p>;

  return (
    <div className="min-h-screen bg-[#0f172a] flex justify-center items-start py-10">
      <div className="w-[700px] bg-[#111827] text-white rounded-xl shadow-lg border border-gray-700">

        {/* Imagen */}
        <div className="p-4">
          <img
            src={game.imagen}
            alt={game.titulo}
            className="w-full h-[353px] object-cover rounded-md border border-gray-600"
          />
        </div>

        {/* Contenido */}
        <div className="px-6 pb-6">

          {/* Título */}
          <h1 className="text-3xl font-semibold mb-3">
            {game.titulo}
          </h1>

          {/* Precio + rating + plataformas */}
          <div className="flex items-center gap-4 text-gray-300 mb-4">
            <span className="text-xl font-semibold text-white">
              ${game.precio}
            </span>

            <span>⭐ {game.rating}</span>

            <span className="text-sm">
              {game.plataformas}
            </span>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-700 px-2 py-1 rounded text-sm">
              {game.anio}
            </span>
            <span className="bg-green-700 px-2 py-1 rounded text-sm">
              {game.genero}
            </span>
          </div>

          {/* Descripción */}
          <p className="text-gray-300 mb-4 border-t border-gray-700 pt-4">
            {game.descripcion}
          </p>

          {/* Developer */}
          <p className="text-gray-400 text-sm border-t border-gray-700 pt-4">
            <span className="text-white font-medium">Developer:</span>{" "}
            {game.developer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameDetailCard;