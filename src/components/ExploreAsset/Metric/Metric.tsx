import { InfoIcon } from "@/components/icons";
import { useController } from "./controller";
import { TProps } from "./types";

export const Metric = ({ id, index, name, value }: TProps) => {
  const { formattedValue, showInfoIcon, showRightBorder } = useController({
    id,
    value,
    index,
  });
  return (
    <div
      key={id}
      id={`metric-${id}`}
      className={`flex flex-col gap-1 items-center w-full ${
        showRightBorder ? "border-l-0" : "border-l-1 "
      } border-gray-300`}
    >
      <span
        className="font-bold 
      text-[8px]
      sm:text-base
      md:text-lg
      "
      >
        {formattedValue}
      </span>
      <span
        className="flex gap-1 items-center 
      text-[8px]
      sm:text-sm"
      >
        {name}
        {showInfoIcon && (
          <InfoIcon
            className="text-gray-500 
        w-2 h-2
        sm:w-4 sm:h-4
        "
          />
        )}
      </span>
    </div>
  );
};
