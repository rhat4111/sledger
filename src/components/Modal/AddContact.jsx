import React from "react";
import { Button, Modal, TextField } from "components/Common/Base";
import User from "assets/images/icons/user-outline.svg";

const AddContact = ({ show, onClose }) => {
  const handleSave = () => {
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose} className="max-w-[690px]">
      <div className="flex flex-col items-center text-black mb-8 lg:mb-12">
        <p className="font-semibold text-base lg:text-[27px] leading-6 lg:leading-10 mb-1.5 lg:mb-2.5 text-center">
          Add Contact
        </p>
        <p className="text-[11px] lg:text-[17px] leading-4 lg:leading-6 opacity-30 text-center">
          Fill the info below in order to add a new contact
        </p>
      </div>
      <div>
        <TextField
          label="Account"
          placeholder="Enter Public Key or Federation Address"
          className="mb-4 lg:mb-[26px]"
        />
        <TextField
          label="Co ntact Name"
          placeholder="Enter User Name"
          className="mb-8 lg:mb-16"
        />
      </div>
      <Button size="large" fullWidth onClick={handleSave} icon={User}>
        Add Contact
      </Button>
    </Modal>
  );
};

export default AddContact;
