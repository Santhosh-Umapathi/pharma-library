import { AssetCard } from "../AssetsSection";
import { useController } from "./controller";
import { TProps } from "./types";

export const SearchResults = ({ searchResultsRef }: TProps) => {
  const { searchResults } = useController();

  // If there are no search results, return null
  if (searchResults.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute w-full top-14 h-96 overflow-y-scroll bg-white shadow-lg rounded-lg  z-50 justify-center items-center space-y-4 p-4"
      ref={searchResultsRef}
    >
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
  );
};
