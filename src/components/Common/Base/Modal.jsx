import React, { useEffect } from "react";

const Modal = ({ show, onClose, className = "", children }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) onClose();
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflowY = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [show]);

  return (
    <>
      {show && (
        <div className="w-screen h-screen fixed top-0 left-0 z-50 p-6 overflow-y-auto">
          <div
            className="w-full h-full fixed top-0 left-0 bg-black opacity-50"
            onClick={onClose}
          />
          <div className="w-full h-full flex justify-center items-center py-6">
            <div
              className={`w-full relative z-10 max-w-modal bg-white rounded-[17px] lg:rounded-[30px] px-8 py-7 lg:p-10 ${className}`}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
