import { HeaderSection } from "@/components/HeaderSection";
import { SearchBar } from "@/components/SearchBar";
import { TopTabs } from "@/components/Tabs/TopTabs";
import { t } from "@/localization";
import { AssetSection } from "@/components/AssetsSection";
import { useLibraryStore } from "@/store";

const Home = async () => {
  const setInitialData = useLibraryStore.getState().setInitialData;
  setInitialData();

  return (
    <div className="flex bg-bgPrimary w-screen flex-col items-center px-60 py-10">
      <HeaderSection
        title={t.header.title}
        description={t.header.description}
      />
      <SearchBar />
      <TopTabs />
      <AssetSection />
    </div>
  );
};

export default Home;
