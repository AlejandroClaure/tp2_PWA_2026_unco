import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n";

import { Home } from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Details from "./pages/Details/Details.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { Routes } from "./const/routes.js";
import { Layout } from "./components/Layout/Layout.jsx";

import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
        path: Routes.login,
        element: <Login />,
      },
      {
        path: Routes.register,
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);