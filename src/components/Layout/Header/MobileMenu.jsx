import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OutsideClickHandler from "react-outside-click-handler";
import ThemeSelector from "./ThemeSelector";
import routes from "./routes";
import LanguageSelector from "./LanguageSelector";

const MobileMenu = ({ open, onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleRedirect = (path) => navigate(path);

  const MenuItem = ({ label, path }) => {
    return (
      <li
        onClick={() => handleRedirect(path)}
        className="text-lg text-white cursor-pointer py-2"
      >
        {t(label)}
      </li>
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 ${
        open ? `translate-x-0` : `-translate-x-full`
      } w-[280px] h-screen overflow-y-auto z-50 bg-black transition-all px-5 py-10`}
    >
      <OutsideClickHandler onOutsideClick={onClose}>
        <ul className="pb-5 mb-5 border-b border-white">
          <MenuItem label={t("layout.login")} path="auth/login" />
          <MenuItem label={t("layout.signup")} path="auth/signup" />
        </ul>
        <ul className="pb-5 mb-5 border-b border-white">
          {routes.map((route) => (
            <MenuItem key={route.id} label={route.label} path={route.path} />
          ))}
        </ul>
        <ul>
          <li className="flex justify-between items-center text-white mb-5">
            <span>Theme</span>
            <ThemeSelector />
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </OutsideClickHandler>
    </div>
  );
};

export default MobileMenu;
