import styles from "./FavoriteButton.module.css";
function FavoriteButton({
    id,
    onFav,
    esFavorito
})
{
return(
<div>
      <button
        type="button"
        onClick={() => onFav(id)}
        className="bg-emerald-700 text-white p-2 px-10 cursor-pointer active:scale-95 transition-transform duration-150 rounded-sm"
      >
        {esFavorito ? "♥ Eliminar de favoritos" : "♡ Agregar a favoritos"}
      </button>
</div>
)}

export default FavoriteButton;