import { useEffect } from "react";
import { TController } from "./types";

export const useController = ({ showModal }: TController) => {
  // Control body scrolling when modal is open/closed
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
};
