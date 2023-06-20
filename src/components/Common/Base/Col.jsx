import React from "react";

const Col = ({ sm, md, lg, xl, xxl, children, spacing, className }) => {
  const width = {
    mobile: [
      "w-0",
      "w-1/12",
      "w-2/12",
      "w-3/12",
      "w-4/12",
      "w-5/12",
      "w-6/12",
      "w-7/12",
      "w-8/12",
      "w-9/12",
      "w-10/12",
      "w-11/12",
      "w-full",
    ],
    sm: [
      "sm:w-0",
      "sm:w-1/12",
      "sm:w-2/12",
      "sm:w-3/12",
      "sm:w-4/12",
      "sm:w-5/12",
      "sm:w-6/12",
      "sm:w-7/12",
      "sm:w-8/12",
      "sm:w-9/12",
      "sm:w-10/12",
      "sm:w-11/12",
      "sm:w-full",
    ],
    md: [
      "md:w-0",
      "md:w-1/12",
      "md:w-2/12",
      "md:w-3/12",
      "md:w-4/12",
      "md:w-5/12",
      "md:w-6/12",
      "md:w-7/12",
      "md:w-8/12",
      "md:w-9/12",
      "md:w-10/12",
      "md:w-11/12",
      "md:w-full",
    ],
    lg: [
      "lg:w-0",
      "lg:w-1/12",
      "lg:w-2/12",
      "lg:w-3/12",
      "lg:w-4/12",
      "lg:w-5/12",
      "lg:w-6/12",
      "lg:w-7/12",
      "lg:w-8/12",
      "lg:w-9/12",
      "lg:w-10/12",
      "lg:w-11/12",
      "lg:w-full",
    ],
    xl: [
      "xl:w-0",
      "xl:w-1/12",
      "xl:w-2/12",
      "xl:w-3/12",
      "xl:w-4/12",
      "xl:w-5/12",
      "xl:w-6/12",
      "xl:w-7/12",
      "xl:w-8/12",
      "xl:w-9/12",
      "xl:w-10/12",
      "xl:w-11/12",
      "xl:w-full",
    ],
    xxl: [
      "2xl:w-0",
      "2xl:w-1/12",
      "2xl:w-2/12",
      "2xl:w-3/12",
      "2xl:w-4/12",
      "2xl:w-5/12",
      "2xl:w-6/12",
      "2xl:w-7/12",
      "2xl:w-8/12",
      "2xl:w-9/12",
      "2xl:w-10/12",
      "2xl:w-11/12",
      "2xl:w-full",
    ],
  };
  const padding = [
    "p-0",
    "p-[2px]",
    "p-[4px]",
    "p-[6px]",
    "p-[8px]",
    "p-[10px]",
    "p-[12px]",
    "p-[14px]",
    "p-[16px]",
    "p-[18px]",
    "p-[20px]",
    "p-[22px]",
    "p-[24px]",
  ];

  const mobileWidth = () => {
    if (sm) {
      return width["mobile"][sm];
    } else if (md) {
      return width["mobile"][md];
    } else if (lg) {
      return width["mobile"][lg];
    } else if (xl) {
      return width["mobile"][xl];
    } else if (xxl) {
      return width["mobile"][xxl];
    }
  };

  return (
    <div
      className={`${mobileWidth()} ${sm ? width["sm"][sm] : ``} 
      ${md ? width["md"][md] : ``} 
      ${lg ? width["lg"][lg] : ``} 
      ${xl ? width["xl"][xl] : ``} 
      ${xxl ? width["xxl"][xxl] : ``} 
      ${padding[spacing]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Col;
