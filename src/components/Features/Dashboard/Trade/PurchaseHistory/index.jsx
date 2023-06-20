import React, { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import OpenOrders from "./OpenOrders";
import OrderHistory from "./OrderHistory";

const PurchaseHistory = () => {
  const [selectedTab, setSelectedTab] = useState("open");
  const tabs = [
    { id: "open", label: "Open Orders" },
    { id: "history", label: "Order History" },
  ];

  return (
    <div className="dark:lg:bg-card-dark lg:px-10 lg:py-7">
      <div className="flex items-center justify-between mb-[18px] lg:mb-10">
        <p className="font-semibold text-sm lg:text-[22px] leading-normal">
          Purchase Orders
        </p>
        <Tabs>
          <TabList className="inline-flex border-b border-b-tab">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                selectedClassName="!opacity-100 !border-b-button-info"
                className="font-light text-center text-xxs lg:text-base leading-4 lg:leading-6 cursor-pointer pb-2.5 lg:pb-[14px] px-2 lg:px-3 outline-none opacity-60 -mb-0.5 border-b-[3px] border-b-transparent"
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </div>
      {selectedTab === "open" ? <OpenOrders /> : <OrderHistory />}
    </div>
  );
};

export default PurchaseHistory;
