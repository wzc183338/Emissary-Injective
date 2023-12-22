import BatchTransferUser from "@/components/BatchTransferUser/BatchTransferUser";
import PageHeader from "@/components/PageHeader";
import React from "react";
import add from "../../../../public/add.png";
import Image from "next/image";
import SideNavUser from "@/components/SideNavUser";

const index = () => {
  return (
    <>
      <SideNavUser />
      <PageHeader>
        Batch Transfer
        {/* <Image src={add} alt="Add" /> */}
      </PageHeader>
      <BatchTransferUser />
    </>
  );
};

export default index;
