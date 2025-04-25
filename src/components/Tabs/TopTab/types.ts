import { TSelectedTab } from "@/store/library/types";

export type TProps = {
  id: TSelectedTab;
  label: string;
};

export type TController = {
  id: TProps["id"];
};
