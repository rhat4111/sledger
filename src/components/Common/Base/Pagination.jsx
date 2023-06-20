import React from "react";

import BackIcon from "assets/images/back.svg";
import NextIcon from "assets/images/next.svg";

const Pagination = () => {
  const slideCount = 3;
  return (
    <ul className="flex justify-center">
      <li className="px-1.5 lg:px-2">
        <button className="bg-[#4D4D4D] dark:bg-[#5F4D83] w-[55px] lg:w-[66px] h-[55px] lg:h-[66px] flex items-center justify-center rounded">
          <img src={BackIcon} />
        </button>
      </li>
      {Array.from(Array(slideCount)).map((item, index) => (
        <li className="px-1.5 lg:px-2" key={index}>
          <button className="bg-[#4D4D4D] dark:bg-[#5F4D83] w-[55px] lg:w-[66px] h-[55px] lg:h-[66px] flex items-center justify-center rounded">
            <span className="font-montserrat font-bold text-base lg:text-xl text-white dark:text-[#FFFFFF70]">
              {index + 1}
            </span>
          </button>
        </li>
      ))}
      <li className="px-1.5 lg:px-2">
        <button className="bg-[#4D4D4D] dark:bg-[#5F4D83] w-[55px] lg:w-[66px] h-[55px] lg:h-[66px] flex items-center justify-center rounded">
          <img src={NextIcon} />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
