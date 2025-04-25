import data from "@/database/assets.json";
import { TTrending } from "@/types/trending";

// Mock API to get only trending items
export const getTrending = async () => {
  const allTrendingAssets = data.filter((item) => item.isTrending);

  const trending: TTrending = [];

  // Remove the data property from each item to avoid sending large data
  allTrendingAssets.forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...rest } = item;
    trending.push({ ...rest });
  });

  return Promise.resolve({
    message: "Success",
    data: trending,
    status: 200,
  });
};
