"use client";
import { useController } from "./controller";
import { TProps } from "./types";

export const TopTab = ({ id, label }: TProps) => {
  const { setSelectedTab, isTabSelected } = useController({ id });

  return (
    <div
      id={`top-tab-${id}`}
      key={id}
      className="flex items-center justify-center w-full cursor-pointer hover:opacity-70 transition-opacity duration-200
      p-1
      md:p-2 
      "
      onClick={setSelectedTab}
    >
      <span
        className={`w-full text-center ${isTabSelected ? "bg-white" : ""}
          text-sm p-1 rounded-sm
          sm:text-lg
          md:text-xl md:p-2 md:rounded-lg
        `}
      >
        {label}
      </span>
    </div>
  );
};
