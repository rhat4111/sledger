import React from "react";
import CryptoCurrencyImage from "assets/images/crypto-currency.png";

const CryptoCurrencyCard = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-37 overflow-hidden relative rounded-2xl ${className}`}
    >
      <img
        src={CryptoCurrencyImage}
        className="w-full scale-125 lg:scale-100 absolute top-1/2 -translate-y-1/2"
        alt="crypto currency"
      />
    </div>
  );
};

export default CryptoCurrencyCard;
