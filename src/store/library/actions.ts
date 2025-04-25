import { TActions, TSet } from "./types";

export const actions = (set: TSet) =>
  ({
    setSelectedTab: (tab) => set({ selectedTab: tab }),
  } as TActions);
