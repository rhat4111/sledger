import React from "react";
import { commaNumber } from "utils";
import UpImage from "assets/images/graph/up.png";
import DownImage from "assets/images/graph/down.png";
import CaretIcon from "assets/images/icons/caret.svg";

const TransactionCard = (transaction) => {
  return (
    <div className="2xl:w-89 dark:bg-white dark:text-black px-8 py-5 lg:py-6 rounded-2xl">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <img
            src={transaction.icon}
            className="w-[50px] lg:w-auto h-[50px] lg:h-auto mr-4 lg:mr-[18px]"
            alt=""
          />
          <div>
            <p className="text-xs lg:text-[15px] leading-5 mb-0.5 text-[#E0E0E0]">
              <span className="text-black">{transaction.from}</span> |{" "}
              <span className="text-black">{transaction.to}</span>
            </p>
            <p className="font-roboto font-bold text-sm lg:text-xl text-black leading-5 lg:leading-[26px]">
              {transaction.network}
            </p>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <span className="text-xs lg:text-[15px] leading-5 text-[#9033D4] mr-4 lg:mr-2.5">
            Change
          </span>
          <img src={CaretIcon} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2.5 mb-5 lg:my-[22px]">
        <span className="font-roboto font-bold text-[28px] lg:text-[33px]">
          $ {commaNumber(transaction.amount, 3)}
        </span>
        <img src={transaction.status === `up` ? UpImage : DownImage} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[9px] lg:text-[15px] leading-4 lg:leading-5 mb-1 lg:mb-0.5">
            24H High
          </span>
          <span className="font-roboto font-bold text-sm lg:text-xl leading-4">
            $ {commaNumber(transaction.history.high)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] lg:text-[15px] leading-4 lg:leading-5 mb-1 lg:mb-0.5">
            24H Low
          </span>
          <span className="font-roboto font-bold text-sm lg:text-xl leading-4">
            $ {commaNumber(transaction.history.low)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
