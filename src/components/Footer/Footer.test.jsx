import { describe, it, expect, afterEach } from "vitest";
import {
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./Footer";
import i18n from "../../i18n";

afterEach(cleanup);

const renderFooter = () => {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
};

describe("Footer Component", () => {
  it("renderiza correctamente todas las traducciones en inglés", async () => {
    await i18n.changeLanguage("en");

    renderFooter();

    // Logo y descripción
    expect(
      screen.getByRole("heading", {
        name: /esteamapp/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /video game discovery platform\. discover, explore and save your favorites\./i
      )
    ).toBeInTheDocument();

    // Botón modal
    expect(
      screen.getByRole("button", {
        name: /about us/i,
      })
    ).toBeInTheDocument();

    // Secciones
    expect(
      screen.getByRole("heading", {
        name: /navigation/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /contact/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /social/i,
      })
    ).toBeInTheDocument();

    // Navegación
    expect(
      screen.getByRole("link", {
        name: /home/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /favorites/i,
      })
    ).toBeInTheDocument();
  });

  it("renderiza correctamente todas las traducciones en español", async () => {
    await i18n.changeLanguage("es");

    renderFooter();

    // Logo
    expect(
      screen.getByRole("heading", {
        name: /esteamapp/i,
      })
    ).toBeInTheDocument();

    // Botón modal
    expect(
      screen.getByRole("button", {
        name: /sobre nosotros/i,
      })
    ).toBeInTheDocument();

    // Secciones
    expect(
      screen.getByRole("heading", {
        name: /navegación/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /contacto/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /redes/i,
      })
    ).toBeInTheDocument();

    // Navegación
    expect(
      screen.getByRole("link", {
        name: /inicio/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /favoritos/i,
      })
    ).toBeInTheDocument();
  });

  it("renderiza correctamente el logo y las secciones principales del footer", async () => {
    await i18n.changeLanguage("en");

    renderFooter();

    // Logo principal
    const logo = screen.getByRole("heading", {
      name: /esteamapp/i,
    });

    expect(logo).toBeInTheDocument();

    // Descripción
    expect(
      screen.getByText(
        /video game discovery platform\. discover, explore and save your favorites\./i
      )
    ).toBeInTheDocument();

    // Títulos de sección
    expect(
      screen.getByRole("heading", {
        name: /navigation/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /contact/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /social/i,
      })
    ).toBeInTheDocument();
  });

  it("renderiza correctamente los links internos de navegación", async () => {
    await i18n.changeLanguage("en");

    renderFooter();

    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });

    const favoritesLink = screen.getByRole("link", {
      name: /favorites/i,
    });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    expect(favoritesLink).toBeInTheDocument();
    expect(favoritesLink).toHaveAttribute(
      "href",
      "/favorites"
    );
  });

  it("renderiza correctamente la información de contacto", async () => {
    await i18n.changeLanguage("en");

    renderFooter();

    const emailLink = screen.getByRole("link", {
      name: /soporte@esteamapp.com/i,
    });

    const phoneLink = screen.getByRole("link", {
      name: /\+54 299 123 4567/i,
    });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:soporte@esteamapp.com"
    );

    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute(
      "href",
      "tel:+5492991234567"
    );
  });

  it("renderiza correctamente los links de redes sociales", async () => {
    await i18n.changeLanguage("en");

    renderFooter();

    const instagramLink = screen.getByRole("link", {
      name: /instagram/i,
    });

    const twitterLink = screen.getByRole("link", {
      name: /twitter/i,
    });

    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });

    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://instagram.com/esteamapp_fake"
    );

    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute(
      "href",
      "https://twitter.com/esteamapp_fake"
    );

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/esteamapp_fake"
    );
  });

  it("abre correctamente el modal nosotros al hacer click en About Us", async () => {
    await i18n.changeLanguage("en");

    renderFooter();

    const user = userEvent.setup();

    const aboutButton = screen.getByRole("button", {
      name: /about us/i,
    });

    await user.click(aboutButton);

    expect(
      screen.getByRole("heading", {
        name: /esteamapp team/i,
      })
    ).toBeInTheDocument();
  });
});