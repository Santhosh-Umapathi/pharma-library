import { t } from "@/localization";
import { useController } from "./controller";

export const ShowMore = () => {
  const { handleShowMore, showMore, scrollToTop } = useController();

  return (
    <div
      className="flex flex-col items-center justify-center w-full p-8 mt-10"
      id="show-more"
    >
      {!showMore ? (
        // Show the button if showMore is false
        <button
          className="bg-buttonSecondary text-white p-4 rounded-lg hover:opacity-70 transition-opacity duration-300 cursor-pointer"
          type="button"
          onClick={handleShowMore}
        >
          {t.showMore.buttonText}
        </button>
      ) : (
        // Show the message if showMore is true - Mocking end of results
        <div
          className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity duration-300"
          onClick={scrollToTop}
        >
          <span>{t.showMore.notSeeing}</span>
          <span className="text-xl font-bold animate-bounce ml-4">↑</span>
        </div>
      )}
    </div>
  );
};
