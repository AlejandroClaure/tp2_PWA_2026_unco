import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 px-6 text-center">
      
      <h1 className="text-7xl font-extrabold text-violet-500">
        404
      </h1>
      
      <p className="mt-4 text-2xl text-zinc-200">
        {t("notFound")}
      </p>

      <p className="mt-2 text-sm text-zinc-400 max-w-md">
        {t("routeNotFound")}
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-violet-600 px-6 py-3 text-white font-medium shadow-lg transition-all duration-200 hover:bg-violet-700 hover:scale-105"
      >
        {t("backHome")}
      </Link>

    </div>
  );
}