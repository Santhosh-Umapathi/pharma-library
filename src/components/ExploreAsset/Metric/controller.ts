import { formatDate } from "@/helpers";
import { TController } from "./types";

export const useController = ({ id, value, index }: TController) => {
  // Format date for metric-4
  const date = id === "metric-4" ? formatDate(value as string) : value;

  // Show only for 1st and 3rd metric
  const showInfoIcon = id === "metric-1" || id === "metric-3";
  // Show left border if not the first metric
  const showRightBorder = index === 0;

  return { date, showInfoIcon, showRightBorder };
};
