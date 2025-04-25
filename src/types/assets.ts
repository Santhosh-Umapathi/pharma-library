export type TAsset = {
  id: string;
  name: string;
  description: string;
  type: string;
  isFeatured: boolean;
  isTrending: boolean;
  isAuthorized: boolean;
  isFavorite: boolean;
  lastUpdated: string | null;
  data: TData;
};

export type TData = {
  name: string;
  type: string;
  shortDescription: string;
  link: string;
  longDescription: string;
  tags: TTag[];
  metrics: TMetric[];
  businessQuestions: TBusinessQuestion[];
};

type TBusinessQuestion = {
  id: string;
  question: string;
  description: string;
};

type TMetric = {
  id: string;
  name: string;
  value: number | string;
};

type TTag = {
  id: string;
  value: string;
};
