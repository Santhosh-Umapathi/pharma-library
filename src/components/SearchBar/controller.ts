import { useState } from "react";

export const useController = () => {
  const [searchText, setSearchText] = useState("");

  // Handle input change
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
  };

  const handleSearch = () => {
    // Return early if searchText is empty
    if (!searchText) {
      return;
    }

    // Sanitize search text - Remove leading and trailing spaces, convert to lowercase
    const sanitizedSearchText = searchText.trim().toLowerCase();

    // Perform search logic here
    console.log("Searching for:", sanitizedSearchText);
  };

  // Clear search input
  const clearSearch = () => {
    setSearchText("");
  };

  const isClearIconVisible = searchText.length > 0;

  return {
    searchText,
    onChange,
    handleSearch,
    clearSearch,
    isClearIconVisible,
  };
};
