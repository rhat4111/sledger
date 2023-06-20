import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, CheckBox, TextField } from "components/Common/Base";
import Context from "context";

import EmailIcon from "assets/images/icons/envelope.svg";
import PasswordIcon from "assets/images/icons/lock.svg";
import GoogleIcon from "assets/images/icons/google.svg";
import LoginIcon from "assets/images/icons/login.svg";
import SignUpIcon from "assets/images/icons/signup.svg";

const Login = () => {
  const { auth } = useContext(Context);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (ev) => {
    setUserInfo({ ...userInfo, [ev.target.name]: ev.target.value });
  };

  const handleLogin = () => {
    auth.login();
    navigate("/wallet/select");
  };

  return (
    <div>
      <p className="font-semibold text-xl lg:text-[27px] leading-7 lg:leading-9 mb-4 lg:mb-[18px]">
        Login
      </p>
      <p className="font-light text-sm lg:text-[17px] opacity-80 leading-5 lg:leading-7 mb-[35px] lg:mb-12">
        Login to start managing your assets and start monitoring updates.
      </p>
      <Button
        icon={GoogleIcon}
        size="large"
        className="bg-[#FFFFFF20] text-[#FFFFFF90] font-light text-base lg:text-xl mb-10"
        fullWidth
      >
        Sign in using Google
      </Button>
      <TextField
        type="email"
        name="email"
        label="Email Address"
        color="dark"
        icon={EmailIcon}
        placeholder="Mist4227s@gmail.com"
        value={userInfo.email}
        onChange={handleChange}
        className="mb-5 lg:mb-[30px]"
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
        className="mb-9 lg:mb-12"
      />
      <div className="flex justify-between items-center mb-0 lg:mb-24">
        <CheckBox
          label="Remember me"
          checked={rememberMe}
          color="dark"
          onChange={() => setRememberMe(!rememberMe)}
        />
        <Link
          to="/auth/forgot-password"
          className="font-semibold text-sm lg:text-[19px]"
        >
          Forgot Password
        </Link>
      </div>
      <div className="fixed w-full lg:relative left-0 right-0 bottom-0 py-10 lg:py-0 px-6 lg:px-0 bg-layout-auth">
        <div className="w-full max-w-[420px] mx-auto">
          <Button
            size="large"
            fullWidth
            icon={LoginIcon}
            className="mb-5 lg:mb-6"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="white"
            icon={SignUpIcon}
            fullWidth
          >
            <Link
              to="/auth/signup"
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

export default Login;
