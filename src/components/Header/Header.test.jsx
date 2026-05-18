import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
} from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

const changeLanguageMock = vi.fn();

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        favorites: "Favoritos",
      };

      return translations[key] || key;
    },
    i18n: {
      language: "es",
      changeLanguage: changeLanguageMock,
    },
  }),
}));

vi.mock("../SearchBar/SearchBar", () => ({
  SearchBar: () => <div data-testid="search-bar" />,
}));

describe("Header", () => {
  const mockOnSearch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  const renderHeader = () => {
    render(
      <BrowserRouter>
        <Header onSearch={mockOnSearch} />
      </BrowserRouter>
    );
  };

  it("muestra el texto de favoritos correctamente", () => {
    renderHeader();

    expect(screen.getByText("Favoritos")).toBeInTheDocument();
  });

  it("renderiza la barra de búsqueda", () => {
    renderHeader();

    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });

  it("muestra el logo de la aplicación", () => {
    renderHeader();

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  it("muestra el link de favoritos correctamente", () => {
    renderHeader();

    const linkFavoritos = screen.getByRole("link", {
      name: /favoritos/i,
    });

    expect(linkFavoritos).toHaveAttribute("href", "/favorites");
  });

  it("cambia el idioma a inglés cuando el usuario hace click en EN", async () => {
    renderHeader();

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(changeLanguageMock).toHaveBeenCalledWith("en");
  });

  it("cambia el idioma a español cuando el usuario hace click en ES", async () => {
    renderHeader();

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "ES" }));

    expect(changeLanguageMock).toHaveBeenCalledWith("es");
  });
  
  it("muestra el link al home correctamente", () => {
  renderHeader();

  const homeLink = screen.getByRole("link", {
    name: /esteamapp/i,
  });

  expect(homeLink).toHaveAttribute("href", "/");
});
});