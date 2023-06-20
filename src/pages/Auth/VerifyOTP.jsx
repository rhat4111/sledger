import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Common/Base";
import OtpInput from "react-otp-input";

import SecurityIcon from "assets/images/icons/security.svg";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const handleChange = (value) => setOtp(value);
  const navigate = useNavigate();
  const handleVerifyOTP = () => {
    navigate("/auth/reset-password");
  };

  return (
    <div>
      <p className="font-semibold text-xl lg:text-[27px] leading-7 lg:leading-9 mb-4 lg:mb-[18px]">
        Verification Sent
      </p>
      <p className="font-light text-sm lg:text-[17px] opacity-80 leading-5 lg:leading-7 mb-[35px] lg:mb-12">
        Enter the 4 digits code sent to the your registered email address to
        verify
      </p>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        containerStyle="justify-between mb-28"
        placeholder="0000"
        inputStyle="!w-14 lg:!w-16 h-17 lg:h-18 bg-transparent border-b opacity-50 outline-none text-[25px] lg:text-[32px]"
        focusStyle="!opacity-100"
      />
      <div className="fixed w-full lg:relative left-0 right-0 bottom-0 py-10 lg:py-0 px-6 lg:px-0 bg-layout-auth">
        <div className="w-full max-w-[420px] mx-auto">
          <p className="text-xs lg:text-base leading-[18px] lg:leading-6 text-center mb-[18px] lg:mb-5">
            You will be able to resend in 01 : 60
          </p>
          <Button
            size="large"
            fullWidth
            icon={SecurityIcon}
            onClick={handleVerifyOTP}
          >
            Verify OTP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
