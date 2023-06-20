import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/Common/Base";

const Hero = () => {
  return (
    <div className="px-6">
      <div className="pt-[105px] lg:pt-[272px] pb-9 lg:pb-[50px]">
        <div className="flex flex-col items-center">
          <p className="w-full max-w-[962px] font-bold text-[25px] lg:text-[70px] leading-10 lg:leading-[100px] mb-8 lg:mb-9 text-center tracking-tighter">
            Create, Sell & Collect NFTs at Stellar Ledgar
          </p>
          <p className="w-full max-w-[702px] font-light text-sm lg:text-[22px] leading-5 lg:leading-[44px] mb-[46px] lg:mb-[52px] text-center opacity-65 lg:opacity-85">
            There are many variations of passages of lorem Ipsum Available but
            the majority have suffered alternation
          </p>
          <Link to="/dashboard/nft">
            <Button color="theme" size="large" className="w-[298px]">
              Explore NFTs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
