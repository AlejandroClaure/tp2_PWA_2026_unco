import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

function Layout() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#171a21]">
      <Header onSearch={setSearch} />

      <main className="flex-1">
        <Outlet context={{ search }} />
      </main>

      <Footer />
    </div>
  );
}

export { Layout };
