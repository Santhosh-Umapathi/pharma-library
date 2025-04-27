import { t } from "@/localization";
import { useLibraryStore } from "@/store";

export const useController = () => {
  const showRequestModal = useLibraryStore((state) => state.showRequestModal);

  //Open request modal
  const onClick = () => {
    useLibraryStore.getState().setShowRequestModal(true);
  };

  // Close request modal
  const closeModal = () => {
    if (!showRequestModal) return;
    useLibraryStore.setState({ showRequestModal: false });
  };

  const footerButtonText = t.requestForm.submit;

  return { onClick, closeModal, showRequestModal, footerButtonText };
};
