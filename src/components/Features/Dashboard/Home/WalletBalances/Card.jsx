import React from "react";
import { useNavigate } from "react-router-dom";
import IncreaseIcon from "assets/images/pages/dashboard/home/increase.svg";
import DecreaseIcon from "assets/images/pages/dashboard/home/decrease.svg";
import { commaNumber } from "utils";

const Card = ({ id, coin, label, amount, priceChange, avatar }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center justify-between px-5 lg:px-7 py-3 lg:py-4 bg-[#F7921A02] cursor-pointer ${
        priceChange > 0 ? `dark:bg-[#F7921A20]` : `dark:bg-[#F5F6F916]`
      }`}
      onClick={() => navigate(`/dashboard/token/${id}`)}
    >
      <div className="flex items-center">
        <img src={avatar} className="w-8 lg:w-auto" alt={coin} />
        <div className="ml-[18px] lg:ml-8">
          <p className="text-[15px] lg:text-[21px] leading-[29px] mb-1 uppercase">
            {coin}
          </p>
          <p className="font-extralight text-xs lg:text-base">{label}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-roboto text-[15px] lg:text-xl leading-5 lg:leading-[29px] mb-1 lg:mb-2">
          <span className="font-medium">${commaNumber(amount, 0)}</span>
          <span className="ml-2.5 lg:ml-[14px] uppercase">{coin}</span>
        </p>
        <div className="font-light text-xs lg:text-base leading-4 lg:leading-6">
          {priceChange > 0 ? (
            <p className="flex items-center">
              <img src={IncreaseIcon} className="mr-1.5 lg:mr-2" alt="" />
              <span className="text-success">{priceChange}% Increase</span>
            </p>
          ) : (
            <p className="flex items-center">
              <img src={DecreaseIcon} className="mr-1.5 lg:mr-2" alt="" />
              <span className="text-danger">
                {priceChange.toString().slice(1)}% Decrease
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
