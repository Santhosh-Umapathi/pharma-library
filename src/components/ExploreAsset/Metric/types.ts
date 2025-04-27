import { TMetric } from "@/types/assets";

export type TProps = TMetric & {
  index: number;
};

export type TController = Omit<TProps, "name">;
