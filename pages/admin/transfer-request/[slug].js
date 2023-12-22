import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { FiArrowLeftCircle } from "react-icons/fi";
import SideNav from "@/components/SideNav";
import TransferRequestAdmin from "@/components/TransferRequestAdmin";
import ProcessingTransfer from "@/components/ProcessingTransfer";
import TransferPayoutCompleted from "@/components/TransferPayoutCompleted";
import { useRouter } from "next/router";

const TransferDetail = ({ param }) => {
  // const router = useRouter();
  // console.log(router.query);
  const [handelForm, setHandelForm] = useState(1);
  return (
    <>
      <SideNav />
      <PageHeader>
        <FiArrowLeftCircle />
        Transfer Requests
      </PageHeader>
      {handelForm == 1 && (
        <TransferRequestAdmin setHandelForm={setHandelForm} />
      )}
      {/* Proccessing Componets  */}
      {handelForm == 2 && <ProcessingTransfer />}

      {/* TransferPayoutCompleted Componets  */}
      {handelForm == 3 && (
        <TransferPayoutCompleted setHandelForm={setHandelForm} />
      )}
    </>
  );
};

export default TransferDetail;
