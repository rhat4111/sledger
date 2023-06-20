import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "components/Common/Base";

import EmailIcon from "assets/images/icons/envelope.svg";
import GoogleIcon from "assets/images/icons/google.svg";
import PasswordIcon from "assets/images/icons/lock.svg";
import SignUpIcon from "assets/images/icons/signup.svg";
import UserIcon from "assets/images/icons/user-1.svg";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (ev) => {
    setUserInfo({ ...userInfo, [ev.target.name]: ev.target.value });
  };
  const handleSignUp = () => {};

  return (
    <div>
      <p className="font-semibold text-xl lg:text-[27px] leading-7 lg:leading-9 mb-4 lg:mb-[18px]">
        Create New Account
      </p>
      <p className="font-light text-sm lg:text-[17px] opacity-80 leading-5 lg:leading-7 mb-[35px] lg:mb-12">
        Create a new account to start managing and increase your assets today.
      </p>
      <Button
        icon={GoogleIcon}
        size="large"
        className="bg-[#FFFFFF20] text-[#FFFFFF90] font-light text-base lg:text-xl mb-14 lg:mb-10"
        fullWidth
      >
        Sign up using Google
      </Button>
      <TextField
        name="name"
        label="Full Name"
        icon={UserIcon}
        color="dark"
        placeholder="Khalid Saied Abdelmonem"
        value={userInfo.name}
        onChange={handleChange}
        className="mb-[30px]"
      />
      <TextField
        type="email"
        name="email"
        label="Email Address"
        color="dark"
        icon={EmailIcon}
        placeholder="Mist4227s@gmail.com"
        value={userInfo.email}
        onChange={handleChange}
        className="mb-[30px]"
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        color="dark"
        icon={PasswordIcon}
        placeholder="* * * * * * * * * *"
        value={userInfo.password}
        onChange={handleChange}
        className="mb-[30px]"
      />
      <TextField
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        color="dark"
        icon={PasswordIcon}
        placeholder="* * * * * * * * * *"
        value={userInfo.confirmPassword}
        onChange={handleChange}
        className="mb-0 lg:mb-12"
      />
      <div className="fixed w-full lg:relative left-0 right-0 bottom-0 py-10 lg:py-0 px-6 lg:px-0 bg-layout-auth">
        <div className="w-full max-w-[420px] mx-auto">
          <Button
            size="large"
            icon={SignUpIcon}
            fullWidth
            onClick={handleSignUp}
          >
            <Link
              to="/auth/account-created"
              className="w-full h-full flex items-center justify-center"
            >
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
