import { useLibraryStore } from "@/store";

export const useController = () => {
  const selectedTab = useLibraryStore((state) => state.selectedTab);

  return {
    selectedTab,
  };
};
