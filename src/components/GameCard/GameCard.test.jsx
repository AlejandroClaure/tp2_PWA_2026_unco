import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { GameCard } from "./GameCard";

const mockNavigate = vi.fn()
vi.mock ("react-router-dom", ()=> ({
  useNavigate: ()=> mockNavigate,
  MemoryRouter:({children}) => children,
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key) => key }),
}));

const mockGame = {
    id: "1",
    titulo: "Elden Ring",
    imagen: "elden.jpg",
    genero: "RPG",
    anio: 2022,
    rating: 9.5,
    precio: 59.99,
};

describe("GameCard", () => {
    beforeEach(() => {
      cleanup();
    });

    it("mostrar titulo del juego", ()=>{
      render(
       <MemoryRouter>
         <GameCard game={mockGame}/>
       </MemoryRouter>
      )

      expect(screen.getByText("Elden Ring")).toBeInTheDocument()
    });

    it ("Mostrar precio del juego", ()=> {
      render(
       <MemoryRouter>
          <GameCard game={mockGame}/>
       </MemoryRouter>
      )

     expect(screen.getByText("$59.99")).toBeInTheDocument()
    })
  it("Navega al detalle al clickear la card", () =>{
    render(
      <MemoryRouter>
        <GameCard game={mockGame} />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByRole("article"))

    expect(mockNavigate).toHaveBeenCalledWith("/items/1")
  })
  
  it("Cambia el boton de favoritos al clickear", () =>{
    render(
      <MemoryRouter>
        <GameCard game={mockGame}/>
      </MemoryRouter>
    )
    expect(screen.getByRole("button", {name: "addFavorite"}))

  })
  
});
