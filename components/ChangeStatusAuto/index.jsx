import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button/Button";
import { AutoStatusModal } from "./ChangeStatusAuto.styles";

const ChangeStatusAuto = ({ setModal, setHandelForm, setButtonValue }) => {
  useEffect(() => {
    setTimeout(() => {
      setHandelForm(3);
      setButtonValue("Paid");
    }, 5000);
  }, []);

  return (
    <AutoStatusModal>
      <div className="holder">
        <span className="icon" onClick={() => setModal(false)}>
          <RxCross2 size="22" />
        </span>
        <strong className="title">Change to paid status automatically?</strong>
        <p>
          You are now proceeding to the payout process for this transfer
          request. Choose “yes” if you want the status of this transfer request
          to change automatically into “paid”. Or else, you can choose to do
          this manually.
        </p>
      </div>
      <div className="btn-holder">
        <Button variant="outline" onClick={() => setModal(false)}>
          No
        </Button>
        <Button variant="primary" onClick={() => setHandelForm(2)}>
          Yes
        </Button>
      </div>
    </AutoStatusModal>
  );
};

export default ChangeStatusAuto;
