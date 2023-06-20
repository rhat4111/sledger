import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Card from "./Card";
import "react-datepicker/dist/react-datepicker.css";

import BTC from "assets/images/pages/dashboard/home/btc.png";
import ETH from "assets/images/pages/dashboard/home/eth.png";

const WalletBalances = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const balances = [
    {
      id: 1,
      coin: "btc",
      label: "Bitcoin",
      amount: 1152837,
      priceChange: 0.11,
      avatar: BTC,
    },
    {
      id: 2,
      coin: "btc",
      label: "Bitcoin",
      amount: 1152837,
      priceChange: 0.11,
      avatar: BTC,
    },
    {
      id: 3,
      coin: "eth",
      label: "Etherum",
      amount: 1152837,
      priceChange: -0.39,
      avatar: ETH,
    },
    {
      id: 4,
      coin: "eth",
      label: "Etherum",
      amount: 1152837,
      priceChange: -0.39,
      avatar: ETH,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4 lg:mb-[38px]">
        <span className="font-semibold text-lg lg:text-[22px] leading-6 lg:leading-8">
          Wallet Balances
        </span>
        <div className="hidden lg:flex items-center">
          <div className="flex items-center mr-6">
            <span className="text-lg text-[#748AA1] flex-shrink-0">from</span>
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              className="w-24 text-[19ppx] bg-transparent outline-none text-right"
            />
          </div>
          <div className="flex items-center">
            <span className="text-lg text-[#748AA1] flex-shrink-0">to</span>
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              className="w-24 text-[19ppx] bg-transparent outline-none text-right"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:-m-2">
        {balances.map((balance) => (
          <div
            className="w-full lg:w-1/2 mb-4 last:mb-0 lg:mb-0 lg:p-2"
            key={balance.id}
          >
            <Card {...balance} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletBalances;
