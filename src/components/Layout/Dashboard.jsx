import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="min-h-screen bg-white dark:bg-layout-dashboard text-black dark:text-white">
      <div className="fixed z-50 left-0 lg:left-[330px] right-0">
        <div className="w-full bg-graylight dark:bg-layout-topbar h-20 lg:h-[110px] flex justify-between items-center px-6 lg:px-9">
          <Header theme="dashboard" onOpenSidebar={handleOpen} />
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={handleClose}>
        <Sidebar open={open} onClose={handleClose} />
      </OutsideClickHandler>
      <div className={`w-full lg:pl-[330px]`}>
        <div className="pt-20 lg:pt-[110px]">
          <div className="py-4 px-6 lg:p-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
