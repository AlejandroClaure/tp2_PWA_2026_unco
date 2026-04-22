import styles from "./GameDetailCard.module.css";

function GameDetailCard ({
id,
titulo = "Titulo",
genero = "genero",
precio = 11.11,
imagen = "img",
rating = 1.1,
isFavorite = false,
anio = 1111,
plataformas = "PC, PS5",
descripcion = "descripcion",
developer = "dev",
onFav
}) {
return(
    <div class="text-white">
        <div class= "border p-6">{imagen}</div>
        <div class= "flex text-left p-6 text-3xl">{titulo}</div>
        <div>{precio} {rating} {plataformas}</div>
        <div class="flex"><div class= "text-left bg-blue-800 rounded-xs mr-2">{anio}</div> <div class="text-left bg-lime-900 rounded-xs">{genero}</div></div>   
        <div class= "text-left">{descripcion}</div>     
        <div class= "text-left">{developer}</div> 
        <div>{isFavorite}</div>
    </div>
);
}
export default GameDetailCard;