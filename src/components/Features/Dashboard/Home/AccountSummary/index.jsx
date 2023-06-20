import React, { useState } from "react";
import DatePicker from "react-datepicker";

import Card from "./Card";
import "react-datepicker/dist/react-datepicker.css";

const AccountSummary = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (date) => setSelectedDate(date);
  const data = [
    {
      id: "week",
      label: "This Week",
      amount: 3312,
      priceChange: 5.15,
    },
    {
      id: "month",
      label: "This Month",
      amount: 3312,
      priceChange: -3.12,
    },
    {
      id: "xlm",
      label: "XLM Price",
      amount: 110312,
      priceChange: 5.15,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4 lg:mb-[38px]">
        <p className="font-semibold text-lg lg:text-[22px]">Account Summary</p>
        <div className="hidden lg:flex items-center">
          <span className="text-lg text-[#748AA1] flex-shrink-0">
            Select Date
          </span>
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            className="w-24 text-[19ppx] bg-transparent outline-none text-right"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-0 xl:-mx-4 2xl:mx-[-25px]">
        {data.map((item) => (
          <div
            className="w-full xl:w-1/3  mb-[14px] xl:mb-0 last:mb-0 xl:px-4 2xl:px-[25px]"
            key={item.id}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSummary;
