import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import BackIcon from "assets/images/icons/back.svg";
import { IconButton } from "components/Common/Base";

const WalletLayout = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="relative min-h-screen">
      <div className="absolute w-full h-full bg-black opacity-40"></div>
      <div className="relative min-h-screen flex items-center justify-center z-10 pt-28 pb-12 lg:py-[120px] px-6">
        <div className="absolute w-full top-0 left-0 flex justify-between items-center py-10 lg:py-14 px-6 lg:px-15">
          <IconButton
            icon={BackIcon}
            onClick={handleBack}
            className="w-9 lg:w-12 h-9 lg:h-12"
          />
          <Link to="/" className="font-light text-sm lg:text-xl text-white">
            Skip to Homepage
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default WalletLayout;
