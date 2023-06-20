import React from "react";
import { Link } from "react-router-dom";
import LightLogo from "assets/images/logo/light.png";
import DarkLogo from "assets/images/logo/dark.png";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center flex-shrink-0 ${className}`}>
      <img src={LightLogo} className="h-full hidden dark:flex" />
      <img src={DarkLogo} className="h-full flex dark:hidden" />
    </Link>
  );
};

export default Logo;
