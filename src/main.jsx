import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import { Home } from "./pages/Home/Home.jsx";
import Details from "./pages/Details/Details.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { Routes } from "./const/routes.js";

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: <Home />,
  },
  {
    path: Routes.details,
    element: <Details />,
  },
  {
    path: Routes.favorites,
    element: <Favorites />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);