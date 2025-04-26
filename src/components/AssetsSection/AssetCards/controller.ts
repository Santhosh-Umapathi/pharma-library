import { useLibraryStore } from "@/store";
import { TController } from "./types";
import { TFeatured } from "@/types/featured";
import { TTrending } from "@/types/trending";
import { TMoreAssets } from "@/types/moreAssets";

export const useController = ({ id }: TController) => {
  // Render AssetCards based on the section - "Featured" | "Trending" | "More Assets"
  const assetCards = useLibraryStore(
    (state) => state[id as keyof typeof state]
  ) as TFeatured | TTrending | TMoreAssets;

  return { assetCards };
};
