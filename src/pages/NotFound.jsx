import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import { Button } from "components/Common/Base";
import BackgroundImage from "assets/images/pages/404/bg.png";
import ErrorImage from "assets/images/pages/404/404.png";
import ManImage from "assets/images/pages/404/man.png";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="text-black dark:text-white">
      <div className="fixed z-20 w-full h-20 lg:h-[105px] top-0 left-0 flex items-center justify-between dark:bg-layout-topbar pl-12 pr-9">
        <Header />
      </div>
      <div className="px-6 py-20 lg:py-[105px] dark:bg-layout-dashboard">
        <div className="w-full max-w-[1372px] mx-auto relative mt-20 lg:mt-11">
          <img
            src={BackgroundImage}
            className="w-full h-[343px] lg:h-[930px] object-cover opacity-0 lg:opacity-30 dark:opacity-0 dark:lg:opacity-30"
            alt=""
          />
          <div className="w-full max-w-[805px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="font-semibold text-lg lg:text-5xl text-center mb-7 lg:mb-[72px]">
              Look like you're lost in space
            </p>
            <div className="relative mb-[67px] lg:mb-40 flex justify-center">
              <img
                src={ErrorImage}
                className="w-[310px] lg:w-auto invert dark:invert-0"
                alt=""
              />
              <img
                src={ManImage}
                className="w-[100px] lg:w-auto absolute top-[14px] lg:top-[60px] left-1/2 -translate-x-1/2"
                alt=""
              />
            </div>
            <Button
              color="theme"
              className="w-[164px] lg:w-[234px] h-[46px] lg:h-[66px] text-sm lg:text-[22px] mx-auto"
              onClick={handleBack}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
      <div className="dark:bg-layout-topbar">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
