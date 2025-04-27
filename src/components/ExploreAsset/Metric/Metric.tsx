import { InfoIcon } from "@/components/icons";
import { useController } from "./controller";
import { TProps } from "./types";

export const Metric = ({ id, index, name, value }: TProps) => {
  const { date, showInfoIcon, showRightBorder } = useController({
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
      <span className="font-bold text-lg">{date}</span>
      <span className="flex gap-1 items-center text-sm">
        {name}
        {showInfoIcon && <InfoIcon className="text-gray-500" />}
      </span>
    </div>
  );
};
