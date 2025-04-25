"use client";
import { t } from "@/localization";
import { useController } from "./controller";
import { TProps } from "./types";
import { CloseIcon, SearchIcon } from "../icons";

export const SearchBar = ({}: TProps) => {
  const { searchText, onChange, clearSearch, isClearIconVisible } =
    useController();
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
    </div>
  );
};
