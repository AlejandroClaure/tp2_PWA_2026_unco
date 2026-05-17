import {render, screen, cleanup} from "@testing-library/react"
import {describe, expect, it, vi, beforeEach} from "vitest"
import { MemoryRouter } from "react-router-dom";
import {GameList} from "./GameList.jsx"

  const mockGames = [
    { id: "1", titulo: "Elden Ring", imagen: "elden.jpg", genero: "RPG", anio: 2022, rating:
   9.5, precio: 59.99 },
    { id: "2", titulo: "Zelda", imagen: "zelda.jpg", genero: "Aventura", anio: 2023, rating:
   9.0, precio: 49.99 },
  ];


const mockNavigate = vi.fn()
vi.mock ("react-router-dom", ()=> ({
  useNavigate: ()=> mockNavigate,
  MemoryRouter:({children}) => children,
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key) => key }),
}));

describe("GameList", ()=>{
  beforeEach(() =>{
    cleanup()
  })

  it("No hay juegos cargados", () => {
    render(<GameList games={[]} loading={false}/>)
  
    expect(screen.getByText("No se encontraron juegos."))
  })

  it("Cargando juegos", () => {
    render(<GameList games={[]} loading={true} />)

    expect(screen.getByText("Cargando juegos..."))
  })

  it("Muestra los juegos listados", ()=>{
    render(<GameList games={mockGames} loading={true} />)

    expect(screen.getAllByRole("article")).toHaveLength(2)
  })

  
  
})
