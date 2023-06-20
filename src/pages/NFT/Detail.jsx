import React from "react";
import NFTImage from "assets/images/nft.png";

const NFTDetail = () => {
  return (
    <div className="px-6 pt-[232px]">
      <div className="w-full max-w-theme bg-white mx-auto rounded-[31px] p-13 pb-15">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 pr-8">
            <img src={NFTImage} alt="" />
          </div>
          <div className="w-full lg:w-1/2"></div>
          <div className="w-full lg:w-1/2 pr-8"></div>
          <div className="w-full lg:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
