import React from "react";
import { BatchRequestUserStyles } from "./BatchTransferAdmin.styles";
import face from "../../../public/face.png";
import Image from "next/image";
const BatchTransferAdmin = ({ setStep }) => {
  return (
    <BatchRequestUserStyles>
      <div className="imageWrapper">
        <Image src={face} alt="face" />
      </div>
      There are no transfer requests from your side. Create one!{" "}
      <div className="addTransfer" onClick={() => setStep(false)}>
        + Batch Transfer
      </div>
    </BatchRequestUserStyles>
  );
};

export default BatchTransferAdmin;
