import React from "react";

const Divider = ({ className }) => {
  return (
    <span
      className={`flex w-[1px] h-[34px] border border-[#545454] dark:border-white opacity-30 ${className}`}
    />
  );
};

export default Divider;
