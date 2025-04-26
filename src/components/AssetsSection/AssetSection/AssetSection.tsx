import { t } from "@/localization";
import { AssetSectionHeader } from "../AssetSectionHeader";
import { AssetCards } from "../AssetCards";
import { TProps } from "./types";

export const AssetSection = (props: TProps) => {
  return t.assetSections.map(({ title, description, id }) => (
    <div
      id={`asset-section-${id}`}
      key={id}
      className="flex flex-col w-full mt-16"
    >
      <AssetSectionHeader {...{ title, description }} />
      <AssetCards id={id} {...props} />
    </div>
  ));
};
