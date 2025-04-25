"use client";
import { useController } from "./controller";
import { TProps } from "./types";

export const TopTab = ({ id, label }: TProps) => {
  const { setSelectedTab, isTabSelected } = useController({ id });

  return (
    <div
      id={`top-tab-${id}`}
      key={id}
      className="flex items-center justify-center w-full p-2 cursor-pointer hover:opacity-70 transition-opacity duration-200"
      onClick={setSelectedTab}
    >
      <span
        className={`text-xl w-full text-center p-2 rounded-lg ${
          isTabSelected ? "bg-white" : ""
        }`}
      >
        {label}
      </span>
    </div>
  );
};
