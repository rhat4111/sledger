import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import routes from "./routes.js";

const Menu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleRedirect = (path) => navigate(path);

  return (
    <ul className="flex items-center">
      {routes.map((route) => (
        <li
          key={route.id}
          onClick={() => handleRedirect(route.path)}
          className="font-light text-base 2xl:text-lg mr-5 2xl:mr-12 last:mr-0 text-gray dark:text-white cursor-pointer"
        >
          {t(route.label)}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
