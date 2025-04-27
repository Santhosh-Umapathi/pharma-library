import { useLibraryStore } from "@/store";

export const useController = () => {
  const asset = useLibraryStore((state) => state.asset);

  // Capitalize the first letter of the asset type
  const type =
    asset?.data.type.split("")[0].toUpperCase() +
    (asset?.data.type.slice(1).toLowerCase() || "");

  const showTags = !!(
    asset?.data &&
    asset.data.tags &&
    asset.data.tags.length > 0
  );

  const showMetrics = !!(
    asset?.data &&
    asset.data.metrics &&
    asset.data.metrics.length > 0
  );

  const showBusinessQuestions = !!(
    asset?.data &&
    asset.data.businessQuestions &&
    asset.data.businessQuestions.length > 0
  );

  return {
    asset,
    type,
    showTags,
    showMetrics,
    showBusinessQuestions,
  };
};
