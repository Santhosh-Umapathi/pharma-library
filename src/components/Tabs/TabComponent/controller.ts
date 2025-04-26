import { getMoreAssets } from "@/api/moreAssets";
import { useLibraryStore } from "@/store";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { TController } from "./types";

export const useController = ({ featured, trending }: TController) => {
  const selectedTab = useLibraryStore((state) => state.selectedTab);
  const showMore = useLibraryStore((state) => state.showMoreAssets);

  // Fetch More Assets - Client side
  const fetchMoreAssets = useCallback(async () => {
    const setMoreAssets = useLibraryStore.getState().setMoreAssets;

    try {
      const response = await getMoreAssets();
      setMoreAssets(response.data);
    } catch (error) {
      console.error("Error fetching more assets:", error);
    }
  }, []);

  // Set the data in the store
  useLayoutEffect(() => {
    const { setFeatured, setTrending } = useLibraryStore.getState();

    // Set only if the data exists
    if (featured.length) {
      setFeatured(featured);
    }
    // Set only if the data exists
    if (trending.length) {
      setTrending(trending);
    }
  }, [featured, trending]);

  // Listen for showMore button click
  useEffect(() => {
    if (showMore) {
      fetchMoreAssets();
    }
  }, [showMore, fetchMoreAssets]);

  return {
    selectedTab,
  };
};
