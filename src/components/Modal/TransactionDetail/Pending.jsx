import React from "react";
import { Button, Col, Row } from "components/Common/Base";
import StellarToken from "assets/images/stellar.png";
import User from "assets/images/user/3.png";
import { commaNumber } from "utils";

const Pending = ({ onClose }) => {
  return (
    <div className="text-black">
      <div className="flex items-center justify-between pb-6 lg:border-b border-b-[#70707012]">
        <div className="flex items-center">
          <img
            src={StellarToken}
            className="w-[38px] lg:w-auto h-[38px] lg:h-auto"
            alt=""
          />
          <div className="leading-normal ml-3 lg:ml-9">
            <p className="text-xxs lg:text-lg text-input-label">Lumens</p>
            <p className="flex items-end">
              <span className="font-bold text-2xl lg:text-[40px] mr-2 lg:mr-3">
                {commaNumber(1384, 0)}
              </span>
              <span className="text-[11px] lg:text-xl text-[#CFCFCF] mb-1.5 lg:mb-2">
                XLM
              </span>
            </p>
          </div>
        </div>
        <span className="flex items-center justify-center w-14 lg:w-[133px] h-7 lg:h-12 rounded lg:rounded-lg bg-[#E2D62710] text-warning text-xxs lg:text-lg leading-normal">
          Pending
        </span>
      </div>
      <div className="lg:mt-7 mb-7 lg:mb-10">
        <Row spacing={window.innerWidth > 1024 ? 7 : 4}>
          <Col sm={12} lg={6}>
            <div className="flex flex-col leading-normal">
              <span className="flex font-semibold lg:font-medium text-xs lg:text-base text-black lg:text-input-label mb-[14px] lg:mb-5">
                Received From
              </span>
              <div className="flex items-center h-12 lg:h-15 rounded-[5px] bg-card-light px-4 lg:px-7 text-[11px] lg:text-base text-black text-ellipsis">
                <img
                  src={User}
                  className="w-7 lg:w-9 h-7 lg:h-9 mr-2.5 lg:mr-6"
                  alt=""
                />
                <span>Rania Ahmed</span>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="flex flex-col leading-normal">
              <span className="flex font-semibold lg:font-medium text-xs lg:text-base text-black lg:text-input-label mb-[14px] lg:mb-5">
                Date
              </span>
              <div className="inline-block overflow-hidden w-full leading-[48px] lg:leading-[60px] h-12 lg:h-15 rounded-[5px] bg-card-light px-4 lg:px-7 text-[11px] lg:text-base text-black text-ellipsis">
                22th, April 2021
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="flex flex-col leading-normal">
              <p className="flex font-semibold lg:font-medium text-xs lg:text-base text-black lg:text-input-label mb-[14px] lg:mb-5">
                Estimated Value <span className="text-[#C5C5C5] ml-2">USD</span>
              </p>
              <div className="inline-block overflow-hidden w-full leading-[48px] lg:leading-[60px] h-12 lg:h-15 rounded-[5px] bg-card-light px-4 lg:px-7 text-[11px] lg:text-base text-black text-ellipsis">
                $ 1,029
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="flex flex-col leading-normal">
              <span className="flex font-semibold lg:font-medium text-xs lg:text-base text-black lg:text-input-label mb-[14px] lg:mb-5">
                Available to claim until
              </span>
              <div className="inline-block overflow-hidden w-full leading-[48px] lg:leading-[60px] h-12 lg:h-15 rounded-[5px] bg-card-light px-4 lg:px-7 text-[11px] lg:text-base text-black text-ellipsis">
                3rd, June 2021 <span className="mx-2 text-[#C5C5C5]">|</span>{" "}
                01:30 AM
              </div>
            </div>
          </Col>
          <Col sm={12} lg={12} className="hidden lg:block">
            <div className="flex flex-col leading-normal">
              <span className="flex font-semibold lg:font-medium text-xs lg:text-base text-black lg:text-input-label mb-[14px] lg:mb-5">
                Claim Conditions
              </span>
              <div className="w-full rounded-[5px] bg-card-light px-4 lg:px-7 py-[18px] text-[11px] lg:text-base text-black text-ellipsis">
                You can claim this payment within a time spam set by the sender
                Once claimed, the tokens will be credited to your balance
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row spacing={4}>
        <Col sm={6} lg={3} className="order-1">
          <Button
            variant="outlined"
            color="black"
            size="large"
            fullWidth
            onClick={onClose}
          >
            Hide
          </Button>
        </Col>
        <Col sm={12} lg={6} className="order-3 lg:order-2">
          <Button size="large" fullWidth onClick={onClose}>
            View on Network Explorer
          </Button>
        </Col>
        <Col sm={6} lg={3} className="order-2 lg:order-3">
          <Button color="success" size="large" fullWidth onClick={onClose}>
            Claim
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Pending;
