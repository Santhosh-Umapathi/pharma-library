import { PieChartIcon } from "@/components/icons";
import { TProps } from "./types";
import { useController } from "./controller";

const CARD_ICONS = {
  layout: (
    <PieChartIcon className="flex w-20 h-20 text-gray-300 justify-center items-center" />
  ),
  // Can extend this object with more icons as needed, but key should match the type of tab
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
      className={`flex justify-center p-4 items-center rounded-lg w-[49%] mb-1.5 cursor-pointer hover:opacity-70 transition-opacity ${
        showBg ? "bg-white shadow-md" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center p-8 bg-bgSecondary rounded-lg">
        {CARD_ICONS[icon as keyof typeof CARD_ICONS]}
      </div>
      <div className="flex flex-col ml-4 gap-2">
        <span className="font-bold text-lg">{title}</span>
        <span className="text-lg">{description}</span>
        {date && <span className="text-gray-500">{dateText}</span>}
      </div>
    </div>
  );
};
