import React from "react";
import { Button, Modal, TextField } from "components/Common/Base";

const RemoveStellarAccount = ({ show, onClose }) => {
  const handleDelete = () => {
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose} className="max-w-[690px]">
      <div className="flex flex-col items-center text-black mb-6 lg:mb-12">
        <p className="font-semibold text-base lg:text-[27px] leading-6 lg:leading-10 mb-1.5 lg:mb-2.5 text-center">
          Remove Stellar Account
        </p>
        <p className="text-[11px] lg:text-[17px] leading-4 lg:leading-6 opacity-30 text-center">
          Are you sure you want to remove stellar account permanently, this
          can't be reversed
        </p>
      </div>
      <div>
        <TextField type="password" label="Enter Password" className="mb-8 lg:mb-14" />
      </div>
      <div className="flex flex-wrap -mx-1.5 lg:-mx-3">
        <div className="w-1/2 px-1.5 lg:px-3">
          <Button
            size="large"
            variant="outlined"
            color="black"
            fullWidth
            onClick={onClose}
          >
            No, Thanks
          </Button>
        </div>
        <div className="w-1/2 px-1.5 lg:px-3">
          <Button size="large" fullWidth color="danger" onClick={handleDelete}>
            Yes, Please
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveStellarAccount;
