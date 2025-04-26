import { useLibraryStore } from "@/store";

export const useController = () => {
  const showMore = useLibraryStore((state) => state.showMoreAssets);

  // Set showMoreAssets to true in the store
  const handleShowMore = () => {
    // Return early if showMore is already true
    if (showMore) {
      return;
    }
    useLibraryStore.getState().setShowMoreAssets(true);
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    handleShowMore,
    showMore,
    scrollToTop,
  };
};
