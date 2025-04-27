import { t } from "@/localization";

export const WorkInProgress = () => (
  <div className="flex flex-col items-center justify-center w-full my-40">
    <span
      className="font-bold
      text-xl
    md:text-2xl
    "
    >
      {t.workInProgress.title}
    </span>
    <span
      className="
      text-base mt-4
    md:text-lg md:mt-8
    "
    >
      {t.workInProgress.description}
    </span>
  </div>
);
