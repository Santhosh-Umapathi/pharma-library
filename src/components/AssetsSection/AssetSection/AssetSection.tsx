import { t } from "@/localization";
import { AssetSectionHeader } from "../AssetSectionHeader";
import { AssetCards } from "../AssetCards";

export const AssetSection = () => {
  return t.assetSections.map(({ title, description, id }) => (
    <div
      id={`asset-section-${id}`}
      key={id}
      className="flex flex-col w-full mt-16"
    >
      <AssetSectionHeader {...{ title, description }} />
      <AssetCards id={id} />
    </div>
  ));
};
