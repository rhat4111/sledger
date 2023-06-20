import React, { useState } from "react";
import Chart from "react-apexcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { generateDayWiseTimeSeries } from "utils";

const AccountBalance = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      type: "datetime",
    },
  };
  const series = [
    {
      name: "series-1",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4 lg:mb-[38px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <span className="font-semibold text-lg lg:text-[22px] leading-6 lg:leading-8">
            Account Balance
          </span>
          <span className="hidden lg:flex w-[1px] h-[18px] bg-white opacity-50 ml-12 mr-8"></span>
          <p className="text-[15px] lg:text-xl">
            <span className="font-extralight opacity-80 mr-2.5 lg:mr-4">
              Total Balance
            </span>
            <span className="font-roboto font-medium">$ 152,837</span>
          </p>
        </div>
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
      <div>
        <Chart options={options} series={series} type="area" height={320} />
      </div>
    </div>
  );
};

export default AccountBalance;
