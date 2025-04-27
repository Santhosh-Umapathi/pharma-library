import { AssetSection } from "@/components/AssetsSection";
import { Modal } from "@/components/Modals/Modal";
import { ShowMore } from "@/components/ShowMore";
import { useController } from "./controller";
import { ExploreAssetModal } from "@/components/Modals/ExploreAssetModal";

export const FeatureTab = () => {
  const { closeModal, footerButtonText, showAssetModal } = useController();

  return (
    <>
      <AssetSection />
      <ShowMore />
      {/* Explore Asset Modal */}
      <Modal
        {...{
          closeModal,
          footerButtonHandler: closeModal,
          footerButtonText,
          showModal: showAssetModal,
          showLink: true,
          footerButtonClassName: "w-full",
          footerButtonIcon: true,
        }}
      >
        <ExploreAssetModal />
      </Modal>
    </>
  );
};
