import { useLibraryStore } from "@/store";
import { TController } from "./types";

export const useController = ({ date, id }: TController) => {
  const onClick = () => {
    const showAssetModal = useLibraryStore.getState().showAssetModal;

    if (showAssetModal) return;
    console.log(`Clicked on asset card with ID: ${id}`);
    useLibraryStore.getState().setShowAssetModal(true);

    //TODO: set the asset data in the store
  };

  // Format the date to a more readable format
  const dateText = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "";

  return {
    dateText,
    onClick,
  };
};
