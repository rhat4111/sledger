import React, { useContext, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Context from "context";

import ArrowDownIcon from "assets/images/icons/arrow-down.svg";
import CopyIcon from "assets/images/icons/copy.svg";
import HelpIcon from "assets/images/icons/help.svg";
import LogoutIcon from "assets/images/icons/logout.svg";
import ProfileImage from "assets/images/user/2.png";
import SettingIcon from "assets/images/icons/setting.svg";
import TriangleIcon from "assets/images/icons/triangle.svg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { auth } = useContext(Context);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRedirect = (path) => {
    handleClose();
    navigate(path);
  };
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <OutsideClickHandler onOutsideClick={handleClose}>
      <div className="hidden lg:flex items-center cursor-pointer relative">
        <div className="flex items-center" onClick={handleOpen}>
          <img
            src={auth.user.avatar}
            alt="Avatar"
            className="inline-block h-12 w-12 rounded-full"
          />
          <span className="ml-5 mr-4">{auth.user.name}</span>
          <img
            src={ArrowDownIcon}
            className={`transition-all invert dark:invert-0 ${
              open ? `-rotate-180` : `rotate-0`
            }`}
            alt=""
          />
        </div>
        {open && (
          <div className="absolute w-[380px] bg-white right-8 top-16 rounded-[15px] p-5 pb-0 text-black z-10">
            <img
              src={TriangleIcon}
              className="absolute right-[50px] top-[-13px]"
            />
            <div className="py-3 px-4 relative mb-5">
              <div className="flex items-center">
                <img src={ProfileImage} className="mr-[14px]" />
                <div className="flex flex-col">
                  <span className="text-base font-semibold mb-1 ">
                    Mist4227s@gmail.com
                  </span>
                  <span className="font-light text-xs opacity-80">
                    Steller_Mart*lobster.co
                  </span>
                </div>
              </div>
              <img
                src={CopyIcon}
                className="absolute right-[14px] top-1/2 -translate-y-1/2"
              />
            </div>
            <div className="border-b border-b-[#EBEBEB]">
              <p className="font-roboto text-[15px] mb-2">Total Balance</p>
              <p className="font-medium text-[25px] mb-5">$ 144,837,00</p>
            </div>
            <ul className="py-2.5 border-b border-b-[#EBEBEB]">
              <li
                className="flex items-center py-2.5 opacity-100 hover:opacity-70"
                onClick={() => handleRedirect("/dashboard/user-manage")}
              >
                <img src={SettingIcon} className="mr-3" />
                <span className="font-light text-[17px]">Settings</span>
              </li>
              <li
                className="flex items-center py-2.5 opacity-100 hover:opacity-70"
                onClick={() => handleRedirect("/dashboard/faq")}
              >
                <img src={HelpIcon} className="mr-3" />
                <span className="font-light text-[17px]">Help Center</span>
              </li>
            </ul>
            <ul className="py-2.5">
              <li
                className="flex items-center py-2.5 opacity-100 hover:opacity-70"
                onClick={handleLogout}
              >
                <img src={LogoutIcon} className="mr-3" />
                <span className="font-light text-[17px]">Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default Profile;
