import React from "react";
import StellerLedgerBenefit from "components/Common/StellerLedgerBenefit";
import WalletImage from "assets/images/pages/nft/wallet.png";
import CollectionImage from "assets/images/pages/nft/collection.png";
import NFTImage from "assets/images/pages/nft/nft.png";

const WhyStellerLedger = () => {
  const benefits = [
    {
      name: "Set-up Your Wallet",
      description:
        "Most competitive fees in the industry. users can invest, trade or withdraw funds without worrying about fees and commissions",
      icon: WalletImage,
    },
    {
      name: "Create Your Collection",
      description:
        "Most competitive fees in the industry. users can invest, trade or withdraw funds without worrying about fees and commissions",
      icon: CollectionImage,
    },
    {
      name: "Add Your NFTs",
      description:
        "Most competitive fees in the industry. users can invest, trade or withdraw funds without worrying about fees and commissions",
      icon: NFTImage,
    },
  ];

  return (
    <div className="pt-6 lg:pt-[145px] pb-[73px] lg:pb-[100px] px-6">
      <div className="w-full max-w-theme mx-auto">
        <p className="font-light text-[13px] lg:text-[22px] leading-5 lg:leading-8 mb-0.5 lg:mb-1 text-center">
          Awesome Services
        </p>
        <p className="font-semibold text-2xl lg:text-[50px] leading-8 lg:leading-[44px] text-center mb-10 lg:mb-[85px]">
          Why Steller Ledger ?
        </p>
        <div className="flex flex-wrap lg:-mx-11 relative z-30">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-1/3 lg:px-11 mb-[25px] last:mb-0 lg:mb-0"
            >
              <StellerLedgerBenefit {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyStellerLedger;
