import { t } from "@/localization";
import { useLibraryStore } from "@/store";

export const useController = () => {
  const showAssetModal = useLibraryStore((state) => state.showAssetModal);

  // Close modal handler
  const closeModal = () => {
    if (!showAssetModal) return;
    // Close Asset modal
    useLibraryStore.setState({ showAssetModal: false });

    // Reset asset state
    useLibraryStore.getState().setAsset(null);
  };

  const footerButtonText = t.assetModal.footerButtonText;

  return { closeModal, footerButtonText, showAssetModal };
};
