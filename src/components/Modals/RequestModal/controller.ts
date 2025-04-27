import { useState } from "react";
import { TForm } from "./types";
import { t } from "@/localization";

export const useController = () => {
  const [requestForm, setRequestForm] = useState<TForm>({
    assetName: "",
    email: "",
    reason: "",
    username: "",
  });

  // Form fields for the request modal
  const FORM_FIELDS = [
    {
      id: "username",
      name: "username",
      placeholder: t.requestForm.placeholder.username,
    },
    {
      id: "email",
      name: "email",
      placeholder: t.requestForm.placeholder.email,
    },
    {
      id: "assetName",
      name: "Asset Name",
      placeholder: t.requestForm.placeholder.assetName,
    },
    {
      id: "reason",
      name: "reason",
      placeholder: t.requestForm.placeholder.reason,
    },
  ];

  // Update form fields
  const handleRequestFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: keyof TForm
  ) => {
    setRequestForm((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  return {
    requestForm,
    handleRequestFormChange,
    FORM_FIELDS,
  };
};
