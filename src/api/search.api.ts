import data from "@/database/assets.json";

// Mock API to get only searched items
export const postSearchAssets = async (searchText: string) => {
  const lowerSearch = searchText.toLowerCase();

  // Filter the data based on the search text
  const searchDataFull = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(lowerSearch) ||
      item.description.toLowerCase().includes(lowerSearch) ||
      item.data.name.toLowerCase().includes(lowerSearch) ||
      item.data.shortDescription.toLowerCase().includes(lowerSearch) ||
      item.data.longDescription.toLowerCase().includes(lowerSearch)
    );
  });

  // Remove the data property from each item to avoid sending large data
  const searchData = searchDataFull.map((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...rest } = item;
    return { ...rest };
  });

  return Promise.resolve({
    message: "Success",
    data: searchData,
    status: 200,
  });
};
