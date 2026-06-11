import { useState, useEffect, useRef, useCallback } from "react";
import { useOutletContext } from "react-router-dom";
import { getGames } from "../../services/gameApi";
import { GameList } from "../../components/GameList/GameList";
import { useTranslation } from "react-i18next";

const LIMIT = 5;

function Home() {
  const { t } = useTranslation();
  const { search } = useOutletContext();

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const sentinelRef = useRef(null);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  // toggle fav (UI only)
  const handleToggleFavorite = (id) => {
    setGames((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, isFavorite: !g.isFavorite } : g
      )
    );
  };

  // debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(handler);
  }, [search]);

  // fetch page 1 (reset)
  useEffect(() => {
    let cancelled = false;

    setGames([]);
    setPage(1);
    setHasMore(true);
    hasMoreRef.current = true;
    setError(null);
    setLoading(true);
    loadingRef.current = true;

    getGames(1, debouncedSearch)
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
  }, [debouncedSearch]);

  // fetch next pages
  useEffect(() => {
    if (page === 1) return;

    let cancelled = false;

    setLoading(true);
    loadingRef.current = true;

    getGames(page, debouncedSearch)
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
  }, [page, debouncedSearch]);

  // infinite scroll
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

  useEffect(() => {
    window.addEventListener("scroll", tryLoadMore, { passive: true });
    return () => window.removeEventListener("scroll", tryLoadMore);
  }, [tryLoadMore]);

  // auto trigger scroll check
  useEffect(() => {
    if (!loading) tryLoadMore();
  }, [loading, tryLoadMore]);

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-red-400 text-center py-12">
          {t("errorLoadingGames")}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <GameList
        games={games}
        loading={loading}
        onToggleFavorite={handleToggleFavorite}
      />

      {hasMore && <div ref={sentinelRef} className="h-4" />}
    </div>
  );
}

export { Home };