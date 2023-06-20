import React from "react";
import { Button, Col, Row, TextField } from "components/Common/Base";
import Collapse from "components/Features/Dashboard/Faq/Collapse";
import BitcoinBusinessCard from "components/Common/BitcoinBusinessCard";
import CryptoCurrencyCard from "components/Common/CryptoCurrencyCard";

import EmailBox from "assets/images/icons/emailbox.svg";

const faqs = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscin ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question: "Lorem ipsum dolor sit amet, sed do eiusmod ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscin ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question: "Lorem ipsum dolor sit amet, sed do eiusmod ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscin ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question: "Lorem ipsum dolor sit amet, sed do eiusmod ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscin ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
  {
    question: "Lorem ipsum dolor sit amet, sed do eiusmod ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?",
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col 2xl:flex-row">
      <div className="w-full mb-4 2xl:mb-0">
        <div className="mb-7 lg:mb-11 leading-normal">
          <p className="font-semibold text-lg lg:text-[22px] mb-1">
            Frequently Asked Questions
          </p>
          <p className="text-[11px] lg:text-[17px] opacity-30">
            Listed below answers to the most frequently asked questions by our
            members
          </p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-[14px] lg:mb-4">
              <Collapse {...faq} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full 2xl:max-w-[697px] 2xl:flex-shrink-0 2xl:pl-5">
        <div className="bg-[#FDFDFD] dark:bg-[#2F3558] rounded-2xl p-6 lg:p-9 mb-4 lg:mb-5">
          <Row spacing={window.innerWidth > 1024 ? 6 : 4}>
            <Col sm={12} lg={6}>
              <TextField color="transparent" placeholder="Your Name" />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                type="email"
                color="transparent"
                placeholder="Email Address"
              />
            </Col>
            <Col sm={12} lg={12}>
              <TextField
                color="transparent"
                placeholder="Explain what you need help with"
                multiple
              />
            </Col>
            <Col sm={12}>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div className="flex items-center mb-5 lg:mb-0">
                  <img
                    src={EmailBox}
                    className="w-12 lg:w-auto h-12 lg:h-auto mr-[18px] lg:mr-[22px]"
                    alt=""
                  />
                  <div className="font-light text-xs lg:text-[17px]">
                    <p className="mb-1.5">Email</p>
                    <p className="font-normal opacity-70">
                      mist4227s@gmail.com
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <div className="flex items-center -mx-2 lg:mx-0">
                    <div className="w-1/2 lg:w-auto px-2 lg:px-0">
                      <Button
                        className="!w-full lg:!w-[103px] mr-0 lg:mr-3"
                        color="secondary"
                        size="large"
                      >
                        Reset
                      </Button>
                    </div>
                    <div className="w-1/2 lg:w-auto px-2 lg:px-0">
                      <Button className="!w-full lg:!w-30" size="large">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="flex flex-wrap -m-1.5 lg:m-0">
          <div className="w-1/2 lg:w-full lg:bg-[#2F3558] rounded-2xl p-1.5 lg:p-6 lg:mb-5">
            <BitcoinBusinessCard className="h-25 lg:h-[190px]" />
          </div>
          <div className="w-1/2 lg:w-full lg:bg-[#2F3558] rounded-2xl p-1.5 lg:p-6 lg:mb-5">
            <CryptoCurrencyCard className="h-25 lg:h-[190px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
