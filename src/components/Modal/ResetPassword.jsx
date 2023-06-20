import React from "react";
import { Button, Modal, TextField } from "components/Common/Base";

const ResetPassword = ({ show, onClose }) => {
  const handleSave = () => {
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose} className="max-w-[690px]">
      <div className="flex flex-col items-center text-black mb-9 lg:mb-12">
        <p className="font-semibold text-base lg:text-[27px] leading-6 lg:leading-10 mb-1.5 lg:mb-2.5 text-center">
          Reset Password
        </p>
        <p className="text-[11px] lg:text-[17px] leading-4 lg:leading-6 opacity-30 text-center">
          Change your password in order to proceed
        </p>
      </div>
      <div>
        <TextField
          type="password"
          label="Current Password"
          className="mb-[26px]"
        />
        <TextField type="password" label="New Password" className="mb-[26px]" />
        <TextField
          type="password"
          label="Confirm New Password"
          className="mb-10"
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
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ResetPassword;
