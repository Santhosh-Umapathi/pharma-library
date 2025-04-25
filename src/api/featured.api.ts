import data from "@/database/assets.json";
import { TFeatured } from "@/types/featured";

// Mock API to get only featured items
export const getFeatured = async () => {
  const allFeaturedAssets = data.filter((item) => item.isFeatured);

  const featured: TFeatured = [];

  // Remove the data property from each item to avoid sending large data
  allFeaturedAssets.forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...rest } = item;
    featured.push({ ...rest });
  });

  return Promise.resolve({
    message: "Success",
    data: featured,
    status: 200,
  });
};
