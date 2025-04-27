import { TBusinessQuestion } from "@/types/assets";

export type TProps = TBusinessQuestion & {
  index: number;
};

export type TController = { index: TProps["index"] };
