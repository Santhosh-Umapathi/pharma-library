import { TSelectedTab } from "@/store/library/types";
import { TFeatured } from "@/types/featured";
import { TTrending } from "@/types/trending";

export type TProps = {
  featured: TFeatured;
  trending: TTrending;
};

export type TTabComponentProps = {
  featured: TProps["featured"];
  trending: TProps["trending"];
};

export type TTabComponents = {
  [key in TSelectedTab]: (props: TTabComponentProps) => React.ReactNode;
};
