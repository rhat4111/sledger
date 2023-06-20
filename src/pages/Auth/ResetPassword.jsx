import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "components/Common/Base";

import CheckIcon from "assets/images/icons/check.svg";
import PasswordIcon from "assets/images/icons/lock.svg";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState({
    new: "",
    confirm: "",
  });

  const handleChange = (ev) => {
    setPassword({ ...password, [ev.target.name]: ev.target.value });
  };
  const handleConfirm = () => {
    navigate("/auth/password-changed");
  };

  return (
    <div>
      <p className="font-semibold text-xl lg:text-[27px] leading-7 lg:leading-9 mb-4 lg:mb-[18px]">
        Reset Password
      </p>
      <p className="font-light text-sm lg:text-[17px] opacity-80 leading-5 lg:leading-7 mb-[35px] lg:mb-12">
        Create a new password to be able to access your account
      </p>
      <TextField
        type="password"
        name="new"
        label="New Password"
        color="dark"
        icon={PasswordIcon}
        placeholder="* * * * * * * * * *"
        value={password.new}
        onChange={handleChange}
        className="mb-8"
      />
      <TextField
        type="password"
        name="confirm"
        label="Confirm New Password"
        color="dark"
        icon={PasswordIcon}
        placeholder="* * * * * * * * * *"
        value={password.confirm}
        onChange={handleChange}
        className="mb-[125px]"
      />
      <div className="fixed w-full lg:relative left-0 right-0 bottom-0 py-10 lg:py-0 px-6 lg:px-0 bg-layout-auth">
        <div className="w-full max-w-[420px] mx-auto">
          <Button
            size="large"
            fullWidth
            icon={CheckIcon}
            onClick={handleConfirm}
          >
            Confirm New Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
