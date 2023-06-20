import React from "react";
import BitcoinBusinessCard from "components/Common/BitcoinBusinessCard";
import CryptoCurrencyCard from "components/Common/CryptoCurrencyCard";
import AccountSummary from "components/Features/Dashboard/Home/AccountSummary";
import AccountBalance from "components/Features/Dashboard/Home/AccountBalance";
import WalletBalances from "components/Features/Dashboard/Home/WalletBalances";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap -mx-1.5 lg:-mx-4 mb-5 lg:mb-9">
        <div className="w-1/2 px-1.5 lg:px-4">
          <BitcoinBusinessCard className="h-25" />
        </div>
        <div className="w-1/2 px-1.5 lg:px-4">
          <CryptoCurrencyCard className="h-25" />
        </div>
      </div>
      <div className="mb-10">
        <AccountSummary />
      </div>
      <div className="mb-10">
        <AccountBalance />
      </div>
      <WalletBalances />
    </div>
  );
};

export default Dashboard;
