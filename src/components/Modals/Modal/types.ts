export type TProps = {
  children: React.ReactNode;
  showModal: boolean;
  closeModal: () => void;
  footerButtonHandler: () => void;
  footerButtonText: string;
  footerButtonClassName?: string;
  showLink?: boolean;
  className?: string;
  footerButtonIcon?: boolean;
};

export type TController = {
  showModal: TProps["showModal"];
};
