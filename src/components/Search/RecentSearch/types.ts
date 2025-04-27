export type TProps = {
  recentSearchClick: (search: string) => void;
};

export type TRecentSearch = {
  id: number;
  search: string;
};

export type TRecentSearches = TRecentSearch[];
