import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { Home } from "./Home";

vi.mock("react-router-dom", () => ({
  useOutletContext: () => ({ search: "" }),
  useNavigate: () => vi.fn(),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

vi.mock("../../services/gameApi", () => ({
  getGames: vi.fn(),
}));

import { getGames } from "../../services/gameApi";

const mockGames = [
  {
    id: "1",
    titulo: "Elden Ring",
    imagen: "elden.jpg",
    genero: "RPG",
    anio: 2022,
    rating: 9.5,
    precio: 59.99,
  },
  {
    id: "2",
    titulo: "Zelda",
    imagen: "zelda.jpg",
    genero: "Aventura",
    anio: 2023,
    rating: 9.0,
    precio: 49.99,
  },
];

describe("Home", () => {
  beforeEach(() => {
    cleanup();
  });

  it("muestra el mensaje de carga al iniciar", () => {
    getGames.mockReturnValue(new Promise(() => {}));
    render(<Home />);
    expect(screen.getByText("Cargando juegos...")).toBeInTheDocument();
  });

  it("muestra los juegos cuando termina de cargar", async () => {
    getGames.mockResolvedValue(mockGames);
    render(<Home />);
    expect(await screen.findByText("Elden Ring")).toBeInTheDocument();
  });

  it("muestra error si la api falla", async () => {
    getGames.mockRejectedValue(new Error("error"));
    render(<Home />);
    expect(await screen.findByText("errorLoadingGames")).toBeInTheDocument();
  });
});
