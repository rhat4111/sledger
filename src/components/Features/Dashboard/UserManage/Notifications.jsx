import React, { useState } from "react";
import { Button, CheckBox } from "components/Common/Base";

const Notifications = () => {
  const [siteEmail, setSiteEmail] = useState(true);
  const [newTransactionEmail, setNewTransactionEmail] = useState(true);
  const [smallPaymentEmail, setSmallPaymentEmail] = useState(false);
  const [pendingPaymentEmail, setPendingPaymentEmail] = useState(true);

  return (
    <div>
      <div className="mb-5 lg:mb-8">
        <CheckBox
          label="Important Email Updates From StellarLedger"
          checked={siteEmail}
          color="dark"
          onChange={() => setSiteEmail(!siteEmail)}
        />
      </div>
      <div className="mb-5 lg:mb-8">
        <CheckBox
          label="New Transactions Email Updates"
          checked={newTransactionEmail}
          color="dark"
          onChange={() => setNewTransactionEmail(!newTransactionEmail)}
        />
      </div>
      <div className="mb-5 lg:mb-8">
        <CheckBox
          label="Email Updates and Push Notifications for Small Payments"
          checked={smallPaymentEmail}
          color="dark"
          onChange={() => setSmallPaymentEmail(!smallPaymentEmail)}
        />
      </div>
      <div className="mb-20">
        <CheckBox
          label="Alerts and Notifications for New Pending Payments"
          checked={pendingPaymentEmail}
          color="dark"
          onChange={() => setPendingPaymentEmail(!pendingPaymentEmail)}
        />
      </div>
      <div className="flex justify-end">
        <Button size="large" className="!w-full lg:!w-[298px]">Save Current Changes</Button>
      </div>
    </div>
  );
};

export default Notifications;
