import { useLibraryStore } from "@/store";

export const useController = () => {
  const showRequestModal = useLibraryStore((state) => state.showRequestModal);

  // Close modal handler
  const closeModal = () => {
    if (!showRequestModal) return;
    useLibraryStore.setState({ showRequestModal: false });
  };

  return { showRequestModal, closeModal };
};
