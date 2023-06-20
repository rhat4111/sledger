import React from "react";
import UpIcon from "assets/images/pages/dashboard/transactions/up.svg";
import DownIcon from "assets/images/pages/dashboard/transactions/down.svg";
import { commaNumber } from "utils";

const Card = ({ name, date, amount, status, unit, up, onClick }) => {
  return (
    <div
      className="w-full h-14 lg:h-24 flex items-center justify-between border-b border-b-[#97979715] dark:border-b-[#656565] opacity-100 hover:opacity-60 transition-all cursor-pointer"
      onClick={() => onClick(status)}
    >
      <div className="flex items-center">
        <img
          src={up ? UpIcon : DownIcon}
          className="w-7 lg:w-auto h-7 lg:h-auto mr-5 lg:mr-[30px]"
        />
        <div className="font-extralight">
          <p className="font-light dark:font-extralight text-xs lg:text-xl mb-1">
            {name}
          </p>
          <p className="text-xxs lg:text-base opacity-80">{date}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="mb-1">
          <span className="font-roboto font-medium text-xs lg:text-xl mr-1.5 lg:mr-3">
            $ {commaNumber(amount, 0)}
          </span>
          <span className="text-xs lg:text-xl opacity-50">{unit}</span>
        </p>
        <p className="font-extralight text-xxs lg:text-base text-success">
          Approved
        </p>
      </div>
    </div>
  );
};

export default Card;
