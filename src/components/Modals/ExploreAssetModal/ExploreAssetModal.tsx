"use client";
import { GridIcon } from "@/components/icons";
import { useController } from "./controller";
import { t } from "@/localization";
import { BusinessQuestion, Metric, Tag } from "@/components/ExploreAsset";

const ICONS = {
  layout: (
    <GridIcon className="flex w-16 h-16 text-gray-500 justify-center items-center" />
  ),
};

export const ExploreAssetModal = () => {
  const { asset, title, showTags, showMetrics, showBusinessQuestions } =
    useController();

  return (
    <div
      className="flex flex-col gap-4 w-full p-4 items-center"
      id="explore-asset-modal"
    >
      <div className="flex justify-center items-center p-8 bg-bgSecondary rounded-lg">
        {ICONS[asset?.data.type as keyof typeof ICONS]}
      </div>
      <div className="flex flex-col mt-4 gap-2 items-center">
        <div className="flex gap-2 items-center justify-center">
          <span className="text-4xl font-bold">
            {asset?.data.name.toUpperCase()}
          </span>
          <span className="text-lg bg-bgSecondary px-2 rounded-sm">
            {title}
          </span>
        </div>
        <span className="">{asset?.data.shortDescription}</span>
      </div>
      <span className="text-center mt-4 text-lg">
        {asset?.data.longDescription}
      </span>
      {/* Show Tags */}
      {showTags && (
        <div className="mt-2" id="tags">
          {asset?.data.tags.map((tag) => (
            <Tag key={tag.id} {...tag} />
          ))}
        </div>
      )}
      {/* Show Metrics */}
      {showMetrics && (
        <div
          className="mt-14 flex justify-between items-center w-full"
          id="metrics"
        >
          {asset?.data.metrics.map((metric, index) => (
            <Metric key={metric.id} {...metric} index={index} />
          ))}
        </div>
      )}
      {/* Image placeholder */}
      <div
        id="image-placeholder"
        className="flex w-full min-h-[400px] bg-bgSecondary mt-4 rounded-lg"
      />
      {/* Business Questions */}
      {showBusinessQuestions && (
        <div id="business-questions" className="flex mt-4 flex-col w-full">
          <span className="text-2xl font-bold">
            {t.assetModal.businessQuestions}
          </span>
          <div className="flex flex-wrap gap-4 mt-2">
            {asset?.data.businessQuestions.map((question, index) => (
              <BusinessQuestion key={question.id} {...question} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
