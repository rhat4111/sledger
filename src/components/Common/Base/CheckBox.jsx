import React from "react";
import CheckedIcon from "assets/images/icons/checked.svg";
import UncheckedIcon from "assets/images/icons/unchecked.svg";

const CheckBox = ({ label, checked, color = "light", className, onChange }) => {
  return (
    <div
      className={`flex items-center flex-shrink-0 cursor-pointer ${className}`}
      onClick={onChange}
    >
      <img
        src={checked ? CheckedIcon : UncheckedIcon}
        className={`flex-shrink-0 w-5 h-5 lg:w-7 lg:h-7 ${
          color === `dark` && !checked && `opacity-30`
        }`}
      />
      {label && (
        <span className="font-light text-[13px] lg:text-lg ml-[14px] lg:ml-[18px]">
          {label}
        </span>
      )}
    </div>
  );
};

export default CheckBox;
