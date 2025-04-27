import { useLibraryStore } from "@/store";
import { TController } from "./types";
import { getAsset } from "@/api";
import { formatDate } from "@/helpers";

export const useController = ({ date, id }: TController) => {
  const onClick = async () => {
    const showAssetModal = useLibraryStore.getState().showAssetModal;

    if (showAssetModal) return;
    // Set the asset modal to show
    useLibraryStore.getState().setShowAssetModal(true);

    try {
      // Fetch the asset data
      const results = await getAsset(id);
      // Set the asset data in the store
      useLibraryStore.getState().setAsset(results.data);
    } catch (error) {
      console.log("Request failed:", error);
    }
  };

  // Format the date to a more readable format
  const dateText = date ? formatDate(date) : "";

  return {
    dateText,
    onClick,
  };
};
