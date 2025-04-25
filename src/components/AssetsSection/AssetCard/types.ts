export type TProps = {
  id: string;
  icon: string;
  title: string;
  description: string;
  date: string | null;
  showBg?: boolean;
};

export type TController = {
  date: TProps["date"];
  showBg?: TProps["showBg"];
};
