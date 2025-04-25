//------------------------------------------------------------------
// State Types
//------------------------------------------------------------------

import { TFeatured } from "@/types/featured";
import { TTrending } from "@/types/trending";

export type TSelectedTab = "featured" | "kpi" | "layouts" | "storyboards";

export type TState = {
  selectedTab: TSelectedTab;
  featured: TFeatured;
  trending: TTrending;
};

//------------------------------------------------------------------
// Actions Types
//------------------------------------------------------------------
export type TSet = {
  (
    partial:
      | TLibraryStore
      | Partial<TLibraryStore>
      | ((state: TLibraryStore) => TLibraryStore | Partial<TLibraryStore>),
    replace?: false
  ): void;
  (
    state: TLibraryStore | ((state: TLibraryStore) => TLibraryStore),
    replace: true
  ): void;
};
export type TGet = () => TLibraryStore;

export type TActions = {
  setSelectedTab: (tab: TSelectedTab) => void;
  setInitialData: () => void;
};

//------------------------------------------------------------------
// Store Type
//------------------------------------------------------------------
export type TLibraryStore = TState & TActions;
