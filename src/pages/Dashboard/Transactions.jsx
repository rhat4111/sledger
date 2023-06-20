import React, { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import BitcoinBusinessCard from "components/Common/BitcoinBusinessCard";
import CryptoCurrencyCard from "components/Common/CryptoCurrencyCard";

import Card from "components/Features/Dashboard/Transactions/Card";
import SearchField from "components/Common/SearchField";
import TransactionDetail from "components/Modal/TransactionDetail";

const Transactions = () => {
  const [key, setKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedType, setSelectedType] = useState("sent");

  const tabs = [
    { id: "all", label: "All" },
    { id: "sent", label: "Sent" },
    { id: "received", label: "Received" },
    { id: "pending", label: "Pending" },
  ];
  const data = [
    {
      id: 1,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "sent",
      up: true,
    },
    {
      id: 2,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "sent",
      up: false,
    },
    {
      id: 3,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "sent",
      up: false,
    },
    {
      id: 4,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "sent",
      up: true,
    },
    {
      id: 5,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "sent",
      up: true,
    },
    {
      id: 6,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "sent",
      up: false,
    },
    {
      id: 7,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "sent",
      up: true,
    },
    {
      id: 8,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "pending",
      up: false,
    },
    {
      id: 9,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "pending",
      up: false,
    },
    {
      id: 10,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "pending",
      up: true,
    },
    {
      id: 11,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "received",
      up: true,
    },
    {
      id: 12,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "received",
      up: false,
    },
    {
      id: 13,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "received",
      up: true,
    },
    {
      id: 14,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "received",
      up: false,
    },
    {
      id: 15,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "received",
      up: true,
    },
    {
      id: 16,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "received",
      up: false,
    },
    {
      id: 17,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "pending",
      up: true,
    },
    {
      id: 18,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "pending",
      up: true,
    },
    {
      id: 19,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "pending",
      up: true,
    },
    {
      id: 20,
      name: "Transfer to Charmeine",
      date: "Today 22th, May 2021",
      amount: 1152837,
      unit: "XLM",
      status: "pending",
      up: false,
    },
  ];

  const handleClose = () => setIsOpen(false);
  const handleOpen = (type) => {
    setSelectedType(type);
    setIsOpen(true);
  };

  return (
    <>
      <div>
        <div className="flex flex-wrap -mx-1.5 lg:-mx-4 mb-7 lg:mb-9">
          <div className="w-1/2 px-1.5 lg:px-4">
            <BitcoinBusinessCard className="h-25" />
          </div>
          <div className="w-1/2 px-1.5 lg:px-4">
            <CryptoCurrencyCard className="h-25" />
          </div>
        </div>
        <div>
          <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between mb-2 2xl:mb-9">
            <div className="mb-5 2xl:mb-0">
              <p className="font-semibold text-lg lg:text-[22px] leading-normal mb-0.5 lg:mb-1">
                My Transactions
              </p>
              <p className="text-[11px] lg:text-[17px] leading-normal opacity-30">
                Vie the history of our payment transactions
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col 2xl:flex-row items-start 2xl:items-center">
              <div className="w-full 2xl:w-auto 2xl:mr-[72px] order-2 2xl:order-1">
                <SearchField
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Search Transactions"
                />
              </div>
              <div className="w-full 2xl:w-auto order-1 2xl:order-2 mb-6 2xl:mb-0">
                <Tabs>
                  <TabList className="w-full 2xl:w-auto justify-between inline-flex border-b border-b-tab">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.id}
                        selectedClassName="!opacity-100 !border-b-button-info"
                        className="flex-shrink-0 font-semibold text-base leading-6 cursor-pointer pb-4 lg:pb-9 outline-none opacity-60 -mb-0.5 border-b-[3px] border-b-transparent lg:mx-7 first:ml-0 last:mr-0"
                        onClick={() => setSelectedTab(tab.id)}
                      >
                        {tab.label}
                      </Tab>
                    ))}
                  </TabList>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap xl:-mx-6">
            {data
              .filter((item) =>
                selectedTab === "all" ? true : item.status === selectedTab
              )
              .map((item) => (
                <div key={item.id} className="w-full xl:w-1/2 xl:px-6">
                  <Card {...item} onClick={handleOpen} />
                </div>
              ))}
          </div>
        </div>
      </div>

      <TransactionDetail
        show={isOpen}
        onClose={handleClose}
        type={selectedType}
      />
    </>
  );
};

export default Transactions;
