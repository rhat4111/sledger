import React from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { IconButton } from "components/Common/Base";

import Slider from "./Slider";
import BackIcon from "assets/images/icons/back.svg";

const AuthLayout = () => {
  const navigate = useNavigate();
  const handleback = () => navigate(-1);
  const location = useLocation();
  const isLoginPage = location.pathname === "/auth/login";

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 hidden lg:flex">
        <Slider />
      </div>
      <div className="w-full h-screen lg:w-1/2 bg-layout-auth text-white relative overflow-y-auto px-6">
        {!isLoginPage && (
          <IconButton
            icon={BackIcon}
            onClick={handleback}
            className="hidden lg:flex absolute top-8 2xl:top-14 left-8 2xl:left-14"
          />
        )}
        <div
          className={`w-full max-w-[420px] mx-auto flex min-h-screen items-start lg:items-center justify-center pt-[68px] ${
            isLoginPage ? `pb-[200px]` : `pb-[130px]`
          } lg:py-[110px]`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
