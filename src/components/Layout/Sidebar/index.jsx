import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Context from "context";
import Logo from "../Header/Logo";
import routes from "./routes";
import Login from "assets/images/icons/login.svg";

const Sidebar = ({ open, onClose }) => {
  const { t } = useTranslation();
  const { auth } = useContext(Context);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleRedirect = (route) => {
    navigate(route.path);
    onClose();
  };
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div
      className={`${
        open ? `translate-x-0` : `-translate-x-full lg:translate-x-0`
      } transition-all w-[280px] lg:w-[330px] h-screen pb-5 lg:pb-10 fixed flex flex-col top-0 left-0 bg-white dark:bg-darkblue shadow-sidebar z-40`}
    >
      <div className="h-20 lg:h-[110px] px-8 lg:px-12 flex flex-shrink-0 items-center">
        <Logo className="h-10 lg:h-14" />
      </div>
      <div className="h-full overflow-y-auto">
        <ul>
          {routes.map((route) => {
            const active = pathname === route.path;
            return (
              <li
                className={`h-14 lg:h-[66px] px-8 lg:px-12 flex items-center cursor-pointer transition-all hover:opacity-100 ${
                  active ? `opacity-100` : `opacity-30`
                }`}
                key={route.id}
                onClick={() => handleRedirect(route)}
              >
                <div className="w-10 lg:w-[46px]">
                  <img
                    src={route.icon}
                    className="invert dark:invert-0 scale-[0.9] lg:scale-100"
                    alt={route.label}
                  />
                </div>
                <span
                  className={`${
                    active ? `font-medium` : `font-light`
                  } text-base lg:text-xl`}
                >
                  {t(route.label)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="h-14 lg:h-[66px] flex-shrink-0 px-8 lg:px-12 flex items-center cursor-pointer transition-all opacity-30 hover:opacity-100"
        onClick={handleLogout}
      >
        <div className="w-10 lg:w-[46px]">
          <img
            src={Login}
            className="invert dark:invert-0 scale-[0.9] lg:scale-100"
            alt="log out"
          />
        </div>
        <span className="font-light text-base lg:text-xl">
          {t("layout.sidebar.logout")}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
