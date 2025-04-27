import { useController } from "./controller";
import { TProps } from "./types";

export const BusinessQuestion = ({
  id,
  index,
  question,
  description,
}: TProps) => {
  const { showHighlight } = useController({
    index,
  });

  return (
    <div
      id={`question-${id}`}
      className={`flex flex-col gap-2 hover:bg-bgSecondary p-4 rounded-lg cursor-pointer transition-all duration-200 ${
        showHighlight ? "bg-bgSecondary" : ""
      }`}
    >
      <span className="font-bold text-lg">{question}</span>
      <span className="text-lg">{description}</span>
    </div>
  );
};
