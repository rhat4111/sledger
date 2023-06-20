import React from "react";
import { Button } from "components/Common/Base";

import AppleStoreIcon from "assets/images/icons/apple-store.svg";
import GooglePlayIcon from "assets/images/icons/google-play.svg";

const DownloadApp = () => {
  return (
    <div className="lg:w-auto mb-[30px] lg:mb-[34px]">
      <span className="flex font-semibold text-lg leading-6 mb-6">
        Download App
      </span>
      <div className="flex -mx-3">
        <div className="w-1/2 sm:w-auto mx-3">
          <Button size="large" color="info" className="!w-full sm:!w-42">
            <div className="flex items-center">
              <img
                src={AppleStoreIcon}
                className="mr-3 sm:mr-4"
                alt="Download on Apple Store"
              />
              <p className="flex flex-col items-start">
                <span className="font-light text-[9px] sm:text-xxs opacity-80 leading-3 sm:leading-normal mb-0.5 sm:mb-0">
                  Download on
                </span>
                <span className="font-medium text-13 sm:text-15 leading-5">
                  Apple Store
                </span>
              </p>
            </div>
          </Button>
        </div>
        <div className="w-1/2 sm:w-auto mx-3">
          <Button size="large" color="info" className="!w-full sm:!w-42">
            <div className="flex items-center">
              <img
                src={GooglePlayIcon}
                className="mr-3 sm:mr-4"
                alt="Download on Google Play"
              />
              <p className="flex flex-col items-start">
                <span className="font-light text-[9px] sm:text-xxs opacity-80 leading-3 sm:leading-normal mb-0.5 sm:mb-0">
                  Download on
                </span>
                <span className="font-medium text-13 sm:text-15 leading-5">
                  Google Play
                </span>
              </p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
