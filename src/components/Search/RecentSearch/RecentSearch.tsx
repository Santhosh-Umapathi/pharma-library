import { useController } from "./controller";
import { TProps } from "./types";

export const RecentSearch = ({ recentSearchClick }: TProps) => {
  const { recentSearches, isRecentSearchesEmpty } = useController();

  // Check if recent searches are empty
  if (isRecentSearchesEmpty) {
    return null;
  }

  return (
    <div
      className="absolute w-full top-14 max-h-48 overflow-y-auto bg-white shadow-lg rounded-lg z-50 justify-center items-center space-y-4 p-4"
      id="recent-search"
    >
      {recentSearches.map(({ id, search }) => (
        <div
          key={id}
          id={`recent-search-${id}`}
          className="flex w-full justify-center items-center cursor-pointer hover:opacity-70 hover:bg-bgSecondary rounded-lg p-2"
          onClick={() => recentSearchClick(search)}
        >
          <span className="text-base md:text-lg">{search}</span>
        </div>
      ))}
    </div>
  );
};
