import React from "react";

const IconButton = ({ className, icon, onClick, iconClassName }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center p-0 rounded-full transition-all opacity-100 hover:opacity-70 ${className}`}
    >
      <img src={icon} className={iconClassName} />
    </button>
  );
};

export default IconButton;
