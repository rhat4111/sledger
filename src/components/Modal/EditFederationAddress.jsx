import React from "react";
import { Button, Modal, TextField } from "components/Common/Base";

const EditFederationAddress = ({ show, onClose }) => {
  const handleSave = () => {
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose} className="max-w-[690px]">
      <div className="flex flex-col items-center text-black mb-8 lg:mb-14">
        <p className="font-semibold text-base lg:text-[27px] leading-6 lg:leading-10 mb-1.5 lg:mb-2.5 text-center">
          Edit Federation Address
        </p>
        <p className="text-[11px] lg:text-[17px] leading-4 lg:leading-6 opacity-30 text-center">
          Check your federation address or change it to new one
        </p>
      </div>
      <div>
        <TextField
          label="Federation Address"
          placeholder="Enter Federation Address"
          className="mb-10 lg:mb-16"
        />
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
            Cancel
          </Button>
        </div>
        <div className="w-1/2 px-1.5 lg:px-3">
          <Button size="large" fullWidth onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditFederationAddress;
