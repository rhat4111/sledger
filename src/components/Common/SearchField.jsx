import React from "react";
import SearchIcon from "assets/images/icons/search.svg";

const SearchField = ({ value, onChange, placeholder }) => {
  const handleChange = (e) => onChange(e);

  return (
    <div className="w-full 2xl:max-w-[400px] h-12 lg:h-15 flex items-center bg-graylight dark:bg-[#2F355F] rounded-lg">
      <img
        src={SearchIcon}
        className="ml-5 lg:ml-7 flex-shrink-0 invert dark:invert-0"
        alt=""
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full font-light text-[13px] lg:text-lg bg-transparent outline-none px-7 lg:px-9"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchField;
