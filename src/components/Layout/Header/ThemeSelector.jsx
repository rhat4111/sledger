import React, { useContext } from "react";
import Context from "context";
import MoonIcon from "assets/images/icons/moon.svg";

const ThemeSelector = () => {
  const { theme } = useContext(Context);

  return (
    <button
      className="w-14 lg:w-23 h-8 lg:h-12 xl:h-13 rounded-full relative p-2 xl:p-2.5 transition-all bg-light"
      onClick={theme.toggleTheme}
    >
      <span className="w-[26px] h-5 lg:w-11 lg:h-8 absolute top-1.5 lg:top-2 xl:top-2.5 left-[22px] lg:left-10 xl:left-[38px] dark:left-2 dark:lg:left-2.5 transition-all flex items-center justify-center rounded-full bg-gradient-to-r from-black to-black dark:from-pink dark:to-purple">
        <img src={MoonIcon} className="w-[8.6px] lg:w-auto" alt="moon" />
      </span>
    </button>
  );
};

export default ThemeSelector;
