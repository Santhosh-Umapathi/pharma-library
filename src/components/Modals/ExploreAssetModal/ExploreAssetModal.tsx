"use client";
import { GridIcon } from "@/components/icons";
import { useController } from "./controller";
import { t } from "@/localization";
import { BusinessQuestion, Metric, Tag } from "@/components/ExploreAsset";

const ICONS = {
  layout: (
    <GridIcon
      className="flex text-gray-500 justify-center items-center
    w-8 h-8
    md:w-16 md:h-16
    "
    />
  ),
};

export const ExploreAssetModal = () => {
  const { asset, type, showTags, showMetrics, showBusinessQuestions } =
    useController();

  return (
    <div
      className="flex flex-col gap-4 w-full items-center
      p-2 
      md:p-4"
      id="explore-asset-modal"
    >
      <div
        className="flex justify-center items-center bg-bgSecondary rounded-lg
        p-4
      md:p-8 
      "
      >
        {ICONS[asset?.data.type as keyof typeof ICONS]}
      </div>
      <div className="flex flex-col mt-4 gap-2 items-center">
        <div className="flex gap-2 items-center justify-center">
          <span
            className="font-bold
            text-2xl
          md:text-4xl 
          "
          >
            {asset?.data.name.toUpperCase()}
          </span>
          <span
            className="bg-bgSecondary px-2 rounded-sm
          text-sm
          md:text-lg 
          "
          >
            {type}
          </span>
        </div>
        <span
          className="
        text-xs
        md:text-base
        "
        >
          {asset?.data.shortDescription}
        </span>
      </div>
      <span
        className="text-center mt-4
      text-sm
      md:text-lg
      "
      >
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
          className="flex justify-between items-center w-full
          mt-4
          sm:mt-7
          md:mt-14           
          "
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
        className="flex w-full 
        min-h-[200px]
        md:min-h-[400px] 
        bg-bgSecondary mt-4 rounded-lg"
      />
      {/* Business Questions */}
      {showBusinessQuestions && (
        <div id="business-questions" className="flex mt-4 flex-col w-full">
          <span
            className="font-bold
            text-lg
          md:text-2xl 
          "
          >
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
