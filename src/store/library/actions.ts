import { TActions, TSet } from "./types";

export const actions = (set: TSet) =>
  ({
    setSelectedTab: (tab) => set(() => ({ selectedTab: tab })),
    setShowMoreAssets: (showMore) => set(() => ({ showMoreAssets: showMore })),
  } as TActions);
