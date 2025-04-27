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
      className={`flex flex-col gap-2 hover:bg-bgSecondary rounded-lg cursor-pointer transition-all duration-200 ${
        showHighlight ? "bg-bgSecondary" : ""
      }
        p-2 w-full
        md:p-4 
        lg:w-[45%]
      `}
    >
      <span
        className="font-bold 
        text-base
        md:text-lg
        "
      >
        {question}
      </span>
      <span
        className="
        text-base 
        md:text-lg
        "
      >
        {description}
      </span>
    </div>
  );
};
