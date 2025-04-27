import { AssetCard } from "@/components/AssetsSection";
import { useController } from "./controller";
import { TProps } from "./types";

export const SearchResults = ({ searchResultsRef }: TProps) => {
  const { searchResults, isSearchResultsEmpty } = useController();

  // If there are no search results, return null
  if (isSearchResultsEmpty) {
    return null;
  }

  return (
    <div
      className="absolute w-full top-14 h-96 overflow-y-scroll bg-white shadow-lg rounded-lg  z-50 justify-center items-center space-y-4 p-4"
      ref={searchResultsRef}
      id="search-results"
    >
      {searchResults.map(({ id, description, name, lastUpdated, type }) => (
        <div
          key={id}
          className="flex w-full justify-center items-center"
          id={`search-result-${id}`}
        >
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
  );
};
