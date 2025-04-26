import { useLibraryStore } from "@/store";

export const useController = () => {
  const onClick = () => {
    useLibraryStore.getState().setShowRequestModal(true);
  };
  return { onClick };
};
