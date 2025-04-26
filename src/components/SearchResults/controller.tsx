import { useLibraryStore } from "@/store";

export const useController = () => {
  const searchResults = useLibraryStore((state) => state.searchResults);

  return { searchResults };
};
