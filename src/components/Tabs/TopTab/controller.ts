import { useLibraryStore } from "@/store";
import { TController } from "./types";

export const useController = ({ id }: TController) => {
  const selectedTab = useLibraryStore((state) => state.selectedTab);

  // Set the selected tab in the store
  const setSelectedTab = () => {
    // Prevent setting the same tab again
    if (selectedTab === id) {
      return;
    }

    // Set the selected tab in the store
    useLibraryStore.getState().setSelectedTab(id);
  };

  const isTabSelected = selectedTab === id;

  return { setSelectedTab, isTabSelected };
};
