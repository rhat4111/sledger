import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Ellipse1 from "assets/images/ellipse/1.png";
import Ellipse2 from "assets/images/ellipse/2.png";
import Ellipse3 from "assets/images/ellipse/3.png";
import Ellipse4 from "assets/images/ellipse/4.png";
import Ellipse5 from "assets/images/ellipse/5.png";
import Ellipse6 from "assets/images/ellipse/6.png";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-layout-default text-black dark:text-white">
      <div className="h-20 lg:h-auto flex px-7 lg:py-[50px] relative z-20">
        <div className="max-w-theme w-full mx-auto flex justify-between items-center">
          <Header />
        </div>
      </div>
      <div className="-mt-20 lg:mt-[-148px] xl:-mt-40">
        <Outlet />
        <Footer />
      </div>
      <div className="hidden dark:hidden dark:lg:block absolute top-0 left-0 w-full z-10 pointer-events-none mix-blend-lighten">
        <img src={Ellipse1} className="absolute -top-24 left-[330px]" alt="" />
        <img
          src={Ellipse2}
          className="absolute top-[375px] left-[-120px]"
          alt=""
        />
        <img
          src={Ellipse3}
          className="absolute top-[832px] left-[-408px]"
          alt=""
        />
        <img
          src={Ellipse4}
          className="absolute top-[1154px] right-[448px]"
          alt=""
        />
        <img
          src={Ellipse5}
          className="absolute top-[216px] right-[120px]"
          alt=""
        />
        <img
          src={Ellipse6}
          className="absolute top-[924px] right-[-210px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default DefaultLayout;
