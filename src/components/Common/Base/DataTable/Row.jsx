import React from "react";

const Row = ({ onClick, children, className }) => {
  return (
    <tr
      onClick={onClick}
      className={`h-15 even:bg-[#B0B0B010] even:dark:bg-[#FFFFFF10] ${className}`}
    >
      {children}
    </tr>
  );
};

export default Row;
