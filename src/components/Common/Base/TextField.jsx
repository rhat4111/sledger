import React, { useState } from "react";
import EyeIcon from "assets/images/icons/eye.svg";

const TextField = ({
  type,
  label,
  placeholder,
  icon,
  value,
  color = "light",
  onChange,
  name,
  className = "",
  adorment,
  containerClassName = "",
  inputClassName = "",
  labelClassName = "",
  readOnly = false,
  multiple = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => setShowPassword(!showPassword);
  const labelStyles = {
    light:
      "lg:mb-5 font-semibold lg:font-medium text-black lg:text-input-label",
    dark: "lg:mb-4 font-medium text-white",
    transparent:
      "font-semibold text-black dark:text-white dark:opacity-55 mb-[15px]",
  };

  const inputContainerStyles = {
    light: "border border-input-border",
    dark: "",
    transparent:
      "bg-transparent border dark:border-[#FFFFFF27] border-input-border",
  };

  const inputStyles = {
    light: "",
    dark: "",
    transparent:
      "text-black dark:text-white placeholder:dark:text-white placeholder:text-black",
  };

  return (
    <div className={containerClassName}>
      {label && (
        <label
          className={`flex items-center mb-[13px] ${labelStyles[color]} ${labelClassName}`}
        >
          {icon && (
            <img src={icon} className="scale-[0.85] lg:scale-100 mr-4" />
          )}
          <span className={`text-[13px] lg:text-[15px]`}>{label}</span>
        </label>
      )}
      {!multiple ? (
        <div
          className={`h-12 lg:h-15 rounded-lg bg-white ${
            inputContainerStyles[color]
          } flex items-center overflow-hidden ${className} ${
            readOnly && `bg-[#F0F0F0]`
          }`}
        >
          <input
            type={type === "password" && showPassword ? `text` : type}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
            readOnly={readOnly}
            className={`w-full h-full px-7 lg:px-9 bg-transparent text-black font-light text-xs lg:text-[15px] outline-none ${inputClassName} ${inputStyles[color]}`}
          />
          {adorment && adorment}
          {type === "password" && (
            <img
              src={EyeIcon}
              onClick={handleToggleShowPassword}
              className="cursor-pointer w-5 lg:w-auto mr-[18px] lg:mr-6 opacity-100 hover:opacity-70 transition-all"
            />
          )}
        </div>
      ) : (
        <div
          className={`h-37 lg:h-60 flex rounded-lg bg-white ${
            inputContainerStyles[color]
          } flex items-center overflow-hidden ${className} ${
            readOnly && `bg-[#F0F0F0]`
          }`}
        >
          <textarea
            className={`w-full h-full bg-transparent text-black font-light text-xs lg:text-[15px] outline-none px-7 lg:px-9 py-5  ${inputClassName} ${inputStyles[color]}`}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
          />
        </div>
      )}
    </div>
  );
};

export default TextField;
