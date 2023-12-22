import React from "react";
import Image from "next/image";
import back from "../../../public/back.png";
import SideNav from "@/components/SideNav";
import PageHeader from "@/components/PageHeader";
import TabSet from "@/components/TabSet";
import GeneralInfoTab from "@/components/GeneralInfoTab";
import NFTaccessTab from "@/components/NFTaccessTab";
import EmissaryRolesTab from "@/components/EmissaryRolesTab";

function EmissarySettings() {
  const tabs = [
    {
      label: "General Info & Whitelabel",
      content: (
        <>
          <GeneralInfoTab />
        </>
      ),
    },

    {
      label: "NFT Access",
      content: (
        <>
          <NFTaccessTab />
        </>
      ),
    },
    {
      label: "Emissary Roles",
      content: (
        <>
          <EmissaryRolesTab />
        </>
      ),
    },
  ];
  return (
    <>
      <SideNav />
      <PageHeader>
        <Image src={back} alt="back" />
        Emissary Settings
      </PageHeader>
      <TabSet tabs={tabs} />
    </>
  );
}

export default EmissarySettings;
