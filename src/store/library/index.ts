import { create } from "zustand";
import { TLibraryStore } from "./types";
import { state } from "./state";
import { actions } from "./actions";

export const useLibraryStore = create<TLibraryStore>()((set) => ({
  ...state,
  ...actions(set),
}));
