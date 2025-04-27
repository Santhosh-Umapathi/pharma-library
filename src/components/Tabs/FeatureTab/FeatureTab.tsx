import { AssetSection } from "@/components/AssetsSection";
import { Modal } from "@/components/Modals/Modal";
import { ShowMore } from "@/components/ShowMore";
import { useController } from "./controller";

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
        }}
      >
        <div>Asset Modal</div>
        {/* <RequestModal /> */}
      </Modal>
    </>
  );
};
