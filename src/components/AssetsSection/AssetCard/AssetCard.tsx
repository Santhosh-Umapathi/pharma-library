import { PieChartIcon } from "@/components/icons";
import { TProps } from "./types";
import { useController } from "./controller";

const CARD_ICONS = {
  layout: (
    <PieChartIcon
      className="flex text-gray-300 justify-center items-center
    w-8 h-8
    md:w-12 md:h-12
    xl:w-20 xl:h-20
    "
    />
  ),
  // Can extend this object with more icons as needed, but "key" should match the "type" of asset
};

export const AssetCard = ({
  id,
  icon,
  title,
  description,
  date,
  showBg = false,
}: TProps) => {
  const { dateText, onClick } = useController({ date, id });

  return (
    <div
      id={`asset-card-${id}`}
      className={`flex justify-center p-4 items-center rounded-lg mb-1.5 cursor-pointer hover:opacity-70 transition-opacity ${
        showBg ? "bg-white shadow-md" : ""
      }
        w-full
        md:w-[48%] 
        xl:w-[49%] 
      `}
      onClick={onClick}
    >
      <div
        className="flex justify-center items-center bg-bgSecondary rounded-lg
        p-4
      xl:p-8
      "
      >
        {CARD_ICONS[icon as keyof typeof CARD_ICONS]}
      </div>
      <div className="flex flex-col ml-4 gap-2">
        <span
          className="font-bold 
        text-base
        xl:text-lg
        "
        >
          {title}
        </span>
        <span
          className="
        text-base
        xl:text-lg
        "
        >
          {description}
        </span>
        {date && (
          <span
            className="text-gray-500
        text-sm
        xl:text-base
        "
          >
            {dateText}
          </span>
        )}
      </div>
    </div>
  );
};
