import { TState } from "./types";

export const state: TState = {
  selectedTab: "featured", // Default tab
  showMoreAssets: false,
  featured: [],
  trending: [],
  moreAssets: [],
  searchResults: [],
  showRequestModal: false,
  showAssetModal: false,
  asset: null,
};
