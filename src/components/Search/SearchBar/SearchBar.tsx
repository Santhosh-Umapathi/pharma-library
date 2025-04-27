"use client";
import { t } from "@/localization";
import { useController } from "./controller";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { RecentSearch, SearchResults } from "@/components/Search";

export const SearchBar = () => {
  const {
    searchText,
    onChange,
    clearSearch,
    isClearIconVisible,
    searchResultsRef,
    searchInputRef,
    onFocus,
    onBlur,
    recentSearchClick,
    showRecentSearches,
  } = useController();
  return (
    <div
      id="search-bar"
      className="flex flex-col items-center justify-center w-full mt-10 relative"
    >
      <SearchIcon className="absolute left-4 text-grey-800" />
      <input
        id="search-input"
        type="text"
        placeholder={t.search.placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full p-2 rounded-lg border-2 border-bgSecondary bg-white focus:outline-none hover:border-buttonPrimary focus:border-buttonPrimary transition-colors duration-200 px-10 text-grey-800 placeholder:text-grey-500"
        value={searchText}
        onChange={onChange}
        ref={searchInputRef}
      />
      <CloseIcon
        className={`absolute right-4 text-grey-800 cursor-pointer hover:text-grey-600 transition-all duration-200 z-20 ${
          isClearIconVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={clearSearch}
      />
      {/* Display recent searches */}
      {showRecentSearches && <RecentSearch {...{ recentSearchClick }} />}
      {/* Display search results */}
      <SearchResults searchResultsRef={searchResultsRef} />
    </div>
  );
};
