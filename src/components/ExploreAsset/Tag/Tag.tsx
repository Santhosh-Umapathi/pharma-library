import { TProps } from "./types";

export const Tag = ({ id, value }: TProps) => {
  return (
    <span
      key={id}
      id={`tag-${id}`}
      className="text-sm bg-bgSecondary px-2 py-1 rounded-md mr-2 shadow-sm"
    >
      #{value}
    </span>
  );
};
