import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import GameDetailCard from "./GameDetailCard";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useTranslation } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

Object.defineProperty(window, "localStorage", {
  value: {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    clear: vi.fn(),
  },
});

describe("GameDetailCard", () => {
  beforeEach(() => {
    cleanup();

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            titulo: "Juego",
            imagen: "imagen.jpg",
          }),
      })
    );
  });

  it("muestra loading al iniciar", () => {
    render(
      <MemoryRouter>
        <GameDetailCard id="1" />
      </MemoryRouter>
    );  

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("muestra una imagen del juego", async () => {
      render(
      <MemoryRouter>
        <GameDetailCard id="1" />
      </MemoryRouter>
    ); 

    expect(await screen.findByRole("img")).toBeInTheDocument();
  });

  it("llama a la api con el id correcto", () => {
    render(
      <MemoryRouter>
        <GameDetailCard id="5" />
      </MemoryRouter>
    );

    expect(fetch).toHaveBeenCalledWith(
      "https://69e2e9773327837a1552b35a.mockapi.io/api/v1/juegos/5"
    );
  });
});