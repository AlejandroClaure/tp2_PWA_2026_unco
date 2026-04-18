import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

function Layout() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header onSearch={setSearch} />
      <Outlet context={{ search }} />
    </>
  );
}

export { Layout };