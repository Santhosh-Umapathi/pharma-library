import { useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { postSearchAssets } from "@/api/search.api";
import { useLibraryStore } from "@/store";

export const useController = () => {
  const [searchText, setSearchText] = useState("");

  const searchResults = useLibraryStore((state) => state.searchResults);

  // Clear search results from the store
  const clearStoreSearchResults = () => {
    const setSearchResults = useLibraryStore.getState().setSearchResults;
    setSearchResults([]);
  };

  // Clear search input
  const clearSearch = () => {
    setSearchText("");

    // Clear stored search results
    clearStoreSearchResults();
  };

  // Debounce the search function to limit the number of API calls
  const debouncedSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        // Clear search results if the input is empty
        if (!value) {
          // Clear stored search results
          clearStoreSearchResults();
        }

        // Return early if searchText is empty or less than 3 characters
        if (value.length < 3) {
          return;
        }

        // Sanitize search text - Remove leading and trailing spaces, convert to lowercase
        const sanitizedSearchText = value.trim().toLowerCase();
        const setSearchResults = useLibraryStore.getState().setSearchResults;

        const results = await postSearchAssets(sanitizedSearchText);
        setSearchResults(results.data);
      }, 500),
    []
  );

  // Handle input change
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
    // Search for assets
    debouncedSearch(value);
  };

  const isClearIconVisible = searchText.length > 0;

  return {
    searchText,
    onChange,
    clearSearch,
    isClearIconVisible,
    searchResults,
  };
};
