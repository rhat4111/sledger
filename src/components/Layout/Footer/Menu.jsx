import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const links = [
    {
      label: "Products",
      children: [
        { label: "Angular", path: "/" },
        { label: "React", path: "/" },
        { label: "Vue", path: "/" },
        { label: "Laravel", path: "/" },
      ],
    },
    {
      label: "Useful Links",
      children: [
        { label: "Terms and Conditions", path: "/terms" },
        { label: "Settings", path: "/" },
        { label: "Orders", path: "/" },
        { label: "Help", path: "/" },
      ],
    },
  ];
  return (
    <div className="flex mx-0 lg:mx-5 2xl:mx-0 mb-6 lg:mb-0">
      {links.map((link, index) => (
        <div
          className="w-max mr-14 lg:mr-16 2xl:mr-40 last:mr-0"
          key={index}
        >
          <span className="flex font-semibold text-lg leading-6 mb-6 lg:mb-10">
            {link.label}
          </span>
          <ul className="text-[17px] leading-6 opacity-70">
            {link.children.map((children, cIndex) => (
              <li key={cIndex} className="cursor-pointer mb-3.5 lg:mb-11">
                <Link to={children.path}>{children.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
