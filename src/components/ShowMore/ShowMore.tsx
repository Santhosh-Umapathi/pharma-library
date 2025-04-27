import { t } from "@/localization";
import { useController } from "./controller";

export const ShowMore = () => {
  const { handleShowMore, showMore, scrollToTop } = useController();

  return (
    <div
      className="flex flex-col items-center justify-center w-full 
      p-4 mt-5
      md:p-8 md:mt-10
      "
      id="show-more"
    >
      {!showMore ? (
        // Show the button if showMore is false
        <button
          className="bg-buttonSecondary text-white rounded-lg hover:opacity-70 transition-opacity duration-300 cursor-pointer
          p-3 text-sm
          md:p-4 md:text-base
          "
          type="button"
          onClick={handleShowMore}
        >
          {t.showMore.buttonText}
        </button>
      ) : (
        // Show the message if showMore is true - Mocking end of results
        <div
          className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity duration-300
          text-sm
          md:text-base
          "
          onClick={scrollToTop}
        >
          <span>{t.showMore.notSeeing}</span>
          <span
            className="font-bold animate-bounce
          text-lg ml-2
          md:text-xl md:ml-4
          "
          >
            ↑
          </span>
        </div>
      )}
    </div>
  );
};
