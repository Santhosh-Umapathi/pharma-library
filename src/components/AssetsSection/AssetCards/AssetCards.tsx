import { AssetCard } from "../AssetCard";
import { useController } from "./controller";
import { TProps } from "./types";

export const AssetCards = ({ id, featured, trending }: TProps) => {
  const { assetCards } = useController({ id, featured, trending });

  return (
    <div className="flex flex-wrap w-full gap-4 justify-between">
      {assetCards.map(
        ({ id, description, name, type, lastUpdated, isFeatured }) => (
          <AssetCard
            key={id}
            {...{
              id,
              description,
              title: name,
              icon: type,
              date: lastUpdated,
              showBg: isFeatured,
            }}
          />
        )
      )}
    </div>
  );
};
