import { getFeatured } from "@/api/featured.api";
import { TActions, TSet } from "./types";
import { getTrending } from "@/api/trending.api";

export const actions = (set: TSet) =>
  ({
    setSelectedTab: (tab) => set(() => ({ selectedTab: tab })),
    setInitialData: async () => {
      // Fetch the data from the API parallel
      const [featured, trending] = await Promise.all([
        getFeatured(),
        getTrending(),
      ]);

      // Something went wrong with the API calls
      if (featured.status !== 200 || trending.status !== 200) {
        return;
      }

      // Set the state with the data from the API
      set(() => ({
        featured: featured.data,
        trending: trending.data,
      }));
    },
  } as TActions);
