import React from "react";

const StellerLedgerBenefit = ({ name, description, icon }) => {
  return (
    <div className="flex flex-col items-center rounded-[19px] px-8 lg:px-9 py-[42px] lg:py-14 bg-[#FBFBFB] dark:bg-layout-auth">
      <img
        src={icon}
        className="w-[94px] lg:w-33 h-[94px] lg:h-33 object-contain mb-7 lg:mb-[38.5px]"
        alt=""
      />
      <p className="font-semibold text-[17px] lg:text-[25px] leading-6 lg:leading-9 mb-[18px] lg:mb-6 text-center">
        {name}
      </p>
      <p className="font-light text-[11px] lg:text-base leading-[17px] lg:leading-[25px] opacity-[0.65] text-center">
        {description}
      </p>
    </div>
  );
};

export default StellerLedgerBenefit;
