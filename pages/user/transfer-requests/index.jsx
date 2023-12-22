import PageHeader from "@/components/PageHeader";
import TransferUserList from "@/components/transferRequestUser/TransferUserListComp/TransferUserList";
import Image from "next/image";
import React from "react";
import add from "../../../../public/add.png";
import SideNavUser from "@/components/SideNavUser";

const index = () => {
  return (
    <>
      <SideNavUser />
      <PageHeader>
        Transfer Requests <Image src={add} alt="Add" />
      </PageHeader>
      <TransferUserList />
    </>
  );
};

export default index;
