import { t } from "@/localization";
import { TopTab } from "@/components/Tabs";
import { TSelectedTab } from "@/store/library/types";

export const TopTabs = () => {
  return (
    <div
      id="top-tabs"
      className="flex items-center w-full mt-10 bg-bgSecondary rounded-lg"
    >
      {t.tabs.map(({ id, label }) => (
        <TopTab key={id} {...{ id: id as TSelectedTab, label }} />
      ))}
    </div>
  );
};
