import React from "react";
import IncreaseImage from "assets/images/pages/dashboard/trade/increase.svg";
import DecreaseImage from "assets/images/pages/dashboard/trade/decrease.svg";

const TokenPriceChangeCard = ({
  name,
  avatar,
  priceChange,
  unit,
  className = "",
  size = "large",
}) => {
  return (
    <div
      className={`${
        size === `large` ? `h-24` : `h-18`
      } lg:h-25 flex items-center px-6 lg:px-10 relative border dark:border-0 ${
        priceChange > 0 ? `border-[#59DBB534]` : `border-[#EC386834]`
      } ${className}`}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-white dark:bg-[#2F3459] dark:opacity-60"></div>
      <div className="w-full flex items-center relative z-10">
        <div className="w-[50px] h-[50px] lg:w-14 lg:h-14 mr-4 lg:mr-5 flex items-center justify-center">
          <img src={avatar} alt="" />
        </div>
        <div className="flex flex-col">
          <span
            className={`font-regular lg:font-extralight ${
              size === `large` ? `text-base` : `text-sm`
            } lg:text-lg text-black dark:text-white opacity-80 mb-1.5`}
          >
            {name}
          </span>
          <span
            className={`font-roboto text-sm lg:text-lg ${
              priceChange > 0 ? `text-success` : `text-danger`
            }`}
          >
            {priceChange > 0
              ? `+ ${priceChange}`
              : `- ${priceChange.toString().slice(1)}`}{" "}
            ( {unit} )
          </span>
        </div>
      </div>
      <div
        className={`w-1/2 h-full absolute top-0 right-0 flex items-center justify-end bg-gradient-to-l ${
          priceChange > 0 ? `from-[#59DBB528]` : `from-[#EC386838]`
        } to-transparent`}
      >
        <img
          src={priceChange > 0 ? IncreaseImage : DecreaseImage}
          className={`${
            size === `large` ? `w-14` : `w-12`
          } 2xl:w-[70px] mr-7 2xl:mr-[38px]`}
          alt=""
        />
      </div>
    </div>
  );
};

export default TokenPriceChangeCard;
