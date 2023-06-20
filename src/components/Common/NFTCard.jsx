import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/Common/Base";

import EthereumIcon from "assets/images/coin/eth.png";
import BrushIcon from "assets/images/icons/brush.svg";
import AuctionIcon from "assets/images/icons/auction.svg";

const AuctionCard = ({
  id,
  name,
  network,
  artist,
  highBidder,
  avatar,
  size = "large",
}) => {
  return (
    <div className="bg-white rounded-[22px] p-3 lg:px-4 lg:pt-3.5 pb-[18px] lg:pb-[30px]">
      <img
        src={avatar}
        className="w-full h-86 lg:h-154 object-cover object-center mb-5 lg:mb-[25px] rounded-2xl"
        alt=""
      />
      <div>
        <div class="flex items-center justify-between pb-4 lg:pb-[18px] border-b border-b-[#F2F2F2]">
          <span className="font-semibold text-[17px] lg:text-[21px] text-black">
            {name}
          </span>
          <div className="flex items-center">
            <img
              src={EthereumIcon}
              class="w-7 lg:w-9 h-7 lg:h-9 mr-4 lg:mr-5"
              alt=""
            />
            <span className="font-poppins text-xs lg:text-base text-[#07495D]">
              {network}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 pb-[18px] lg:pb-[22px] text-[#333]">
          <div className="flex items-center">
            <img src={BrushIcon} className="mr-4" alt="" />
            <div className="flex flex-col items-start">
              <span className="font-light text-[9px] lg:text-xxs mb-0.5 lg:mb-1 leading-3 lg:leading-4">
                Artist
              </span>
              <span className="font-semibold text-[11px] lg:text-sm leading-[17px] lg:leading-5">
                {artist}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <img src={AuctionIcon} className="mr-4" alt="" />
            <div className="flex flex-col items-start">
              <span className="font-light text-[9px] lg:text-xxs mb-0.5 lg:mb-1 leading-3 lg:leading-4">
                Highest Bid
              </span>
              <span className="font-semibold text-[11px] lg:text-sm leading-[17px] lg:leading-5">
                {highBidder}
              </span>
            </div>
          </div>
        </div>
        <Link to={`/nft/${id}`}>
          <Button size="large" className="font-semibold bg-[#A015E3]" fullWidth>
            View Listing
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AuctionCard;
