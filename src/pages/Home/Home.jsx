import { useState, useEffect, useRef, useCallback } from "react";
import { useOutletContext } from "react-router-dom";
import { getGames } from "../../services/gameApi";
import { GameList } from "../../components/GameList/GameList";

const LIMIT = 5;

function Home() {
  const { search } = useOutletContext();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const sentinelRef = useRef(null);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  // Chequea si el sentinel está visible y carga la siguiente página
  const tryLoadMore = useCallback(() => {
    if (loadingRef.current || !hasMoreRef.current) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const { top } = sentinel.getBoundingClientRect();
    if (top <= window.innerHeight) {
      loadingRef.current = true;
      setPage((prev) => prev + 1);
    }
  }, []);

  // Reset y fetch de página 1 cuando cambia la búsqueda
  useEffect(() => {
    let cancelled = false;

    setGames([]);
    setPage(1);
    setHasMore(true);
    hasMoreRef.current = true;
    setError(null);
    setLoading(true);
    loadingRef.current = true;

    getGames(1, search)
      .then((data) => {
        if (cancelled) return;
        const results = Array.isArray(data) ? data : [];
        setGames(results);
        const more = results.length === LIMIT;
        setHasMore(more);
        hasMoreRef.current = more;
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
          loadingRef.current = false;
        }
      });

    return () => {
      cancelled = true;
    };
  }, [search]);

  // Fetch de páginas siguientes
  useEffect(() => {
    if (page === 1) return;

    let cancelled = false;
    setLoading(true);
    loadingRef.current = true;

    getGames(page, search)
      .then((data) => {
        if (cancelled) return;
        const results = Array.isArray(data) ? data : [];
        setGames((prev) => [...prev, ...results]);
        const more = results.length === LIMIT;
        setHasMore(more);
        hasMoreRef.current = more;
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
          loadingRef.current = false;
        }
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Escucha el scroll para trigger manual
  useEffect(() => {
    window.addEventListener("scroll", tryLoadMore, { passive: true });
    return () => window.removeEventListener("scroll", tryLoadMore);
  }, [tryLoadMore]);

  // Después de cada fetch, chequea si el sentinel sigue en pantalla (auto-load)
  useEffect(() => {
    if (!loading) tryLoadMore();
  }, [loading, tryLoadMore]);

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-red-400 text-center py-12">
          Error al cargar los juegos. Intentá de nuevo más tarde.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <GameList games={games} loading={loading} />
      {hasMore && <div ref={sentinelRef} className="h-4" />}
    </div>
  );
}

export { Home };
