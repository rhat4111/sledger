import React from "react";

const Cell = ({ children }) => {
  return <td className="font-semibold text-[11px] lg:text-[15px] px-3 text-center">{children}</td>;
};

export default Cell;
