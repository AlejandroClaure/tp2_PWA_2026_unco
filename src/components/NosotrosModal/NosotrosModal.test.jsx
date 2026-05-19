import {
    render,
    screen,
    fireEvent,
    cleanup,
} from "@testing-library/react";

import {
    describe,
    it,
    expect,
    vi,
    beforeEach,
    afterEach,
} from "vitest";

import { NosotrosModal } from "./NosotrosModal";

// Mock traducciones
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => {
            const translations = {
                teamTitle: "Team",
                pmScrum: "PM Scrum",
                developer: "Developer",
                thanksUsing: "Thanks for using EsteamApp",
            };

            return translations[key] || key;
        },
    }),
}));

describe("NosotrosModal Component", () => {
    const onCloseMock = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
    });

    afterEach(() => {
        cleanup();
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
    });

    it("no renderiza el modal cuando isOpen es false", () => {
        render(<NosotrosModal isOpen={false} onClose={onCloseMock} />);

        expect(screen.queryByText(/team/i)).not.toBeInTheDocument();
    });

    it("renderiza correctamente el título del modal", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        expect(
            screen.getByRole("heading", { name: /^team$/i })
        ).toBeInTheDocument();
    });

    it("renderiza correctamente todos los integrantes", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        expect(
            screen.getByText(/alejandro claure/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/gaston llaupe/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/joaquin ignacio/i)
        ).toBeInTheDocument();
    });

    it("renderiza correctamente todos los roles", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        expect(screen.getByText(/pm scrum/i)).toBeInTheDocument();

        expect(
            screen.getAllByText(/developer/i)
        ).toHaveLength(2);
    });

    it("renderiza correctamente todos los emails", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        expect(
            screen.getByText(/alejandroclaure01@gmail.com/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/llaupeg@gmail.com/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/joaquinivl95@gmail.com/i)
        ).toBeInTheDocument();
    });

    it("renderiza correctamente los links mailto", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        expect(
            screen.getByRole("link", {
                name: /alejandroclaure01@gmail.com/i,
            })
        ).toHaveAttribute(
            "href",
            "mailto:alejandroclaure01@gmail.com"
        );

        expect(
            screen.getByRole("link", {
                name: /llaupeg@gmail.com/i,
            })
        ).toHaveAttribute(
            "href",
            "mailto:llaupeg@gmail.com"
        );

        expect(
            screen.getByRole("link", {
                name: /joaquinivl95@gmail.com/i,
            })
        ).toHaveAttribute(
            "href",
            "mailto:Joaquinivl95@gmail.com"
        );
    });

    it("renderiza correctamente el texto final", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        expect(
            screen.getByText(/thanks for using esteamapp/i)
        ).toBeInTheDocument();
    });

    it("cierra correctamente al hacer click en el botón cerrar", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        const closeButton = screen.getByRole("button");

        fireEvent.click(closeButton);

        vi.advanceTimersByTime(180);

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it("cierra correctamente al presionar Escape", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        fireEvent.keyDown(window, {
            key: "Escape",
        });

        vi.advanceTimersByTime(180);

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it("mantiene el modal visible durante la animación de cierre", () => {
        render(<NosotrosModal isOpen={true} onClose={onCloseMock} />);

        const closeButton = screen.getByRole("button");

        fireEvent.click(closeButton);

        // Sigue visible durante la animación
        expect(
            screen.getByRole("heading", { name: /^team$/i })
        ).toBeInTheDocument();

        vi.advanceTimersByTime(180);
    });

    it("agrega y limpia correctamente el listener de Escape", () => {
        const addSpy = vi.spyOn(window, "addEventListener");
        const removeSpy = vi.spyOn(window, "removeEventListener");

        const { unmount } = render(
            <NosotrosModal
                isOpen={true}
                onClose={onCloseMock}
            />
        );

        expect(addSpy).toHaveBeenCalledWith(
            "keydown",
            expect.any(Function)
        );

        unmount();

        expect(removeSpy).toHaveBeenCalledWith(
            "keydown",
            expect.any(Function)
        );
    });
});