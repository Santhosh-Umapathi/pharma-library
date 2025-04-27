import { TProps } from "./types";

export const Tag = ({ id, value }: TProps) => {
  return (
    <span
      key={id}
      id={`tag-${id}`}
      className="bg-bgSecondary py-1 shadow-sm mr-2
      text-[10px] px-1 rounded-sm
      sm:text-sm
      md:text-sm md:px-2 md:rounded-md
      "
    >
      #{value}
    </span>
  );
};
