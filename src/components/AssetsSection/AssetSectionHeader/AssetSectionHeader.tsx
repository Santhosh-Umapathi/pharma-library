import { TProps } from "./types";

export const AssetSectionHeader = ({ title, description }: TProps) => {
  return (
    <div className="flex flex-col mb-14">
      <span className="text-4xl font-bold">{title}</span>
      <span className="text-xl mt-2">{description}</span>
    </div>
  );
};
