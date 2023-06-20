import React from "react";
import { commaNumber } from "utils";
import UpImage from "assets/images/graph/lg-up.png";
import DownImage from "assets/images/graph/lg-down.png";

const Card = ({ label, amount, priceChange }) => {
  return (
    <div
      className={`h-[114px] 2xl:h-40 px-10 py-5 2xl:px-[57px] 2xl:py-[27px] border dark:border-0 ${
        priceChange > 0 ? `border-[#59DBB534]` : `border-[#EC386834]`
      } dark:bg-[#2F345960] relative`}
    >
      <div>
        <p className="font-extralight text-sm 2xl:text-xl leading-normal opacity-80 mb-1">
          {label}
        </p>
        <p className="font-medium text-[21px] 2xl:text-[30px] leading-7 2xl:leading-10 mb-1 2xl:mb-2">
          $ {commaNumber(amount)}
        </p>
        <p
          className={`font-roboto text-sm 2xl:text-xl leading-5 2xl:leading-[26px] ${
            priceChange > 0 ? `text-success` : `text-danger`
          }`}
        >
          {priceChange > 0
            ? `+ ${priceChange}`
            : `- ${priceChange.toString().slice(1)}`}
          %
        </p>
      </div>
      <div
        className={`w-1/2 h-full absolute top-0 right-0 flex items-center justify-end bg-gradient-to-l ${
          priceChange > 0 ? `from-[#59DBB528]` : `from-[#EC386838]`
        } to-transparent`}
      >
        <img
          src={priceChange > 0 ? UpImage : DownImage}
          className="w-14 2xl:w-[82px] mr-7 2xl:mr-[38px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
