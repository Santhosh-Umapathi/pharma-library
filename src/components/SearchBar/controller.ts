import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { postSearchAssets } from "@/api/search.api";
import { useLibraryStore } from "@/store";

export const useController = () => {
  const [searchText, setSearchText] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isClearIconVisible = searchText.length > 0;

  //Show/Hide recent searches dropdown
  const showRecentSearches = !!(searchText.length < 1 && isInputFocused);

  // Clear search results from the store
  const clearStoreSearchResults = useCallback(() => {
    const setSearchResults = useLibraryStore.getState().setSearchResults;
    setSearchResults([]);
  }, []);

  // Clear search input
  const clearSearch = () => {
    setSearchText("");

    // Clear stored search results
    clearStoreSearchResults();
  };

  // Save recent searches to local storage
  const saveRecentSearches = (search: string) => {
    const recentSearches = localStorage.getItem("recentSearches");

    // Create a new search object
    if (!recentSearches) {
      localStorage.setItem(
        "recentSearches",
        JSON.stringify([{ id: Date.now(), search }])
      );
      return;
    }

    // Update/Modify existing searches
    const recentSearchesArray = JSON.parse(recentSearches);

    // Check if search already exists
    const searchExists = recentSearchesArray.some(
      (item: { search: string }) => item.search === search
    );

    // Only add the search if it doesn't already exist
    if (!searchExists) {
      recentSearchesArray.push({ id: Date.now(), search });
    }

    // Save updated recent searches to local storage
    localStorage.setItem("recentSearches", JSON.stringify(recentSearchesArray));
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
        // Save recent searches to local storage
        saveRecentSearches(sanitizedSearchText);
        // Fetch search results from the API
        const results = await postSearchAssets(sanitizedSearchText);
        setSearchResults(results.data);
      }, 500),
    []
  );

  // Refetch data on focus if search text is not empty
  const onFocus = () => {
    if (searchText.length > 0) {
      // If search text is not empty, fetch results
      debouncedSearch(searchText);
    }
    setIsInputFocused(true);
  };

  // Hide Recent Searches when input is blurred
  const onBlur = () => {
    // Slight delay to allow click events to register
    setTimeout(() => setIsInputFocused(false), 500);
  };

  // Handle input change
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
    // Search for assets
    debouncedSearch(value);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        // Clear search results if clicked outside
        clearStoreSearchResults();
      }
    },
    [clearStoreSearchResults]
  );

  // Handle click on recent search
  const recentSearchClick = (search: string) => {
    setSearchText(search);
  };

  // Handle click outside of the search results and input
  useEffect(() => {
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return {
    searchText,
    onChange,
    clearSearch,
    isClearIconVisible,
    searchResultsRef,
    searchInputRef,
    onFocus,
    recentSearchClick,
    showRecentSearches,
    onBlur,
  };
};
