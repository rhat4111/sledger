import React, { useState } from "react";
import Chart from "react-apexcharts";
import DatePicker from "react-datepicker";
import { Col, Row } from "components/Common/Base";
import { generateDayWiseTimeSeries } from "utils";

import MarketStatus from "components/Features/Dashboard/Trade/MarketStatus";
import TokenPriceChangeCard from "components/Common/TokenPriceChangeCard";
import BalanceCard from "components/Features/Dashboard/Trade/BalanceCard";
import SpotTrading from "components/Features/Dashboard/Trade/SpotTrading";
import BitcoinBusinessCard from "components/Common/BitcoinBusinessCard";
import CryptoCurrencyCard from "components/Common/CryptoCurrencyCard";

import XLM from "assets/images/pages/dashboard/trade/xlm.svg";
import Dollar from "assets/images/pages/dashboard/trade/dollar.svg";
import Steller from "assets/images/pages/dashboard/trade/steller.svg";
import Swap from "assets/images/pages/dashboard/trade/swap.svg";
import PurchaseOrders from "components/Features/Dashboard/Trade/PurchaseOrders";
import SalesOrders from "components/Features/Dashboard/Trade/SalesOrders";
import OrderHistory from "components/Features/Dashboard/Trade/PurchaseHistory";

const Trade = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [selectedOrder, setSelectedOrder] = useState("buy");
  const orders = [
    { id: "buy", label: "Buy Orderbok" },
    { id: "sales", label: "Sales Orderbok" },
  ];
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
      <div className="flex flex-wrap -mx-1.5 lg:-mx-4 mb-7 lg:mb-9">
        <div className="w-1/2 px-1.5 lg:px-4">
          <BitcoinBusinessCard className="h-25" />
        </div>
        <div className="w-1/2 px-1.5 lg:px-4">
          <CryptoCurrencyCard className="h-25" />
        </div>
      </div>
      <Row spacing={window.innerWidth > 1024 ? 12 : 5}>
        <Col xl={12} xxl={4}>
          <MarketStatus className="mb-[27px]" />
          <TokenPriceChangeCard
            name="Lumen - Last 24H"
            priceChange={5.15}
            unit="$"
            avatar={XLM}
            size="small"
            className="mb-5 lg:mb-[27px]"
          />
          <TokenPriceChangeCard
            name="USD Coin - Last 24H"
            priceChange={-1.15}
            unit="XLM"
            avatar={XLM}
            size="small"
          />
        </Col>
        <Col xl={12} xxl={8}>
          <div className="flex flex-wrap -mx-6 relative mb-11">
            <img
              src={Swap}
              className="w-5 md:w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 transition-all rotate-90 md:rotate-0 brightness-0 opacity-40 dark:brightness-100 dark:opacity-100"
              alt=""
            />
            <div className="w-full md:w-1/2 px-6 mb-10 md:mb-0">
              <BalanceCard
                name="Lumen Steller.org"
                amount={2.45}
                icon={Steller}
              />
            </div>
            <div className="w-full md:w-1/2 px-6">
              <BalanceCard
                name="USD Coin center.io"
                amount={1928}
                icon={Dollar}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4 lg:mb-8">
              <div className="flex items-center text-[18px] lg:text-[22px]">
                <span className="font-semibold">0.115847 USD Coin</span>
                <span className="font-roboto text-danger text-base lg:text-[22px] ml-2 lg:ml-7">
                  - 3.12%
                </span>
              </div>
              <div className="hidden lg:flex items-center">
                <div className="flex items-center mr-6">
                  <span className="text-lg text-[#748AA1] flex-shrink-0">
                    from
                  </span>
                  <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    className="w-24 text-[19ppx] bg-transparent outline-none text-right"
                  />
                </div>
                <div className="flex items-center">
                  <span className="text-lg text-[#748AA1] flex-shrink-0">
                    to
                  </span>
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    className="w-24 text-[19ppx] bg-transparent outline-none text-right"
                  />
                </div>
              </div>
            </div>
            <Chart options={options} series={series} type="area" height={310} />
          </div>
        </Col>
        <Col xl={12} xxl={4}>
          <SpotTrading />
        </Col>
        <Col xl={12} xxl={8}>
          <Row spacing={window.innerWidth > 1024 ? 12 : 5}>
            <Col xxl={12} className="block lg:hidden">
              <div class="h-10 border border-[#7B7B7B] dark:border-0 rounded-md">
                {orders.map((order) => (
                  <button
                    className={`text-xs h-full w-1/2 rounded-md ${
                      selectedOrder === order.id
                        ? `bg-[#393939] dark:bg-card-dark text-white`
                        : `bg-transparent text-black dark:text-white`
                    }`}
                    onClick={() => setSelectedOrder(order.id)}
                    key={order.id}
                  >
                    {order.label}
                  </button>
                ))}
              </div>
            </Col>
            <Col
              xl={12}
              xxl={6}
              className={`${
                selectedOrder === `buy` ? `block` : `hidden`
              } lg:block`}
            >
              <PurchaseOrders />
            </Col>
            <Col
              xl={12}
              xxl={6}
              className={`${
                selectedOrder === `sales` ? `block` : `hidden`
              } lg:block`}
            >
              <SalesOrders />
            </Col>
          </Row>
        </Col>
        <Col xxl={12}>
          <OrderHistory />
        </Col>
      </Row>
    </div>
  );
};

export default Trade;
