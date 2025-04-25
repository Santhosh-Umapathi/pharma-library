import data from "@/database/assets.json";
import { TAsset } from "@/types/assets";

// Mock API to get only featured items
export const getFeatured = async () => {
  const allFeaturedAssets = data.filter((item) => item.isFeatured);

  const featured: Omit<TAsset, "data">[] = [];

  // Remove the data property from each item to avoid sending large data
  allFeaturedAssets.forEach((item) => {
    const { data, ...rest } = item;
    featured.push({ ...rest });
  });

  return Promise.resolve({
    message: "Success",
    data: featured,
    status: 200,
  });
};
