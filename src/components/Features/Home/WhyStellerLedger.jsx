import React from "react";
import StellerLedgerBenefit from "components/Common/StellerLedgerBenefit";
import BitcoinBusinessCard from "components/Common/BitcoinBusinessCard";
import CryptoCurrencyCard from "components/Common/CryptoCurrencyCard";
import AssetsImage from "assets/images/pages/home/assets.png";
import LowCommissionsImage from "assets/images/pages/home/low-commissions.png";
import DataSecurityImage from "assets/images/pages/home/data-security.png";

const WhyStellerLedger = () => {
  const benefits = [
    {
      name: "Steller Assets & NFTs",
      description:
        "Trade your Steller assets anytime & anywhere Choose how you want to sell your NFTS and we'll help you on that",
      icon: AssetsImage,
    },
    {
      name: "Low Commissions",
      description:
        "Most competitive fees in the industry. users can invest, trade or withdraw funds without worrying about fees and commissions",
      icon: LowCommissionsImage,
    },
    {
      name: "Data Security",
      description:
        "Security of user information and funds is our first first priority. StellerLedger is the only decentralized exchange without scam or duplicate tokens",
      icon: DataSecurityImage,
    },
  ];

  return (
    <div className="pt-6 lg:pt-[145px] pb-[73px] lg:pb-[120px] px-6">
      <div className="w-full max-w-theme mx-auto">
        <p className="font-light text-[13px] lg:text-[22px] leading-5 lg:leading-8 mb-0.5 lg:mb-1 text-center">
          Awesome Services
        </p>
        <p className="font-semibold text-2xl lg:text-[50px] leading-8 lg:leading-[44px] text-center mb-10 lg:mb-[85px]">
          Why Steller Ledger ?
        </p>
        <div className="flex flex-wrap lg:-mx-11 mb-[38px] lg:mb-[110px]">
          {benefits.map((item, index) => (
            <div key={index} className="w-full lg:w-1/3 lg:px-11 mb-[25px] last:mb-0 lg:mb-0">
              <StellerLedgerBenefit {...item} />
            </div>
          ))}
        </div>
        <div className="min-w-full flex flex-wrap lg:-mx-11">
          <div className="w-full lg:w-1/2 lg:px-11 mb-5 lg:mb-0">
            <BitcoinBusinessCard />
          </div>
          <div className="w-full lg:w-1/2 lg:px-11">
            <CryptoCurrencyCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyStellerLedger;
