import React from "react";
import { Button } from "components/Common/Base";

import BuyIcon from "assets/images/icons/buy.svg";
import CheckIcon from "assets/images/wallet/check.svg";
import FastPayIcon from "assets/images/wallet/fast-pay.svg";
import LinkIcon from "assets/images/icons/link.svg";
import MobileIcon from "assets/images/wallet/mobile.svg";
import QRCodeImage from "assets/images/qr.png";

const ActivateWallet = () => {
  const steps = [
    {
      title: "Fast & Easy",
      description: "Lumens reach your account in 10 ~ 30 minutes on average",
      icon: FastPayIcon,
    },
    {
      title: "Secure",
      description:
        "Payment processor complies with PCI SAQ when storing, processing and transmitting cardholder data",
      icon: MobileIcon,
    },
    {
      title: "Convenient",
      description:
        "Deposit XLM to your account using Visa or MasterCard credit card",
      icon: CheckIcon,
    },
  ];

  return (
    <div className="w-full max-w-[1077px] flex flex-col items-center bg-white rounded-[17px] lg:rounded-[29px] px-4 py-7 lg:p-14">
      <p className="font-semibold text-base lg:text-[27px] leading-6 lg:leading-10 mb-1.5 lg:mb-3 text-center">
        Account Activation Required
      </p>
      <p className="w-full max-w-[830px] text-[11px] lg:text-[17px] leading-4 lg:leading-6 opacity-30 mb-6 lg:mb-14 text-center">
        To use your steller account, you must activate it by sending at least 5
        lumens XLM to your account you can buy lumens from an exchange and send
        them to your address
      </p>
      <div className="flex flex-wrap w-full lg:mx-[-14px]">
        <div className="w-full lg:w-1/2 lg:px-[14px] mb-5 lg:mb-0">
          <div className="h-full flex flex-col items-center pt-[18px] lg:pt-7 pb-6 lg:pb-9 px-4 lg:px-[25px] rounded-[20px] bg-graylight">
            <p className="flex-shrink-0 font-semibold text-xs lg:text-[19px] leading-[29px] mb-5 lg:mb-[30px]">
              Send from Your Wallet
            </p>
            <div className="flex flex-col items-center w-full h-full">
              <div className="p-4 lg:p-7 mb-8 lg:mb-11 rounded-2xl bg-white">
                <img
                  src={QRCodeImage}
                  className="w-[196px] lg:w-auto h-[196px] lg:h-auto"
                  alt=""
                />
              </div>
              <div className="w-full mb-4 lg:mb-[26px]">
                <p className="text-[9px] lg:text-[15px] text-center mb-3 lg:mb-4">
                  Your Wallet Account ID
                </p>
                <div className="w-full h-[34px] lg:h-[54px] flex items-center justify-center rounded-lg bg-white">
                  <span className="text-[8px] lg:text-sm opacity-20">
                    GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS
                  </span>
                </div>
              </div>
            </div>
            <Button
              icon={LinkIcon}
              className="flex-shrink-0"
              size="large"
              fullWidth
            >
              Copy Address
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:px-[14px]">
          <div className="h-full flex flex-col items-center pt-[18px] lg:pt-7 pb-6 lg:pb-9 px-4 lg:px-[25px] rounded-[20px] bg-graylight">
            <p className="flex-shrink-0 font-semibold text-xs lg:text-[19px] leading-[29px] mb-5 lg:mb-[30px]">
              Send from another wallet
            </p>
            <div className="h-full">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="w-full max-w-[316px] flex flex-col items-center mb-5 lg:mb-[35px]"
                >
                  <img
                    src={step.icon}
                    className="w-[26px] h-[26px] lg:w-auto lg:h-auto mb-2.5 lg:mb-3"
                    alt={step.title}
                  />
                  <p className="font-medium text-[11px] text-base leading-4 lg:leading-[25px] mb-2 lg:mb-1.5 text-center">
                    {step.title}
                  </p>
                  <p className="text-[11px] lg:text-[15px] leading-[18px] lg:leading-[25px] opacity-30 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <Button
              icon={BuyIcon}
              className="flex-shrink-0"
              size="large"
              fullWidth
            >
              Buy Lumens Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateWallet;
