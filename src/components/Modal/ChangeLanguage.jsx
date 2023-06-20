import React, { useContext, useState } from "react";
import i18next from "i18next";
import Context from "context";
import { Button, Modal } from "components/Common/Base";
import { Constants } from "utils";

const ChangeLanguage = ({ show, onClose }) => {
  const { lang } = useContext(Context);
  const [selectedLang, setSelectedLang] = useState(lang);

  const handleSave = (selectLanguage) => {
    selectLanguage(selectedLang);
    onClose();
    i18next.changeLanguage(selectedLang.code);
  };

  return (
    <Modal show={show} onClose={onClose} className="max-w-[703px]">
      <div className="flex flex-col items-center text-black mb-10">
        <p className="font-semibold text-[27px] leading-[37px] mb-2">
          Change Language
        </p>
        <p className="text-[17px] opacity-[0.32]">
          Select language and confirm to change
        </p>
      </div>
      <div className="px-1">
        <div className="max-h-[370px] flex flex-wrap -m-4 mb-10 overflow-y-auto">
          {Constants.langs.map((lang) => {
            const active = selectedLang.code === lang.code;
            return (
              <div key={lang.code} className="w-1/3 p-4">
                <div
                  className={`h-40 flex flex-col items-center justify-center rounded-xl cursor-pointer ${
                    active ? `bg-darkblue` : `bg-white`
                  }`}
                  onClick={() => setSelectedLang(lang)}
                >
                  <div
                    className={`w-14 h-14 rounded-full mb-[18px] flex items-center justify-center ${
                      active ? `bg-flag-active` : `bg-flag-normal`
                    }`}
                  >
                    <img
                      src={lang.icon}
                      className="w-11 h-11 rounded-full object-cover"
                      alt={lang.code}
                    />
                  </div>
                  <span
                    className={`font-medium text-[17px] ${
                      active ? `text-white` : `text-black`
                    }`}
                  >
                    {lang.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          fullWidth
          size="large"
          onClick={() => handleSave(lang.selectLanguage)}
        >
          Select Language
        </Button>
      </div>
    </Modal>
  );
};

export default ChangeLanguage;
