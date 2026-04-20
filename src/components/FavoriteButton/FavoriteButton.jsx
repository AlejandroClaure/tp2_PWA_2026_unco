import styles from "./FavoriteButton.module.css";
/*
logica busqueda de juegos por id
    const [favoritos, setFavoritos] = useState(() => {
        const data = localStorage.getItem("favoritos");
        return data? JSON.parse(data) : [];    
    });

useEffect(() => {
  localStorage.setItem("favoritos", JSON.stringify(Favoritos));
}, [Favoritos]);

const handleFav = (juego) => {
        setFavoritos((prev) =>{
      const existe = prev.find((f) => f.id === juego.id);

      if (existe) {
        return prev.filter((f) => f.id !== juego.id);
      } else {
        return [...prev, { ...juego, isFavorite: true }];
      }
    });
  };

*/
function FavoriteButton({
    id,
    onFav
})
{
return(
<div>
    <button type="button" onClick={() => onFav(id)} className="bg-emerald-700 text-white p-2 px-10 cursor-pointer active:scale-95 transition-transform duration-150 rounded-sm">
    Agregar a favoritos
    </button>
</div>
)}

export default FavoriteButton;