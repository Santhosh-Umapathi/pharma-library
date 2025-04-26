import { HeaderSection } from "@/components/HeaderSection";
import { SearchBar } from "@/components/SearchBar";
import { TabComponent } from "@/components/Tabs/TabComponent";
import { TopTabs } from "@/components/Tabs/TopTabs";
import { t } from "@/localization";
import { controller } from "./controller";

const Home = async () => {
  const { featured, trending } = await controller();

  return (
    <div className="flex bg-bgPrimary w-screen flex-col items-center px-60 py-10">
      <HeaderSection
        title={t.header.title}
        description={t.header.description}
      />
      <SearchBar />
      <TopTabs />
      <TabComponent {...{ featured, trending }} />
    </div>
  );
};

export default Home;
