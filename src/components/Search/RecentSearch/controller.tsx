import { useMemo } from "react";
import { TRecentSearches } from "./types";

export const useController = () => {
  const recentSearches: TRecentSearches = useMemo(() => {
    const recentSearchesStorage = localStorage.getItem("recentSearches");
    if (recentSearchesStorage) {
      const parsedSearches = JSON.parse(recentSearchesStorage);
      return parsedSearches.sort(
        (a: { id: number }, b: { id: number }) => b.id - a.id
      );
    }
    return [];
  }, []);

  const isRecentSearchesEmpty = recentSearches.length === 0;

  return { recentSearches, isRecentSearchesEmpty };
};
