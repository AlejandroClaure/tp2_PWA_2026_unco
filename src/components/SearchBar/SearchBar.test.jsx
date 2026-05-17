import {render, screen, fireEvent, cleanup} from "@testing-library/react"
import {describe, expect, it, vi, beforeEach} from "vitest"
import { SearchBar } from "./SearchBar.jsx"

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key)=> key}),
}))

describe("SearchBar", ()=> {
  beforeEach(()=>{
    cleanup()
  })
  it("renderiza el input de busqueda", () =>{
    render(<SearchBar onSearch={vi.fn()}/>)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })
  
  it("llama a funcion de busqueda onSearch al escribir", ()=> {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)
    fireEvent.change(
      screen.getByRole("textbox"),
      {target: {value: "zelda"}}
    )
    expect(onSearch).toHaveBeenCalledWith("zelda")
  })

  it("llama a onSearch al hacer submit", ()=>{
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)
    fireEvent.change(screen.getByRole("textbox"),{target: {value: "zelda"}})
    fireEvent.submit(screen.getByRole("textbox").closest("form"))

    expect(onSearch).toHaveBeenCalledWith("zelda")
  })

  it("no llama a onSearch al hacer submit con el input vacio", ()=> {
    const onSearch= vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    fireEvent.submit(screen.getByRole("textbox").closest("form"))
    expect(onSearch).not.toHaveBeenCalled()
  })


})


