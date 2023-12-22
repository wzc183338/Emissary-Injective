import React, { useState } from "react";
import Image from "next/image";
import ProcessImg from "../../../public/process.gif";
import { ProcessBlock } from "./ProcessingTransfer.styles";

const ProcessingTransfer = () => {
  return (
    <ProcessBlock>
      <div className="holder">
        <div className="img-box">
          <Image src={ProcessImg} alt="img description" />
        </div>
        <strong className="title">Processing transfer request payout...</strong>
        <p>
          Sign and confirm the transaction via the wallet popup. Do not close
          the window during this process
        </p>
      </div>
    </ProcessBlock>
  );
};

export default ProcessingTransfer;
