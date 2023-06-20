import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CheckBox, TextField } from "components/Common/Base";

import BackupIcon from "assets/images/wallet/backup.svg";
import CopyIcon from "assets/images/icons/copy.svg";
import PublicIcon from "assets/images/wallet/public.svg";
import SecretIcon from "assets/images/wallet/secret.svg";

const CreateWallet = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const steps = [
    {
      title: "Backup the secret key",
      description:
        "The secret key will only be shown to you once. Always keep this key safe and secure. StellarTerm does not save it and will not be able to help you recover it if it was lost.",
      icon: BackupIcon,
    },
    {
      title: "About Secret Key",
      description:
        "Used to access your account and make transactions. Anyone with the key will have full access to the account and funds",
      icon: SecretIcon,
    },
    {
      title: "About Public Key",
      description:
        "Used to identify an account and receive funds. It is also known as an account and will be used as your account ID",
      icon: PublicIcon,
    },
  ];

  const handleToggle = () => {
    setChecked(!checked);
  };

  const handleCreate = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row lg:-m-5 bg-white lg:bg-transparent rounded-[17px] px-4 py-7">
      <div className="w-full max-w-[934px] bg-white rounded-[29px] lg:m-5 lg:pt-8 pb-9 px-2 lg:px-21">
        <p className="font-semibold text-base lg:text-[25px] leading-6 lg:leading-10 text-center mb-1.5 lg:mb-2.5">
          Create New Stellar Wallet
        </p>
        <p className="text-[11px] lg:text-[17px] leading-4 lg:leading-6 opacity-30 text-center mb-6 lg:mb-9">
          To get started using the Stellar network, a new unique keypair has
          been generated for you. Keypair represents the public and secret key
          of your Stellar account
        </p>
        <TextField
          label="Your New Public Key"
          value="GAHDSAHRHWEQBHCHSADSABGFHAQNBSDHJAHGBSDHSADSADA"
          containerClassName="mb-3 lg:mb-4"
          inputClassName="font-normal text-ellipsis"
          readOnly
        />
        <div className="relative mb-5 lg:mb-7">
          <TextField
            label="Your New Secret Key"
            value="SHDJQWEHFSAFMCVXZXHGFDSABFXZJDSADGHSA"
            inputClassName="font-normal text-ellipsis pr-12"
            readOnly
          />
          <img
            src={CopyIcon}
            className="absolute h-5 lg:h-auto right-3 lg:right-5 bottom-[14px] lg:bottom-[18px] cursor-pointer"
            alt="copy address"
          />
        </div>
        <div className="flex items-center mb-10">
          <CheckBox checked={checked} onChange={handleToggle} />
          <p
            className="font-light text-[13px] lg:text-[15px] ml-3 lg:ml-[18px] cursor-pointer"
            onClick={handleToggle}
          >
            I've backed up my secret key in a safe place
          </p>
        </div>
        <Button size="large" fullWidth onClick={handleCreate}>
          Create Wallet
        </Button>
      </div>
      <div className="w-full lg:max-w-[379px] rounded-[29px] lg:m-5 px-5 lg:px-10 py-7 lg:py-14 bg-graylight lg:bg-white">
        {steps.map((step, index) => (
          <div
            key={index}
            className="lg:pb-[30px] mb-4 lg:mb-[30px] last:pb-0 last:mb-0 lg:border-b border-b-[#70707010] last:border-b-0"
          >
            <div className="flex items-center mb-1.5 lg:mb-[15px]">
              <img src={step.icon} alt={step.title} />
              <p className="font-semibold text-sm lg:text-[19px] ml-4">
                {step.title}
              </p>
            </div>
            <p className="text-xs lg:text-sm leading-4 lg:leading-5 opacity-30">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateWallet;
