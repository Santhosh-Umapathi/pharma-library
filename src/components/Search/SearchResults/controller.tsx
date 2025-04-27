import { useLibraryStore } from "@/store";

export const useController = () => {
  const searchResults = useLibraryStore((state) => state.searchResults);

  const isSearchResultsEmpty = searchResults.length === 0;

  return { searchResults, isSearchResultsEmpty };
};
