import React from "react";
import { Button } from "components/Common/Base";
import Card from "./Card";

import AboutImage from "assets/images/pages/home/about.png";
import TeamIcon from "assets/images/pages/home/team.png";
import AppsIcon from "assets/images/pages/home/apps.png";
import RatingIcon from "assets/images/pages/home/rating.png";
import VideoImage from "assets/images/pages/home/video.png";

const About = () => {
  const content = [
    {
      id: "user",
      title: "200,000 + Users",
      description:
        "StellerLedger is a popular choice both for beginners and pros. Easily send, receive and trade your crypto",
      icon: TeamIcon,
    },
    {
      id: "app",
      title: "100,000 + App Installs",
      description:
        "Enjoy using our top rated android and IOS apps, you will have access to your funds anytime and anywhere, enjoy the unlimited access",
      icon: AppsIcon,
    },
    {
      id: "review",
      title: "500,000 + Reviews",
      description:
        "Users love using SLedger, ongoing support, frequent updates and powerful features, make it one of the most trusted",
      icon: RatingIcon,
    },
  ];

  return (
    <div className="px-6 pt-[70px] lg:pt-[90px] lg:pb-[146px]">
      <div className="w-full max-w-theme mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pb-[42px] lg:border-b lg:border-b-[#FFFFFF35]">
          <div className="w-full lg:w-1/2 max-w-[646px]">
            <p className="text-xs lg:text-[22px] leading-4 lg:leading-8 mb-1.5 lg:mb-2.5 lg:opacity-85">
              Decentralized Payment Network
            </p>
            <p className="font-semibold text-[33px] lg:text-[50px] leading-10 lg:leading-[60px] mb-[14px] lg:mb-[30px]">
              StellerLedgar is the Safest Network
            </p>
            <p className="font-light text-[11px] lg:text-base leading-4 lg:leading-6 opacity-65 mb-2 lg:mb-10">
              StellarLedger is a ledger where all assets are held in a very
              secure wallet, which allows the user to control their funds at all
              time. Steller is an open-source protocol for exchanging money, its
              network validates transactions and allows irreversible and
              cryptographically secure payments.
            </p>
            <Button className="hidden lg:flex w-[166px] h-[55px]">
              Learn More
            </Button>
          </div>
          <img
            src={AboutImage}
            className="w-full lg:w-1/2 max-w-max mb-8 lg:mb-0"
            alt=""
          />
          <Button
            className="!h-9 font-montserrat text-[13px] flex lg:hidden"
            fullWidth
          >
            Learn More
          </Button>
        </div>
        <div className="flex flex-wrap lg:-mx-24 pt-[60px] lg:pt-[116px] pb-20 lg:pb-[146px]">
          {content.map((item) => (
            <div
              key={item.id}
              className="w-full lg:w-1/3 lg:px-24 mb-[45px] lg:mb-0 last:mb-0"
            >
              <Card {...item} />
            </div>
          ))}
        </div>
        <div className="-mx-6 lg:mx-0 bg-[#FBFBFB] dark:bg-[#301B59] px-0 lg:px-[29px] py-6 lg:py-[31px]">
          <img
            src={VideoImage}
            className="w-full h-[700px] lg:h-auto object-cover cursor-pointer"
            alt="about video"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
