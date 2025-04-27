import { TController } from "./types";

export const useController = ({ index }: TController) => {
  // Show highlight for the first item
  const showHighlight = index === 0;

  return { showHighlight };
};
