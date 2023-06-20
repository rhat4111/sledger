import React from "react";
import ArrowIcon from "assets/images/pages/dashboard/trade/arrow.svg";
import { commaNumber } from "utils";

const BalanceCard = ({ name, amount, icon }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark cursor-pointer flex items-center p-5 lg:px-[30px] lg:py-[27px] relative">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-14 h-[93px] bg-[#767B9C] dark:bg-[#484D6D] mr-6 lg:mr-[30px]">
          <img src={icon} alt="" />
        </div>
        <div>
          <p className="font-extralight text-sm lg:text-xl opacity-80 mb-1">
            {name}
          </p>
          <p className="font-roboto font-medium text-[21px] lg:text-[30px] leading-7 lg:leading-10 mb-1.5 lg:mb-2">
            {commaNumber(amount, 2)}
          </p>
          <p className="font-roboto text-[13px] lg:text-xl leading-[18px] lg:leading-[26px]">
            Current Balance
          </p>
        </div>
      </div>
      <img
        src={ArrowIcon}
        className="absolute top-1/2 -translate-y-1/2 right-7 lg:right-[42px] brightness-0 opacity-20 dark:brightness-100 dark:opacity-100 dark:invert-0"
        alt=""
      />
    </div>
  );
};

export default BalanceCard;
