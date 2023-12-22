import React, { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import TransferRequest from "@/components/transferRequestUser/TransferRequest";
import AddRequestUser from "@/components/transferRequestUser/AddRequest/AddRequestUser";
import Image from "next/image";
import back from "../../../../public/back.png";
import add from "../../../../public/add.png";
import SideNavUser from "@/components/SideNavUser";
import Status from "@/components/StatusComponent/Status";

const Index = () => {
  const [addReq, setAddReq] = useState(true);

  function handelClick(value) {
    console.log(value);
  }
  return (
    <>
      <SideNavUser />
      <PageHeader>
        {addReq == true ? (
          <>
            Transfer Requests
            <Image src={add} alt="add" />
          </>
        ) : (
          <>
            <Image src={back} alt="back" />
            Transfer Requests
          </>
        )}
      </PageHeader>
      {addReq ? <AddRequestUser setAddReq={setAddReq} /> : <TransferRequest />}
      {/* <Status handelChange={handelClick} /> */}
    </>
  );
};

export default Index;
