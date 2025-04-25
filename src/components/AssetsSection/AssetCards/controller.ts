import { useLibraryStore } from "@/store";
import { TController } from "./types";
import { TFeatured } from "@/types/featured";
import { TTrending } from "@/types/trending";
import { state } from "@/store/library/state";

export const useController = ({ id }: TController) => {
  const assetCards = useLibraryStore.getState()[id as keyof typeof state] as
    | TFeatured
    | TTrending;

  return { assetCards };
};
