import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, CheckBox, TextField } from "components/Common/Base";

import ConnectIcon from "assets/images/icons/link.svg";
import GreenArrowRightIcon from "assets/images/icons/green-arrow-right.svg";
import LockIcon from "assets/images/icons/lock-1.svg";

const ConnectWallet = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const handleConnect = () => {
    navigate("/wallet/activate");
  };

  return (
    <div className="w-full flex justify-center m-0 xl:-m-5">
      <div className="flex flex-col items-center flex-shrink-0 w-full max-w-[690px] bg-white rounded-[17px] lg:rounded-[29px] m-0 xl:m-5 pt-7 pb-12 px-[34px] lg:p-14">
        <p className="font-semibold text-base lg:text-[27px] leading-6 lg:leading-9 mb-1.5 lg:mb-3 text-center">
          Stellar Account
        </p>
        <p className="w-full max-w-[446px] text-[11px] lg:text-[17px] leading-4 lg:leading-6 opacity-30 mb-9 lg:mb-14 text-center">
          Create a new Steller wallet or connect the wallet you already have
        </p>
        <div className="w-full">
          <TextField
            label="Stellar Address"
            placeholder="Short alias or 56 character string starting with ''G''"
            containerClassName="mb-4 lg:mb-[26px]"
          />
          <TextField
            label="Secret Key"
            placeholder="56 character string starting with ''S''"
            containerClassName="mb-6 lg:mb-[42px]"
          />
          <div className="flex items-center mb-6 lg:mb-[46px]">
            <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
            <p
              className="font-light text-xs lg:text-[15px] ml-4 lg:ml-[18px] cursor-pointer"
              onClick={() => setChecked(!checked)}
            >
              I accept the terms and use, understand the risks associated with
              crypto currencies, and know that Steller Term does not issue or
              endorse any asset on the Steller network
            </p>
          </div>
          <Button
            onClick={handleConnect}
            size="large"
            icon={ConnectIcon}
            fullWidth
          >
            Connect Wallet
          </Button>
        </div>
      </div>
      <div className="hidden xl:block w-full max-w-[349px] bg-white rounded-[29px] m-5 px-11 py-14">
        <div className="pb-7 border-b border-b-[#70707010] mb-9">
          <p className="font-semibold text-[19px] leading-normal mb-[14px]">
            Secret Phrase not found
          </p>
          <p className="text-[15px] leading-[25px] opacity-30 mb-5">
            Secret phrase can help you verify that you are using authentic
            Steller Term website and save you from Phishing attacks.
          </p>
          <Link to="/" className="flex items-center justify-between">
            <span className="font-medium text-[15px] leading-5 text-success">
              Configure Secret Phrase
            </span>
            <img src={GreenArrowRightIcon} alt="Configure Secret Phrase" />
          </Link>
        </div>
        <div className="pb-7 border-b border-b-[#70707010] mb-7">
          <p className="font-semibold text-[19px] leading-normal mb-[14px]">
            Keep Secret Key Secure
          </p>
          <p className="text-[15px] leading-[25px] opacity-30">
            StellerTerm does not save the key , It is stored on your browser &
            will be deleted once you refresh or exit the page
          </p>
        </div>
        <div>
          <p className="font-semibold text-[19px] leading-normal">
            Check the URL
          </p>
          <p className="text-[15px] leading-[25px] opacity-30 mb-5">
            Make sure you are on the correct website
          </p>
          <div className="w-full flex items-center justify-center h-[46px] border border-[#70707030] rounded-full relative">
            <img
              src={LockIcon}
              className="absolute left-5 top-1/2 -translate-y-1/2"
              alt="URL"
            />
            <span className="text-[15px]">www.stellarterm.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
