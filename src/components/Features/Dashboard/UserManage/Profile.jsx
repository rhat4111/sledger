import React, { useState } from "react";
import { Button, Col, Row, TextField } from "components/Common/Base";
import ResetPassword from "components/Modal/ResetPassword";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => setIsOpen(!isOpen);
  const [profileInfo, setProfileInfo] = useState({
    firstName: "Khalid",
    lastName: "Saied Abdelmonem",
    email: "Mist4227s@gmail.com",
    password: "password",
    phone: "+20  12 7463 8273 43",
  });
  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <div className="mb-10 lg:mb-20">
          <Row spacing={window.innerWidth > 1024 ? 10 : 6}>
            <Col sm={12} lg={6}>
              <TextField
                name="firstName"
                value={profileInfo.firstName}
                onChange={handleChange}
                label="First Name"
                color="transparent"
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                name="lastName"
                value={profileInfo.lastName}
                onChange={handleChange}
                label="Last Name"
                color="transparent"
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                type="email"
                name="email"
                value={profileInfo.email}
                onChange={handleChange}
                label="Account Email"
                color="transparent"
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                label="Password"
                value="* * * * * * * *"
                readOnly
                color="transparent"
                className="!bg-transparent"
                adorment={
                  <button
                    className="text-xs lg:text-[17px] text-lightprimary flex-shrink-0 mr-6 lg:mr-8 opacity-100 hover:opacity-60 transition-all"
                    onClick={handleToggleModal}
                  >
                    Change <span className="hidden lg:inline">Password</span>
                  </button>
                }
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                name="phone"
                value={profileInfo.phone}
                onChange={handleChange}
                color="transparent"
                label="Phone Number"
                adorment={
                  <p className="text-xs lg:text-[17px] text-lightprimary flex-shrink-0 mr-6 lg:mr-8">
                    <span className="hidden lg:inline">Connect Number</span>
                    <span className="inline lg:hidden">Change</span>
                  </p>
                }
              />
            </Col>
          </Row>
        </div>
        <div className="flex justify-end">
          <Button size="large" className="!w-full lg:!w-[298px]">
            Save Current Changes
          </Button>
        </div>
      </div>
      <ResetPassword show={isOpen} onClose={handleToggleModal} />
    </>
  );
};

export default Profile;
