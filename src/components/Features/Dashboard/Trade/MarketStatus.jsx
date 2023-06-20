import React from "react";
import Graph from "assets/images/pages/dashboard/trade/graph.svg";

const MarketStatus = ({ className = "" }) => {
  return (
    <div
      className={`bg-card-light dark:bg-card-dark pt-5 lg:pt-8 pb-6 lg:pb-9 px-8 lg:px-10 ${className}`}
    >
      <p className="font-semibold text-[15px] lg:text-[22px] mb-7 lg:mb-[38px]">
        Market Status
      </p>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-extralight text-sm lg:text-xl leading-5 lg:leading-7 mb-1 opacity-80">
            XLM Price
          </p>
          <p className="font-roboto font-medium text-[21px] lg:text-[30px] mb-1.5 lg:mb-2">
            0.155847
          </p>
          <p className="font-roboto text-[13px] lg:text-xl leading-[18px] lg:leading-6 text-danger">
            - 3.12%
          </p>
        </div>
        <img src={Graph} className="h-14 lg:h-auto" alt="" />
      </div>
      <div className="flex justify-between">
        <div>
          <p className="font-extralight text-sm lg:text-xl opacity-80 mb-2 lg:mb-3">
            24H Vol
          </p>
          <p className="font-roboto font-medium text-base lg:text-[23px] leading-5 lg:leading-[30px]">
            200,488,300 USD
          </p>
        </div>
        <div>
          <p className="font-extralight text-sm lg:text-xl opacity-80 mb-2 lg:mb-3">
            Bid-ask Spread
          </p>
          <p className="font-roboto font-medium text-base lg:text-[23px] leading-5 lg:leading-[30px]">
            0.09845 %
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketStatus;
