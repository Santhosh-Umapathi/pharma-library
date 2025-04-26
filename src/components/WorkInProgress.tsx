import { t } from "@/localization";

export const WorkInProgress = () => (
  <div className="flex flex-col items-center justify-center w-full my-40">
    <span className="text-2xl font-bold">{t.workInProgress.title}</span>
    <span className="text-lg mt-8">{t.workInProgress.description}</span>
  </div>
);
