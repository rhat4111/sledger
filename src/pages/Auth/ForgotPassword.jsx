import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "components/Common/Base";

import EmailIcon from "assets/images/icons/envelope.svg";
import PasswordIcon from "assets/images/icons/lock.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const handleChange = (ev) => setEmail(ev.target.value);
  const handleRecoverPassword = () => {
    navigate("/auth/verify-otp");
  };

  return (
    <div>
      <p className="font-semibold text-xl lg:text-[27px] leading-7 lg:leading-9 mb-4 lg:mb-[18px]">
        Forgot Password
      </p>
      <p className="font-light text-sm lg:text-[17px] opacity-80 leading-5 lg:leading-7 mb-[35px] lg:mb-12">
        Enter your registered email to receive a reset link for your password
      </p>
      <TextField
        name="email"
        label="Email Address"
        color="dark"
        icon={EmailIcon}
        placeholder="Mist4227s@gmail.com"
        value={email}
        onChange={handleChange}
        className="mb-[130px]"
      />
      <div className="fixed w-full lg:relative left-0 right-0 bottom-0 py-10 lg:py-0 px-6 lg:px-0 bg-layout-auth">
        <div className="w-full max-w-[420px] mx-auto">
          <Button
            size="large"
            fullWidth
            icon={PasswordIcon}
            onClick={handleRecoverPassword}
          >
            Recover Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
