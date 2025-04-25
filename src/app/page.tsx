import { HeaderSection } from "@/components/HeaderSection";
import { SearchBar } from "@/components/SearchBar";
import { t } from "@/localization";

const Home = () => {
  return (
    <div className="flex bg-bgPrimary w-screen flex-col items-center px-60 py-10 h-screen">
      <HeaderSection
        title={t.header.title}
        description={t.header.description}
      />
      <SearchBar />
    </div>
  );
};

export default Home;
