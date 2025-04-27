import { getFeatured } from "@/api/featured.api";
import { getTrending } from "@/api/trending.api";

export const controller = async () => {
  // Fetch the data on server from the API - parallel
  const fetchData = async () => {
    const [featured, trending] = await Promise.all([
      getFeatured(),
      getTrending(),
    ]);

    // Something went wrong with the API calls
    if (featured.status !== 200 || trending.status !== 200) {
      return {
        featured: [],
        trending: [],
      };
    }

    return {
      featured: featured.data,
      trending: trending.data,
    };
  };

  const data = await fetchData();

  return data;
};
