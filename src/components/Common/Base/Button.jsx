import React from "react";

const Button = ({
  onClick,
  color = "primary",
  size = "small",
  variant = "contained", // contained | outlined
  fullWidth = false,
  className = "",
  children,
  icon,
}) => {
  const buttonStyles = {
    contained: {
      danger: "bg-button-danger text-white",
      primary: "bg-button-primary text-white",
      success: "bg-button-success text-white",
      info: "bg-button-info text-white",
      white: "bg-white text-black",
      secondary: "bg-button-secondary text-white",
      theme:
        "bg-gradient-to-l from-button-gradient-from to-button-gradient-to text-white shadow-button",
      transparent:
        "bg-transparent text-black dark:text-white border dark:border-tab",
    },
    outlined: {
      white: "border border-white text-white",
      black: "border border-[#D9D9D9] text-black",
    },
  };

  const buttonSizeStyles = {
    small: "h-[50px]",
    large: "h-12 lg:h-15 text-[15px] lg:text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`relative flex justify-center items-center rounded-lg transition-all opacity-100 hover:opacity-70 ${
        buttonStyles[variant][color]
      } ${fullWidth ? `w-full` : `w-auto`} ${
        buttonSizeStyles[size]
      } ${className}`}
    >
      {icon && (
        <img
          src={icon}
          className="absolute left-[18px] lg:left-8 h-4 lg:h-auto"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
