"use client";
import { Input } from "@/components/Input";
import { useController } from "./controller";
import { TForm } from "./types";

export const RequestModal = () => {
  const { handleRequestFormChange, requestForm, FORM_FIELDS } = useController();

  return (
    <div
      className="flex flex-col gap-4 
    w-full
    sm:w-2/3
    md:w-1/2
    "
    >
      {FORM_FIELDS.map(({ id, placeholder }) => {
        const formId = id as keyof TForm;
        return (
          <Input
            key={id}
            placeholder={placeholder}
            value={requestForm[formId]}
            onChange={(e) => handleRequestFormChange(e, formId)}
          />
        );
      })}
    </div>
  );
};
