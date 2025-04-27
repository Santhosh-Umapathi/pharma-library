//------------------------------------------------------------------
// State Types
//------------------------------------------------------------------

import { TAsset } from "@/types/assets";
import { TFeatured } from "@/types/featured";
import { TMoreAssets } from "@/types/moreAssets";
import { TSearch } from "@/types/search";
import { TTrending } from "@/types/trending";

export type TSelectedTab = "featured" | "kpi" | "layouts" | "storyboards";

export type TState = {
  selectedTab: TSelectedTab;
  showMoreAssets: boolean;
  featured: TFeatured;
  trending: TTrending;
  moreAssets: TMoreAssets;
  searchResults: TSearch;
  showRequestModal: boolean;
  showAssetModal: boolean;
  asset: TAsset | null;
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
  setShowMoreAssets: (showMore: boolean) => void;
  setFeatured: (featured: TFeatured) => void;
  setTrending: (trending: TTrending) => void;
  setMoreAssets: (moreAssets: TMoreAssets) => void;
  setSearchResults: (searchResults: TSearch) => void;
  setShowRequestModal: (showRequestModal: boolean) => void;
  setShowAssetModal: (showAssetModal: boolean) => void;
  setAsset: (asset: TAsset | null) => void;
};

//------------------------------------------------------------------
// Store Type
//------------------------------------------------------------------
export type TLibraryStore = TState & TActions;
