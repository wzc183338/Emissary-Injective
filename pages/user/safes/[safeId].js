import React from "react";
import Image from "next/image";
import back from "../../../../public/back.png";
import SideNav from "@/components/SideNav";
import PageHeader from "@/components/PageHeader";
import SafesPageContent from "@/components/SafesPageContent";
import SideNavUser from "@/components/SideNavUser";

function UserSafeDetail() {
  return (
    <>
      <SideNavUser />
      <PageHeader>
        <Image src={back} alt="back" />
        Safes
      </PageHeader>
      <SafesPageContent />
    </>
  );
}

export default UserSafeDetail;
