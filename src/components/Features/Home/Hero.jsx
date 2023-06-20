import React from "react";
import StarImage from "assets/images/pages/home/star.png";
import StellerImage from "assets/images/pages/home/steller.png";
import ReviewImage from "assets/images/pages/home/review.png";
import UsersImage from "assets/images/pages/home/users.png";
import AppleStoreIcon from "assets/images/icons/apple-store.svg";
import GooglePlayIcon from "assets/images/icons/google-play.svg";

const Hero = () => {
  return (
    <div className="px-6 dark:bg-layout-auth">
      <div className="relative pt-[105px] lg:pt-[272px] pb-9 lg:pb-24">
        <img
          src={StarImage}
          className="hidden dark:block absolute bottom-0 left-1/2 -translate-x-1/2"
          alt=""
        />
        <div className="relative z-10 flex flex-col items-center">
          <p className="w-full max-w-[880px] font-bold text-[25px] lg:text-[70px] leading-10 lg:leading-[100px] mb-8 lg:mb-9 text-center tracking-tighter">
            The Most Secure Platform On Steller
          </p>
          <p className="font-montserrat w-full max-w-[858px] font-light text-sm lg:text-[22px] leading-5 lg:leading-[44px] mb-[46px] lg:mb-[76px] text-center opacity-65 lg:opacity-85">
            StellarLedger is the only Steller wallet where you can buy or create
            NFTs and be protected from scam or duplicate tokens
          </p>
          <div className="flex justify-center mb-[76px] lg:mb-[85px] text-white">
            <button className="w-[143px] lg:w-[211px] h-13 lg:h-19 rounded-[10px] lg:rounded-[14px] flex justify-center items-center bg-gradient-to-l from-button-gradient-from to-button-gradient-to mx-1.5 lg:mx-5 opacity-100 transition-all hover:opacity-70">
              <img src={AppleStoreIcon} className="h-[30px] lg:h-11" alt="" />
              <div className="flex flex-col items-start pl-2 lg:pl-5 text-center">
                <span className="font-light text-[8px] lg:text-sm leading-3 lg:leading-5 opacity-80">
                  Download on
                </span>
                <span className="font-medium text-[13px] lg:text-xl leading-6 lg:leading-7">
                  Apple Store
                </span>
              </div>
            </button>
            <button className="w-[143px] lg:w-[211px] h-13 lg:h-19 rounded-[10px] lg:rounded-[14px] flex justify-center items-center border border-[#9B92BA] bg-layout-auth mx-1.5 lg:mx-5 opacity-100 transition-all hover:opacity-70">
              <img src={GooglePlayIcon} className="h-[22px] lg:h-8" alt="" />
              <div className="flex flex-col items-start pl-2 lg:pl-5 text-center">
                <span className="font-light text-[8px] lg:text-sm leading-3 lg:leading-5 opacity-80">
                  Download on
                </span>
                <span className="font-medium text-[13px] lg:text-xl leading-6 lg:leading-7">
                  Google Play
                </span>
              </div>
            </button>
          </div>
          <div className="relative">
            <img src={StellerImage} />
            <img
              src={ReviewImage}
              className="absolute w-[182px] lg:w-auto top-11 lg:top-[88px] -right-2.5 lg:right-[120px] lg:translate-x-full"
            />
            <img
              src={UsersImage}
              className="absolute w-56 lg:w-auto bottom-9 lg:top-[265px] left-[-18px] lg:left-[70px] lg:-translate-x-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
