import { CloseIcon, FavoriteIcon, LinkIcon } from "@/components/icons";
import { TProps } from "./types";
import { useController } from "./controller";

export const Modal = ({
  children,
  showModal,
  closeModal,
  footerButtonHandler,
  footerButtonText,
  showLink = false,
  className,
  footerButtonClassName,
  footerButtonIcon = false,
}: TProps) => {
  useController({ showModal });

  // Hide modal
  if (!showModal) return null;

  // Show modal
  return (
    <div
      className={`flex fixed top-0 w-full h-full z-50 justify-center items-start bg-black/10 overflow-y-scroll py-20 ${className}`}
    >
      {/* Modal inside BG Overlay */}
      <div className="flex flex-col items-center w-2/3 bg-white shadow-lg rounded-lg p-4 relative">
        {/* Close Icon */}
        <div className="flex absolute top-4 right-4 items-center justify-center">
          {showLink && (
            <LinkIcon className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity duration-300 mr-2" />
          )}
          <CloseIcon
            className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity duration-300"
            onClick={closeModal}
          />
        </div>
        <div className="flex flex-col gap-12 w-full h-full justify-center items-center">
          {/* Modal Contents */}
          {children}
          {/* Footer */}
          <button
            className={`bg-buttonSecondary text-white p-4 rounded-lg hover:opacity-70 transition-opacity duration-300 cursor-pointer w-60 ${footerButtonClassName}`}
            type="button"
            onClick={footerButtonHandler}
          >
            {footerButtonIcon && (
              <FavoriteIcon className="w-5 h-5 mr-2 inline-block" />
            )}
            {footerButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};
