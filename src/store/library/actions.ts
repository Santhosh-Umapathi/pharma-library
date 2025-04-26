import { TActions, TSet } from "./types";

export const actions = (set: TSet) =>
  ({
    setSelectedTab: (tab) => set(() => ({ selectedTab: tab })),
    setShowMoreAssets: (showMore) => set(() => ({ showMoreAssets: showMore })),
    setFeatured: (featured) => set(() => ({ featured })),
    setTrending: (trending) => set(() => ({ trending })),
    setMoreAssets: (moreAssets) => set(() => ({ moreAssets })),
    setSearchResults: (searchResults) => set(() => ({ searchResults })),
  } as TActions);
