import { InfoIcon } from "@/components/icons";
import { useController } from "./controller";
import { TProps } from "./types";

export const Metric = ({ id, index, name, value }: TProps) => {
  const { formattedValue, showInfoIcon, hideLeftBorder } = useController({
    id,
    value,
    index,
  });
  return (
    <div
      key={id}
      id={`metric-${id}`}
      className={`flex flex-col gap-1 items-center ${
        hideLeftBorder ? "border-l-0" : "sm:border-l-1"
      } border-gray-300
      w-[45%]
      sm:w-full 
      `}
    >
      <span
        className="font-bold 
      text-xs
      sm:text-base
      md:text-lg
      "
      >
        {formattedValue}
      </span>
      <span
        className="flex gap-1 items-center 
      text-xs
      sm:text-sm"
      >
        {name}
        {showInfoIcon && (
          <InfoIcon
            className="text-gray-500 
        w-3 h-3
        sm:w-4 sm:h-4
        "
          />
        )}
      </span>
    </div>
  );
};
