import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/Common/Base";

import LoginIcon from "assets/images/icons/login.svg";
import SuccessfullyImage from "assets/images/auth/account-created.png";

const AccountCreated = () => {
  return (
    <div>
      <div className="px-5 lg:px-0 mb-11 lg:mb-8">
        <img
          src={SuccessfullyImage}
          className="w-full max-w-auto"
          alt="successfully"
        />
      </div>
      <p className="font-semibold text-[19px] lg:text-[27px] leading-7 lg:leading-10 text-center mb-[14px] lg:mb-[18px]">
        Account Created
      </p>
      <p className="font-light text-xs lg:text-[17px] leading-5 lg:leading-7 text-center mb-0 lg:mb-[150px]">
        You've joined a fruitful trading journey with loads of other people
      </p>
      <div className="fixed w-full lg:relative left-0 right-0 bottom-0 py-10 lg:py-0 px-6 lg:px-0 bg-layout-auth">
        <div className="w-full max-w-[420px] mx-auto">
          <Button size="large" icon={LoginIcon} fullWidth>
            <Link
              to="/auth/login"
              className="w-full h-full flex items-center justify-center"
            >
              Login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreated;
