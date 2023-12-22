import React from "react";
import Image from "next/image";
import back from "../../../../public/back.png";
import SideNav from "@/components/SideNav";
import PageHeader from "@/components/PageHeader";
import SafesPageContent from "@/components/SafesPageContent";
import SideNavUser from "@/components/SideNavUser";
import UserSafeRequests from "@/components/UserSafe/UserSafeRequests";

function Safes() {
  return (
    <>
      <SideNavUser />
      <PageHeader>
        <Image src={back} alt="back" />
        Safes
      </PageHeader>
      <UserSafeRequests />
    </>
  );
}

export default Safes;
