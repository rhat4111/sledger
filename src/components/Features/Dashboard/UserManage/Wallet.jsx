import React, { useState } from "react";
import { Button, IconButton } from "components/Common/Base";
import RemoveStellarAccount from "components/Modal/RemoveStellarAccount";
import EditFederationAddress from "components/Modal/EditFederationAddress";
import SecretKey from "components/Modal/SecretKey";
import Copy from "assets/images/icons/copy-address.svg";
import Edit from "assets/images/icons/edit.svg";
import View from "assets/images/icons/view.svg";

const Wallet = () => {
  const [isOpenRemoveStellarAccountModal, setIsOpenRemoveStellarAccountModal] =
    useState(false);
  const [isOpenSecretKeyModal, setIsOpenSecretKeyModal] = useState(false);
  const [
    isOpenEditFederationAddressModal,
    setIsOpenEditFederationAddressModal,
  ] = useState(false);

  const handleToggleRemoveStellarAccountModal = () =>
    setIsOpenRemoveStellarAccountModal(!isOpenRemoveStellarAccountModal);
  const handleToggleSecretKeyModal = () =>
    setIsOpenSecretKeyModal(!isOpenSecretKeyModal);
  const handleToggleEditFederationModal = () =>
    setIsOpenEditFederationAddressModal(!isOpenEditFederationAddressModal);

  return (
    <>
      <div className="font-light leading-normal text-white">
        <div className="flex items-center justify-between px-[18px] lg:px-8 pt-2.5 pb-4 lg:py-6 bg-[#636363] dark:bg-card-dark rounded-lg mb-[14px] lg:mb-6">
          <div>
            <p className="text-[11px] lg:text-lg opacity-75 mb-1 lg:mb-2.5">
              Stellar Account
            </p>
            <p className="text-[11px] lg:text-xl">
              Account holds all your funds on stellar network
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between px-[18px] lg:px-8 pt-2.5 pb-4 lg:py-6 bg-[#636363] dark:bg-card-dark rounded-lg mb-[14px] lg:mb-6">
          <div className="overflow-hidden">
            <p className="text-[11px] lg:text-lg opacity-75 mb-1 lg:mb-2.5">
              Stellar Address
            </p>
            <p className="text-[11px] lg:text-xl w-full max-w-[240px]">
              GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS
            </p>
          </div>
          <IconButton
            className="flex-shrink-0"
            iconClassName="w-7 lg:w-12 h-7 lg:h-12"
            icon={Copy}
          />
        </div>
        <div className="flex items-center justify-between px-[18px] lg:px-8 pt-2.5 pb-4 lg:py-6 bg-[#636363] dark:bg-card-dark rounded-lg mb-[14px] lg:mb-6">
          <div>
            <p className="text-[11px] lg:text-lg opacity-75 mb-1 lg:mb-2.5">
              Federation Address
            </p>
            <p className="text-[11px] lg:text-xl">Adrix-Lobstr.co</p>
          </div>
          <IconButton
            className="flex-shrink-0"
            iconClassName="w-7 lg:w-12 h-7 lg:h-12"
            icon={Edit}
            onClick={handleToggleEditFederationModal}
          />
        </div>
        <div className="flex items-center justify-between px-[18px] lg:px-8 pt-2.5 pb-4 lg:py-6 bg-[#636363] dark:bg-card-dark rounded-lg mb-[14px] lg:mb-6">
          <div>
            <p className="text-[11px] lg:text-lg opacity-75 mb-1 lg:mb-2.5">
              Secret Key
            </p>
            <p className="text-[11px] lg:text-xl">
              Your Secret Key is Hidden - Verify to Reveal
            </p>
          </div>
          <IconButton
            className="flex-shrink-0"
            iconClassName="w-7 lg:w-12 h-7 lg:h-12"
            icon={View}
            onClick={handleToggleSecretKeyModal}
          />
        </div>
        <div className="flex items-center justify-between px-[18px] lg:px-8 pt-2.5 pb-4 lg:py-6 bg-[#636363] dark:bg-card-dark rounded-lg mb-10 lg:mb-20">
          <div>
            <p className="text-[11px] lg:text-lg opacity-75 mb-1 lg:mb-2.5">
              Currency
            </p>
            <p className="text-[11px] lg:text-xl">USD - US Dollar</p>
          </div>
          <button className="text-[11px] lg:text-xl text-lightprimary">
            Change Currency
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <Button
            size="large"
            className="!w-full lg:!w-[298px] mb-3 lg:mb-0"
            color="danger"
            onClick={handleToggleRemoveStellarAccountModal}
          >
            Remove Stellar Account
          </Button>
          <Button size="large" className="!w-full lg:!w-[298px]">
            Save Current Changes
          </Button>
        </div>
      </div>
      <RemoveStellarAccount
        show={isOpenRemoveStellarAccountModal}
        onClose={handleToggleRemoveStellarAccountModal}
      />
      <SecretKey
        show={isOpenSecretKeyModal}
        onClose={handleToggleSecretKeyModal}
      />
      <EditFederationAddress
        show={isOpenEditFederationAddressModal}
        onClose={handleToggleEditFederationModal}
      />
    </>
  );
};

export default Wallet;
