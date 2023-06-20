import React from "react";
import BitcoinImage from "assets/images/bitcoin-business.png";

const BitcoinBusinessCard = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-37 overflow-hidden relative rounded-2xl ${className}`}
    >
      <img
        src={BitcoinImage}
        className="w-full scale-125 lg:scale-100 absolute top-1/2 translate-y-[-40%]"
        alt="bitcoin business"
      />
    </div>
  );
};

export default BitcoinBusinessCard;
