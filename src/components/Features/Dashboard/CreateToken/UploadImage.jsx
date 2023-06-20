import React, { useRef, useState } from "react";
import { Button } from "components/Common/Base";
import Image from "assets/images/icons/image.svg";
import Token from "assets/images/token.png";

const UploadImage = () => {
  const fileRef = useRef();
  const [file, setFile] = useState(null);
  const handleClick = () => fileRef.current.click();
  const handleChange = (e) => setFile(e.target.files[0]);

  return (
    <div className="flex items-center">
      <div className="w-42 lg:w-45 h-42 lg:h-45 rounded-xl p-2.5 bg-[#373D65] mr-7 lg:mr-8">
        <img
          src={file ? URL.createObjectURL(file) : Token}
          className="w-full h-full rounded-lg object-cover object-center"
          alt=""
        />
      </div>
      <Button
        className="w-[135px] lg:w-[145px] h-42px lg:h-[45px]"
        color="info"
        onClick={handleClick}
      >
        <img src={Image} />
        <span className="text-xxs lg:text-xs ml-3">Upload Image</span>
      </Button>
      <input
        type="file"
        ref={fileRef}
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadImage;
