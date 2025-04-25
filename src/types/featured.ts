import { TAsset } from "./assets";

export type TFeatured = Omit<TAsset, "data">[];
