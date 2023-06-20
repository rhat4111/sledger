import React, { useContext, useState } from "react";
import ChangeLanguage from "components/Modal/ChangeLanguage";
import Context from "context";
import { Constants } from "utils";

import ArrowIcon from "assets/images/icons/arrow-right.svg";

const LanguageSelector = () => {
  const { lang } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleModal = () => setShowModal(!showModal);
  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="flex-shrink-0">
      <div className="hidden lg:block">
        <div
          className="flex items-center p-1 xl:p-1.5 rounded-full bg-light cursor-pointer"
          onClick={handleToggleModal}
        >
          <img src={lang.icon} className="w-10 h-10 rounded-full" />
        </div>
        <ChangeLanguage show={showModal} onClose={handleToggleModal} />
      </div>
      <div className="block lg:hidden text-white">
        <div
          className="flex justify-between items-center p-1.5 rounded-full bg-light cursor-pointer relative"
          onClick={handleToggleMenu}
        >
          <img src={lang.icon} className="w-8 h-8 rounded-full" />
          <span className="w-full absolute left-0 text-center uppercase">
            {lang.name} | {lang.code}
          </span>
          <img
            src={ArrowIcon}
            className={`${
              showMenu ? `-rotate-90` : `rotate-90`
            } transition mr-3`}
            alt="dropdown icon"
          />
          {showMenu && (
            <ul className="w-full bg-light absolute top-12 left-0 rounded-[22px] overflow-hidden">
              {Constants.langs.map((item) => (
                <li
                  key={item.code}
                  className="flex items-center p-1.5 border-b border-white last:border-0"
                  onClick={() => lang.selectLanguage(item)}
                >
                  <img
                    src={item.icon}
                    className="w-8 h-8 rounded-full"
                    alt={item.code}
                  />
                  <span className="w-full absolute left-0 text-center uppercase">
                    {item.name} | {item.code}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
