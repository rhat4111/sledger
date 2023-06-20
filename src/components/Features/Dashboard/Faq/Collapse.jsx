import React, { useState } from "react";
import ArrowRight from "assets/images/icons/arrow-right.svg";

const Collapse = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col dark:bg-[#2F3558] rounded-[9px] overflow-hidden dark:text-white">
      <div className="w-full flex items-center justify-between p-3 lg:p-[14px]">
        <p className="text-xs lg:text-baseopacity-80">{question}</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#4C5586] w-6 lg:w-8 h-6 lg:h-8 rounded-[5px] flex justify-center items-center flex-shrink-0"
        >
          <img src={ArrowRight} />
        </button>
      </div>
      <div className={`overflow-hidden ${isOpen ? `h-auto` : `h-0`}`}>
        <div className="text-xs p-3 lg:p-[14px] pt-0">{answer}</div>
      </div>
    </div>
  );
};

export default Collapse;
