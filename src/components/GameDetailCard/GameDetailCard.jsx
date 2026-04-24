import styles from "./GameDetailCard.module.css";
import { useEffect, useState} from "react";

function GameDetailCard ({ id }) {
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

  if (!game) return <p>Cargando...</p>;
return(
    <div class="text-white">
        <div class= "border p-6"><img src={game.imagen}/></div>
        <div class= "flex text-left p-6 text-3xl">{game.titulo}</div>
        <div>{game.precio} {game.rating} {game.plataformas}</div>
        <div class="flex"><div class= "text-left bg-blue-800 rounded-xs mr-2">{game.anio}</div> <div class="text-left bg-lime-900 rounded-xs">{game.genero}</div></div>   
        <div class= "text-left">{game.descripcion}</div>     
        <div class= "text-left">{game.developer}</div> 
        <div>{game.isFavorite? "fav" : "no fav"}</div>
    </div>
);
}
export default GameDetailCard;