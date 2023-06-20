import React from "react";
import PhoneIcon from "assets/images/icons/phone.svg";
import PaperPlaneIcon from "assets/images/icons/paper-plane.svg";
import MarkerIcon from "assets/images/icons/marker.svg";

const Contacts = () => {
  const contactInfo = [
    {
      id: "phone",
      value: ["+01 234 567 88", "+01 234 567 88"],
      icon: PhoneIcon,
    },
    {
      id: "email",
      value: "Steller@ledger.com",
      icon: PaperPlaneIcon,
    },
    {
      id: "address",
      value: "New York, NY 10012 US",
      icon: MarkerIcon,
    },
  ];

  return (
    <div className="text-black dark:text-white">
      <span className="flex font-semibold text-lg leading-6 mb-6">
        Contacts
      </span>
      <ul>
        {contactInfo.map((contact) => (
          <li key={contact.id} className="flex items-center mb-5">
            <img src={contact.icon} className="mr-[18px]" />
            <p className="text-[15px] lg:text-base leading-4 opacity-70">
              {typeof contact.value === "string" ? (
                <span>{contact.value}</span>
              ) : (
                contact.value.map((item, index) => (
                  <span key={index}>
                    {index !== 0 && <span className="mx-5">|</span>}
                    <span>{item}</span>
                  </span>
                ))
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
