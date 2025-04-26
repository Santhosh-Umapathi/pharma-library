import { useLibraryStore } from "@/store";

export const useController = () => {
  const moreAssets = useLibraryStore((state) => state.moreAssets);
  return { moreAssets };
};
