import PageHeader from "@/components/PageHeader";
import SideNav from "@/components/SideNav";
import React from "react";
import back from "../../../../public/back.png";
import Image from "next/image";
import ProgramCreation from "@/components/program/ProgramAdmin";

const index = () => {
  return (
    <div>
      <SideNav />
      <PageHeader>
        {" "}
        <Image src={back} alt="back" /> Programs
      </PageHeader>
      <ProgramCreation />
    </div>
  );
};

export default index;
