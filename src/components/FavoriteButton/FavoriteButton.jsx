import { useTranslation } from "react-i18next";

function FavoriteButton({ id, onFav, esFavorito }) {
  const { t } = useTranslation();

  return (
    <div>
      <button
        type="button"
        onClick={() => onFav(id)}
        className="bg-emerald-700 text-white p-2 px-10 cursor-pointer active:scale-95 transition-transform duration-150 rounded-sm"
      >
        {esFavorito
          ? `♥ ${t("removeFavorite")}`
          : `♡ ${t("addFavorite")}`}
      </button>
    </div>
  );
}

export default FavoriteButton;