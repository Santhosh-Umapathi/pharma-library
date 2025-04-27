import { data } from "@/database";
import { TMoreAssets } from "@/types/moreAssets";

// Mock API to get only more items which are not featured or trending
export const getMoreAssets = async () => {
  const allMoreAssets = data.filter(
    (item) => !item.isFeatured && !item.isTrending
  );

  const moreAssets: TMoreAssets = [];

  // Remove the data property from each item to avoid sending large data
  allMoreAssets.forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...rest } = item;
    moreAssets.push({ ...rest });
  });

  return Promise.resolve({
    message: "Success",
    data: moreAssets,
    status: 200,
  });
};
