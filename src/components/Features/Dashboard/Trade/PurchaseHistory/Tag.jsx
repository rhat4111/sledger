import React from "react";

const Tag = ({ label, color = "success" }) => {
  const colors = {
    success: "text-success bg-light-success",
    danger: "text-danger bg-light-danger",
  };
  return (
    <span
      className={`w-14 lg:w-[85px] h-[25px] lg:h-[37px] inline-flex items-center justify-center font-medium lg:font-semibold text-[9px] lg:text-xs ${colors[color]} rounded lg:rounded-lg`}
    >
      {label}
    </span>
  );
};

export default Tag;
