import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="w-auto lg:w-[94px] h-auto lg:h-[94px] mb-4 lg:mb-10">
        <img src={icon} className="scale-[0.8] lg:scale-100" alt="" />
      </div>
      <p className="font-semibold text-2xl lg:text-[32px] leading-5 lg:leading-[26px] text-center lg:text-left mb-4">
        {title}
      </p>
      <p className="font-montserrat text-xs lg:text-base leading-[18px] lg:leading-6 text-center lg:text-left opacity-65">
        {description}
      </p>
    </div>
  );
};

export default Card;
