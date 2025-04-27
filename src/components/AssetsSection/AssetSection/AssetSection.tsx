import { t } from "@/localization";
import { AssetSectionHeader, AssetCards } from "@/components/AssetsSection";
import { useController } from "./controller";

export const AssetSection = () => {
  const { moreAssets } = useController();

  return t.assetSections.map(({ title, description, id }) => {
    // Render More Assets only when there are assets to show
    if (id === "moreAssets" && !moreAssets.length) {
      return null;
    }

    // Render Sections - Featured | Trending | More Assets
    return (
      <div
        id={`asset-section-${id}`}
        key={id}
        className="flex flex-col w-full 
        mt-8
        md:mt-16
        "
      >
        <AssetSectionHeader {...{ title, description }} />
        <AssetCards id={id} />
      </div>
    );
  });
};
