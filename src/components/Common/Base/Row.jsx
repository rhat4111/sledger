import React from "react";

const Row = ({ children, spacing = 4, className }) => {
  const margin = [
    "m-0",
    "m-[-2px]",
    "m-[-4px]",
    "m-[-6px]",
    "m-[-8px]",
    "m-[-10px]",
    "m-[-12px]",
    "m-[-14px]",
    "m-[-16px]",
    "m-[-18px]",
    "m-[-20px]",
    "m-[-22px]",
    "m-[-24px]",
  ];

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { spacing });
    }
    return child;
  });
  return (
    <div className={`flex flex-wrap ${margin[spacing]} ${className}`}>
      {childrenWithProps}
    </div>
  );
};

export default Row;
