import React, { useRef } from "react";
import Slider from "react-slick";

import Sponser1 from "assets/images/sponsers/1.png";
import Sponser2 from "assets/images/sponsers/2.png";
import Sponser3 from "assets/images/sponsers/3.png";
import Sponser4 from "assets/images/sponsers/4.png";

const StellerPartners = () => {
  const sliderRef = useRef();
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesRow: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="px-6 pt-[72px] pb-10 lg:py-14 bg-[#FFFFFF10]">
      <div className="w-full max-w-theme mx-auto">
        <p className="font-light text-[13px] lg:text-[22px] leading-5 lg:leading-8 mb-0.5 lg:mb-1 text-center">
          Stellar Partners
        </p>
        <p className="font-semibold text-2xl lg:text-[50px] leading-8 lg:leading-[44px] text-center mb-14 lg:mb-[85px]">
          Built on Stellar
        </p>
        <Slider {...settings} ref={sliderRef} className="mb-14 lg:mb-[120px]">
          <div className="h-full flex items-center justify-center px-2 lg:px-0">
            <img
              src={Sponser1}
              className="dark:brightness-0 dark:invert"
              alt=""
            />
          </div>
          <div className="h-full flex items-center justify-center px-2 lg:px-0">
            <img
              src={Sponser2}
              className="dark:brightness-0 dark:invert"
              alt=""
            />
          </div>
          <div className="h-full flex items-center justify-center px-2 lg:px-0">
            <img
              src={Sponser3}
              className="dark:brightness-0 dark:invert"
              alt=""
            />
          </div>
          <div className="h-full flex items-center justify-center px-2 lg:px-0">
            <img
              src={Sponser4}
              className="dark:brightness-0 dark:invert"
              alt=""
            />
          </div>
          <div className="h-full flex items-center justify-center px-2 lg:px-0">
            <img
              src={Sponser1}
              className="dark:brightness-0 dark:invert"
              alt=""
            />
          </div>
          <div className="h-full flex items-center justify-center px-2 lg:px-0">
            <img
              src={Sponser2}
              className="dark:brightness-0 dark:invert"
              alt=""
            />
          </div>
          <div className="h-full flex items-center justify-center px-2 lg:px-0">
            <img
              src={Sponser3}
              className="dark:brightness-0 dark:invert"
              alt=""
            />
          </div>
          <div className="h-full flex items-center justify-center px-2 lg:px-0">
            <img
              src={Sponser4}
              className="dark:brightness-0 dark:invert"
              alt=""
            />
          </div>
        </Slider>
        <ul className="flex justify-center">
          <li className="cursor-pointer w-3 lg:w-4 h-3 lg:h-4 rounded-full mx-3 lg:mx-[18px] bg-[#F6F6F6] dark:bg-[#5F4D83]"></li>
          <li className="cursor-pointer w-3 lg:w-4 h-3 lg:h-4 rounded-full mx-3 lg:mx-[18px] bg-[#F6F6F6] dark:bg-[#5F4D83]"></li>
          <li className="cursor-pointer w-3 lg:w-4 h-3 lg:h-4 rounded-full mx-3 lg:mx-[18px] bg-[#B868F1] dark:bg-white scale-[1.375]"></li>
          <li className="cursor-pointer w-3 lg:w-4 h-3 lg:h-4 rounded-full mx-3 lg:mx-[18px] bg-[#F6F6F6] dark:bg-[#5F4D83]"></li>
          <li className="cursor-pointer w-3 lg:w-4 h-3 lg:h-4 rounded-full mx-3 lg:mx-[18px] bg-[#F6F6F6] dark:bg-[#5F4D83]"></li>
        </ul>
      </div>
    </div>
  );
};

export default StellerPartners;
