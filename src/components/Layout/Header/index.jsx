import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Context from "context";

import Divider from "./Divider";
import Logo from "./Logo";
import Menu from "./Menu";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import Profile from "./Profile";
import MobileMenu from "./MobileMenu";

import UserIcon from "assets/images/icons/user.svg";
import MenuIcon from "assets/images/icons/menu.svg";
import { IconButton } from "components/Common/Base";

const Header = ({ theme = "default", onOpenSidebar }) => {
  const { t } = useTranslation();
  const { auth } = useContext(Context);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    theme === "default" ? setOpen(true) : onOpenSidebar();
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex items-center">
        <IconButton
          icon={MenuIcon}
          onClick={handleOpen}
          className="flex lg:hidden mr-6 dark:brightness-0 dark:invert"
        />
        <Logo
          className={`h-10 xl:h-15 ${
            theme === "dashboard" ? `flex lg:hidden` : `flex`
          }`}
        />
        <div className="hidden lg:flex items-center">
          {theme !== "dashboard" && (
            <Divider className="mx-6 xl:ml-[77px] xl:mr-[54px]" />
          )}
          <div
            className={`${theme === "dashboard" ? `hidden xl:flex` : `flex`}`}
          >
            <Menu />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-0 lg:mr-5 xl:mr-8">
          <ThemeSelector />
        </div>
        <div className="hidden lg:flex items-center">
          <LanguageSelector />
          <Divider className="mx-6 xl:ml-11 xl:mr-[54px]" />

          {!auth.user ? (
            <div className="flex items-center">
              <img src={UserIcon} alt="user" className="mr-4 xl:mr-6" />
              <ul className="flex items-center text-base 2xl:text-lg text-black dark:text-white leading-5">
                <li>
                  <Link to="/auth/login">{t("layout.login")}</Link>
                </li>
                <span className="mx-1">/</span>
                <li>
                  <Link to="/auth/signup">{t("layout.signup")}</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Profile />
          )}
        </div>
      </div>
      <MobileMenu open={open} onClose={handleClose} />
    </>
  );
};

export default Header;
