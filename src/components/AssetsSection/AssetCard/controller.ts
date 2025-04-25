import { TController } from "./types";

export const useController = ({ date }: TController) => {
  // Format the date to a more readable format
  const dateText = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "";

  return {
    dateText,
  };
};
