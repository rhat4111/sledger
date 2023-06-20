import React from "react";
import { default as ReactSlick } from "react-slick";

import StellerImage from "assets/images/steller.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full flex justify-center px-5">
      <div className="w-full max-w-[702px]">
        <ReactSlick {...settings} className="flex justify-center">
          <div className="!flex flex-col items-center">
            <div className="flex flex-col items-center w-full max-w-[592px] mb-8">
              <p className="font-light">StellerLedger</p>
              <p className="font-semibold text-[45px] leading-[55px] text-center">
                The Most Secure Platform On Steller
              </p>
            </div>
            <img src={StellerImage} className="mb-24" alt="steller image" />
            <p className="font-light text-lg text-center opacity-50">
              StellarLedger is the only Steller wallet where you can buy or
              create NFTs and be protected from scam or duplicate tokens
            </p>
          </div>
          <div className="!flex flex-col items-center">
            <div className="flex flex-col items-center w-full max-w-[592px] mb-8">
              <p className="font-light">StellerLedger</p>
              <p className="font-semibold text-[45px] leading-[55px] text-center">
                The Most Secure Platform On Steller
              </p>
            </div>
            <img src={StellerImage} className="mb-24" alt="steller image" />
            <p className="font-light text-lg text-center opacity-50">
              StellarLedger is the only Steller wallet where you can buy or
              create NFTs and be protected from scam or duplicate tokens
            </p>
          </div>
          <div className="!flex flex-col items-center">
            <div className="flex flex-col items-center w-full max-w-[592px] mb-8">
              <p className="font-light">StellerLedger</p>
              <p className="font-semibold text-[45px] leading-[55px] text-center">
                The Most Secure Platform On Steller
              </p>
            </div>
            <img src={StellerImage} className="mb-24" alt="steller image" />
            <p className="font-light text-lg text-center opacity-50">
              StellarLedger is the only Steller wallet where you can buy or
              create NFTs and be protected from scam or duplicate tokens
            </p>
          </div>
        </ReactSlick>
      </div>
    </div>
  );
};

export default Slider;
