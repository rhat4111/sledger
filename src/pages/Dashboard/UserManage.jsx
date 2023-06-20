import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Wallet from "components/Features/Dashboard/UserManage/Wallet";
import Profile from "components/Features/Dashboard/UserManage/Profile";
import Notifications from "components/Features/Dashboard/UserManage/Notifications";

const UserManage = () => {
  const tabs = [
    { id: "wallet", label: "Wallet" },
    { id: "profile", label: "Profile" },
    { id: "notifications", label: "Notifications" },
  ];

  return (
    <div>
      <p className="font-semibold text-lg lg:text-[22px] mb-7 lg:mb-14">
        User Manage
      </p>
      <Tabs>
        <TabList className="w-full lg:w-[360px] justify-between inline-flex mb-9 lg:mb-16 border-b border-b-tab">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              selectedClassName="!opacity-100 !border-b-button-info"
              className="font-light text-base lg:text-[19px] leading-6 lg:leading-7 cursor-pointer pb-[14px] lg:pb-4 outline-none opacity-60 -mb-0.5 border-b-[3px] border-b-transparent"
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanel>
          <Wallet />
        </TabPanel>
        <TabPanel>
          <Profile />
        </TabPanel>
        <TabPanel>
          <Notifications />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserManage;
