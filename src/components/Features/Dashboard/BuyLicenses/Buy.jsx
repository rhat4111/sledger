import React from "react";
import { Button } from "components/Common/Base";
import PaymentImage from "assets/images/pages/dashboard/buy-licenses/payment.svg";
import FastImage from "assets/images/pages/dashboard/buy-licenses/fast.svg";
import SecureImage from "assets/images/pages/dashboard/buy-licenses/secure.svg";
import ConvenientImage from "assets/images/pages/dashboard/buy-licenses/convenient.svg";
import SwapImage from "assets/images/pages/dashboard/buy-licenses/swap.svg";

const Buy = () => {
  const pros = [
    {
      id: "fast",
      title: "Fast & Easy",
      description: "Lumens reach your account in 10 ~ 30 minutes on average",
      avatar: FastImage,
    },
    {
      id: "secure",
      title: "Secure",
      description:
        "Payment processor complies with PCI SAQ when storing, processing and transmitting cardholder data",
      avatar: SecureImage,
    },
    {
      id: "convenient",
      title: "Convenient",
      description:
        "Deposit XLM to your account using Visa or MasterCard credit card",
      avatar: ConvenientImage,
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-7 lg:mb-16">
        <div>
          <p className="font-semibold text-lg lg:text-[22px] mb-[5px]">
            Buy Crypto
          </p>
          <p className="text-[11px] lg:text-[17px] opacity-30">
            Use your debit or credit card to buy Lumens ( XLM ) or USD Coin (
            USDC ) on Stellar
          </p>
        </div>
        <img src={PaymentImage} className="hidden lg:flex" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-9 relative mb-9">
        <img
          src={SwapImage}
          className="w-[50px] lg:w-[76px] h-[50px] lg:h-[76px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rotate-90 lg:rotate-0"
          alt=""
        />
        <div className="bg-[#F6F6F623] dark:bg-[#434A7750] rounded-lg py-[14px] xl:py-9 px-7 pb-9 xl:px-[72px]">
          <span className="text-[11px] lg:text-xl text-[#7F7F7F] dark:text-[#C9C9C9]">
            Your Pay
          </span>
          <div className="flex items-end justify-between pb-3 border-b border-gray-100 dark:border-gray-500 mb-2.5 lg:mb-5">
            <span className="text-[42px] lg:text-[72px] leading-[59px] lg:leading-[100px] font-bold">
              42.3312
            </span>
            <select className="bg-transparent text-[13px] lg:text-2xl text-[#595959] dark:text-[#BEBEBE] mb-[18px]">
              <option>Euros</option>
            </select>
          </div>
          <span className="text-[11px] lg:text-[17px] font-light text-[#A8A8A8] dark:text-[#E3E3E3]">
            The min amount $ 30.00 and the max is $ 10.000
          </span>
        </div>
        <div className="bg-[#F6F6F623] dark:bg-[#434A7750] rounded-lg py-[14px] xl:py-9 px-7 pb-9 xl:px-[72px]">
          <span className="text-[11px] lg:text-xl text-[#7F7F7F] dark:text-[#C9C9C9]">
            Your Get
          </span>
          <div className="flex items-end justify-between pb-3 border-b border-gray-100 dark:border-gray-500 mb-2.5 lg:mb-5">
            <span className="text-[42px] lg:text-[72px] leading-[59px] lg:leading-[100px] font-bold">
              3300.00
            </span>
            <select className="bg-transparent text-[13px] lg:text-2xl text-[#BEBEBE] dark:text-[#BEBEBE] mb-[18px]">
              <option>XLM</option>
            </select>
          </div>
          <span className="text-[11px] lg:text-[17px] font-light text-[#E3E3E3]">
            Based on the current rating of XLM exchange
          </span>
        </div>
      </div>
      <Button color="info" className="mb-10" size="large" fullWidth>
        Continue Purchase
      </Button>
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#FAFAFA] dark:bg-[#434A7750] rounded-[20px] lg:rounded-lg py-4 lg:py-0">
        {pros.map((pro) => (
          <div
            className="flex flex-col items-center px-10 py-3 lg:py-9"
            key={pro.id}
          >
            <img src={pro.avatar} alt="" className="mb-3" />
            <span className="font-medium text-xs lg:text-base mb-1.5 text-center">
              {pro.title}
            </span>
            <span className="text-[15px] opacity-60 leading-6 text-center">
              {pro.description}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Buy;
