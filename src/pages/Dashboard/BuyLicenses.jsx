import React from "react";
import Buy from "components/Features/Dashboard/BuyLicenses/Buy";
import Sell from "components/Features/Dashboard/BuyLicenses/Sell";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const BuyLicenses = () => {
  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "sell", label: "Sell" },
  ];

  return (
    <Tabs>
      <TabList className="w-full lg:w-auto inline-flex mb-8 lg:mb-10 border-b border-b-tab">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            selectedClassName="!opacity-100 !border-b-button-info"
            className="w-1/2 lg:w-auto font-light text-center text-base lg:text-xl leading-6 lg:leading-7 cursor-pointer pb-[14px] lg:pb-4 px-7 outline-none opacity-60 -mb-0.5 lg:mb-[-3px] border-b-[3px] lg:border-b-[5px] border-b-transparent"
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>

      <TabPanel>
        <Buy />
      </TabPanel>
      <TabPanel>
        <Sell />
      </TabPanel>
    </Tabs>
  );
};

export default BuyLicenses;
