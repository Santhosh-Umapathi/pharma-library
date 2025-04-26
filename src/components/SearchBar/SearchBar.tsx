"use client";
import { t } from "@/localization";
import { useController } from "./controller";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { AssetCard } from "../AssetsSection";

export const SearchBar = () => {
  const {
    searchText,
    onChange,
    clearSearch,
    isClearIconVisible,
    searchResults,
  } = useController();
  return (
    <div
      id="search-bar"
      className="flex flex-col items-center justify-center w-full mt-10 relative"
    >
      <SearchIcon className="absolute left-4 text-grey-800" />
      <input
        type="text"
        placeholder={t.search.placeholder}
        className="w-full p-2 rounded-lg border-2 border-bgSecondary bg-white focus:outline-none hover:border-buttonPrimary focus:border-buttonPrimary transition-colors duration-200 px-10 text-grey-800 placeholder:text-grey-500"
        value={searchText}
        onChange={onChange}
      />
      <CloseIcon
        className={`absolute right-4 text-grey-800 cursor-pointer hover:text-grey-600 transition-all duration-200 z-20 ${
          isClearIconVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={clearSearch}
      />
      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="absolute w-full top-14 h-96 overflow-y-scroll bg-white shadow-lg rounded-lg  z-50 justify-center items-center space-y-4 p-4">
          {searchResults.map(({ id, description, name, lastUpdated, type }) => (
            <div key={id} className="flex w-full justify-center items-center">
              <AssetCard
                {...{
                  id,
                  icon: type,
                  title: name,
                  description,
                  date: lastUpdated,
                  showBg: true,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
