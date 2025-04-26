"use client";
import { t } from "@/localization";
import { useController } from "./controller";
import { RequestIcon } from "../icons";
import { Modal } from "../Modal";

export const RequestButton = () => {
  const { onClick } = useController();
  return (
    <>
      <button
        id="request-button"
        className="flex bg-buttonPrimary text-white p-3 rounded-lg hover:opacity-70 transition-opacity duration-300 cursor-pointer absolute top-4 right-4 w-40 items-center justify-center"
        type="button"
        onClick={onClick}
      >
        <RequestIcon className="mr-2" />
        {t.requestButton.buttonText}
      </button>
      <Modal />
    </>
  );
};
