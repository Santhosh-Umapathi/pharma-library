import data from "@/database/assets.json";
import { TAsset } from "@/types/assets";

// Mock API to get only requested item
export const getAsset = async (id: string) => {
  const asset: TAsset | undefined = data.find((item) => item.id === id);

  if (!asset) {
    return Promise.resolve({
      message: "Asset not found",
      data: null,
      status: 404,
    });
  }

  return Promise.resolve({
    message: "Success",
    data: asset,
    status: 200,
  });
};
