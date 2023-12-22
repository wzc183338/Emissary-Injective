import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SideNav from "@/components/SideNav";
import Image from "next/image";
import back from "../../../../public/back.png";
import add from "../../../../public/add.png";
import BatchTransferAdmin from "@/components/BatchTransferAdmin/BatchTransferAdmin";
import BatchTransferRequest from "@/components/BatchTransferAdmin/BatchTransferRequest/BatchTransferRequest";

const Index = () => {
  const [step, setStep] = useState(true);
  return (
    <>
      <SideNav />
      <PageHeader>
        {step ? (
          <>
            <Image src={add} alt="add" />
            Batch Transfer
          </>
        ) : (
          <>
            <Image src={back} alt="back" />
            Batch Transfer
          </>
        )}
      </PageHeader>
      {step == true ? (
        <BatchTransferAdmin setStep={setStep} />
      ) : (
        <BatchTransferRequest />
      )}
    </>
  );
};

export default Index;
