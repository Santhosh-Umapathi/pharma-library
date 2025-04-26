import { CloseIcon } from "../icons";
import { useController } from "./controller";

export const Modal = () => {
  const { showRequestModal, closeModal } = useController();

  // Hide modal
  if (!showRequestModal) return null;

  // Show modal
  return (
    <div className="flex fixed top-0 left-0 right-0 bottom-0 z-100 justify-center items-center bg-black/10">
      <div className="flex flex-col justify-center items-center w-2/3 h-2/3 bg-white shadow-lg rounded-lg p-4 relative">
        <div className="flex absolute top-4 right-4">
          <CloseIcon
            className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity duration-300"
            onClick={closeModal}
          />
        </div>
        Modal
      </div>
    </div>
  );
};
