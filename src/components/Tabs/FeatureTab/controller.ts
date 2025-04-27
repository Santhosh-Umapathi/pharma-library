import { t } from "@/localization";
import { useLibraryStore } from "@/store";

export const useController = () => {
  const showAssetModal = useLibraryStore((state) => state.showAssetModal);

  // Close modal handler
  const closeModal = () => {
    if (!showAssetModal) return;
    useLibraryStore.setState({ showAssetModal: false });

    //TODO: clear store for explore asset modal
  };

  const footerButtonText = t.assetModal.footerButtonText;

  return { closeModal, footerButtonText, showAssetModal };
};
