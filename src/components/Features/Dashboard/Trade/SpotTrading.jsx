import React, { useState } from "react";
import { Button, Select, TextField } from "components/Common/Base";

const SpotTrading = () => {
  const [selectedTab, setSelectedTab] = useState("buy");
  const [selectedPriceType, setSelectedPriceType] = useState("ask");
  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "sell", label: "Sell" },
  ];
  const priceTypes = [
    { id: "ask", label: "Ask" },
    { id: "bid", label: "Bid" },
    { id: "last", label: "Last" },
  ];

  return (
    <div className="bg-card-light dark:bg-card-dark px-8 lg:px-10 pt-5 lg:pt-7 pb-8 lg:pb-[46px]">
      <p className="font-semibold text-sm lg:text-[22px] leading-normal mb-6 lg:mb-[30px]">
        Spot Trading
      </p>
      <div className="w-full h-10 lg:h-15 flex rounded-lg mb-4 lg:mb-6 overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-1/2 ${
              selectedTab === tab.id
                ? `bg-button-primary text-white`
                : `border border-[#88888827] dark:border-[#FFFFFF27]`
            } last:rounded-r-lg last:border-l-0 first:rounded-l-lg first:border-r-0 font-light text-xs lg:text-base cursor-pointer`}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Select
        label="Type"
        placeholder="Limit"
        containerClassName="mb-4"
        labelClassName="opacity-55 !mb-[15px] text-black dark:text-white"
        className="bg-transparent border-[#88888827] dark:border-[#FFFFFF27]"
        inputClassName="text-black dark:text-white"
      />
      <TextField
        label="Amount"
        placeholder="Enter Amount"
        containerClassName="mb-4"
        color="transparent"
        adorment={
          <span className="font-light text-xs lg:text-[17px] pr-6 lg:pr-8 opacity-55">
            XLM
          </span>
        }
      />
      <div className="mb-5">
        <p className="font-medium text-[13px] lg:text-[17px] opacity-55 mb-3 lg:mb-4">
          Price
        </p>
        <div className="flex -mx-2">
          {priceTypes.map((priceType) => (
            <div key={priceType.id} className="w-1/3 px-2">
              <button
                className={`w-full h-10 lg:h-15 text-xs lg:text-base rounded-lg ${
                  priceType.id === selectedPriceType
                    ? `bg-success text-white`
                    : `border border-[#88888827] dark:border-[#FFFFFF27]`
                }`}
                onClick={() => setSelectedPriceType(priceType.id)}
              >
                {priceType.label}
              </button>
            </div>
          ))}
        </div>
      </div>
      <TextField
        placeholder="Enter Price of 1 XLM"
        containerClassName="mb-4"
        color="transparent"
        adorment={
          <span className="font-light text-xs lg:text-[17px] pr-6 lg:pr-8 opacity-55">
            USD
          </span>
        }
      />
      <TextField
        label="Total"
        placeholder="Total Amount"
        containerClassName="mb-3"
        color="transparent"
        adorment={
          <span className="font-light text-xs lg:text-[17px] pr-6 lg:pr-8 opacity-55">
            USD
          </span>
        }
      />
      <div className="flex items-center justify-between font-light text-xs lg:text-[17px] mb-7 lg:mb-10">
        <span className="opacity-55">USD to sell</span>
        <p>
          <span className="opacity-55">Available: </span>
          <span className="font-medium">USD 1,500</span>
        </p>
      </div>
      <Button size="large" fullWidth>
        Buy XLM
      </Button>
    </div>
  );
};

export default SpotTrading;
