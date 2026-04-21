import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    onSearch?.(trimmedQuery);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      
      {/* ICONO */}
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8f98a0] text-sm pointer-events-none" />

      {/* INPUT */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar juegos..."
        className="
          w-full
          bg-[#2a475e]
          text-white
          placeholder-[#8f98a0]
          pl-9 pr-3 py-2
          rounded-md
          outline-none
          border border-transparent
          focus:border-[#66c0f4]
          focus:bg-[#1b2838]
          focus:shadow-[0_0_6px_#66c0f4]
          transition-all
        "
      />
    </form>
  );
}

export { SearchBar };