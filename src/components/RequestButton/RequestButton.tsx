"use client";
import { t } from "@/localization";
import { useController } from "./controller";
import { RequestIcon } from "@/components/icons";
import { Modal, RequestModal } from "@/components/Modals";

export const RequestButton = () => {
  const { onClick, closeModal, footerButtonText, showRequestModal } =
    useController();

  return (
    <>
      {/* Request Button */}
      <button
        id="request-button"
        className="flex bg-buttonPrimary text-white rounded-lg hover:opacity-70 transition-opacity duration-300 cursor-pointer absolute top-4 right-4 items-center justify-center
        w-20 p-2 text-xs
        sm:w-28 sm:text-sm
        md:w-40 md:p-3 md:text-base
        "
        type="button"
        onClick={onClick}
      >
        <RequestIcon className="mr-2" />
        {t.requestButton.buttonText}
      </button>

      {/* Request Modal */}
      <Modal
        {...{
          closeModal,
          footerButtonHandler: closeModal,
          footerButtonText,
          showModal: showRequestModal,
          className: "items-center! overflow-hidden!",
          title: t.requestForm.title,
        }}
      >
        <RequestModal />
      </Modal>
    </>
  );
};
