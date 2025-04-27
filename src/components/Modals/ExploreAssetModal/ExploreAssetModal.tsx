import { GridIcon, InfoIcon } from "@/components/icons";
import { useController } from "./controller";
import { formatDate } from "@/helpers/data";
import { t } from "@/localization";

const ICONS = {
  layout: (
    <GridIcon className="flex w-16 h-16 text-gray-500 justify-center items-center" />
  ),
};

export const ExploreAssetModal = () => {
  const { asset, title, showTags, showMetrics } = useController();

  return (
    <div className="flex flex-col gap-4 w-full p-4 items-center">
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
            <span
              key={tag.id}
              id={`tag-${tag.id}`}
              className="text-sm bg-bgSecondary px-2 py-1 rounded-md mr-2 shadow-sm"
            >
              #{tag.value}
            </span>
          ))}
        </div>
      )}
      {/* Show Metrics */}
      {showMetrics && (
        <div
          className="mt-14 flex justify-between items-center w-full"
          id="metrics"
        >
          {asset?.data.metrics.map((metric, index) => {
            return (
              <div
                key={metric.id}
                id={`metric-${metric.id}`}
                className={`flex flex-col gap-1 items-center w-full ${
                  index === 0 ? "border-l-0" : "border-l-1 "
                } border-gray-300`}
              >
                <span className="font-bold text-lg">
                  {metric.id === "metric-4"
                    ? formatDate(metric.value as string)
                    : metric.value}
                </span>
                <span className="flex gap-1 items-center text-sm">
                  {metric.name}
                  {(metric.id === "metric-1" || metric.id === "metric-3") && (
                    <InfoIcon className="text-gray-500" />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      )}

      <div
        id="image-placeholder"
        className="flex w-full min-h-[400px] bg-bgSecondary mt-4 rounded-lg"
      />

      <div id="business-questions" className="flex mt-4 flex-col w-full">
        <span className="text-2xl font-bold">
          {t.assetModal.businessQuestions}
        </span>
        <div className="flex flex-wrap gap-4 mt-2">
          {asset?.data.businessQuestions.map((question, index) => (
            <div
              key={question.id}
              id={`question-${question.id}`}
              className={`flex flex-col gap-2 hover:bg-bgSecondary p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                index === 0 ? "bg-bgSecondary" : ""
              }`}
            >
              <span className="font-bold text-lg">{question.question}</span>
              <span className="text-lg">{question.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
