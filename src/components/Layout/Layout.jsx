import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1b2838] text-[#c7d5e0]">
      
      {/* Header sticky */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* Contenido principal */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-[#171a21] text-[#8f98a0]">
        <Footer />
      </footer>

    </div>
  );
}

export { Layout };