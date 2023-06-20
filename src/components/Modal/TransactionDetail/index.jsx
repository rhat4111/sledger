import React from "react";
import { Modal } from "components/Common/Base";
import Pending from "./Pending";
import Sent from "./Sent";

const TransactionDetail = ({ onClose, show, type }) => {
  return (
    <Modal show={show} onClose={onClose} className="max-w-[690px]">
      {type === `pending` ? <Pending onClose={onClose} /> : <Sent onClose={onClose} />}
    </Modal>
  );
};

export default TransactionDetail;
