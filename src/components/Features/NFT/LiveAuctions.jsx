import React from "react";
import Slider from "react-slick";
import { Pagination } from "components/Common/Base";

import AuctionCard from "../../Common/NFTCard";
import Auction1 from "assets/images/auctions/1.png";
import Auction2 from "assets/images/auctions/2.png";
import Auction3 from "assets/images/auctions/3.png";
import Auction4 from "assets/images/auctions/4.png";

const LiveAuctions = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          rows: 2,
          slidesRow: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const auctions = [
    {
      id: 1,
      name: "Secret Hat",
      network: "Ethereum",
      artist: "Muhammed Alaa",
      highBidder: "DAVID SAMS",
      avatar: Auction1,
    },
    {
      id: 2,
      name: "Summer Sun Rise",
      network: "Ethereum",
      artist: "Muhammed Alaa",
      highBidder: "DAVID SAMS",
      avatar: Auction2,
    },
    {
      id: 3,
      name: "The Golden Ratio",
      network: "Ethereum",
      artist: "Muhammed Alaa",
      highBidder: "DAVID SAMS",
      avatar: Auction3,
    },
    {
      id: 4,
      name: "The Golden Ratio",
      network: "Ethereum",
      artist: "Muhammed Alaa",
      highBidder: "DAVID SAMS",
      avatar: Auction4,
    },
    {
      id: 5,
      name: "Secret Hat",
      network: "Ethereum",
      artist: "Muhammed Alaa",
      highBidder: "DAVID SAMS",
      avatar: Auction1,
    },
    {
      id: 6,
      name: "Summer Sun Rise",
      network: "Ethereum",
      artist: "Muhammed Alaa",
      highBidder: "DAVID SAMS",
      avatar: Auction2,
    },
  ];

  return (
    <div className="pt-12 lg:pt-14 pb-15 lg:pb-[118px] bg-[#FFFFFF10]">
      <p className="font-light text-[13px] lg:text-[22px] leading-5 lg:leading-8 mb-0.5 lg:mb-1 text-center">
        Masterpieces
      </p>
      <p className="font-semibold text-2xl lg:text-[50px] leading-8 lg:leading-[44px] text-center mb-10 lg:mb-[104px]">
        Live Auctions
      </p>
      <Slider {...settings} className="lg:px-18 mb-4 lg:mb-[118px]">
        {auctions.map((auction) => (
          <div key={auction.id} className="px-4 mb-8 sm:mb-0">
            <AuctionCard {...auction} />
          </div>
        ))}
      </Slider>
      <Pagination />
    </div>
  );
};

export default LiveAuctions;
