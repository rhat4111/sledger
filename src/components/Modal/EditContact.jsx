import React, { useState } from "react";
import { Button, Modal, TextField } from "components/Common/Base";

const EditContact = ({ show, onClose }) => {
  const [info, setInfo] = useState({
    account: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    name: "Khalid Saied Abdelmonem",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose} className="max-w-[690px]">
      <div className="flex flex-col items-center text-black mb-8 lg:mb-12">
        <p className="font-semibold text-base lg:text-[27px] leading-6 lg:leading-10 mb-1.5 lg:mb-2.5 text-center">
          Edit Contact
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
          name="account"
          value={info.account}
          onChange={handleChange}
        />
        <TextField
          label="Contact Name"
          placeholder="Enter User Name"
          name="name"
          value={info.name}
          onChange={handleChange}
          className="mb-8 lg:mb-16"
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

export default EditContact;
