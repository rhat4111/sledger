import React from "react";
import Slider from "react-slick";
import TransactionCard from "components/Common/TransactionCard";
import { Pagination } from "components/Common/Base";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BTC from "assets/images/coin/btc.png";
import ETH from "assets/images/coin/eth.png";
import LTC from "assets/images/coin/ltc.png";
import XLM from "assets/images/coin/xlm.png";

const LastExchanges = () => {
  const settings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    centerPadding: "150px",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
          rows: 3,
          slidesPerRow: 1,
        },
      },
    ],
  };

  const transactions = [
    {
      id: 1,
      from: "BTC",
      to: "AUD",
      network: "Bitcoin",
      amount: 4691.198,
      status: "up",
      icon: BTC,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 2,
      from: "ETH",
      to: "AUD",
      network: "Ethereum",
      amount: 4691.198,
      status: "down",
      icon: ETH,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 3,
      from: "LTC",
      to: "AUD",
      network: "Litecoin",
      amount: 4691.198,
      status: "up",
      icon: LTC,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 4,
      from: "XLM",
      to: "AUD",
      network: "Steller",
      amount: 4691.198,
      status: "down",
      icon: XLM,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 5,
      from: "BTC",
      to: "AUD",
      network: "Bitcoin",
      amount: 4691.198,
      status: "up",
      icon: BTC,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 6,
      from: "ETH",
      to: "AUD",
      network: "Ethereum",
      amount: 4691.198,
      status: "down",
      icon: ETH,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 7,
      from: "LTC",
      to: "AUD",
      network: "Litecoin",
      amount: 4691.198,
      status: "up",
      icon: LTC,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 8,
      from: "XLM",
      to: "AUD",
      network: "Steller",
      amount: 4691.198,
      status: "down",
      icon: XLM,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 9,
      from: "BTC",
      to: "AUD",
      network: "Bitcoin",
      amount: 4691.198,
      status: "up",
      icon: BTC,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 10,
      from: "ETH",
      to: "AUD",
      network: "Ethereum",
      amount: 4691.198,
      status: "down",
      icon: ETH,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 11,
      from: "LTC",
      to: "AUD",
      network: "Litecoin",
      amount: 4691.198,
      status: "up",
      icon: LTC,
      history: {
        high: 42174,
        low: 42174,
      },
    },
    {
      id: 12,
      from: "XLM",
      to: "AUD",
      network: "Steller",
      amount: 4691.198,
      status: "down",
      icon: XLM,
      history: {
        high: 42174,
        low: 42174,
      },
    },
  ];

  return (
    <div className="pt-12 lg:pt-14 pb-[70px] bg-[#FDFDFD] dark:bg-[#FFFFFF10]">
      <p className="font-light text-[13px] lg:text-[22px] leading-5 lg:leading-8 mb-0.5 lg:mb-1 text-center">
        Latest Exchanges
      </p>
      <p className="font-semibold text-2xl lg:text-[50px] leading-8 lg:leading-[44px] text-center mb-14 lg:mb-[85px]">
        Deals Updated
      </p>
      <Slider {...settings} className="flex justify-center mb-14 lg:mb-[105px]">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="mb-[25px] sm:mb-0 px-6">
            <TransactionCard {...transaction} />
          </div>
        ))}
      </Slider>
      <Pagination />
    </div>
  );
};

export default LastExchanges;
