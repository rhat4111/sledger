import React from "react";
import { Link } from "react-router-dom";
import ConnectWalletImage from "assets/images/wallet/connect.png";
import CreateWalletImage from "assets/images/wallet/create.png";

const SelectWallet = () => {
  return (
    <div className="w-full max-w-[690px] rounded-[17px] lg:rounded-[29px] bg-white p-7 lg:px-14 lg:py-12">
      <p className="font-semibold text-base lg:text-[29px] leading-6 lg:leading-10 mb-1.5 lg:mb-6 text-center">
        Stellar Account
      </p>
      <p className="text-[11px] lg:text-xl leading-4 lg:leading-6 opacity-30 text-center mb-[30px] lg:mb-[50px]">
        Create a new Steller wallet or connect the wallet you already have
      </p>
      <div className="flex flex-wrap -mx-3 -my-2">
        <div className="w-full lg:w-1/2 px-3 py-2">
          <Link to="/wallet/connect">
            <div className="h-14 lg:h-auto flex flex-row lg:flex-col justify-center items-center rounded-[9px] lg:rounded-[20px] px-4 lg:p-6 lg:pt-8 cursor-pointer transition-all bg-graylight relative">
              <img
                src={ConnectWalletImage}
                className="absolute lg:relative left-4 lg:left-auto top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto w-[22px] lg:w-20 h-[22px] lg:h-20 object-contain mb-7"
                alt="Connect Wallet"
              />
              <span className="w-full lg:w-40 text-[13px] lg:text-xl leading-7 text-center">
                Connect Stellar Wallet
              </span>
            </div>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 px-3 py-2">
          <Link to="/wallet/create">
            <div className="h-14 lg:h-auto flex flex-row lg:flex-col justify-center items-center rounded-[9px] lg:rounded-[20px] px-4 lg:p-6 lg:pt-8 cursor-pointer transition-all bg-graylight relative">
              <img
                src={CreateWalletImage}
                className="absolute lg:relative left-4 lg:left-auto top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto w-[22px] lg:w-20 h-[22px] lg:h-20 object-contain mb-7"
                alt="Create Wallet"
              />
              <span className="w-full lg:w-40 text-[13px] lg:text-xl leading-7 text-center">
                Create Stellar Wallet
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectWallet;
