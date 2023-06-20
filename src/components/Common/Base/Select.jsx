import React from "react";
import Caret from "assets/images/icons/select-caret.svg";

const Select = ({
  containerClassName = "",
  label,
  labelClassName = "",
  icon,
  color = "light",
  readOnly = false,
  className = "",
  value,
  onChange,
  name,
  inputClassName = "",
  placeholder,
  children,
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label
          className={`flex items-center mb-[13px] ${
            color === `dark`
              ? `lg:mb-4 font-medium text-white`
              : `lg:mb-5 font-semibold lg:font-medium text-black lg:text-input-label`
          } ${labelClassName}`}
        >
          {icon && (
            <img src={icon} className="scale-[0.85] lg:scale-100 mr-4" />
          )}
          <span className={`text-[13px] lg:text-[15px]`}>{label}</span>
        </label>
      )}
      <div
        className={`h-12 lg:h-15 rounded-lg bg-white ${
          color === `light` && `border border-input-border`
        } ${
          readOnly && `bg-[#F0F0F0]`
        } flex items-center overflow-hidden relative ${className}`}
      >
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          readOnly={readOnly}
          className={`w-full h-full px-7 lg:px-9 bg-transparent text-black font-light text-xs lg:text-[15px] outline-none ${inputClassName} appearance-none`}
        >
          {placeholder && <option>{placeholder}</option>}
          {children}
        </select>
        <img src={Caret} className="absolute right-8" />
      </div>
    </div>
  );
};

export default Select;
