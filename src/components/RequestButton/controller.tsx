import { t } from "@/localization";
import { useLibraryStore } from "@/store";

export const useController = () => {
  const showRequestModal = useLibraryStore((state) => state.showRequestModal);
  const onClick = () => {
    useLibraryStore.getState().setShowRequestModal(true);
  };

  // Close modal handler
  const closeModal = () => {
    if (!showRequestModal) return;
    useLibraryStore.setState({ showRequestModal: false });
  };

  const footerButtonText = t.requestForm.submit;

  return { onClick, closeModal, showRequestModal, footerButtonText };
};
