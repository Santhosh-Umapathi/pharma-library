import { TProps } from "./types";

export const AssetSectionHeader = ({ title, description }: TProps) => {
  return (
    <div
      className="flex flex-col 
    mb-7
    md:mb-14
    "
      id="asset-section-header"
    >
      <span
        className="font-bold
      text-2xl
      md:text-4xl 
      "
      >
        {title}
      </span>
      <span
        className="mt-2
      text-base
      md:text-xl 
      "
      >
        {description}
      </span>
    </div>
  );
};
