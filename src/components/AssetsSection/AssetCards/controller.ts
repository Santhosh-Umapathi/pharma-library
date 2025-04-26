import { TController } from "./types";

export const useController = ({ id, featured, trending }: TController) => {
  // Render AssetCards based on the section - "Featured" or "Trending"
  const assetCards = id === "featured" ? featured : trending;

  return { assetCards };
};
