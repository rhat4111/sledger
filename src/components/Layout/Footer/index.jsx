import React from "react";
import Menu from "./Menu";
import DownloadApp from "./DownloadApp";
import Contacts from "./Contacts";
import { IconButton } from "components/Common/Base";

import FacebookIcon from "assets/images/icons/facebook.svg";
import TwitterIcon from "assets/images/icons/twitter.svg";
import InstagramIcon from "assets/images/icons/instagram.svg";

const Footer = () => {
  const socialLinks = [
    { id: "facebook", link: "#", icon: FacebookIcon },
    { id: "twitter", link: "#", icon: TwitterIcon },
    { id: "instagram", link: "#", icon: InstagramIcon },
  ];

  return (
    <div className="px-7 py-11 lg:py-40 text-black dark:text-white">
      <div className="w-full max-w-theme mx-auto flex flex-col lg:flex-row justify-between items-start border-t border-[#00000015] dark:border-[#FFFFFF30] pt-12 lg:pt-[60px]">
        <div className="w-full max-w-full lg:max-w-[385px] mb-14 lg:mb-0">
          <p className="font-montserrat font-extrabold text-darkgray dark:text-white text-[25px] leading-9 uppercase mb-8 lg:mb-[30px] tracking-[6px]">
            <span className="text-purple">S</span>ledger
          </p>
          <p className="font-light text-sm lg:text-[17px] leading-6 lg:leading-[30px] opacity-70 mb-6 lg:mb-24">
            StellerLedger is operated by an independent commercial entity
            unaffiliated with the Steller development foundation
          </p>
          <div className="flex -mx-3 lg:-mx-3.5">
            {socialLinks.map((item) => (
              <IconButton
                key={item.id}
                icon={item.icon}
                className="w-12 lg:w-13 h-12 lg:h-13 bg-white dark:bg-button-light mx-3 lg:mx-3.5"
                onClick={() => (window.location.href = item.path)}
              />
            ))}
          </div>
        </div>
        <Menu />
        <div className="w-full lg:w-auto">
          <DownloadApp />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Footer;
