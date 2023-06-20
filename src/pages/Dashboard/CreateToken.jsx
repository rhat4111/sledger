import React, { useState } from "react";
import { Button, Col, Row, TextField } from "components/Common/Base";
import UploadImage from "components/Features/Dashboard/CreateToken/UploadImage";

const CreateToken = () => {
  const [token, setToken] = useState({
    code: "",
    address: "",
    distribuitor: "",
    domain: "",
  });
  const handleChange = (e) => {
    setToken({ ...token, [e.target.name]: e.target.value });
  };

  const rules = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu",
  ];

  return (
    <div>
      <div className="mb-8 lg:mb-6">
        <p className="font-semibold text-lg lg:text-[22px] leading-normal mb-0.5 lg:mb-1">
          Create Token
        </p>
        <p className="text-[11px] lg:text-[17px] opacity-30">
          Check our crypto market for latest updates
        </p>
      </div>
      <div className="mb-10">
        <Row spacing={12}>
          <Col sm={12} lg={6}>
            <div className="mb-9">
              <UploadImage />
            </div>
            <TextField
              name="code"
              color="transparent"
              value={token.code}
              onChange={handleChange}
              label="Asset Code"
              placeholder="Asset Code"
              className="mb-5 lg:mb-7"
            />
            <TextField
              name="address"
              color="transparent"
              value={token.address}
              onChange={handleChange}
              label="Address"
              placeholder="Address"
              className="mb-5 lg:mb-7"
            />
            <TextField
              name="distribuitor"
              color="transparent"
              value={token.distribuitor}
              onChange={handleChange}
              label="Distribuitor"
              placeholder="Distribuitor"
              className="mb-5 lg:mb-7"
            />
            <TextField
              name="domain"
              color="transparent"
              value={token.domain}
              onChange={handleChange}
              label="Home Domain"
              placeholder="Home Domain"
            />
          </Col>
          <Col sm={12} lg={6}>
            <div className="rounded-lg bg-[#ECECEC] dark:bg-[#434A7750] px-6 lg:px-12 py-4 lg:py-6">
              <p className="w-full max-w-[396px] font-semibold text-xl lg:text-[51px] leading-[25px] lg:leading-[55px] mb-[14px] lg:mb-[30px] tracking-tighter">
                Rules for issuing new asset
              </p>
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-center mb-2.5 lg:mb-[30px]"
                >
                  <span className="flex justify-center items-center flex-shrink-0 w-[22px] lg:w-12 h-[22px] lg:h-12 rounded lg:rounded-lg text-[8px] lg:text-lg bg-gradient-to-l from-button-gradient-from to-button-gradient-to mr-3 lg:mr-[26px] text-white">
                    {index + 1}
                  </span>
                  <span className="text-xxs lg:text-lg leading-[13px] lg:leading-normal">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
      <div className="rounded-lg bg-[#434A7775] dark:bg-[#434A7750] px-5 lg:px-12 py-4 lg:py-6 lg:pb-9 leading-normal mb-10 lg:mb-14 text-white">
        <p className="font-semibold text-lg lg:text-[22px] mb-4 lg:mb-8">
          Rules for issuing new asset
        </p>
        <p className="text-xs lg:text-[19px] opacity-70">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiexplicabo. Nemo enim
          ipsam volup tatem quia voluptas sit aspernatur aut odit aut fugit, sed
          quia consequuntur ma giur aut odit aut fugit, sed quia consequuntur ma
          gni dolores eos qui ras ni Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem ap
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiexplicabo. Nemo enim
          ipsam volup tatem quia voluptas sit aspernatur aut odit aut fugit, sed
          quia consequuntur ma giur aut odit aut fugi
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <Button
          size="large"
          className="mb-3 lg:mb-0 !w-full lg:!w-[298px]"
          color="danger"
        >
          Remove Stellar Account
        </Button>
        <Button size="large" className="!w-full lg:!w-[298px]">
          Submit Token
        </Button>
      </div>
    </div>
  );
};

export default CreateToken;
