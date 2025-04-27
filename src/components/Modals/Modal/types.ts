export type TProps = {
  children: React.ReactNode;
  showModal: boolean;
  closeModal: () => void;
  footerButtonHandler: () => void;
  footerButtonText: string;
};

export type TController = {
  showModal: TProps["showModal"];
};
